import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import FETCH_SONG from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(FETCH_SONG, { variables: { id } });

  if (loading) return <div>Loading...</div>;

  const {
    song: { title }
  } = data;

  return (
    <div>
      <h3>{title}</h3>
      <LyricCreate />
    </div>
  );
};

export default SongDetail;
