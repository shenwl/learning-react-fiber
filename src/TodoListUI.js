import React from 'react'
import { Input, Button, List } from 'antd'


const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
          <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="input" style={{width: '300px', marginRight: '10px'}}/>
          <Button onClick={props.handleButtonClick} type="primary">提交</Button>
      </div>
      <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item
              onClick={() => {props.handleDeleteItem(index)}}
          >{item}</List.Item>)}
        />
    </div>
  )
}

// class TodoListUI extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//             <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="input" style={{width: '300px', marginRight: '10px'}}/>
//             <Button onClick={props.handleButtonClick} type="primary">提交</Button>
//         </div>
//         <List
//             style={{marginTop: '10px', width: '300px'}}
//             bordered
//             dataSource={props.list}
//             renderItem={(item, index) => (<List.Item
//                 // 注意：无法在constructor里bind
//                 // 每次传的内容不一样，所以只能这样的动态生成，将index作为预设参数
//                 onClick={(index) => {props.handleDeleteItem(index)}}
//                 key={item}
//             >{item}</List.Item>)}
//           />
//       </div>
//     )
//   }
// }

export default TodoListUI