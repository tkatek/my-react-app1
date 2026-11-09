
import Profile from "./assets/profile.png";

function Card() {
 let counter = 0;



  return (
    <div className="card">
      <img src={Profile} alt="My profile" />

      <h1>My name is Soufiane</h1>

      <p>I am a software student</p>

      <button onClick={() => counter++}>
        Counter: {counter}
      </button>
    </div>
  );
}

export default Card;
