export const Product = ({id, name, description, price, category, imageUrl, stock}) => (
    <div key={id} className="product">
        <img src={imageUrl} alt={name} className="product__img"/>
        <h1 className="product__name">
            <a href={`/detail.html?id=${id}`}>{name}</a>
        </h1>
        <h3 className="product__price">Cena: {price},-</h3>
        <button className="product__detail">
            <a href={`/detail.html?id=${id}`}>Detail</a>
        </button>
    </div>
)