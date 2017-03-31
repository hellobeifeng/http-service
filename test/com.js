// test目录下的公用文件,两个作用
// 1. 用来引入所有测试文件的公共模块
// 2. 初始化单例的HttpService对象

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var should = require('chai').should();

var HttpService = require('../app');
var HttpClient = require('http-client-base');

// 全局单例
var doubanInterfaceBaseUrlPrefix = 'https://api.douban.com';
HttpService.$getDefaultService(HttpClient, doubanInterfaceBaseUrlPrefix, null);

