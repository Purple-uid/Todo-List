import express from 'express'
import { pool } from "./db.js";
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());


app.get('/api/todos', async(req,res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM todos ORDER BY id'
        )

        res.json(result.rows)
    } catch(error) {
        console.error(error)
        res.status(500).json({
            message: "Ошибка на стороне сервера"
        })
    }
})

app.post('/api/todos', async (req, res) => {
    try {

        const { title } = req.body;

        const result = await pool.query(
            `
            INSERT INTO todos (text)
            VALUES ($1)
            RETURNING *
            `,
            [title]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Ошибка на стороне сервера"
        });

    }
});

app.delete('/api/todos/:id', async(req,res) => {
    try {
        const { id } = req.params
        await pool.query(
            'DELETE FROM todos WHERE id = $1',
            [id]
        )
        res.json({
            message: "удаление успешно"
        })

    } catch(error) {
        console.error(error)
        res.status(500).json({
            message: 'Ошибка на стороне сервера'
        })
    }
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер запущен, порт: http://localhost:${PORT}`)
})

