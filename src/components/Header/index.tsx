import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Logo } from "../Logo";

import styles from './header.module.css';

interface Props {
  addTask: (taskTitle: string) => void;
}

export function Header({ addTask }: Props) {
  const [ title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const taskTitle = title;
    
    addTask(taskTitle);
    setTitle('')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <Logo />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          onChange={handleChange}
          value={title}
        />
        <button>Criar <PlusCircle size={20}/></button>
      </form>
    </header>
  )
}