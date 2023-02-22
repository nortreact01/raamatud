function Raamat({raamat}) {
    return (
        <div>
            <h2>{raamat.nimi}</h2>
            <div>{raamat.kirjeldus}</div>
            <div><img src={raamat.pilt} alt="pilt"/></div>
        </div>
    )
}

export default Raamat