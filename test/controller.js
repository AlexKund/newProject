'use strict';

describe('KarmaCtrl', function() {
  beforeEach(module('scotchTodo.controller'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});