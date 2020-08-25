import { Stack, Avatar, Heading, Text } from "@chakra-ui/core";

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

export const Post: React.FC<UserPost> = ({userName, companyName, title, body}) => (
    <Stack isInline>
        <Avatar name={userName} />
        <Stack spacing={3}>
            <Heading as="h4" size="md">
                Title: {title} by {userName} from {companyName}
            </Heading>
            <Text fontSize="25px">
                Post: {body}
            </Text>
        </Stack>
    </Stack>
    )
    
    