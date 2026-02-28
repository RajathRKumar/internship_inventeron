function showLoader() {
    document.getElementById("loader").style.display = "flex";
}

function goToPage() {
    showLoader();

    setTimeout(function() {
        window.location.href = "page2.html";
    }, 3000);
}

function goBack() {
    showLoader();

    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000);
}
