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

function toggleNavItems() {
  const navItems = document.getElementById("nav-items");
  navItems.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  hamburgerBtn.addEventListener("click", toggleNavItems);
});

function privacyTabs() {
  return {
    selectedTab: "information",
    setTab(tab) {
      this.selectedTab = tab;
    },
  };
}

function termsTabs() {
  return {
    selectedTab: "use-of-services",
    setTab(tab) {
      this.selectedTab = tab;
    },
  };
}

function toggleNavbar() {
  const navbar = document.getElementById("navbarResponsive");
  navbar.classList.toggle("collapse");
}

function toggleDropdown(dropdownId, imgId) {
  const dropdown = document.getElementById(dropdownId);
  const img = document.getElementById(imgId);

  // Toggle dropdown visibility
  const isDisplayed = dropdown.style.display === "block";
  dropdown.style.display = isDisplayed ? "none" : "block";

  // Rotate the image based on dropdown state
  img.style.transform = isDisplayed ? "rotate(0deg)" : "rotate(180deg)";
}

function toggleCheckbox(element) {
  const parent = element.parentNode; // Get the parent to modify the style
  if (
    element.style.backgroundColor === "transparent" ||
    element.style.backgroundColor === ""
  ) {
    element.style.backgroundColor = "green"; // Change this to your desired color
  } else {
    element.style.backgroundColor = "transparent"; // Reset the background color
  }
}

// Close dropdowns when clicking outside
window.onclick = function (event) {
  if (
    !event.target.matches(".btn-tertiary-custom") &&
    !event.target.matches(".dropdown")
  ) {
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });

    // Reset rotation for all dropdown images when closed
    const imgs = document.querySelectorAll(".dropdown-icon");
    imgs.forEach((img) => {
      img.style.transform = "rotate(0deg)";
    });
  }
};
