import PropTypes from "prop-types"
import styles from '../styles/TodoItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <button onClick={() => delTodo(itemProp.id)}>
          <BsFillTrashFill
            color="#5e5e5e"
            size="20px"
          />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
export default TodoItem;
