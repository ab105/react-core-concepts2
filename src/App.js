import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
//user and external users in 45-8
function ExternalUsers(){
  const [users, setUsers] = useState([]);//data load er khetre state ke declare korsi
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))//aikane setusers dile data gulo state er modde set hoye jabe
  },[])
  return(
    <div>
      <h3>
        External  Users
      </h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}
function User(props){
  return ( 
  <div className="product">
    <h2>name: {props.name}</h2>
    <p>email: {props.email}</p>
  </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0)//destructuring hocce
  console.log(count, setCount);
  const handleIncrease = () => {
    setCount(count + 1);
    // const newCount = count + 1;
    // setCount(newCount)
  };
  const handleDecrease = () => setCount(count-1)
  return(
    <div>
      <h1>
        Count: {count}
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

//App function jekane shesh hobe er pore theke component bananor kaj korte parbo
function Product(props){
  const productStyle={
    border: '2px solid green',
    borderRadius: '30px'
  }
  return(
    <div className="product" style={productStyle}>
      <h1>Name: {props.name}</h1>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

/* 

app component er code gulo

//array of object

const products = [
    {name:"Mobile", price:"3432444"},
    {name:"Watch", price:"4324"},
    {name:"Camera", price:"158665"},
    {name:"laptop", price:"143544"}
  ];
*/

/* 
dynamic code korar kaj....
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
        // products.map(product=>console.log(product))
      }

      <Product name="Mobile" price="3432444"></Product>
      <Product name="Laptop" price="143544"></Product>
      <Product name="Watch" price="4324"></Product>
*/
export default App;
