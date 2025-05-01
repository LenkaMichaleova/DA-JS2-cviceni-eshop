import { render } from '@czechitas/render';
import '../global.css';
import "./detail.css"

const params = new URLSearchParams(window.location.search)
const product = params.get("id")

const response = await fetch(`http://localhost:4000/api/products/${product}`)
const json = await response.json()

const ProductPage = ({props}) => (
  <div key={props.id} className="product">
    <div className='product__left'>
      <img src={props.imageUrl} alt={props.name} className="product__img"/>
    </div>
    <div className='product__right'>
      <h1 className="product__name">
          <a href={`/detail.html?id=${props.id}`}>{props.name}</a>
      </h1>
      <h3 className="product__price">Cena: {props.price},-</h3>
      <p className="product__description">{props.description}</p>
      <p className="product__category">Kategorie: 
          <span className="product__category--italic"> {props.category}</span>
      </p>
      <h3 className="product__stock">Na skladě: {props.stock} ks</h3>
      <button className="product__buy">
        <a href={`/detail.html?id=${props.id}`}>Koupit</a>
      </button>
    </div>

  </div>
)

document.querySelector('#root').innerHTML = render (
  <>
    <h1 className='eshop'>Knedlenka.cz</h1>
    <ProductPage props={json.data}/>
    <button className='back-to-index'> <a href="index.html"> Zpět </a></button>
  </>
);
