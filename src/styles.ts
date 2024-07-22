import { createGlobalStyle } from 'styled-components'

import MadeOKSBold from './fonts/MADEOkineSansPERSONALUSE-Bold.otf'

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

    .container {
        max-width: 1023px;
        width: 100%;
        margin: 0 auto;
    }
`
