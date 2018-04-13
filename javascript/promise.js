module.exports.promise = () => {
  var promise = new Promise(async (resolve, reject) => {
    await setTimeout(() => {
       console.log('hello');
     }, 50);
     setTimeout(resolve, 100);
  }).catch(async (err) => { console.log(err); });
};