const crypto = require('crypto');

/**
 * Generate a secure random string
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 */
function generateRandomString(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Generate a UUID v4
 * @returns {string} UUID v4 string
 */
function generateUUID() {
  return crypto.randomUUID();
}

/**
 * Hash a string using SHA-256
 * @param {string} input - String to hash
 * @returns {string} SHA-256 hash
 */
function hashString(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

/**
 * Encrypt data using AES-256-GCM
 * @param {string} data - Data to encrypt
 * @param {string} key - Encryption key (32 bytes)
 * @returns {object} Encrypted data with iv and tag
 */
function encryptAES(data, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipherGCM('aes-256-gcm', key, iv);
  
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const tag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    tag: tag.toString('hex')
  };
}

/**
 * Decrypt data using AES-256-GCM
 * @param {object} encryptedData - Encrypted data with iv and tag
 * @param {string} key - Decryption key (32 bytes)
 * @returns {string} Decrypted data
 */
function decryptAES(encryptedData, key) {
  const decipher = crypto.createDecipherGCM('aes-256-gcm', key, Buffer.from(encryptedData.iv, 'hex'));
  decipher.setAuthTag(Buffer.from(encryptedData.tag, 'hex'));
  
  let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

module.exports = {
  generateRandomString,
  generateUUID,
  hashString,
  encryptAES,
  decryptAES
};
