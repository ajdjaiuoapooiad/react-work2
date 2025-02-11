import { useLoaderData } from "react-router-dom";


const ProductsList = () => {

    const {data} = useLoaderData()
    
    console.log(data);
    

  return (
    <>
        <div className="text-3xl">検索結果</div>
        <div>
            {data.map((product) => {
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