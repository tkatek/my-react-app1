
 function Button(){

    let count = 0;

    
const handleclick = (name) => {

if(count < 3){

   count++;
    console.log(`${name} you clicked ${count} time/s`);
}
else{
    console.log(`${name} you have clicked 3 times already`);
}

};


return(
    <button className="btn"  onClick={() => handleclick("User")}>Click me</button>
    );


 }

 export default Button;