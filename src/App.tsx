import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = "localStorage:saved";

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function setTasksSaved(newTasks: ITask[]){
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    const totalTasks = tasks; 

    setTasksSaved([
      ...totalTasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTaskId(taskId: string) {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasksSaved(newTask);
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    });
    setTasksSaved(newTasks);
  }

  return (
    <>
      <Header addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTaskId} onComplete={toggleTaskCompleted}/>
    </>
  )
}