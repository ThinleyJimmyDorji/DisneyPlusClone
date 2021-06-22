import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import db from "../firebase";
import Movies from "./Movies";
function Detail() {
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState(); // useState is basically redux but for individual smaller components.
  useEffect(() => {
    // the movie info from database as per the the individual id
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data()); // set movie object in setMovie variable
        } else {
        }
      });
  }, []);
  console.log("movie is:", movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative; ////////////////// always together
`;
const Background = styled.div`
  position: fixed; ///////////////// always together
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; // send the background image back
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  display: flex;
  height: 36px;
  font-size: 15px;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  &:hover {
    span {
      color: black;
    }
  }

  span {
    color: white;
  }
`;
const AddButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin-right: 16px;

  span {
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.7);
  img {
    width: 24px;
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
  color: rgb(249, 249, 249);
`;
export default Detail;
