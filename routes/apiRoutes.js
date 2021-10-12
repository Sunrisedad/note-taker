// DEPENDENCIES

const fs = require("fs");
const notes = require("../db/db.json")

// ROUTES

module.exports = function(app){

  // GET REQUEST
  
  app.get("/api/notes", (req, res)=>{
    return res.json(notes)
  })
  
  app.get("/api/notes/:id", function(req,res) {
    res.json(notes[req.params.id]);
  });

  // POST REQUEST

  app.post("/api/notes", (req, res) => {

    const newNote = req.body;

    if (notes.length === 0){newNote.id = 1} 
      else {
      newNote.id = (notes[notes.length-1].id + 1);
    }
    notes.push(newNote);

    const jsonNotes = JSON.stringify(notes)

    fs.writeFile("./db/db.json", jsonNotes, function(error) {
      if (error) {
        return console.log(error);
      }
      console.log("New note created");
    })
    res.json(notes)
  })

  // DELETE NOTE

  app.delete("/api/notes/:id", (req, res) => {

    const noteId = req.params.id;

    notes.forEach((n, index) => {
      if(noteId == n.id){notes.splice(index,1)

        const notesCopy = notes.slice();
        
        const jsonNotes = JSON.stringify(notesCopy)

        fs.writeFile("./db/db.json", jsonNotes, function(error) {
          if (error) {
            return console.log(error);
          }
          console.log("Note Deleted");
        })

      }
    })
    res.json(notes);
  })
}