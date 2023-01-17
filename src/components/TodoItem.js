import React from 'react';
import PropTypes from 'prop-types';
import style from './TodoItem.module.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={style.item}>
        <input
          type="checkbox"
          className={style.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <span style={this.props.todo.completed ? completedStyle : null}>
          {this.props.todo.title}
        </span>
        <button
          onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string,
};

export default TodoItem;
