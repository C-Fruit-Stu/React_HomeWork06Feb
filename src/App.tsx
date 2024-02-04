import Notes from './components/Notes'
import { SNotes } from './types/notes'
import { useState } from 'react'
import './App.css'
export default function App() {
  
  const [date, setDate] = useState<string | null>(null);
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDate(event.target.value);
  };

  const [notes, setNotes] = useState<Array<SNotes>>([]);

  const handleSubmit = () => {
    const headLine = (document.getElementById('title') as HTMLInputElement).value;
    const text = (document.getElementById('text') as HTMLInputElement).value;
    setNotes(prevNotes => [...prevNotes, { headLine: headLine || '', text: text || '', date: date || '' }]);
  };
  return (
    <>
      <div id="inputDiv">
        <h1>You Note list</h1>
        <input id="title" type="text" placeholder='title'></input>
        <input id="date" type="date" placeholder='Date' onChange={handleDateChange}></input>
        <input id="text" type="text" placeholder='text'></input>
        <button id="submit" onClick={handleSubmit}>submit</button>
      </div>
      <div id="list">
        <Notes notes={notes} />
      </div>
    </>
  )
}