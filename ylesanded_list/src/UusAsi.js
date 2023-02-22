import {useState} from 'react'

function UusAsi({lisaOst}) {
    const [toode, setToode] = useState();
    const handleChange = (event) => {
        setToode(event.target.value)
    }

    const handleClick = () => {
        console.log('Vaja lisada uus toode: ' + toode)
        lisaOst(toode, 1)
        setToode('')
    }

    return (
        <div>
            <label>
                Toode:
                <input value={toode} onChange={handleChange} />
            </label>
            <button onClick={handleClick}>Lisa toode</button>
        </div>
    )
}

export default UusAsi