import { useForm } from "react-hook-form";
import TodoModel from "../../Models/TodoModel";
import TodoApi from "../../Api/TodoApi";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";


export default function TodoForm({ isUpdate = false }) {
  const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
    
    defaultValues: async () => {
        if (params.id && isUpdate) {
        return await TodoApi.get(params.id)
        }

      }
    } 
    );

  const submitForm = async (data) => {
// for update & add
    if (isUpdate) {
      const todo = new TodoModel(data.id,data.title, data.completed, data.id);
      await TodoApi.update(todo);
      window.location.href("/todos");
    } else {
      const todo = new TodoModel(data.id,data.title, data.completed);
      await TodoApi.create(todo);
      window.location.reload();
    }

  
   

    

  };



// update
  const params = useParams();


  return (
    <>
      <h1 className="text-center">{isUpdate ? 'Update' : 'Create'} Form</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <label className="form-label fw-bolder">Title :</label>
          <input
            type="text"
            // for create
            {...register("title", { required: { value: true, message: "required field" } })}
            className="form-control"
            // for update
           
          />
          <small className="text-danger fw-bolder">{errors.title?.message}</small>
        </div>

        <div className="mb-3">
          <input
            type="checkbox"
            //for create
            {...register("completed")}
            className="form-check-input"
           // for update
          
          />
          <label className="form-check-label">Completed </label>
        </div>

        <div className="form-group mb-3">
          <input type="submit" className="btn btn-primary" disabled={!isValid || !isDirty} value={isUpdate ? 'Update' : 'Create'} />
        </div>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  isUpdate: PropTypes.bool,
};