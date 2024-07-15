document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://getform.io/f/ajjemvma", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        document.getElementById("successMessage").style.display = "block";
        form.reset();
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  });

function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
  document.getElementById("successMessage").style.display = "none";
}
let currentIndex = 0;

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (n >= slides.length) {
    currentIndex = 0;
  }
  if (n < 0) {
    currentIndex = slides.length - 1;
  }
  const offset = -currentIndex * 25;
  document.querySelector(
    ".slider-inner"
  ).style.transform = `translateX(${offset}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function currentSlide(n) {
  showSlides((currentIndex = n));
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(currentIndex);
  setInterval(function () {
    currentSlide((currentIndex += 1));
  }, 3000); // Change image every 3 seconds
});

const projectImage = document.getElementById("projectImage");
const contentSection = document.querySelector(".content-section"); 

contentSection.addEventListener("click", (event) => {
 
  if (event.target.tagName === "LI") {
    // Check if clicked element is a list item (LI)
    const clickedProject = event.target.textContent.trim(); 
    switch (clickedProject) {
      case "Better Strategy & Quality":
        projectImage.src = "./assets/project-3.png"; 
        break;
      case "Global Network":
        projectImage.src = "./assets/project-1.png"; 
        break;
      case "On-Time Delivery":
        projectImage.src = "./assets/project-2.png"; 
        break;
    }
  }
});
