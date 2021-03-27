module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let res = [];
    members.forEach((item) => {
      if (typeof item === 'string') {
        res.push(item.trim().toUpperCase()[0]);
      }
    });

    return res.sort().join('');
  }

  return false;
};
