import styled from 'styled-components'

export const MainContainer = styled.main`
    display: block;
    background-color: #000;
    height: calc(100dvh - 109px);
    width: 100dvw;
`
export const Hero = styled.section`
    display: flex;
    align-items: center;
    max-width: 1600px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

export const Call = styled.div`
    margin-left: 64px;
    max-width: max-content;
    width: 100%;
    h2 {
        font-size: 92px;
        font-family: 'MadeOKSBold', sans-serif;
        margin-bottom: 22px;
        letter-spacing: 1px;
        line-height: 105px;
        /* max-width: min-content; */
    }

    p {
        max-width: inset;
        font-family: PoppinsRegular;
        font-size: 22px;
        width: 80%;
    }
`

export const Works = styled.div`
    width: 100%;
    visibility: hidden;
    margin-left: 64px;
    img {
        width: 350px;
    }
`
