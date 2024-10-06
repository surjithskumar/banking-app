// Login functionality
let loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", () => {
    let accountnumber = document.getElementById("acc").value; 
    let password = document.getElementById('pass').value; 

    // Checking localStorage for account number
    let accountDetails = JSON.parse(localStorage.getItem(accountnumber));
    console.log(accountDetails); //check working

    if (accountDetails && accountDetails.password === password) {
        alert(`${accountDetails.username} Welcome To MY BANK`);
        window.location = "./bank.html"; // Redirect to bank page
        
    } else {
        alert("Invalid username or password");
        // clear input
        document.getElementById("acc").value = ""; 
        document.getElementById("pass").value = ""; 
    }
});