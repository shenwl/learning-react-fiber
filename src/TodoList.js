import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import { width } from 'window-size';
import store from './store/index'
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreators'


class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
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

    render() {
        return ( 
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="input" style={{width: '300px', marginRight: '10px'}}/>
                    <Button onClick={this.handleButtonClick} type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item
                        // 注意：无法在constructor里bind
                        // 每次传的内容不一样，所以只能这样的动态生成，将index作为预设参数
                        onClick={this.handleDeleteItem.bind(this, index)}
                        key={item}
                    >{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList