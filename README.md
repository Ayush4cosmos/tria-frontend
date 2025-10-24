# Tria Contacts — React Frontend
<p align="center">
  <img src="https://github.com/user-attachments/assets/aa75c72f-298b-4922-91a7-01d6824eae00" alt="Homepage" width="500"/>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1ca4b8f6-dff5-4a86-9c99-86640beb64a1" alt="Add Contact Modal" width="500"/>
  <img src="https://github.com/user-attachments/assets/8e1e31b2-8918-4f2a-8dd4-409484b55ee5" alt="Contact Popup" width="500"/>
</p>


### Live Demo  
🔗 [https://ayush4cosmos.github.io/tria-frontend](https://ayush4cosmos.github.io/tria-frontend)

---

## Overview

**Tria Contacts** is a single-page React app that displays, searches, and manages a contact list with clean UI and real-app interactions.  
It supports adding, editing, and viewing contacts — all with local state updates and live data fetched from a **mock REST API**.

---

## API Integration

Instead of hardcoding data, the app fetches contacts from a **public Mock API** hosted on [Mocki.io](https://mocki.io/).  
This mimics real-world API communication and demonstrates asynchronous fetching, loading states, and error handling.

- **Endpoint used:**  
  `https://mocki.io/v1/a927097d-93a7-4063-ad80-f01cd2c69d77`

- **How it works:**  
  The app sends a `fetch()` request to the endpoint, retrieves a JSON array of contacts, and dynamically renders them in the UI.  

---

## Features

- **Search by name, email, or phone**  
  Search bar highlights matching text dynamically.

- **Add new contacts**  
  Opens a modal form and automatically assigns a random avatar color.

- **Edit existing contacts**  
  Click any contact to open a popup card; edit and save details directly.

- **View contact details**  
  Pop-up modal with name, email, and phone info.

- **Smooth UX**  
  Sticky header, scrollable list box, and responsive design.

- **Dark minimal UI**  
  Built with pure CSS (no frameworks) and designed for clarity and polish.

---

## Tech Stack

- **Frontend:** React (via Vite)
- **Styling:** Plain CSS (custom dark theme)
- **Build Tool:** Vite 5
- **Mock API:** [Mocki.io](https://mocki.io/)
- **Deployment:** GitHub Pages

---

## Setup Instructions

### 🪜 1. Clone the repository
```bash
git clone https://github.com/ayush4cosmos/tria-frontend.git
cd tria-frontend
npm install
npm run dev

