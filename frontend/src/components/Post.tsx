import { Stack, Avatar, Heading, Text, Box } from "@chakra-ui/core";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserPost extends Post {
    companyName: string;
    userName: string;
}

export const Post: React.FC<UserPost> = ({ userName, companyName, title, body }) => (
    <Box p={5} shadow="md" borderWidth="1px">
        <Stack isInline>
            <Avatar name={userName} />
            <Stack spacing={1}>
                <Heading as="h4" size="md">
                    Title: {title}
                </Heading>
                <Text fontSize="md">
                    by: {userName}
                </Text>
                <Text fontSize="md">
                    from: {companyName}
                </Text>
                <Text fontSize="25px">
                    {body}
                </Text>
            </Stack>
        </Stack>
    </Box>
)

