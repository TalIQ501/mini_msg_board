import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const messages = [
    {
        text: "Hi there!",
        user:  "Amando",
        added: new Date()
    },
    {
        text: "Helllo, World!",
        user:  "Charles",
        added: new Date()
    }
]

const app = express();

const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const router = express.Router()

app.get("/", (req, res) => {
    res.render("index", { title: "Mini Message Board", messages })
})

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on Port " + PORT)
    }
})