import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import Doni from "../../img/img.png"

const Actors = () => {
    const {movieId} = useParams()
    console.log("actors", movieId)

    const [across, setAcross] = useState([])
    const getAcross = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then(res => setAcross(res.data.cast))

    }
    useEffect(() => {
        getAcross(API_KEY)
    }, [])
    console.log(across)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <div id="actors">
            <div className="container">
                <Slider className="actors" {...settings}>
                    {
                        across?.map(el =>
                                <div className="actors--init">
                                    {
                                        el.profile_path ? <Link to={`/ella/${el.id}`}>
                                                <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} width={180} alt=""/>
                                        </Link>
                                            : <img src={Doni} width={180} alt=""/>

                                    }
                                        <h1>{el.name}</h1>



                                </div>

                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;