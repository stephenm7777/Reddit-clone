import { Flex } from '@chakra-ui/react';
import React from 'react';
import { AuthButton } from './AuthButtons';

type RightContentProps = {
    // user: any
}

export const RightContent: React.FC<RightContentProps> = () => {
    return (
        <>
            <Flex justify={'center'} align={'center'}> 
                <AuthButton />
            </Flex>
        </>
    )
};