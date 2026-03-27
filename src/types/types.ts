export interface typeMessage {
  id: number,
  text: string
}

export interface InputProps {
    addInputMes: (text: string) => void
}

export interface MessageProps {
    messages: typeMessage[]
    onDelete: (id: number) => void
}