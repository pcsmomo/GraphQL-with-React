import React, { useState } from "react";
import { gql } from "@apollo/client";

const SongCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title :</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const mutation = gql`
  mutation {
    addSong(title: ) {
      id
    }
  }
`;

export default SongCreate;
