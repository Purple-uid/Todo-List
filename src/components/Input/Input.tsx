import { useState, useRef } from "react";
import { useTodoStore } from "../../store/todoStore";
import "./InputStyle.css";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const addMessage = useTodoStore((state) => state.addMessage);
  const focusRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      addMessage(inputValue); // Передаем только строку
      setInputValue(""); // Очищаем поле
      focusRef.current?.focus();
    }
  };

  return (
    <div>
      <div className="inputWrapper">
        <input
          className="inputField"
          ref={focusRef}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          onChange={(e) => {
            if (e.target.value.trim() === "") return;
            setInputValue(e.target.value);
          }}
          placeholder="Text"
          type="text"
        />
        <button className="addBtn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Input;
