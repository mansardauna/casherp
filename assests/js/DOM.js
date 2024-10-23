// tabScroll.js
function setupTabScroll() {
  const tabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // Initially set the first tab as active
  if (tabs.length > 0) {
    tabs[0].classList.add("active-nav-tab");
  }

  // Scroll event listener
  window.addEventListener("scroll", () => {
    let activeIndex = -1;

    // Check which tab content is currently in view
    tabContents.forEach((content, index) => {
      const rect = content.getBoundingClientRect();
      // Check if the content is at least partially in the viewport
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        activeIndex = index; // Get the index of the active content
      }
    });

    // Remove active class from all tabs and add to the active tab
    tabs.forEach((tab, index) => {
      tab.classList.remove("active-nav-tab");
      if (index === activeIndex) {
        tab.classList.add("active-nav-tab");
      }
    });
  });
}

// Export the function if using ES6 modules
export { setupTabScroll };
