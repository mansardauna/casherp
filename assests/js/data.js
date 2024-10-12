function trialComponent() {
  return {
    headline: "Your success starts here—let's take the next step together",
    description:
      "Discover the powerful features that streamline every aspect of your business, from customer management to financial tracking, so you can focus on scaling your success faster than ever before.",
    subheadline:
      "Try our platform free for 14 days and experience all its features",
    buttonText: "Start free trial",
    buttonImage: "./assests/images/Frame (10).svg",
    mainImage: "./assests/images/Group.png",
    backgroundImage: "./assests/images/trial.svg",
  };
}
function triaIinvoice() {
  return {
    headline: "Fed Up with Chasing Payments?",
    description:
      "Streamline your invoicing process and eliminate manual tracking hassles. Our platform ensures timely payments, minimizes errors, and delivers insightful reports to boost your cash flow and billing efficiency",
    subheadline:
      "Experience everything our platform has to offer with a 14-day free trial",
    buttonText: "Start free trial",
    buttonImage: "./assests/images/Frame (10).svg",
    mainImage: "./assests/images/invoice-trial.png",
  };
}

function heroData() {
  return {
    data: {
      invoice: {
        title: "Effortless Invoicing, Seamless Payments",
        description:
          "With Casherp, create, send, and track invoices in minutes. Get paid faster with automated reminders, detailed reports, and secure payment processing—all in one easy-to-use platform",
        img: "./assests/images/invoicing-hero.png",
        bg: "bg-green-3",
      },
      accounting: {
        title: "Master Your Finances Like a Pro",
        description:
          "Track, manage, and optimize your financial health effortlessly with Casherp’s intuitive accounting tools, designed to provide you with clear insights, streamline your workflows, and simplify your reporting",
        img: "./assests/images/accounting-hero.png",
        bg: "bg-brand",
      },
      hrManagement: {
        title: "Manage Your Team with Ease",
        description:
          "With Casherp, streamline HR tasks, track employee performance, handle onboarding, and simplify payroll—all in one seamless platform designed to help you manage your workforce effortlessly",
        img: "./assests/images/hr-management-hero.png",
        bg: "bg-yellow-3",
      },
      assets: {
        title: "Take Control of Your Assets With Ease",
        description:
          "Track, manage, and optimize all your assets seamlessly in one comprehensive platform, giving you full control, greater visibility, and the tools to maximize efficiency and resource allocation",
        img: "./assests/images/assets-hero.png",
        bg: "bg-green-3",
      },
      purchase: {
        title: "Unlock the Full Potential of Your Procurement",
        description:
          "Streamline your purchasing process with our intuitive tools designed to enhance efficiency, effectively manage supplier relationships, and optimize your budget for maximum profitability and growth",
        img: "./assests/images/purchase-hero.png",
        bg: "bg-brand",
      },

      fleetManagement: {
        title: "Fleet Management Made Simple",
        description:
          "Transform your fleet into a powerful asset with our comprehensive management solutions, designed to optimize routes, enhance safety, and improve overall performance",
        img: "./assests/images/fleet-hero.png",
        bg: "bg-yellow-3",
      },
    },
  };
}

function featuresComponent() {
  return {
    categories: {
      invoice: {
        title: "Send. Track. Get Paid. Easy as That!",
        features: [
          {
            label: "Automation",
            title: "Automation",
            description:
              "Set up recurring invoices to automatically bill clients at regular intervals. This feature saves time, reduces manual tasks, and ensures you never miss a billing cycle.",
            icon: "./assests/images/automation-icon.svg", // replace with actual path
          },
          {
            label: "Scheduling",
            title: "Scheduling",
            description:
              "Generate detailed reports on paid, unpaid, and overdue invoices with just a click. These insights help you track revenue, monitor client payment habits, and make data-driven financial decisions.",
            icon: "./assests/images/scheduling-icon.svg", // replace with actual path
          },
          {
            label: "One-Click Payment",
            title: "One-Click Payment",
            description:
              "Offer clients the convenience of one-click payments through secure gateways. Simplifying the payment process improves cash flow and makes it easier for clients to settle invoices quickly.",
            icon: "./assests/images/one-click-payment-icon.svg", // replace with actual path
          },
          {
            label: "Tracking",
            title: "Tracking",
            description:
              "Monitor the status of every invoice in real-time. Know when invoices are sent, viewed, or paid, helping you stay on top of outstanding payments with ease.",
            icon: "./assests/images/tracking-icon.svg", // replace with actual path
          },
          {
            label: "Multi-Currency",
            title: "Multi-Currency",
            description:
              "Send invoices in any currency, making it easy to bill international clients. Multi-currency support ensures accurate conversions and professional invoicing across borders.",
            icon: "./assests/images/multi-currency-icon.svg", // replace with actual path
          },
          {
            label: "Reminder",
            title: "Reminder",
            description:
              "Automated reminders ensure you never have to chase down payments again. Customize the timing and tone to fit your style, helping reduce overdue invoices while maintaining client relationships.",
            icon: "./assests/images/reminder-icon.svg", // replace with actual path
          },
        ],
        bg: "bg-grey",
      },
      hrManagement: {
        title: "Streamline Your HR Processes",
        features: [
          {
            label: "Employee Onboarding",
            title: "Employee Onboarding",
            description:
              "Streamline the entire onboarding process by collecting documents, assigning tasks, and providing training schedules, ensuring new hires transition smoothly and are fully prepared from day one.",
            icon: "./assests/images/employee-onboarding-icon.svg", // replace with actual path
          },
          {
            label: "Attendance Tracking",
            title: "Attendance Tracking",
            description:
              "Track employee attendance and work hours automatically, ensuring accurate records for effective workforce management, precise payroll calculations, and compliance with labor regulations.",
            icon: "./assests/images/attendance-tracking-icon.svg", // replace with actual path
          },
          {
            label: "Performance Management",
            title: "Performance Management",
            description:
              "Monitor employee performance with goal-setting, continuous feedback, and detailed reviews, helping team members grow and reach their full potential while boosting overall productivity.",
            icon: "./assests/images/performance-management-icon.svg", // replace with actual path
          },
          {
            label: "Leave Management",
            title: "Leave Management",
            description:
              "Manage leave requests, approvals, and comprehensive tracking in one simple interface, keeping your team’s availability clear and ensuring that operations continue smoothly during employee absences.",
            icon: "./assests/images/leave-management-icon.svg", // replace with actual path
          },
          {
            label: "Payroll Integration",
            title: "Payroll Integration",
            description:
              "Seamlessly integrate payroll with attendance, leave, and performance data to ensure accurate, timely payments, effectively reducing errors and streamlining the entire payroll process.",
            icon: "./assests/images/payroll-integration-icon.svg", // replace with actual path
          },
          {
            label: "Regulation Tracking",
            title: "Regulation Tracking",
            description:
              "Easily track certifications, contracts, and other critical documentation to stay compliant with local labor laws and industry regulations, ensuring your HR practices remain up to standard.",
            icon: "./assests/images/regulation-tracking-icon.svg", // replace with actual path
          },
        ],
        bg: "bg-grey",
      },
      accounting: {
        title: "Simplify Your Financial Operations",
        features: [
          {
            label: "Financial Reporting",
            title: "Financial Reporting",
            description:
              "Generate instant, comprehensive financial reports to gain real-time insights into your business performance and make informed decisions. Track profit and loss, cash flow, and balance sheets effortlessly.",
            icon: "./assests/images/financial-reporting-icon.svg", // replace with actual path
          },
          {
            label: "Expense Tracking",
            title: "Expense Tracking",
            description:
              "Track and categorize all your business expenses easily, helping you monitor spending habits and identify areas for cost savings. Stay on top of your budget and ensure financial health.",
            icon: "./assests/images/expense-tracking-icon.svg", // replace with actual path
          },
          {
            label: "Bank Reconciliation",
            title: "Bank Reconciliation",
            description:
              "Automatically reconcile bank transactions with your accounting records, ensuring accuracy and greatly simplifying the end-of-month reconciliation process for your growing business.",
            icon: "./assests/images/bank-reconciliation-icon.svg", // replace with actual path
          },
          {
            label: "Budgeting Tools",
            title: "Budgeting Tools",
            description:
              "Set and manage budgets for different departments or projects, allowing you to monitor spending and maintain financial discipline. Identify variances quickly and adjust your strategies accordingly.",
            icon: "./assests/images/budgeting-tools-icon.svg", // replace with actual path
          },
          {
            label: "Task Management",
            title: "Task Management",
            description:
              "Simplify tax preparation with tools that help you calculate and manage taxes throughout the year, ensuring compliance and accuracy. Reduce the stress of tax season with organized records.",
            icon: "./assests/images/task-management-icon.svg", // replace with actual path
          },
          {
            label: "Multi-Currency",
            title: "Multi-Currency",
            description:
              "Handle international transactions seamlessly with multi-currency support, automatically tracking exchange rates and conversions. Manage global finances effortlessly and expand your market reach.",
            icon: "./assests/images/multi-currency-icon.svg", // replace with actual path
          },
        ],
        bg: "bg-green-4",
      },
      assets: {
        title: "Track. Control. Optimize. Master Your Assets!",
        features: [
          {
            label: "Tracking",
            title: "Tracking",
            description:
              "Easily monitor all your assets in real time, ensuring accurate, up-to-date records of their location, status, and condition. Automated tracking keeps operations efficient and eliminates manual effort.",
            icon: "./assests/images/tracking-icon.svg", // replace with actual path
          },
          {
            label: "Maintenance",
            title: "Maintenance",
            description:
              "Set up automatic maintenance schedules to prolong asset lifespans and minimize unexpected downtime. Prevent costly repairs and disruptions with proactive maintenance management.",
            icon: "./assests/images/maintenance-icon.svg", // replace with actual path
          },
          {
            label: "Auditing",
            title: "Auditing",
            description:
              "Conduct regular asset audits to verify the location, condition, and status of each asset. Ensure your records remain accurate, providing full transparency across your entire inventory.",
            icon: "./assests/images/auditing-icon.svg", // replace with actual path
          },
          {
            label: "Reporting",
            title: "Reporting",
            description:
              "Generate detailed reports and analytics to gain actionable insights into asset performance and usage patterns. Use these data-driven insights to optimize resource allocation and decision-making.",
            icon: "./assests/images/reporting-icon.svg", // replace with actual path
          },
          {
            label: "Lifecycle",
            title: "Lifecycle",
            description:
              "Manage the complete asset lifecycle from acquisition to disposal, ensuring optimal usage and reducing overall costs. Gain full control over every stage of the asset’s lifecycle.",
            icon: "./assests/images/lifecycle-icon.svg", // replace with actual path
          },
          {
            label: "Integration",
            title: "Integration",
            description:
              "Integrate asset management with your accounting systems to ensure accurate, synchronized financial data. Simplify budgeting, reporting, and tax preparation with seamless data integration.",
            icon: "./assests/images/integration-icon.svg", // replace with actual path
          },
        ],
        bg: "bg-grey",
      },
      fleetManagement: {
        title: "Order. Control. Transform. Revolutionize Your Purchasing!",
        features: [
          {
            label: "Tracking",
            title: "Tracking",
            description:
              "Monitor your fleet's location in real-time using advanced GPS technology, ensuring complete visibility of all vehicles and allowing you to optimize routes for improved efficiency and reduced travel time.",
            icon: "./assests/images/tracking-icon.svg",
          },
          {
            label: "Maintenance",
            title: "Maintenance",
            description:
              "Automate maintenance schedules and reminders for all vehicles in your fleet, ensuring timely service and repairs that minimize downtime, enhance safety, and extend the lifespan of your assets.",
            icon: "./assests/images/maintenance-icon.svg",
          },
          {
            label: "Fuel Management",
            title: "Fuel Management",
            description:
              "Track fuel consumption and expenses in detail to identify trends and reduce costs, enabling you to manage fuel efficiency effectively and make informed purchasing decisions that benefit your budget.",
            icon: "./assests/images/fuel-management-icon.svg",
          },
          {
            label: "Driver Management",
            title: "Driver Management",
            description:
              "Maintain comprehensive profiles for each driver, including performance metrics, safety records, and training history, helping you ensure compliance and enhance overall safety within your fleet operations.",
            icon: "./assests/images/driver-management-icon.svg",
          },
          {
            label: "Reporting",
            title: "Reporting",
            description:
              "Generate reports on fleet performance, maintenance history, fuel usage, and driver behavior, providing valuable insights that empower you to make informed decisions and drive continuous improvement.",
            icon: "./assests/images/reporting-icon.svg",
          },
          {
            label: "Cost Analysis",
            title: "Cost Analysis",
            description:
              "Analyze all costs associated with your fleet, including maintenance, fuel, and labor. By pinpointing savings opportunities and tracking expenses closely, you can enhance operational efficiency.",
            icon: "./assests/images/cost-analysis-icon.svg",
          },
        ],
        bg: "bg-grey",
      },
      purchase: {
        title: "Order. Control. Transform. Revolutionize Your Purchasing!",
        features: [
          {
            label: "Order Tracking",
            title: "Order Tracking",
            description:
              "Easily monitor all your purchase orders in real time, ensuring accurate records of order status, delivery timelines, and any potential delays to keep your operations running smoothly.",
            icon: "./assests/images/order-tracking-icon.svg",
          },
          {
            label: "Supplier Management",
            title: "Supplier Management",
            description:
              "Maintain detailed profiles of your suppliers, including contact information, pricing, lead times, and performance metrics, to strengthen your relationships and negotiate better deals.",
            icon: "./assests/images/supplier-management-icon.svg",
          },
          {
            label: "Budgeting",
            title: "Budgeting",
            description:
              "Set and manage budgets for each department to ensure spending stays within limits. This helps you allocate resources effectively and maintain financial control across your organization.",
            icon: "./assests/images/budgeting-icon.svg",
          },
          {
            label: "Requests",
            title: "Requests",
            description:
              "Simplify the purchase request process with customizable forms that streamline approvals and ensure compliance with company policies, allowing for faster and more efficient purchasing decisions.",
            icon: "./assests/images/requests-icon.svg",
          },
          {
            label: "Reporting",
            title: "Reporting",
            description:
              "Generate comprehensive reports and analytics that provide valuable insights into purchasing trends, supplier performance, and budget usage, enabling data-driven decision-making.",
            icon: "./assests/images/reporting-icon.svg",
          },
          {
            label: "Inventory",
            title: "Inventory",
            description:
              "Integrate your purchase management system with inventory levels to optimize ordering processes, helping you reduce stockouts, manage excess inventory, and improve overall efficiency.",
            icon: "./assests/images/inventory-icon.svg",
          },

          // Add more Fleet Management features here
        ],
        bg: "bg-green-4",
      },
    },
  };
}

function faqDataInvoice() {
  return {
    expandedAll: false,
    toggleExpandAll() {
      this.expandedAll = !this.expandedAll;
      this.faqs.forEach((faq) => {
        faq.expanded = this.expandedAll;
      });
    },
    toggleExpand(faq) {
      faq.expanded = !faq.expanded;
    },
  };
}

function emailOptionData() {
  return {
    data: {
      invoicing: {
        title: "Ready to make that money? Get on now!",
        bg: "bg-purple-2",
      },
      accounting: {
        title: "Get Set to Grow Your Wealth! Start today!",
        bg: "bg-yellow-3",
      },
      hrManagement: {
        title: "Prepare to Elevate Your Team! join the action!",
        bg: "bg-purple-2",
      },
      assets: {
        title: "Ready to Take Control of Your Assets? jump in now!",
        bg: "bg-purple-2",
      },
      purchase: {
        title: "Prepared to Master Your Procurement? act now!",
        bg: "bg-yellow-3",
      },
      fleetManagement: {
        title: "Excited to Enhance Your Fleet Management? don’t miss out",
        bg: "bg-purple-2",
      },
    },
  };
}

function testimonialData() {
  return {
    data: {
      invoice: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Zarah Amir",
        position: "Founder, Creative Designs Co",
        bg: "bg-yellow-3",
        content:
          "I’ve been using the invoicing feature for a few months, and it has transformed my billing process! The customizable templates and automated reminders keep everything professional and on track. Plus, the one-click payment option is a game-changer for my clients. Highly recommend it!",
      },
      accounting: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Jayden Rodriguez",
        position: "Accountant, Business Solutions Inc.",
        bg: "bg-purple-2",
        content:
          "Using the accounting features has completely transformed how I manage my finances. The real-time reporting gives me a clear picture of my business's health, while the expense tracking has helped me identify cost-saving opportunities.",
      },
      hrManagement: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Sarah Thompson",
        position: "Operations Manager, Tech Innovations Ltd.",
        bg: "bg-blue-5",
        content:
          "Casherp's HR tools have made managing our team incredibly effortless. The onboarding process is simple, and automated attendance tracking saves us valuable time. Their customer support is fantastic! I highly recommend Casherp to any business",
      },
      assets: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Tammy Lee",
        position: "Operations Manager at TechWorks",
        bg: "bg-yellow-3",
        content:
          "          Casherp’s asset management system has completely streamlined how we track and maintain our resources. The seamless integration with our accounting software has saved us time and made reporting much easier. It’s been a game-changer for our efficiency!",
      },
      purchase: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "James Carter",
        position: "Procurement Director at Global Supplies",
        bg: "bg-purple-2",
        content:
          " Casherp’s purchase management system has transformed how we handle procurement. Tracking orders is a breeze, and supplier management has never been easier. The reporting tools provide invaluable insights that help us make better purchasing decisions. Highly recommend! ",
      },
      purchase: {
        image: "../assests/images/slide1.png",
        alt: "Slide 1",
        name: "Jamal Kabir",
        position: "Fleet Manager at Green Logistics",
        bg: "bg-blue-5",
        content:
          " Casherp has completely transformed how we manage our fleet. The real-time tracking and automated maintenance reminders have made a huge difference in our efficiency. We can now optimize our routes and keep our vehicles running smoothly, which has saved us both time and money. Highly recommend!",
      },
    },
  };
}
