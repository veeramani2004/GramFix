const services = [
    {
        name: "Electrician",
        description: "Wiring, fittings, repairs and more",
        image: "../electrician.jpg",
        className: "electrician",
    },
    {
        name: "Plumber",
        description: "Leak fixing, installation and more",
        image: "../plumber.jpg",
        className: "plumber",
    },
    {
        name: "Bike Repair",
        description: "Service, repairs, spares and more",
        image: "../bike-repair.jpg",
        className: "bike",
    },
    {
        name: "AC Repair",
        description: "Installation, servicing and more",
        image: "../ac-repair.jpg",
        className: "ac",
    },
    {
        name: "Cleaning",
        description: "Home and office cleaning services",
        image: "../cleaning.jpg",
        className: "cleaning",
    },
    {
        name: "Carpenter",
        description: "Furniture, repairs and custom work",
        image: "../carpenter.jpg",
        className: "carpenter",
    },
    {
        name: "Appliance Repair",
        description: "Fridge, TV, washing machine and more",
        image: "../appliance-repair.jpg",
        className: "appliance",
    },
    {
        name: "Mobile & Electronics",
        description: "Mobile repair and electronics repair",
        image: "../mobile-electronics.jpg",
        className: "mobile",
    },
    {
        name: "Home Repair",
        description: "Painting, wall repair and more",
        image: "../home-repair.jpg",
        className: "home",
    },
    {
        name: "Water Pump Repair",
        description: "Installation, servicing and more",
        image: "../water-pump-repair.jpg",
        className: "waterpump",
    },
    {
        name: "Farm Services",
        description: "Tractor and agricultural equipment repair",
        image: "../farm-services.jpg",
        className: "farm",
    },
 
];

const serviceCards = document.getElementById("serviceCards");
const serviceCount = document.getElementById("serviceCount");
const serviceSearchForm = document.getElementById("serviceSearchForm");
const serviceSearch = document.getElementById("serviceSearch");
const noResults = document.getElementById("noResults");
const clearSearch = document.getElementById("clearSearch");

function displayServices(serviceList) {
    serviceCards.innerHTML = "";

    serviceList.forEach(function (service) {
        const card = document.createElement("article");
        card.classList.add("service-card", service.className);

        const link = document.createElement("a");
        link.classList.add("service-card-link");

        link.href =
            "service_details.html?category=" +
            encodeURIComponent(service.className);

        link.setAttribute("aria-label", "View " + service.name + " services");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image");

        const image = document.createElement("img");
        image.src = service.image;
        image.alt = service.name;
        image.loading = "lazy";

        image.onerror = function () {
            imageContainer.style.display = "none";
        };

        imageContainer.appendChild(image);

        const content = document.createElement("div");
        content.classList.add("card-content");

        const heading = document.createElement("h3");
        heading.textContent = service.name;

        const description = document.createElement("p");
        description.textContent = service.description;

        content.appendChild(heading);
        content.appendChild(description);

        link.appendChild(imageContainer);
        link.appendChild(content);

        card.appendChild(link);
        serviceCards.appendChild(card);
    });

}

function searchServices() {
    const searchTerm = serviceSearch.value.trim().toLowerCase();

    const filteredServices = services.filter(function (service) {
        const searchableText = service.name + " " + service.description;

        return searchableText.toLowerCase().includes(searchTerm);
    });

    displayServices(filteredServices);
}

serviceSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchServices();
});

serviceSearch.addEventListener("input", function () {
    searchServices();
});

clearSearch.addEventListener("click", function () {
    serviceSearch.value = "";
    displayServices(services);
});

displayServices(services);
