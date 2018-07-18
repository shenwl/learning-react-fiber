import React, { Component } from 'react'
import { connect } from 'react-redux'


class TodoList extends Component {
  render() {
    const { inputValue, handleClick, handleInputChange, handleDeleteItem, list } = this.props
    return (
      <div>
        <div>
          <input 
            value={inputValue}
            onChange = {this.props.handleInputChange.bind(this)}
          />
          <button onClick={handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li 
                  key={item}
                  onClick={handleDeleteItem.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const value = e.target.value
      const action = {
        type: 'change_input_value',
        value: value
      }
      dispatch(action) 
    },
    handleClick() {
      const action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    handleDeleteItem(index) {
      const action = {
        type: 'delete_item',
        index: index,
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)