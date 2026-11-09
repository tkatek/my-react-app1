
function List(){
    
const frutes =["apple","banana","orange"];
 const fruitlist = frutes.map(fruit => <li>{fruit}</li>);

return(
    <ul>

        
            {fruitlist}
       
    </ul>
)



}

export default List;