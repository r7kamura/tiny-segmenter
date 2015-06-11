var TinySegmenter = require('../src/tiny-segmenter');
var assert = require('assert');

describe('TinySegmenter', function () {
  var tinySegmenter = new TinySegmenter()

  describe('.segment', function () {
    it('divides a given sentence into an Array of String', function () {
      assert.deepEqual(
        tinySegmenter.segment('あのイーハトーヴォのすきとおった風'),
        [
          'あ',
          'の',
          'イーハトーヴォ',
          'の',
          'すき',
          'と',
          'おっ',
          'た',
          '風'
        ]
      );
    });
  });
});
