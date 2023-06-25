import React from "react"; 
import { Flex, InputGroup, InputLeftElement, InputRightElement, Input} from "@chakra-ui/react"
import {PhoneIcon, SearchIcon}  from '@chakra-ui/icons'


type SearchInputProps = {
    //user 
};

export const SearchInputProps:React.FC<SearchInputProps> = () => {
    return (
        <Flex flexGrow={1} mr={2} align={"center"}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents={'none'}
                    children={<SearchIcon color = 'gray.400' mb={1.5}/>}
                    />

                    <Input 
                    placeholder='Search Reddit' 
                    fontSize='10pt' 
                    _placeholder={{ color: 'gray.500'}}
                    _hover={{
                        bg:'white', 
                        border: '1px solid', 
                        borderColor: 'blue.500', 
                    }} 
                    _focus={{
                        outline: 'none', 
                        border: '1px solid',
                        borderColor: 'blue.500',
                    }}
                    height={"34"}
                    bg={'gray.50'}
                    />
            </InputGroup>
        </Flex>
    );
};