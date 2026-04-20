import { useTodoStore } from "../../store/todoStore";
import { FaRegTrashCan } from "react-icons/fa6";
import "./Message.css";

function Message() {
  const messages = useTodoStore((state) => state.messages);
  const deleteMessage = useTodoStore((state) => state.deleteMessage);

  return (
    <div className="messageList">
      {messages.map((mas) => (
        <div className="messageItem" key={mas.id}>
          <p className="messageText">{mas.text}</p>
          <button className="deleteBtn" onClick={() => deleteMessage(mas.id)}>
            <FaRegTrashCan />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Message;
