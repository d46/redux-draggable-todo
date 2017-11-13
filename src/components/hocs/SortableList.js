import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import SortableTask from './SortableTask'
import style from "./SortableList.styl"

export default SortableContainer(({
                                      tasks,
                                      removeTask
                                  }) => {
    return (
        <ul className={style.container}>
            {tasks.map((task, index) => (
                <SortableTask
                    removeTask={removeTask}
                    key={`item-${index}`}
                    index={index}
                    task={task}/>
            ))}
        </ul>
    );
});
