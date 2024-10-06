import React, { useState } from 'react';

function Primercomponente({ getData1, getData2 }) {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFetchData2 = () => {
    getData2(name);
  };

  return (
    <div>
      <button onClick={getData1}>Fetch All Characters</button>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Enter character name" 
      />
      <button onClick={handleFetchData2}>Fetch Character by Name</button>
    </div>
  );
}

export default Primercomponente;
