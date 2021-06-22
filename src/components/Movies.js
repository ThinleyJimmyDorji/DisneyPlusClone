import React from "react";
import styled from "styled-components";
import { selectMovies, setMovies } from "../features/Movie/MovieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);
  // console.log(movies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies && // if the movie exists, set movie
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}
const Container = styled.div``;
const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  overflow: hidden;
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    border-color: rgba(249, 349, 349, 0.8);
    box-shadow: rgb(0 0 0 /69%) 0px 40px 58px -10px,
      rgb(0 0 0 /73%) 0px 30px 22px -10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // fit the object as much as possible inside the div
    transform: scale(1.05);
  }
`;
export default Movies;
