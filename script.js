
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const id = link.getAttribute("href");
      const target = document.querySelector(id);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", id);
      }
    });
  });

  // Update footer year automatically
  const footer = document.querySelector(".footer span");

  if (footer) {
    footer.textContent =
      "© " + new Date().getFullYear() + " Mayank Kashyap";
  }

  console.log("Mayank's portfolio is ready!");
});
