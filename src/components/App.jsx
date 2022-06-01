import React from 'react';
import Card from './Card';
import emojipedia from '../emojipedia';

//I used a synonym for emoji (kaomoji) to avoid confusion
function createCard(kaomoji) {
  return (
    <Card emoji={kaomoji.emoji} name={kaomoji.name} meaning={kaomoji.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

