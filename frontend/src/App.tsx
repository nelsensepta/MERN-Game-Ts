import { useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamesPage from "./components/games";
import { getGames } from "./store/slices/GameSlice";
import { useAppDispatch } from "./store";
import Navbar from "./components/Navbar";
import SingleGamePage from "./components/games";
import CreateGamePage from "./components/games/Create";
import EditGamePage from "./components/games/Update";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/:id" element={<SingleGamePage />} />
        <Route path="/games/edit/:id" element={<EditGamePage />} />
        <Route path="/games/create" element={<CreateGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
