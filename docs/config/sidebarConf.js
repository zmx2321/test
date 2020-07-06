/**
 * config
 */
/**
 * test1
 * test2
 * test3
 */
const test1Config = require("../config/sidebarManage/test1");
const test2Config = require("../config/sidebarManage/test2");
const test3Config = require("../config/sidebarManage/test3");

module.exports = {
  /**
   * test1
   */
  '/pages/test1/': [
    '',
    test1Config,
  ],

  /**
   * test2
   */
  '/pages/test2/': [
    '',
    test2Config,
  ],

  /**
   * test3
   */
  '/pages/test3/': [
    '',
    test3Config,
  ],
};