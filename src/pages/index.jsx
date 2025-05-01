import { render } from '@czechitas/render';
import { Product } from '../components/Product/Product';
import '../global.css';
import './index.css';
import '../components/Product/Product.css'

const response = await fetch("http://localhost:4000/api/products")
const json = await response.json()

export const HomePage = () => (
  <>
    <h1 className='eshop'>Knedlenka.cz</h1>
    <div className='products'>
      {json.data.map(({id, name, description, price, category, imageUrl, stock}) => (
        <Product key={id}
          id={id}
          name={name}
          description={description}
          price={price}
          category={category}
          imageUrl={imageUrl}
          stock={stock}
        />))
      }
    </div>
  </>
)

document.querySelector('#root').innerHTML = render(
  <>
    <HomePage />
  </>
);
