import { createGlobalStyle } from 'styled-components'

import MadeOKSBold from './fonts/MADEOkineSansPERSONALUSE-Bold.otf'
import PoppinsRegular from './fonts/Poppins-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        color: #fff;
        list-style: none;
    }

    @font-face {
        font-family: MadeOKSBold;
        src: url(${MadeOKSBold}) format('opentype');
    }

    @font-face {
        font-family: PoppinsRegular;
        src: url(${PoppinsRegular}) format('truetype');
    }

    .container {
        max-width: 1023px;
        width: 100%;
        margin: 0 auto;
    }
`
