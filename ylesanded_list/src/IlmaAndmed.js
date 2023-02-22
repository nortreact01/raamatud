import {useState} from 'react'

function IlmaAndmed() {
    const [ilm, setIlm] = useState({})
    const loeAndmed = async () => {
        const andmeteAadress = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
        const result = await fetch(andmeteAadress)
        console.log(result)
        if (result.status === 200 ) {
            const andmed = await result.json()
            console.log(andmed.current_weather)
            setIlm(andmed.current_weather)
        } else {
            //näita viga
        }
    }

    const klikkNupul = () => {
        loeAndmed()
        console.log('Klikk')

    }

    let ilmaNaidik = <div>... loe ilma andmed ... </div>
    if (ilm.temperature) {
        ilmaNaidik = (
            <div>
                <div>Kellaaeg: {ilm.time}</div>
                <div>Temperatuur: {ilm.temperature}</div>
                <div>Tuule kiirus: {ilm.windspeed}</div>
            </div>
        )
    }
    return (
        <>
            <button onClick={klikkNupul}>Lae ilma andmed</button>
            {ilmaNaidik}
        </>
    )
}

export default IlmaAndmed