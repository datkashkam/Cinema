import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCard from "../MovieCard";

const Populari = () => {
    const [popular, setPopular] = useState([])
    const [flower,setFlower] = useState(1)
    const getPopular = () => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=${flower}`)
            .then((res) => {
                setPopular(res.data.results)
            })
    }
    useEffect(() => {
        getPopular()
    }, [flower])
    console.log(popular)

    return (
        <div className="container">
            <div className="pop">

                {
                    popular.map(el => <MovieCard key={el.id} el={el}/>)
                }

            </div>
            <button onClick={() => setFlower(flower === 1 ? flower : flower -1)}>Last</button>
            <h4>{flower}</h4>
            <button onClick={() => setFlower(flower +1)}>Next</button>
        </div>
    );
};

export default Populari;