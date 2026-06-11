import { useEffect } from "react";
import Input from "./components/Input/Input";
import Message from "./components/Message/Message";
import { useTodoStore } from './store/todoStore'
import "./App.css";

function App() {
  const fetchMessages = useTodoStore(prev => prev.fetchMessages)

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  return (
    <div className="app">
      <Input />
      <Message />
    </div>
  );
}

export default App;
