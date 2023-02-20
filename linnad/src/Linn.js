import { useState } from 'react'

function Linn({nimi, pildiAadress}) {
    //let kylastusi = 0;
    const [kylastusi, setKylastusi] = useState(1);

    const suurenda = () => {
        setKylastusi(kylastusi + 1)
        console.log(kylastusi)
    }

    const vahenda = () => {
        setKylastusi(kylastusi - 1)
        console.log(kylastusi)
    }

    return (
        <div className="linn-rida">
            <img className="linn-rida__img" src={pildiAadress} alt={nimi} />
            <div className="linn-rida__nimi">
                Linn: {nimi}
                <button onClick={suurenda}> + </button>
                {kylastusi}
                <button onClick={vahenda}> - </button>
            </div>
        </div>
    )
}

export default Linn