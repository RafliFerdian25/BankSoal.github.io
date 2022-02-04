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
  $("#tabel__uts").DataTable({
    pageLength: 10,
  });
  $("#tabel__uas").DataTable({
    pageLength: 10,
  });
});
// ========== owl carousel ==========
// index - Beranda
$(document).ready(function () {
  $(".owl-carousel#beranda__rekap").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// NEW
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// mapel
$(".tambah__materi").hover(
  function () {
    $(".fa-plus").css("color", "white");
  },
  function () {
    $(".fa-plus").css("color", "black");
  }
);

// Tambah materi
var i = 4;
var j = 5;
function tambah__materi() {
  $("#" + i + "_materi").after(
    `<div class="mb-3 row" id="` +
      j +
      `_materi">
      <label for="materi_` +
      j +
      `" class="col-md-2 text-md-end col-form-label">Materi ` +
      j +
      `</label>
        <div class="col-lg-9 col-md-10">
          <input type="text" name="materi_` +
      j +
      `" class="form-control rounded-3" id="materi_` +
      j +
      `">
      </div>
    </div>
    <!-- end materi ` +
      j +
      ` -->`
  );
  i++;
  j++;
}
