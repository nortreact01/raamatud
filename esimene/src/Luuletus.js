import apelsin from './apelsin.jpg'
function Luuletus() {
    const autor = <span className="autor">Karupoeg Puhh</span>
    return (
        <>
            <h1>Luuletus</h1>
            <p>Kes hommikuti külas käib,</p>
            <p>tidilipomm</p>
            <p>see asjatult ei longi</p>
            <p>sest selleks hommik ongi</p>
            <p>Autor: {autor}</p>
            <img className='aplesinPilt' src={apelsin} alt="apelsin" />
        </>
    )
}

export default Luuletus