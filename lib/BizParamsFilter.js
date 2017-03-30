/**
 * http请求统一参数处理类
 * @param userInfo
 * @constructor
 */
var ParamsFilter = function(userInfo) {
  this.userInfo = userInfo;
};

/**
 *
 * @param params  {Object} 过滤前的入参
 * @param url     {String} 请求url
 * @returns       {Object} 过滤后的入参
 */
ParamsFilter.prototype.filterParams = function(params, url) {
  params = params || {};
  params.client = 'website';
  //params.version = '5.5.0';//添加缺失的version参数

  if(this.userInfo) {
    if (this.userInfo.userId) {
      params.uid = this.userInfo.userId;
    }
    if (this.userInfo.token) {
      params.token = this.userInfo.token;
    }
    if (this.userInfo.branchNo) {
      params.branchNo = this.userInfo.branchNo;
    }
    if (this.userInfo.fundAccount) {
      params.fundAccount = this.userInfo.fundAccount;
    }
    if (this.userInfo.platformId) {
      params.platformId = this.userInfo.platformId;
    }
    if (this.userInfo.appVersion) {
      params.version = this.userInfo.appVersion;
    } else {
      params.version = this.userInfo.defaultVersion || '5.12.0';
    }
  }

  return params;
};

module.exports = exports = ParamsFilter;