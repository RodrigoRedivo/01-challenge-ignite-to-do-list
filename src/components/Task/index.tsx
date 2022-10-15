import { Check, CheckCircle, Circle, Trash } from 'phosphor-react';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Props {
  task: ITask;
  deleteTask: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, deleteTask, onComplete }: Props) {
  const isCompleted = task.isCompleted ? <CheckCircle className={styles.checkCicle} size={16}/>
  : <Circle className={styles.circle} size={16}/>;
  const textIsCompleted = task.isCompleted ? styles.textCompleted : '';

  return (
    <div className={styles.task}>
      <button onClick={() => onComplete(task.id)} className={styles.checkContainer}>
      {isCompleted}
      </button>
      <p className={textIsCompleted}>{task.title}</p>

      <button onClick={() => deleteTask(task.id)} className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  )
}