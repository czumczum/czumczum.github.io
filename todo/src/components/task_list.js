import React from 'react';
import TaskItem from './task_item';

const TaskList = (props) => {
    const taskItems = props.tasks.map((task) => {
        return (
            <TaskItem
                key={task.id}
                task={task}
                deleteMe={props.deleteMe}
                />
        );
    });

    return (
        <ol className="ordered-list">
            {taskItems}
        </ol>
    );
};

export default TaskList;
