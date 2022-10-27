import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useCallback, useEffect } from "react";
// import GamesPage from "./features/games/GamesPage";
import { getGames } from "../store/slices/GameSlice";
import { useAppDispatch } from "../store";
import Navbar from "@/components/Navbar";
// import SingleGamePage from "./features/games/SingleGamePage";
// import CreateGamePage from "./features/games/CreateGamePage";
// import EditGamePage from "./features/games/EditGamePage";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);
  console.log(initApp);
  return <p>ok</p>;
};

export default Home;
