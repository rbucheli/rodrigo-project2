const express = require('express');
const characterRouter = express.Router();
const Character = require('../models/character');

//___________________
// Routes
//___________________
// INDEX (get)
characterRouter.get('/', (req, res) => {
  Character.find({}, (error, allCharacters) => {
    res.render('index.ejs', {
      characters: allCharacters,
    });
  });
});

// NEW (get)
characterRouter.get("/new", (req, res) => {
  res.render('new.ejs');
});

// DESTROY (delete)
characterRouter.delete("/:id", (req, res) => {
  Character.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/characters")
  });
});

// UPDATE (put)
characterRouter.put("/:id", (req, res) => {
  Character.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }, (error, updatedCharacter) => {
    res.redirect(`/characters/${req.params.id}`);
  });
});

// CREATE (post)
characterRouter.post("/", (req, res) => {
  Character.create(req.body, (error, createdCharacter) => {
    res.redirect('/characters');
  });
});

//EDIT (get) (put)
characterRouter.get("/:id/edit", (req, res) => {
  Character.findById(req.params.id, (error, foundCharacter) => {
    res.render("edit.ejs", {
      character: foundCharacter,
    });
  });
});

// SHOW (get)
characterRouter.get("/:id", (req, res) => {
  Character.findById(req.params.id, (err, foundCharacter) => {
    res.render('show.ejs', {
      character: foundCharacter,
    });
  });
});

// Exports
module.exports = characterRouter;