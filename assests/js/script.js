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
document.addEventListener("alpine:init", () => {
  Alpine.data("customCheckboxComponent", () => ({
    checked: false,
    bgColor: "#FF0000", // Example background color
    toggle() {
      this.checked = !this.checked;
    },
  }));
});
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
    faqsInvoice: [
      {
        question: "How do I create an invoice?",
        answer:
          "Creating an invoice is simple. Just navigate to the invoice section, fill out the required fields, and click 'Create'. You can customize the fields to suit your business needs.",
      },
      {
        question: "Can I customize my invoice?",
        answer:
          "Yes, you can customize your invoice to include your logo, specific terms, and other custom fields to meet your business requirements.",
      },
      {
        question: "What payment methods can I include on my invoices?",
        answer:
          "You can include various payment methods such as credit cards, bank transfers, and PayPal. The available options can be configured in the payment settings.",
      },
      {
        question: "How can I track the status of my invoices?",
        answer:
          "You can track the status of your invoices in the invoice management section. Each invoice will display whether it is sent, viewed, paid, or overdue.",
      },
      {
        question: "Can I set up recurring invoices for regular clients?",
        answer:
          "Absolutely. You can set up recurring invoices for regular clients by selecting the recurring option when creating an invoice. This will automatically send invoices at specified intervals.",
      },
      {
        question: "What should I do if a client doesn’t pay on time?",
        answer:
          "If a client doesn’t pay on time, you can send them a reminder. You can also set up automatic reminders to be sent before and after the due date.",
      },
      {
        question: "Is there a way to see my invoicing history?",
        answer:
          "Yes, you can view your entire invoicing history in the invoice management section. This includes all sent, paid, and overdue invoices.",
      },
      {
        question: "Can I send invoices in multiple currencies?",
        answer:
          "Yes, you can send invoices in multiple currencies. This feature allows you to bill clients in their preferred currency, ensuring smooth international transactions.",
      },
    ],
    faqsAccount: [
      {
        question: "How do I access my financial reports?",
        answer:
          "You can access your financial reports through our user-friendly dashboard. Simply navigate to the 'Reports' section, where you can generate and view various financial reports with a few clicks.",
      },
      {
        question: "Can I import my existing financial data?",
        answer:
          "Yes, our platform allows you to import your existing financial data seamlessly. You can upload files in supported formats, and our system will integrate the data into your current setup without any hassle.",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "Absolutely. We prioritize the security of your financial data with advanced encryption, secure servers, and regular backups. Your data is protected against unauthorized access and breaches.",
      },
      {
        question: "What type of reports can I generate?",
        answer:
          "You can generate a wide range of reports, including profit and loss statements, balance sheets, cash flow statements, expense reports, and custom reports tailored to your specific needs.",
      },
      {
        question: "Can I set budget for different departments?",
        answer:
          "Yes, you can set and manage budgets for different departments. This feature helps you monitor spending, maintain financial discipline, and quickly identify variances to adjust your strategies accordingly.",
      },
      {
        question: "Is there customer support available?",
        answer:
          "Yes, we offer dedicated customer support to assist you with any issues or questions you may have. Our support team is available via phone, email, and chat to ensure you get the help you need promptly.",
      },
      {
        question: "Can I track my expenses in real time?",
        answer:
          "Yes, our platform provides real-time expense tracking. You can monitor and categorize all your business expenses as they occur, helping you stay on top of your financial health and identify areas for cost savings.",
      },
      {
        question: "Do you offer multi-currency support?",
        answer:
          "Yes, we offer multi-currency support, enabling you to handle international transactions seamlessly. Our system automatically tracks exchange rates and conversions, making it easy to manage global finances.",
      },
    ],
    faqsHr: [
      {
        question: "How does the onboarding process work?",
        answer:
          "The onboarding process is streamlined through our platform, allowing you to collect necessary documents, assign tasks, and provide training schedules for new hires. This ensures they transition smoothly and are fully prepared from day one.",
      },
      {
        question: "Can I track employee performance over time?",
        answer:
          "Yes, our system allows you to monitor employee performance through goal-setting, continuous feedback, and detailed reviews, helping to foster growth and boost productivity.",
      },
      {
        question: "Is attendance tracking automated?",
        answer:
          "Absolutely! Our attendance tracking feature automates the recording of employee work hours, ensuring accurate data for payroll calculations and compliance with labor regulations.",
      },
      {
        question: "How do I manage employee leave requests?",
        answer:
          "You can manage leave requests seamlessly through our platform. The system allows for easy submission, approvals, and comprehensive tracking of employee leaves, ensuring smooth operations during absences.",
      },
      {
        question: "Does the system integrate with payroll?",
        answer:
          "Yes, our HR management system integrates effortlessly with payroll, ensuring accurate and timely payments by synchronizing attendance, leave, and performance data.",
      },
      {
        question: "What compliance features are included?",
        answer:
          "Our platform includes features for tracking certifications, contracts, and compliance with local labor laws and industry regulations, helping you maintain HR best practices.",
      },
      {
        question: "Can I customize the HR process for my business?",
        answer:
          "Absolutely! The HR management system is highly customizable, allowing you to tailor processes to fit the unique needs of your business.",
      },
      {
        question: "Is there customer support available for HR management?",
        answer:
          "Yes, we offer dedicated customer support to assist you with any questions or issues related to HR management. Our team is here to help you maximize the value of our platform.",
      },
    ],
    faqsAssets: [
      {
        question: "What is asset management, and why is it important?",
        answer:
          "Asset management is the process of monitoring and maintaining assets throughout their lifecycle, from acquisition to disposal. It is important because it helps organizations optimize asset performance, reduce costs, ensure compliance, and maximize the value derived from their investments.",
      },
      {
        question: "How can I track the location and condition of my assets?",
        answer:
          "You can track the location and condition of your assets using real-time GPS technology and our asset management software. The platform provides a dashboard that displays the current status, location, and maintenance history of each asset.",
      },
      {
        question: "Can I set maintenance reminders for my assets?",
        answer:
          "Yes, our platform allows you to set automatic maintenance reminders for your assets. This feature helps ensure timely service and repairs, prolonging asset lifespan and minimizing downtime.",
      },
      {
        question: "Does your system calculate asset depreciation?",
        answer:
          "Yes, our system automatically calculates asset depreciation based on the chosen depreciation method. This feature allows you to keep accurate financial records and assess the current value of your assets.",
      },
      {
        question: "Can I categorize my assets by type or location?",
        answer:
          "Yes, you can easily categorize your assets by type, location, department, or any other custom criteria. This functionality enhances organization and makes it easier to manage and locate assets within your inventory.",
      },
      {
        question: "How does the platform handle asset audits?",
        answer:
          "Our platform simplifies asset audits by providing tools for conducting regular audits and verifying the location, condition, and status of each asset. You can generate audit reports to ensure compliance and maintain accurate records.",
      },
      {
        question: "Does the platform integrate with accounting systems?",
        answer:
          "Yes, our asset management platform integrates seamlessly with various accounting systems. This integration ensures accurate financial data synchronization, simplifying budgeting, reporting, and tax preparation.",
      },
      {
        question: "Can I generate reports on asset performance?",
        answer:
          "Absolutely! Our platform allows you to generate detailed reports on asset performance, usage patterns, and maintenance history. These insights enable you to make informed decisions and optimize asset management strategies.",
      },
    ],
    faqsPurchase: [
      {
        question: "What is purchase management, and why is it important?",
        answer:
          "Purchase management is the process of overseeing and controlling the procurement of goods and services within an organization. It is important because it helps organizations optimize their purchasing decisions, control costs, maintain supplier relationships, and ensure timely delivery of products.",
      },
      {
        question: "How can I track my purchase orders?",
        answer:
          "You can track your purchase orders in real-time using our purchase management platform. It provides a dashboard that displays the status of all orders, including order confirmation, shipment tracking, and delivery timelines.",
      },
      {
        question: "Can I manage supplier information?",
        answer:
          "Yes, our platform allows you to maintain detailed profiles of your suppliers, including contact information, pricing, lead times, and performance metrics. This helps strengthen supplier relationships and negotiate better deals.",
      },
      {
        question: "How does budget control work?",
        answer:
          "Budget control allows you to set and manage budgets for different departments or projects. You can monitor spending against these budgets, ensuring that expenditures remain within limits and promoting effective resource allocation.",
      },
      {
        question: "What features do you offer for purchase requests?",
        answer:
          "Our platform includes customizable purchase request forms, automated approval workflows, and compliance checks, streamlining the request process and ensuring that all purchases align with company policies.",
      },
      {
        question: "Are reports available for purchase analytics?",
        answer:
          "Yes, our system provides comprehensive reporting capabilities that enable you to analyze purchasing trends, supplier performance, and budget usage. These reports facilitate data-driven decision-making.",
      },
      {
        question: "Can I establish approval workflows for purchases?",
        answer:
          "Absolutely! Our platform allows you to create customized approval workflows for purchase requests, ensuring that all purchases go through the necessary approvals before being processed.",
      },
      {
        question: "Does the platform integrate with inventory management?",
        answer:
          "Yes, our purchase management system integrates seamlessly with inventory management, allowing you to optimize ordering processes, reduce stockouts, and manage excess inventory effectively.",
      },
    ],
    faqsFleet: [
      {
        question: "What is fleet management?",
        answer:
          "Fleet management is the process of overseeing, organizing, and maintaining a company's vehicle fleet. It includes vehicle acquisition, tracking, maintenance, fuel management, driver management, and regulatory compliance to ensure efficient and cost-effective fleet operations.",
      },
      {
        question: "How can I track my vehicles in real-time?",
        answer:
          "You can track your vehicles in real-time using advanced GPS technology integrated into our fleet management system. This provides complete visibility of all vehicles, allowing you to optimize routes, improve efficiency, and reduce travel time.",
      },
      {
        question: "What maintenance features are included?",
        answer:
          "Our platform includes automated maintenance schedules and reminders for all vehicles in your fleet. This ensures timely service and repairs, minimizes downtime, enhances safety, and extends the lifespan of your assets.",
      },
      {
        question: "How does fuel management work?",
        answer:
          "Fuel management features allow you to track fuel consumption and expenses in detail. You can identify trends and reduce costs by managing fuel efficiency effectively, making informed purchasing decisions, and monitoring fuel usage across your fleet.",
      },
      {
        question: "Can I manage driver information?",
        answer:
          "Yes, our system allows you to maintain comprehensive profiles for each driver, including performance metrics, safety records, and training history. This helps ensure compliance, enhance safety, and improve overall fleet operations.",
      },
      {
        question: "What kind of reports can I generate?",
        answer:
          "You can generate a variety of reports on fleet performance, maintenance history, fuel usage, and driver behavior. These reports provide valuable insights that empower you to make informed decisions and drive continuous improvement in your fleet management.",
      },
      {
        question: "How do you ensure compliance with regulations?",
        answer:
          "Our platform helps ensure compliance with regulations by maintaining accurate records of vehicle maintenance, driver information, and operational activities. This includes automated reminders for regulatory deadlines and comprehensive documentation management.",
      },
      {
        question: "How can I reduce fleet operating costs?",
        answer:
          "You can reduce fleet operating costs by using our system to optimize routes, automate maintenance schedules, manage fuel consumption, and analyze cost data. These features help identify savings opportunities and improve operational efficiency, leading to reduced expenses.",
      },
    ],

    feautureOpen: false,
    reasourcesOpen: false,
    hamburger: false,
    check: true,
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
        img: "./assests/images/invoice.png",
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
          "Manage, and optimize your fleet with real-time insights and automation. Monitor performance, reduce costs, and streamline operations",
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
    changeTab(index) {
      this.activeTab = index; // Change tab on click
      this.scrollToTab(index);
    },
    prevTab() {
      if (this.activeTab > 0) {
        this.activeTab--;
        this.scrollToTab(this.activeTab);
      }
    },
    nextTab() {
      if (this.activeTab < this.tabs.length - 1) {
        this.activeTab++;
        this.scrollToTab(this.activeTab);
      }
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
