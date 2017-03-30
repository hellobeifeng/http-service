/**
 * @description 豆瓣电影信息请求方法集合
 * @param {Object}
 * @constructor
 */
var MovieService = function(httpClient) {
  this.http = httpClient;
};

MovieService.prototype.$movieInfo = function(params) {
  var url = '/user/openAccount';
  return this.http.$postJson(url, params);
};


module.exports = exports = MovieService;