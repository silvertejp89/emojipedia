import React from 'react';
import Card from './Card';
import emojipedia from '../emojipedia';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Card
          emoji={emojipedia[0].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        />

        <Card
          emoji="🙏"
          name="Person With Folded Hands"
          meaning="Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you."
        />

        <Card
          emoji="🤣"
          name="Rolling On The Floor, Laughing"
          meaning="This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of “rofl“. Stands
            for “rolling on the floor, laughing“."
        />
      </dl>
    </div>
  );
}

export default App;

