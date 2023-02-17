/*model sign in*/
function openSignIn() {
    const opButton = document.querySelector(".sign-in-model");
    opButton.style.display = "flex";
}

function closeSignIn() {
    const alertEmail = document.querySelector(".alert-sign-in-email");
    const alertPass = document.querySelector(".alert-sign-in-password");
    const closeButton = document.querySelector(".sign-in-model");
    closeButton.style.display = "none";
    alertEmail.innerText = "";
    alertPass.innerText = "";
    document.querySelector(".model-sign-in-email").value = "";
    document.querySelector(".model-sign-in-password").value = "";
}

const testEvent = document.querySelectorAll(".test-event"); /*Vấn đề nằm ở querying webpage*/
const testP = document.getElementById("test-p");
function textEvent() {
    const pictureTest = document.querySelector(".aboutPicture");
    const tryParagraph = document.querySelector(".test-event");
    tryParagraph.innerText = pictureTest.src;
    tryParagraph.style.color = "red";
}

function sendSignIn() {
    const signInEmail = document.querySelector(".model-sign-in-email").value;
    const signInPass = document.querySelector(".model-sign-in-password").value;
    const alertEmail = document.querySelector(".alert-sign-in-email");
    const alertPass = document.querySelector(".alert-sign-in-password");
    if (signInEmail === "" && signInPass !== "") {
        alertEmail.innerText = "You have to input your Email!";
    } else if (signInEmail !== "" && signInPass === "") {
        alertPass.innerText = "You have to input your PassWord!";
    } else if (signInEmail === "" && signInPass === "") {
        alertEmail.innerText = "You have to input your Email!";
        alertPass.innerText = "You have to input your PassWord!";
    } else {
        const closeButton = document.querySelector(".sign-in-model");
        closeButton.style.display = "none";
        alertEmail.innerText = "";
        alertPass.innerText = "";
        document.querySelector(".model-sign-in-email").value = "";
        document.querySelector(".model-sign-in-password").value = "";
    }
}
