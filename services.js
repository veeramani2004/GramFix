const services = [
    {
        name: "Electrician",
        description: "Wiring, fittings, repairs and more",
        image: "assets/electrician.jpg",
        className: "electrician",
    },
    {
        name: "Plumber",
        description: "Leak fixing, installation and more",
        image: "assets/plumber.jpg",
        className: "plumber",
    },
    {
        name: "Bike Repair",
        description: "Service, repairs, spares and more",
        image: "assets/bike-repair.jpg",
        className: "bike",
    },
    {
        name: "AC Repair",
        description: "Installation, servicing and more",
        image: "assets/ac-repair.jpg",
        className: "ac",
    },
    {
        name: "Cleaning",
        description: "Home & office cleaning services",
        image: "assets/cleaning.jpg",
        className: "cleaning",
    },
    {
        name: "Carpenter",
        description: "Furniture, repairs and custom work",
        image: "assets/carpenter.jpg",
        className: "carpenter",
    },
    {
        name: "Appliance Repair",
        description: "Fridge, TV, washing machine and more",
        image: "assets/appliance-repair.jpg",
        className: "appliance",
    },
    {
        name: "Mobile & Electronics",
        description: "Mobile repair, electronics repair",
        image: "assets/mobile-electronics.jpg",
        className: "electronics",
    },
    {
        name: "Home Repair",
        description: "Painting, wall repair and more",
        image: "assets/home-repair.jpg",
        className: "home-repair",
    },
    {
        name: "Water Pump Repair",
        description: "Installation, servicing and more",
        image: "assets/water-pump-repair.jpg",
        className: "water-pump",
    },
    {
        name: "Farm Services",
        description: "Tractor, agricultural equipment repair",
        image: "assets/farm-services.jpg",
        className: "farm",
    },
    {
        name: "More Services",
        description: "Explore all services",
        image: "assets/more-services.jpg",
        className: "more",
    },
];

const serviceCards = document.getElementById("serviceCards");

function displayServices() {
  services.forEach(function (service) {
    const card = document.createElement("div");

    card.classList.add("service-card", service.className);

    card.innerHTML = /* html */ `
      <a
        href="service_details.html?category=${service.className}"
        class="service-card-link"
        aria-label="View ${service.name} services"
      >
        <div class="card-image">
          <img src="${service.image}" alt="${service.name}">
        </div>

        <div class="card-content">
          <h3>${service.name}</h3>
          <p>${service.description}</p>
        </div>

        <span class="card-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>
    `;

    serviceCards.appendChild(card);
  });
}

displayServices();

