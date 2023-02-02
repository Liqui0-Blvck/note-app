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




  return (
    <div className="container">
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
