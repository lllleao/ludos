import styled from 'styled-components'

export const MainContainer = styled.main`
    background-color: #000;
`
export const Hero = styled.section`
    height: calc(100vh - 109px);
    width: 100vw;
    display: flex;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;

    .slide-container {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 32px 0;
    }
    @media (max-width: 1023px) {
        flex-direction: column;
        height: 100%;
        width: 90%;
        padding-bottom: 2rem;
        .slide-container {
            margin-left: 0;
            max-width: 300px;
            width: 100%;
        }
    }
`

export const Call = styled.div`
    margin-left: 64px;
    max-width: max-content;
    width: 100%;
    h2 {
        font-size: clamp(48px, 5vw, 5.75rem); //92px
        font-family: 'MadeOKSBold', sans-serif;
        margin-bottom: 22px;
        letter-spacing: 1px;
        line-height: 92px;
    }

    p {
        max-width: inset;
        font-family: PoppinsRegular;
        font-size: 22px;
        width: 80%;
    }
    @media (max-width: 1023px) {
        margin-left: 0;
        text-align: center;
        margin-bottom: 3rem;
        h2 {
            line-height: 62px;
        }
        p {
            width: 100%;
            br {
                display: none;
            }
        }
    }
`
