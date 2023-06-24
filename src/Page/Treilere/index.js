import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";

const Treilere = ({id}) => {

    // const {movieId} = useParams()
    // console.log("treilere", movieId)

    const [trei, setTrei] = useState([])
    const getTrei = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setTrei(res.data.results))

    }
    useEffect(() => {
        getTrei(API_KEY)
    }, [])
    console.log(trei)
    return (
        <div id="treiler">
            <div className="container">
                <div className="treiler">
                    {
                        trei.slice(0,2).map(el =>(
                            <div>
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                               allowFullScreen>
                                       </iframe>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Treilere;