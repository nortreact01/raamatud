function ToodeteNimekiri({ostunimekiri}) {
    return (
        <div className="ostuNimekiri">
            <h3>Nimekiri</h3>
            {
                ostunimekiri.map((toode, i) => {
                    console.log(toode)
                    return (
                        <div key={i}>{toode.nimetus}</div>
                    )
                })
            }
        </div>
    )
}

export default ToodeteNimekiri