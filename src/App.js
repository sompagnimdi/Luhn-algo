import react, {useState} from 'react';
import './App.css';
import DisplayResult from './components/DisplayResult/DisplayResult';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Userinfos from './components/UsersInfos/UsersInfos';

function App() {
  
  const [number, setNumber] = useState ('')
  const [name, setName] = useState ('')
  const [expiry, setExpiry] = useState ('')
  const [cvc, setCvc] = useState ('')
  const [focus, setFocus] = useState ('')

  return (
    <div className="App">
      <DisplayResult/>
      <SubmitButton/>
      <Userinfos/>
      <form>
        <input
         type='tel'
         name='number'
         placeholder='Card Number'
         value={number}
         onChange={e => setNumber(e.target.value)}
         />
         <input
         type='text'
         name='name'
         placeholder='FirstName LastName'
         value={name}
         onChange={e => setName(e.target.value)}
         onFocus={e => setFocus(e.target.name)}
         />
         <input
         type='text'
         name='expiry'
         placeholder='MM/YY Expiry'
         value={expiry}
         onChange={e => setExpiry(e.target.value)}
         onFocus={e => setFocus(e.target.name)}
         />
         <input
         type='tel'
         name='cvc'
         placeholder='CVC'
         value={cvc}
         onChange={e => setNumber(e.target.value)}
         onFocus={e => setFocus(e.target.name)}
         />
      </form>
      
    </div>
  );
}

export default App;

