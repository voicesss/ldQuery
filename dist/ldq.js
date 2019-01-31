// Generated by LiveScript 1.3.1
var ld$obj, ld$, k, ref$, v, slice$ = [].slice;
if (!(typeof ld$ != 'undefined' && ld$ !== null)) {
  ld$obj = function(dom){
    return import$(dom, ld$obj.prototype);
  };
  ld$ = function(it){
    return new ld$obj(it);
  };
  ld$obj.prototype = {
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
      return this.insertBefore(n, s.nextSibling);
    }
  };
  for (k in ref$ = ld$obj.prototype) {
    v = ref$[k];
    fn$(k, v);
  }
  ld$.fetch = function(u, o, opt){
    opt == null && (opt = {});
    return fetch(u, o).then(function(it){
      var e, ref$;
      if (!(it && it.ok)) {
        e = (ref$ = new Error(), ref$.data = it, ref$);
        throw e;
      } else if (opt.type != null) {
        return it[opt.type]();
      } else {
        return it;
      }
    });
  };
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function fn$(k, v){
  return ld$[k] = function(z){
    var args;
    args = slice$.call(arguments, 1);
    return v.apply(z, args);
  };
}
