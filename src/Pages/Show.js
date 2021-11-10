import UpdateForm from "../Componenets/UpdateForm";

function Show(props){

    const id = props.match.params.id;
    const cheese = props.cheese;
    const oneCheese = cheese.find(c => c._id === id)

    const createCheese = async(cheese) =>{
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cheese),
        });
    }

    const removeCheese = () => {
        props.deleteCheese(oneCheese._id);
        props.history.push("/")
    }


    const loaded = ()=>(
        <>  
            <div>
            <h1>{oneCheese.name}</h1>
            <h2>A { oneCheese.soft === false ? "Hard Cheese" : "Soft Cheese"} from {oneCheese.region}</h2>
            <img className="show-image" src={oneCheese.image} alt="" />
            
            </div>
            <UpdateForm 
                updateCheese={props.updateCheese}
                id={id} 
                oneCheese={oneCheese}
                removeCheese={removeCheese}
                />
                
            
                
        </>
    )

    const loading = () =>(<h1>Loading...</h1>)

    return oneCheese ? loaded() : loading();
  } 
  
  export default Show