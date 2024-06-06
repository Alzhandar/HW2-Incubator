import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const icon = task.completed ? 
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame" clip-path="url(#clip0_1_7)">
        <path id="Vector" d="M16.72 2.544L7.592 11.68L4.2 8.288L5.328 7.16L7.592 9.424L15.592 1.424L16.72 2.544ZM8.72 14.4C5.192 14.4 2.32 11.528 2.32 8C2.32 4.472 5.192 1.6 8.72 1.6C9.976 1.6 11.152 1.968 12.144 2.6L13.304 1.44C12 0.536 10.424 0 8.72 0C4.304 0 0.720001 3.584 0.720001 8C0.720001 12.416 4.304 16 8.72 16C10.104 16 11.408 15.648 12.544 15.024L11.344 13.824C10.544 14.192 9.656 14.4 8.72 14.4Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_1_7">
          <rect width="16" height="16" fill="white" transform="translate(0.720001)"/>
        </clipPath>
      </defs>
    </svg> : 
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame" opacity="0.4" clip-path="url(#clip0_1_7)">
        <path id="Vector" d="M16.72 2.544L7.592 11.68L4.2 8.288L5.328 7.16L7.592 9.424L15.592 1.424L16.72 2.544ZM8.72 14.4C5.192 14.4 2.32 11.528 2.32 8C2.32 4.472 5.192 1.6 8.72 1.6C9.976 1.6 11.152 1.968 12.144 2.6L13.304 1.44C12 0.536 10.424 0 8.72 0C4.304 0 0.720001 3.584 0.720001 8C0.720001 12.416 4.304 16 8.72 16C10.104 16 11.408 15.648 12.544 15.024L11.344 13.824C10.544 14.192 9.656 14.4 8.72 14.4Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_1_7">
          <rect width="16" height="16" fill="white" transform="translate(0.720001)"/>
        </clipPath>
      </defs>
    </svg>;

  return (
    <li className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
      <div className="flex items-center">
        <button 
          className="w-6 h-6 my-auto mr-6"
          onClick={() => onToggle(task.id)}
        >
          {icon}
        </button>
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>{task.text}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
};

export default TaskItem;
