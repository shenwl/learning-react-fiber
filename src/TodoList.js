import React, { Component } from 'react'
import store from './store/index'
import TodoListUI from './TodoListUI'
import { getInitList, getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators'
import 'antd/dist/antd.css'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
		this.handleDeleteItem = this.handleDeleteItem.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleButtonClick() {
        const action = getAddTodoItemAction()
        store.dispatch(action)
    }
    handleDeleteItem(index) {
        const action = getDeleteTodoItemAction(index)
        store.dispatch(action)
	}
	componentDidMount() {
        const action = getInitList()
        store.dispatch(action)
	}

    render() {
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
				handleButtonClick={this.handleButtonClick}
				list={this.state.list}
				handleDeleteItem={this.handleDeleteItem}/>
        )
	}
}

export default TodoList