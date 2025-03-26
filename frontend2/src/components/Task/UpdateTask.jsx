import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaDollarSign,
  FaCalendarAlt,
  FaRegCommentDots,
  FaWallet,
} from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import AlertMessage from "../../Alert/AlertMessage";
import { updateTaskAPI } from "../../services/task/taskService";
import { DialogTitle } from "@headlessui/react";

const validationSchema = Yup.object({
  title: Yup.string().required("Category name is required"),

  description: Yup.string().required("Category type is required"),
});

const UpdateTask = () => {
  //Params
  const { id } = useParams();
  console.log(id);
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: updateTaskAPI,
    mutationKey: ["update-lists"],
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        id,
      };
      mutateAsync(data)
        .then((data) => {
          //redirect
          navigate("/lists");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto my-10 bg-white p-6 rounded-lg shadow-lg space-y-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Update Task</h2>
        <p className="text-gray-600">Fill in the details below.</p>
      </div>
      {/* Display alert message */}
      {isError && (
        <AlertMessage
          type="error"
          message={
            error?.response?.data?.message ||
            "Something happened please try again later"
          }
        />
      )}
      {isSuccess && (
        <AlertMessage
          type="success"
          message="Category updated successfully, redirecting..."
        />
      )}
      {/* Task title */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-gray-700 font-medium">
          <SiDatabricks className="inline mr-2 text-blue-500" />
          title
        </label>
        <input
          type="text"
          {...formik.getFieldProps("title")}
          placeholder="title"
          id="title"
          className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-red-500 text-xs italic">{formik.errors.title}</p>
        )}
      </div>

      {/* Task description */}
      <div className="flex flex-col">
        <label htmlFor="title" className="text-gray-700 font-medium">
          <SiDatabricks className="inline mr-2 text-blue-500" />
          description
        </label>
        <input
          type="text"
          {...formik.getFieldProps("description")}
          placeholder="description"
          id="description"
          className="w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 py-2 px-3"
        />
        {formik.touched.description && formik.errors.description && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.description}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 transform"
      >
        Update Task
      </button>
    </form>
  );
};

export default UpdateTask;
