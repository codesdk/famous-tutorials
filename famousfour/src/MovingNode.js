var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Transitionable = require('famous/transitions/Transitionable');
var Size = require('famous/components/Size');
var Node = require('famous/core/Node');
var FIRST_X_POSITION = 100;
var Y_POSITION = 200;
function CustomNode(bgUrl, bgColor, xpos, ypos, width, height) {
  Node.call(this);
  this.setSizeMode('absolute', 'absolute')
          .setAbsoluteSize(width, height)
          .setPosition(xpos,ypos);
  this.nodeDomElement = new DOMElement(this);
  this.nodeDomElement.setProperty('backgroundImage', bgUrl);
  this.nodeDomElement.setProperty('zIndex', '2');
}
CustomNode.prototype = Object.create(Node.prototype);
CustomNode.prototype.constructor = CustomNode;
module.exports = CustomNode;
