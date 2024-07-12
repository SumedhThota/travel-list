import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([])
  function handleAddItems(item){
    setItems((items) => [...items, item])
}
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
