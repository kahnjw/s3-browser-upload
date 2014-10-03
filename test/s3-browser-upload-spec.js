var S3Upload = require('../src/index');
var chai = require('chai');


chai.should();

describe('s3 upload', function() {
  var fileEl;

  before(function() {
    fileEl = document.createElement('input');
    fileEl.setAttribute('type', 'file');
  });

  it('is newable', function() {
    var s3Upload = new S3Upload({
      el: fileEl
    });

    s3Upload.should.be.an('object');
  });

  it('throws an error when no DOM node given', function() {
    var init = function() {
      return new S3Upload();
    };

    init.should.throw(Error);
  });
});
