import { createContext, useState } from "react";

const ParentContext = createContext();

const ParentProvider = ({ children }) => {
  const [setParent] = useState([]);

  const addTodo = async (description) => {
    try {
      const res = await fetch("/api/createParent", {
        method: "POST",
        body: JSON.stringify({ description }),
        headers: { "Content-Type": "application/json" },
      });
      const newParent = await res.json();
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.json({ msg: "Something went wrong" });
    }
  };

  return (
    <ParentContext.Provider value={{ createParent }}>
      {children}
    </ParentContext.Provider>
  );
};

export { ParentProvider, ParentContext };
