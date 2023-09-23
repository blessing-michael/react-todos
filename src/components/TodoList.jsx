import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodosList = ({ todosProps, handleChange, delTodo }) => {

  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  todosProps: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
}
export default TodosList;
