const brand = {
    primary: {
        '50': '#e7e5ff',
        '100': '#d3d0ff',
        '200': '#b4abff',
        '300': '#8c79ff',
        '400': '#7345ff',
        '500': '#691bff',
        '600': '#6500ff',
        '700': '#6100ff',
        '800': '#5500dd',
        '900': '#230254',
    },    
    secondary: {
        '50': '#efeeff',
        '100': '#e0dfff',
        '200': '#ccc6ff',
        '300': '#afa4fd',
        '400': '#987ffa',
        '500': '#8961f3',
        '600': '#7d43e8',
        '700': '#6d36cc',
        '800': '#582ea5',
        '900': '#3e266f',
    },
    gray: {
        50: '#E2E7EC',
        100: '#C2CBD4',
        200: '#7C8894',
        300: '#444D57',
        400: '#1D262F',
    },
    'dark-purple': {
        50: '#f9f6fe',
        100: '#f2edfc',
        200: '#dfd3f8',
        300: '#ccb8f4',
        400: '#a583eb',
        500: '#7f4ee3',
        600: '#7246cc',
        700: '#5f3baa',
        800: '#4c2f88',
        900: '#3e266f',
    }
};

module.exports = {
    theme: {        
        fontFamily: {
            sans: ['Inter'],
        },
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
                ...brand,
            },
            opacity: {
                80: '0.8',
            },
        },
    },
    plugins: [],
};
