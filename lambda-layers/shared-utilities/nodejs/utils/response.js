/**
 * Create a standardized API Gateway response
 * @param {number} statusCode - HTTP status code
 * @param {object} body - Response body
 * @param {object} headers - Additional headers
 * @returns {object} API Gateway response
 */
function createResponse(statusCode, body, headers = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  };

  return {
    statusCode,
    headers: { ...defaultHeaders, ...headers },
    body: JSON.stringify(body)
  };
}

/**
 * Create a success response
 * @param {object} data - Success data
 * @param {number} statusCode - HTTP status code (default: 200)
 * @returns {object} API Gateway response
 */
function createSuccessResponse(data, statusCode = 200) {
  return createResponse(statusCode, {
    success: true,
    ...data
  });
}

/**
 * Create an error response
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default: 500)
 * @param {object} details - Additional error details
 * @returns {object} API Gateway response
 */
function createErrorResponse(message, statusCode = 500, details = {}) {
  return createResponse(statusCode, {
    success: false,
    error: message,
    ...details
  });
}

/**
 * Create a CORS preflight response
 * @returns {object} API Gateway response
 */
function createCorsResponse() {
  return createResponse(200, {}, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  });
}

module.exports = {
  createResponse,
  createSuccessResponse,
  createErrorResponse,
  createCorsResponse
};
