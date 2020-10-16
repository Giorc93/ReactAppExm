import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const ExmpComp = () => {
  const { register, errors, handleSubmit } = useForm();

  const [Entries, setEntries] = useState([]);

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
    setEntries([...Entries, data]);
  };

  return (
    <Fragment>
      <h1>Example Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="title"
          placeholder="Insert title"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Title required" },
            minLength: {
              value: 2,
              message: "Title must have at least 2 characters",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.title?.message}
        </span>
        <input
          name="description"
          placeholder="Insert description"
          className="form-control my-2"
          ref={register({
            required: { value: true, message: "Description required" },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.description?.message}
        </span>
        <button className="btn btn-primary">Add</button>
      </form>
      <ul>
        {Entries.map((item) => (
          <li>
            {item.title} - {item.description}{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ExmpComp;
