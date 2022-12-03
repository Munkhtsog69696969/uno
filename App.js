import './App.css';
import {useState,useEffect,useRef} from "react"


function App() {
  let [players,setPlayers]=useState(0);

  const [totalCardsA,setTotalCardsA]=useState([
    //blue cards 0-19
    "blue-0",
    "blue-1-1",
    "blue-2-1",
    "blue-3-1",
    "blue-4-1",
    "blue-5-1",
    "blue-6-1",
    "blue-7-1",
    "blue-8-1",
    "blue-9-1",

    "blue-1-2",
    "blue-2-2",
    "blue-3-2",
    "blue-4-2",
    "blue-5-2",
    "blue-6-2",
    "blue-7-2",
    "blue-8-2",
    "blue-9-2",
    //green cards 0-19
    "green-0",
    "green-1-1",
    "green-2-1",
    "green-3-1",
    "green-4-1",
    "green-5-1",
    "green-6-1",
    "green-7-1",
    "green-8-1",
    "green-9-1",

    "green-1-2",
    "green-2-2",
    "green-3-2",
    "green-4-2",
    "green-5-2",
    "green-6-2",
    "green-7-2",
    "green-8-2",
    "green-9-2",
    //red cards 0-19
    "red-0",
    "red-1-1",
    "red-2-1",
    "red-3-1",
    "red-4-1",
    "red-5-1",
    "red-6-1",
    "red-7-1",
    "red-8-1",
    "red-9-1",

    "red-1-2",
    "red-2-2",
    "red-3-2",
    "red-4-2",
    "red-5-2",
    "red-6-2",
    "red-7-2",
    "red-8-2",
    "red-9-2",
    //yellow cards 0-19
    "yellow-0",
    "yellow-1-1",
    "yellow-2-1",
    "yellow-3-1",
    "yellow-4-1",
    "yellow-5-1",
    "yellow-6-1",
    "yellow-7-1",
    "yellow-8-1",
    "yellow-9-1",

    "yellow-1-2",
    "yellow-2-2",
    "yellow-3-2",
    "yellow-4-2",
    "yellow-5-2",
    "yellow-6-2",
    "yellow-7-2",
    "yellow-8-2",
    "yellow-9-2",

    //blue-skipCards
    "blue-skipCard-1",
    "blue-skipCard-2",
    //green-skipCards
    "green-skipCard-1",
    "green-skipCard-2",
    //red-skipCards
    "red-skipCard-1",
    "red-skipCard-2",
    //yellow-skipCards
    "yellow-skipCard-1",
    "yellow-skipCard-2",

    //blue-reverseCard
    "blue-reverseCard-1",
    "blue-reverseCard-2",
    //green-reverseCard
    "green-reverseCard-1",
    "green-reverseCard-2",
    //red-reverseCard
    "red-reverseCard-1",
    "red-reverseCard-2",
    //yellow-reverseCard
    "yellow-reverseCard-1",
    "yellow-reverseCard-2",
    //wildCards
    "wildCard-1",
    "wildCard-2",
    "wildCard-3",
    "wildCard-4",
    //wildDrawCards
    "wildDrawCard-1",
    "wildDrawCard-2",
    "wildDrawCard-3",
    "wildDrawCard-4",
    //draw2Card
    "blue-draw2Card-1",
    "blue-draw2Card-2",
    "green-draw2Card-1",
    "green-draw2Card-2",
    "red-draw2Card-1",
    "red-draw2Card-2",
    "yellow-draw2Card-1",
    "yellow-draw2Card-2",
  ]);

  const [totalCardsB,setTotalCardsB]=useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  let [turn,setTurn]=useState("right");

  let [active,setActive]=useState([]);

  let [p1,setP1]=useState([]);

  let [p2,setP2]=useState([]);

  let [p3,setP3]=useState([]);

  let [p4,setP4]=useState([]);

  let [selectedP,setSelectedP]=useState(1);

  let isP1=useRef(false);
  let isP2=useRef(false);
  let isP3=useRef(false);
  let isP4=useRef(false);

  //carduud yalgah 
  useEffect(()=>{
    totalCardsB.map((card,i)=>{
      let random=totalCardsA[parseInt(Math.random()*totalCardsA.length)];
      totalCardsB[i]=random;
      let randomIndex=totalCardsA.indexOf(random);
      totalCardsA.splice(randomIndex,1);
    });
    setTotalCardsA([...totalCardsA]);
  },[]);

  if(players==2){
    if(active.length==0){
      active.push(1);
      active.push(2);
      setActive([...active]);

    }
  }
  if(players==3){
    if(active.length==0){
      active.push(1);
      active.push(2);
      active.push(3);
      setActive([...active]);
    }
  }
  if(players==4){
    if(active.length==0){
      active.push(1);
      active.push(2);
      active.push(3);
      active.push(4);
      setActive([...active]);
    }
  }

  //togliimnii ehnd player bolgond carduud ugnu
  useEffect(()=>{
    if(players==2){
      while(p1.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p1.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p2.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p2.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
    }

    if(players==3){
      while(p1.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p1.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p2.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p2.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p3.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p3.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
    }

    if(players==4){
      while(p1.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p1.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p2.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p2.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p3.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p3.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
      while(p4.length!=5){
        const card=totalCardsB[totalCardsB.length-1];
        p4.push(card);
        totalCardsB.splice(totalCardsB.length-1,1);
      }
    }
    setP1([...p1]);
    setP2([...p2]);
    setP3([...p3]);
    setP4([...p4]);
  },[players]);

  // console.log(p1);
  // console.log(p2);
  // console.log(p3);
  // console.log(p4);
  // console.log(totalCardsB);

  function nextTurn(){
    if(selectedP!=active.length && active.length!=0){
      setSelectedP(prev=>prev+1);
    }else{
      setSelectedP(selectedP=1);
    }
  }

  if(selectedP==1){
    isP1.current=true;
    isP2.current=false;
    isP3.current=false;
    isP4.current=false;
  }
  if(selectedP==2){
    isP1.current=false;
    isP2.current=true;
    isP3.current=false;
    isP4.current=false;
  }
  if(selectedP==3){
    if(active.length>=3){
      isP1.current=false;
      isP2.current=false;
      isP3.current=true;
      isP4.current=false;
    }else{
      isP1.current=true;
      isP2.current=false;
      isP3.current=false;
      isP4.current=false;
    }
  }
  if(selectedP==4){
    if(active.length>=4){
      isP1.current=false;
      isP2.current=false;
      isP3.current=false;
      isP4.current=true;
    }else{
      isP1.current=true;
      isP2.current=false;
      isP3.current=false;
      isP4.current=false;
    }
  }

  // console.log("p1",isP1);
  // console.log("p2",isP2);
  // console.log("p3",isP3);
  // console.log("p4",isP4);
  console.log(selectedP);


  return (
    <>
      <div className={players==0 ? "players-select" :"players-select-inv"}>

        <div className='players-select-1' onClick={()=>{
          setPlayers(players=2);
        }}>2</div>

        <div className='players-select-1' onClick={()=>{
          setPlayers(players=3);
        }}>3</div>

        <div className='players-select-1' onClick={()=>{
          setPlayers(players=4);
        }}>4</div>
      </div>

      <div className='game'>
        <div className='game1'>
          <p>
            {
              isP1.current?(
                "player 1 turn"
              ):
              isP2.current?(
                "player 2 turn"
              ):
              isP3.current?(
                "player 3 turn"
              ):(
                "player 4 turn"
              )
            }
          </p>
          <img className='mod-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fed3bb24-454f-4bdf-a721-6aa8f23e7cef/d9gnihf-ec16caeb-ec9c-4870-9480-57c7711d844f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlZDNiYjI0LTQ1NGYtNGJkZi1hNzIxLTZhYThmMjNlN2NlZlwvZDlnbmloZi1lYzE2Y2FlYi1lYzljLTQ4NzAtOTQ4MC01N2M3NzExZDg0NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kp5EommPFQl1sDPPtC-p8JloXDTm3CyNUgoievwh8Kw"/>
        </div>

        <div className='game2'>
          <button className='button' onClick={nextTurn}>Done</button>
          <div className='player-cards'>
            {
             isP1.current?(
              p1.map((card,i)=>{
                return(
                  <p>{card}</p>
                )
              })
             ):
             isP2.current?(
              p2.map((card,i)=>{
                return(
                  <p>{card}</p>
                )
              })
             ):
             isP3.current?(
              p3.map((card,i)=>{
                return(
                  <p>{card}</p>
                )
              })
             ):(
              p4.map((card,i)=>{
                return(
                  <p>{card}</p>
                )
              })
             )
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default App;