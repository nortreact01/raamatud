function Linn(props) {
    return (
        <div className="linn-rida">
            <img className="linn-rida__img" src={props.pildiAadress} alt={props.nimi} />
            <div className="linn-rida__nimi">
                Linn: {props.nimi}
            </div>
        </div>
    )
}

export default Linn