// import buildDevelopCd from './buildDevelopCd'
// import buildTest from './buildTest'
var buildDevelopCd = require('./buildDevelopCd')
var buildTest = require('./buildTest')

let buildEnv = 'buildDevelopCd'

const api = {
  //开发环境
  buildDevelopCd: buildDevelopCd,
  //测试环境
  buildTest: buildTest,

}[buildEnv];
if (!api){
  throw new Error(`BUILD_ENV: ${buildEnv} not match`);
}

export default api
