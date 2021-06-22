import { useEffect } from "react"; // grab collections from database
import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux"; // used to dispatch actions
import { setMovies } from "../features/Movie/MovieSlice";
// import db from "../firebase";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // run this script everytime the whole components load
    db.collection("movies").onSnapshot((snapshot) => {
      // from firestore database grab snapshots from "movies" collection
      // everytime there's change in the collection[also called live data]
      //console.log(snapshot);
      let tempMovies = snapshot.docs.map((doc) => {
        // declare a variable called tempMovies, loop through every docs
        return { id: doc.id, ...doc.data() };
        //retuen every doc in the form of object categorised by id, and unpack the rest of the data insode them
      });
      //console.log(tempMovies);
      dispatch(setMovies(tempMovies)); // set new movies in the store using reducer
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; // send the background of all the content
    position: absolute; // fix the position of the background image
  }
`;
export default Home;
