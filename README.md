# 🍹 CocktailFinder

**Sip, Smile, Repeat.**

A simple Node.js + Express application that allows users to search for cocktail recipes by providing a cocktail name and ingredients. It fetches real-time results from the API-Ninjas Cocktail API.

---

## 🚀 Project Overview

CocktailFinder provides an easy and fun way to look up cocktail recipes.  
Users enter:

- The **cocktail name**, and
- One or more **ingredients**

The backend then queries API-Ninjas and returns the matching recipe.

This project demonstrates:

- Building a lightweight API backend
- Integrating with a third-party API
- Creating a simple interactive frontend

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **Axios**
- **dotenv**
- **HTML, CSS, JavaScript**
- **API-Ninjas Cocktail API**

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/wild-butterfly/cocktailfinder
cd cocktailfinder
2️⃣ Install dependencies
bash
Copy code
npm install
🔑 API Key Setup
This project uses the API-Ninjas Cocktail API.

Visit https://api-ninjas.com

Create a free account

Copy your API key

Create a .env file in the project root:

env
Copy code
API_KEY=YOUR_API_KEY_HERE
Note: The .env file is excluded from version control.

▶️ Running the Application
Start the server:

bash
Copy code
node app.js
(Or npm start if you added a start script.)

Open in your browser:

arduino
Copy code
http://localhost:3000
🎯 Internal API Endpoint
The frontend communicates with the backend using:

pgsql
Copy code
GET /api/cocktail?name=NAME&ingredients=INGREDIENTS
Example:

bash
Copy code
/api/cocktail?name=Margarita&ingredients=Tequila
📂 Project Structure
bash
Copy code
cocktailfinder/
│
├── app.js              # Express server
├── public/
│   ├── index.html      # Frontend UI
│   ├── logo.png
│   └── styles...
├── .env                # API key (excluded from Git)
├── package.json
└── README.md
❗ Error Handling
The backend may return:

400 → Missing name or ingredients

404 → Cocktail not found

500 → API or request error

The frontend displays user-friendly error messages.

## 🌐 Live Demo
This project uses a Node.js + Express backend and relies on a third-party API.
For security and API usage reasons, it is not deployed publicly.

The application is intended to be run locally.

🤝 Contributing
Contributions, suggestions and pull requests are welcome.

```
