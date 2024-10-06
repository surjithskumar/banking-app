// register form
function register(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  let accDetails = {
  username: document.getElementById("username").value,
  accountnumber: document.getElementById("accountnumber").value,
  password: document.getElementById("password").value,
 };

// check working
console.log(accDetails);

// Check if account number already exists in localStorage
if (localStorage.getItem(accDetails.accountnumber)) {
 alert("Sorry, this account already exists");
  
  //clear input field added...optional
  document.getElementById("username").value = "";
  document.getElementById("accountnumber").value = "";
  document.getElementById("password").value = "";
 } 
else {
  localStorage.setItem(accDetails.accountnumber, JSON.stringify(accDetails));
  alert("Welcome to MyBank");
  window.location="./login.html"
 }
}        
// Attach the register function to the form submission
 document.getElementById("registerForm").addEventListener("submit", register);