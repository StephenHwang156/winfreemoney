var modal = document.getElementById('myModal');
var scamtext = "There are many false advertisements on the internet and we need to be careful and think twice before we click on some of the ads. Although many ads are safe, there are unsafe ads out there that have 'too good to be true' deals to attract people to click it. These ads may contain virus or ask you to give your personal information out and doing so can be very dangerous."

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var ad1 = document.getElementById("ad1");
var ad2 = document.getElementById("ad2");
var ad3 = document.getElementById("ad3");

var text = document.querySelectorAll("#myModal p")[0]; 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

ad1.onclick = function() {
    modal.style.display = "block"
    text.innerHTML = scamtext;
}

ad2.onclick = function() {
    modal.style.display = "block"
    text.innerHTML = scamtext;
}

ad3.onclick = function() {
    modal.style.display = "block"
    text.innerHTML = scamtext;
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}