import { create } from "zustand";

export interface Messages {
  id: number;
  text: string;
}

interface TodoStore {
  messages: Messages[];
  fetchMessages: () => Promise<void>;
  addMessage: (text: string) => Promise<void>;
  deleteMessage: (id: number) => Promise<void>;
}

const API = "https://stunning-serenity-production-34e4.up.railway.app/api/todos"

export const useTodoStore = create<TodoStore>(
    (set) => ({
      messages: [],
      fetchMessages: async () => {
        try{
          const response = await fetch(API)
          const data = await response.json()
          const formattedData = data.map((item: any) => ({
            id: item.id,
            text: item.text,
          }))
          set({ messages: formattedData })
        } catch (error) {
          console.error("Ошибка при получении задач:", error)
        }
      },

      addMessage: async (text) => {
        try {
          const response = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: text }),
          });
          const newTodo = await response.json();
          
          set((state) => ({
            messages: [...state.messages, { id: newTodo.id, text: newTodo.text }],
          }));
        } catch (error) {
          console.error("Ошибка при добавлении задачи:", error);
        }
      },

      deleteMessage: async (id) => {
        try {
          const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
          });
          
          if (response.ok) {
            set((state) => ({
              messages: state.messages.filter((i) => i.id !== id),
            }));
          }
        } catch (error) {
          console.error("Ошибка при удалении задачи:", error);
        }
      },
}));
