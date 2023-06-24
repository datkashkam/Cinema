import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import * as url from "url";
import {BsTwitter} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import EllaDetails from "../EllaDetails";

const Ella = () => {
    const {personId} = useParams()
    console.log("persons", personId)

    const [ella, setElla] = useState({})

    const [bio, setBio] = useState(false)
    const [useBio, setUseBio] = useState(false)
    const getElla = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then(res => setElla(res.data))
    }
    useEffect(() => {
        getElla(API_KEY)
    }, [])
    console.log(ella)




    return (
        <>
            <div id="ella">
                <div className="container">
                    <div className="ella">

                        <img
                            src={`https://themoviedb.gameszonehub.workers.dev/t/p/w375_and_h375_face/${ella.profile_path}`}
                            alt=""/>

                        <div className="ella--init">
                            <h1>{ella.name}</h1>
                            <div className="ella--init__names">
                                <div className="ella--init__names--know">
                                    <h3>Также известность как</h3>
                                    <div>{ella.also_known_as?.map((el) => <li key={el}>{el}</li>)}</div>
                                </div>
                                <div className="ella--init__names--birth">
                                    <h3>Дата рождения</h3>
                                    <h5>{ella.birthday}</h5>
                                </div>
                                <div className="ella--init__names--place">
                                    <h3>Место рождения</h3>
                                    <h5>{ella.place_of_birth}</h5>
                                </div>

                            </div>
                            <div className="ella--init__bio">
                                <h2>Биография</h2>
                                <p>{ella.biography?.slice(0, 100)}
                                    {bio ? ella.biography : ""}
                                    <span onClick={() => {
                                        setBio(!bio)
                                        setUseBio(!useBio)
                                    }} style={{
                                        fontWeight: "800",
                                        display: "flex",
                                        paddingLeft: '1px',
                                        color: "rgba(255, 255, 255, 0.65)"
                                    }}>{
                                        useBio ? "close..." : "more..."
                                    }
                                </span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <EllaDetails id={personId}/>
        </>
    );
};

export default Ella;