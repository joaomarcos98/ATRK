export default {
    grid: {
        container: '130rem',
        gutter: '3.2rem'
    },
    border: {
        radius: '0.4rem'
    },
    font: {
        family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        light: 300,
        normal: 400,
        bold: 600,
        sizes: {
            xsmall: '1.2rem',
            small: '1.4rem',
            medium: '1.6rem',
            large: '1.8rem',
            xlarge: '2.0rem',
            xxlarge: '2.8rem',
            huge: '5.2rem'
        }
    },
    colors: {
        green: "#48bf53",
        background: "#202124",
        primary: "#48bf53",
        white: '#FAFAFA',
        black: '#121212 ',
        lightGray: '#F4F4F4',
        gray: '#8F8F8F',
        darkGray: '#2E2F42',
        red: '#FF6347'
    },
    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
    offset: {
        small: 2,
        medium: 4
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out'
    }
} as const