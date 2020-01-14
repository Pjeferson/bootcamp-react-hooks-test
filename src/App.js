import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const techsLocal = localStorage.getItem('techs');

    if (techsLocal) {
      setTechs(JSON.parse(techsLocal));
    }

    return () => {}; // ComponentWillUnmount like bahavior
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
