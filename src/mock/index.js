import Mock from 'mockjs'
import * as scrollTable from "./modules/data"

/**
 * @description: 
 * @param {*} modules 模块
 * @param {*} isOpen 是否开启mock拦截
 * @return {*}
 */
function createMockRequset(modules, isOpen) {
  if (isOpen) {
    for (let key in modules) {
      console.log(key);
      ((res) => {
        console.log(res);
        Mock.mock(new RegExp(res.url), res.type, (opts) => {
          // opts["data"]
          console.log(opts)
          console.log(res.data)
          return res.data
        })
      })(modules[key]() || {})
    }
  }
}

export default function (debug) {
  if (debug === false) {
    return;
  }
  createMockRequset(scrollTable, true);
  console.log(scrollTable);
}