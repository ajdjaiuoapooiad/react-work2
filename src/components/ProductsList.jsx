import { useLoaderData } from "react-router-dom";


const ProductsList = () => {

    const products = useLoaderData()
    
    console.log(products);
    

  return (
    <>
        <div>ProductCard</div>
        <div>
            {products.map((product) => {
            const { id, title, category, income} = product;
            return (
              <div>
                <h1 key={id}>{title}</h1>
              </div>
            );
            })}
        </div>
    </>
)
}

export default ProductsList;