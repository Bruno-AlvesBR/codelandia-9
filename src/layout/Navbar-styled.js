import styled from "styled-components";

export const Nav = styled.nav`
    z-index: 999;
    width: 100%; 
    max-width: 1200px;
    display: flex;
    margin: auto;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .logo 
    {
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: bold;
        z-index: 999;
    }
    .menu_icon 
    {
        display: none;
    }
    ul 
    {
        display: flex;
        align-items: center;
        list-style: none;
        font-size: 1.2rem;
        gap: 30px;
        z-index: 555;
        li 
        {
            a 
            {
                text-decoration: none;
            }
        }
    }
    @media (max-width: 650px)
    {
        .menu_icon 
        {
            display: flex;
            font-size: 1.2rem;
            color: #fff;
            z-index: 999;
        }
        ul.open 
        {
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            width: 65%;
            height: 100vh;
            background-color: #212121;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        ul.close 
        {
            display: none;
        }
    }
`;