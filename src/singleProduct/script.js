document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".links a");
  const descriptions = document.querySelectorAll(".description");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all links and descriptions
      links.forEach((link) => link.classList.remove("active"));
      descriptions.forEach((description) =>
        description.classList.remove("active")
      );

      // Add active class to the clicked link and corresponding description
      this.classList.add("active");
      const targetId = this.id.replace("link", "description");
      document.getElementById(targetId).classList.add("active");
    });
  });
});
