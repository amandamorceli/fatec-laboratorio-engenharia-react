function Produto({produto, onClick}){
    return(
        <div onClick={()=>onClick(produto)}>
            <img src={produto.imagem} alt={produto.nome}></img>
            <div>
                <p>{produto}</p>
                <span>R${produto.preco}</span>
            </div>
        </div>
    );
}

export default function Produtos({produtos, onClick, carregando = false }){
    return(
        <div>
        {carregando? "Carregando..":produtos.length>0? produtos.map((produto)=>(
            <Produto key={produto.id} produto={produto} onClick={onClick}/>
        )): "Nenhum produto encontrado!"}
        </div>
    );
}