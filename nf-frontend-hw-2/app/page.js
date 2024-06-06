'use client';
import { useState } from 'react';
import TaskList from './components/TaskList';
import useTasks from './hooks/useTasks';

export default function Home() {
  const { tasks, addTask, toggleTask, deleteTask, clearCompletedTasks } = useTasks();
  const [filter, setFilter] = useState('all');
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    addTask(newTaskText);
    setNewTaskText('');
  };

  const displayedTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  const uncompletedTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do?"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask} className="bg-blue-500 text-white p-4 rounded ml-4">
          Add Task
        </button>
      </div>
      <TaskList tasks={displayedTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
        <span>{uncompletedTasksCount} items left</span>
        <div>
          <button onClick={() => setFilter('all')} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
          <button onClick={() => setFilter('active')} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
          <button onClick={() => setFilter('completed')} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
        </div>
        <button onClick={clearCompletedTasks} className="text-gray-400 hover:text-white">
          Clear Completed
        </button>
      </div>
    </div>
  );
}
