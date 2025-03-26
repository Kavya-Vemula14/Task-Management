import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import AlertMessage from "../../Alert/AlertMessage";
import { deleteTaskAPI, listTaskAPI } from "../../services/task/taskService";

const TaskList = () => {
  //fetching
  const { data, isError, isLoading, isFetched, error, refetch } = useQuery({
    queryFn: listTaskAPI,
    queryKey: ["lists"],
  });

  //Deleting
  //Navigate
  const navigate = useNavigate();

  // Mutation
  const {
    mutateAsync,
    isPending,
    error: categoryErr,
    isSuccess,
  } = useMutation({
    mutationFn: deleteTaskAPI,
    mutationKey: ["delete-task"],
  });
  //Delete handler
  const handleDelete = (id) => {
    mutateAsync(id)
      .then((data) => {
        //refetch
        refetch();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">TaskList</h2>
      {/* Display message */}
      {isLoading && <AlertMessage type="loading" message="Loading" />}
      {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )}
      <ul className="space-y-4">
        {data?.map((lists) => (
          <li
            key={lists?._id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
          >
            <div>
              <span className="text-pink-800 fony-bold mr-4">
                {lists?.title}
              </span>

              <span className="text-gray-800">{lists?.description}</span>
            </div>
            <div className="flex space-x-3">
              <Link to={`/update-lists/${lists._id}`}>
                <button className="text-blue-500 hover:text-blue-700">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(lists?._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
