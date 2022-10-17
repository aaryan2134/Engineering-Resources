function getAndUpdate() {
    //Extracting the title of TODO list entered by the user.
    let tit = document.getElementById('title').value;
    //Extracting the description of the TODO list entered by the user.
    let desc = document.getElementById('description').value;
    //Timestamp for the created element.
    let time = new Date();
    let date = time.toLocaleDateString();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    if (hrs < 10) {
      hrs = '0' + hrs;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
    let timestr = hrs + ' : ' + mins + ' : ' + secs + " on " + date;

    //If the key = "itemsJson" contains a null value, then push the data 
    //of title and description into a new empty array.
    if (localStorage.getItem('itemsJson') == null)
    {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc, timestr]);

      //Set the items in the array as the value of key = "itemsJson"
      //in the form of a string in the local storage.
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }

    //If the key = "itemsJson" does not contain a null value, that is 
    //if TODO list already has some values then this piece of code will 
    //be executed.
    else
    {
      //The already exsiting local storage is in the form of a string.
      itemJsonArrayStr = localStorage.getItem('itemsJson')

      //Parsing the string to an array.
      itemJsonArray = JSON.parse(itemJsonArrayStr);

      //Pushing the new title and description in the array.
      itemJsonArray.push([tit, desc, timestr]);

      //Set the items in the array as the value of key = "itemsJson"
      //in the form of a string in the local storage.
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }

    //Updating the list using update function.
    update();
  }

  function update() {
    if (localStorage.getItem('itemsJson') == null || localStorage.getItem('itemsJson') == []) 
    {
      document.getElementsByTagName('h4').value = "Your list is empty. Start adding.";
    }
    //If local storage with key = "itemsJson" is empty, set the 
    //empty array in it's storage.
    if (localStorage.getItem('itemsJson') == null)
    {
      document.getElementsByTagName('h4').value = "Your list is empty. Start adding.";
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }

    //If local storage with key = "itemsJson" is not empty, parse the 
    //array in the form of string in the storage.
    else 
    {
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    //Adding items to the table
    let tableBody = document.getElementById("tableBody");
    let str = "";

    //Each element in array will have 3 things, title, description and timestamp.
    //We can add content in html format using backticks.
    itemJsonArray.forEach((element, index) => {
      str += `
          <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td> 
          <td>${element[2]}</td>
          <td><button class="btn btn-sm btn-outline-dark" onclick="deleted(${index})">Delete</button></td> 
          </tr>`;
    });
    tableBody.innerHTML = str;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }

  //This gives the element whose ID="add", in our case, it's the button.
  let add = document.getElementById("add");

  //Adding the event when we "click" on ADD button
  add.addEventListener("click", getAndUpdate);

  //To display all the existing items in the list we need to call update function.
  update();

  function deleted(itemIndex) 
  {
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);

    // Delete itemIndex element from the array which is at the position 
    //equal to itemIndex. Also, delete 1 element from that position.
    itemJsonArray.splice(itemIndex, 1);

    //Again parsing the array to a string.
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

    //Calling update function to show the changes.
    update();

  }

  function clearStorage()
 {
    //Pop up for confirmation to clear your TODO list.
    if (confirm("Do you areally want to clear?")) {
      //Clearing the local storage.
      localStorage.clear();
      //Reflecting the changes.
      update();
    }
  }