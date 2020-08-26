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

const filterByGroup = (user: User) => {
  return hasGroup(user.company.name);
};

const filteredUsers = (users: User[]): User[] => {
  //   return R.filter(filterByGroup, users);
  return users.filter(filterByGroup);
};

// const postIncludesUserId = R.curry((users: User[], post: Post) => {
//   const userIds = users.map((user) => user.id);
//   return userIds.includes(post.userId);
// });

// const filteredPostsByUsers = (posts: Post[], users: User[]) => {
//   const fromUsers = postIncludesUserId(users);
//   return R.filter(fromUsers, posts);
// };

const addUserInfo = (user: User, post: Post): UserPost => {
  return { ...post, companyName: user.company.name, userName: user.name };
};

const appendUserToPost = R.curry(
  (users: User[], acc: UserPost[], post: Post): UserPost[] => {
    const userIds = users.map((user) => user.id);
    const indexOfUser = userIds.indexOf(post.userId);
    if (~indexOfUser) {
      const user = users[indexOfUser];
      return [...acc, addUserInfo(user, post)];
    } else {
      return acc;
    }
  }
);

const appendUserInfo = (posts: Post[], users: User[]) => {
  const postReducerWithUsers = appendUserToPost(users);
  return R.reduce(postReducerWithUsers, [], posts);
};

export const enhancedPost = (posts: Post[], users: User[]): UserPost[] => {
  //   const getPosts = filteredPostsByUsers(posts, users);
  return appendUserInfo(posts, filteredUsers(users));
};
