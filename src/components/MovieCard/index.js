import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="pop">
            {

                    <div className="pop--init">
                        <Link to={`/movie/details/${el.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                alt=""/>
                        </Link>

                        <h2>{el.title}</h2>
                        <h4>{el.release_date}</h4>
                        <h4>Popularity:
                            {el.popularity}</h4>
                        {/*<Link to={`https://www.kinopoisk.gg/film/${el.id}/?ysclid=liuduvupyp272065158`} >view</Link>*/}

                    </div>

            }
        </div>
    );
};

export default MovieCard;