import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function NoteView() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    fetchNote();
  }, [id]);

  const fetchNote = async () => {
    const { data } = await supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .single();
    setNote(data);
  };

  if (!note) return <div>Loading...</div>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <Link to={`/edit/${note.id}`}>Edit</Link>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default NoteView;
