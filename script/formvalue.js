// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Track selections in variables
    let selectedProject = "";
    let selectedKeuze = "";
    let selectedOppervlakte = "";
    let selectedSanitair = "";
    let selectedVerwarmingsketel = "";
  
    // Select buttons and add event listeners for project choices
    const projectButtons = document.querySelectorAll(".oplossing, .oplossing2, .oplossing3");
    const keuzeButtons = document.querySelectorAll(".keuze, .keuze2, .keuze3, .keuze4");
    const oppervlakteButtons = document.querySelectorAll("#oppervlakte button, #oppervlakte2 button");
    const sanitairButtons = document.querySelectorAll(".keuzeSanitair, .keuzeSaniteir2");
    const verwarmingsketelButtons = document.querySelectorAll(".verwarmingsketel, .verwarmingsketel2");
  
    // Get hidden input fields
    const projectInput = document.getElementById("projectType");
    const keuzeInput = document.getElementById("keuzeType");
    const oppervlakteInput = document.getElementById("oppervlakteType");
    const saniteirInput = document.getElementById("sanitairType");
    const verwarmingsketelInput = document.getElementById("verwarmingsketelType");
  
    // Update hidden field when a project button is clicked
    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedProject = this.innerText; // Store the button's text as the value
            projectInput.value = "Project: " + selectedProject; // Update the hidden input
            saniteirInput.value = "";
            verwarmingsketelInput.value = "";
            console.log("Selected project:", selectedProject);
        });
    });
  
    // Update hidden field when a keuze button is clicked
    keuzeButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedKeuze = this.innerText;
            keuzeInput.value = "Keuze: " + selectedKeuze; // Update the hidden input
            console.log("Selected keuze:", selectedKeuze);
        });
    });
  
    // Update hidden field when an oppervlakte button is clicked
    oppervlakteButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedOppervlakte = this.innerText;
            oppervlakteInput.value = "Oppervlakte: " + selectedOppervlakte; // Update the hidden input
            console.log("Selected oppervlakte:", selectedOppervlakte);
        });
    });

    sanitairButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedSanitair = this.innerText;
            verwarmingsketelInput.value = "";
            oppervlakteInput.value = "";
            saniteirInput.value = "Sanitair warm water produceren. " + selectedSanitair;
            console.log("Selected sanitair:", selectedSanitair);
        })
    })

    verwarmingsketelButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedVerwarmingsketel = this.innerText;
            saniteirInput.value = "";
            keuzeInput.value = "";
            verwarmingsketelInput.value = "Verwarmingsketel: " + selectedVerwarmingsketel;
            console.log("Selected verwarmingsketel:", selectedVerwarmingsketel)
        })
    })
  });