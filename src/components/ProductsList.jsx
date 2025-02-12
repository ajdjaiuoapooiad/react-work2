import { useLoaderData } from "react-router-dom";


const ProductsList = () => {

    const {data} = useLoaderData()
    
    console.log(data);
    

  return (
    <>
        <div className="px-10 py-5">
          <div className="text-2xl font-bold">検索結果</div>
          <p className="font-bold">{data.length}件</p>
        </div>

        <div>
            {data.map((product) => {
            const { id, title, category, income} = product;
            return (
              <div className="border border-gray-500 mx-10 my-5 px-10 py-5 bg-white rounded-md">
                <h1 key={id} className="text-2xl font-bold">{title}</h1>
                <p className="">カテゴリ: {category}</p>
                <p>年収: {income}万円</p>
              </div>
            );
            })}
        </div>
    </>
)
}

export default ProductsList;