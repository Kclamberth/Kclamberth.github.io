//Hamburger menu function (JAVASCRIPT REQUIREMENT)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

function toggleNav() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
}

navToggle.addEventListener('click', toggleNav);

//Form validate Function (REQUIRED FOR FORM POINTS)
function FormValidate(event) {
  event.preventDefault();

  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var company = document.getElementById("Company").value;
  var reason = document.getElementById("Reason").value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }
  if (company == "") {
    alert("Please enter your Company.");
    return false;
  }
  if (reason == "") {
    alert("Please enter the reason for your contact.");
    return false;
  }
  if (email == "") {
    alert("Please enter your email address.");
    return false;
  } else if (email.indexOf("@") == -1) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Thank you for contacting me, I will reach out shortly.")
  return true;
}