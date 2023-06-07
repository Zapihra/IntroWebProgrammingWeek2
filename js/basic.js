const buttonAdd = document.getElementById("submit-data");
const buttonDel = document.getElementById("empty-table")

buttonAdd.addEventListener("click", () => {
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const address = document.getElementById("input-address").value;
    const admin = document.getElementById("input-admin").checked;

    const tableRow = document.createElement("tr");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");
    const tableData3 = document.createElement("td");
    const tableData4 = document.createElement("td");

    tableData1.appendChild(document.createTextNode(username));
    tableData2.appendChild(document.createTextNode(email));
    tableData3.appendChild(document.createTextNode(address));

    if (admin == true) {
        tableData4.appendChild(document.createTextNode("X"));
    }
    else {
        tableData4.appendChild(document.createTextNode("-"));
    }
    
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);

    document.getElementById("table").appendChild(tableRow);
})

buttonDel.addEventListener("click", () => {
    const children = document.getElementById("table");    
    const list = children.querySelectorAll("tr");

    for (let i = 0; list.length - 1 > i; i++) {
        children.deleteRow(1);
    }

})