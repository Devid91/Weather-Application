import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (typeof term === "string") {
      onSubmit(term);
      setTerm("");
    }
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="flex justify-center mb-20">
      <form onSubmit={handleFormSubmit}>
        <input
          className="rounded-lg text-center transparent-input text-white "
          placeholder="Enter city..."
          value={term}
          onChange={handleChange}
          style={{ width: "300px", padding: "25px" }}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
