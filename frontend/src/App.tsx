import { useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "./components/games";
import { getGames } from "./store/slices/GameSlice";
import { useAppDispatch } from "./store";
import Navbar from "./components/Navbar";
import DetailsGame from "./components/games/Details";
import CreateGame from "./components/games/Create";
import EditGame from "./components/games/Update";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<DetailsGame />} />
        <Route path="/games/edit/:id" element={<EditGame />} />
        <Route path="/games/create" element={<CreateGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
