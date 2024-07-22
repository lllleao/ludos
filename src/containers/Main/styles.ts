import styled from 'styled-components'

export const MainContainer = styled.main`
    display: block;
    background-color: #000;
    height: calc(100dvh - 117px);
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
    text-align: center;
    h2 {
        font-size: 48px;
        font-family: 'MadeOKSBold', sans-serif;
        margin-bottom: 22px;
        letter-spacing: 8px;
    }

    p {
        max-width: inset;
        font-family: PoppinsRegular;
        font-size: 22px;
        max-width: 850px;
        letter-spacing: 5px;
    }
`

export const Works = styled.div`
    margin-left: 64px;
    img {
        width: 350px;
    }
`
