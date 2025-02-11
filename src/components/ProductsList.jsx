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
              <div className="border px-12 py-5">
                <h1 key={id} className="text-2xl font-bold">{title}</h1>
                <p>{category}</p>
                <p>{income}</p>
              </div>
            );
            })}
        </div>
    </>
)
}

export default ProductsList;