import styled from 'styled-components'

export const Slide = styled.div`
    position: relative;
    max-width: 350px;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    img {
        position: relative;
        z-index: 2;
        width: 100%;
    }

    @media (max-width: 1023px) {
        max-width: 250px;
        width: 100%;
    }
`
