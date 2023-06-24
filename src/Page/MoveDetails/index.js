import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
// import {Pie, PieChart} from "recharts";
// import {IoListCircleSharp} from "react-icons/io5";
// import {FaBookmark} from "react-icons/fa";
import {AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar, AiOutlineUnorderedList} from "react-icons/ai";
import {BsBookmark, BsDot, BsFillBookmarkFill} from "react-icons/bs";
import Actors from "../Actors";
import Treilere from "../Treilere";

// import * as url from "url";

function BiSolidHeartCircle() {
    return null;
}

const MovieDetails = () => {

    const [rok, setRok] = useState(false)
    const [rok1, setRok1] = useState(false)
    const [rok2, setRok2] = useState(false)
    const [rok3, setRok3] = useState(false)
    const [modal, setModal] = useState(false)
    const {movieId} = useParams()
    console.log(movieId)

    const [details, setDetails] = useState({})
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
            .then(res =>
                setDetails(res.data)
            )
    }


    useEffect(() => {
        getDetails(API_KEY)
    }, [])
    console.log(details)

    return (
        <>
            <div id="all" style={{
                background: `url(https://themoviedb.gameszonehub.workers.dev/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}) no-repeat center/cover`,
            }}>

                <div className="container">
                    <div className="all">
                        <div className="all--one">
                            <div className="all--one__img">
                                <img
                                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path}`}
                                    alt="" style={{
                                    width: "300px",
                                    borderRadius: "10px",
                                    objectFit: "cover",
                                    cursor: "pointer"
                                }} onClick={() => setModal(true)}/>
                                <div className="all--one__img--modal" style={{
                                    zIndex: modal ? "20" : "",
                                    position: "absolute",
                                    top: "100px",
                                    left: "500px",
                                    display: modal ? "block" : "none"
                                }}><img
                                    src={`https://image.tmdb.org/t/p/w220_and_h330_face/${details.poster_path}`}
                                    alt="" style={{
                                    width: "400px",
                                    borderRadius: "10px",
                                    objectFit: "cover"
                                }} onClick={() => setModal(true)}/>
                                    <h4 style={{
                                        position: "absolute",
                                        bottom: "550px",
                                        left: "330px",
                                        cursor: "pointer"
                                    }} onClick={() => setModal(false)}>Close</h4>
                                </div>
                                <div className="all--one__img--blur" style={{
                                    background:modal ? "rgba(0, 0, 0, 0.37)" : "",
                                    zIndex: modal ? "10" : "",
                                    backdropFilter:"5px"
                                }} onClick={() => setModal(false)}></div>
                            </div>

                            <div className="all--one__titles">
                                <h1>{details.title}(2023)</h1>
                                <div className="all--one__titles--release">
                                    <h2>{details.release_date}</h2>
                                    <Link to={""} className='all--one__titles--release__dots'><BsDot/></Link>
                                    <div className="all--one__titles--release__vip">{details.genres?.map(el =>
                                        <p>{el.name}</p>)}</div>
                                    <Link to={""} className='all--one__titles--release__dots'><BsDot/></Link>
                                    <h2>{Math.floor(details.runtime / 60)}h {Math.floor(details.runtime % 60)}m</h2>
                                </div>
                                <div className="all--one__titles--vote">
                                    <div className="all--one__titles--vote__round-one" style={{
                                        backgroundColor: "#081c22",
                                        borderRadius: "50%",
                                        width: "70px",
                                        height: "70px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <div style={{
                                            backgroundColor: "#0ee364",
                                            borderRadius: "50%",
                                            width: "60px",
                                            height: "60px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <div style={{
                                                backgroundColor: "#081c22",
                                                borderRadius: "50%",
                                                width: "53px",
                                                height: "53px",


                                            }}>
                                                <h5 style={{
                                                    fontSize: "25px",
                                                    display: "flex",
                                                    padding: "11px 0 3px 11px"
                                                }}>{Math.round(details.vote_average * 10)} <sup style={{
                                                    fontSize: "10px",
                                                    padding: "4px 0 3px 0"
                                                }}>%</sup></h5>
                                            </div>

                                        </div>


                                    </div>
                                    <h3>Рейтинг</h3>
                                    <Link style={{
                                        color: rok
                                    }} to={""}><AiOutlineUnorderedList onClick={() => {
                                        setRok(rok === false ? 'black' : false)
                                    }}/></Link>
                                    <Link style={{
                                        color: rok1
                                    }} to={""}><AiFillHeart onClick={() => {
                                        setRok1(rok1 === false ? 'black' : false)
                                    }}/></Link>
                                    <Link style={{
                                        color: rok2
                                    }} to={""}><BsFillBookmarkFill onClick={() => {
                                        setRok2(rok2 === false ? 'black' : false)
                                    }}/></Link>
                                    <Link style={{
                                        color: rok3
                                    }} to={""}><AiFillStar onClick={() => {
                                        setRok3(rok3 === false ? 'black' : false)
                                    }}/></Link>
                                </div>
                                <h1 className="all--one__titles--vote__bob">"{details.tagline}"</h1>

                                <h4 className="all--one__titles--vote__rev" style={{
                                    fontSize: "20px"
                                }}>{details.status}</h4>
                                <p style={{
                                    marginTop: "20px"
                                }}>{details.overview}</p>


                            </div>


                        </div>


                    </div>
                </div>


            </div>
            <Actors id={movieId}/>
            <Treilere id={movieId}/>
        </>
    );
};

export default MovieDetails;