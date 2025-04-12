import { Router } from "express";

export const messageRouter = (messages) => {
    const router = Router();

    router.get("/", (req, res) => {
        res.render("index", { title: "Mini Message Board", messages })
    })
    
    router.get("/new", (req, res) => {
        res.render("new_form", { title: "Add Message" })
    })
    
    router.post("/new", (req, res) => {
        const newMessage = {
            text: req.body.messageText,
            user: req.body.user,
            added: new Date()
        }
    
        if (!newMessage.text) {
            return res.status(400).json({ msg: "Please don't send empty messages" })
        }
    
        if (!newMessage.user) {
            return res.status(400).json({ msg: "Please specify user" })
        }
    
        messages.push(newMessage);
        res.redirect("/");
    })

    return router
}