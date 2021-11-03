const ValidInContact = {
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 30,
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQVEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TO_MANY_REQVEST: 429,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
  ValidInContact,
  HttpCode,
};
