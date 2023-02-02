import NoteList from "./components/NotesList";
import { useState } from 'react';
import { nanoid} from 'nanoid';
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'this is my first note!',
      date: "01-02-2023"
    },
    {
      id: nanoid(),
      text: 'this is my second note!',
      date: "02-02-2023"
    },
    {
      id: nanoid(),
      text: 'this is my third note!',
      date: "03-02-2023"
    }
])

  const addNotes = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addNotes}/>
    </div>
  );
}

export default App;
