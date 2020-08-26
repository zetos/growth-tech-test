describe('Home integration tests', () => {
  it('should return a json with success', async () => {
    const { body, status } = await global.testRequest.get('/');
    expect(status).toBe(200);
    expect(body).toEqual({ success: true });
  });
  it('should return 404 for the wrong request method.', async () => {
    const { status } = await global.testRequest.post('/');
    expect(status).toBe(404);
  });
});
