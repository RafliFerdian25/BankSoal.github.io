/*********  Navbar  **********/
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};
// active
$(document).ready(function () {
  if (document.title == "Bank Soal | Beranda") {
    $("#nav__beranda").addClass("active");
  } else if (document.title == "Bank Soal | Sekolah") {
    $("#nav__sekolah").addClass("active");
  } else if (document.title == "Bank Soal | Soal") {
    $("#nav__soal").addClass("active");
  }
});
//Datatables
$(document).ready(function () {
  // Add Row
  $("#add-row").DataTable({
    pageLength: 5,
  });
  $("#add-row2").DataTable({
    pageLength: 5,
  });
});
