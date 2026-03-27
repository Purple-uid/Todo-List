import { useState, useCallback } from 'react'
import Input from './components/Input/Input'
import Message from './components/Message/Message'
import type { typeMessage } from './types/types'
import './App.css'

function App() {
  const [messages, setMessages] = useState<typeMessage[]>(() => {
    const seved = localStorage.getItem('message')
    return seved ? JSON.parse(seved) : [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit elit.'
      }, 
      {
        id: 2,
        text: 'Lorem adipisicing elit. Quod maxime vel'
      }
    ]
  })

  const addMessage = useCallback((messageText: string) => {
    setMessages(prevMes => {
      const newMessage: typeMessage = {
        id: Date.now(),
        text: messageText  
      }
    
  
    const updatedMessages = [...prevMes, newMessage]

    localStorage.setItem('message', JSON.stringify(updatedMessages))

    return updatedMessages
    })
  }, [])

  const deleteMessage = useCallback((id: number) => {
    setMessages(prev => {
      const updated = prev.filter((el) => el.id !== id)
      localStorage.setItem('message', JSON.stringify(updated))
      return updated
    })
  }, [])

  return (
    <div className='app'>
      <Input
        addInputMes={addMessage} 
      />
      <Message
       messages={messages} 
       onDelete={deleteMessage}/>
    </div>
  )
}

export default App
