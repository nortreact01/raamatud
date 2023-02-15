import './App.css';
import Linn from './Linn'

import berliinImg from './pildid/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.jpg'
import londonImg from './pildid/london.jpg'
import pariisImg from './pildid/pariis.png'

function App() {
  return (
    <div className="App">
      <h1>Linnad</h1>
      <Linn nimi="London" pildiAadress={londonImg} />
      <Linn nimi="Pariis" pildiAadress={pariisImg} />
      <Linn nimi="Berliin"pildiAadress={berliinImg} />
    </div>
  );
}

export default App;
