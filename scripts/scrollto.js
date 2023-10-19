function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  const nav = document.getElementById("nav");

  if (element) {
    const offset = -1 * nav.offsetHeight; // Adjust the offset as needed 42 on tablet and desktop
    const offsetPosition = element.offsetTop + offset;

    window.scroll({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");
// Attach click event to each navigation link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = navLink.getAttribute("href").substring(1); // Remove the "#" symbol
    scrollToElement(targetId);
  });
});


  // Get all navigation links
const navButtons = document.querySelectorAll(".nav-button");
// Attach click event to each navigation link
navButtons.forEach((navButton) => {
  navButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = navButton.getAttribute("href").substring(1); // Remove the "#" symbol
    scrollToElement(targetId);
  })
});
