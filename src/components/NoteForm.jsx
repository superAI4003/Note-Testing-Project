import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Input, Textarea, Button } from '@shadcn/ui';

function NoteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (id) {
      fetchNote();
    }
  }, [id]);

  const fetchNote = async () => {
    const { data } = await supabase
      .from('notes')
      .select('*')
      .eq('id', id)
      .single();
    setTitle(data.title);
    setBody(data.body);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await supabase
        .from('notes')
        .update({ title, body })
        .eq('id', id);
    } else {
      await supabase
        .from('notes')
        .insert([{ title, body }]);
    }

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      ></Textarea>
      <Button type="submit">{id ? 'Update Note' : 'Create Note'}</Button>
    </form>
  );
}

export default NoteForm;
