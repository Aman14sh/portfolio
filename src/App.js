import './App.css';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Herosection } from './components/Herosection';
import { Skill } from './components/Skill';
import { ContactForm } from './components/ContactForm';
function App() {
  const [S,setS]=useState(true);
  let position= window.pageYOffset;
  function handleScroll(){
    setS(position);
  }
  console.log(S);
  return (
   <div className="wrapper " onScroll={handleScroll}>
   <Navbar s={S}/>
   <Herosection/>
   <Skill/>
   <ContactForm/>
   </div>
  );
}

export default App;
