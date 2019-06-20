import React, {Component} from 'react'
import { connect } from 'react-redux'


class Todo extends Component {

handleAction = () => {
    console.log('TESTE: ', this.props)
    this.props.dispatch({
      type: 'ADD_TODO',
      payload:{
        text: 'Novo',
      }
    })
}

  render(){
    return(
      <div>
        <h1>Todo</h1>
        {
          this.props.todos.map(todo =>(
          <div key={todo.text}>{todo.text}</div>))
        }
        <button onClick={this.handleAction}>Action</button>
     </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { 
    todos:state.todos
  }
}

export default connect(mapStateToProps)(Todo)
