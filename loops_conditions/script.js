function runProject() {

    let num = parseInt(document.getElementById("numberInput").value);
    let output = "";
    let conceptList = document.getElementById("conceptList");
    conceptList.innerHTML = "";

    // IF, ELSE IF, ELSE
    if (num > 0) {
        output += "Number is Positive\n";
    } else if (num < 0) {
        output += "Number is Negative\n";
    } else {
        output += "Number is Zero\n";
    }

    // TERNARY
    let evenOdd = (num % 2 === 0) ? "Even" : "Odd";
    output += "Number is " + evenOdd + "\n\n";

    // FOR LOOP
    output += "Multiplication Table (FOR LOOP):\n";
    for (let i = 1; i <= 5; i++) {
        output += `${num} x ${i} = ${num * i}\n`;
    }

    // WHILE LOOP
    output += "\nSum using WHILE LOOP:\n";
    let i = 1;
    let sum = 0;
    while (i <= num) {
        sum += i;
        i++;
    }
    output += "Sum = " + sum + "\n";

    // DO WHILE LOOP
    output += "\nFactorial using DO WHILE LOOP:\n";
    let j = 1;
    let fact = 1;

    if (num < 0) {
        output += "Factorial not possible\n";
    } else {
        do {
            fact *= j;
            j++;
        } while (j <= num);
        output += "Factorial = " + fact + "\n";
    }

    // SWITCH
    output += "\nSwitch Example:\n";
    switch (true) {
        case (num >= 90):
            output += "Grade A\n";
            break;
        case (num >= 75):
            output += "Grade B\n";
            break;
        default:
            output += "Grade C\n";
    }

    // FOR OF
    let colors = ["Red", "Green", "Blue"];
    output += "\nFOR OF Loop (Array):\n";
    for (let color of colors) {
        output += color + "\n";
    }

    // FOR IN
    let student = {
        name: "Raistar",
        course: "CSE",
        year: "Final Year"
    };

    output += "\nFOR IN Loop (Object):\n";
    for (let key in student) {
        output += key + " : " + student[key] + "\n";
    }

    document.getElementById("output").innerText = output;

    // Display 
    let concepts = [
        "if statement",
        "if...else",
        "else if ladder",
        "ternary operator",
        "for loop",
        "while loop",
        "do...while loop",
        "switch statement",
        "for...of loop",
        "for...in loop"
    ];

    for (let item of concepts) {
        let li = document.createElement("li");
        li.textContent = item;
        conceptList.appendChild(li);
    }
}