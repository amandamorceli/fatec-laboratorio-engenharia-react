/**
 *  @param {boolean} carregando Status se carregando requisição
 */

export default Botao({elemento, onClick, carregando=false}){
    return(
        <div className="border-1 ron">
        <button onClick={onClick} disabled={carregando}>
        {carregando ? "Carregando..." : elemento}
        </button>
        </div>
    )
}