import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #000;
    padding: 32px 0;
    display: flex;
    align-items: center;

    img {
        max-width: clamp(150px, 3vw, 200px);
        /* width: 100%; */
        margin-left: 64px;
        cursor: pointer;
    }
`
export const Menu = styled.nav`
    margin: 0 auto;
    .menu__list {
        display: flex;

        &__item {
            margin-right: 100px;
            cursor: pointer;
            position: relative;
            padding: 12px;

            &::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 3px;
                background-image: linear-gradient(
                    90deg,
                    #000,
                    #ff9999,
                    #ffff99,
                    #bbff99,
                    #99ffff,
                    #99aaff,
                    #ee99ff,
                    #000
                );
                transform: rotateY(90deg);
                transition: transform 0.3s ease-in-out;
                -webkit-transition: transform 0.3s ease-in-out;
                box-shadow: 0 0 20px rgb(29, 85, 236);
            }

            &:hover::after {
                transform: rotateY(0);
            }
        }

        a {
            color: #eee;
            font-family: sans-serif;
            text-transform: lowercase;
            font-size: 18px;
        }
    }
`
