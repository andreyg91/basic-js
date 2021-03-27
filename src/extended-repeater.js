module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = '1',
    additionSeparator = '|',
  } = options;

  let strRes = '';
  let additionRes = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i < additionRepeatTimes - 1) {
      additionRes += addition + additionSeparator;
    } else {
      additionRes += addition;
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (i < repeatTimes - 1) {
      strRes += str + additionRes + separator;
    } else {
      strRes += str + additionRes;
    }
  }

  return strRes;
};
