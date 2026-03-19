/* ==================== TRAVEL PAGE JAVASCRIPT ==================== */

/* ==================== MAP DATA ==================== */
const tripData = {
  'tokyo-2025': {
    center: [35.6762, 139.6503],
    zoom: 11,
    points: [
      { lat: 35.6586, lng: 139.7454, name: '東京鐵塔', type: 'landmark', date: '12/21' },
      { lat: 35.7148, lng: 139.7737, name: '上野公園', type: 'park', date: '12/22' },
      { lat: 35.6191, lng: 139.7790, name: '台場', type: 'landmark', date: '12/22' },
      { lat: 35.7147, lng: 139.7966, name: '淺草寺', type: 'temple', date: '12/23' },
      { lat: 35.7100, lng: 139.8107, name: '晴空塔', type: 'landmark', date: '12/23' },
      { lat: 35.6595, lng: 139.7004, name: '澀谷十字路口', type: 'landmark', date: '12/25' },
      { lat: 35.6715, lng: 139.6950, name: '明治神宮', type: 'temple', date: '12/26' },
    ],
    color: '#3498db',
    locations: [
      { icon: '🗼', name: '東京鐵塔' },
      { icon: '⛩️', name: '淺草寺' },
      { icon: '🌈', name: '台場' },
      { icon: '🏙️', name: '銀座' },
      { icon: '🎌', name: '澀谷' },
      { icon: '🗼', name: '晴空塔' },
      { icon: '⛩️', name: '明治神宮' },
      { icon: '🐟', name: '築地' },
    ]
  },
  'tokyo-2026': {
    center: [35.6762, 139.6503],
    zoom: 11,
    points: [
      { lat: 35.7148, lng: 139.7737, name: '上野公園', type: 'park', date: '4/4' },
      { lat: 35.6852, lng: 139.7100, name: '新宿御苑', type: 'park', date: '4/5' },
      { lat: 35.6954, lng: 139.7012, name: '新宿', type: 'landmark', date: '4/5' },
      { lat: 35.4553, lng: 139.6315, name: '橫濱港未來', type: 'landmark', date: '4/6' },
      { lat: 35.4431, lng: 139.6455, name: '橫濱中華街', type: 'landmark', date: '4/6' },
      { lat: 35.6783, lng: 139.7826, name: '茅場町酒店', type: 'hotel', date: '4/3-6' },
    ],
    color: '#e74c3c',
    locations: [
      { icon: '🌸', name: '上野公園' },
      { icon: '🌸', name: '新宿御苑' },
      { icon: '🌊', name: '橫濱港未來' },
      { icon: '🏮', name: '中華街' },
      { icon: '🏨', name: '九段下酒店' },
      { icon: '⛩️', name: '靖國神社' },
    ]
  }
};

let map;
let markers = [];
let currentTrip = 'tokyo-2025';

/* ==================== INITIALIZE MAP ==================== */
function initMap() {
  const trip = tripData[currentTrip];
  
  map = L.map('travel-map').setView(trip.center, trip.zoom);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  }).addTo(map);
  
  addPointsToMap(trip);
  updateLocationsList(trip);
}

function addPointsToMap(trip) {
  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  
  // Add markers
  trip.points.forEach((point, index) => {
    const marker = L.circleMarker([point.lat, point.lng], {
      radius: 10,
      fillColor: trip.color,
      color: '#fff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map);
    
    const popupContent = `
      <div style="padding: 10px; min-width: 150px;">
        <div style="font-weight: 600; color: ${trip.color}; margin-bottom: 5px;">
          ${point.name}
        </div>
        <div style="font-size: 12px; color: #666;">
          📅 ${point.date}<br>
          📍 ${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}
        </div>
      </div>
    `;
    
    marker.bindPopup(popupContent);
    markers.push(marker);
  });
  
  // Add connecting line
  const latlngs = trip.points.map(p => [p.lat, p.lng]);
  const polyline = L.polyline(latlngs, {
    color: trip.color,
    weight: 3,
    opacity: 0.6,
    dashArray: '10, 10'
  }).addTo(map);
  
  markers.push(polyline);
}

function updateLocationsList(trip) {
  const grid = document.getElementById('locations-grid');
  const title = document.getElementById('locations-title');
  
  title.textContent = currentTrip === 'tokyo-2025' 
    ? '2025年12月訪問地點' 
    : '2026年4月訪問地點';
  
  grid.innerHTML = trip.locations.map(loc => `
    <div class="location-item">
      <div class="location-icon">${loc.icon}</div>
      <span class="location-name">${loc.name}</span>
    </div>
  `).join('');
}

/* ==================== MAP TABS ==================== */
function initMapTabs() {
  const tabs = document.querySelectorAll('.map-tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      tabs.forEach(t => t.classList.remove('map-tab--active'));
      tab.classList.add('map-tab--active');
      
      // Switch trip
      currentTrip = tab.dataset.trip;
      const trip = tripData[currentTrip];
      
      // Update map
      map.setView(trip.center, trip.zoom);
      addPointsToMap(trip);
      updateLocationsList(trip);
      
      // Update stats
      document.getElementById('map-points').textContent = trip.points.length;
    });
  });
}

/* ==================== GALLERY FILTER ==================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery__filter-btn');
  const galleryItems = document.querySelectorAll('.gallery__item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('gallery__filter-btn--active'));
      btn.classList.add('gallery__filter-btn--active');
      
      const filter = btn.dataset.filter;
      
      // Filter items
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==================== STATS ANIMATION ==================== */
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

/* ==================== SCROLL REVEAL ==================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.trip-card, .gallery__item, .map-wrapper');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ==================== PARALLAX EFFECT ==================== */
function initParallax() {
  const heroImg = document.querySelector('.travel-hero__img-main');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroImg) {
      heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
}

/* ==================== INITIALIZE ALL ==================== */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize map
  if (document.getElementById('travel-map')) {
    initMap();
    initMapTabs();
  }
  
  // Initialize gallery filter
  initGalleryFilter();
  
  // Initialize animations
  animateStats();
  initScrollReveal();
  initParallax();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
