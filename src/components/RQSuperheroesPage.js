import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperheroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    "super-heros",
    fetchSuperHeros
  );

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperheroes.page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperheroesPage;
