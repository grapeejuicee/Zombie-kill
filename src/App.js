import React, { useEffect, useState } from 'react';
import './App.css';
import zombie from './assets/zombie.png'
import survivor from './assets/survivor.png'
import flowers from './assets/flower.png'
import meme1 from './assets/recism(1).jpg';
import meme2 from './assets/history.jpg';
import meme4 from'./assets/kashmiri.jpeg';
import meme5 from'./assets/higher(1).jpg';
import meme6 from'./assets/sam(1).jpg';
import meme7 from'./assets/signn.jpg';
import meme8 from'./assets/happy.jpg';
import meme9 from'./assets/911.jpg';
import meme10 from'./assets/af.jpg';
import meme12 from'./assets/stop.jpeg';
import meme13 from'./assets/grim.jpg';
import meme14 from'./assets/family.jpg';
import meme15 from'./assets/chinese.jpeg';
import meme16 from'./assets/child.jpeg';
import meme17 from'./assets/arrest.jpeg';
import meme18 from'./assets/job.jpeg';
import meme19 from'./assets/friends.jpeg';
import meme20 from'./assets/lil.jpeg';
import meme21 from'./assets/wait.jpeg';
import meme22 from'./assets/chi.jpeg';
import meme23 from'./assets/christ.jpeg';
import meme24 from'./assets/crash.jpeg';
import meme25 from'./assets/resume.jpeg';
import meme26 from'./assets/black.jpeg';
import meme27 from'./assets/potter.jpeg';
import meme28 from'./assets/grandma.jpeg';
import meme29 from'./assets/twin.jpg';
import meme30 from'./assets/dark.jpeg';
import meme31 from'./assets/berlin.jpeg';
import meme32 from'./assets/death.jpg';




const sentences = [
  {text: "Racism starts from here..",
   image: meme1
  },

  {text: "What archaeologists will find in 500 years",
  image: meme2
  },

  {text: "Kashmiri bhi jaat hai..",
  image: meme4
  },

  {text: "Higher Education",
  image: meme5
  },

  {text: "Samsung finally converted to islam",
  image: meme6
  },

  {text: "Thank god I saw the sign",
  image: meme7
  },

  {text: "Happy 9/11...",
  image: meme8
  },

  {text: "When Europeans call it 11/09",
  image: meme9
  },

  {text: "Getting a new car tonight, so excited!",
  image: meme10
  },

  {text: "Your patient who has been in a comma is now in a full stop",
  image: meme12
  },

  {text: "The right person will come for you one day-",
  image: meme13
  },

  {text: "Family doctors with orphans.",
  image: meme14
  },

  {text: "When you try to help the kids but they are-",
  image: meme15
  },

  {text: "There has got be a better way to display children's clothes",
  image: meme16
  },

  {text: "How cute, he's dreaming of his first arrest.",
  image: meme17
  },
  
  {text: "Even if your job is boring, make it fun.",
  image: meme18
  },

  {text: "True friendship.",
  image: meme19
  },

  {text: "When you're only a little racist.",
  image: meme20
  },

  {text: "Wait he's back?",
  image: meme21
  },

  {text: "Even chinese call him chinese.",
  image: meme22
  },

  {text: "I beleive Japan doesn't yet understand Christmas",
  image: meme23
  },

  {text: "Bro's second car crash this week.",
  image: meme24
  },

  {text: "Had to put something on my resume...",
  image: meme25
  },

  {text: "See that black dude? Not him, the other one.",
  image: meme26
  },

  {text: "Heinrich Potter",
  image: meme27
  },

  {text: "Grandma VS Grandma.zip",
  image: meme28
  },

  {text: "Genders are like the twin tower, there used to be two of them and now it's a sensitive topic.",
  image: meme29
  },

  {text: "Life gets pretty dark...",
  image: meme30
  },

  {text: "Oh no, not again.",
  image: meme31
  },

  {text: "When you step on a landmine but don't weigh enough o activate it-:",
  image: meme32
  }
];

const flowerStyles = [
  { left: '5%', top: '10px', width: '20px', height: '20px' },
  { left: '17%', top: '5px', width: '22px',height: '22px' },
  { left: '33%', top: '12px', width: '30px',height: '30px' },
  { left: '50%', top: '18px', width: '28px',height: '28px' },
  { left: '64%', top: '9px', width: '26px' ,height: '26px'},
  { left: '80%', top: '6px', width: '27px',height: '27px' },
  { left: '90%', top: '14px', width: '21px',height: '21px' },
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
    if(input===currentsentence.text){
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
      if (pos >= 85) {
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
        <p>Zombie Kill</p>
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
            {flowerStyles.map((style, index) => (
              <img
                key={index} src={flowers} alt="flower" className="flower" style={{ position: 'absolute', ...style }}
              />
            ))}
          </div>

        </div>
        <div className='maintext'>
          <div className='meme-box'>
          <div className='currentsentence'>
            <p>{currentsentence.text}</p>
            <img id="memeImage" src={currentsentence.image} alt="meme"/>
          </div>
          </div>

          <div className='typehere'>
            <input type='text' className='transparent' value={input} onChange={e=> setinput(e.target.value)} placeholder='type here'/>
          </div>
        </div>
        </>
      
    
    {issaved===true &&(
      <div className='winwrapper'>
        <div className='won'>
          <p>YOU ARE SAFE!!</p>
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