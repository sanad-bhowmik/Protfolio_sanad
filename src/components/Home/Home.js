import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Banner from '../Navbar/Banner/Banner';
import Myself from '../Navbar/Banner/Myself/Myself';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experence from '../Experence/Experence';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <Myself></Myself>
            <Experence/>
            <Skills></Skills>
            <Tools/>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;