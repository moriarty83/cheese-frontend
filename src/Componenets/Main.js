import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../Pages/Index";
import Show from "../Pages/Show";
import Form from "./Form";

function Main(props){

    const [cheese, setCheese] = useState(null);

    const URL = "https://serene-fortress-89281.herokuapp.com/cheese/"

    const getCheese = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    }

    const createCheese = async(cheese) =>{
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cheese),
        });
        getCheese();
    }

    const updateCheese = async(cheese, id) =>{
        await fetch(URL+id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cheese),
        })
        getCheese();
    }

    const deleteCheese = async id => {
        await fetch(URL+id, {
            method: "delete",
        });
        getCheese();
    }

    useEffect(()=>getCheese(), []);

    return (
        <main>
            
            
            <Switch>
                <Route exact path="/">
                    <Form className="createForm" createCheese={createCheese} />
                    <Index cheese={cheese} createPeople={createCheese}/>
                </Route>
                <Route 
                    path="/cheese/:id"
                    render={(rc)=>(
                        <Show {...rc}
                        cheese={cheese}
                        updateCheese={updateCheese}
                        deleteCheese={deleteCheese}
                        getCheese={getCheese}
                        />
                    )}
                />
            </Switch>
        </main>
    )
  } 
  
  export default Main