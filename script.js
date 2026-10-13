const whatsappNumber = "923120342962";


const services = [

    {
        title: "Professional Logo Design",
        description:
            "Unique, creative, and modern logo designs that give your brand a strong and memorable identity."
    },

    {
        title: "CV/Resume Design",
        description:
            "Professional CV/Resume designs that showcase your skills and experience."
    },

    {
        title: "Letter Head Design",
        description:
            "Professional and clean letterhead designs tailored to give your business a polished and official look."
    },

    {
        title: "Brochure Design",
        description:
            "Professional and attractive brochure designs to showcase your business, products, and services."
    },

    {
        title: "Panaflex Printing & Design",
        description:
            "High-quality Panaflex printing and professional designs tailored to your business needs."
    },

    {
        title: "Social Media Posts Design",
        description:
            "Creative and engaging social media post designs that make your brand stand out."
    },

    {
        title: "Invitation Card Design",
        description:
            "Elegant and creative invitation card designs for every special occasion."
    },

    {
        title: "Wedding Card Design",
        description:
            "Elegant and beautifully designed Wedding & Walima cards for your special day."
    },

    {
        title: "Certificate Design & Print",
        description:
            "Professional certificate designs and high-quality printing for awards, achievements, and events."
    },

    {
        title: "Menu Design & Print",
        description:
            "Creative and professional menu designs with high-quality printing for restaurants and businesses."
    },

    {
        title: "Product Label",
        description:
            "Creative product label designs with high-quality printing to give your products a professional look."
    },

    {
        title: "ID Card",
        description:
            "Professional ID card designs with high-quality printing for schools, offices, and organizations."
    },

    {
        title: "Bill Book Printing",
        description:
            "Professional bill book designs with high-quality printing for businesses and shops."
    },

    {
        title: "Custom Ribbon Printing",
        description:
            "Custom printed ribbons with your logo, name, or design for gifts, events, and branding."
    },

    {
        title: "Passport Size Photo",
        description:
            "High-quality passport size photo printing with clean and professional finishing."
    },

    {
        title: "Photo Retouching",
        description:
            "Professional photo retouching and high-quality printing with a clean, natural finish."
    },

    {
        title: "Printing Service",
        description:
            "Reliable printing services with high-quality results for personal and business needs."
    },

    {
        title: "Thesis Binding",
        description:
            "Professional thesis binding with neat finishing for academic projects and research work."
    },

    {
        title: "Invoice Printing",
        description:
            "Professional invoice design and high-quality printing for businesses and shops."
    },

    {
        title: "Catalog Design & Print",
        description:
            "Creative catalog designs with high-quality printing to showcase your products professionally."
    },

    {
        title: "3D Sign Board",
        description:
            "Creative 3D sign board designs with high-quality finishing for businesses."
    },

    {
        title: "Neon Sign Board",
        description:
            "Bright and stylish neon sign boards designed to make your business stand out."
    },

    {
        title: "Wallpaper Printing",
        description:
            "High-quality wallpaper printing with custom designs to enhance your walls and spaces."
    },
    
    {
        title: "Employee Card Design",
        description:
            "Professional employee card designs with high-quality printing for businesses and organizations."
    },

    {
        title: "School Card Design",
        description:
            "Professional school card designs with high-quality printing for students and staff."
    },

];



const container = document.getElementById("servicesContainer");




services.forEach((service) => {

    const card = document.createElement("div");

    card.className = "service-card";


    const title = document.createElement("b");

    title.className = "service-title";

    title.textContent = service.title;


    const description = document.createElement("p");

    description.className = "service-description";

    description.textContent = service.description;


    const link = document.createElement("a");

    link.target = "_blank";


    const message =
        `Assalam o Alaikum, I want ${service.title} Service.`;


    link.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    const button = document.createElement("button");

    button.className = "order-button";

    button.textContent = "Order Service";


    link.appendChild(button);


    card.appendChild(title);

    card.appendChild(description);

    card.appendChild(link);


    container.appendChild(card);

});



/* Footer */
