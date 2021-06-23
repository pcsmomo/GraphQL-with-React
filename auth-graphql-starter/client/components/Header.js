import React from "react";
import { useQuery } from "@apollo/client";
import query from "../queries/CurrentUser";

const Header = () => {
  // const { data, loading } = useQuery(query);
  const queryRes = useQuery(query);
  console.log(queryRes);
  const { data, loading } = queryRes;

  if (loading) return <div>Loading...</div>;

  return <div>Header</div>;
};

export default Header;
