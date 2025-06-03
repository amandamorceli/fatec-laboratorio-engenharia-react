function ProdutoDoCarrinho({ produto, onChange, carregando }) {
    return (
        <div>
            <div>
                <p>{produto.nome}</p>
                <span>R${produto.preco}</span>
            </div>
            <div>
                <button disabled={carregando} onClick={() => onChange(produto, -1)}> -
                </button>
                <p>{produto.unidades}</p>
                <button disabled={carregando} onClick={() => onChange(produto, +1)}> +
                </button>
            </div>
        </div>
    )
}

export default Carrinho({ produtos, onChange, onClick, carregando=false }){
    return (
        <div>
            <div>
                {produtos.map((produto) => (
                    <ProdutoDoCarrinho key={produto.is} produto={produto} onChange={onChange} carregando={carregando} />
                ))}
            </div>
            <button onClick={onClick} carregando={carregando}>
                Finalizar Compra
            </button>
        </div>
    )
}