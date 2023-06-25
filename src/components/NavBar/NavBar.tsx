import React from 'react';
import { Flex,Box } from "@chakra-ui/react"
import Image from "next/image"
import {SearchInputProps} from "./SearchInput"
import { RightContent } from './RightContent/RightContent';
const NavBar: React.FC = () => {
    return (
        <Flex bg = "white" height={'44px'} padding={'6px 12px'}>
            <Flex align={'center'}>

                <Image src="/images/redditFace.svg" alt="Reddit Logo" width={30} height={50} />

                <Box display={{base: "none", md: "unset"}} />
                <Image 
                    src="/images/redditText.svg" 
                    alt="Reddit Text" 
                    width={70} 
                    height={50} 
                />
            </Flex>
            <SearchInputProps /> 
            <RightContent />
        </Flex>
    );
};
export default NavBar;  