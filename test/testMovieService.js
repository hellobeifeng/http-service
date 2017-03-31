var HttpService = require('../app');
var testIndex = require('./com');

var movieService = HttpService.$getDefaultService().$getMovieService();

// describe('测试http基本请求:请求豆瓣图书api', function(done) {
//   this.timeout(5000);//设置超时时间为5s
//   it('should return 200 and parse json text to object', function() {
//     return movieService.$bookInfo('1220562').should.eventually.satisfy(function(obj) {
//       return obj;
//     }).notify(done)
//   })
// });