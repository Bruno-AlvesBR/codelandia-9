/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { ContainerHome, ContainerApresentation, ContainerAboutMe, 
    ContainerContacts, ContainerProjects, ContainerServices, ContainerSkills } from '../layout/Home-styled';
import ImgApresentation from '../images/apresentation.svg';
import { Projects } from '../api/Projects-api';
import ScrollTop from './ScrollTop';
export default function Home() 
{
    return (
        <ContainerHome>
            <ScrollTop />
            <ContainerApresentation id='home'>
                <div className="box_text_apresentation">
                    <h1>Olá, eu sou o <br /> Bruno Alves :)</h1>
                    <p>Desenvolvedor Front-End</p>
                    <span>
                        <a href='./file/Bruno-Alves.pdf' download>Download CV</a>
                        <a href='#contacts'>Entrar em contato</a>
                    </span>
                </div>
                <img src={ImgApresentation} alt='image apresentation' />
            </ContainerApresentation>
            <ContainerAboutMe id='about'>
                <h1>Sobre mim</h1>
                <p>
                    Atualmente cursando engenharia de software na UTFPR, pretendendo me especializar na área front end, futuramente, com ambições de integrar-me com a área back end. Tenho uma grande paixão por tecnologia, portanto estou sempre estudando e praticando para obter sempre uma boa experiência.
                </p>
            </ContainerAboutMe>
            <ContainerContacts id='contacts'>
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
                <h1 className='title_projects'>Projetos</h1>
                <div className="box_all_projects">
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
                <h1>Serviços</h1>
                <ul>
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
                <h1>Minhas skills</h1>
                <ul>
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