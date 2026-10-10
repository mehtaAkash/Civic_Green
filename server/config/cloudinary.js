let cloudinary = null;
try {
  const c = require('cloudinary').v2;
  const { CLOUDINARY } = require('./index');
  if (CLOUDINARY && CLOUDINARY.CLOUD_NAME && CLOUDINARY.API_KEY && CLOUDINARY.API_SECRET) {
    c.config({ cloud_name: CLOUDINARY.CLOUD_NAME, api_key: CLOUDINARY.API_KEY, api_secret: CLOUDINARY.API_SECRET, secure: true });
    cloudinary = c;
  } else {
    console.warn('Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.');
  }
} catch (e) {
  console.error('Cloudinary package not available or failed to initialize:', e.message || e);
}

module.exports = cloudinary;
