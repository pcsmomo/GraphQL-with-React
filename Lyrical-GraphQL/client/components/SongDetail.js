import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import FETCH_SONG from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(FETCH_SONG, { variables: { id } });

  if (loading) return <div>Loading...</div>;

  const {
    song: { title, lyrics }
  } = data;

  return (
    <div>
      <h3>{title}</h3>
      <LyricList lyrics={lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

export default SongDetail;
