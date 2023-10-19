// Function to add the "active" class to the corresponding nav-link
function setActiveNavLinks() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");
  const nav = document.getElementById("nav");

  // Add an event listener for scrolling
  window.addEventListener("scroll", () => {
    const offsetBy = window.scrollY + nav.offsetHeight;
    const fromTop = offsetBy;

    navLinks.forEach((navLink, index) => {
      const section = sections[index];
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLinks();
});
