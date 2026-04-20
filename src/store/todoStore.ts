import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Messages {
  id: number;
  text: string;
}

interface TodoStore {
  messages: Messages[];
  addMessage: (text: string) => void;
  deleteMessage: (id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      messages: [
        { id: 1, text: "Lorem ipsum dolor sit elit." },
        { id: 2, text: "Lorem adipisicing elit. Quod maxime vel" },
      ],
      addMessage: (text) =>
        set((state) => ({
          messages: [...state.messages, { id: Date.now(), text }],
        })),
      deleteMessage: (id) =>
        set((state) => ({
          messages: state.messages.filter((i) => i.id !== id),
        })),
    }),
    {
      name: "messages-store",
    },
  ),
);
