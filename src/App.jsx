import React, { useState }  from "react";
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/CreateArea";

function App() {

    const [notes, setNotes] = useState([]);
    
    function deleteNote(id) {
        setNotes((prevItems) => {
          return prevItems.filter((item, index) => {
            return index !== id;
          });
        });
      }

      function addNote(newNote) {
        setNotes(prevItems => {
            return [...prevItems, newNote];
          });
      }
    
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <Footer />
    </div>
  );
}

export default App;