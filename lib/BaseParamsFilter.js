/**
 * http请求统一参数处理类
 * @param params
 * @constructor
 */
var BaseParamsFilter = function(baseParams) {
  this.baseParams = baseParams
};

/**
 * 向参数对象中添加统一参数
 * @param params
 * @returns {Object} 过滤后的入参
 */
BaseParamsFilter.prototype.filterParams = function(params) {

  params = params || {};
  params.version = '1.0.0';

  if(this.baseParams) {
    if (this.baseParams.uid) {
      params.uid = this.baseParams.uid;
    }

    if (this.baseParams.token) {
      params.token = this.baseParams.token;
    }

  }
  return params;
};

module.exports = exports = BaseParamsFilter;