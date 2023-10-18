import { useState, useEffect } from "react";

export function useGetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const get = async () => {
      const data = await fetch("https://dummyapi.io/data/v1/user", {
        headers: {
          "Content-Type": "application/json",
          "app-id": "63680003404ac313230da639",
        },
      });
      const { data: result } = await data.json();
      setUsers(result);
    };
    get();
  }, []);

  return { users };
}
