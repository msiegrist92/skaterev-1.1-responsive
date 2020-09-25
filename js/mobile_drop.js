function mobileDrop() {
  var x = document.getElementById("mobile_nav_list");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
};

document.getElementById("nav_mobile").addEventListener("click", mobileDrop);
