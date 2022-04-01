/*
 * @Author: ArdenZhao
 * @Date: 2022-04-01 17:00:56
 * @LastEditTime: 2022-04-01 17:00:57
 * @FilePath: /react-ts/src/components/react/ponicode/5-LifeCycle.test.js
 * @Description: file information
 */
const rewire = require("rewire")
const _5_LifeCycle = rewire("../5-LifeCycle")
const SubComponent = _5_LifeCycle.__get__("SubComponent")

// @ponicode
describe("SubComponent.componentWillUnmount", () => {
  let inst2

  beforeEach(() => {
    inst2 = new SubComponent(-Infinity)
  })

  test("0", () => {
    let result = inst2.componentWillUnmount()
    expect(result).toMatchSnapshot()
  })
})
