/**
 * @description 豆瓣图书信息请求方法集合
 * @param {Object}
 * @constructor
 */
var BookService = function(httpClient) {
  this.http = httpClient;
};

BookService.prototype.$bookInfo = function(bookId) {
  var url = '/v2/book/' + bookId;
  return this.http.$postJson(url);
};


module.exports = exports = BookService;