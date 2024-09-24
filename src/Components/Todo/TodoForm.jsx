import { useForm } from "react-hook-form";
import TodoModel from "../../Models/TodoModel";
import TodoApi from "../../Api/TodoApi";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoForm({ onCreate }) {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const [message, setMessage] = useState('');

  const submitForm = async (data) => {
    const todo = new TodoModel(data.id, data.title, data.completed);

    try {
      const response = await TodoApi.create(todo);
      onCreate(response.data);
      setMessage({
        message: "✅ Todo created successfully 😃",
        type: "success"
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {message && (
        <div className={`alert alert-${message.type}`} role="alert">
          <strong>{message.message}</strong>
        </div>
      )}

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <label className="form-label fw-bolder">Title :</label>
          <input
            type="text"
            {...register("title", { required: { value: true, message: "required field" } })}
            className="form-control"
            placeholder=""
          />
          <small className="text-danger fw-bolder">{errors.title?.message}</small>
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            {...register("completed")}
            className="form-check-input"
          />
          <label className="form-check-label">Completed </label>
        </div>

        <div className="form-group mb-3">
          <input type="submit" className="btn btn-primary" disabled={!isValid} value="Create" />
        </div>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};