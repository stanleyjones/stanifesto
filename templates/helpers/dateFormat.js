module.exports = function (date) {
  return new Date(date).toISOString().split('T')[0];
}
