import React , {useState} from "react";


function MyComponent(){


const [name , setName] = useState('User');

const [age , setAge] = useState(0);

const updateName = () => {
   setName("soufiane");
}



const incrementAge =() =>{
   setAge(age + 1);
}


const resetAge = () => {
   setAge(0);
}

const minusAge = () => {
   setAge(age -1);
}



return(


<div className="card">

<p> name {name}</p>

<button onClick={updateName}>set Name</button>





<p> Age: {age}</p>

<button onClick={incrementAge}>set Age</button>


<button onClick={resetAge}>reset Age</button>

<button onClick={minusAge}>minus Age</button>




</div>

)

 }
 export default MyComponent;