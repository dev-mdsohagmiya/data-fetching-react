import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DataFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const todosElemet =
    todos &&
    todos.map(({ userId, id, title }) => (
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
