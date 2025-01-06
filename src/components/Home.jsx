import { useState,useEffect } from 'react'
import CardPizza from './CardPizza';

const Home = () => {
    
    const [pizzas, setPizzas] = useState([])
    const backEnd= "http://localhost:5000/api/pizzas"
  
    useEffect(() => {
      const consultaApi = async () => {
        const res = await fetch(backEnd)
        const data= await res.json()
        setPizzas(data) 
      }
      consultaApi()
    }, [])
  return (
      <>
      <div className="container mt-5">
          <div className="row">
      {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
          <CardPizza
          key={pizza.id}
          name={pizza.name}
          desc={pizza.desc}
          img={pizza.img}
          ingredients={pizza.ingredients}
          price={pizza.price}
          />   
          </div>
      )
  )}
  </div>
  </div>
      </>
  
  );
};

export default Home;