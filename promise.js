const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param) => {
  let tmpdata = 0
  await promiseTheaterIXX()
  .then(async (resolveValue) => {
    resolveValue.forEach((data, index) => {
      if(data.hasil===param)
      {
        tmpdata++
      }
    })
    await promiseTheaterVGC()
    .then((resolveValue) => {
      resolveValue.forEach((data, index) => {
        if(data.hasil===param)
        {
          tmpdata++
        }
      })
    })
  })
  return tmpdata
};

module.exports = {
  promiseOutput,
};
 