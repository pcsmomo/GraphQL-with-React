import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import FETCH_SONGS from "../queries/fetchSongs";

const SongList = () => {
  const { data, loading } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  if (loading) return <div>Loading</div>;

  const onSongDelete = (id) => {
    deleteSong({
      variables: { id },
      update(cache) {
        cache.modify({
          fields: {
            songs(existingSongs, { readField }) {
              return existingSongs.filter(
                (song) => id !== readField("id", song)
              );
            }
          }
        });
      }
    });
  };

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons" onClick={() => onSongDelete(id)}>
            delete
          </i>
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

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default SongList;
