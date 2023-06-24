import React, {useState} from 'react';
import Populari from "../Populari";
import TopRated from "../TopRated";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";


const Home = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <home id="home">
                <div className="container">
                    <div className="home">
                        <div className="home--one">
                            <h1>Добро пожаловать.</h1>
                            <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
                            <div className="home--one__in">
                                <input type="text" placeholder="Find a films..."/>
                                <button>Search</button>
                            </div>
                        </div>

                        <div className="home--two">

                                <h4>В тренде</h4>
                        </div>


                    </div>
                </div>
            </home>

            <Tabs>
                <TabList className="bomba" style={{
                    width:"235px",
                    height:"30px",
                    color:"white",
                    border:"1px solid white",
                    borderRadius:'50px',
                    display:'flex',
                    alignItems:"center",
                    gap:"40px",
                    marginLeft:"250px"

                }}>
                    <Tab className="buttons" style={{
                        display:"flex",
                        // marginLeft:"10px",
                        cursor:"pointer",
                    }}>Сегодня</Tab>
                    <Tab className="buttons" style={{
                        cursor:"pointer",
                        display:"flex",
                        marginLeft:"-36px",
                        // flexWrap:"wrap"
                    }}>На этой неделе</Tab>
                </TabList>
                <TabPanel className="paneli">
                    <Populari/>
                </TabPanel>
                <TabPanel>
                    <TopRated/>
                </TabPanel>
            </Tabs>


        </>
    );
};

export default Home;