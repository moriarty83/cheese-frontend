import { Link } from "react-router-dom"

function Index({cheese, createCheese}){

    const loaded = () => {
        return cheese.map((item)=>(
            <div key={item._id} className="cheese">
                <Link to={`/cheese/${item._id}`}>
                    <h1>{item.name}</h1>
                </Link>
                <h3>{ item.soft === false ? "Hard Cheese" : "Soft Cheese"}</h3>
                <img src={item.image} alt="{item.name}" />
                <h3>{item.region}</h3>
            </div>
        ))
    }

    const loading = () => ( 
        <h1>Loading...</h1>
    )

    return cheese ? <div className="cheeses">{loaded()}</div> : loading();
  } 
  
  export default Index