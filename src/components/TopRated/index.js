import React, {useEffect, useState} from 'react';
import axios from "axios";
import Slider from "react-slick";
import MovieCard from "../MovieCard";
import {API_KEY} from "../../API";


const TopRated = () => {
    const [rated, setRated] = useState([])
    const [cake, setCake] = useState(1)

    const getRated = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${cake}`)
            .then((res) => {
                setRated(res.data.results)
            })
    }

    useEffect(() => {
        getRated(API_KEY)
    }, [cake])
    console.log(rated)

    return (
        <div className="container">

            <div className="pop">
                {
                    rated.map(el => <MovieCard key={el.id} el={el}/>)
                }
                <div className="div" style={{
                    display:"flex",
                    gap:"20px"
                }}>
                    <button onClick={ () => {
                        setCake(cake === 1 ? cake : cake-1)
                    }} style={{
                        padding:"10px 10px",
                        background:"black",
                        color:"white"
                    }}>Last</button>
                    <h2>{cake}</h2>
                    <button onClick={ () => {
                        setCake(cake +1)
                    }} style={{
                        padding:"10px 10px",
                        background:"black",
                        color:"white"
                    }}>Next</button>
                </div>

            </div>



        </div>
    );
};

export default TopRated;