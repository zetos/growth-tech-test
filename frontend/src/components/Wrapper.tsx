import React from 'react';
import { Box } from '@chakra-ui/core';

export const Wrapper: React.FC = ({children}) => {
    return <Box m={8} mx='auto' maxW='800px' w='100%' >{children}</Box>
}