function isValidInput(input) {
  const regex = /^[a-z0-9]+$/i;
  return regex.test(input);
}

module.exports = {
  isValidInput,
};
