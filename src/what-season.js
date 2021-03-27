module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!date.valueOf()) {
    throw new Error();
  }

  const month = date.getMonth();
  if ((month >= 0 && month < 2) || month === 11) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
};
