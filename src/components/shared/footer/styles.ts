import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    height: 180px;
    background: #382EC4;
    padding: 20px;
`

export const SpanContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2px;
`

export const Role = styled.span`
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: 4px;
    text-transform: uppercase;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`

export const Copyright = styled.span`
    color: rgba(255, 255, 255, 0.85);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1.5px;
    margin-top: 20px;
`

