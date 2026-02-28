let step = 1;
let generatedCaptcha = "";

const submitBtn = document.getElementById("submitBtn");
const refreshBtn = document.getElementById("refreshCaptcha");


submitBtn.addEventListener("click", function () {
    if (step === 1) {
        document.getElementById("extraSection").classList.remove("hidden");
        generateCaptcha();
        step = 2;
    } 
    else {
        let userCaptcha = document.getElementById("captchaInput").value;

        if (userCaptcha.toUpperCase() === generatedCaptcha) {
            alert("Submitted successfully");
        } 
        else {
            alert("Invalid captcha");
            generateCaptcha();   
            document.getElementById("captchaInput").value = "";
        }
    }
});


refreshBtn.addEventListener("click", function () {
    generateCaptcha();
    document.getElementById("captchaInput").value = "";
});


function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    generatedCaptcha = "";

    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        generatedCaptcha += characters[randomIndex];
    }
    document.getElementById("captchaText").innerText =
        "Captcha: " + generatedCaptcha;
}
