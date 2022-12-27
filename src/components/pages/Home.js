import React from 'react';
import Header from "../header/Header";

const Home = (props) => {
    return (
        <>
            <Header/>

            <main className="section">
                <div className="container">
                    <ul className="content-list">

                        <li className="content-list__item">
                            <h2 className="title-2">Course</h2>
                            <p><a
                                href="https://drive.google.com/file/d/19TVVP5b_tihhu24OkantyRNN3Gd9146-/view?usp=share_link"
                                target="_blank" rel="noreferrer">
                                Inoxoft AcademyX<br/>
                                Full-Stack Course (Node.js + React)</a></p>
                        </li>

                        <li className="content-list__item">
                            <h2 className="title-2">Skills</h2>
                            <p>
                                JavaScript, ReactJS, HTML, CSS, BootStrap,
                                MaterialUI, TailwindCSS, GitHub, Adobe Illustrator,
                                Adobe Photoshop, Corel DRAW, Figma
                            </p>
                        </li>

                    </ul>
                </div>
            </main>
        </>
    )
}

export default Home;