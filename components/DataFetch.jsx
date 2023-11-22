import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DataFetch() {
  const [todos, setTodos] = useState(null);

  const { isLoading, isError, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log({ isLoading, isError, data });

  const todosElemet =
    data &&
    data.map(({ userId, id, title }) => (
      <div key={id}>
        <span>{title}</span>
      </div>
    ));
  const loadingMessage = <span> Loading</span>;

  return (
    <div>
      {
        <div>
          {isError ? isError : isLoading ? loadingMessage : todosElemet}
        </div>
      }
    </div>
  );
}
