import styled from "styled-components";

export const ContainerHome = styled.section`
    width: 100%;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;
export const ContainerApresentation = styled.section`
    width: 100%;
    min-height: 650px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -50px 0;
    padding: 10px;
    .box_text_apresentation
    {
        h1 
        {
            font-size: 2rem;
        }
        p 
        {
            font-size: 1.2rem;
            line-height: 100px;
            color: #828282;
        }
        span
        {
            a:nth-child(1)
            {
                text-decoration: none;
                font-size: 1rem;
                color: #000;
                background-color: #00DF5E;
                padding: 12px 25px;
            }
            a:nth-child(2)
            {
                text-decoration: none;
                font-size: 1rem;
                border: .5px solid #333333;
                padding: 13px 25px;
                margin: 0 10px;
                transition: .2s all ease;
                &:hover 
                {
                    background-color: #505050;
                }
            }
        }
    }
    img 
    {
        width: 250px;
    }
    @media (max-width: 650px)
    {
        margin: 0;
        flex-wrap: wrap;
        justify-content: center;
        img 
        {
            order: -1;
        }
        .box_text_apresentation
        {
            span 
            {
                display: flex;
                flex-wrap: wrap;
                a:nth-child(2)
                {
                    margin: 0;
                }
            }
        }
    }
`;
export const ContainerAboutMe = styled.section`
    min-height: 250px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 650px;
    margin: auto;
    padding: 10px;
    h1 
    {
        font-size: 2rem;
        line-height: 75px;
    }
    p 
    {
        font-size: 1.2rem;
        color: #828282;
        text-align: center;
    }
`;
export const ContainerContacts = styled.section`
    min-height: 350px;
    width: 100%;
    max-width: 650px;
    display: flex;
    margin: auto;
    ul 
    {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        list-style: none;
        margin: 50px 0;
        li 
        {
            text-align: center;
            width: 125px;
            margin: 10px;
            overflow: hidden;
            i 
            {
                font-size: 1.5rem;
                background-color: #303030;
                padding: 10px;
                border-radius: 100%;
                color: #00DF5E;
            }
            h1
            {
                line-height: 35px;
                font-size: 1rem;
            }
            p 
            {
                color: #828282;
                font-size: .9rem;
            } 
            a 
            {
                color: #828282;
                font-size: .9rem;
            }
        }
    }
    @media (max-width: 650px)
    {
        ul 
        {
            justify-content: center;
        }
    }
`;
export const ContainerProjects = styled.section`
    min-height: 650px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 980px;
    margin: auto;
    .title_projects 
    {
        font-size: 2rem;
    }
    .box_all_projects
    {
        display: flex;
        flex-wrap: wrap;
        margin: 50px 0;
        justify-content: center;
        align-items: center;
        .card_project 
        {
            width: 300px;
            height: 300px;
            padding: 5px;
            margin: 10px;
            background-color: #313131;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: .2s all ease;
            z-index: 1;
            &:hover 
            {
                transform: scale(1.05);
                z-index: 2;
            }
            img 
            {
                width: 100%;
            }
            span 
            {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                margin: auto;
                padding: 5px;
                h1 
                {
                    font-size: .9rem;
                }
                p 
                {         
                    font-size: .8rem;
                    color: #828282;
                }
                a 
                {
                    padding: 5px 10px;
                    background-color: #00DF5E;
                    width: 75px;
                    text-align: center;
                    text-decoration: none;
                    font-size: .8rem;
                    transition: .2s all ease;
                    &:hover 
                    {
                        transform: scale(1.05);
                    }
                }
            }
        }
    }
    @media (max-width: 450px)
    {
        .box_all_projects
        {
            .card_project 
            {
                width: 100%;
            }
        }
    }
`;
export const ContainerServices = styled.section`
    min-height: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    max-width: 980px;
    margin: auto;
    h1 
    {
        font-size: 2rem;
    }
    ul 
    {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: auto;
        list-style: none;
        li 
        {
            width: 300px;
            height: 175px;
            background-color: #313131;
            margin: 10px;
            padding: 25px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span 
            {
                display: flex;
                font-size: 2rem;
                i 
                {
                    color: #00DF5E;
                }
            }
            h2 
            {
                font-size: 1.5rem;
                color: #828282;
            }
            &::after
            {
                content: '';
                width: 100%;
                height: 2px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #00DF5E;
            }
        }
    }
`;
export const ContainerSkills = styled.section`
    min-height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1300px;
    margin: auto;
    h1 
    {
        font-size: 2rem;
        line-height: 75px;
    }
    ul 
    {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 25px 0;
        li 
        {
            width: 100px;
            height: 100px;
            background-color: #313131;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
            color: #00DF5E;
            i 
            {
                font-size: 3rem;
                color: #00DF5E;
            }
        }
    }
`;