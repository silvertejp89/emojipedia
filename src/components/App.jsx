import React from 'react';

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Card
          emoji="💪"
          name="Tense Biceps"
          meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also
          used in connection with doing sports, e.g. at the gym."
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

