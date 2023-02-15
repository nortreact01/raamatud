function Linn({nimi, pildiAadress}) {
    return (
        <div className="linn-rida">
            <img className="linn-rida__img" src={pildiAadress} alt={nimi} />
            <div className="linn-rida__nimi">
                Linn: {nimi}
            </div>
        </div>
    )
}

export default Linn