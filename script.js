const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

const servicesDropdown = document.querySelector(".nav-dropdown");
const servicesToggle = document.querySelector(".nav-dropdown-toggle");
if (servicesDropdown && servicesToggle) {
  servicesToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = servicesDropdown.classList.toggle("open");
    servicesToggle.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (event) => {
    if (!servicesDropdown.contains(event.target)) {
      servicesDropdown.classList.remove("open");
      servicesToggle.setAttribute("aria-expanded", "false");
    }
  });
  servicesDropdown.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    servicesDropdown.classList.remove("open");
    servicesToggle.setAttribute("aria-expanded", "false");
  }));
}

document.getElementById("year").textContent = new Date().getFullYear();
