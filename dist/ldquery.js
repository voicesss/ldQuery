// Generated by LiveScript 1.3.1
import$(HTMLElement.prototype, {
  find: function(s, n){
    var ret;
    if (n === 0) {
      return this.querySelector(s);
    }
    ret = Array.from(this.querySelectorAll(s));
    if (n) {
      return ret[n];
    } else {
      return ret;
    }
  },
  index: function(){
    return Array.from(this.parentNode.childNodes).indexOf(this);
  },
  child: function(){
    return Array.from(this.childNodes);
  },
  parent: function(s, e){
    var n;
    e == null && (e = document);
    n = this;
    while (n && n !== e) {
      n = n.parentNode;
    }
    if (n !== e) {
      return null;
    }
    n = this;
    while (n && n !== e && !n.matches(s)) {
      n = n.parentNode;
    }
    if (n === e && !e.matches(s)) {
      return null;
    }
    return n;
  },
  attr: function(n, v){
    if (v == null) {
      return this.getAttribute(n);
    } else {
      return this.setAttribute(n, v);
    }
  },
  on: function(n, cb){
    return this.addEventListener(n, cb);
  },
  remove: function(){
    return this.parentNode.removeChild(this);
  },
  insertAfter: function(n, s){
    return s.parentNode.insertBefore(n, s.nextSibling);
  }
});
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}