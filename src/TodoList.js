import React, { Component } from 'react'
import { connect } from 'react-redux'


class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input 
            value={this.props.inputValue}
            onChange = {this.props.handleInputChange.bind(this)}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          <li>Hello</li>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)