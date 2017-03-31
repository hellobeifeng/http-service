var BookService = require('./lib/BookService');
var MovieService = require('./lib/MovieService');
var BaseParamsFilter = require('./lib/BaseParamsFilter');

/**
 * @param {Object} httpClient
 *
 * httpClient对象需要实现如下方法
 *  * setUrlPrefix(url)
 *  * setParamFilter(filter)
 *  * get(url)
 *  * getJson(url)
 *  * post(url, params)
 *  * postJson(url, params)
 *
 * 其中filter需要实现filterParams(params, url)方法
 * @see ParamFilter
 * @constructor
 */

var HttpService = function(httpClient) {
  this.client = httpClient;
  /** @private */
  this._bookService = new BookService(httpClient);
  /** @private */
  this._movieService = new MovieService(httpClient);
};

/**
 * 单例模式：获取HttpService默认容器
 * @param httpClientClass {function}  httpClient类对象
 * @param urlPrefix       {String}    url前缀
 * @param userInfo        {Object}    用户信息
 * @returns {HttpService}
 */
HttpService.$getDefaultService = function(httpClientClass, urlPrefix, baseParamsObj) {
  if(!HttpService.defaultService) {
    HttpService.defaultService = HttpService.$initService(httpClientClass, urlPrefix, baseParamsObj)
  }
  return HttpService.defaultService;
};

/**
 * 初始化并返回一个HttpService
 * @param httpClientClass {function}    httpClient类对象
 * @param urlPrefix       {String}      url前缀
 * @param userInfo        {Object}      用户信息
 * @returns               {HttpService} 创建好的HttpService对象
 */
HttpService.$initService = function(httpClientClass, urlPrefix, baseParamsObj) {
  // 生成业务参数处理规则
  var bizFilter = new BaseParamsFilter(baseParamsObj);
  // 生成httpClient对象
  var httpClient = new httpClientClass(urlPrefix, [bizFilter]);
  return new HttpService(httpClient)
};

/**
 * 设置用户信息，用户统一参数处理
 * @param baseParamsObj 通用参数
 */
HttpService.prototype.$setBaseParams = function(baseParamsObj) {
  // 如果http-client对象实现了接口
  if(this.client && this.client.$addParamsFilter) {
    this.client.$addParamsFilter(new BaseParamsFilter(baseParamsObj))
  }
};

/**
 * 豆瓣书籍信息查询相关接口集合
 * @returns {BookService} 返回用http-client实例化之后的book接口调用对象
 */
HttpService.prototype.$getBookService = function() {
  return this._bookService;
};

/**
 * 豆瓣电影信息查询相关接口集合
 * @returns {MovieService}
 */
HttpService.prototype.$getMovieService = function() {
  return this._movieService
};

module.exports = exports = HttpService;















