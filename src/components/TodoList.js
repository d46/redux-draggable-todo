import React, {Component} from "react"
import {arrayMove} from 'react-sortable-hoc'
import SortableList from "./hocs/SortableList"
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/icomoon/plus'
import style from "./TodoList.styl"
import NewSortableItem from "./hocs/NewSortableItem";

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
        }
        this.onSortEnd = this.onSortEnd.bind(this)
    }

    onSortEnd({oldIndex, newIndex}) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    render() {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    Task Manager
                    <button className={style.addButton}>
                        <Icon icon={plus} />
                    </button>
                </div>
                <NewSortableItem/>
                <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>
            </div>

        )
    }

}

export default TodoList
