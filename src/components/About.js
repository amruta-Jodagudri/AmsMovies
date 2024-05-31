import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="card1 text-bg-dark">
            <div className="card-img-overlay">
                <div className="about-container">
                    <h2>About Us</h2>
                    <p>Welcome to our movies website! We are passionate about movies and providing a platform for movie enthusiasts to discover, explore, and enjoy a wide range of films from various genres and eras.</p>
                    <p>Our mission is to create an engaging and user-friendly platform where users can access information about their favorite movies, discover new releases, and connect with other movie lovers.</p>
                    <div className="text">
                        <p>Here's what you can expect to find on our website:</p>
                        <ul>
                            <li>Comprehensive movie database with details about thousands of movies</li>
                            <li>Search functionality to easily find movies by title, genre, director, or actor</li>
                            <li>Personalized recommendations based on your movie preferences</li>
                            <li>Reviews, ratings, and user comments to help you make informed decisions</li>
                            <li>Latest news and updates from the world of cinema</li>
                        </ul>
                    </div>
                    <p>Our team is dedicated to continuously improving the website and enhancing the user experience. We strive to provide a platform that caters to the diverse interests and preferences of our users.</p>
                    <div className="text-center">
                        <p>Thank you for visiting our website and being a part of our movie-loving community!</p>
                        <p>Created by @AJ</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;
