import React from 'react';
import {Button} from "@chakra-ui/react"

export const AuthButton: React.FC = () => {
    return (
        <>
        <Button variant="outline" 
                height={'28px'} 
                display={{base: "none", sm: "flex"}}
                width={{base: '70px', md: '110px'}}
                mr={2}

                >Log In
        </Button>

        <Button height="28px"
                display={{base: 'none', sm: 'flex'}}
                width={{base: '70px', md: '110px'}}
                mr={2}
                > Sign up 
        </Button>
        
        </>
    )
};