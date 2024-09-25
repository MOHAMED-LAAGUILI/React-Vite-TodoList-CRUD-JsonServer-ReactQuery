import TodoForm from "./TodoForm";
import PropTypes from "prop-types";

export default function TodoCreate({ onCreate }) {
  return (
    <div>
      <TodoForm onCreate={onCreate} />
    </div>
  );
}

TodoCreate.propTypes = {
  onCreate: PropTypes.func,
};