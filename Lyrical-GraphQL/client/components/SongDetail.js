import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import FETCH_SONG from "../queries/fetchSong";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(FETCH_SONG, { variables: { id } });
  console.log(data);

  if (loading) return <div>Loading</div>;

  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  );
};

export default SongDetail;
