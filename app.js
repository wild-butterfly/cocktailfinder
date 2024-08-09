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
    console.error("Name or ingredients missing in request");
    return res
      .status(400)
      .json({ error: "Please provide both cocktail name and ingredients" });
  }

  try {
    console.log(
      `Fetching recipe for cocktail: ${name} with ingredients: ${ingredients}`
    );
    const response = await axios.get(`https://api.api-ninjas.com/v1/cocktail`, {
      params: {
        name: name,
        ingredients: ingredients,
      },
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    });

    console.log("API response:", response.data);

    if (response.data.length === 0) {
      console.error("Cocktail not found");
      return res.status(404).json({ error: "Cocktail not found" });
    }

    res.json(response.data[0]);
  } catch (error) {
    console.error("Error fetching cocktail recipe:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the cocktail recipe" });
  }
});

app.post("/api/cocktail", async (req, res) => {
  const { name, ingredients } = req.body;

  if (!name || !ingredients) {
    console.error("Name or ingredients missing in request");
    return res
      .status(400)
      .json({ error: "Please provide both cocktail name and ingredients" });
  }

  try {
    console.log(
      `Fetching recipe for cocktail: ${name} with ingredients: ${ingredients}`
    );
    const response = await axios.get(`https://api.api-ninjas.com/v1/cocktail`, {
      params: {
        name: name,
        ingredients: ingredients.join(","),
      },
      headers: {
        "X-Api-Key": process.env.API_KEY,
      },
    });

    console.log("API response:", response.data);

    if (response.data.length === 0) {
      console.error("Cocktail not found");
      return res.status(404).json({ error: "Cocktail not found" });
    }

    res.json(response.data[0]);
  } catch (error) {
    console.error("Error fetching cocktail recipe:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the cocktail recipe" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
