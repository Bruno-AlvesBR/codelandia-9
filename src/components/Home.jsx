/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import { ContainerHome, ContainerApresentation, ContainerAboutMe, ContainerScroll, 
    ContainerContacts, ContainerProjects, ContainerServices, ContainerSkills } from '../layout/Home-styled';
import ImgApresentation from '../images/apresentation.svg';
import { Projects } from '../api/Projects-api';
import ScrollTop from './ScrollTop';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home() 
{
    useEffect(() =>
    {   
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <ContainerHome>
            <ContainerScroll>
                <ScrollTop />
            </ContainerScroll>
            <ContainerApresentation id='home'>
                <div data-aos="fade-up" className="box_text_apresentation">
                    <h1>Olá, eu sou o <br /> Bruno Alves :)</h1>
                    <p>Desenvolvedor Front-End</p>
                    <span>
                        <a href='./file/Bruno-Alves.pdf' download>Download CV</a>
                        <a href='#contacts'>Entrar em contato</a>
                    </span>
                </div>
                <img data-aos="fade-left" src={ImgApresentation} alt='image apresentation' />
            </ContainerApresentation>
            <ContainerAboutMe id='about'>
                <h1 data-aos="fade-up">Sobre mim</h1>
                <p data-aos="fade-up">
                    Atualmente cursando engenharia de software na UTFPR, pretendendo me especializar na área front end, futuramente, com ambições de integrar-me com a área back end. Tenho uma grande paixão por tecnologia, portanto estou sempre estudando e praticando para obter sempre uma boa experiência.
                </p>
            </ContainerAboutMe>
            <ContainerContacts data-aos="fade-up" id='contacts'>
                <ul>
                    <li>
                        <i className='bx bx-happy-alt' />
                        <h1>Meu nome</h1>
                        <p>Bruno Alves</p>
                    </li>
                    <li>
                        <i className='bx bxl-gmail' />
                        <h1>E - mail</h1>
                        <a target="_blank" href='mailto:brunoph.faces12@gmail.com'>Gmail link</a>
                    </li>
                    <li>
                        <i className='bx bxl-linkedin' />
                        <h1>LinkedIn</h1>
                        <a target="_blank" href='https://www.linkedin.com/in/bruno-alves-0bbbb5202/'>LinkedIn link</a>
                    </li>
                    <li>
                        <i className='bx bx-phone' />
                        <h1>Telefone</h1>
                        <p>(17) 9 9671 - 0745</p>
                    </li>
                </ul>
            </ContainerContacts>
            <ContainerProjects id='projects'>
                <h1 data-aos="fade-up" className='title_projects'>Projetos</h1>
                <div data-aos="fade-up"  className="box_all_projects">
                    {Projects.map((item, key) =>
                    {
                        return(
                            <div key={key} className="card_project">
                                <img src={item.url} alt='' />
                                <span>
                                    <h1>{item.title}</h1>
                                    <p>Tecnologias: {item.tecnologies}</p>
                                    <a target="_blank" href={item.href}>Acessar</a>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </ContainerProjects>
            <ContainerServices id='services'>
                <h1 data-aos="fade-up">Serviços</h1>
                <ul data-aos="fade-up">
                    <li>
                        <span>
                            <i className='bx bx-chevron-left' />
                            <i className='bx bx-chevron-right' />
                        </span> 
                        <h2>Criação <br />de sites</h2>
                    </li>
                    <li>
                        <span>
                            <i className='fab fa-figma' />
                        </span>
                        <h2>Front <br />End</h2>
                    </li>
                    <li>
                        <span>
                            <i className='fas fa-mobile' />
                        </span>
                        <h2>Sites <br />Responsivos</h2>
                    </li>
                </ul>
            </ContainerServices>
            <ContainerSkills id='skills'>
                <h1 data-aos="fade-up">Minhas skills</h1>
                <ul data-aos="fade-up">
                    <li><i className='bx bxl-react' /></li>
                    <li>API</li>
                    <li><i className='bx bxl-html5' /></li>
                    <li><i className='bx bxl-css3' /></li>
                    <li><i className='bx bxl-github' /></li>
                    <li><i className='bx bxl-git' /></li>
                    <li><i className='bx bxl-figma' /></li>
                </ul>
            </ContainerSkills>
        </ContainerHome>
    )
}