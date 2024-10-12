function createButton({ text, variant }) {
  const button = document.createElement("button");
  button.classList.add("btn");

  // Apply variant-specific styles
  switch (variant) {
    case "primary":
      button.classList.add("btn-primary-custom");
      break;
    case "secondary":
      button.classList.add("btn-secondary-custom");
      break;
    case "tertiary":
      button.classList.add("btn-tertiary-custom");
      break;
    default:
      button.classList.add("btn-primary-custom"); // Default to primary
  }

  // Set button text
  button.textContent = text;

  return button;
}

// Example usage
const app = document.getElementById("wrapper");
const primaryButton = createButton({
  text: "Primary Button",
  variant: "primary",
});
const secondaryButton = createButton({
  text: "Secondary Button",
  variant: "secondary",
});
const tertiaryButton = createButton({
  text: "Tertiary Button",
  variant: "tertiary",
});

app.appendChild(primaryButton);
app.appendChild(secondaryButton);
app.appendChild(tertiaryButton);

function toggleNavItems() {
  const navItems = document.getElementById("nav-items");
  navItems.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  hamburgerBtn.addEventListener("click", toggleNavItems);
});

// document.addEventListener("DOMContentLoaded", () => {
//   const cardContainer = document.getElementById("card-container");

//   const data = [
//     {
//       img: "./assests/images/",
//       title: "Management",
//       description:
//         "Oversee every aspect. Track and follow up with leads, sources, launch campaigns, proposals and lot more",
//     },
//     {
//       img: "https://via.placeholder.com/150",
//       title: "Invoicing",
//       description:
//         "Generate, send, and track invoices with ease. Automate billing and keep your payments organized and on time",
//     },
//     {
//       img: "https://via.placeholder.com/150",
//       title: "Card 3",
//       description: "Description for card 3",
//     },
//     {
//       img: "https://via.placeholder.com/150",
//       title: "Card 4",
//       description: "Description for card 4",
//     },
//   ];

//   data.forEach((item) => {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = `
//           <img src="${item.img}" class="card-img-top" alt="${item.title}">
//           <div class="card-body">
//               <h5 class="card-title">${item.title}</h5>
//               <p class="card-text">${item.description}</p>
//           </div>
//       `;
//     cardContainer.appendChild(card);
//   });
// });

function utils() {
  return {
    faqsIndex: [
      {
        question:
          "Why should we switch to cloud-based business management software compared to the traditional desktop software?",
        answer:
          "Cloud-based software offers better scalability, accessibility, and reduces IT maintenance costs.",
      },
      {
        question:
          "Does Casherp offer specific features for HR, Payroll, Invoicing, Sales and Purchasing?",
        answer:
          "Yes, Casherp includes comprehensive features for HR, Payroll, Invoicing, Sales, and Purchasing.",
      },
      {
        question: "What type of customer support does Casherp offer?",
        answer:
          "Casherp provides 24/7 customer support through chat, email, and phone.",
      },
      {
        question:
          "Is there a way to try Casherp before making a purchase or committing to a contract?",
        answer:
          "Yes, Casherp offers a free trial period for potential customers to test the software.",
      },
      {
        question: "Does Casherp support any reporting or analytics tool?",
        answer:
          "Casherp includes built-in reporting and analytics tools to help businesses make data-driven decisions.",
      },
      {
        question:
          "What level of data security and privacy does Casherp provide?",
        answer:
          "Casherp ensures high-level data security and privacy with encryption and regular security audits.",
      },
      {
        question:
          "What benefits does Casherp offers compared to other cloud-based ERP solution?",
        answer:
          "Casherp offers competitive pricing, user-friendly interfaces, and extensive customization options.",
      },
      {
        question:
          "How easy is it to integrate Casherp with other cloud-based software?",
        answer:
          "Casherp is designed with robust APIs that facilitate easy integration with other cloud-based software.",
      },
      {
        question: "What type of scalability features does Casherp offer?",
        answer:
          "Casherp supports scalability to accommodate growing business needs without compromising performance.",
      },
      {
        question:
          "Are there any additional hardware required or subscription charges?",
        answer:
          "No additional hardware is required. Subscription charges are transparent and include all necessary features.",
      },
    ],
    feautureOpen: false,
    reasourcesOpen: false,
    hamburger: false,
  };
}

function cardData() {
  return {
    items: [
      {
        img: "./assests/images/manage 1.svg",
        title: "Management",
        description:
          "Oversee every aspect. Track and follow up with leads, sources, launch campaigns, proposals and lot more",
        bg: "bg-blue-3 blue-shadow",
      },
      {
        img: "./assests/images/invoice.svg",
        title: "Invocing",
        description:
          "Generate, send, and track invoices with ease. Automate billing and keep your payments organized and on time",
        bg: "bg-green-5 green-shadow",
      },
      {
        img: "./assests/images/lead 1.svg",
        title: "Accounting",
        description:
          "Track your income and expenses, generate reports easily and for free, with Casherp's accounting software",
        bg: "bg-yellow-1 yellow-shadow",
      },
      {
        img: "./assests/images/marketing 1.svg",
        title: "Marketing",
        description:
          "Engage customers. Create and track email campaigns, social media engagement, and other marketing initiatives",
        bg: "bg-green-1 green-shadow",
      },
    ],
  };
}

function chooseData() {
  return {
    choose: [
      {
        digit: "4200+ ",
        label: "Users Active",
        description:
          "Our platform is trusted and actively used by over 4,200 professionals who rely on its powerful features to streamline their daily operations and grow their businesses",
      },
      {
        digit: "324+",
        label: "Trusted By Companies",
        description:
          "Companies across various industries trust our platform to manage processes, optimize workflows, enhance productivity, and support sustainable growth",
      },
      {
        digit: "$320M+",
        label: "Business Transactions",
        description:
          "With hundreds of thousands of successful transactions processed, our platform ensures reliable, secure financial management for businesses of all sizes",
      },
    ],
  };
}

function tabComponent() {
  return {
    activeTab: 0,
    tabs: [
      {
        title: "Invoicing",
        bg: "bg-yellow-6",
        frameColor: "bg-yellow-7",
        href: "./invoice.html",
        description:
          "Easily create, send, and track invoices to ensure timely payments and maintain organized billing and financial records.",
        img: "./assests/images/invoice-image.png",
        content:
          "Casherp is the ultimate HRM, CRM and project management solution for  businesses of all sizes. It simplifies your day-to-day operations with  powerful, integrated features such as payroll, invoicing, sales,  marketing, CRM, and purchasing.",
      },
      {
        title: "Accounting",
        bg: "bg-grey",
        href: "./accounting.html",
        frameColor: "bg-blue-3",
        description:
          "Take control and manage your money like a boss, streamline finances, boost efficiency, and keep your budget on track effortlessly",
        img: "./assests/images/accounting-image.png",
        content:
          "Using this module helps in relieving the burden of manual data entry,  prevents common human errors, helps businesses and accountants when tax  time comes around. Casherp allows the user to look at in-depth reports of how their business’ finances are faring.",
      },
      {
        title: "Recruitment  Management",
        bg: "bg-green-4",
        href: "./hr-management.html",
        frameColor: "bg-green-1",
        description:
          "Streamline your hiring  processes, attract top talents and empower your team to find the right candidates effectively",
        img: "./assests/images/hr-management.png",
        content:
          "From posting your jobs to keeping applicants connected and engaged  throughout, Recruitment Module lets you manage your entire recruiting  process. Casherp's Recruitment Module automates and manages your organization's recruiting and staffing operations.",
      },
      {
        title: "Assets Management",
        bg: "bg-yellow-6",
        href: "./resources.html",
        frameColor: "bg-yellow-7",
        description:
          "Track, evaluate, maximize the value of your assets efficiently, and enhance your organization's financial health",
        img: "./assests/images/assests-image.png",
        content:
          "Assets Management Module provides the ability of managing company's assets inside Casherp's dashboard. You will be able to separate your assets based on groups/locations/units and assign them to staff members. The module helps you gain insights, reduce risks, and make informed decisions",
      },
      {
        title: "Fleet Management",
        bg: "bg-grey",
        frameColor: "bg-blue-3",
        description:
          "Assets Management Module provides the ability of managing company's assets inside Casherp's dashboard. You will be able to separate your assets based on groups/locations/units and assign them to staff members. The module helps you gain insights, reduce risks, and make informed decisions",
        img: "./assests/images/fleet-image.png",
        content:
          "CashERP facilitates the centralized management of your vehicle and driver information through our robust and compliant Fleet Management Software. Stay ahead of issues with proactive fleet management that keeps your operations running smoothly and efficiently.",
      },
    ],
    init() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              this.activeTab = parseInt(id.split("-")[1]);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      this.$nextTick(() => {
        document.querySelectorAll(".tab-content").forEach((tab) => {
          observer.observe(tab);
        });
      });
    },
    scrollToTab(index) {
      const tab = document.getElementById(`tab-${index}`);
      tab.scrollIntoView({
        behavior: "smooth",
      });
    },
  };
}

function carouselComponent() {
  return {
    currentIndex: 0,
    startCarousel() {
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    slides: [
      {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Kira Boats",
        position: "Founder, KB Tech",
        bg: "bg-purple",
        content:
          "“Since implementing their CRM solution, we have seen a remarkable improvement in our team's collaboration and productivity.”",
      },
      {
        image: "../assests/images/slide2.png",
        alt: "Slide 2",
        name: "Sarah Watts",
        bg: "bg-green-4",
        position: "Business Owner",
        content:
          "“This app has transformed how we manage our operations. From customer relationships to finances, everything is streamlined and easy to track.”",
      },
      {
        image: "../assests/images/slide3.png",
        alt: "Slide 3",
        name: "Robert Kelvin",
        bg: "bg-blue-5",
        position: "HR Director, Sparks Tech",
        content:
          "“It’s like having multiple management tools in one place! We love how we can handle our HR, marketing, and inventory all from a single platform.”",
      },
      {
        image: "../assests/images/slide4.png",
        alt: "Slide 4",
        name: "Mike Dallas",
        bg: "bg-purple",
        position: "Sales Manager, Business Owner",
        content:
          "“Our company grew fast, and this app helped us keep up. The professional plan gave us the features we needed to stay organized and efficient.”",
      },
      {
        image: "../assests/images/slide5.png",
        alt: "Slide 5",
        name: "Karen Taylor",
        bg: "bg-green-4",
        position: "Logistics Coordinator, Wave-Rider",
        content:
          "“Managing our fleet has never been easier. We can track vehicles in real-time and schedule maintenance without missing a beat.”",
      },
    ],
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  };
}
