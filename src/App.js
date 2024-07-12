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
  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id !== id))
  }
  function handleToggleItem(id){
    setItems((items)=>items.map(item=>item.id === id? {...item, packed: !item.packed}: item))
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
