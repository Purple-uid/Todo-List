import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors());
app.use(express.json());

let todos = [
    { id: 1, text: "Lorem ipsum dolor sit elit." },
    { id: 2, text: "Lorem adipisicing elit. Quod maxime vel" }
]

app.get('/api/todos', (req,res) => {
    res.json(todos)
})

app.post('/api/todos', (req,res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.title,
        completed: false
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.delete('/api/todos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    todos = todos.filter(todo => todo.id !== id)
    res.json({ message: 'Задача удалена успешно' })
})

app.listen(PORT, () => {
    console.log(`Сервер запущен, порт: http://localhost:${PORT}`)
})
