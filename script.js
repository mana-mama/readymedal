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

function showPicOf(yo) {
    let exm_pics = yo.parentElement.parentElement.childNodes[1].querySelectorAll("img");
    let small_pics = yo.parentElement.querySelectorAll("img");

    for (i = 0; i < exm_pics.length; i++) {
        exm_pics[i].style.display = "none";
        if (exm_pics[i].id == yo.id) {
            exm_pics[i].style.display = "block";
        }
    }

    for (i = 0; i < small_pics.length; i++) {
        small_pics[i].classList.remove("active");
        if (small_pics[i].id == yo.id) {
            small_pics[i].classList.add("active");
        }
    }
}