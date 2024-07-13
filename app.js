let namefield = document.getElementById("namefield");
let contact = document.getElementById("contact");
let pass = document.getElementById("pass");
let passcheck = document.getElementById("passcheck");

function checkData() {
  let contactValue = contact.value.trim();

  if (contactValue.length !== 10) {
    alert("Phone number should be of length 10!");
    return false;
  } else if (isNaN(contactValue)) {
    alert("Enter a valid phone number!");
    return false;
  }

  if (pass.value !== passcheck.value) {
    alert("Please enter the same password in both fields!");
    return false;
  }

  return true;
}
