const loadBtn = document.getElementById("loadBtn");
const usersContainer = document.getElementById("usersContainer");
const loader = document.getElementById("loader");

loadBtn.addEventListener("click", fetchUsers);

async function fetchUsers() {

    usersContainer.innerHTML = "";
    loader.classList.remove("hidden");

    try {

        // FETCH API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        loader.classList.add("hidden");

        
        for (let i = 0; i < users.length; i++) {
            createUserCard(users[i], i);
        }

    } catch (error) {

        loader.classList.add("hidden");
        usersContainer.innerHTML = "<p>Something went wrong!</p>";
        console.log(error);
    }
}

function createUserCard(user, index) {

    
    const companyType = user.company.name.length > 10 ? "Large Company" : "Startup";

    const card = document.createElement("div");
    card.classList.add("user-card");

    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>Type:</strong> ${companyType}</p>
    `;

    usersContainer.appendChild(card);
}