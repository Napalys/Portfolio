!function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : (e = e || self).TagCloud = t();
}
(this, function() {
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  function a() {
    return (a = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n, i = arguments[t];
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
      }
      return e;
    }).apply(this, arguments);
  }

  function t(t, e) {
    var n, i = Object.keys(t);
    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), i.push.apply(i, n)), i;
  }

  function r(i) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2 ? t(Object(o), !0).forEach(function(e) {
        var t, n;
        t = i, e = o[n = e], n in t ? Object.defineProperty(t, n, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }) : t[n] = e;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }
    return i;
  }

  var o = function() {
    function o() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document.body,
        t = 1 < arguments.length ? arguments[1] : void 0, n = 2 < arguments.length ? arguments[2] : void 0;
      !function(e) {
        if (!(e instanceof o)) throw new TypeError('Cannot call a class as a function');
      }(this);
      var i = this;
      if (!e || 1 !== e.nodeType) return new Error('Incorrect element type');
      i.$container = e, i.texts = t || [], i.config = r(r({}, o._defaultConfig), n || {}), i.radius = i.config.radius, i.depth = 2 * i.radius, i.size = 1.5 * i.radius, i.maxSpeed = o._getMaxSpeed(i.config.maxSpeed), i.initSpeed = o._getInitSpeed(i.config.initSpeed), i.direction = i.config.direction, i.keep = i.config.keep, i.paused = !1, i._createElment(), i._init(), o.list.push({
        el: i.$el,
        container: e,
        instance: i,
      });
    }

    var e, t, n;
    return e = o, n = [{
      key: '_on', value: function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent('on'.concat(t), n) : e['on'.concat(t)] = n;
      },
    }], (t = [{
      key: '_createElment', value: function() {
        var n = this, i = document.createElement('div');
        i.className = n.config.containerClass, n.config.useContainerInlineStyles && (i.style.position = 'relative', i.style.width = ''.concat(2 * n.radius, 'px'), i.style.height = ''.concat(2 * n.radius, 'px')), n.items = [], n.texts.forEach(function(e, t) {
          t = n._createTextItem(e, t);
          i.appendChild(t.el), n.items.push(t);
        }), n.$container.appendChild(i), n.$el = i;
      },
    }, {
      key: '_createTextItem', value: function(itemData) {
        var zIndex = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, self = this,
          imgElement = document.createElement('img');
        imgElement.className = self.config.itemClass;
        if (self.config.useItemInlineStyles) {
          imgElement.style.position = 'absolute';
          imgElement.className = 'neonIcon neonIconCpp';
          imgElement.alt = '';
          imgElement.style.top = '50%';
          imgElement.style.left = '50%';
          imgElement.style.zIndex = zIndex + 1;
          if (window.innerWidth <= 1200) {
            imgElement.style.maxWidth = '125px';
          } else {
            imgElement.style.maxWidth = '150px';
          }
          imgElement.style.height = 'auto';
          imgElement.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
        }

        imgElement.src = itemData.url;
        imgElement.alt = itemData.alt;

        return r({ el: imgElement }, self._computePosition(zIndex));
      }
      ,
    }, {
      key: '_computePosition', value: function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = this.texts.length;
        t && (e = Math.floor(Math.random() * (n + 1)));
        e = Math.acos((2 * e + 1) / n - 1), n = Math.sqrt((n + 1) * Math.PI) * e;
        return {
          x: this.size * Math.cos(n) * Math.sin(e) / 2,
          y: this.size * Math.sin(n) * Math.sin(e) / 2,
          z: this.size * Math.cos(e) / 2,
        };
      },
    }, {
      key: '_requestInterval', value: function(n, i) {
        var o = window.requestAnimationFrame, a = (new Date).getTime(), r = {};
        return r.value = o(function e() {
          r.value = o(e);
          var t = (new Date).getTime();
          i <= t - a && (n.call(), a = (new Date).getTime());
        }), r;
      },
    }, {
      key: '_init', value: function() {
        var n = this;
        n.active = !1, n.mouseX0 = n.initSpeed * Math.sin(n.direction * (Math.PI / 180)), n.mouseY0 = -n.initSpeed * Math.cos(n.direction * (Math.PI / 180)), n.mouseX = n.mouseX0, n.mouseY = n.mouseY0, o._on(n.$el, 'mouseover', function() {
          n.active = !0;
        }), o._on(n.$el, 'mouseout', function() {
          n.active = !1;
        }), o._on(n.keep ? window : n.$el, 'mousemove', function(e) {
          e = e || window.event;
          var t = n.$el.getBoundingClientRect();
          n.mouseX = (e.clientX - (t.left + t.width / 2)) / 5, n.mouseY = (e.clientY - (t.top + t.height / 2)) / 5;
        }), n._next(), n.interval = n._requestInterval(function() {
          n._next.call(n);
        }, 10);
      },
    }, {
      key: '_next', value: function() {
        var e, t, n, a, r = this;
        r.paused || (r.keep || r.active || (r.mouseX = Math.abs(r.mouseX - r.mouseX0) < 1 ? r.mouseX0 : (r.mouseX + r.mouseX0) / 2, r.mouseY = Math.abs(r.mouseY - r.mouseY0) < 1 ? r.mouseY0 : (r.mouseY + r.mouseY0) / 2), e = -(Math.min(Math.max(-r.mouseY, -r.size), r.size) / r.radius) * r.maxSpeed, t = Math.min(Math.max(-r.mouseX, -r.size), r.size) / r.radius * r.maxSpeed, Math.abs(e) <= .01 && Math.abs(t) <= .01 || (n = Math.PI / 180, a = [Math.sin(e * n), Math.cos(e * n), Math.sin(t * n), Math.cos(t * n)], r.items.forEach(function(e) {
          var t = e.x, n = e.y * a[1] + e.z * -a[0], i = e.y * a[0] + e.z * a[1], o = t * a[3] + i * a[2], n = n,
            i = i * a[3] - t * a[2], t = 2 * r.depth / (2 * r.depth + i);
          e.x = o, e.y = n, e.z = i, e.scale = t.toFixed(3);
          o = (1 < (o = t * t - .25) ? 1 : o).toFixed(3), n = e.el, i = (e.x - n.offsetWidth / 2).toFixed(2), t = (e.y - n.offsetHeight / 2).toFixed(2), e = 'translate3d('.concat(i, 'px, ').concat(t, 'px, 0) scale(').concat(e.scale, ')');
          n.style.WebkitTransform = e, n.style.MozTransform = e, n.style.OTransform = e, n.style.transform = e, n.style.filter = 'alpha(opacity='.concat(100 * o, ')'), n.style.opacity = o;
        })));
        let sortedItems = [...this.items].sort((a, b) => b.z - a.z);
        sortedItems.forEach((item, index) => {
          item.el.style.zIndex = index + 1;  // or any base value you prefer
        });
      },
    }, {
      key: 'update', value: function(e) {
        var i = this;
        i.texts = e || [], i.texts.forEach(function(e, t) {
          var n = i.items[t];
          n || (a(n = i._createTextItem(e, t), i._computePosition(t, !0)), i.$el.appendChild(n.el), i.items.push(n)), n.el.innerText = e;
        });
        var t = i.texts.length, e = i.items.length;
        t < e && i.items.splice(t, e - t).forEach(function(e) {
          i.$el.removeChild(e.el);
        });
      },
    }, {
      key: 'destroy', value: function() {
        var t = this;
        t.interval = null;
        var e = o.list.findIndex(function(e) {
          return e.el === t.$el;
        });
        -1 !== e && o.list.splice(e, 1), t.$container && t.$el && t.$container.removeChild(t.$el);
      },
    }, {
      key: 'pause', value: function() {
        this.paused = !0;
      },
    }, {
      key: 'resume', value: function() {
        this.paused = !1;
      },
    }]) && i(e.prototype, t), n && i(e, n), o;
  }();
  o.list = [], o._defaultConfig = {
    radius: 100,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: !0,
    useContainerInlineStyles: !0,
    useItemInlineStyles: !0,
    containerClass: 'tagcloud',
    itemClass: 'tagcloud--item',
  }, o._getMaxSpeed = function(e) {
    return { slow: .5, normal: 1, fast: 2 }[e] || 1;
  }, o._getInitSpeed = function(e) {
    return { slow: 16, normal: 32, fast: 80 }[e] || 32;
  };
  return function(e, t, n) {
    'string' == typeof e && (e = document.querySelectorAll(e)), e.forEach || (e = [e]);
    var i = [];
    return e.forEach(function(e) {
      e && i.push(new o(e, t, n));
    }), i.length <= 1 ? i[0] : i;
  };
});
