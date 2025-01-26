let amount = document.getElementById("amount");
let itemname = document.getElementById("itemname");
let input = document.getElementById("input");
let quantity = document.getElementById("quantity");
let totaloutput = document.getElementById("totaloutput");


function add() {
    if (itemname.value === '' || input.value === '' || quantity.value === '') {
        alert("Enter all the data");
    } else {
        let total_amount = parseInt(amount.textContent) + parseInt(input.value);
        amount.textContent = total_amount;

        // Create a new div for the transaction
        let outputid = document.createElement("div");
        outputid.style.backgroundColor = "green";
        outputid.style.color = "white";
        outputid.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
        outputid.style.borderRadius = "10px";
        outputid.style.padding = "10px";
        outputid.style.margin = "10px";

        // Create new elements for transaction details
        let outputitemname = document.createElement("h3");
        let outputamount = document.createElement("h3");
        let outputquantity = document.createElement("h3");

        outputitemname.textContent = "Item Name: " + itemname.value;
        outputamount.textContent = "Added Amount: " + input.value;
        outputquantity.textContent = "Quantity: " + quantity.value;

        // Append details to the output div
        outputid.appendChild(outputitemname);
        outputid.appendChild(outputamount);
        outputid.appendChild(outputquantity);

        // Append output div to totaloutput section
        totaloutput.appendChild(outputid);

        // Clear input fields
        itemname.value = "";
        input.value = "";
        quantity.value = "";
        
    }
    
}

function subtract() {
    let total_amount = parseInt(amount.textContent) - parseInt(input.value);
    if (itemname.value === '' || input.value === '' || quantity.value === '') {
        alert("Enter all the data");
    } else if (total_amount >= 0) {
        amount.textContent = total_amount;

        // Create a new div for the transaction
        let outputid = document.createElement("div");
        outputid.style.backgroundColor = "red";
        outputid.style.color = "white";
        outputid.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
        outputid.style.borderRadius = "10px";
        outputid.style.padding = "10px";
        outputid.style.margin = "10px";

        // Create new elements for transaction details
        let outputitemname = document.createElement("p");
        let outputamount = document.createElement("p");
        let outputquantity = document.createElement("p");

        outputitemname.textContent = "Item Name: " + itemname.value;
        outputamount.textContent = "Subtracted Amount: " + input.value;
        outputquantity.textContent = "Quantity: " + quantity.value;

        // Append details to the output div
        outputid.appendChild(outputitemname);
        outputid.appendChild(outputamount);
        outputid.appendChild(outputquantity);

        // Append output div to totaloutput section
        totaloutput.appendChild(outputid);

        // Clear input fields
        itemname.value = "";
        input.value = "";
        quantity.value = "";
    } else {
        alert("Amount is ZERO");
    }
}

function toggleForm() {
    // let formContainer = document.getElementById("formContainer");
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block"; // Show the form
    } else {
        formContainer.style.display = "none"; // Hide the form if clicked again
    }
}
