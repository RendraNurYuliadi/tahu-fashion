const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header .navbar ul li a");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Desktop nav
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Mobile nav
  mobileNavLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  // Sticky navbar on scroll
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.content-faq');

  // Buka item pertama saat halaman dimuat
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }

  // Tambahkan event click untuk handle buka/tutup
  document.querySelectorAll('.content-faq .question').forEach(q => {
    q.addEventListener('click', function () {
      const parent = this.parentElement;
      const isActive = parent.classList.contains('active');

      // Tutup semua
      faqItems.forEach(item => item.classList.remove('active'));

      // Kalau sebelumnya belum aktif, baru kita aktifkan
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const closeNav = document.getElementById("closeNav");
  const navOverlay = document.getElementById("navOverlay");

  function openMobileNav() {
    mobileNav.style.display = "flex"; // ini yang akan munculin nav
    navOverlay.style.display = "block";
  }  

  function closeMobileNav() {
    mobileNav.style.display = "none";
    navOverlay.style.display = "none";
  }

  hamburgerBtn.addEventListener("click", openMobileNav);
  closeNav.addEventListener("click", closeMobileNav);
  navOverlay.addEventListener("click", closeMobileNav);


  const backToHome = document.getElementById("backToHome");
  const homeSection = document.getElementById("home");
  
  let isVisible = false; // Buat status toggle
  
  window.addEventListener("scroll", () => {
    const rect = homeSection.getBoundingClientRect();
    const triggerPoint = window.innerHeight / 2;
  
    if ((rect.bottom < triggerPoint || rect.top > window.innerHeight) && !isVisible) {
      // Tampilkan dengan animasi fadeIn
      backToHome.classList.remove("animate__fadeOut");
      backToHome.classList.add("animate__fadeIn");
      backToHome.style.display = "block";
      isVisible = true;
    } else if (!(rect.bottom < triggerPoint || rect.top > window.innerHeight) && isVisible) {
      // Sembunyikan dengan animasi fadeOut
      backToHome.classList.remove("animate__fadeIn");
      backToHome.classList.add("animate__fadeOut");
  
      // Tunggu animasi selesai baru sembunyikan elemen
      setTimeout(() => {
        backToHome.style.display = "none";
      }, 500); // 500ms = durasi default animate.css
      isVisible = false;
    }
  });
  
  


  document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("categorySelect");
    const icon = document.getElementById("dropdownIcon");
  
    select.addEventListener("mousedown", function () {
      icon.src = "/assets/PublicPageAssets/drop-open.png";
    });
  
    select.addEventListener("blur", function () {
      icon.src = "/assets/PublicPageAssets/drop-close.png";
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const categorySelect = document.getElementById("categorySelect");
    const productCards = document.querySelectorAll(".product-card");
    const emptyProductDiv = document.querySelector(".empty-product");
  
    function filterProducts() {
      const searchValue = searchInput.value.toLowerCase();
      const selectedCategory = categorySelect.value.toLowerCase();
      let anyVisible = false;
  
      productCards.forEach(card => {
        const title = card.querySelector(".data-card h1").textContent.toLowerCase();
        const category = card.querySelector(".data-card h3").textContent.toLowerCase();
  
        const matchesSearch = title.includes(searchValue);
        const matchesCategory = selectedCategory === "" || category === selectedCategory;
  
        if (matchesSearch && matchesCategory) {
          card.style.display = "block";
          anyVisible = true;
        } else {
          card.style.display = "none";
        }
      });
  
      // Tampilkan/hilangkan pesan kosong
      if (!anyVisible) {
        emptyProductDiv.style.display = "block";
      } else {
        emptyProductDiv.style.display = "none";
      }
    }
  
    // Event listeners
    searchInput.addEventListener("input", filterProducts);
    categorySelect.addEventListener("change", filterProducts);
  });
  