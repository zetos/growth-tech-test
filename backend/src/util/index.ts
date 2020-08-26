import R from 'ramda';
import { Post, User } from 'clients/jsonPlaceHolder';

export interface UserPost extends Post {
  companyName: string;
  userName: string;
}

const hasSubStr = R.curry(
  (str: string, subStr: string) => ~str.indexOf(subStr)
);

const hasGroup = hasSubStr(R.__, 'Group');

const filterByGroup = (user: User) => hasGroup(user.company.name);

const filteredUsers = (users: User[]): User[] => users.filter(filterByGroup);

const addUserInfo = (user: User, post: Post): UserPost => ({
  ...post,
  companyName: user.company.name,
  userName: user.name,
});

const appendUserToPost = R.curry(
  (
    usersData: { users: User[]; usersIds: number[] },
    acc: UserPost[],
    post: Post
  ): UserPost[] => {
    const indexOfUser = usersData.usersIds.indexOf(post.userId); // imperative survivor..
    return ~indexOfUser
      ? [...acc, addUserInfo(usersData.users[indexOfUser], post)]
      : acc;
  }
);

const getUsersIds = (users: User[]) => R.map((user) => user.id, users);

const appendUserInfo = (posts: Post[], users: User[]): UserPost[] => {
  const postReducerWithUsers = appendUserToPost({
    users,
    usersIds: getUsersIds(users),
  });
  return R.reduce(postReducerWithUsers, [], posts);
};

export const enhancedPost = (posts: Post[], users: User[]): UserPost[] =>
  appendUserInfo(posts, filteredUsers(users));
