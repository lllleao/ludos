import styled from 'styled-components'

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
export const MenuHamb = styled.nav`
    position: fixed;
    top: 32px;
    right: 40px;

    span {
        display: block;
        background-color: #fff;
        width: 30px;
        height: 5px;
        border-radius: 10px;

        &:nth-child(2) {
            margin: 8px 0;
        }
    }
`

export const HeaderContainer = styled.header`
    background-color: #000;
    padding: 2rem 0;
    display: flex;
    align-items: center;

    img {
        width: clamp(130px, 12vw, 150px);
        margin-left: 4rem;
        cursor: pointer;
    }

    @media (max-width: 1023px) {
        h1 {
            margin: 0 auto;
            img {
                margin-left: 0;
            }
        }
        ${Menu} {
            display: none;
        }
    }
`
