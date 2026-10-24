// डेरा demo data. Replace these sample listings with real, verified properties.
const properties = [
  {id:1,title:"Sunlit 2 BHK apartment",city:"Pune",area:"Baner, Pune",rent:25000,bhk:2,baths:2,size:"980 sq ft",category:"Apartment",ownerName:"Amit Sharma",phone:"+91 98765 43210",whatsapp:"919876543210",email:"amit.sharma@example.com",furnishing:"Furnished",tag:"Popular choice",description:"Balcony · Gated society",image:"https://images.pexels.com/photos/36195702/pexels-photo-36195702.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:2,title:"Quiet studio near the park",city:"Bengaluru",area:"Koramangala, Bengaluru",rent:16000,bhk:1,baths:1,size:"480 sq ft",category:"Studio",ownerName:"Rhea Iyer",phone:"+91 99887 66554",whatsapp:"919988766554",email:"rhea.iyer@example.com",furnishing:"Furnished",tag:"Move-in ready",description:"Natural light · Near metro",image:"https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:3,title:"Roomy family home",city:"Delhi",area:"Dwarka Sector 12, Delhi",rent:40000,bhk:3,baths:2,size:"1,350 sq ft",category:"Independent House",ownerName:"Vikram Singh",phone:"+91 98111 22445",whatsapp:"919811122445",email:"vikram.singh@example.com",furnishing:"Unfurnished",tag:"More space",description:"Lift · Parking included",image:"https://images.pexels.com/photos/29887876/pexels-photo-29887876.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:4,title:"A calm city retreat",city:"Mumbai",area:"Andheri East, Mumbai",rent:50000,bhk:2,baths:2,size:"860 sq ft",category:"Apartment",ownerName:"Sonal Mehta",phone:"+91 98200 33441",whatsapp:"919820033441",email:"sonal.mehta@example.com",furnishing:"Furnished",tag:"Bright & airy",description:"Gym · 24/7 security",image:"https://images.pexels.com/photos/7148779/pexels-photo-7148779.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:5,title:"Fresh-start 1 BHK",city:"Chandigarh",area:"Sector 44, Chandigarh",rent:13500,bhk:1,baths:1,size:"620 sq ft",category:"Builder Floor",ownerName:"Manav Gill",phone:"+91 98722 11223",whatsapp:"919872211223",email:"manav.gill@example.com",furnishing:"Unfurnished",tag:"Great value",description:"Quiet lane · Balcony",image:"https://images.pexels.com/photos/36598794/pexels-photo-36598794.png?auto=compress&cs=tinysrgb&w=900"},
  {id:6,title:"A little more breathing room",city:"Hyderabad",area:"Kondapur, Hyderabad",rent:30000,bhk:3,baths:2,size:"1,220 sq ft",category:"Villa",ownerName:"Neha Reddy",phone:"+91 90011 99880",whatsapp:"919001199880",email:"neha.reddy@example.com",furnishing:"Furnished",tag:"Room to grow",description:"Clubhouse · Family friendly",image:"https://images.pexels.com/photos/34946066/pexels-photo-34946066.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:7,title:"Smart city apartment",city:"Ahmedabad",area:"Satellite, Ahmedabad",rent:23500,bhk:2,baths:2,size:"900 sq ft",category:"Apartment",ownerName:"Jigar Patel",phone:"+91 98982 77661",whatsapp:"919898277661",email:"jigar.patel@example.com",furnishing:"Furnished",tag:"Prime area",description:"Close to market · Fast connectivity",image:"https://images.pexels.com/photos/36601414/pexels-photo-36601414.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:8,title:"Modern family flat",city:"Chennai",area:"Adyar, Chennai",rent:28000,bhk:2,baths:2,size:"1,050 sq ft",category:"Apartment",ownerName:"Dharani Krishnan",phone:"+91 94440 12558",whatsapp:"919444012558",email:"dharani.krishnan@example.com",furnishing:"Unfurnished",tag:"Family friendly",description:"Near beach · Full ventilation",image:"https://images.pexels.com/photos/7148847/pexels-photo-7148847.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:9,title:"Garden-facing home",city:"Jaipur",area:"Mansarovar, Jaipur",rent:19500,bhk:2,baths:2,size:"840 sq ft",category:"Villa",ownerName:"Anita Joshi",phone:"+91 98290 11457",whatsapp:"919829011457",email:"anita.joshi@example.com",furnishing:"Furnished",tag:"Good value",description:"Green view · Secure complex",image:"https://images.pexels.com/photos/34968508/pexels-photo-34968508.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:10,title:"City light studio",city:"Kolkata",area:"Salt Lake, Kolkata",rent:15000,bhk:1,baths:1,size:"550 sq ft",category:"PG / Room",ownerName:"Tanmoy Das",phone:"+91 98300 11244",whatsapp:"919830011244",email:"tanmoy.das@example.com",furnishing:"Unfurnished",tag:"Compact & cosy",description:"Near metro · Well connected",image:"https://images.pexels.com/photos/32355381/pexels-photo-32355381.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:11,title:"Mountain-view 1 BHK flat",city:"Shimla",area:"New Shimla, Shimla",rent:14000,bhk:1,baths:1,size:"620 sq ft",category:"Apartment",ownerName:"Karan Thakur",phone:"+91 98765 44011",whatsapp:"919876544011",email:"karan.thakur@example.com",furnishing:"Furnished",tag:"Hillside living",description:"Mountain views · Sunny balcony",image:"https://images.pexels.com/photos/17926408/pexels-photo-17926408.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:12,title:"Quiet 2 BHK near Dharamshala",city:"Dharamshala",area:"Sidhpur, Dharamshala",rent:18000,bhk:2,baths:1,size:"850 sq ft",category:"Apartment",ownerName:"Meera Sharma",phone:"+91 98160 22011",whatsapp:"919816022011",email:"meera.sharma@example.com",furnishing:"Unfurnished",tag:"Room to unwind",description:"Dhauladhar views · Peaceful neighbourhood",image:"https://images.pexels.com/photos/37062365/pexels-photo-37062365.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:13,title:"Cosy 1 BHK in Solan",city:"Solan",area:"Chambaghat, Solan",rent:12000,bhk:1,baths:1,size:"580 sq ft",category:"Apartment",ownerName:"Aarav Verma",phone:"+91 98160 33022",whatsapp:"919816033022",email:"aarav.verma@example.com",furnishing:"Furnished",tag:"Great value",description:"Mountain air · Close to town",image:"https://images.pexels.com/photos/12958053/pexels-photo-12958053.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:14,title:"Sunny 1 BHK flat in Manali",city:"Manali",area:"Aleo, Manali",rent:16000,bhk:1,baths:1,size:"700 sq ft",category:"Apartment",ownerName:"Tara Thakur",phone:"+91 98160 44033",whatsapp:"919816044033",email:"tara.thakur@example.com",furnishing:"Furnished",tag:"Mountain town",description:"Bright rooms · Balcony · Mountain views",image:"https://images.pexels.com/photos/32464426/pexels-photo-32464426.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:15,title:"Affordable 2 BHK flat in Mandi",city:"Mandi",area:"Saulikhad, Mandi",rent:15000,bhk:2,baths:1,size:"820 sq ft",category:"Apartment",ownerName:"Rohit Sharma",phone:"+91 98160 55044",whatsapp:"919816055044",email:"rohit.sharma@example.com",furnishing:"Unfurnished",tag:"Great value",description:"Quiet neighbourhood · Easy town access",image:"https://images.pexels.com/photos/38549330/pexels-photo-38549330.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:16,title:"Private PG room in Shimla",city:"Shimla",area:"Sanjauli, Shimla",rent:8500,bhk:null,roomType:"Private PG room",baths:1,size:"180 sq ft",category:"PG / Room",ownerName:"Pooja Thakur",phone:"+91 98160 66055",whatsapp:"919816066055",email:"pooja.thakur@example.com",furnishing:"Furnished",tag:"Budget friendly",description:"Bed · Wardrobe · Shared kitchen",image:"https://images.pexels.com/photos/31944373/pexels-photo-31944373.jpeg?auto=compress&cs=tinysrgb&w=900"},
  {id:17,title:"Shared PG bed in Dharamshala",city:"Dharamshala",area:"Kotwali Bazaar, Dharamshala",rent:7500,bhk:null,roomType:"Bed in shared PG room",baths:1,size:"Shared room",category:"Shared Room",ownerName:"Nisha Verma",phone:"+91 98160 77066",whatsapp:"919816077066",email:"nisha.verma@example.com",furnishing:"Furnished",tag:"Low monthly rent",description:"Furnished shared room · Common kitchen",image:"https://images.pexels.com/photos/4907183/pexels-photo-4907183.jpeg?auto=compress&cs=tinysrgb&w=900"}
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
let saved = new Set(JSON.parse(localStorage.getItem("dera-saved") || "[]"));
const himachalCities = new Set(["Shimla", "Dharamshala", "Solan", "Manali", "Mandi"]);

const money = n => "₹" + n.toLocaleString("en-IN");
function render() {
  const city = citySelect.value;
  const budget = budgetSelect.value;
  const bhk = bhkSelect.value;
  const propertyType = propertyTypeSelect.value;
  visibleProperties = properties.filter(p =>
    (!city || (city === "Himachal Pradesh" ? himachalCities.has(p.city) : p.city === city)) &&
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
        <img src="${p.image}" alt="Sample home photo in India" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='#dce8dc'">
        <span class="badge">${p.tag}</span>
        <button class="heart-button ${saved.has(p.id) ? "saved" : ""}" data-save="${p.id}" aria-label="${saved.has(p.id) ? "Remove saved home" : "Save home"}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? "♥" : "♡"}</button>
      </div>
      <div class="property-content">
        <p class="property-location"><span>⌖</span>${p.area}</p>
        <h3 class="property-title">${p.title}</h3>
        <p class="property-description">${p.category} · ${p.description} · ${p.furnishing}</p>
        <div class="property-meta">${p.bhk ? `<span><strong>${p.bhk}</strong> BHK</span>` : `<span><strong>${p.roomType}</strong></span>`}<span><strong>${p.baths}</strong> Bath</span><span><strong>${p.category}</strong></span></div>
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
    localStorage.setItem("dera-saved", JSON.stringify([...saved]));
    render();
  }
  if (detailButton) {
    const p = properties.find(item => item.id === Number(detailButton.dataset.details));
    if (p) alert(`${p.title}\n${p.area}\n${money(p.rent)} per month\n${p.bhk ? `${p.bhk} BHK` : p.roomType} · ${p.baths} bathroom(s) · ${p.size}\n${p.category} · ${p.furnishing}\nOwner: ${p.ownerName}\nPhone: ${p.phone}\nEmail: ${p.email}\n\nDemo listing: replace this with a property details page and verified owner contact.`);
  }
});
function resetFilters() {
  citySelect.value = ""; budgetSelect.value = "any"; bhkSelect.value = "any"; propertyTypeSelect.value = "any";
  if (chatBudgetOption) {
    chatBudgetOption.remove();
    chatBudgetOption = null;
  }
  furnishingFilter = "all";
  document.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("selected", b.dataset.type === "all"));
  render();
}
document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("viewAll").addEventListener("click", event => { event.preventDefault(); resetFilters(); });
function updateWelcome() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 5 || hour >= 21
    ? "Good night"
    : hour < 12
      ? "Good morning"
      : hour < 17
        ? "Good afternoon"
        : "Good evening";
  document.getElementById("welcomeGreeting").textContent = `${greeting}! Welcome home.`;
  document.getElementById("welcomeDate").textContent = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(now);
}
updateWelcome();
setInterval(updateWelcome, 60_000);
document.getElementById("year").textContent = new Date().getFullYear();
render();

const chatPanel = document.getElementById("chatPanel");
const chatLauncher = document.getElementById("chatLauncher");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
let chatBudgetOption;

function addChatMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `chat-message ${sender}-message`;
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatLauncher.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) chatInput.focus();
}

function parseChatBudget(message) {
  const match = message.match(/(?:under|below|within|up to|upto|budget(?:\s+(?:of|is))?|less than|max(?:imum)?(?:\s+budget)?|at most)\s*(?:₹\s*)?(\d[\d,]*(?:\.\d+)?)\s*(k|thousand|lakh)?\b/i)
    || message.match(/₹\s*(\d[\d,]*(?:\.\d+)?)\s*(k|thousand|lakh)?\b/i);
  if (!match) return null;
  const amount = Number(match[1].replace(/,/g, ""));
  const multiplier = match[2] && match[2].toLowerCase() === "lakh"
    ? 100000
    : match[2]
      ? 1000
      : 1;
  return Math.round(amount * multiplier);
}

function applyChatBudget(amount) {
  const value = String(amount);
  if (![...budgetSelect.options].some(option => option.value === value)) {
    if (chatBudgetOption) chatBudgetOption.remove();
    chatBudgetOption = new Option(`Up to ${money(amount)} (chat search)`, value);
    budgetSelect.add(chatBudgetOption);
  }
  budgetSelect.value = value;
}

function answerChat(message) {
  const normalized = message.toLowerCase();
  const cityOption = [...citySelect.options].find(option =>
    option.value && normalized.includes(option.value.toLowerCase())
  );
  const city = normalized.includes("himachal")
    ? "Himachal Pradesh"
    : /\bbangalore\b/i.test(normalized)
      ? "Bengaluru"
    : cityOption && cityOption.value;
  const bhkMatch = normalized.match(/\b([1-3])\s*(?:bhk|bed(?:room)?s?)\b|\bbhk\s*([1-3])\b/i);
  const bhk = bhkMatch ? bhkMatch[1] || bhkMatch[2] : null;
  const budget = parseChatBudget(message);
  const wantsUnfurnished = /\bunfurnished\b/i.test(normalized);
  const wantsFurnished = !wantsUnfurnished && /\bfurnished\b/i.test(normalized);
  const categoryOption = [...propertyTypeSelect.options].find(option =>
    option.value === "Shared Room" && /\bshared room\b|\bshared pg\b/.test(normalized)
  ) || [...propertyTypeSelect.options].find(option =>
    option.value === "PG / Room" && /\bpg\b|paying guest|private room/.test(normalized)
  ) || [...propertyTypeSelect.options].find(option =>
    option.value && option.value !== "any" && normalized.includes(option.value.toLowerCase())
  );
  const asksToSearch = /\b(find|show|search for|looking for|look for|want to rent|need a home|available homes|available flats)\b/i.test(normalized);

  if (city || bhk || budget !== null || wantsFurnished || wantsUnfurnished || categoryOption || asksToSearch) {
    if (city) citySelect.value = city;
    if (bhk) bhkSelect.value = bhk;
    if (budget !== null) applyChatBudget(budget);
    if (categoryOption) propertyTypeSelect.value = categoryOption.value;
    if (wantsUnfurnished || wantsFurnished) {
      document.querySelector(`[data-type="${wantsUnfurnished ? "unfurnished" : "furnished"}"]`).click();
    } else {
      render();
    }
    document.getElementById("homes").scrollIntoView({ behavior: "smooth" });
    const homes = visibleProperties.length;
    if (!homes) {
      return "I couldn't find a sample home matching all those filters. Try a different city or raise the budget.";
    }
    const sample = visibleProperties.slice(0, 3)
      .map(home => `${home.title} in ${home.area} — ${money(home.rent)}/month`)
      .join("; ");
    return `I found ${homes} sample ${homes === 1 ? "home" : "homes"} for you: ${sample}${homes > 3 ? "; and more" : ""}. I've applied those filters to the listings.`;
  }

  if (/\b(list|post|advertise|landlord|my flat|my property)\b/i.test(normalized)) {
    return "To list a property in this demo, use the List your property link to open an email draft. The demo doesn't submit or publish listings automatically.";
  }
  if (/\b(contact|call|whatsapp|owner|agent)\b/i.test(normalized)) {
    return "Use the Call or WhatsApp buttons on a home card to contact its listed owner. These are demo contacts, so verify the owner and availability before making any payment.";
  }
  if (/\b(save|favourite|favorite|heart|shortlist)\b/i.test(normalized)) {
    return "Tap the heart on a listing to save it. Your saved homes are kept in this browser.";
  }
  if (/\b(verified|verification|real|genuine|deposit|advance|fraud|scam|legit)\b/i.test(normalized)) {
    return "These are illustrative sample listings, not verified or confirmed available homes. Confirm the property, rent, deposit, lease terms, and owner's identity directly before paying anything.";
  }
  if (/\b(filter|budget|city|bhk|furnished|search)\b/i.test(normalized)) {
    return "Choose a city, maximum monthly budget, BHK, or property type in the search bar. You can also tell me something like “2 BHK in Shimla under ₹20,000” and I'll apply the filters.";
  }
  return "I can help you search sample homes by city, budget, BHK, furnishing, or property type, and explain how to contact an owner or save a favourite. What are you looking for?";
}

chatLauncher.addEventListener("click", () => setChatOpen(chatPanel.hidden));
document.getElementById("chatClose").addEventListener("click", () => {
  setChatOpen(false);
  chatLauncher.focus();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    setChatOpen(false);
    chatLauncher.focus();
  }
});
document.getElementById("chatForm").addEventListener("submit", event => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;
  addChatMessage(message, "user");
  chatInput.value = "";
  addChatMessage(answerChat(message), "assistant");
});
document.getElementById("chatSuggestions").addEventListener("click", event => {
  const suggestion = event.target.closest("button");
  if (!suggestion) return;
  chatInput.value = suggestion.textContent;
  document.getElementById("chatForm").requestSubmit();
});

document.getElementById("feedbackForm").addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = `डेरा ${formData.get("type")} (${formData.get("rating")}/5)`;
  const body = [
    `Feedback type: ${formData.get("type")}`,
    `Rating: ${formData.get("rating")}/5`,
    `Name: ${formData.get("name") || "Not provided"}`,
    "",
    String(formData.get("message"))
  ].join("\n");
  const mailto = `mailto:elakshisood2008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("feedbackStatus").textContent = "Your email app should open with the feedback draft. Send it there to deliver your feedback.";
  window.location.href = mailto;
});
