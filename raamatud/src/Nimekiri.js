function Nimekiri({loetelu}) {
    return (
        <div>
            {
                loetelu.map(
                    (el) => <div>{el.nimi} - {el.autor}</div>
                )
            }
        </div>
    )
}

export default Nimekiri