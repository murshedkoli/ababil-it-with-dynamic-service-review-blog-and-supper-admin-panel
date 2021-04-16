import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import BlogPosts from '../BlogPosts/BlogPosts';
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';
import HeroSection from '../HeroSection/HeroSection';
import Review from '../Review/Review';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div style={{
            width: '100%',
          
            background: '#37517e'
          }}>
               <Heder/>
               <HeroSection/>
               <Services/>
               <Review/>
               <BlogPosts/>
               <AboutSection/>
               <Footer/>
        </div>
    );
};

export default HomePage;