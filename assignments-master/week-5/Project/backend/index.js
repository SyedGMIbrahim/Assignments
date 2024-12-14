const express = require("express");
const {card} = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/cards", async (req, res) => {
    const newCard = new card(req.body);
    const savedCard = await newCard.save();
    res.json(savedCard);
});

app.get("/cards", async (req, res) => {
    const cards = await card.find();
    res.json(cards);
});

app.put("/cards/:id", async (req, res) => {
    const updatedCard = await card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(updatedCard);
});

app.delete("/cards/:id", async (req, res) => {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: "Card deleted successfully" });
});

app.listen(3000);