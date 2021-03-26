import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './about.css'
const About = () => {
    return (
        <div className='about-container'>
            <Jumbotron className='about-jumbotron' fluid>
                <Container>
                    <h1>About Us!!</h1>
                    <p className='about-p'>
                        Welcome to our team! The RoboSub team at California State University,
                        Los Angeles is an engineering team that builds autonomous submarine
                        vehicles each year for the international RoboSub competition. The 
                        competition is held annually at the end of July at the Transducer 
                        Evaluation Center (TRANSDEC) in San Diego. The competition consists 
                        of a set of obstacles arranged in the TRANSDEC pool that each team's 
                        submarine must navigate autonomously. Students working on the RoboSub 
                        project gain valuable teamwork and engineering skills while forming 
                        connections with other like-minded students. 
                    </p>
                    <p className='about-p'>
                        Our team is split up into
                        two project teams, the student organization and the senior design team.
                        The senior design team builds one vehicle, and the club members build 
                        a separate vehicle while being mentored by senior design members. 
                        Both vehicles are intended for use in the competition and strategies
                        will be carefully considered based on the capabilities of both 
                        vehicles. Members have the opportunity to design advanced robotics
                        systems and work on an interdisciplinary project to gain experience
                        working with a team. Please see the progress tab for a better idea
                        of what our members are working on and what tasks and projects are
                        available to new members
                    </p>
                </Container>
            </Jumbotron>
        </div>
        
    )
}

export default About