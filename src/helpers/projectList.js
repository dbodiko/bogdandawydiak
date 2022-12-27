import qsales from './../img/projects/qsales-mini.jpg'
import qsalesBig from './../img/projects/qsales-big.jpg'

import marvelportal from './../img/projects/marvelportal.jpg'
import marvelportalBig from './../img/projects/marvelportalBig.jpg'
import modernappBig from './../img/projects/bankdesignBig.jpg'

import modernapp from './../img/projects/bankdesign.jpg'

const projects = [
    {
        id: 0,
        tittle: 'Qsales - program for automation of distribution',
        skills: 'React, Java Script, CSS, MUI, Bootstrap',
        img: qsales,
        imgBig: qsalesBig,
        gitHubLink: 'https://github.com/dbodiko/qsales'
    },

    {
        id: 1,
        tittle: 'Business modern design',
        skills: 'React, Vite, Java Script, TailwindCSS',
        img: modernapp,
        imgBig: modernappBig,
        gitHubLink: 'https://github.com/dbodiko/business-modern-app'
    },

    {
        id: 2,
        tittle: 'Marvel portal',
        skills: 'React, Java Script, CSS',
        img: marvelportal,
        imgBig: marvelportalBig,
        gitHubLink: 'https://github.com/dbodiko/marvel-starter'
    }
]

export {projects}