var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var should = require('chai').should();

var HttpService = require('../app');
var HttpClient = require('http-client-base');

var doubanInterfaceBaseUrlPrefix = 'https://api.douban.com';
var service = HttpService.$getDefaultService(HttpClient, doubanInterfaceBaseUrlPrefix, null);

