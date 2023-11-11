const sendResponse = (isSuccessful, message, data) => {
  return {
    isSuccessful,
    message: isSuccessful ? message : "",
    error: !isSuccessful ? message : "",
    data,
  };
};

module.exports = { sendResponse };
