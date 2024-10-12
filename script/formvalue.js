// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Track selections in variables
    let selectedProject = "";
    let selectedKeuze = "";
    let selectedOppervlakte = "";
  
    // Select buttons and add event listeners for project choices
    const projectButtons = document.querySelectorAll(".oplossing, .oplossing2, .oplossing3");
    const keuzeButtons = document.querySelectorAll(".keuze, .keuze2, .keuze3, .keuze4");
    const oppervlakteButtons = document.querySelectorAll("#oppervlakte button, #oppervlakte2 button");
  
    // Get hidden input fields
    const projectInput = document.getElementById("projectType");
    const keuzeInput = document.getElementById("keuzeType");
    const oppervlakteInput = document.getElementById("oppervlakteType");
  
    // Update hidden field when a project button is clicked
    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedProject = this.innerText; // Store the button's text as the value
            projectInput.value = selectedProject; // Update the hidden input
            console.log("Selected project:", selectedProject);
        });
    });
  
    // Update hidden field when a keuze button is clicked
    keuzeButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedKeuze = this.innerText;
            keuzeInput.value = selectedKeuze; // Update the hidden input
            console.log("Selected keuze:", selectedKeuze);
        });
    });
  
    // Update hidden field when an oppervlakte button is clicked
    oppervlakteButtons.forEach(button => {
        button.addEventListener("click", function() {
            selectedOppervlakte = this.innerText;
            oppervlakteInput.value = selectedOppervlakte; // Update the hidden input
            console.log("Selected oppervlakte:", selectedOppervlakte);
        });
    });
  });