import './App.css';
import Linn from './Linn'

import berliinImg from './pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.jpg'
import londonImg from './pildid/london.jpg'
import pariisImg from './pildid/pariis.png'

function App() {
  const linnad = [
    { nimi: "London", pildiAadress: londonImg },
    { nimi: "Pariis", pildiAadress: pariisImg },
    { nimi: "Berliin", pildiAadress: berliinImg },
    { nimi: "Tallinn", pildiAadress: berliinImg },
  ]


  const klikkLisaLinn = () => {
    console.log('Klikiti nupul')
  }
  return (
    <div className="App">
      <h1>Linnad</h1>
      {linnad.map((linn, index) => {
        return <Linn key={index} nimi={linn.nimi} pildiAadress={linn.pildiAadress}  />
      })}
      <div>
        <h2>Milliseid linu sina tahaksid külastada?</h2>
        <div>
          <button onClick={klikkLisaLinn} type='button'>Lisa linn</button>
        </div>
      </div>
    </div>
  );
}

export default App;
