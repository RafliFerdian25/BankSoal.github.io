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
  } else if (document.title == "Bank Soal | Guru") {
    $("#nav__guru").addClass("active");
  }
});
//Datatables
$(document).ready(function () {
  // Add Row
  $("#n").DataTable({
    pageLength: 5,
  });
  $("#tabel__guru").DataTable({
    pageLength: 5,
  });
  $("#tabel__sekolah").DataTable({
    pageLength: 5,
  });
});
