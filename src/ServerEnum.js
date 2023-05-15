/* eslint-disable no-tabs */
/* eslint-disable indent */
module.exports = {
  ServerEnum: {
    // API_URL: "http://localhost:5000/api/",
    API_URL: "https://arvamus-backend-awbq.onrender.com/api/",

    RESPONSE_CONNECTION_ERROR: "CONNECTION_ERROR",
    RESPONSE_SUCCESS: "SUCCESS",
    RESPONSE_DATABASE_CONNECTION_ERROR: "DATABASE_CONNECTION_ERROR",
    RESPONSE_PASSWORD_MISMATCH: "PASSWORD_MISMATCH",
    RESPONSE_EMAIL_MISMATCH: "EMAIL_MISMATCH",
    RESPONSE_OTP_MISMATCH: "OTP_MISMATCH",
    RESPONSE_EMAIL_TAKEN: "EMAIL_TAKEN",
    RESPONSE_PHONE_TAKEN: "PHONE_TAKEN",
    RESPONSE_INVALID_JWT_TOKEN: "INVALID_JWT_TOKEN",
    RESPONSE_INVALID_GOOGLE_TOKEN: "INVALID_GOOGLE_TOKEN",
    RESPONSE_INVALID_PHONE_TOKEN: "INVALID_PHONE_TOKEN",
    RESPONSE_GROUP_NOT_FOUND: "TEAM NOT FOUND",

    RESPONSE_NO_REVIEW_FOUND: "NO REVIEW FOUND",
    RESPONSE_NO_RATING_FOUND: "NO RATING FOUND",

    STUDENT: "STUDENT",
    TEACHER: "TEACHER",
    STAFF: "STAFF",

    USER_DOES_NOT_EXIST: {
      status: false,
      message: "User does not exist",
    },
    INVALID_PASSWORD: {
      status: false,
      message: "Invalid password",
    },
    INVALID_INPUT: {
      status: false,
      message: "Invalid input",
    },
    INVALID: {
      status: false,
      message: "Invalid",
    },
    INTERNAL_SERVER_ERROR: {
      status: false,
      message: "Internal server error",
    },
    STATUS_ACTIVE: "ACTIVE",
    STATUS_INACTIVE: "INACTIVE",

    PRIME:
      "ce7034ac087ac2f4a9b48b1af24741ce589d2cea3e25dc47408e0671f1a903e0bb34eeeb1f93d9e4b72498ed26e326b3980d36c497eacd042f6b0ecf4e2f942124cebf52e5ae79943bf9767f9802b6ed801876c7cec7b7fca8a2ad430afa174a15f40b3fabec5470888d8b972395cc56f6b857c05dda1c2a018b7b23c71afe37",
    GENERATOR: 2,

    INVITE_TEACHER_TEXT:
      "Dear teacher,\nYou have been invited to join MathChamp, an automated Abacus and Math practice platform.\nClick the link below or copy and paste in a browser to complete your profile.\n\n https://mathchamp.in/login \n\nYour temporary password to access this link is 123456 . Kindly ensure to change your password once you login.\n\nHappy teaching.\nTeam MathChamp",
  },
};
