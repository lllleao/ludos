import styled from 'styled-components'

export const Slide = styled.div`
    position: relative;
    width: 300px;
    overflow: hidden;
    img {
        position: relative;
        z-index: 2;
        width: 100%;
    }
`
export const Carrossel = styled.div`
    display: flex;
    position: absolute;
    top: 72px;
    right: 22px;
    width: 85%;
    z-index: 1;
    column-gap: 8px;

    img {
        width: 100%;
    }
`
