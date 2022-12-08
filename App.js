import './App.css';
import {useState,useEffect,useRef,createContext, useMemo} from "react"


export const cards=createContext();

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

  const placedCard=useRef([]);

  const [renderingPurposely,setRenderingPurposely]=useState(0);

  let wildCardColorChange=useRef(false);

  let wildCardDraw4=useRef(false);

  let skipCard=useRef(false);

  let reverseCard=useRef(false);

  let draw2Card=useRef(false);

  let specialCardsCol=useRef([]);

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
    if(reverseCard.current==true){
      if(selectedP==1){
        setSelectedP(selectedP=4);
      }else{
        setSelectedP(prev=>prev-1);
      }
    }else{
      if(selectedP==4){
        setSelectedP(selectedP=1);
      }else{
        setSelectedP(prev=>prev+1);
      }
    }
  }
  
  console.log(selectedP);
  console.log(reverseCard.current);
  console.log(specialCardsCol.current[specialCardsCol.current.length-1]);
  console.log("/")

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
  // console.log(selectedP);

  function specififcCard(type){
    //blue cards
    if(type=="blue-0"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75046/blue-0-card-clipart-sm.png"
    }

    if(type=="blue-1-1" || type=="blue-1-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75047/blue-1-card-clipart-sm.png"
    }

    if(type=="blue-2-1" || type=="blue-2-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75048/blue-2-card-clipart-xl.png"
    }

    if(type=="blue-3-1" || type=="blue-3-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75049/blue-3-card-clipart-xl.png"
    }

    if(type=="blue-4-1" || type=="blue-4-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75050/blue-4-card-clipart-sm.png"
    }

    if(type=="blue-5-1" || type=="blue-5-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75051/blue-5-card-clipart-xl.png"
    }

    if(type=="blue-6-1" || type=="blue-6-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75052/blue-6-card-clipart-xl.png"
    }

    if(type=="blue-7-1" || type=="blue-7-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75053/blue-7-card-clipart-sm.png"
    }

    if(type=="blue-8-1" || type=="blue-8-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75054/blue-8-card-clipart-md.png"
    }

    if(type=="blue-9-1" || type=="blue-9-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75055/blue-9-card-clipart-md.png"
    }

    //green cards
    if(type=="green-0"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75059/green-0-card-clipart-md.png"
    }

    if(type=="green-1-1" || type=="green-1-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75060/green-1-card-clipart-md.png"
    }

    if(type=="green-2-1" || type=="green-2-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75061/green-2-card-clipart-sm.png"
    }

    if(type=="green-3-1" || type=="green-3-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75062/green-3-card-clipart-md.png"
    }

    if(type=="green-4-1" || type=="green-4-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75063/green-4-card-clipart-sm.png"
    }

    if(type=="green-5-1" || type=="green-5-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75064/green-5-card-clipart-sm.png"
    }

    if(type=="green-6-1" || type=="green-6-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75065/green-6-card-clipart-sm.png"
    }

    if(type=="green-7-1" || type=="green-7-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75066/green-7-card-clipart-xl.png"
    }

    if(type=="green-8-1" || type=="green-8-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75067/green-8-card-clipart-sm.png"
    }

    if(type=="green-9-1" || type=="green-9-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75068/green-9-card-clipart-xl.png"
    }

    //red cards
    if(type=="red-0"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75072/red-0-card-clipart-sm.png"
    }

    if(type=="red-1-1" || type=="red-1-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75073/red-1-card-clipart-sm.png"
    }

    if(type=="red-2-1" || type=="red-2-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75074/red-2-card-clipart-md.png"
    }

    if(type=="red-3-1" || type=="red-3-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75075/red-3-card-clipart-xl.png"
    }

    if(type=="red-4-1" || type=="red-4-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75076/red-4-card-clipart-xl.png"
    }

    if(type=="red-5-1" || type=="red-5-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75077/red-5-card-clipart-xl.png"
    }

    if(type=="red-6-1" || type=="red-6-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75078/red-6-card-clipart-xl.png"
    }

    if(type=="red-7-1" || type=="red-7-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75079/red-7-card-clipart-sm.png"
    }

    if(type=="red-8-1" || type=="red-8-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75080/red-8-card-clipart-xl.png"
    }

    if(type=="red-9-1" || type=="red-9-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75081/red-9-card-clipart-xl.png"
    }

    //yellow cards

    if(type=="yellow-0"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75085/yellow-0-card-clipart-xl.png"
    }

    if(type=="yellow-1-1" || type=="yellow-1-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75086/yellow-1-card-clipart-md.png"
    }

    if(type=="yellow-2-1" || type=="yellow-2-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75087/yellow-2-card-clipart-sm.png"
    }

    if(type=="yellow-3-1" || type=="yellow-3-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75088/yellow-3-card-clipart-sm.png"
    }

    if(type=="yellow-4-1" || type=="yellow-4-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75089/yellow-4-card-clipart-md.png"
    }

    if(type=="yellow-5-1" || type=="yellow-5-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75090/yellow-5-card-clipart-md.png"
    }

    if(type=="yellow-6-1" || type=="yellow-6-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75091/yellow-6-card-clipart-sm.png"
    }

    if(type=="yellow-7-1" || type=="yellow-7-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75092/yellow-7-card-clipart-sm.png"
    }

    if(type=="yellow-8-1" || type=="yellow-8-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75093/yellow-8-card-clipart-sm.png"
    }

    if(type=="yellow-9-1" || type=="yellow-9-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75094/yellow-9-card-clipart-md.png"
    }

    //skip cards

    if(type=="blue-skipCard-1" || type=="blue-skipCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75056/blue-skip-card-clipart-sm.png"
    }

    if(type=="green-skipCard-1" || type=="green-skipCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75069/green-skip-card-clipart-sm.png"
    }

    if(type=="red-skipCard-1" || type=="red-skipCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75082/red-skip-card-clipart-xl.png"
    }

    if(type=="yellow-skipCard-1" || type=="yellow-skipCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75095/yellow-skip-card-clipart-sm.png"
    }

    //reverse cards

    if(type=="blue-reverseCard-1" || type=="blue-reverseCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75057/blue-reverse-card-clipart-xl.png"
    }

    if(type=="green-reverseCard-1" || type=="green-reverseCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75070/green-reverse-card-clipart-sm.png"
    }

    if(type=="red-reverseCard-1" || type=="red-reverseCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75083/red-reverse-card-clipart-sm.png"
    }

    if(type=="yellow-reverseCard-1" || type=="yellow-reverseCard-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75096/yellow-reverse-card-clipart-xl.png"
    }

    //wild cards

    if(type=="wildCard-1" || type=="wildCard-2" || type=="wildCard-3" || type=="wildCard-4"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75098/wild-card-clipart-xl.png"
    }

    //wild draw cards

    if(type=="wildDrawCard-1" ||  type=="wildDrawCard-2" ||  type=="wildDrawCard-3" ||  type=="wildDrawCard-4"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75099/wild-draw-four-card-clipart-sm.png"
    }

    //draw 2 cards

    if(type=="blue-draw2Card-1" ||  type=="blue-draw2Card-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75058/blue-draw-two-card-clipart-sm.png"
    }

    if(type=="green-draw2Card-1" ||  type=="green-draw2Card-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75071/green-draw-two-card-clipart-xl.png"
    }

    if(type=="red-draw2Card-1" ||  type=="red-draw2Card-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75084/red-draw-two-card-clipart-xl.png"
    }

    if(type=="yellow-draw2Card-1" ||  type=="yellow-draw2Card-2"){
      return "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/75097/yellow-draw-two-card-clipart-xl.png"
    }
  }

  //ehnii cardiig gargah
  useEffect(()=>{
    placedCard.current.push(totalCardsB[totalCardsB.length-1]);
    totalCardsB.splice(totalCardsB.length-1,1);
  },[])

  // console.log(totalCardsB)

  let lastPLacedCard=(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]));


  if(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]).Number=="other-skip"){
    skipCard.current=!skipCard.current;
  }else{
    if(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]).Number=="other-reverse"){
      if(placedCard.current[placedCard.current.length-1]!=specialCardsCol.current[specialCardsCol.current.length-1]){
        reverseCard.current=!reverseCard.current;
      }
      specialCardsCol.current.push(placedCard.current[placedCard.current.length-1]);
    }else{
      if(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]).Number=="other-draw2"){
        draw2Card.current=!draw2Card.current;
      }else{
        if(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]).Number=="special"){
          wildCardColorChange.current=!wildCardColorChange.current;
        }else{
          if(colorAndNumberIndicator(placedCard.current[placedCard.current.length-1]).Number=="specialDraw"){
            wildCardDraw4.current=!wildCardDraw4.current;
          }
        }
      }
    }
  }

  if(reverseCard.current==true){
    console.log("reversed")
  }

  // console.log(skipCard.current);
  // console.log(reverseCard.current);
  // console.log(draw2Card.current);
  // console.log(wildCardColorChange.current);
  // console.log(wildCardDraw4.current);

  // console.log(lastPLacedCard)

  // console.log(selectedP)

  function plusPlacedCard(card,p){
    // console.log(p);
    // console.log(placedCard);
    let chosenCard=colorAndNumberIndicator(card);
    console.log(chosenCard)

    if(lastPLacedCard.Color==chosenCard.Color || lastPLacedCard.Number==chosenCard.Number || chosenCard.Color=="special"){
      placedCard.current.push(card);
      if(p=="p1"){
        const index=p1.indexOf(card);
        p1.splice(index,1);
      }
      if(p=="p2"){
        const index=p2.indexOf(card);
        p2.splice(index,1);
      }
      if(p=="p3"){
        const index=p3.indexOf(card);
        p3.splice(index,1);
      }
      if(p=="p4"){
        const index=p4.indexOf(card);
        p4.splice(index,1);
      }
      setRenderingPurposely(prev=>prev+1);
    }
  }

  function colorAndNumberIndicator(card){
    let color=null;
    let number=null;
    let colorAndNumber={Color:null,Number:null};

    //setting colors

    if(
      card=="blue-0" ||
      card=="blue-1-1" ||
      card=="blue-2-1" ||
      card=="blue-3-1" ||
      card=="blue-4-1" ||
      card=="blue-5-1" ||
      card=="blue-6-1" ||
      card=="blue-7-1" ||
      card=="blue-8-1" ||
      card=="blue-9-1" ||
      card=="blue-1-2" ||
      card=="blue-2-2" ||
      card=="blue-3-2" ||
      card=="blue-4-2" ||
      card=="blue-5-2" ||
      card=="blue-6-2" ||
      card=="blue-7-2" ||
      card=="blue-8-2" ||
      card=="blue-9-2" ||
      card=="blue-skipCard-1" ||
      card=="blue-skipCard-2" ||
      card=="blue-reverseCard-1" ||
      card=="blue-reverseCard-2" ||
      card=="blue-draw2Card-1" ||
      card=="blue-draw2Card-2" 
    ){
      color="blue";
    }

    if(
      card=="green-0" ||
      card=="green-1-1" ||
      card=="green-2-1" ||
      card=="green-3-1" ||
      card=="green-4-1" ||
      card=="green-5-1" ||
      card=="green-6-1" ||
      card=="green-7-1" ||
      card=="green-8-1" ||
      card=="green-9-1" ||
      card=="green-1-2" ||
      card=="green-2-2" ||
      card=="green-3-2" ||
      card=="green-4-2" ||
      card=="green-5-2" ||
      card=="green-6-2" ||
      card=="green-7-2" ||
      card=="green-8-2" ||
      card=="green-9-2" ||
      card=="green-skipCard-1" ||
      card=="green-skipCard-2" ||
      card=="green-reverseCard-1" ||
      card=="green-reverseCard-2" ||
      card=="green-draw2Card-1" ||
      card=="green-draw2Card-2" 
    ){
      color="green";
    }

    if(
      card=="red-0" ||
      card=="red-1-1" ||
      card=="red-2-1" ||
      card=="red-3-1" ||
      card=="red-4-1" ||
      card=="red-5-1" ||
      card=="red-6-1" ||
      card=="red-7-1" ||
      card=="red-8-1" ||
      card=="red-9-1" ||
      card=="red-1-2" ||
      card=="red-2-2" ||
      card=="red-3-2" ||
      card=="red-4-2" ||
      card=="red-5-2" ||
      card=="red-6-2" ||
      card=="red-7-2" ||
      card=="red-8-2" ||
      card=="red-9-2" ||
      card=="red-skipCard-1" ||
      card=="red-skipCard-2" ||
      card=="red-reverseCard-1" ||
      card=="red-reverseCard-2" ||
      card=="red-draw2Card-1" ||
      card=="red-draw2Card-2" 
    ){
      color="red";
    }

    if(
      card=="yellow-0" ||
      card=="yellow-1-1" ||
      card=="yellow-2-1" ||
      card=="yellow-3-1" ||
      card=="yellow-4-1" ||
      card=="yellow-5-1" ||
      card=="yellow-6-1" ||
      card=="yellow-7-1" ||
      card=="yellow-8-1" ||
      card=="yellow-9-1" ||
      card=="yellow-1-2" ||
      card=="yellow-2-2" ||
      card=="yellow-3-2" ||
      card=="yellow-4-2" ||
      card=="yellow-5-2" ||
      card=="yellow-6-2" ||
      card=="yellow-7-2" ||
      card=="yellow-8-2" ||
      card=="yellow-9-2" ||
      card=="yellow-skipCard-1" ||
      card=="yellow-skipCard-2" ||
      card=="yellow-reverseCard-1" ||
      card=="yellow-reverseCard-2" ||
      card=="yellow-draw2Card-1" ||
      card=="yellow-draw2Card-2" 
    ){
      color="yellow";
    }

    if(
      card=="wildCard-1"||
      card=="wildCard-2"||
      card=="wildCard-3"||
      card=="wildCard-4"
    ){
      color="special";
      number="special";
    }

    if(
      card=="wildDrawCard-1"||
      card=="wildDrawCard-2"||
      card=="wildDrawCard-3"||
      card=="wildDrawCard-4"
    ){
      color="specialDraw"
      number="specialDraw"
    }

    //setting numbers

    if(
      card=="blue-0"||
      card=="green-0"||
      card=="red-0"||
      card=="yellow-0"
    ){
      number=0
    }

    if(
      card=="blue-1-1" ||
      card=="blue-1-2" ||
      card=="green-1-1" ||
      card=="green-1-2" ||
      card=="red-1-1" ||
      card=="red-1-2" ||
      card=="yellow-1-1" ||
      card=="yellow-1-2" 
    ){
      number=1
    }

    if(
      card=="blue-2-1" ||
      card=="blue-2-2" ||
      card=="green-2-1" ||
      card=="green-2-2" ||
      card=="red-2-1" ||
      card=="red-2-2" ||
      card=="yellow-2-1" ||
      card=="yellow-2-2" 
    ){
      number=2
    }

    if(
      card=="blue-3-1" ||
      card=="blue-3-2" ||
      card=="green-3-1" ||
      card=="green-3-2" ||
      card=="red-3-1" ||
      card=="red-3-2" ||
      card=="yellow-3-1" ||
      card=="yellow-3-2" 
    ){
      number=3
    }

    if(
      card=="blue-4-1" ||
      card=="blue-4-2" ||
      card=="green-4-1" ||
      card=="green-4-2" ||
      card=="red-4-1" ||
      card=="red-4-2" ||
      card=="yellow-4-1" ||
      card=="yellow-4-2" 
    ){
      number=4
    }

    if(
      card=="blue-5-1" ||
      card=="blue-5-2" ||
      card=="green-5-1" ||
      card=="green-5-2" ||
      card=="red-5-1" ||
      card=="red-5-2" ||
      card=="yellow-5-1" ||
      card=="yellow-5-2" 
    ){
      number=5
    }

    if(
      card=="blue-6-1" ||
      card=="blue-6-2" ||
      card=="green-6-1" ||
      card=="green-6-2" ||
      card=="red-6-1" ||
      card=="red-6-2" ||
      card=="yellow-6-1" ||
      card=="yellow-6-2" 
    ){
      number=6
    }

    if(
      card=="blue-7-1" ||
      card=="blue-7-2" ||
      card=="green-7-1" ||
      card=="green-7-2" ||
      card=="red-7-1" ||
      card=="red-7-2" ||
      card=="yellow-7-1" ||
      card=="yellow-7-2" 
    ){
      number=7
    }

    if(
      card=="blue-8-1" ||
      card=="blue-8-2" ||
      card=="green-8-1" ||
      card=="green-8-2" ||
      card=="red-8-1" ||
      card=="red-8-2" ||
      card=="yellow-8-1" ||
      card=="yellow-8-2" 
    ){
      number=8
    }

    if(
      card=="blue-9-1" ||
      card=="blue-9-2" ||
      card=="green-9-1" ||
      card=="green-9-2" ||
      card=="red-9-1" ||
      card=="red-9-2" ||
      card=="yellow-9-1" ||
      card=="yellow-9-2" 
    ){
      number=9
    }

    if(
      card=="blue-skipCard-1" ||
      card=="blue-skipCard-2" ||
      card=="green-skipCard-1" ||
      card=="green-skipCard-2" ||
      card=="red-skipCard-1" ||
      card=="red-skipCard-2" ||
      card=="yellow-skipCard-1" ||
      card=="yellow-skipCard-2" 
    ){
      number="other-skip"
    }

    if(
      card=="blue-reverseCard-1" ||
      card=="blue-reverseCard-2" ||
      card=="green-reverseCard-1" ||
      card=="green-reverseCard-2" ||
      card=="red-reverseCard-1" ||
      card=="red-reverseCard-2" ||
      card=="yellow-reverseCard-1" ||
      card=="yellow-reverseCard-2" 
    ){
      number="other-reverse"
    }

    if(
      card=="blue-draw2Card-1" ||
      card=="blue-draw2Card-2" ||
      card=="green-draw2Card-1" ||
      card=="green-draw2Card-2" ||
      card=="red-draw2Card-1" ||
      card=="red-draw2Card-2" ||
      card=="yellow-draw2Card-1" ||
      card=="yellow-draw2Card-2" 
    ){
      number="other-draw2"
    }

    colorAndNumber.Color=color;
    colorAndNumber.Number=number;

    return colorAndNumber;

  }

  function getCardFromMod(curretPlayer){
    if(curretPlayer==1){
      p1.push(totalCardsB[totalCardsB.length-1]);
      totalCardsB.splice(totalCardsB.length-1,1);
      setP1([...p1]);
    }
    if(curretPlayer==2){
      p2.push(totalCardsB[totalCardsB.length-1]);
      totalCardsB.splice(totalCardsB.length-1,1);
      setP2([...p2]);
    }
    if(curretPlayer==3){
      p3.push(totalCardsB[totalCardsB.length-1]);
      totalCardsB.splice(totalCardsB.length-1,1);
      setP3([...p3]);
    }
    if(curretPlayer==4){
      p4.push(totalCardsB[totalCardsB.length-1]);
      totalCardsB.splice(totalCardsB.length-1,1);
      setP4([...p4]);
    }
  }

  // console.log(colorAndNumberIndicator("blue-0"))

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
          <p style={{color:"white",fontWeight:"bold",fontSize:"20px"}}>
            {
              isP1.current?(
                "Player 1 turn"
              ):
              isP2.current?(
                "Player 2 turn"
              ):
              isP3.current?(
                "Player 3 turn"
              ):(
                "Player 4 turn"
              )
            }
          </p>
          <img className='mod-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fed3bb24-454f-4bdf-a721-6aa8f23e7cef/d9gnihf-ec16caeb-ec9c-4870-9480-57c7711d844f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlZDNiYjI0LTQ1NGYtNGJkZi1hNzIxLTZhYThmMjNlN2NlZlwvZDlnbmloZi1lYzE2Y2FlYi1lYzljLTQ4NzAtOTQ4MC01N2M3NzExZDg0NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kp5EommPFQl1sDPPtC-p8JloXDTm3CyNUgoievwh8Kw"
            onClick={()=>getCardFromMod(selectedP)}
          />
          <img className='mod-img' src={specififcCard(placedCard.current[placedCard.current.length-1])}/>
        </div>
        <button className='button' onClick={nextTurn}>Done</button>
        <div className='game2'>
          <div className='player-cards'>
            {
             isP1.current?(
              p1.map((card,i)=>{
                return(
                  <img src={specififcCard(card)} className="card-image" onClick={()=>plusPlacedCard(card,"p1")}/>
                )
              })
             ):
             isP2.current?(
              p2.map((card,i)=>{
                return(
                  <img src={specififcCard(card)} className="card-image" onClick={()=>plusPlacedCard(card,"p2")}/>
                )
              })
             ):
             isP3.current?(
              p3.map((card,i)=>{
                return(
                  <img src={specififcCard(card)} className="card-image" onClick={()=>plusPlacedCard(card,"p3")}/>
                )
              })
             ):(
              p4.map((card,i)=>{
                return(
                  <img src={specififcCard(card)} className="card-image" onClick={()=>plusPlacedCard(card,"p4")}/>
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