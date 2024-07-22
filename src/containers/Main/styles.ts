import styled from 'styled-components'

export const MainContainer = styled.main`
    display: block;
    background-color: #000;
    height: calc(100dvh - 117px);
    width: 100dvw;
`
export const Hero = styled.section`
    height: 100%;
    h2 {
        font-size: 64px;
        font-family: 'MadeOKSBold';
        margin-right: 18px;
        margin-bottom: 22px;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Works = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    gap: 24px;
    padding-left: 64px;

    img {
        width: 100%;
    }
`
