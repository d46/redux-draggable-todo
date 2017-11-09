import React, {Component} from "react"
import {arrayMove} from 'react-sortable-hoc'
import SortableList from "./hocs/SortableList"


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
            <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>
        )
    }

}

export default TodoList
