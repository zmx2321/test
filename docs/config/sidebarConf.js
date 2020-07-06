/**
 * config
 */
/**
 * 学习笔记
 * 0. front-review  前端知识回顾
 * 1. js-development JavaScript语言新发展
 * 2. talk-node  大话NodeJS72般变化
 * 3. front-engineering  前端工程化
 * 4. front-performance  前端性能优化与工程化
 * 5. css-advanced CSS古话今说与网站重构
 * 6. front-frame  MVC、MVVM框架那些事
 * 7. front-crossover  前端跨界AI、IOS、PC、Android、IOT
 * 8. data-structure  数据结构与算法JavaScript实践
 * 9. front-graphics  JavaScript图形学和H5游戏
 * 10. front-hacker  设计模式与网络安全专场
 */
/**
 * 0. front-review  前端知识回顾
 * 0.1. review-javascript  javascript复习
 * 0.2. review-linux  linux复习
 */
// reviewFrontEnd  前端知识回顾
const reviewJavascriptConfig = require("../config/sidebarManage/note/front-review/review-javascript");
const reviewLinuxConfig = require("../config/sidebarManage/note/front-review/review-linux");

/*
* 1. js-development JavaScript语言新发展
* 1.1. js-ready 基础准备
*    1.1-1 js-ready-html  html预备进阶
*    1.1-2 js-ready-css  css预备进阶
*    1.1-3 js-ready-javascript  javascript预备进阶
*    1.1-4 js-ready-linux  linux预备进阶
*    1.1-5 js-ready-other  其他预备进阶
* 1.2. js-develop-note  笔记
*/
// 1. js-ready 基础准备
const jsReadyHtmlConfig = require("../config/sidebarManage/note/js-development/js-ready/js-ready-html");
const jsReadyCssConfig = require("../config/sidebarManage/note/js-development/js-ready/js-ready-css");
const jsReadyJavascriptConfig = require("../config/sidebarManage/note/js-development/js-ready/js-ready-javascript");
const jsReadyLinuxConfig = require("../config/sidebarManage/note/js-development/js-ready/js-ready-linux");
const jsReadyOtherConfig = require("../config/sidebarManage/note/js-development/js-ready/js-ready-other");

// 2. js-develop-note  笔记
const jsDevelopNoteConfig = require("../config/sidebarManage/note/js-development/js-note/js-develop-note");

/**
 * 2. talk-node  大话NodeJS72般变化
 * 2.1. talk-node-ready  基础准备
 *    2.1-1. node-base-api  NodeJS基础API
 *    2.1-2. node-express  express入门必看
 *    2.1-3. node-koa KOA1入门必看
 *    2.1-4. node-work  Node实战小项目
 * 
 * 2.2. talk-node-note  笔记
 */
// talk-node-ready 基础准备
const nodeBaseApiConfig = require("../config/sidebarManage/note/talk-node/talk-node-ready/node-base-api");
const nodeExpressConfig = require("../config/sidebarManage/note/talk-node/talk-node-ready/node-express");
const nodeKoaConfig = require("../config/sidebarManage/note/talk-node/talk-node-ready/node-koa");
const nodeWorkConfig = require("../config/sidebarManage/note/talk-node/talk-node-ready/node-work");

// talk-node-note  笔记
const talkNodeNoteConfig = require("../config/sidebarManage/note/talk-node/talk-node-note/talk-node-note");

/**
 * 3. front-engineering  前端工程化
 * 3.1. front-engineering-ready 基础准备
 *    3.1-1. front-building-tools  常用前端构建工具入门
 * 
 * 3.2. front-engineering-note  笔记
 */
// front-engineering-ready 基础准备
const frontBuildingToolsConfig = require("../config/sidebarManage/note/front-engineering/front-engineering-ready/front-building-tools");

// front-engineering-note  笔记
const frontEngineeringNoteConfig = require("../config/sidebarManage/note/front-engineering/front-engineering-note/front-engineering-note");

/**
 * 4. front-performance  前端性能优化与工程化
 * 4.1. front-performance-ready 基础准备
 *     4.1-1. front-technical-optimization  性能优化常用技术手段
 *     4.1-2. front-senior-debug  前端工程师高级调试
 * 
 * 4.2. front-performance-note  笔记
 */
// front-performance-ready 基础准备
const frontTechnicalOptimizationConfig = require("../config/sidebarManage/note/front-performance/front-performance-ready/front-technical-optimization");
const frontSeniorDebugConfig = require("../config/sidebarManage/note/front-performance/front-performance-ready/front-senior-debug");

// front-performance-note  笔记
const frontPerformanceNoteConfig = require("../config/sidebarManage/note/front-performance/front-performance-note/front-performance-note");

/**
 * 5. css-advanced CSS古话今说与网站重构
 * 5.1. css-advanced-ready 基础准备
 *     5.1-1. css-pretreatment  Less&Sass入门
 *     5.1-2. css-core-skill  CSS3其他核心技巧
 * 
 * 5.2. css-advanced-note  笔记
 */
// css-advanced-ready 基础准备
const cssPretreatmentConfig = require("../config/sidebarManage/note/css-advanced/css-advanced-ready/css-pretreatment");
const cssCoreSkillConfig = require("../config/sidebarManage/note/css-advanced/css-advanced-ready/css-core-skill");

// css-advanced-note  笔记
const cssAdvancedNoteConfig = require("../config/sidebarManage/note/css-advanced/css-advanced-note/css-advanced-note");

/**
 * 6. front-frame  MVC、MVVM框架那些事
 * 6.1. front-frame-ready 基础准备
 *     6.1-1. front-ts-intro  Typescript入门
 *     6.1-2. front-vue-intro  vue入门必学
 *     6.1-3. front-angular-intro  AngularJS入门必学
 *     6.1-4. front-react-intro  React入门必学
 * 
 * 6.2. front-frame-note  笔记
 */
// front-frame-ready 基础准备
const frontTsIntroConfig = require("../config/sidebarManage/note/front-frame/front-frame-ready/front-ts-intro");
const frontVueIntroConfig = require("../config/sidebarManage/note/front-frame/front-frame-ready/front-vue-intro");
const frontAngularIntroConfig = require("../config/sidebarManage/note/front-frame/front-frame-ready/front-angular-intro");
const frontReactIntroConfig = require("../config/sidebarManage/note/front-frame/front-frame-ready/front-react-intro");

// front-frame-note  笔记
const frontFrameNoteConfig = require("../config/sidebarManage/note/front-frame/front-frame-note/front-frame-note");

/**
 * 7. front-crossover  前端跨界AI、IOS、PC、Android、IOT
 * 7.1. front-crossover-ready 基础准备
 *      7.1-1. front-mobile-build  Android&iOS开发环境搭建
 *      7.1-2. front-rnco-intro  ReactNative&Cordova入门
 *      7.1-3. front-embed-intro  前端跨界PC与嵌入式
 *      7.1-4. front-python-intro  走进Python的世界
 * 
 * 7.2. front-crossover-note  笔记
 */
// front-crossover-ready 基础准备
const frontMobileBuildConfig = require("../config/sidebarManage/note/front-crossover/front-crossover-ready/front-mobile-build");
const frontRncoIntroConfig = require("../config/sidebarManage/note/front-crossover/front-crossover-ready/front-rnco-intro");
const frontEmbedIntroConfig = require("../config/sidebarManage/note/front-crossover/front-crossover-ready/front-embed-intro");
const frontPythonIntroConfig = require("../config/sidebarManage/note/front-crossover/front-crossover-ready/front-python-intro");

// front-crossover-note  笔记
const frontCrossoverNoteConfig = require("../config/sidebarManage/note/front-crossover/front-crossover-note/front-crossover-note");

/**
 * 8. data-structure  数据结构与算法JavaScript实践
 * 8.1. data-structure-ready 基础准备
 *     8.1-1. structure-js-top  数据结构和算法JavaScript实践【上】
 *     8.1-2. structure-js-mid  数据结构和算法JavaScript实践【中】
 *     8.1-3. structure-js-bot  数据结构和算法JavaScript实践【下】
 *     8.1-4. structure-thorough  数据结构和算法深入提升
 * 
 * 8.2. data-structure-note  笔记
 */
// data-structure-ready 基础准备
const structureJsTopConfig = require("../config/sidebarManage/note/data-structure/data-structure-ready/structure-js-top");
const structureJsMidConfig = require("../config/sidebarManage/note/data-structure/data-structure-ready/structure-js-mid");
const structureJsBotConfig = require("../config/sidebarManage/note/data-structure/data-structure-ready/structure-js-bot");
const structureThoroughConfig = require("../config/sidebarManage/note/data-structure/data-structure-ready/structure-thorough");

// data-structure-note  笔记
const dataStructureNoteConfig = require("../config/sidebarManage/note/data-structure/data-structure-note/data-structure-note");

/**
 * 9. front-graphics  JavaScript图形学和H5游戏
 * 9.1. front-graphics-ready 基础准备
 *     9.1-1. graphics-canvas  Canvas入门
 *     9.1-2. graphics-cocos2d-top  Cocos2d-JS快速入门【上】
 *     9.1-3. graphics-cocos2d-bot  Cocos2d-JS快速入门【下】
 *     9.1-4. graphics-webgl-top  WebGL深入浅出【上】
 *     9.1-5. graphics-webgl-mid  WebGL深入浅出【中】
 *     9.1-6. graphics-webgl-bot  WebGL深入浅出【下】
 *     9.1-7. graphics-three-top  Three.js系列课程【上】
 *     9.1-8. graphics-three-mid  Three.js系列课程【中】
 *     9.1-9. graphics-three-bot  Three.js系列课程【下】
 * 
 * 9.2. front-graphics-note  笔记
 */
// front-graphics-ready 基础准备
const graphicsCanvasConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-canvas");
const graphicsCocos2dTopConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-cocos2d-top");
const graphicsCocos2dBotConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-cocos2d-bot");
const graphicsWebglTopConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-webgl-top");
const graphicsWebglMidConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-webgl-mid");
const graphicsWebglBotConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-webgl-bot");
const graphicsThreeTopConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-three-top");
const graphicsThreeMidConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-three-mid");
const graphicsThreeBotConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-ready/graphics-three-bot");

// front-graphics-note  笔记
const frontGraphicsNoteConfig = require("../config/sidebarManage/note/front-graphics/front-graphics-note/front-graphics-note");

/**
 * 10. front-hacker  设计模式与网络安全专场
 * 10.1. front-hacker-ready 基础准备
 *     10.1-1. design-pattern-top  常用设计模式【上】
 *     10.1-2. design-pattern-bot  常用设计模式【下】
 * 
 * 10.2. front-hacker-note  笔记
 */
// front-hacker-ready 基础准备
const designPatternTopConfig = require("../config/sidebarManage/note/front-hacker/front-hacker-ready/design-pattern-top");
const designPatternBotConfig = require("../config/sidebarManage/note/front-hacker/front-hacker-ready/design-pattern-bot");

// front-hacker-note  笔记
const frontHackerNoteConfig = require("../config/sidebarManage/note/front-hacker/front-hacker-note/front-hacker-note");


/**
 * 面试题
 * 基础面试题
 * 面试题特训
 * vue专题
 */
const interviewBaseConfig = require("../config/sidebarManage/interview/interview-base");
const interviewTrainingConfig = require("../config/sidebarManage/interview/interview-training");
const interviewVueConfig = require("../config/sidebarManage/interview/interview-vue");

/**
 * 算法
 * leet-code
 *   algorithm-easy 算法天堂模式
 *   algorithm-normal 算法人间模式 
 *   algorithm-hard 算法地狱模式 
 * script-oj
 *   classic-questions 经典笔试题
 *   js-foundation js基础 
 *   script-oj-other 其他 
 * other
 *   algorithm-other 其他渠道get到的算法
 *   algorithm-base 基础算法
 */
const algorithmEasyConfig = require("../config/sidebarManage/algorithm/leet-code/algorithm-easy");
const algorithmNormalConfig = require("../config/sidebarManage/algorithm/leet-code/algorithm-normal");
const algorithmHardlConfig = require("../config/sidebarManage/algorithm/leet-code/algorithm-hard");

const classicQuestionsConfig = require("../config/sidebarManage/algorithm/script-oj/classic-questions");
const jsFoundationConfig = require("../config/sidebarManage/algorithm/script-oj/js-foundation");
const scriptOjOtherConfig = require("../config/sidebarManage/algorithm/script-oj/script-oj-other");

const algorithmBaseConfig = require("../config/sidebarManage/algorithm/other/algorithm-base");
const algorithmOtherConfig = require("../config/sidebarManage/algorithm/other/algorithm-other");


/**
 * 积累
 * 1. front 前端
 *  1.1. js-note js笔记
 *  1.2  vue-note vue笔记
 *  1.3  react-note react笔记
 *  1.3  flutter-note flutter笔记
 *  1.3  ts-note typeScript笔记
 *  1.4  webpack-note webpack笔记
 *  1.5  gis-note gis笔记
 *  1.6  cesium-note gis笔记
 *  1.7  other-note 其他
 * 2. back 后端
 *  2-1. linux-note  linux笔记
 *  2-2. mysql-note  数据库
 *  2-3. java-note  java笔记
 *  2-4. java-base  java基础
 *  2-5. java-frame  java框架
 * 3. other 其他
 */
const jsNoteConfig = require("../config/sidebarManage/accumulation/front/js-note");
const vueNoteConfig = require("../config/sidebarManage/accumulation/front/vue-note");
const reactNoteConfig = require("../config/sidebarManage/accumulation/front/react-note");
const flutterNoteConfig = require("../config/sidebarManage/accumulation/front/flutter-note");
const tsNoteConfig = require("../config/sidebarManage/accumulation/front/ts-note");
const webpackNoteConfig = require("../config/sidebarManage/accumulation/front/webpack-note");
const gisNoteConfig = require("../config/sidebarManage/accumulation/front/gis-note");
const cesiumNoteConfig = require("../config/sidebarManage/accumulation/front/cesium-note");
const otherNoteConfig = require("../config/sidebarManage/accumulation/front/other-note");

const linuxNoteConfig = require("../config/sidebarManage/accumulation/back/linux-note");
const mysqlNoteConfig = require("../config/sidebarManage/accumulation/back/mysql-note");
const javaNoteConfig = require("../config/sidebarManage/accumulation/back/java-note");
const javaBaseConfig = require("../config/sidebarManage/accumulation/back/java-base");
const javaFrameConfig = require("../config/sidebarManage/accumulation/back/java-frame");

const otherConfig = require("../config/sidebarManage/accumulation/other");

/**
 * 大杂烩
 * 1. article 生活
 * 2. food-menu 菜谱
 * 3. plan 计划
 *  3.1. plan2020 2020计划
 */
const articleConfig = require("../config/sidebarManage/hodgepodge/article");
const foodMenuConfig = require("../config/sidebarManage/hodgepodge/food-menu");
const plan2020Config = require("../config/sidebarManage/hodgepodge/plan/plan2020");
const plan2021Config = require("../config/sidebarManage/hodgepodge/plan/plan2021");

/**
 * test
 */
const testConfig = require("../config/sidebarManage/test/test");
const testG6Config = require("../config/sidebarManage/test/testG6");

module.exports = {
  /**
   * 学习笔记
   * JavaScript语言新发展
   */
  // 基础准备
  '/pages/note/front-review/': [
    '',
    reviewJavascriptConfig,  // javascript复习
    reviewLinuxConfig  // linux复习
  ],
  /**
   * 学习笔记
   * JavaScript语言新发展
   */
  // 基础准备
  '/pages/note/js-development/js-ready/': [
    '',
    jsReadyHtmlConfig,  // html预备进阶
    jsReadyCssConfig,  // css预备进阶
    jsReadyJavascriptConfig,  // js预备进阶
    jsReadyLinuxConfig,  // linux预备进阶
    jsReadyOtherConfig,  // 其他预备进阶
  ],
  // 笔记
  '/pages/note/js-development/js-note/': [
    '',
    jsDevelopNoteConfig  // JavaScript语言新发展
  ],
  /**
   * 学习笔记
   * 大话NodeJS72般变化
   */
  // 基础准备
  '/pages/note/talk-node/talk-node-ready/': [
    '',
    nodeBaseApiConfig,  //  NodeJS基础API
    nodeExpressConfig,  // express入门必看
    nodeKoaConfig,  // KOA1入门必看
    nodeWorkConfig,  // Node实战小项目
  ],
  // 笔记
  '/pages/note/talk-node/talk-node-note/': [
    '',
    talkNodeNoteConfig  // 大话NodeJS72般变化
  ],
  /**
   * 学习笔记
   * 前端工程化
   */
  // 基础准备
  '/pages/note/front-engineering/front-engineering-ready/': [
    '',
    frontBuildingToolsConfig,  // 常用前端构建工具入门
  ],
  // 笔记
  '/pages/note/front-engineering/front-engineering-note/': [
    '',
    frontEngineeringNoteConfig  // 前端工程化
  ],
  /**
   * 学习笔记
   * 前端性能优化与工程化
   */
  // 基础准备
  '/pages/note/front-performance/front-performance-ready/': [
    '',
    frontTechnicalOptimizationConfig,  // 性能优化常用技术手段
    frontSeniorDebugConfig,  // 前端工程师高级调试
  ],
  // 笔记
  '/pages/note/front-performance/front-performance-note/': [
    '',
    frontPerformanceNoteConfig,  // 前端性能优化与工程化
  ],
  /**
   * 学习笔记
   * CSS古话今说与网站重构
   */
  // 基础准备
  '/pages/note/css-advanced/css-advanced-ready/': [
    '',
    cssPretreatmentConfig,  // Less&Sass入门
    cssCoreSkillConfig,  // CSS3其他核心技巧
  ],
  // 笔记
  '/pages/note/css-advanced/css-advanced-note/': [
    '',
    cssAdvancedNoteConfig,  // CSS古话今说与网站重构
  ],
  /**
   * 学习笔记
   * MVC、MVVM框架那些事
   */
  // 基础准备
  '/pages/note/front-frame/front-frame-ready/': [
    '',
    frontTsIntroConfig,  // Typescript入门
    frontVueIntroConfig,  // vue入门必学
    frontAngularIntroConfig,  // AngularJS入门必学
    frontReactIntroConfig,  // React入门必学
  ],
  // 笔记
  '/pages/note/front-frame/front-frame-note/': [
    '',
    frontFrameNoteConfig,  // MVC、MVVM框架那些事
  ],
  /**
   * 学习笔记
   * 前端跨界AI、IOS、PC、Android、IOT
   */
  // 基础准备
  '/pages/note/front-crossover/front-crossover-ready/': [
    '',
    frontMobileBuildConfig,  // Android&iOS开发环境搭建
    frontRncoIntroConfig,  // ReactNative&Cordova入门
    frontEmbedIntroConfig,  // 前端跨界PC与嵌入式
    frontPythonIntroConfig,  // 走进Python的世界
  ],
  // 笔记
  '/pages/note/front-crossover/front-crossover-note/': [
    '',
    frontCrossoverNoteConfig,  // 前端跨界AI、IOS、PC、Android、IOT
  ],
  /**
   * 学习笔记
   * 数据结构与算法JavaScript实践
   */
  // 基础准备
  '/pages/note/data-structure/data-structure-ready/': [
    '',
    structureJsTopConfig,  // 数据结构和算法JavaScript实践【上】
    structureJsMidConfig,  // 数据结构和算法JavaScript实践【中】
    structureJsBotConfig,  // 数据结构和算法JavaScript实践【下】
    structureThoroughConfig,  // 数据结构和算法深入提升
  ],
  // 笔记
  '/pages/note/data-structure/data-structure-note/': [
    '',
    dataStructureNoteConfig,  // 数据结构与算法JavaScript实践
  ],
  /**
   * 学习笔记
   * JavaScript图形学和H5游戏
   */
  // 基础准备
  '/pages/note/front-graphics/front-graphics-ready/': [
    '',
    graphicsCanvasConfig,  // Canvas入门
    graphicsCocos2dTopConfig,  // Cocos2d-JS快速入门【上】
    graphicsCocos2dBotConfig,  // Cocos2d-JS快速入门【下】
    graphicsWebglTopConfig,  // WebGL深入浅出【上】
    graphicsWebglMidConfig,  // WebGL深入浅出【中】
    graphicsWebglBotConfig,  // WebGL深入浅出【下】
    graphicsThreeTopConfig,  // Three.js系列课程【上】
    graphicsThreeMidConfig,  // Three.js系列课程【中】
    graphicsThreeBotConfig,  // Three.js系列课程【下】
  ],
  // 笔记
  '/pages/note/front-graphics/front-graphics-note/': [
    '',
    frontGraphicsNoteConfig,  // JavaScript图形学和H5游戏
  ],
  /**
   * 学习笔记
   * 设计模式与网络安全专场
   */
  // 基础准备
  '/pages/note/front-hacker/front-hacker-ready/': [
    '',
    designPatternTopConfig,  // 常用设计模式【上】
    designPatternBotConfig,  // 常用设计模式【下】
  ],
  // 笔记
  '/pages/note/front-hacker/front-hacker-note/': [
    '',
    frontHackerNoteConfig,  // 设计模式与网络安全专场
  ],

  /**
   * 面试题
   */
  '/pages/interview/': [
    '',
    interviewBaseConfig,  // 基础面试题
    interviewTrainingConfig,  // 面试题特训
    interviewVueConfig,  // vue专题
  ],

  /**
   * 算法
   */
  '/pages/algorithm/leet-code/': [
    // '',
    // algorithmEasyConfig,  // 算法天堂模式
    // algorithmNormalConfig,  // 算法人间模式
    // algorithmHardlConfig,  // 算法地狱模式
  ],
  '/pages/algorithm/script-oj/': [
    // '',
    // classicQuestionsConfig,  // 经典笔试题
    // jsFoundationConfig,  // js基础
    // scriptOjOtherConfig,  // 其他
  ],
  '/pages/algorithm/other/': [
    '',
    algorithmBaseConfig,  // 基础算法
    algorithmOtherConfig,  // 其他渠道get到的算法
  ],

  /**
   * 积累
   */
  // 前端
  '/pages/accumulation/front/': [
    '',
    jsNoteConfig,  // js笔记
    vueNoteConfig,  // vue笔记
    reactNoteConfig,  // react笔记
    flutterNoteConfig,  // flutter笔记
    tsNoteConfig,  // ts笔记
    webpackNoteConfig,  // react笔记
    gisNoteConfig,  // webpack
    cesiumNoteConfig,  // cesium笔记
    otherNoteConfig,  // 其他笔记
  ],
  // 后端
  '/pages/accumulation/back/': [
    '',
    // linuxNoteConfig,  // linux笔记
    mysqlNoteConfig,  // mysql 数据库
    // javaNoteConfig,  // java笔记
    // javaBaseConfig,  /// java基础
    // javaFrameConfig  // java框架
  ],
  // 其他
  '/pages/accumulation/other/': [
    '',
    // otherConfig
  ],

  /**
   * 大杂烩
   */
  // // 生活
  // '/pages/hodgepodge/article/': [
  //   '',
  //   // articleConfig
  // ],
  // // 菜谱
  // '/pages/hodgepodge/food-menu/': [
  //   '',
  //   // foodMenuConfig
  // ],
  // // 计划
  // '/pages/hodgepodge/plan/': [
  //   '',
  //   // plan2020Config,
  //   // plan2021Config
  // ],

  // /**
  //  * 测试
  //  */
  // '/pages/test/': [
  //   // testConfig,
  //   // testG6Config
  // ],
};