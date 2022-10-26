import type { NextPage } from "next";
import React, { useCallback, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GamesPage from "./features/games/GamesPage";
import { getGames } from "./features/games/gameSlice";
import { useAppDispatch } from "./store/store";
import NavBar from "./components/NavBar";
import SingleGamePage from "./features/games/SingleGamePage";
import CreateGamePage from "./features/games/CreateGamePage";
import EditGamePage from "./features/games/EditGamePage";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return <p>ok</p>;
};

export default Home;
