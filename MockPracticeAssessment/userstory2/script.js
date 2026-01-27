const API_URL = "events.json";

let events = [];

// Fetch events 
const fetchEvents = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch data");
    events = await res.json();
    renderEvents(events);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Render events
const renderEvents = (data) => {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  data.forEach(({ title, category, date }) => {
    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Date: ${date}</p>
    `;
    container.appendChild(div);
  });
};

// Filter events
const filterEvents = () => {
  const category = document.getElementById("categoryFilter").value;
  const date = document.getElementById("dateFilter").value;

  let filtered = events.filter(event =>
    (category === "all" || event.category === category) &&
    (!date || event.date === date)
  );

  renderEvents(filtered);
};

// Event listeners
document.getElementById("categoryFilter").addEventListener("change", filterEvents);
document.getElementById("dateFilter").addEventListener("change", filterEvents);

// Live update
setInterval(fetchEvents, 5000);

// Initial load
fetchEvents();
