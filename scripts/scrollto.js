function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    const offset = -42; // Adjust the offset as needed
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
