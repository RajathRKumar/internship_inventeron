document.getElementById("regForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const mname = document.getElementById("mname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(fname) ||
        (mname !== "" && !namePattern.test(mname)) ||
        !namePattern.test(lname)) {
        alert("Names should contain only alphabets.");
        return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number should contain only numbers.");
        return;
    }

    document.getElementById("rname").innerText = fname + " " + mname + " " + lname;
    document.getElementById("remail").innerText = email;
    document.getElementById("rphone").innerText = phone;
    document.getElementById("rgender").innerText = gender;
    document.getElementById("raddress").innerText = address;
    document.getElementById("rdob").innerText = dob;

    document.getElementById("result").style.display = "block";

    document.getElementById("regForm").reset();
});
