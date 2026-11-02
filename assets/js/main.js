/* ==========================================================================
   ESTATEIN — GLOBAL SCRIPTS (Header, Hero Slider, Stats, Forms, Agents...)
   ========================================================================== */

/* Sample agents — replace via backend (agents table) in production */
const AGENTS = [
  { id: 1, name: "Sarah Johnson", role: "Senior Property Consultant", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", phone: "+15551234567", whatsapp: "15551234567", email: "sarah.johnson@example.com" },
  { id: 2, name: "Michael Chen", role: "Luxury Homes Specialist", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", phone: "+15552345678", whatsapp: "15552345678", email: "michael.chen@example.com" },
  { id: 3, name: "Emily Rodriguez", role: "Commercial Property Expert", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", phone: "+15553456789", whatsapp: "15553456789", email: "emily.rodriguez@example.com" },
  { id: 4, name: "David Williams", role: "Rental Properties Advisor", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", phone: "+15554567890", whatsapp: "15554567890", email: "david.williams@example.com" }
];

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileNavClose();
  initHeroSlider();
  initSearchForm();
  initCounters();
  initBackToTop();
  initNewsletterForms();
  initContactForm();
  initSellForm();
  renderAgentGrids();
  setActiveNavLink();
});

/* ---------------- Sticky header scroll shadow ---------------- */
function initStickyHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const toggle = () => header.classList.toggle("scrolled", window.scrollY > 10);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* ---------------- Close mobile nav on link click ---------------- */
function initMobileNavClose() {
  const collapseEl = document.getElementById("mainNav");
  if (!collapseEl) return;
  collapseEl.querySelectorAll(".nav-link:not(.dropdown-toggle)").forEach(link => {
    link.addEventListener("click", () => {
      if (collapseEl.classList.contains("show") && window.innerWidth < 992) {
        bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
      }
    });
  });
}

/* ---------------- Highlight current nav link ---------------- */
function setActiveNavLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav .nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.split("?")[0].split("#")[0] === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------------- Hero Slider ---------------- */
function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".hero-slide"));
  const indicatorsWrap = document.getElementById("heroIndicators");
  const prevBtn = document.getElementById("heroPrev");
  const nextBtn = document.getElementById("heroNext");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer = null;
  const INTERVAL = 6000;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Go to slide ${i + 1}`);
    if (i === 0) b.classList.add("active");
    b.addEventListener("click", () => goTo(i));
    indicatorsWrap.appendChild(b);
  });

  function goTo(index) {
    slides[current].classList.remove("active");
    indicatorsWrap.children[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    indicatorsWrap.children[current].classList.add("active");
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function play() {
    if (reduceMotion) return;
    stop();
    timer = setInterval(next, INTERVAL);
  }
  function stop() { if (timer) clearInterval(timer); }

  prevBtn.addEventListener("click", () => { prev(); play(); });
  nextBtn.addEventListener("click", () => { next(); play(); });

  const heroEl = document.getElementById("hero");
  heroEl.addEventListener("mouseenter", stop);
  heroEl.addEventListener("mouseleave", play);
  heroEl.addEventListener("focusin", stop);
  heroEl.addEventListener("focusout", play);

  play();
}

/* ---------------- Hero Search Form -> redirects to properties.html ---------------- */
function initSearchForm() {
  const form = document.getElementById("heroSearchForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const errorEl = document.getElementById("heroPriceError");
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;

    if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
      errorEl.classList.remove("d-none");
      form.minPrice.classList.add("is-invalid");
      form.maxPrice.classList.add("is-invalid");
      return;
    }
    errorEl.classList.add("d-none");
    form.minPrice.classList.remove("is-invalid");
    form.maxPrice.classList.remove("is-invalid");

    const params = new URLSearchParams();
    if (form.listingType.value && form.listingType.value !== "any") params.set("listing", form.listingType.value);
    if (form.propertyType.value && form.propertyType.value !== "any") params.set("type", form.propertyType.value);
    if (form.location.value.trim()) params.set("city", form.location.value.trim());
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (form.bedrooms.value && form.bedrooms.value !== "any") params.set("bedrooms", form.bedrooms.value);

    window.location.href = `properties.html?${params.toString()}`;
  });
}

/* ---------------- Animated Counters ---------------- */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const animate = (el) => {
    const target = Number(el.dataset.target) || 0;
    const duration = 1600;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + (el.dataset.suffix || "");
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ---------------- Back to Top ---------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------------- Newsletter Forms (can appear on every page footer) ---------------- */
function initNewsletterForms() {
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const feedback = form.querySelector(".newsletter-feedback");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value.trim())) {
        input.classList.add("is-invalid");
        if (feedback) { feedback.textContent = "Please enter a valid email address."; feedback.className = "newsletter-feedback form-feedback-error d-block mt-2 small"; }
        return;
      }
      input.classList.remove("is-invalid");
      if (feedback) { feedback.textContent = "Thanks for subscribing! (Demo only — connect an email service on the backend.)"; feedback.className = "newsletter-feedback form-feedback-success d-block mt-2 small"; }
      form.reset();
    });
  });
}

/* ---------------- Contact Form Validation (contact.html) ---------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const feedback = document.getElementById("contactFormFeedback");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(field => {
      if (!field.checkValidity()) { field.classList.add("is-invalid"); valid = false; }
      else field.classList.remove("is-invalid");
    });
    if (valid) {
      feedback.innerHTML = `<div class="alert alert-success mt-3" role="alert"><i class="bi bi-check-circle-fill"></i> Thank you! Your message has been received (demo only). Connect a secure backend (PHP/MySQL) to store and respond to real messages.</div>`;
      form.reset();
      form.classList.remove("was-validated");
    } else {
      feedback.innerHTML = `<div class="alert alert-danger mt-3" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Please correct the highlighted fields before submitting.</div>`;
    }
  });
}

/* ---------------- Sell Property Form (contact.html#sell) ---------------- */
function initSellForm() {
  const form = document.getElementById("sellForm");
  if (!form) return;
  const feedback = document.getElementById("sellFormFeedback");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach(field => {
      if (!field.checkValidity()) { field.classList.add("is-invalid"); valid = false; }
      else field.classList.remove("is-invalid");
    });
    if (valid) {
      feedback.innerHTML = `<div class="alert alert-success mt-3"><i class="bi bi-check-circle-fill"></i> Submission received (demo only). Our team will contact you once a secure backend is connected.</div>`;
      form.reset();
    } else {
      feedback.innerHTML = `<div class="alert alert-danger mt-3">Please complete all required fields.</div>`;
    }
  });
}

/* ---------------- Render Agent Grids (agents.html, index.html preview) ---------------- */
function renderAgentGrids() {
  document.querySelectorAll("[data-agents-grid]").forEach(container => {
    const limit = Number(container.dataset.limit) || AGENTS.length;
    const list = AGENTS.slice(0, limit);
    container.innerHTML = list.map(agent => `
      <div class="col-sm-6 col-lg-3">
        <div class="agent-card">
          <img src="${agent.photo}" alt="${agent.name}, ${agent.role}" class="agent-photo" loading="lazy">
          <h3 class="h5">${agent.name}</h3>
          <p class="agent-role">${agent.role}</p>
          <div class="agent-actions">
            <a href="tel:${agent.phone}" class="btn btn-outline-primary-custom" aria-label="Call ${agent.name}"><i class="bi bi-telephone-fill"></i></a>
            <a href="https://wa.me/${agent.whatsapp}" target="_blank" rel="noopener" class="btn btn-success" aria-label="WhatsApp ${agent.name}"><i class="bi bi-whatsapp"></i></a>
            <a href="mailto:${agent.email}" class="btn btn-outline-secondary" aria-label="Email ${agent.name}"><i class="bi bi-envelope-fill"></i></a>
          </div>
        </div>
      </div>
    `).join("");
  });
}