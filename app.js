const express = require("express");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/cocktail", async (req, res) => {
  const { name, ingredients } = req.query;

  if (!name || !ingredients) {
    return res.status(400).json({
      error: "Please provide both cocktail name and ingredients",
    });
  }

  try {
    console.log(
      `🔍 Searching cocktail: "${name}" with ingredients: "${ingredients}"`
    );

    const response = await axios.get(
      "https://api.api-ninjas.com/v1/cocktail",
      {
        params: {
          ingredients,
        },
        headers: {
          "X-Api-Key": process.env.API_KEY,
        },
      }
    );

    const cocktails = response.data;

    if (!cocktails || cocktails.length === 0) {
      return res.status(404).json({ error: "Cocktail not found" });
    }


    const matchedCocktail = cocktails.find((cocktail) =>
      cocktail.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!matchedCocktail) {
      return res.status(404).json({
        error: "No matching cocktail found with that name",
      });
    }

    res.json(matchedCocktail);
  } catch (error) {
    console.error("❌ Error fetching cocktail:", error.message);
    res.status(500).json({
      error: "An error occurred while fetching the cocktail recipe",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
