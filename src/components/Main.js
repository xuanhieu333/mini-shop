import Product from './Product'

const Main = (props) => {
  const {products, onAdd} = props
  return (
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='row'>
        {products.map( (product) => (
          <Product key={product.id} onAdd={onAdd} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Main