import styled from "styled-components";

export const Content = styled.div`
    div 
    {
        display: none;
    }
    div.active 
    {
        display: flex;
        width: 40px;
        height: 40px;
        background-color: #353535;
        position: fixed;
        right: 10px;
        bottom: 50px;
        font-size: 3rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 10px;
        i 
        {
            color: #212121;
        }
    }
`;