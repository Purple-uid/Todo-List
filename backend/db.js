import pkg from "pg"

const { Pool } = pkg

export const pool = new Pool({
    user: "todo_user",
    host: "localhost",
    database: "todo_app",
    password: "123456",
    port: 5432,
})