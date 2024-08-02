import styled from 'styled-components'

export const Slide = styled.div`
    position: relative;
    max-height: 712px;
    height: 100%;
    width: max-content;
    overflow: hidden;
    margin: 0 auto;
    z-index: 1;
    .iphone {
        /* position: relative; */
        height: 100%;
        overflow: hidden; // verificar se precisa tirar
    }

    @media (max-width: 1023px) {
        width: 350px;
        max-width: 90%;

        .iphone {
            width: 100%;
            height: 100%;
        }
    }
`
