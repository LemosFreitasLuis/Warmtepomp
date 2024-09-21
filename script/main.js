<<<<<<< HEAD
let oplossing = document.getElementById("keuzeOplossingen");
let oplossing2 = document.getElementById("keuzeOplossingen2");
let oplossing3 = document.getElementById("keuzeOplossingen3");
let oppervlakte = document.getElementById("oppervlakte");
let keuzeOppervlakte = document.querySelector(".keuzeOppervlakte");
let keuzes = document.querySelectorAll(".keuze, .keuze2, .keuze3, .keuze4");

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
  }
  else {
    oplossing.style.display = "block";
    oplossing2.style.display = "none";
    oplossing3.style.display = "none";
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
  }
}

function showOppervlakte() {
  if (oppervlakte.style.display === "block") {
      /*oppervlakte.style.display = "none";*/
  }
  else {
    oppervlakte.style.display = "block";
  }
}

keuzes.forEach(keuze => {
  keuze.addEventListener('click', function() {
    keuzeOppervlakte.innerHTML = "Keuze: " + keuze.innerHTML;
  });
});








/*Oude code*/
// keuze.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze.innerHTML;
// }); 

// keuze2.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze2.innerHTML;
// }); 

// keuze3.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze3.innerHTML;
// }); 

// keuze4.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze4.innerHTML;
// }); 


=======
let oplossing = document.getElementById("keuzeOplossingen");
let oplossing2 = document.getElementById("keuzeOplossingen2");
let oplossing3 = document.getElementById("keuzeOplossingen3");
let oppervlakte = document.getElementById("oppervlakte");
let keuzeOppervlakte = document.querySelector(".keuzeOppervlakte");
let keuzes = document.querySelectorAll(".keuze, .keuze2, .keuze3, .keuze4");

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
  }
  else {
    oplossing.style.display = "block";
    oplossing2.style.display = "none";
    oplossing3.style.display = "none";
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
  }
}

function showOppervlakte() {
  if (oppervlakte.style.display === "block") {
      /*oppervlakte.style.display = "none";*/
  }
  else {
    oppervlakte.style.display = "block";
  }
}

keuzes.forEach(keuze => {
  keuze.addEventListener('click', function() {
    keuzeOppervlakte.innerHTML = "Keuze: " + keuze.innerHTML;
  });
});








/*Oude code*/
// keuze.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze.innerHTML;
// }); 

// keuze2.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze2.innerHTML;
// }); 

// keuze3.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze3.innerHTML;
// }); 

// keuze4.addEventListener('click', function() {
//   keuzeOppervlakte.innerHTML = "Keuze: " + keuze4.innerHTML;
// }); 


>>>>>>> bd5109f93809ff0086c997bf1cd49c43b8548251
