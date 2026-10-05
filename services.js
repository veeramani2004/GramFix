
const services = [

    {
        name: "Electrician",
        description:"Wiring, fittings, repairs and more",
        icon: "fa-bolt",
        className: "electrician"
    },
    {
        name: "Plumber",
        description: "Leak fixing, installation and more",
        icon: "fa-faucet",
        className: "plumber"
    },
    {
        name: "Bike Repair",
        description:"Service, repairs, spares and more",
        icon: "fa-motorcycle",
        className: "bike"
    },
    {
        name: "AC Repair",
        description:"Installation, servicing and more",
        icon: "fa-snowflake",
        className: "ac"
    },
    {
        name: "Cleaning",
        description:"Home & office cleaning services",
        icon: "fa-broom",
        className: "cleaning"
    },
    {
        name: "Carpenter",
        description:"Furniture, repairs and custom work",
        icon: "fa-hammer",
        className: "carpenter"
    },
    {
        name: "Appliance Repair",
        description:"Fridge, TV, washing machine and more",
        icon: "fa-plug",
        className: "appliance"
    },
    {
        name: "Mobile & Electronics",
        description:"Mobile repair, electronics repair",
        icon: "fa-mobile-screen-button",
        className: "electronics"
    },
    {
        name: "Home Repair",
        description:"Painting, wall repair and more",
        icon: "fa-house",
        className: "home-repair"
    },
    {
        name: "Water Pump Repair",
        description:"Installation, servicing and more",
        icon: "fa-faucet-drip",
        className: "water-pump"
    },
    {
        name: "Farm Services",
        description:"Tractor, agricultural equipment repair",
        icon: "fa-leaf",
        className: "farm"
    },
    {
        name: "More Services",
        description:"Explore all services",
        icon: "fa-grip",
        className: "more"
    }

];


const serviceCards =
    document.getElementById("serviceCards");

function displayServices() {
    services.forEach(function(service) {

        const card =
            document.createElement("div");
        card.classList.add(
            "service-card",
            service.className
        );

        card.innerHTML = `
            <div class="card-image">
                <i class="fa-solid ${service.icon}">
                </i>
            </div>

            <div class="card-content">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>

            <button class="card-arrow" type="button">
                <i class="fa-solid fa-arrow-right"></i>
            </button>

        `;
        serviceCards.appendChild(card);
    });

}

displayServices();