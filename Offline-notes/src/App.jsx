import { useEffect, useState } from "react";
import { addNote, getAllNotes } from "./utils/db";

export default function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes().then(setNotes);
  }, []);

  const saveNote = async () => {
    if (!text) return;
    const newNote = { text, createdAt: new Date().toISOString() };
    await addNote(newNote);
    setText("");
    setNotes(await getAllNotes());
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Offline Notes</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={saveNote}>Save</button>
      <hr />
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}
