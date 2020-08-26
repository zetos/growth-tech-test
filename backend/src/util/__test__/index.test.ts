import users from '../../../test/mockedData/users.json';
import posts from '../../../test/mockedData/posts.json';
import postsWithUserInfo from '../../../test/mockedData/postsWithUserInfo.json';
import { enhancedPost } from '../index';

describe('Util tests', () => {
  it('should return a list of posts with user info', async () => {
    const rawPosts = posts;
    const rawUsers = users;
    const getEnhancedPosts = enhancedPost(rawPosts, rawUsers);
    expect(getEnhancedPosts).toEqual(postsWithUserInfo);
  });
});
