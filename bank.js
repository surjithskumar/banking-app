//function for deposit money and display
let depbtn = document.getElementById("depositbtn");
depbtn.addEventListener("click", () => {
  let amountDeposit = parseFloat(document.getElementById("amountdep").value); // Convert to number(by parsefloat)
  let accNumber = document.getElementById("accnum").value;

  // Check deposit validity
  if (!amountDeposit || amountDeposit <= 0) {
    document.getElementById("depositdisplay").innerText = 'Please enter a valid amount';
    return;
  }

  // Retrieve existing account details from localStorage
  let accountDetails = JSON.parse(localStorage.getItem(accNumber));

  if (accountDetails) {
    // displayname
    document.getElementById("name").innerText=`${accountDetails.username}`

    accountDetails.balance = parseFloat(accountDetails.balance) || 0; // Convert existing balance to number
    // Update balance
    accountDetails.balance += amountDeposit;
    /////////////
    alert(`your current deposit:${amountDeposit}`)
          alert(`your new balance:${accountDetails.balance}`)

    // Save updated account details back to localStorage
    localStorage.setItem(accNumber, JSON.stringify(accountDetails));
    document.getElementById("depositdisplay").innerText = `Deposited: $${amountDeposit}. New Balance: $${accountDetails.balance}.`;
    // clear form
    document.getElementById("amountdep").value="";
    document.getElementById("accnum").value="";
  } else {
    document.getElementById("depositdisplay").innerText = "Account number not found.";
  }
});



// Function for withdrawal and display
let withbtn = document.getElementById("withdrawbtn");
withbtn.addEventListener("click", () => {
    let withdrawAmount = parseFloat(document.getElementById("withdraw").value); // Parse to float
    let withdrawAccnumber = document.getElementById("withdrawacc").value;

    // Check validity of amount
    if (!withdrawAmount || withdrawAmount <= 0) {
        document.getElementById("withdrawdisplay").innerText = 'Please enter a valid amount';
        return; // Return early if the amount is invalid
    }

    // Get localStorage data
    let accountDetails = JSON.parse(localStorage.getItem(withdrawAccnumber));

    if (accountDetails) {
        accountDetails.balance = parseFloat(accountDetails.balance);
        
        // Check if there are sufficient funds
        if (accountDetails.balance < withdrawAmount) {
            document.getElementById("withdrawdisplay").innerText = "Insufficient balance.";
                  // Clear form  beacause insufficient funds
        document.getElementById("withdraw").value = ""; 
        document.getElementById("withdrawacc").value = "";
        
            return; // Return early if insufficient funds
        
        }
        // Update balance
        accountDetails.balance -= withdrawAmount;
        // Set back JSON
        localStorage.setItem(withdrawAccnumber, JSON.stringify(accountDetails));
        
        document.getElementById("withdrawdisplay").innerText = `Withdrawn amount: $${withdrawAmount}. New Balance: $${accountDetails.balance}.`;

        // Clear form only after successful withdrawal
        document.getElementById("withdraw").value = ""; 
        document.getElementById("withdrawacc").value = "";
    } else {
        document.getElementById("withdrawdisplay").innerText = 'Account Number Not Found';
    }
});


// redirect to home
function logout(){
  window.location.href="./index.html"
}