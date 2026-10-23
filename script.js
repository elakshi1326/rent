// Rentease demo data. Replace these sample listings with real, verified properties.
const properties = [
  {id:1,title:"Sunlit 2 BHK apartment",city:"Pune",area:"Baner, Pune",rent:28000,bhk:2,baths:2,size:"980 sq ft",category:"Apartment",ownerName:"Amit Sharma",phone:"+91 98765 43210",whatsapp:"919876543210",email:"amit.sharma@example.com",furnishing:"Furnished",tag:"Popular choice",description:"Balcony · Gated society",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85"},
  {id:2,title:"Quiet studio near the park",city:"Bengaluru",area:"Koramangala, Bengaluru",rent:18500,bhk:1,baths:1,size:"480 sq ft",category:"Studio",ownerName:"Rhea Iyer",phone:"+91 99887 66554",whatsapp:"919988766554",email:"rhea.iyer@example.com",furnishing:"Furnished",tag:"Move-in ready",description:"Natural light · Near metro",image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85"},
  {id:3,title:"Roomy family home",city:"Delhi",area:"Dwarka Sector 12, Delhi",rent:45000,bhk:3,baths:2,size:"1,350 sq ft",category:"Independent House",ownerName:"Vikram Singh",phone:"+91 98111 22445",whatsapp:"919811122445",email:"vikram.singh@example.com",furnishing:"Unfurnished",tag:"More space",description:"Lift · Parking included",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85"},
  {id:4,title:"A calm city retreat",city:"Mumbai",area:"Andheri East, Mumbai",rent:56000,bhk:2,baths:2,size:"860 sq ft",category:"Apartment",ownerName:"Sonal Mehta",phone:"+91 98200 33441",whatsapp:"919820033441",email:"sonal.mehta@example.com",furnishing:"Furnished",tag:"Bright & airy",description:"Gym · 24/7 security",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85"},
  {id:5,title:"Fresh-start 1 BHK",city:"Chandigarh",area:"Sector 44, Chandigarh",rent:15000,bhk:1,baths:1,size:"620 sq ft",category:"Builder Floor",ownerName:"Manav Gill",phone:"+91 98722 11223",whatsapp:"919872211223",email:"manav.gill@example.com",furnishing:"Unfurnished",tag:"Great value",description:"Quiet lane · Balcony",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85"},
  {id:6,title:"A little more breathing room",city:"Hyderabad",area:"Kondapur, Hyderabad",rent:34000,bhk:3,baths:2,size:"1,220 sq ft",category:"Villa",ownerName:"Neha Reddy",phone:"+91 90011 99880",whatsapp:"919001199880",email:"neha.reddy@example.com",furnishing:"Furnished",tag:"Room to grow",description:"Clubhouse · Family friendly",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"},
  {id:7,title:"Smart city apartment",city:"Ahmedabad",area:"Satellite, Ahmedabad",rent:26000,bhk:2,baths:2,size:"900 sq ft",category:"Apartment",ownerName:"Jigar Patel",phone:"+91 98982 77661",whatsapp:"919898277661",email:"jigar.patel@example.com",furnishing:"Furnished",tag:"Prime area",description:"Close to market · Fast connectivity",image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=85"},
  {id:8,title:"Modern family flat",city:"Chennai",area:"Adyar, Chennai",rent:32000,bhk:2,baths:2,size:"1,050 sq ft",category:"Apartment",ownerName:"Dharani Krishnan",phone:"+91 94440 12558",whatsapp:"919444012558",email:"dharani.krishnan@example.com",furnishing:"Unfurnished",tag:"Family friendly",description:"Near beach · Full ventilation",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85"},
  {id:9,title:"Garden-facing home",city:"Jaipur",area:"Mansarovar, Jaipur",rent:22000,bhk:2,baths:2,size:"840 sq ft",category:"Villa",ownerName:"Anita Joshi",phone:"+91 98290 11457",whatsapp:"919829011457",email:"anita.joshi@example.com",furnishing:"Furnished",tag:"Good value",description:"Green view · Secure complex",image:"https://images.unsplash.com/photo-1484154218962-a19758213a0a?auto=format&fit=crop&w=900&q=85"},
  {id:10,title:"City light studio",city:"Kolkata",area:"Salt Lake, Kolkata",rent:17000,bhk:1,baths:1,size:"550 sq ft",category:"PG / Room",ownerName:"Tanmoy Das",phone:"+91 98300 11244",whatsapp:"919830011244",email:"tanmoy.das@example.com",furnishing:"Unfurnished",tag:"Compact & cosy",description:"Near metro · Well connected",image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=85"}
];
const grid = document.getElementById("propertyGrid");
const citySelect = document.getElementById("city");
const budgetSelect = document.getElementById("budget");
const bhkSelect = document.getElementById("bhk");
const propertyTypeSelect = document.getElementById("propertyType");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
let furnishingFilter = "all";
let visibleProperties = [...properties];
let saved = new Set(JSON.parse(localStorage.getItem("rentease-saved") || "[]"));

const money = n => "₹" + n.toLocaleString("en-IN");
function render() {
  const city = citySelect.value;
  const budget = budgetSelect.value;
  const bhk = bhkSelect.value;
  const propertyType = propertyTypeSelect.value;
  visibleProperties = properties.filter(p =>
    (!city || p.city === city) &&
    (budget === "any" || p.rent <= Number(budget)) &&
    (bhk === "any" || p.bhk === Number(bhk)) &&
    (propertyType === "any" || p.category === propertyType) &&
    (furnishingFilter === "all" || p.furnishing.toLowerCase() === furnishingFilter)
  );
  grid.innerHTML = visibleProperties.map(p => {
    const whatsappText = encodeURIComponent(`Hi ${p.ownerName}, I'm interested in ${p.title} at ${p.area}. Can we connect?`);
    return `
    <article class="property-card">
      <div class="property-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='#dce8dc'">
        <span class="badge">${p.tag}</span>
        <button class="heart-button ${saved.has(p.id) ? "saved" : ""}" data-save="${p.id}" aria-label="${saved.has(p.id) ? "Remove saved home" : "Save home"}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? "♥" : "♡"}</button>
      </div>
      <div class="property-content">
        <p class="property-location"><span>⌖</span>${p.area}</p>
        <h3 class="property-title">${p.title}</h3>
        <p class="property-description">${p.category} · ${p.description} · ${p.furnishing}</p>
        <div class="property-meta"><span><strong>${p.bhk}</strong> BHK</span><span><strong>${p.baths}</strong> Bath</span><span><strong>${p.category}</strong></span></div>
        <div class="property-bottom">
          <div class="price">${money(p.rent)} <small>/ month</small></div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;">
            <a class="details-button" href="tel:${p.phone}" style="display:inline-flex;align-items:center;justify-content:center;">Call</a>
            <a class="details-button" href="https://wa.me/${p.whatsapp}?text=${whatsappText}" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;justify-content:center;">WhatsApp</a>
            <button class="details-button" data-details="${p.id}" style="display:inline-flex;align-items:center;justify-content:center;">View</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");
  resultCount.textContent = `Showing ${visibleProperties.length} ${visibleProperties.length === 1 ? "sample home" : "sample homes"}`;
  emptyState.hidden = visibleProperties.length !== 0;
  grid.hidden = visibleProperties.length === 0;
}
document.getElementById("searchButton").addEventListener("click", () => {
  document.getElementById("homes").scrollIntoView({behavior:"smooth"});
  render();
});
[citySelect,budgetSelect,bhkSelect,propertyTypeSelect].forEach(el => el.addEventListener("change", render));
document.querySelectorAll(".filter-chip").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected"); furnishingFilter = btn.dataset.type; render();
}));
grid.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  const detailButton = event.target.closest("[data-details]");
  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    saved.has(id) ? saved.delete(id) : saved.add(id);
    localStorage.setItem("rentease-saved", JSON.stringify([...saved]));
    render();
  }
  if (detailButton) {
    const p = properties.find(item => item.id === Number(detailButton.dataset.details));
    if (p) alert(`${p.title}\n${p.area}\n${money(p.rent)} per month\n${p.bhk} BHK · ${p.baths} bathroom(s) · ${p.size}\n${p.category} · ${p.furnishing}\nOwner: ${p.ownerName}\nPhone: ${p.phone}\nEmail: ${p.email}\n\nDemo listing: replace this with a property details page and verified owner contact.`);
  }
});
function resetFilters() {
  citySelect.value = ""; budgetSelect.value = "any"; bhkSelect.value = "any"; propertyTypeSelect.value = "any";
  furnishingFilter = "all";
  document.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("selected", b.dataset.type === "all"));
  render();
}
document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("viewAll").addEventListener("click", event => { event.preventDefault(); resetFilters(); });
document.getElementById("year").textContent = new Date().getFullYear();
render();
