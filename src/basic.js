const buttonAdd = document.getElementById("submit-data");
const buttonDel = document.getElementById("empty-table");

buttonAdd.addEventListener("click", () => {
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const address = document.getElementById("input-address").value;
    const admin = document.getElementById("input-admin").checked;

    const children = document.getElementById("table");    
    const list = children.querySelectorAll("tr");
    const isFound = []; //https://www.w3schools.com/jsref/met_table_deleterow.asp

    for (let i = 0; i < list.length; i++) {
        const name = list[i].querySelector("td");
        
        if(name == null) {
            continue;
        }
        if(name.textContent == username) {
            isFound.x = true;
            isFound.i = i;
            break;
        }
        else{
            isFound.x = false;
        }
    }

    if (isFound.x == true) {
        const row = children.getElementsByTagName("tr")[isFound.i]
            .getElementsByTagName("td");
        row[1].innerHTML = email;
        row[2].innerHTML = address;
        
        if (admin == true) {
            row[3].innerHTML = "X";
        }
        else {
            row[3].innerHTML = "-";
        }
    }
    else {
        //https://www.w3schools.com/jsref/met_table_insertrow.asp

        const tableRow = table.insertRow(-1);
        //const tableRow = document.createElement("tr");
        const tableData1 = tableRow.insertCell(0);
        const tableData2 = tableRow.insertCell(1);
        const tableData3 = tableRow.insertCell(2);
        const tableData4 = tableRow.insertCell(3);

        console.log(tableData1);
        tableData1.innerHTML = username;
        tableData2.innerHTML = email;
        tableData3.innerHTML = address;

        if (admin == true) {
            tableData4.innerHTML = "X";
        }
        else {
            tableData4.innerHTML = "-";
        }
    }
})

buttonDel.addEventListener("click", () => {
    const children = document.getElementById("table");    
    const list = children.querySelectorAll("tr");

    for (let i = 0; list.length - 1 > i; i++) {

        //https://www.w3schools.com/jsref/met_table_deleterow.asp
        children.deleteRow(1);
    }
})