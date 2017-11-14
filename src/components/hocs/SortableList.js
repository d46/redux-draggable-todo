import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import SortableTask from './SortableTask'
import style from "./SortableList.styl"

export default SortableContainer(({
                                      tasks,
                                      removeTask,
                                      handleEditTask,
                                      toggleStatus
                                  }) => {
    return (
        <ul className={style.container}>
            {tasks.map((task, index) => (
                <SortableTask
                    removeTask={removeTask}
                    handleEditTask={handleEditTask}
                    toggleStatus={toggleStatus}
                    key={`item-${index}`}
                    index={index}
                    task={task}/>
            ))}
        </ul>
    );
});
