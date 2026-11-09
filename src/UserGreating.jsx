 

  function UserGreating(props){

return(props.islogged ? <h1>ur looged as {props.name}</h1> : <h1>ur not logged in</h1>);
   



  }

  export default UserGreating;