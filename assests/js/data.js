function teamData() {
  return {
    teamMembers: [
      {
        name: "Patrick Mungo",
        role: "CEO & Co-Founder",
        image: "../assests/images/c.e.o.png",
      },
      {
        name: "Daniel Prince",
        role: "Chief Operating Officer",
        image: "../assests/images/prince.png",
      },
      {
        name: "Shila Kumar",
        role: "Chief Marketing Officer",
        image: "../assests/images/shila.png",
      },
      {
        name: "Jacob West",
        role: "Lead Software Engineer",
        image: "../assests/images/jacob.png",
      },
      {
        name: "Tiana Mendez",
        role: "Customer Success Manager",
        image: "../assests/images/tiana.png",
      },
      {
        name: "Esther Lance",
        role: "Finance Director",
        image: "../assests/images/esther.png",
      },
      {
        name: "Sean Walter",
        role: "Head of Product Development",
        image: "../assests/images/sean.png",
      },
      {
        name: "Henry Miles",
        role: "Head of Sales",
        image: "../assests/images/henry.png",
      },
    ],
  };
}
function renderTeamMembers() {
  const data = teamData();
  const container = document.getElementById("team-container");

  data.teamMembers.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.className =
      "col-md-4 col-lg-3 team-member mt-4 text-center d-flex flex-column gap-1";

    memberDiv.innerHTML = `
          <img src="${member.image}" alt="Profile Image">
          <span class="fs-18 fw-500 lh-28">${member.name}</span>
          <span class="body-medium-font-size fw-400">${member.role}</span>
      `;

    container.appendChild(memberDiv);
  });
}
// Call the render function
renderTeamMembers();

function blogData() {
  return {
    trendingPost: {
      image: "../assests/images/trending-1.png", // Replace with actual image URL
      date: "15 Oct 2024",
      title: "5 Ways Casherp Simplifies Invoicing for Small Businesses",
      excerpt:
        "Managing invoices can be a time-consuming, repetitive task that small business owners dread. From creating invoices to sending reminders and tracking payments...",
    },
    trendingSidePosts: [
      {
        image: "../assests/images/trending-2.png", // Replace with actual image URL
        date: "09 Oct 2024",
        title: "Boost Productivity with These 5 Time-Saving Tools",
        excerpt:
          "In a world where efficiency is everything, time is one of the most...",
      },
      {
        image: "../assests/images/trending-4.png", // Replace with actual image URL
        date: "23 Sept 2024",
        title: "Why Asset Management Matters for Growing Businesses",
        excerpt:
          "Managing assets is critical for any growing business. From vehicles and...",
      },
      {
        image: "../assests/images/trending-3.png", // Replace with actual image URL
        date: "20 Sept 2024",
        title: "The Power of Data: How Analytics Can Drive Business Growth",
        excerpt:
          "In today’s competitive marketplace, data-driven decisions are crucial for...",
      },
    ],
    allPosts: [
      {
        image: "../assests/images/trending-1.png", // Replace with actual image URL
        date: "15 Oct 2024",
        title: "5 Ways Casherp Simplifies Invoicing for Small Businesses",
        excerpt:
          "Managing invoices can be a time-consuming, repetitive task that small business owners dread. From creating...",
      },
      {
        image: "../assests/images/trending-2.png", // Replace with actual image URL
        date: "09 Oct 2024",
        title: "Boost Productivity with These 5 Time-Saving Tools",
        excerpt:
          "In today’s fast-paced business world, maximizing productivity is crucial. This post explores five...",
      },
      {
        image: "../assests/images/trending-4.png", // Replace with actual image URL
        date: "23 Sept 2024",
        title: "Why Asset Management Matters for Growing Businesses",
        excerpt:
          "Managing assets is critical for any growing business. From vehicles and machinery to computers and office...",
      },
      {
        image: "../assests/images/trending-3.png", // Replace with actual image URL
        date: "20 Sept 2024",
        title: "The Power of Data: How Analytics Can Drive Business Growth",
        excerpt:
          "In today’s competitive marketplace, data-driven decisions are crucial for success. Companies that...",
      },
      {
        image: "../assests/images/trending-5.png", // Replace with actual image URL
        date: "18 May 2024",
        title: "The Importance of Payroll Integration in HR Management",
        excerpt:
          "HR management is about more than just managing people—it’s about managing their time, performance...",
      },
      {
        image: "../assests/images/trending-6.png", // Replace with actual image URL
        date: "30 Apr 2024",
        title: "How to Build a Winning Remote Team: Strategies for Success",
        excerpt:
          "Remote work has moved from a trend to a business necessity. But how do you ensure your remote team...",
      },
      {
        image: "../assests/images/trending-5.png", // Replace with actual image URL
        date: "14 June 2024",
        title: "Mastering Customer Relationships: A Guide to Building Loyalty",
        excerpt:
          "Loyal customers are the backbone of any successful business. Building and maintaining strong customer...",
      },
      {
        image: "../assests/images/trending-6.png", // Replace with actual image URL
        date: "18 May 2024",
        title: "The Importance of Payroll Integration in HR Management",
        excerpt:
          "HR management is about more than just managing people—it’s about managing their time, performance...",
      },
      {
        image: "../assests/images/trending-5.png", // Replace with actual image URL
        date: "30 Apr 2024",
        title: "How to Build a Winning Remote Team: Strategies for Success",
        excerpt:
          "Remote work has moved from a trend to a business necessity. But how do you ensure your remote team...",
      },
    ],
  };
}

function knowledge() {
  return {
    knowledgeData: [
      {
        category: "Estimates",
        details:
          "Create estimate within a minute, sent to your customers and wait to accept, add notes for better organization for your next actions, create reminders. Ability to auto convert the estimate to invoice after customer accept.",
      },
      {
        category: "Proposals",
        details:
          "Create good looking proposals for leads or customers and increase sales. Receive notification when proposal is accepted/declined and auto send thank you email to your customer after accepting the proposal. Proposal overdue notice before X days available.",
      },
      {
        category: "Online Payments",
        details:
          "Receive payments from Paypal, Stripe, Mollie, Authorize.net, 2Checkout, PayU Money and Braintree, we have implemented payment gateways that are available in most of the countries.",
      },
      {
        category: "Projects",
        details:
          "Manage projects and track time spent on project for each staff member. Record project expenses and invoices and bill your clients faster. Professional Gantt Chart included for each project and staff member.",
      },
      {
        category: "Leads",
        details:
          "Leads or potential clients are really important part to any company. Every company trying everyday to get new leads. Very often happend some potential client to call and ask for specific service that your company serve and then sometimes this is forgotten. With Casherp you will never forget your potential clients and you will be able to manage all of them in one place. Keep track of leads in one place and easily follow their progress. Ability to auto import leads from email, add notes, create proposals.",
      },
      {
        category: "Web to Lead Form",
        details:
          "Create unlimited web to lead forms and inject in your landing page or website. This feature allows you to import leads into Casherp from form. Use web to lead forms to gather potential clients information, allow them to request quotes directly from your website.",
      },
      {
        category: "Contracts",
        details:
          "You can add new contracts based on your clients. Adding contracts is very simple, you can set start date and end date and have clear view of all your company contracts in one place. You won't need anymore to search in your desk documents. Create PDF contracts and send to your customers from Casherp. Contract overdue reminders available.",
      },
      {
        category: "Tickets",
        details:
          "Great support ticket system with autoresponse, private ticket staff notes, ticket assignments, attachments, predefined ticket replies, insert knowledge base link, ticket priorities, ticket statuses. Feature for auto importing tickets via Email Forwarder/IMAP method included. Let your customer reply and create new tickets via email, without accessing the client portal.",
      },
      {
        category: "Departments",
        details:
          "Assign your staff to specific departments and ability to auto import tickets by department email.",
      },
      {
        category: "Custom Fields",
        details:
          "Custom fields can store extra information for customers, leads, tickets, invoices, company, estimates and more.",
      },
      {
        category: "Staff Reminders",
        details:
          "Setup staff reminders for staff member with ability to notify by email and built-in. Reminders are available for important features.",
      },
      {
        category: "Events",
        details:
          "Create private or public events and stay organized with built-in notifications. Receive email alerts when an event is approaching, ensuring you never miss an important moment.",
      },
      {
        category: "Email Templates",
        details:
          "Setup predefined email templates from text editor. Merge fields available and multi language options available.",
      },
      {
        category: "Staff Roles & Permission",
        details:
          "You can give staff specific permissions on what they can do or can’t do. Role permissions can be overridden for each staff.",
      },
      {
        category: "Goals Tracking",
        details:
          "Setup goals and tracking achievements. Use the Goals Tracking feature to keep sales goals in mind.",
      },
      {
        category: "Personal To-Do",
        details:
          "Every staff member can have their own personal todo dashboard which will allow your staff member to easily organize their work.",
      },
      {
        category: "Staff",
        details:
          "Manage all your staff members from one place with ease. Track attendance, performance, leave requests, and payroll, all from a centralized and user-friendly interface.",
      },
      {
        category: "Company Newsfeed",
        details:
          "Share great company events, upload documents, easy employees communications.",
      },
      {
        category: "Staff tasks",
        details:
          "Assign task to multiple employees, add task followers, task comments allowed, task attachments. Link tasks to many Casherp features and stay organized.",
      },
      {
        category: "Recurring Tasks",
        details: "Create tasks that will be auto created for a given period.",
      },
      {
        category: "Surveys",
        details:
          "Create surveys with one click. Send to staff, leads, clients or manually created mail lists. Increase customer retention via built-in Surveys.",
      },
      {
        category: "Reports",
        details:
          "Generate detailed and customizable reports to gain insights into your business performance. Analyze financial data, track key metrics, and make informed decisions with real-time, accurate reporting.",
      },
      {
        category: "Media Library",
        details:
          "Upload files in media library. Each staff member that is not admin have their own folder for uploading files.",
      },
      {
        category: "Activity Log",
        details:
          "Track all staff activity. Adding new items, creating, deleting.",
      },
      {
        category: "Assets Management",
        details:
          "Assets Management Module for Casherp, is a module that provides the ability of managing company’s assets inside Casherp’s dashboard. You will be able to separate your assets based on groups/locations/units and assign them to staff members.",
      },
      {
        category: "Manufacturing Management",
        details:
          "Manufacturing Management Module gives you the control you need over all aspects of production planning and materials management so that you can focus each day on increasing profits. Our flexible manufacturing management solution supports the entire spectrum of manufacturing styles, from high volume to engineer-to-order, and coordinates orders, equipment, facilities, inventory, and work-in-progress to minimize costs and maximize on-time delivery.",
      },
      {
        category: "Recruitment Management",
        details:
          "Recruitment for Casherp, is a set of tools designed to automate and manage your organization’s recruiting and staffing operations. From posting your jobs to keeping applicants connected and engaged throughout, Recruitment Module lets you manage your entire recruiting process.",
      },
      {
        category: "Inventory Management",
        details:
          "Inventory Management is a tool that allows you to track goods across your business’s supply chain. It optimizes the entire spectrum spanning from order placement with your vendor to order delivery to your customer, mapping the complete journey of a product.",
      },
      {
        category: "MailFlow - Customers & Leads Newsletter",
        details:
          "MailFlow enables businesses to effectively engage with leads and customers by creating and sending personalized newsletters. With its comprehensive set of features and advanced filters, MailFlow empowers businesses to optimize their email marketing campaigns and enhance customer communication.",
      },
      {
        category: "File Sharing & Transferring",
        details:
          "File Sharing is a versatile online file sharing platform designed to facilitate seamless sharing of multiple files among clients, partners, and colleagues. With File Sharing, you have the flexibility to send files either through email or via a shareable URL, allowing you to effortlessly collaborate and distribute content.",
      },
    ],
    expandedFaqs: [],
    toggleFaq(index) {
      if (this.expandedFaqs.includes(index)) {
        this.expandedFaqs = this.expandedFaqs.filter((i) => i !== index);
      } else {
        this.expandedFaqs.push(index);
      }
    },
  };
}

// pricing

document.addEventListener("DOMContentLoaded", renderTeamMembers);
