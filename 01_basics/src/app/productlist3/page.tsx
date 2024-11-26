import Product from "./product";

async function fetchData() {
    let response = await fetch('https://raw.githubusercontent.com/Ovi/DummyJSON/master/raw/quotes/quotes.json');
    let data = await response.json();
    data = data.slice(0, 50);
    return data;

};

export default async function Page() {
  
   let  quote = await fetchData();
   console.log(quote);

    return (
        <div>
            <h1>Fetch Quote data in server component</h1>
            {quote.map((item:any) => (
                <div key={item.id}>
                    {/* <h3  style={{color: "black"}}>Author : {item.author}</h3> */}
                    <p style={{color: "darkgreen", fontWeight:"bold"}} >Quote: {item.quote}</p>
                    {/* <button onClick={() => (alert("hii"))}>click me</button> */}
                    <Product author={item.author} />
                </div>
            ))}
        
        </div>
    );
}

export function generateMetadata () {
    return{
        title: "product data",
        description: "user page description"
    }
}