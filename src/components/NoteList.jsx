import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await supabase
      .from('notes')
      .delete()
      .eq('id', id);
    fetchNotes();
  };

  return (
    <div>
      <Link to="/new">Create New Note</Link>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
            <Link to={`/edit/${note.id}`}>Edit</Link>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
