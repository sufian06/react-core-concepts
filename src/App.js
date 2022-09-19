import "./App.css";

// const number = 5555;
const singers = [
  { name: "Dr. Mahfiz", job: "Singer" }, 
  { name: "Eva Rahman", job: "Singer2" },
  { name: "Agun", job: "sopno" },
  { name: "Shuvro", job: "Pathor" },
];

// const singerStyle = {
//   color: "purple",
//   backgroundColor: "white",
//   padding: "15px",
//   borderRadius: "10px",
// };

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Razzak', 'Anwar Hossain'];

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {
        // nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name= {singer.name} nayika={singer.job}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
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
      <p>{props.nayika}</p>
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
