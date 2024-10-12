let oplossing = document.getElementById("keuzeOplossingen");
let oplossing2 = document.getElementById("keuzeOplossingen2");
let oplossing3 = document.getElementById("keuzeOplossingen3");
let oppervlakte = document.getElementById("oppervlakte");
let oppervlakte2 = document.getElementById("oppervlakte2");
let verwarmingsketel = document.getElementById("verwarmingsketel");
let keuzeOppervlakte = document.querySelector(".keuzeOppervlakte");
let keuzes = document.querySelectorAll(".keuze, .keuze2, .keuze3, .keuze4");
let forum = document.getElementById("forumOplossingen");

function responsiveButton() {
  var responsive = document.getElementById("myTopnav");
  if (responsive.className === "topnav") {
    responsive.className += " responsive";
  } else {
    responsive.className = "topnav";
  }
}

function selectedOplossing() {
  if (oplossing.style.display === "block") {
    oplossing.style.display = "none";
    oppervlakte.style.display = "none";
    oppervlakte2.style.display = "none";
    forum.style.display = "none";
  }
  else {
    oplossing.style.display = "block";
    oplossing2.style.display = "none";
    oplossing3.style.display = "none";
    forum.style.display = "none";
    oppervlakte2.style.display = "none";
    verwarmingsketel.style.display = "none";
  }
}

function selectedOplossing2() {
  if (oplossing2.style.display === "block") {
    oplossing2.style.display = "none";
  }
  else {
    oplossing2.style.display = "block";
    oplossing.style.display = "none";
    oplossing3.style.display = "none";
    oppervlakte.style.display = "none";
    oppervlakte2.style.display = "none";
    forum.style.display = "none";
    oppervlakte2.style.display = "none";
    verwarmingsketel.style.display = "none";
  }
}

function selectedOplossing3() {
  if (oplossing3.style.display === "block") {
    oplossing3.style.display = "none";
  }
  else {
    oplossing3.style.display = "block";
    oplossing.style.display = "none";
    oplossing2.style.display = "none";
    oppervlakte.style.display = "none";
    forum.style.display = "none";
    oppervlakte2.style.display = "none";
    verwarmingsketel.style.display = "none";
  }
}

function showVerwarmingsketel() {
  if (verwarmingsketel.style.display === "block") {
    verwarmingsketel.style.display = "none";
  }
  else {
    verwarmingsketel.style.display = "block";
    oppervlakte.style.display = "none";
    oppervlakte2.style.display = "none";
  }
}

function showOppervlakte() {
  if (oppervlakte.style.display === "block") {
      forum.style.display = "none";
  }
  else {
    oppervlakte.style.display = "block";
    oppervlakte2.style.display = "none";
    verwarmingsketel.style.display = "none";
  }
}

function showOppervlakte2() {
  if (oppervlakte2.style.display === "block") {
    forum.style.display = "none";
  }
  else {
    oppervlakte2.style.display = "block";
  }
}

function showForum() {
  if (forum.style.display === "block") {
    /*forum.style.display = "none";*/
  }
  else {
    forum.style.display = "block";
  }
}

keuzes.forEach(keuze => {
  keuze.addEventListener('click', function() {
    keuzeOppervlakte.innerHTML = "Keuze: " + keuze.innerHTML;
  });
});

function saveButtonValue() {
  console.log(keuze.innerHTML);
}