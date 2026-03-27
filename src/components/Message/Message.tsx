import type { MessageProps } from '../../types/types'
import { FaRegTrashCan } from "react-icons/fa6"
import './Message.css'

function Message({ messages, onDelete }: MessageProps) {

  return (
    <div className='messageList'>
        {messages.map((mas) => (
            <div className='messageItem' key={mas.id}>
            <p className='messageText'>{mas.text}</p>
            <button className='deleteBtn' onClick={() => onDelete(mas.id)}><FaRegTrashCan /></button>
        </div>
        ))}
    </div>
  )
}

export default Message
