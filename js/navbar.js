//opens and closes a sidebar with links to other pages
// Language: javascript
// Path: js/navbar.js
//functions to open and close the sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "45%";
  document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
}

//functions to open and close the dropdown menufunction() {


function opendropdownbtn() {
  if (document.getElementById("dropdownbtn").style.display === "none") {
    document.getElementById("dropdownbtn").style.display = "block";
  } else {
    document.getElementById("dropdownbtn").style.display = "none";
  }
}

