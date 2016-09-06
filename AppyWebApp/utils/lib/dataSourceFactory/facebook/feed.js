/**
 * Created by adam on 06/09/2016.
 */

var facebookUtils = require("../../socialMediaUtils/facebookUtils");

var FacebookPageDataSource  = function FacebookPageDataSource(options) {
    this.options = options;
};

FacebookPageDataSource.prototype.fetchData = function () {
    console.log("Start Fetching Data From Facebook Page");
    console.log(this.options);
};

module.exports = FacebookPageDataSource;