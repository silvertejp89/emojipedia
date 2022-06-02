import React from 'react';
import Card from './Card';
import emojipedia from '../emojipedia';

//I used a synonym for emoji (kaomoji) to avoid confusion

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((kaomoji) => (
          <Card
            key={kaomoji.id}
            emoji={kaomoji.emoji}
            name={kaomoji.name}
            meaning={kaomoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;

