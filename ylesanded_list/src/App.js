import {useState} from 'react'
import './App.css';
import IlmaAndmed from './IlmaAndmed';
import ToodeteNimekiri from './ToodeteNimekiri';
import UusAsi from './UusAsi';

function App() {
  const [ostunimekiri, setOstunimekiri] = useState([])

  const lisaOst = (nimetus, kogus) => {
    const uusToode = {
      nimetus,
      kogus,
      kasKorvis: false
    }

    const uusOstunimekiri = [ ...ostunimekiri, uusToode ]
    setOstunimekiri(uusOstunimekiri)
    console.log(ostunimekiri)
  }


  return (
    <div className="App">
        <h1>Poenimekiri</h1>
        <UusAsi lisaOst={lisaOst} />
        <ToodeteNimekiri  ostunimekiri={ostunimekiri}/>
        <IlmaAndmed />
    </div>
  );
}

export default App;
