module.exports.removeString = () => {
  var emptyArray = [1, 'Gredu', 2, 3, 'for', 4, 'School', 5, 'in', 6, 'Indonesia', 7, 8];
  const result = emptyArray.filter(res => Number(res));
  console.log(result);
};