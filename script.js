console.log("DWJ website loaded successfully.");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuToggle.textContent = "×";
  } else {
    menuToggle.textContent = "☰";
  }
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/* GALLERY SWITCHER */

const galleryTabs = document.querySelectorAll(".gallery-tab");
const galleryPanels = document.querySelectorAll(".gallery-panel");

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetGallery = tab.getAttribute("data-gallery");

    galleryTabs.forEach((item) => {
      item.classList.remove("active");
    });

    galleryPanels.forEach((panel) => {
      panel.classList.remove("active-gallery");
    });

    tab.classList.add("active");
    document
      .getElementById(targetGallery)
      .classList.add("active-gallery");
  });
});