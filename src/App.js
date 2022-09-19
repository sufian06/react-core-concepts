import "./App.css";

// const number = 5555;
// const singer = { name: "Dr. Mahfiz", job: "Singer" };
// const singer2 = { name: "Eva Rahman", job: "Singer2" };

// const singerStyle = {
//   color: "purple",
//   backgroundColor: "white",
//   padding: "15px",
//   borderRadius: "10px",
// };

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="Cheka"></Person>
      <Person name="kuber" nayika="Kopila"></Person>
      <h5>New Component. YAY</h5>
      <p>Rock mama, React mama.</p>
      <Friend movie="Shingham" phone='01777'></Friend>
      <Friend phone="01888"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
