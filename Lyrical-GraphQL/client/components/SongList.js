import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import fetchSongsQuery from "../queries/fetchSongs";

const SongList = () => {
  const { data, loading } = useQuery(fetchSongsQuery);

  if (loading) return <div>Loading</div>;

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
