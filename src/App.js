import React, { useEffect, useState } from 'react';
import './App.css';
import zombie from './assets/zombie.png'
import survivor from './assets/survivor.png'

const sentences = [
  "Why run? Just type!",
  "Just one more sentence... maybe.",
  "Letter by letter to freedom.",
  "LOL, you're doomed.",
  "You're on fire... not literally.",
  "Faster! Before it's too late.",
  "Type me baby one more time.",
  "Oops, that was a brain!",
  "Brains are a zombie's favorite snack.",
  "Don't stop typing... ever.",
  "Say hello to doom with style.",
  "Ghosts wish they typed this good.",
  "Oops, forgot the full stop.",
  "Just another sentence to go.",
  "Was that your last word?",
  "Typers gonna type.",
  "This font is your fate.",
  "Keyboard: your last line of defense.",
  "Who needs weapons? You have fingers.",
  "Coffee fuels survival.",
  "Stay focused or stay eaten.",
  "Witty typing saves the day.",
  "Grave mistakes were made.",
  "Mind the caps lock!",
  "404: Safe zone not found.",
  "Stay alert, stay alive.",
  "Zombies appreciate grammar too.",
  "Typo? Say goodbye.",
  "The quick brown fox tripped.",
  "Fast fingers save futures.",
  "Life's short, type faster.",
  "Don't feed the zombies.",
  "Why so serious? It's just zombies.",
  "Don't blink. Just type.",
  "Mistakes were made... again.",
  "This is not a drill... it's a keyboard.",
  "Escape is just a key... or is it?",
  "Don't lose your head... literally.",
  "Watch your fingers, they're tasty.",
  "Congratulations, you're still alive.",
  "Ctrl+Z won't save you now.",
  "Aliens are judging your grammar.",
  "This is not a typing test.",
  "Last one to type is eaten.",
  "Hit that spacebar like a boss.",
  "Beware of typos in the dark.",
  "Breathe. Type. Survive.",
  "Keep your fingers on the home row.",
  "Let's make typos extinct.",
  "Shhh! Zombies can hear typos.",
  "You vs Zombies. Let's go!",
  "Nice try, zombie!",
  "You can't spell survive without U.",
  "You've got guts... they want them.",
  "You vs autocorrect: FIGHT!",
  "The undead are unimpressed.",
  "Even zombies are impressed.",
  "This is your moment.",
  "Keyboard warrior mode: ON.",
  "This game bites.",
  "Almost saved... or are you?",
  "Just vibing... with danger.",
  "This sentence is a trap.",
  "Blink and you're eaten.",
  "Auto-correct is your enemy now.",
  "If you can read this, you're still safe.",
  "Be the hero. Type the sentence.",
  "Type now, scream later.",
  "Procrastinate now, panic later.",
  "Hurry up, it's lunch time... for them.",
  "Keep typing or start running.",
  "Short and snappy saves lives.",
  "They can smell your fear.",
  "Touch-typing = pro-survival.",
  "Beware: undead grammar police.",
  "Oops, was that a real zombie?",
  "Your fingers are delicious.",
  "Wrong letter = game over.",
  "Zombies dislike slow typers.",
  "Type before they bite.",
  "Welcome to typo hell.",
  "No time for punctuation!",
  "Even brains need spaces.",
  "You broke the keyboard again.",
  "Shift happens.",
  "Avoid caps-lock rage.",
  "Run? Nah, just type!",
  "Every sentence is a battle.",
  "Escape through words.",
  "Grammar police meet zombie law.",
  "Save yourself, press enter.",
  "Deadlines? More like lifelines.",
  "Press F to survive.",
  "Your life = 100 WPM.",
  "Typing is your only weapon.",
  "Correct or be consumed.",
  "Victory is in the vocabulary.",
  "Quick! Type to escape.",
  "Spacebar is your savior.",
  "Backspace can't fix bites.",
  "This sentence wants you alive.",
  "Oops! Zombie took a nibble.",
  "You're surrounded. Start typing!"
];


function getrandomsentence(){
  const randomindex=Math.floor(Math.random() * sentences.length);
  return sentences[randomindex];
}

function App(){
  const [score, setScore] = useState(0); 
  const maxScore = 100;
  const progress = (score / maxScore) * 100;
  const [issaved,setsaved] = useState(false);
  const [isdead,setdead] =useState(false);
  const [zombiePosition, setZombiePosition] = useState(0);
  const [input,setinput] = useState('');
  const[currentsentence,setcurrentsentence] = useState(getrandomsentence());

  useEffect(()=>{
    if(input===currentsentence){
      const newscore=score+20;
      setScore(newscore);
      setinput("");
      setcurrentsentence(getrandomsentence());

      if(newscore>=maxScore){
        setsaved(true);
      }
    }
  },[input,score,currentsentence]);


useEffect(() => {
  if (issaved || isdead) return;

  const interval = setInterval(() => {
    setZombiePosition(pos => {
      if (pos >= 82) {
        setdead(true);
        clearInterval(interval);
        return pos;
      }
      return pos + 1; 
    });
  }, 700); 

  return () => clearInterval(interval);
}, [issaved, isdead]);


  const reset=()=>{
    setScore(0);
    setinput('');
    setcurrentsentence(getrandomsentence());
    setsaved(false);
    setdead(false);
    setZombiePosition(0);
  }


  return (
    <>
    <div className='master'>
     
        <>
        <div className='heading'>
        <p>Type to survive</p>
        </div>

        <div className='scoreboard'>
          <p>Score</p>

          <div className='scorebox'>
            <div className='score-fill' style={{ width: `${progress}%` }}></div>
          </div>

        </div>

        <div className='playarea'>
          <div className='zombieandplayer'>
            <div className='zombie'>
              <img src={zombie} alt='zombie-image' style={{left: `${zombiePosition}vw`}}/>
            </div>

            <div className='player'>
              <img src={survivor} alt='survivor-image'/>
            </div>
          </div>

          <div className='allgrass'>
          </div>

        </div>
        <div className='maintext'>
          <div className='currentsentence'>
            <p>{currentsentence}</p>
          </div>

          <div className='typehere'>
            <input type='text' className='transparent' value={input} onChange={e=> setinput(e.target.value)} placeholder='type here'/>
          </div>
        </div>
        </>
      
    
    {issaved===true &&(
      <div className='winwrapper'>
        <div className='won'>
          <p>YOU ARE SAVED!!</p>
          <button onClick={reset}>Try again?</button>
        </div>
      </div>
    )}
    
    {isdead===true &&(
      <div className='deadwrapper'>
        <div className='dead'>
          <p>YOU ARE DEAD!!</p>
          <button onClick={reset}>Try again?</button>
        </div>
      </div>
    )}
    </div>

    </>
  );
}

export default App;
