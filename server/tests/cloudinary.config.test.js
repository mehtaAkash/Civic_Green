describe('config/cloudinary', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.resetModules();
  });

  test('does not throw when Cloudinary env vars are missing', () => {
    delete process.env.CLOUDINARY_CLOUD_NAME;
    delete process.env.CLOUDINARY_API_KEY;
    delete process.env.CLOUDINARY_API_SECRET;

    expect(() => require('../config/cloudinary')).not.toThrow();
    expect(require('../config/cloudinary')).toBeNull();
  });
});
