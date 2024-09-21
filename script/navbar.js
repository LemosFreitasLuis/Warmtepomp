let url1;
let url2;
let url3;

function changeURL() {
    const checkIfIdExist = document.getElementById("daikin");

    if (checkIfIdExist) {
        url1 = "index.html";
        url2 = "pages/producten.html";
        url3 = "#pageOplossingen";
    } else {
        url1 = "../index.html";
        url2 = "../pages/producten.html";
        url3 = "../index.html#pageOplossingen";
    }
}

function createNavbar() {
    changeURL();
    const navbar = `
        <header>
            <nav class="topnav" id="myTopnav">
                <a class="logo" href="${url1}">Daikin</a>
                <a href="${url2}">Producten</a>
                <a href="${url3}">Oplossingen</a>
                <a href="#">Advies</a>
                <a href="#">Services</a>
                <a href="#">Showrooms</a>
                <a href="#">Cashbacks</a>
                <a href="javascript:void(0);" class="icon" onclick="responsiveButton()" aria-label="Toggle navigation menu">
                    <i class="fa fa-bars"></i>
                </a>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbar);
}

// Initieer de creatie van de navbar
createNavbar();












//Oude code
// let url1;
// let url2;
// let url3;
// changeURL();

// var navbar= '<header><div class="topnav" id="myTopnav"> <a class="logo" href="'+ url1 +'">Daikin</a> <a href="' + url2 + '">Producten</a> <a href="' + url3 + '">Oplossingen</a> <a>Advies</a> <a>Services</a> <a>Showrooms</a> <a>Cashbacks</a> <a href="javascript:void(0);" class="icon" onclick="responsiveButton()"><i class="fa fa-bars"></i></a> </div>    </header>';
// document.querySelector("body").insertAdjacentHTML("afterbegin", navbar);

// function changeURL() {
//     let checkIfIdExist = document.getElementById("daikin");
//     if(checkIfIdExist) {
//         url1 = "index.html";
//         url2 = "pages/producten.html";
//         url3 = "#pageOplossingen";
//     }
//     else {
//         url1 = "../index.html";
//         url2 = "../pages/producten.html";
//         url3 = "../index.html#pageOplossingen";
//     }
// }
