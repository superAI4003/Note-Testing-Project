import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteView from './components/NoteView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/new" element={<NoteForm />} />
        <Route path="/edit/:id" element={<NoteForm />} />
        <Route path="/note/:id" element={<NoteView />} />
      </Routes>
    </Router>
  );
}

export default App;
