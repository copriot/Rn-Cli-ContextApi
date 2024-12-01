import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
        setError(false);
      })
      .catch(err => {
        console.log(err.message);
        setLoading(false);
        setError(err);
      });
  }, []);

  const removeTask = id => {
    const filtredTask = tasks.filter(task => task.id !== id);
    setTasks(filtredTask);
    Alert.alert('Task silindi !');
  };

  const addTask = title => {
    const newTask = {
      userId: 1,
      id: tasks.length + 1,
      title,
    };
    setTasks([newTask, ...tasks]);
    Alert.alert('Yeni task eklendi !');
    setNewTaskTitle('');
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        removeTask,
        newTaskTitle,
        setNewTaskTitle,
        addTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
