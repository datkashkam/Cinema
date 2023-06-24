import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Doni from "../../img/img.png"

const EllaDetails = ({id}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log("were",actors)
    const settings = {
        dots: true, infinite: true,
        speed: 500, slidesToShow: 6,
        slidesToScroll: 3,
    };

    return (
        <div  id='actors'>
        <div className="container">
            <h1 className='title'>Главный роль</h1>
            <Slider className="actors" {...settings}>
                {
                actors.map(el => (
                    <div className='actors--card'>
                        <Link to={`/movie/details/${el.id}`}>
                            {
                                el.profile_path ?
                                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                         alt="img"/> : <img width={150} height={180} src={Doni} alt="img"/>
                            }
                        </Link>
                        <h5>{el.name}</h5></div>
                ))}
            </Slider>
        </div>
    </div>
    );
};
export default EllaDetails;