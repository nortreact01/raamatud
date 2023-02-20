import {useState} from 'react'
import './App.css';
import ToodeteNimekiri from './ToodeteNimekiri';
import UusAsi from './UusAsi';

function App() {
  const [ostunimekiri, setOstunimekiri] = useState([
    {nimetus: 'kartul (kg)', kasKorvis: false, kogus: 1},
    {nimetus: 'leib (tk)', kasKorvis: false, kogus: 1},
    {nimetus: 'piim (liitrit)', kasKorvis: false, kogus: 1}
  ])

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
    </div>
  );
}

export default App;
