import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import BlogPosts from '../BlogPosts/BlogPosts';
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';
import HeroSection from '../HeroSection/HeroSection';
import Review from '../Review/Review';
import Services from '../Services/Services';

const HomePage = () => {
    document.title = "Home Page - Ababil Information Technology"

    return (
        <div style={{ width: '100%',background: '#37517e'}}>
               <Heder/>
               <HeroSection/>
               <Services/>
               <AboutSection/>
               <Review/>
               <BlogPosts/>
              
               <Footer/>
        </div>
    );
};

export default HomePage;