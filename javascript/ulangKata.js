module.exports.ulang = () => {
  String.prototype.ulangkata = function (n) {
    return this.repeat(n);
  };
  console.log("gredu".ulangkata(3))
};