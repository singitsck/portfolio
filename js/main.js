/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },

  /* mousewheel: true,
  keyboard: true, */
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SKILLS BAR WIDTH ====================*/
document.addEventListener("DOMContentLoaded", function() {
  const skillsData = document.querySelectorAll('.skills__data');
  skillsData.forEach(skill => {
    const percentageElement = skill.querySelector('.skills__number');
    const percentage = percentageElement.textContent.trim();
    const bar = skill.querySelector('.skills__percentage');
    bar.style.width = percentage;
  });
});

/*==================== CONTACT FORM HANDLING ====================*/
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    // Google Analytics: 追蹤表單提交
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        'event_category': 'Contact',
        'event_label': 'Contact Form',
        'value': 1
      });
    }
    
    // Create mailto link with form data
    const mailtoLink = `mailto:chunkitsiu@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message (optional)
    alert("正在開啟您的郵件客戶端...");
    
    // Reset form after a short delay
    setTimeout(() => {
      contactForm.reset();
    }, 1000);
  });
}

/*==================== GOOGLE ANALYTICS EVENT TRACKING ====================*/

// 追蹤社交媒體連結點擊
document.addEventListener('DOMContentLoaded', function() {
  // 追蹤所有外部連結（社交媒體）
  const socialLinks = document.querySelectorAll('.home__social-icon, .footer__social');
  socialLinks.forEach(link => {
    link.addEventListener('click', function() {
      const platform = this.href.includes('linkedin') ? 'LinkedIn' :
                      this.href.includes('twitter') ? 'Twitter' :
                      this.href.includes('github') ? 'GitHub' : 'Social Media';
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Social Media',
          'event_label': platform,
          'transport_type': 'beacon'
        });
      }
    });
  });

  // 追蹤導航連結點擊
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const section = this.getAttribute('href');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'navigation', {
          'event_category': 'Navigation',
          'event_label': section,
          'transport_type': 'beacon'
        });
      }
    });
  });

  // 追蹤 CV 下載
  const cvLink = document.querySelector('a[href*="CV.pdf"]');
  if (cvLink) {
    cvLink.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'file_download', {
          'event_category': 'Downloads',
          'event_label': 'CV.pdf',
          'transport_type': 'beacon'
        });
      }
    });
  }

  // 追蹤服務詳情查看
  const serviceButtons = document.querySelectorAll('.services__button');
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceTitle = this.closest('.services__content').querySelector('.services__title').textContent.trim();
      if (typeof gtag !== 'undefined') {
        gtag('event', 'view_service', {
          'event_category': 'Services',
          'event_label': serviceTitle,
          'transport_type': 'beacon'
        });
      }
    });
  });

  // 追蹤作品集互動
  const portfolioItems = document.querySelectorAll('.portfolio__content, .portfolio__YouTube');
  portfolioItems.forEach(item => {
    const portfolioTitle = item.querySelector('.portfolio__title')?.textContent.trim() || 'Portfolio Item';
    item.addEventListener('click', function(e) {
      // 只在點擊圖片或標題時追蹤，避免重複
      if (e.target.tagName === 'IMG' || e.target.tagName === 'H3') {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'view_portfolio', {
            'event_category': 'Portfolio',
            'event_label': portfolioTitle,
            'transport_type': 'beacon'
          });
        }
      }
    });
  });

  // 追蹤主題切換
  const themeButton = document.getElementById('theme-button');
  if (themeButton) {
    themeButton.addEventListener('click', function() {
      const currentTheme = document.body.classList.contains('dark-theme') ? 'Dark' : 'Light';
      const newTheme = currentTheme === 'Dark' ? 'Light' : 'Dark';
      if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_change', {
          'event_category': 'Settings',
          'event_label': newTheme,
          'transport_type': 'beacon'
        });
      }
    });
  }

  // 追蹤滾動深度（當用戶滾動到 25%, 50%, 75%, 100%）
  let scrollTracked = {
    '25%': false,
    '50%': false,
    '75%': false,
    '100%': false
  };

  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);

    // 追蹤滾動深度
    if (scrollPercent >= 25 && !scrollTracked['25%']) {
      scrollTracked['25%'] = true;
      trackScrollDepth(25);
    } else if (scrollPercent >= 50 && !scrollTracked['50%']) {
      scrollTracked['50%'] = true;
      trackScrollDepth(50);
    } else if (scrollPercent >= 75 && !scrollTracked['75%']) {
      scrollTracked['75%'] = true;
      trackScrollDepth(75);
    } else if (scrollPercent >= 100 && !scrollTracked['100%']) {
      scrollTracked['100%'] = true;
      trackScrollDepth(100);
    }
  });

  function trackScrollDepth(percent) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'scroll', {
        'event_category': 'Engagement',
        'event_label': `Scroll Depth ${percent}%`,
        'value': percent,
        'transport_type': 'beacon'
      });
    }
  }

  // 追蹤頁面停留時間（當用戶離開頁面時）
  let startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // 秒
    if (typeof gtag !== 'undefined' && timeSpent > 0) {
      gtag('event', 'time_on_page', {
        'event_category': 'Engagement',
        'event_label': 'Time Spent',
        'value': timeSpent,
        'transport_type': 'beacon'
      });
    }
  });

  // 追蹤聯絡資訊點擊
  const contactLinks = document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]');
  contactLinks.forEach(link => {
    link.addEventListener('click', function() {
      const contactType = this.href.startsWith('tel:') ? 'Phone' : 'Email';
      if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_click', {
          'event_category': 'Contact',
          'event_label': contactType,
          'transport_type': 'beacon'
        });
      }
    });
  });

  // Cookie 同意彈窗處理（已禁用 - 默認接受 Cookies）
  // 如果需要重新啟用 Cookie 同意彈窗，請取消以下註釋並修改 index.html 中的 consent default 設置
  /*
  const cookieConsent = document.getElementById('cookie-consent');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');
  */
});