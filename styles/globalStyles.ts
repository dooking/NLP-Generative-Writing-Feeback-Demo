import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: GmarketSansMedium,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    @font-face {
        font-family: "GmarketSansLight";
        font-weight: 300;
        src: url("/fonts/GmarketSansTTFLight.ttf") format("truetype");
    }
    @font-face {
        font-family: "GmarketSansMedium";
        font-weight: 500;
        src: url("/fonts/GmarketSansTTFMedium.ttf") format("truetype");
    }
    @font-face {
        font-family: "GmarketSansBold";
        font-weight: 700;
        src: url("/fonts/GmarketSansTTFBold.ttf") format("truetype");
    }
`;
