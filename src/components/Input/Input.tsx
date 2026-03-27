import { useState, useRef } from 'react'
import type { InputProps } from '../../types/types'
import './InputStyle.css'

function Input({ addInputMes }: InputProps) {
    const [ text, setText ] = useState('')
    const focusRef = useRef<HTMLInputElement>(null)

    const hendelAdd = () => {
        if(text.trim() === '') return
        addInputMes(text)
        setText('')
        focusRef.current?.focus()
    }

    const enterKey = (e: any) => {
        if (e.key === 'Enter') {
            hendelAdd()
        }
    }

    return (
        <div>
            <div className='inputWrapper'>
                <input 
                    className='inputField'
                    ref={focusRef}
                    onKeyDown={enterKey}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Text"
                    type="text" />
                <button
                 className='addBtn' 
                 onClick={hendelAdd}>Add</button>
            </div>
        </div>
    )
}

export default Input
