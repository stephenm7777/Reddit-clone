import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css"; 
import "@fontsource/open-sans/400.css"; 
import "@fontsource/open-sans/700.css"; 

export const theme = extendTheme({
    colors: {
        brand: {
            100: '#ff3C00',
        },
    }, 

    fonts: {
        body:"Open Sans, sans-serif",
    },

    style:{
        global: () => ({
            body: {
                bg: 'gray.200',
            },
        }),
    },
    
    component:{
        // Button 
    }
});