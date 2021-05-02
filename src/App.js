import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Lorem Ipsum"
        imageUrl="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        body="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
      />
    </div>
  );
}

export default App;
