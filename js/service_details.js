const serviceCategories = {
    electrician: {
        name: "Electrician",
        title: "Electrician Services",
        description:
            "Get professional electrical services for your home, office and commercial spaces. Safe, reliable and affordable.",

        image: "assets/services/electrician.jpg",

        services: [
            {
                name: "Light Installation",
                description: "Install lights, LED lights and chandeliers.",
                price: 299,
                image: "assets/services/light-installation.jpg",
            },
            {
                name: "Fan Installation",
                description:
                    "Install ceiling fans, wall fans and exhaust fans.",
                price: 299,
                image: "assets/services/fan-installation.jpg",
            },
            {
                name: "Switchboard Repair",
                description: "Repair electrical switchboards and sockets.",
                price: 349,
                image: "assets/services/switchboard-repair.jpg",
            },
            {
                name: "House Wiring",
                description:
                    "Electrical wiring for new houses and renovations.",
                price: 999,
                image: "assets/services/house-wiring.jpg",
            },
            {
                name: "MCB / DB Repair",
                description: "Repair MCBs and electrical distribution boards.",
                price: 349,
                image: "assets/services/mcb-repair.jpg",
            },
            {
                name: "Security Camera Installation",
                description: "Install CCTV cameras for homes and offices.",
                price: 499,
                image: "assets/services/security-camera.jpg",
            },
            {
                name: "Inverter Installation",
                description: "Install inverter and battery backup systems.",
                price: 499,
                image: "assets/services/inverter-installation.jpg",
            },
            {
                name: "Electrical Troubleshooting",
                description: "Identify electrical faults and power problems.",
                price: 299,
                image: "assets/services/electrician.jpg",
            },
        ],
    },

    plumber: {
        name: "Plumber",
        title: "Plumbing Services",
        description:
            "Find reliable plumbing help for leaking taps, damaged pipes, drainage and other household plumbing needs.",

        image: "assets/services/plumber.jpg",

        services: [
            {
                name: "Tap Repair",
                description: "Repair leaking taps and faucets.",
                price: 199,
                image: "assets/services/tap-repair.jpg",
            },
            {
                name: "Pipe Repair",
                description: "Repair leaking and damaged water pipes.",
                price: 299,
                image: "assets/services/pipe-repair.jpg",
            },
            {
                name: "Drain Cleaning",
                description: "Clear blocked drains and pipes.",
                price: 299,
                image: "assets/services/drain-cleaning.jpg",
            },
        ],
    },

    bike: {
        name: "Bike Repair",
        title: "Bike Repair Services",
        description:
            "Get help with bike servicing, brake problems and everyday motorcycle repairs.",

        image: "assets/services/bike-mechanic.jpg",

        services: [
            {
                name: "Bike Servicing",
                description: "Basic servicing and general bike maintenance.",
                price: 499,
                image: "assets/services/bike-servicing.jpg",
            },
            {
                name: "Brake Repair",
                description: "Check and repair common brake problems.",
                price: 299,
                image: "assets/services/brake-repair.jpg",
            },
        ],
    },

    ac: {
        name: "AC Repair",
        title: "AC Repair Services",
        description:
            "Find help with air-conditioner installation, cleaning and common cooling problems.",

        image: "assets/services/ac-repair.jpg",

        services: [
            {
                name: "AC Repair",
                description: "Inspect and diagnose common AC problems.",
                price: 399,
                image: "assets/services/ac-repair.jpg",
            },
            {
                name: "AC Installation",
                description: "Install an air conditioner at your property.",
                price: 1499,
                image: "assets/services/ac-installation.jpg",
            },
            {
                name: "AC Cleaning",
                description: "Clean AC filters and accessible components.",
                price: 499,
                image: "assets/services/ac-cleaning.jpg",
            },
        ],
    },

    carpenter: {
        name: "Carpenter",
        title: "Carpentry Services",
        description:
            "Find local carpenters for furniture repairs, doors and everyday woodwork.",

        image: "assets/services/carpenter.jpg",

        services: [
            {
                name: "Furniture Repair",
                description: "Repair common furniture damage.",
                price: 299,
                image: "assets/services/furniture-repair.jpg",
            },
            {
                name: "Door Repair",
                description: "Fix common door and hinge problems.",
                price: 249,
                image: "assets/services/door-repair.jpg",
            },
        ],
    },

    cleaning: {
        name: "Cleaning",
        title: "Cleaning Services",
        description:
            "Find cleaning professionals for everyday household cleaning needs.",

        image: "assets/services/cleaning.jpg",

        services: [
            {
                name: "Home Cleaning",
                description: "General cleaning for your home.",
                price: 799,
                image: "assets/services/home-cleaning.jpg",
            },
            {
                name: "Bathroom Cleaning",
                description: "Clean bathroom surfaces and fittings.",
                price: 299,
                image: "assets/services/bathroom-cleaning.jpg",
            },
        ],
    },

    appliance: {
        name: "Appliance Repair",
        title: "Appliance Repair Services",
        description:
            "Find help diagnosing and repairing common household appliance problems.",

        image: "assets/services/appliance-repair.jpg",

        services: [
            {
                name: "Washing Machine Repair",
                description: "Diagnose common washing machine faults.",
                price: 399,
                image: "assets/services/washing-machine.jpg",
            },
            {
                name: "Refrigerator Repair",
                description: "Inspect common refrigerator problems.",
                price: 399,
                image: "assets/services/refrigerator.jpg",
            },
        ],
    },

    mobile: {
        name: "Mobile Repair",
        title: "Mobile Repair Services",
        description:
            "Find technicians for common smartphone repair and troubleshooting needs.",

        image: "assets/services/mobile-repair.jpg",

        services: [
            {
                name: "Screen Repair",
                description: "Get your phone screen inspected for repair.",
                price: 499,
                image: "assets/services/screen-repair.jpg",
            },
        ],
    },

    waterpump: {
        name: "Water Pump Repair",
        title: "Water Pump Repair Services",
        description: "Find help with common water pump and motor problems.",

        image: "assets/services/water-pump.jpg",

        services: [
            {
                name: "Pump Inspection and Repair",
                description: "Inspect common water pump problems.",
                price: 399,
                image: "assets/services/pump-repair.jpg",
            },
        ],
    },

    farm: {
        name: "Farm Equipment Repair",
        title: "Farm Equipment Repair Services",
        description:
            "Find local help with agricultural equipment maintenance and repairs.",

        image: "assets/services/farm-services.jpg",

        services: [
            {
                name: "Tractor Repair",
                description: "Arrange inspection for common tractor problems.",
                price: 599,
                image: "assets/services/tractor-repair.jpg",
            },
        ],
    },

    home: {
        name: "Home Repair",
        title: "Home Repair Services",
        description:
            "Find help with everyday home maintenance and minor repairs.",

        image: "assets/services/home-repair.jpg",

        services: [
            {
                name: "General Home Repair",
                description: "Get help with common household repairs.",
                price: 299,
                image: "assets/services/general-repair.jpg",
            },
        ],
    },
};

const urlParams = new URLSearchParams(window.location.search);

const requestedCategory = (
    urlParams.get("category") || "electrician"
).toLowerCase();

const category = serviceCategories[requestedCategory];

const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");

const categoryImage = document.getElementById("category-image");

const breadcrumbCategory = document.getElementById("breadcrumb-category");

const servicesGrid = document.getElementById("services-grid");

const serviceCount = document.getElementById("service-count");

const emptyMessage = document.getElementById("empty-message");

function displayCategory(selectedCategory) {
    if (!selectedCategory) {
        categoryTitle.textContent = "Category Not Found";

        categoryDescription.textContent =
            "Please choose a valid service category.";

        breadcrumbCategory.textContent = "Not Found";

        categoryImage.style.display = "none";

        servicesGrid.innerHTML = "";

        serviceCount.textContent = "0";

        emptyMessage.hidden = false;

        return;
    }

    categoryTitle.textContent = selectedCategory.title;

    categoryDescription.textContent = selectedCategory.description;

    breadcrumbCategory.textContent = selectedCategory.name;

    categoryImage.src = selectedCategory.image;

    categoryImage.alt = selectedCategory.title;

    categoryImage.style.display = "block";

    document.title = `${selectedCategory.title} | GramFix`;

    displayServiceCards(selectedCategory.services);
}

function displayServiceCards(services) {
    servicesGrid.innerHTML = "";

    serviceCount.textContent = services.length;

    emptyMessage.hidden = services.length !== 0;

    services.forEach((service) => {
        const card = document.createElement("article");

        card.className = "service-card";

        card.innerHTML = `
            <div class="card-image">
                <img
                    src="${service.image}"
                    alt="${service.name}"
                    loading="lazy"
                >
            </div>

            <div class="card-content">

                <h3>${service.name}</h3>

                <p>${service.description}</p>

                <div class="card-bottom">

                    <span class="card-price">
                        From ₹${service.price}
                    </span>

                    <button
                        class="book-button"
                        type="button"
                        data-service="${service.name}"
                    >
                        Book Now
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>
        `;

        servicesGrid.appendChild(card);
    });
}

displayCategory(category);

const bookingDialog = document.getElementById("booking-dialog");

const bookingForm = document.getElementById("booking-form");

const selectedServiceInput = document.getElementById("selected-service");

const bookingDate = document.getElementById("booking-date");

const bookingMessage = document.getElementById("booking-message");

const closeDialogButton = document.getElementById("close-dialog");

const now = new Date();

const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

bookingDate.min = localDate.toISOString().split("T")[0];

servicesGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".book-button");

    if (!button || !category) {
        return;
    }

    selectedServiceInput.value = button.dataset.service;

    bookingMessage.textContent = "";

    bookingDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    bookingDialog.close();
});

bookingDialog.addEventListener("click", (event) => {
    if (event.target === bookingDialog) {
        bookingDialog.close();
    }
});

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) {
        return;
    }

    bookingMessage.textContent =
        "Form validated successfully. Online booking is not connected yet.";

    bookingMessage.style.color = "#16803c";
});
