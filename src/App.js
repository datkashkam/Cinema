import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Populari from "./components/Populari";
import TopRated from "./components/TopRated";
import MovieDetails from "./Page/MoveDetails";
import Actors from "./Page/Actors";
import Treilere from "./Page/Treilere";
import Ella from "./Page/Ella";
import EllaDetails from "./Page/EllaDetails";

function App() {
  return (
    <div className="App">
        <Header/>

<Routes>

    <Route path={"/"} element={<Home/>}/>
    <Route path={"/populari"} element={<Populari/>}/>
    <Route path={"/topRated"} element={<TopRated/>}/>
    <Route path={"/movie/details/:movieId"} element={<MovieDetails/>}/>
    <Route path={"/actors/:movieId"} element={<Actors/>}/>
    <Route path={"/treilere/:movieId"} element={<Treilere/>}/>
    <Route path={"/ella/:personId"} element={<Ella/>}/>
    <Route path={"/ellaDe/:personId"} element={<EllaDetails/>}/>
</Routes>
        <Footer/>
    </div>
  );
}

export default App;
