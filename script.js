function showModernMedal() {
    let info = document.querySelector("#modern");
    info.style.display = "block";
    info.classList.add("showing");
    info.classList.remove("fading");
}

function showFlatMedal() {
    let info = document.querySelector("#flat");
    info.style.display = "block";
    info.classList.add("showing");
    info.classList.remove("fading");
}

function showCircleMedal() {
    let info = document.querySelector("#circle");
    info.style.display = "block";
    info.classList.add("showing");
    info.classList.remove("fading");
}

function showSquareMedal() {
    let info = document.querySelector("#square");
    info.style.display = "block";
    info.classList.add("showing");
    info.classList.remove("fading");
}

function closeInfo(yo) {
    yo.parentElement.classList.add("fading");
    yo.parentElement.classList.remove("showing");
    setTimeout( function() {
        yo.parentElement.style.display = "none";
    }, 300);
}