import { ITask } from '../../App';
import { Clipboard } from '../Clipboard';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
  deleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, deleteTask, onComplete }: Props) {
  const tasksCounter = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const noTasks = tasks.length <= 0;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksCounter}</span>
        </div>
        <div>
          <p className={styles['text-completed']}>Concluídas</p>
          <span>{completedTasks} de {tasksCounter}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} onComplete={onComplete}/>
        ))}

        {noTasks && (
          <section className={styles.empty}>
            <Clipboard />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}