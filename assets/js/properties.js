/* ==========================================================================
   ESTATEIN — PROPERTY DATA & LISTING LOGIC
   Centralized sample data. Replace with API/PHP+MySQL calls in production.
   ========================================================================== */

const PROPERTIES = [
  {
    id: 1,
    title: "Modern Luxury Villa with Private Pool",
    type: "villa",
    listingType: "sale",
    price: 485000,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "Uday Tower, Dhaka, FL",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    parking: 2,
    status: "For Sale",
    featured: true,
    createdDate: "2026-06-18",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. This elegant villa features an open-plan living area, a private pool, landscaped gardens and premium finishes throughout. Ideal for families seeking comfort and privacy in a prime location.",
    amenities: ["Swimming Pool", "Private Garden", "24/7 Security", "Home Gym", "Covered Parking", "Central A/C", "Smart Home System"],
    agentId: 1
  },
  {
    id: 2,
    title: "Downtown Skyline Apartment",
    type: "apartment",
    listingType: "rent",
    price: 2400,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "88 5th Avenue, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    parking: 1,
    status: "For Rent",
    featured: true,
    createdDate: "2024-07-02",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. A bright, contemporary apartment with floor-to-ceiling windows and skyline views. Walking distance to transit, cafes, and shopping.",
    amenities: ["Elevator", "Gym Access", "Concierge", "In-unit Laundry", "Balcony", "Pet Friendly"],
    agentId: 2
  },
  {
    id: 3,
    title: "Cozy Family House with Garden",
    type: "house",
    listingType: "sale",
    price: 320000,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "742 Maple Street, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    parking: 2,
    status: "For Sale",
    featured: true,
    createdDate: "2024-05-21",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. A warm family home with a spacious backyard, updated kitchen, and a quiet, family-friendly neighborhood close to schools.",
    amenities: ["Private Garden", "Garage", "Fireplace", "Updated Kitchen", "Fenced Yard"],
    agentId: 3
  },
  {
    id: 4,
    title: "Elegant 3-Bedroom Apartment",
    type: "apartment",
    listingType: "sale",
    price: 265000,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "150 Lakeshore Blvd, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    parking: 1,
    status: "For Sale",
    featured: true,
    createdDate: "2024-07-15",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. Spacious apartment with lake views, modern finishes, and an open-concept living/dining area perfect for entertaining.",
    amenities: ["Lake View", "Elevator", "Storage Unit", "Gym Access", "Parking"],
    agentId: 4
  },
  {
    id: 5,
    title: "Prime Commercial Office Space",
    type: "commercial",
    listingType: "rent",
    price: 5200,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "900 Business Park Rd, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 0,
    bathrooms: 2,
    area: 3200,
    parking: 6,
    status: "For Rent",
    featured: true,
    createdDate: "2024-04-30",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. Flexible, open-plan commercial office space in a central business district with ample parking and modern infrastructure.",
    amenities: ["Open Floor Plan", "High-Speed Internet Ready", "Conference Rooms", "Ample Parking", "Security System"],
    agentId: 2
  },
  {
    id: 6,
    title: "Residential Land Plot — Build Your Dream",
    type: "land",
    listingType: "sale",
    price: 95000,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "Lot 14, Rockview Estates, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 0,
    bathrooms: 0,
    area: 8000,
    parking: 0,
    status: "For Sale",
    featured: true,
    createdDate: "2024-03-11",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. A level, cleared residential plot ready for construction, located in a growing community with utility access nearby.",
    amenities: ["Utility Access", "Road Access", "Clear Title (To Verify)", "Corner Lot"],
    agentId: 3
  },
  {
    id: 7,
    title: "Suburban Family House for Rent",
    type: "house",
    listingType: "rent",
    price: 1950,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "32 Birchwood Lane, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    parking: 2,
    status: "For Rent",
    featured: false,
    createdDate: "2024-07-20",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. Comfortable single-family rental home with a two-car garage, fenced backyard, and easy highway access.",
    amenities: ["Garage", "Fenced Yard", "Central A/C", "Washer/Dryer Hookup"],
    agentId: 4
  },
  {
    id: 8,
    title: "Beachfront Villa Retreat",
    type: "villa",
    listingType: "sale",
    price: 780000,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "5 Shoreline Way, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 6,
    bathrooms: 5,
    area: 5100,
    parking: 3,
    status: "For Sale",
    featured: false,
    createdDate: "2024-02-09",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. A stunning beachfront escape with panoramic ocean views, an infinity pool, and direct beach access.",
    amenities: ["Ocean View", "Infinity Pool", "Private Beach Access", "Home Theater", "Wine Cellar"],
    agentId: 1
  },
  {
    id: 9,
    title: "Modern Studio Apartment",
    type: "apartment",
    listingType: "rent",
    price: 1150,
    city: "Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    address: "57 Uday Tower, Dhaka, Dhanmondi, Baridhara, Gulshan, Uttara, Banani",
    bedrooms: 1,
    bathrooms: 1,
    area: 620,
    parking: 0,
    status: "For Rent",
    featured: false,
    createdDate: "2024-06-29",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "Sample listing. A compact, efficient studio perfect for students or young professionals, close to public transport.",
    amenities: ["Elevator", "Laundry in Building", "Bike Storage"],
    agentId: 2
  }
];

const PAGE_SIZE = 6;
let currentPage = 1;
let activeFilters = {};
let activeSort = "newest";

/* ---------------- Helpers ---------------- */
function formatPrice(p) {
  const formatted = "tk " + Number(p.price).toLocaleString("en-BD", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return p.listingType === "rent" ? formatted + " <span>/month</span>" : formatted;
}

function getFavorites() {
  try { return JSON.parse(localStorage.getItem("favoriteProperties")) || []; }
  catch (e) { return []; }
}

function toggleFavorite(id) {
  let favs = getFavorites();
  id = Number(id);
  if (favs.includes(id)) favs = favs.filter(f => f !== id);
  else favs.push(id);
  localStorage.setItem("favoriteProperties", JSON.stringify(favs));
  return favs.includes(id);
}

function isFavorite(id) {
  return getFavorites().includes(Number(id));
}

/* ---------------- Card Template ---------------- */
function propertyCardHTML(p, lazy = true) {
  const badgeType = p.listingType === "sale" ? "badge-sale" : "badge-rent";
  const badgeLabel = p.status;
  const fav = isFavorite(p.id) ? "active" : "";
  const heartIcon = isFavorite(p.id) ? "bi-heart-fill" : "bi-heart";
  return `
  <div class="col-lg-4 col-md-6">
    <div class="card property-card h-100 border-0 shadow-sm">
      <div class="property-card-img-wrap">
        <img src="${p.image}" class="property-card-img" alt="${p.title} — ${p.city}" ${lazy ? 'loading="lazy"' : ''}>
        <div class="property-card-badges">
          ${p.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
          <span class="badge ${badgeType}">${badgeLabel}</span>
        </div>
        <button class="favorite-btn ${fav}" data-id="${p.id}" aria-pressed="${fav ? 'true' : 'false'}" aria-label="Toggle favorite for ${p.title}">
          <i class="bi ${heartIcon}"></i>
        </button>
      </div>
      <div class="card-body p-3 p-md-4">
        <span class="badge rounded-pill text-bg-light border mb-2 text-capitalize">${p.type}</span>
        <h3 class="property-card-title"><a href="property-details.html?id=${p.id}">${p.title}</a></h3>
        <p class="property-card-location"><i class="bi bi-geo-alt-fill text-accent"></i> ${p.city}</p>
        <p class="property-card-price">${formatPrice(p)}</p>
        <ul class="property-card-meta">
          <li><i class="bi bi-door-closed-fill"></i>${p.bedrooms} Beds</li>
          <li><i class="bi bi-droplet-fill"></i>${p.bathrooms} Baths</li>
          <li><i class="bi bi-arrows-angle-expand"></i>${p.area.toLocaleString()} sqft</li>
        </ul>
        <a href="property-details.html?id=${p.id}" class="btn btn-primary-custom w-100">View Details</a>
      </div>
    </div>
  </div>`;
}

function renderProperties(container, list) {
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="col-12 text-center py-5">
      <i class="bi bi-house-x" style="font-size:3rem;color:var(--color-text-secondary)"></i>
      <h3 class="mt-3">No properties found</h3>
      <p>Try adjusting your search filters.</p>
    </div>`;
    return;
  }
  container.innerHTML = list.map((p, i) => propertyCardHTML(p, i > 2)).join("");
}

function bindFavoriteButtons(root = document) {
  root.querySelectorAll(".favorite-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const active = toggleFavorite(id);
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      const icon = btn.querySelector("i");
      icon.className = active ? "bi bi-heart-fill" : "bi bi-heart";
    });
  });
}

/* ---------------- Filter / Sort ---------------- */
function filterProperties(data, filters) {
  return data.filter(p => {
    if (filters.listingType && filters.listingType !== "any" && p.listingType !== filters.listingType) return false;
    if (filters.type && filters.type !== "any" && p.type !== filters.type) return false;
    if (filters.city && !p.city.toLowerCase().includes(filters.city.toLowerCase())) return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    if (filters.bedrooms && filters.bedrooms !== "any" && p.bedrooms < Number(filters.bedrooms)) return false;
    return true;
  });
}

function sortProperties(list, sortBy) {
  const arr = [...list];
  switch (sortBy) {
    case "price-asc": arr.sort((a, b) => a.price - b.price); break;
    case "price-desc": arr.sort((a, b) => b.price - a.price); break;
    case "newest":
    default: arr.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  }
  return arr;
}

/* ---------------- Query String Helpers ---------------- */
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const obj = {};
  for (const [k, v] of params.entries()) obj[k] = v;
  return obj;
}

function buildQueryString(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([k, v]) => { if (v) params.set(k, v); });
  return params.toString();
}

/* =========================================================================
   PAGE INIT: INDEX (Featured Properties)
   ========================================================================= */
function initFeaturedGrid() {
  const container = document.getElementById("featuredPropertiesGrid");
  if (!container) return;
  const featured = PROPERTIES.filter(p => p.featured);
  renderProperties(container, featured);
  bindFavoriteButtons(container);
}

/* =========================================================================
   PAGE INIT: PROPERTIES LISTING PAGE
   ========================================================================= */
function initPropertiesPage() {
  const grid = document.getElementById("propertiesGrid");
  if (!grid) return;

  const form = document.getElementById("filterForm");
  const sortSelect = document.getElementById("sortSelect");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const resultsCount = document.getElementById("resultsCount");

  // Pre-fill from query string
  const qp = getQueryParams();
  activeFilters = {
    listingType: qp.listing || "any",
    type: qp.type || "any",
    city: qp.city || "",
    minPrice: qp.minPrice || "",
    maxPrice: qp.maxPrice || "",
    bedrooms: qp.bedrooms || "any"
  };

  if (form) {
    if (form.listingType) form.listingType.value = activeFilters.listingType;
    if (form.type) form.type.value = activeFilters.type;
    if (form.city) form.city.value = activeFilters.city;
    if (form.minPrice) form.minPrice.value = activeFilters.minPrice;
    if (form.maxPrice) form.maxPrice.value = activeFilters.maxPrice;
    if (form.bedrooms) form.bedrooms.value = activeFilters.bedrooms;
  }

  function runFilter() {
    currentPage = 1;
    let result = filterProperties(PROPERTIES, activeFilters);
    result = sortProperties(result, activeSort);
    const toShow = result.slice(0, PAGE_SIZE * currentPage);
    renderProperties(grid, toShow);
    bindFavoriteButtons(grid);
    if (resultsCount) resultsCount.textContent = `${result.length} propert${result.length === 1 ? "y" : "ies"} found`;
    loadMoreBtn.style.display = toShow.length >= result.length ? "none" : "inline-flex";
    loadMoreBtn.dataset.total = result.length;
    grid.dataset.cache = JSON.stringify(result.map(p => p.id));
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const minP = Number(form.minPrice.value || 0);
      const maxP = Number(form.maxPrice.value || 0);
      const errorEl = document.getElementById("priceError");
      if (minP && maxP && minP > maxP) {
        if (errorEl) errorEl.classList.remove("d-none");
        return;
      }
      if (errorEl) errorEl.classList.add("d-none");

      activeFilters = {
        listingType: form.listingType.value,
        type: form.type.value,
        city: form.city.value.trim(),
        minPrice: form.minPrice.value,
        maxPrice: form.maxPrice.value,
        bedrooms: form.bedrooms.value
      };
      runFilter();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeSort = sortSelect.value;
      runFilter();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++;
      let result = filterProperties(PROPERTIES, activeFilters);
      result = sortProperties(result, activeSort);
      const toShow = result.slice(0, PAGE_SIZE * currentPage);
      renderProperties(grid, toShow);
      bindFavoriteButtons(grid);
      loadMoreBtn.style.display = toShow.length >= result.length ? "none" : "inline-flex";
    });
  }

  runFilter();
}

/* =========================================================================
   PAGE INIT: PROPERTY DETAILS
   ========================================================================= */
function initPropertyDetailsPage() {
  const root = document.getElementById("propertyDetailsRoot");
  if (!root) return;

  const qp = getQueryParams();
  const id = Number(qp.id);
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    root.innerHTML = `<div class="text-center py-5">
      <h2>Property Not Found</h2>
      <p>The property you're looking for doesn't exist or may have been removed.</p>
      <a href="properties.html" class="btn btn-primary-custom">Browse All Properties</a>
    </div>`;
    return;
  }

  document.title = `${property.title} | Estatein Real Estate`;

  const agent = (typeof AGENTS !== "undefined") ? AGENTS.find(a => a.id === property.agentId) : null;

  root.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-8">
        <div class="gallery-main">
          <img id="mainGalleryImg" src="${property.gallery[0]}" alt="${property.title} main view">
        </div>
        <div class="gallery-thumbs" id="galleryThumbs">
          ${property.gallery.map((img, i) => `<img src="${img}" data-full="${img}" class="${i === 0 ? 'active' : ''}" alt="${property.title} view ${i + 1}">`).join("")}
        </div>

        <div class="d-flex flex-wrap gap-2 align-items-center mt-4 mb-2">
          <span class="badge rounded-pill text-bg-light border text-capitalize">${property.type}</span>
          <span class="badge ${property.listingType === 'sale' ? 'badge-sale' : 'badge-rent'}">${property.status}</span>
          ${property.featured ? '<span class="badge badge-featured">Featured</span>' : ''}
        </div>
        <h1 class="mb-1">${property.title}</h1>
        <p class="mb-4"><i class="bi bi-geo-alt-fill text-accent"></i> ${property.address}</p>

        <div class="row text-center g-3 mb-4">
          <div class="col-6 col-md-3"><div class="p-3 bg-surface rounded-3 shadow-sm"><i class="bi bi-door-closed-fill fs-4 text-secondary-emphasis"></i><div class="fw-bold mt-1">${property.bedrooms}</div><small>Bedrooms</small></div></div>
          <div class="col-6 col-md-3"><div class="p-3 bg-surface rounded-3 shadow-sm"><i class="bi bi-droplet-fill fs-4 text-secondary-emphasis"></i><div class="fw-bold mt-1">${property.bathrooms}</div><small>Bathrooms</small></div></div>
          <div class="col-6 col-md-3"><div class="p-3 bg-surface rounded-3 shadow-sm"><i class="bi bi-arrows-angle-expand fs-4 text-secondary-emphasis"></i><div class="fw-bold mt-1">${property.area.toLocaleString()}</div><small>Sqft</small></div></div>
          <div class="col-6 col-md-3"><div class="p-3 bg-surface rounded-3 shadow-sm"><i class="bi bi-car-front-fill fs-4 text-secondary-emphasis"></i><div class="fw-bold mt-1">${property.parking}</div><small>Parking</small></div></div>
        </div>

        <h3>Description</h3>
        <p>${property.description}</p>

        <h3 class="mt-4">Amenities</h3>
        <ul class="amenity-list mb-4">
          ${property.amenities.map(a => `<li><i class="bi bi-check-circle-fill"></i>${a}</li>`).join("")}
        </ul>

        <h3>Location</h3>
        <div class="map-placeholder mb-4">
          <i class="bi bi-map" style="font-size:2rem;"></i>
          <p class="mb-0">Interactive map integration placeholder<br><small>(Connect Google Maps / OpenStreetMap API here)</small></p>
        </div>

        <div class="demo-disclaimer">
          <i class="bi bi-info-circle-fill"></i>
          <div>This listing is <strong>sample/demo content</strong> for design purposes. Prices, availability, images and legal status are illustrative only and must be verified by the real estate agency before publishing live listings.</div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="detail-price-box mb-4">
          <p class="text-secondary-custom mb-1">${property.listingType === 'rent' ? 'Monthly Rent' : 'Asking Price'}</p>
          <h2 class="text-accent mb-3">${formatPrice(property)}</h2>
          <button class="btn btn-primary-custom w-100 mb-2" id="favDetailsBtn" data-id="${property.id}">
            <i class="bi ${isFavorite(property.id) ? 'bi-heart-fill' : 'bi-heart'}"></i> ${isFavorite(property.id) ? 'Saved to Favorites' : 'Save to Favorites'}
          </button>
          <a href="https://wa.me/${agent ? agent.whatsapp : '15551234567'}?text=${encodeURIComponent('Hi, I am interested in ' + property.title + ' (ID: ' + property.id + ')')}" target="_blank" rel="noopener" class="btn btn-success w-100 mb-4">
            <i class="bi bi-whatsapp"></i> Chat on WhatsApp
          </a>

          ${agent ? `
          <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
            <img src="${agent.photo}" alt="${agent.name}" class="rounded-circle" width="56" height="56" style="object-fit:cover;">
            <div>
              <h4 class="h6 mb-0">${agent.name}</h4>
              <small class="text-secondary-custom">${agent.role}</small>
            </div>
          </div>
          <div class="d-flex gap-2 mb-4">
            <a href="tel:${agent.phone}" class="btn btn-outline-primary-custom btn-sm flex-fill"><i class="bi bi-telephone-fill"></i> Call</a>
            <a href="mailto:${agent.email}" class="btn btn-outline-primary-custom btn-sm flex-fill"><i class="bi bi-envelope-fill"></i> Email</a>
          </div>` : ''}

          <h4 class="h6 mb-3">Send an Inquiry</h4>
          <form id="inquiryForm" novalidate>
            <div class="mb-2">
              <label class="visually-hidden" for="inqName">Full Name</label>
              <input type="text" class="form-control" id="inqName" placeholder="Full Name" required>
              <div class="invalid-feedback">Please enter your name.</div>
            </div>
            <div class="mb-2">
              <label class="visually-hidden" for="inqEmail">Email</label>
              <input type="email" class="form-control" id="inqEmail" placeholder="Email Address" required>
              <div class="invalid-feedback">Please enter a valid email.</div>
            </div>
            <div class="mb-2">
              <label class="visually-hidden" for="inqPhone">Phone</label>
              <input type="tel" class="form-control" id="inqPhone" placeholder="Phone Number" required>
              <div class="invalid-feedback">Please enter your phone number.</div>
            </div>
            <div class="mb-3">
              <label class="visually-hidden" for="inqMessage">Message</label>
              <textarea class="form-control" id="inqMessage" rows="3" placeholder="I'm interested in this property..." required></textarea>
              <div class="invalid-feedback">Please enter a message.</div>
            </div>
            <button type="submit" class="btn btn-gold w-100">Send Inquiry</button>
            <div id="inquiryFeedback" class="mt-2 small"></div>
          </form>
        </div>
      </div>
    </div>
  `;

  // Gallery thumb swap
  document.getElementById("galleryThumbs").addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
      document.getElementById("mainGalleryImg").src = e.target.dataset.full;
      root.querySelectorAll(".gallery-thumbs img").forEach(i => i.classList.remove("active"));
      e.target.classList.add("active");
    }
  });

  // Favorite toggle
  document.getElementById("favDetailsBtn").addEventListener("click", function () {
    const active = toggleFavorite(property.id);
    this.innerHTML = `<i class="bi ${active ? 'bi-heart-fill' : 'bi-heart'}"></i> ${active ? 'Saved to Favorites' : 'Save to Favorites'}`;
  });

  // Inquiry form validation (demo only)
  const inquiryForm = document.getElementById("inquiryForm");
  inquiryForm.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;
    inquiryForm.querySelectorAll("input, textarea").forEach(field => {
      if (!field.checkValidity()) { field.classList.add("is-invalid"); valid = false; }
      else { field.classList.remove("is-invalid"); }
    });
    const feedback = document.getElementById("inquiryFeedback");
    if (valid) {
      feedback.innerHTML = `<span class="form-feedback-success"><i class="bi bi-check-circle-fill"></i> Thank you! Your inquiry has been noted (demo only — connect a backend to deliver this to the agency).</span>`;
      inquiryForm.reset();
    } else {
      feedback.innerHTML = `<span class="form-feedback-error">Please correct the highlighted fields.</span>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFeaturedGrid();
  initPropertiesPage();
  initPropertyDetailsPage();
});