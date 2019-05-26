module.exports = function main({distance, parkTime}) {
  // write your code here...
  return Math.round(
    parkTime * 0.25 +
      6 +
      Math.max(0, (distance - 2) * 0.8) +
      Math.max(0, (distance - 8) * 0.4)
  );
};