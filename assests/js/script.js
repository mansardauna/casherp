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
//       img: "../assests/images/",
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
          "Cloud-based software offers better scalability, accessibility, and reduces IT maintenance costs.Cloud-based software provides you a low-cost, secure & mobile  software solutions. Compared to traditional software that requires it to install on a computer, cloud-based can be accessed from anywhere without any hardware dependency.",
      },
      {
        question:
          "Does Casherp offer specific features for HR, Payroll, Invoicing, Sales and Purchasing?",
        answer:
          "Casherp offers unique customization options that allow our clients to  tailor the system's features to their specific needs. This  cost-effective solution increases efficiency while allowing customers to avoid unnecessary costs. Customers can also integrate their ERP system with third-party solutions",
      },
      {
        question: "What type of customer support does Casherp offer?",
        answer:
          "Casherp provides 24/7 customer support through chat, email, and phone.Casherp's customer support team offers round the clock service. Our support services are available  across different modes like telephone, online chat, and email. We guarantee speedy responses too.",
      },
      {
        question:
          "Is there a way to try Casherp before making a purchase or committing to a contract?",
        answer:
          "Yes, Casherp offers a free trial period for potential customers to test the software.If you are interested in taking  Casherp for a spin, you can take advantage of our free 30-day trial and  get a first-hand experience of our ERP features without having to make a purchase or commit to a contract. The trial period is a great way to decide if Casherp is the right solution for your needs.",
      },
      {
        question: "Does Casherp support any reporting or analytics tool?",
        answer:
          "Yes, Casherp offers an extensive range of reporting and analytics tools to help you gain insights into your business operations. Our intuitive dashboards and customizable reporting features enable you to drill down into specific areas of your business to uncover detailed  information about the financial and operational health of your  organization.",
      },
      {
        question:
          "What level of data security and privacy does Casherp provide?",
        answer:
          "Cloud-based software provides you a low-cost, secure & mobile  software solutions. Compared to traditional software that requires it to install on a computer, cloud-based can be accessed from anywhere without any hardware dependency.",
      },
      {
        question:
          "What benefits does Casherp offers compared to other cloud-based ERP solution?",
        answer:
          "Casherp takes the complexity out of cloud-based ERP solutions. It is easy to learn and use, and can be set up quickly. Clients receive dedicated support from our team if they have any issues or questions,  ensuring that their businesses run smoothly.",
      },
      {
        question:
          "How easy is it to integrate Casherp with other cloud-based software?",
        answer:
          "Integrating Casherp with other software solutions is easy and  convenient. Our platform is designed to offer seamless support for  popular applications such as QuickBooks, Magento, and Microsoft  Dynamics, and is also built with powerful API integration capabilities.",
      },
      {
        question: "What type of scalability features does Casherp offer?",
        answer:
          "Casherp's scalability features enable businesses to issue updates and  upgrade their existing applications, all without changes being required  on the underlying infrastructure. This valuable scalability feature also ensures that data is securely stored and can easily be accessed across  the organization.",
      },
      {
        question:
          "Are there any additional hardware required or subscription charges?",
        answer:
          "This is cloud-based software. You'll only need a device with an internet connection & chrome browser. It runs within the browser. No  additional hardware is required. But you can use some hardware like  barcode scanners, and printers for your convenience to speed up work.",
      },
    ],
    faqsInvoice: [
      {
        question: "How do I create an invoice?",
        answer:
          "Simply log into your account, navigate to the invoicing section, and choose a template. Fill in the necessary details, and you’re ready to send!",
      },
      {
        question: "Can I customize my invoice?",
        answer:
          "Yes! Our platform allows you to customize your invoices with your branding, including your logo, colors, and fonts.",
      },
      {
        question: "What payment methods can I include on my invoices?",
        answer:
          "You can include various payment options, such as credit cards, bank transfers, and online payment gateways, making it easy for your clients to pay.",
      },
      {
        question: "How can I track the status of my invoices?",
        answer:
          "You can track your invoices in real-time to see if they’ve been sent, viewed, or paid. Notifications will keep you informed of any updates.",
      },
      {
        question: "Can I set up recurring invoices for regular clients?",
        answer:
          "Absolutely! You can easily set up recurring invoices to automate billing for clients with regular services.",
      },
      {
        question: "What should I do if a client doesn’t pay on time?",
        answer:
          "We accept all major credit cards, debit cards, and bank transfers.",
      },
      {
        question: "Is there a way to see my invoicing history?",
        answer:
          "Yes! You can access a complete invoicing history, including paid and unpaid invoices, for easy tracking and reporting.",
      },
      {
        question: "Can I send invoices in multiple currencies?",
        answer:
          "Yes, our invoicing system supports multi-currency transactions, allowing you to send invoices in your client’s preferred currency.",
      },
    ],
    faqsAccount: [
      {
        question: "How do I access my financial reports?",
        answer:
          "You can easily access your financial reports by navigating to the reporting section of your accounting dashboard. All reports are available for viewing and downloading.",
      },
      {
        question: "Can I import my existing financial data?",
        answer:
          "Yes, you can import your existing financial data from various formats, including CSV and Excel files, to ensure a smooth transition to our accounting system.",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "Absolutely! We prioritize your data security with end-to-end encryption and regular security audits to keep your financial information safe.",
      },
      {
        question: "What type of reports can I generate?",
        answer:
          "You can generate a variety of reports, including profit and loss statements, balance sheets, cash flow reports, and expense tracking summaries.",
      },
      {
        question: "Can I set budget for different departments?",
        answer:
          "Yes, our budgeting tools allow you to set and manage separate budgets for different departments or projects, making it easier to control spending.",
      },
      {
        question: "Is there customer support available?",
        answer:
          "Yes, we offer customer support through chat, email, and phone to assist you with any questions or issues you may encounter while using the accounting features.",
      },
      {
        question: "Can I track my expenses in real time?",
        answer:
          "Yes, our accounting system allows you to track and categorize your expenses in real time, providing you with up-to-date insights into your spending habits.",
      },
      {
        question: "Do you offer multi-currency support?",
        answer:
          "Yes, our accounting features include multi-currency support, allowing you to manage and track international transactions easily while automatically handling conversions.",
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
    faqsPricing: [
      {
        question: "What pricing plans do you offer?",
        answer:
          "We offer Standard, Professional, and Premium pricing plans to suit various business needs. You can find more details about each plan on our pricing page.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, we offer a 14-day free trial for all our plans. No credit card is required to sign up for the free trial.",
      },
      {
        question: "Can I switch plans later?",
        answer:
          "Absolutely! You can upgrade or downgrade your plan at any time from your account settings. The changes will take effect immediately.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal.",
      },
      {
        question: "What happens if I exceed my plan limits?",
        answer:
          "If you exceed your plan limits, you will be notified and given the option to upgrade your plan to accommodate your needs. We also offer flexible add-ons for extra storage and users.",
      },
      {
        question: "Are there any setup fees?",
        answer:
          "No, there are no setup fees for any of our plans. You can sign up and start using our services without any additional charges.",
      },
    ],
    faqsFile: [
      {
        question: "What is file sharing?",
        answer:
          "File sharing is the practice of distributing or providing access to digital files such as documents, images, videos, and other data. This can be done via the internet or a local network, allowing multiple users to access, modify, and share the same files.",
      },
      {
        question: "How do I upload files?",
        answer:
          "To upload files, you typically need to click on the 'Upload' button or drag and drop your files into the designated area on the platform you're using. Follow the on-screen instructions to complete the upload process.",
      },
      {
        question: "Is my data secure when sharing files?",
        answer:
          "Yes, your data is secure when sharing files, provided you use a reputable file-sharing service. These services often employ encryption, secure access protocols, and other security measures to protect your data from unauthorized access.",
      },
      {
        question: "How do I set permissions for shared files?",
        answer:
          "To set permissions for shared files, go to the file or folder settings and look for an option to manage permissions or access. You can usually specify who can view, edit, or manage the files by adding their email addresses and assigning appropriate roles or permissions.",
      },
      {
        question: "Can I track who accessed my files?",
        answer:
          "Yes, many file-sharing services provide activity logs or tracking features that allow you to see who accessed your files, when they accessed them, and what actions they performed (such as viewing, editing, or downloading).",
      },
      {
        question: "What types of files can I share?",
        answer:
          "You can share various types of files including documents, spreadsheets, presentations, images, videos, audio files, and more. The specific types of files you can share may depend on the file-sharing service you're using.",
      },
      {
        question: "How do I delete or revoke access to shared files?",
        answer:
          "To delete or revoke access to shared files, go to the file or folder settings and look for an option to remove access or delete the file. You can usually select the users whose access you want to revoke or simply delete the file to remove it entirely from the shared location.",
      },
      {
        question: "Can I collaborate on files with my team?",
        answer:
          "Yes, most file-sharing services support collaboration features that allow multiple users to work on the same files simultaneously. You can share files with your team, set permissions, and use collaboration tools like comments, version history, and real-time editing to work together effectively.",
      },
    ],
    faqsAffiliate: [
      {
        question: "How do I get paid?",
        answer:
          "You get paid via PayPal or bank transfer on a monthly basis, provided you meet the minimum payout threshold.",
      },
      {
        question: "Is there a cost to join?",
        answer:
          "No, joining our affiliate program is completely free. There are no setup fees or hidden charges.",
      },
      {
        question: "How can I track my earnings?",
        answer:
          "You can track your earnings in real-time through your affiliate dashboard, where you can see detailed reports on your commissions.",
      },
      {
        question: "Are there any marketing tools provided?",
        answer:
          "Yes, we provide a variety of marketing tools including banners, text links, and email templates to help you promote our products effectively.",
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
        img: "../assests/images/manage 1.svg",
        title: "Management",
        description:
          "Oversee every aspect. Track and follow up with leads, sources, launch campaigns, proposals and lot more",
        bg: "bg-blue-3 blue-shadow",
      },
      {
        img: "../assests/images/invoice.svg",
        title: "Invocing",
        description:
          "Generate, send, and track invoices with ease. Automate billing and keep your payments organized and on time",
        bg: "bg-green-5 green-shadow",
      },
      {
        img: "../assests/images/lead 1.svg",
        title: "Accounting",
        description:
          "Track your income and expenses, generate reports easily and for free, with Casherp's accounting software",
        bg: "bg-yellow-1 yellow-shadow",
      },
      {
        img: "../assests/images/marketing 1.svg",
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
        digitColor: "",
        label: "Users Active",
        description:
          "Our platform is trusted and actively used by over 4,200 professionals who rely on its powerful features to streamline their daily operations and grow their businesses",
      },
      {
        digit: "324+",
        digitColor: "text-yellow-1",
        label: "Trusted By Companies",
        description:
          "Companies across various industries trust our platform to manage processes, optimize workflows, enhance productivity, and support sustainable growth",
      },
      {
        digit: "$320M+",
        digitColor: "text-green-1",
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
        img: "../assests/images/invoice.png",
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
        img: "../assests/images/accounting-image.png",
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
        img: "../assests/images/hr-management.png",
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
        img: "../assests/images/assests-image.png",
        content:
          "Assets Management Module provides the ability of managing company's assets inside Casherp's dashboard. You will be able to separate your assets based on groups/locations/units and assign them to staff members. The module helps you gain insights, reduce risks, and make informed decisions",
      },
      {
        title: "Fleet Management",
        bg: "bg-grey",
        frameColor: "bg-blue-3",
        description:
          "Manage, and optimize your fleet with real-time insights and automation. Monitor performance, reduce costs, and streamline operations",
        img: "../assests/images/fleet-image.png",
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
        content: `“Since implementing their CRM solution, we have seen a remarkable improvement in our team's collaboration and <span class="text-blue-2"> productivity.</span>”`,
      },
      {
        image: "../assests/images/slide2.png",
        alt: "Slide 2",
        name: "Sarah Watts",
        bg: "bg-green-4",
        position: "Business Owner",
        content: `“This app has  <span class="text-yellow-1">transformed</span> how we manage our operations. From customer relationships to finances, everything is <span class="text-yellow-1">streamlined</span> and easy to track.”`,
      },
      {
        image: "../assests/images/slide3.png",
        alt: "Slide 3",
        name: "Robert Kelvin",
        bg: "bg-blue-5",
        position: "HR Director, Sparks Tech",
        content: `“It’s like having <span class="text-green-1">multiple management</span> tools in one place! We love how we can handle our HR, marketing, and inventory all from a single platform.”`,
      },
      {
        image: "../assests/images/slide4.png",
        alt: "Slide 4",
        name: "Mike Dallas",
        bg: "bg-purple",
        position: "Sales Manager, Business Owner",
        content: `“Our company grew fast, and this app helped us keep up. The professional plan gave us the features we needed to stay <span class="text-blue-2">organized</span> and efficient.”`,
      },
      {
        image: "../assests/images/slide5.png",
        alt: "Slide 5",
        name: "Karen Taylor",
        bg: "bg-green-4",
        position: "Logistics Coordinator, Wave-Rider",
        content: `“Managing our fleet has never been easier. We can track vehicles in <span class="text-yellow-1">real-time</span> and schedule maintenance without missing a beat.”`,
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
