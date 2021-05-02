import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Lorem Ipsum"
        imageUrl="https://www.mediaclick.com.tr/uploads/2020/05/lorem-ipsum.png"
        body="Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s."
      />
    </div>
  );
}

export default App;
