document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });
  
  let currentSlide = 0;
  const trainerSlides = document.querySelectorAll(".trainer");
  const totalSlides = trainerSlides.length;
  
  function showSlide(index) {
    trainerSlides.forEach((slide) => {
      slide.style.display = "none";
    });
  
    trainerSlides[index].style.display = "block";
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }
  
  showSlide(currentSlide);
  
  document.querySelector("#nextBtn").addEventListener("click", nextSlide);
  document.querySelector("#prevBtn").addEventListener("click", prevSlide);
  
  setInterval(nextSlide, 2000);
  
  document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });
  
  function toggleRegistrationForm() {
    const registrationForm = document.querySelector(".registration-form");
    registrationForm.classList.toggle("active");
  }
  
  document.querySelector(".btn").addEventListener("click", function () {
    toggleRegistrationForm();
  });
  
  document.querySelector("#submitBtn").addEventListener("click", function () {
    alert("Form submitted!");
    toggleRegistrationForm();
    location.reload();
  });
  