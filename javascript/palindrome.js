module.exports.palindrome = () => {
  var str = process.env.npm_config_palindrome;
  console.log(str.toLowerCase() === str.toLowerCase().split("").reverse().join(""));
};