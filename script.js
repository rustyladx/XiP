document.addEventListener('DOMContentLoaded', function () {
  new Typed('#typed-text', {
    strings: ["Create.", "Develop.", "Hack."],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
});
const sidebar = document.getElementById("mySidebar");
const themeToggle = document.getElementById("themeToggle");
const menuIcon = document.querySelector(".menu-icon");
const overlay = document.getElementById("overlay");

function toggleSidebar(icon) {
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-50%" : "0px";
  overlay.classList.toggle("active", !isOpen);
  icon.classList.toggle("open", !isOpen);
}

function closeSidebar() {
  sidebar.style.left = "-50%";
  overlay.classList.remove("active");
  menuIcon.classList.remove("open");
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  // Store the current theme mode in localStorage
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if there's a saved theme preference in localStorage
  const savedTheme = localStorage.getItem("theme");

  // If saved theme is dark, apply dark mode
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true; // Set toggle to checked if dark mode is active
  }

  // Disable right-click, copy, and text selection
  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("copy", e => e.preventDefault());
  document.addEventListener("selectstart", e => e.preventDefault());
});
