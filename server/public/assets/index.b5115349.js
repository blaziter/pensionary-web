function Mv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Iv(e) {
  var t = e.default;
  if (typeof t == 'function') {
    var n = function () {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var ja = {},
  Ks = { exports: {} },
  ot = {},
  h = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xl = Symbol.for('react.element'),
  Fv = Symbol.for('react.portal'),
  bv = Symbol.for('react.fragment'),
  Av = Symbol.for('react.strict_mode'),
  $v = Symbol.for('react.profiler'),
  jv = Symbol.for('react.provider'),
  zv = Symbol.for('react.context'),
  Uv = Symbol.for('react.forward_ref'),
  Bv = Symbol.for('react.suspense'),
  Hv = Symbol.for('react.memo'),
  Vv = Symbol.for('react.lazy'),
  Rc = Symbol.iterator;
function Wv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Rc && e[Rc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Sf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cf = Object.assign,
  kf = {};
function zr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || Sf);
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Rf() {}
Rf.prototype = zr.prototype;
function Qs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kf),
    (this.updater = n || Sf);
}
var Gs = (Qs.prototype = new Rf());
Gs.constructor = Qs;
Cf(Gs, zr.prototype);
Gs.isPureReactComponent = !0;
var Pc = Array.isArray,
  Pf = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  Df = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Pf.call(t, r) && !Df.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Xl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ys.current,
  };
}
function Kv(e, t) {
  return {
    $$typeof: Xl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xs(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Xl;
}
function Qv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Dc = /\/+/g;
function qi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Qv('' + e.key)
    : t.toString(36);
}
function Oo(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Xl:
          case Fv:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + qi(i, 0) : r),
      Pc(l)
        ? ((n = ''),
          e != null && (n = e.replace(Dc, '$&/') + '/'),
          Oo(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Xs(l) &&
            (l = Kv(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Dc, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Pc(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + qi(o, s);
      i += Oo(o, t, n, u, l);
    }
  else if (((u = Wv(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + qi(o, s++)), (i += Oo(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function so(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Oo(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Gv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  To = { transition: null },
  Yv = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: To,
    ReactCurrentOwner: Ys,
  };
W.Children = {
  map: so,
  forEach: function (e, t, n) {
    so(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      so(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      so(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xs(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
W.Component = zr;
W.Fragment = bv;
W.Profiler = $v;
W.PureComponent = Qs;
W.StrictMode = Av;
W.Suspense = Bv;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Cf({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ys.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Pf.call(t, u) &&
        !Df.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Xl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: zv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jv, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Of;
W.createFactory = function (e) {
  var t = Of.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Uv, render: e };
};
W.isValidElement = Xs;
W.lazy = function (e) {
  return { $$typeof: Vv, _payload: { _status: -1, _result: e }, _init: Gv };
};
W.memo = function (e, t) {
  return { $$typeof: Hv, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = To.transition;
  To.transition = {};
  try {
    e();
  } finally {
    To.transition = t;
  }
};
W.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
W.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Be.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
W.useId = function () {
  return Be.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Be.current.useRef(e);
};
W.useState = function (e) {
  return Be.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Be.current.useTransition();
};
W.version = '18.2.0';
(function (e) {
  e.exports = W;
})(h);
const ze = Nf(h.exports),
  za = Mv({ __proto__: null, default: ze }, [h.exports]);
var Tf = { exports: {} },
  Lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, j) {
    var U = L.length;
    L.push(j);
    e: for (; 0 < U; ) {
      var V = (U - 1) >>> 1,
        ne = L[V];
      if (0 < l(ne, j)) (L[V] = j), (L[U] = ne), (U = V);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var j = L[0],
      U = L.pop();
    if (U !== j) {
      L[0] = U;
      e: for (var V = 0, ne = L.length, _t = ne >>> 1; V < _t; ) {
        var Ve = 2 * (V + 1) - 1,
          he = L[Ve],
          Ne = Ve + 1,
          st = L[Ne];
        if (0 > l(he, U))
          Ne < ne && 0 > l(st, he)
            ? ((L[V] = st), (L[Ne] = U), (V = Ne))
            : ((L[V] = he), (L[Ve] = U), (V = Ve));
        else if (Ne < ne && 0 > l(st, U)) (L[V] = st), (L[Ne] = U), (V = Ne);
        else break e;
      }
    }
    return j;
  }
  function l(L, j) {
    var U = L.sortIndex - j.sortIndex;
    return U !== 0 ? U : L.id - j.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    c = [],
    d = 1,
    p = null,
    f = 3,
    m = !1,
    x = !1,
    y = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(L) {
    for (var j = n(c); j !== null; ) {
      if (j.callback === null) r(c);
      else if (j.startTime <= L)
        r(c), (j.sortIndex = j.expirationTime), t(u, j);
      else break;
      j = n(c);
    }
  }
  function N(L) {
    if (((y = !1), E(L), !x))
      if (n(u) !== null) (x = !0), yt(R);
      else {
        var j = n(c);
        j !== null && Ze(N, j.startTime - L);
      }
  }
  function R(L, j) {
    (x = !1), y && ((y = !1), v(_), (_ = -1)), (m = !0);
    var U = f;
    try {
      for (
        E(j), p = n(u);
        p !== null && (!(p.expirationTime > j) || (L && !xe()));

      ) {
        var V = p.callback;
        if (typeof V == 'function') {
          (p.callback = null), (f = p.priorityLevel);
          var ne = V(p.expirationTime <= j);
          (j = e.unstable_now()),
            typeof ne == 'function' ? (p.callback = ne) : p === n(u) && r(u),
            E(j);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var _t = !0;
      else {
        var Ve = n(c);
        Ve !== null && Ze(N, Ve.startTime - j), (_t = !1);
      }
      return _t;
    } finally {
      (p = null), (f = U), (m = !1);
    }
  }
  var T = !1,
    O = null,
    _ = -1,
    I = 5,
    $ = -1;
  function xe() {
    return !(e.unstable_now() - $ < I);
  }
  function Je() {
    if (O !== null) {
      var L = e.unstable_now();
      $ = L;
      var j = !0;
      try {
        j = O(!0, L);
      } finally {
        j ? $e() : ((T = !1), (O = null));
      }
    } else T = !1;
  }
  var $e;
  if (typeof g == 'function')
    $e = function () {
      g(Je);
    };
  else if (typeof MessageChannel < 'u') {
    var te = new MessageChannel(),
      Z = te.port2;
    (te.port1.onmessage = Je),
      ($e = function () {
        Z.postMessage(null);
      });
  } else
    $e = function () {
      S(Je, 0);
    };
  function yt(L) {
    (O = L), T || ((T = !0), $e());
  }
  function Ze(L, j) {
    _ = S(function () {
      L(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), yt(R));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (I = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var U = f;
      f = j;
      try {
        return L();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, j) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var U = f;
      f = L;
      try {
        return j();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (L, j, U) {
      var V = e.unstable_now();
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? V + U : V))
          : (U = V),
        L)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = U + ne),
        (L = {
          id: d++,
          callback: j,
          priorityLevel: L,
          startTime: U,
          expirationTime: ne,
          sortIndex: -1,
        }),
        U > V
          ? ((L.sortIndex = U),
            t(c, L),
            n(u) === null &&
              L === n(c) &&
              (y ? (v(_), (_ = -1)) : (y = !0), Ze(N, U - V)))
          : ((L.sortIndex = ne), t(u, L), x || m || ((x = !0), yt(R))),
        L
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (L) {
      var j = f;
      return function () {
        var U = f;
        f = j;
        try {
          return L.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(Lf);
(function (e) {
  e.exports = Lf;
})(Tf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _f = h.exports,
  rt = Tf.exports;
function P(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Mf = new Set(),
  Ol = {};
function qn(e, t) {
  _r(e, t), _r(e + 'Capture', t);
}
function _r(e, t) {
  for (Ol[e] = t, e = 0; e < t.length; e++) Mf.add(t[e]);
}
var Zt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ua = Object.prototype.hasOwnProperty,
  Xv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oc = {},
  Tc = {};
function Jv(e) {
  return Ua.call(Tc, e)
    ? !0
    : Ua.call(Oc, e)
    ? !1
    : Xv.test(e)
    ? (Tc[e] = !0)
    : ((Oc[e] = !0), !1);
}
function Zv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function qv(e, t, n, r) {
  if (t === null || typeof t > 'u' || Zv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Oe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Oe[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Oe[e] = new He(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Oe[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Oe[e] = new He(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Oe[e] = new He(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Oe[e] = new He(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Oe[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function Zs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    Oe[t] = new He(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    Oe[t] = new He(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Js, Zs);
  Oe[t] = new He(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Oe[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new He(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Oe[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qs(e, t, n, r) {
  var l = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (qv(t, n, l, r) && (n = null),
    r || l === null
      ? Jv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var on = _f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  uo = Symbol.for('react.element'),
  cr = Symbol.for('react.portal'),
  dr = Symbol.for('react.fragment'),
  eu = Symbol.for('react.strict_mode'),
  Ba = Symbol.for('react.profiler'),
  If = Symbol.for('react.provider'),
  Ff = Symbol.for('react.context'),
  tu = Symbol.for('react.forward_ref'),
  Ha = Symbol.for('react.suspense'),
  Va = Symbol.for('react.suspense_list'),
  nu = Symbol.for('react.memo'),
  pn = Symbol.for('react.lazy'),
  bf = Symbol.for('react.offscreen'),
  Lc = Symbol.iterator;
function Zr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Lc && e[Lc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  ea;
function fl(e) {
  if (ea === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ea = (t && t[1]) || '';
    }
  return (
    `
` +
    ea +
    e
  );
}
var ta = !1;
function na(e, t) {
  if (!e || ta) return '';
  ta = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (ta = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? fl(e) : '';
}
function e1(e) {
  switch (e.tag) {
    case 5:
      return fl(e.type);
    case 16:
      return fl('Lazy');
    case 13:
      return fl('Suspense');
    case 19:
      return fl('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = na(e.type, !1)), e;
    case 11:
      return (e = na(e.type.render, !1)), e;
    case 1:
      return (e = na(e.type, !0)), e;
    default:
      return '';
  }
}
function Wa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case dr:
      return 'Fragment';
    case cr:
      return 'Portal';
    case Ba:
      return 'Profiler';
    case eu:
      return 'StrictMode';
    case Ha:
      return 'Suspense';
    case Va:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ff:
        return (e.displayName || 'Context') + '.Consumer';
      case If:
        return (e._context.displayName || 'Context') + '.Provider';
      case tu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case nu:
        return (
          (t = e.displayName || null), t !== null ? t : Wa(e.type) || 'Memo'
        );
      case pn:
        (t = e._payload), (e = e._init);
        try {
          return Wa(e(t));
        } catch {}
    }
  return null;
}
function t1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Wa(t);
    case 8:
      return t === eu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Af(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function n1(e) {
  var t = Af(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function co(e) {
  e._valueTracker || (e._valueTracker = n1(e));
}
function $f(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Af(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ka(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function _c(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function jf(e, t) {
  (t = t.checked), t != null && qs(e, 'checked', t, !1);
}
function Qa(e, t) {
  jf(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ga(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ga(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ga(e, t, n) {
  (t !== 'number' || Vo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var pl = Array.isArray;
function kr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + On(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ya(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ic(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (pl(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function zf(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Fc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Uf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Uf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var fo,
  Bf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        fo = fo || document.createElement('div'),
          fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Tl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  r1 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(xl).forEach(function (e) {
  r1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xl[t] = xl[e]);
  });
});
function Hf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xl.hasOwnProperty(e) && xl[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Vf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Hf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var l1 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Ja(e, t) {
  if (t) {
    if (l1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62));
  }
}
function Za(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var qa = null;
function ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var es = null,
  Rr = null,
  Pr = null;
function bc(e) {
  if ((e = ql(e))) {
    if (typeof es != 'function') throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Pi(t)), es(e.stateNode, e.type, t));
  }
}
function Wf(e) {
  Rr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Rr = e);
}
function Kf() {
  if (Rr) {
    var e = Rr,
      t = Pr;
    if (((Pr = Rr = null), bc(e), t)) for (e = 0; e < t.length; e++) bc(t[e]);
  }
}
function Qf(e, t) {
  return e(t);
}
function Gf() {}
var ra = !1;
function Yf(e, t, n) {
  if (ra) return e(t, n);
  ra = !0;
  try {
    return Qf(e, t, n);
  } finally {
    (ra = !1), (Rr !== null || Pr !== null) && (Gf(), Kf());
  }
}
function Ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n));
  return n;
}
var ts = !1;
if (Zt)
  try {
    var qr = {};
    Object.defineProperty(qr, 'passive', {
      get: function () {
        ts = !0;
      },
    }),
      window.addEventListener('test', qr, qr),
      window.removeEventListener('test', qr, qr);
  } catch {
    ts = !1;
  }
function o1(e, t, n, r, l, o, i, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var El = !1,
  Wo = null,
  Ko = !1,
  ns = null,
  i1 = {
    onError: function (e) {
      (El = !0), (Wo = e);
    },
  };
function a1(e, t, n, r, l, o, i, s, u) {
  (El = !1), (Wo = null), o1.apply(i1, arguments);
}
function s1(e, t, n, r, l, o, i, s, u) {
  if ((a1.apply(this, arguments), El)) {
    if (El) {
      var c = Wo;
      (El = !1), (Wo = null);
    } else throw Error(P(198));
    Ko || ((Ko = !0), (ns = c));
  }
}
function er(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ac(e) {
  if (er(e) !== e) throw Error(P(188));
}
function u1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ac(l), e;
        if (o === r) return Ac(l), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Jf(e) {
  return (e = u1(e)), e !== null ? Zf(e) : null;
}
function Zf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qf = rt.unstable_scheduleCallback,
  $c = rt.unstable_cancelCallback,
  c1 = rt.unstable_shouldYield,
  d1 = rt.unstable_requestPaint,
  ge = rt.unstable_now,
  f1 = rt.unstable_getCurrentPriorityLevel,
  lu = rt.unstable_ImmediatePriority,
  ep = rt.unstable_UserBlockingPriority,
  Qo = rt.unstable_NormalPriority,
  p1 = rt.unstable_LowPriority,
  tp = rt.unstable_IdlePriority,
  Si = null,
  At = null;
function h1(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(Si, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : g1,
  m1 = Math.log,
  v1 = Math.LN2;
function g1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((m1(e) / v1) | 0)) | 0;
}
var po = 64,
  ho = 4194304;
function hl(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = hl(s)) : ((o &= i), o !== 0 && (r = hl(o)));
  } else (i = n & ~l), i !== 0 ? (r = hl(i)) : o !== 0 && (r = hl(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function y1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function x1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - kt(o),
      s = 1 << i,
      u = l[i];
    u === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (l[i] = y1(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function rs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function np() {
  var e = po;
  return (po <<= 1), (po & 4194240) === 0 && (po = 64), e;
}
function la(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function E1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - kt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ou(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function rp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var lp,
  iu,
  op,
  ip,
  ap,
  ls = !1,
  mo = [],
  En = null,
  wn = null,
  Nn = null,
  _l = new Map(),
  Ml = new Map(),
  vn = [],
  w1 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function jc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      En = null;
      break;
    case 'dragenter':
    case 'dragleave':
      wn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Nn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      _l.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ml.delete(t.pointerId);
  }
}
function el(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ql(t)), t !== null && iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function N1(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (En = el(En, e, t, n, r, l)), !0;
    case 'dragenter':
      return (wn = el(wn, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Nn = el(Nn, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return _l.set(o, el(_l.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Ml.set(o, el(Ml.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function sp(e) {
  var t = Un(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xf(n)), t !== null)) {
          (e.blockedOn = t),
            ap(e.priority, function () {
              op(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qa = r), n.target.dispatchEvent(r), (qa = null);
    } else return (t = ql(n)), t !== null && iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zc(e, t, n) {
  Lo(e) && n.delete(t);
}
function S1() {
  (ls = !1),
    En !== null && Lo(En) && (En = null),
    wn !== null && Lo(wn) && (wn = null),
    Nn !== null && Lo(Nn) && (Nn = null),
    _l.forEach(zc),
    Ml.forEach(zc);
}
function tl(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ls ||
      ((ls = !0),
      rt.unstable_scheduleCallback(rt.unstable_NormalPriority, S1)));
}
function Il(e) {
  function t(l) {
    return tl(l, e);
  }
  if (0 < mo.length) {
    tl(mo[0], e);
    for (var n = 1; n < mo.length; n++) {
      var r = mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && tl(En, e),
      wn !== null && tl(wn, e),
      Nn !== null && tl(Nn, e),
      _l.forEach(t),
      Ml.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    sp(n), n.blockedOn === null && vn.shift();
}
var Dr = on.ReactCurrentBatchConfig,
  Yo = !0;
function C1(e, t, n, r) {
  var l = J,
    o = Dr.transition;
  Dr.transition = null;
  try {
    (J = 1), au(e, t, n, r);
  } finally {
    (J = l), (Dr.transition = o);
  }
}
function k1(e, t, n, r) {
  var l = J,
    o = Dr.transition;
  Dr.transition = null;
  try {
    (J = 4), au(e, t, n, r);
  } finally {
    (J = l), (Dr.transition = o);
  }
}
function au(e, t, n, r) {
  if (Yo) {
    var l = os(e, t, n, r);
    if (l === null) ha(e, t, r, Xo, n), jc(e, r);
    else if (N1(l, e, t, n, r)) r.stopPropagation();
    else if ((jc(e, r), t & 4 && -1 < w1.indexOf(e))) {
      for (; l !== null; ) {
        var o = ql(l);
        if (
          (o !== null && lp(o),
          (o = os(e, t, n, r)),
          o === null && ha(e, t, r, Xo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ha(e, t, r, null, n);
  }
}
var Xo = null;
function os(e, t, n, r) {
  if (((Xo = null), (e = ru(r)), (e = Un(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xo = e), null;
}
function up(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (f1()) {
        case lu:
          return 1;
        case ep:
          return 4;
        case Qo:
        case p1:
          return 16;
        case tp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  su = null,
  _o = null;
function cp() {
  if (_o) return _o;
  var e,
    t = su,
    n = t.length,
    r,
    l = 'value' in yn ? yn.value : yn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (_o = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Mo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vo() {
  return !0;
}
function Uc() {
  return !1;
}
function it(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vo
        : Uc),
      (this.isPropagationStopped = Uc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo));
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = it(Ur),
  Zl = pe({}, Ur, { view: 0, detail: 0 }),
  R1 = it(Zl),
  oa,
  ia,
  nl,
  Ci = pe({}, Zl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: cu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== nl &&
            (nl && e.type === 'mousemove'
              ? ((oa = e.screenX - nl.screenX), (ia = e.screenY - nl.screenY))
              : (ia = oa = 0),
            (nl = e)),
          oa);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ia;
    },
  }),
  Bc = it(Ci),
  P1 = pe({}, Ci, { dataTransfer: 0 }),
  D1 = it(P1),
  O1 = pe({}, Zl, { relatedTarget: 0 }),
  aa = it(O1),
  T1 = pe({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L1 = it(T1),
  _1 = pe({}, Ur, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  M1 = it(_1),
  I1 = pe({}, Ur, { data: 0 }),
  Hc = it(I1),
  F1 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  b1 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  A1 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function $1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = A1[e]) ? !!t[e] : !1;
}
function cu() {
  return $1;
}
var j1 = pe({}, Zl, {
    key: function (e) {
      if (e.key) {
        var t = F1[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Mo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? b1[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cu,
    charCode: function (e) {
      return e.type === 'keypress' ? Mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Mo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  z1 = it(j1),
  U1 = pe({}, Ci, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vc = it(U1),
  B1 = pe({}, Zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cu,
  }),
  H1 = it(B1),
  V1 = pe({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  W1 = it(V1),
  K1 = pe({}, Ci, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Q1 = it(K1),
  G1 = [9, 13, 27, 32],
  du = Zt && 'CompositionEvent' in window,
  wl = null;
Zt && 'documentMode' in document && (wl = document.documentMode);
var Y1 = Zt && 'TextEvent' in window && !wl,
  dp = Zt && (!du || (wl && 8 < wl && 11 >= wl)),
  Wc = String.fromCharCode(32),
  Kc = !1;
function fp(e, t) {
  switch (e) {
    case 'keyup':
      return G1.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function pp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var fr = !1;
function X1(e, t) {
  switch (e) {
    case 'compositionend':
      return pp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Kc = !0), Wc);
    case 'textInput':
      return (e = t.data), e === Wc && Kc ? null : e;
    default:
      return null;
  }
}
function J1(e, t) {
  if (fr)
    return e === 'compositionend' || (!du && fp(e, t))
      ? ((e = cp()), (_o = su = yn = null), (fr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return dp && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Z1 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Z1[e.type] : t === 'textarea';
}
function hp(e, t, n, r) {
  Wf(r),
    (t = Jo(t, 'onChange')),
    0 < t.length &&
      ((n = new uu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nl = null,
  Fl = null;
function q1(e) {
  kp(e, 0);
}
function ki(e) {
  var t = mr(e);
  if ($f(t)) return e;
}
function eg(e, t) {
  if (e === 'change') return t;
}
var mp = !1;
if (Zt) {
  var sa;
  if (Zt) {
    var ua = 'oninput' in document;
    if (!ua) {
      var Gc = document.createElement('div');
      Gc.setAttribute('oninput', 'return;'),
        (ua = typeof Gc.oninput == 'function');
    }
    sa = ua;
  } else sa = !1;
  mp = sa && (!document.documentMode || 9 < document.documentMode);
}
function Yc() {
  Nl && (Nl.detachEvent('onpropertychange', vp), (Fl = Nl = null));
}
function vp(e) {
  if (e.propertyName === 'value' && ki(Fl)) {
    var t = [];
    hp(t, Fl, e, ru(e)), Yf(q1, t);
  }
}
function tg(e, t, n) {
  e === 'focusin'
    ? (Yc(), (Nl = t), (Fl = n), Nl.attachEvent('onpropertychange', vp))
    : e === 'focusout' && Yc();
}
function ng(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ki(Fl);
}
function rg(e, t) {
  if (e === 'click') return ki(t);
}
function lg(e, t) {
  if (e === 'input' || e === 'change') return ki(t);
}
function og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pt = typeof Object.is == 'function' ? Object.is : og;
function bl(e, t) {
  if (Pt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ua.call(t, l) || !Pt(e[l], t[l])) return !1;
  }
  return !0;
}
function Xc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jc(e, t) {
  var n = Xc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xc(n);
  }
}
function gp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yp() {
  for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vo(e.document);
  }
  return t;
}
function fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function ig(e) {
  var t = yp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Jc(n, o));
        var i = Jc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ag = Zt && 'documentMode' in document && 11 >= document.documentMode,
  pr = null,
  is = null,
  Sl = null,
  as = !1;
function Zc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  as ||
    pr == null ||
    pr !== Vo(r) ||
    ((r = pr),
    'selectionStart' in r && fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Sl && bl(Sl, r)) ||
      ((Sl = r),
      (r = Jo(is, 'onSelect')),
      0 < r.length &&
        ((t = new uu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = pr))));
}
function go(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var hr = {
    animationend: go('Animation', 'AnimationEnd'),
    animationiteration: go('Animation', 'AnimationIteration'),
    animationstart: go('Animation', 'AnimationStart'),
    transitionend: go('Transition', 'TransitionEnd'),
  },
  ca = {},
  xp = {};
Zt &&
  ((xp = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete hr.animationend.animation,
    delete hr.animationiteration.animation,
    delete hr.animationstart.animation),
  'TransitionEvent' in window || delete hr.transitionend.transition);
function Ri(e) {
  if (ca[e]) return ca[e];
  if (!hr[e]) return e;
  var t = hr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xp) return (ca[e] = t[n]);
  return e;
}
var Ep = Ri('animationend'),
  wp = Ri('animationiteration'),
  Np = Ri('animationstart'),
  Sp = Ri('transitionend'),
  Cp = new Map(),
  qc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Ln(e, t) {
  Cp.set(e, t), qn(t, [e]);
}
for (var da = 0; da < qc.length; da++) {
  var fa = qc[da],
    sg = fa.toLowerCase(),
    ug = fa[0].toUpperCase() + fa.slice(1);
  Ln(sg, 'on' + ug);
}
Ln(Ep, 'onAnimationEnd');
Ln(wp, 'onAnimationIteration');
Ln(Np, 'onAnimationStart');
Ln('dblclick', 'onDoubleClick');
Ln('focusin', 'onFocus');
Ln('focusout', 'onBlur');
Ln(Sp, 'onTransitionEnd');
_r('onMouseEnter', ['mouseout', 'mouseover']);
_r('onMouseLeave', ['mouseout', 'mouseover']);
_r('onPointerEnter', ['pointerout', 'pointerover']);
_r('onPointerLeave', ['pointerout', 'pointerover']);
qn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
qn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
qn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
qn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
qn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var ml =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  cg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ml));
function ed(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), s1(r, t, void 0, e), (e.currentTarget = null);
}
function kp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          ed(l, s, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          ed(l, s, c), (o = u);
        }
    }
  }
  if (Ko) throw ((e = ns), (Ko = !1), (ns = null), e);
}
function oe(e, t) {
  var n = t[fs];
  n === void 0 && (n = t[fs] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Rp(t, e, 2, !1), n.add(r));
}
function pa(e, t, n) {
  var r = 0;
  t && (r |= 4), Rp(n, e, r, t);
}
var yo = '_reactListening' + Math.random().toString(36).slice(2);
function Al(e) {
  if (!e[yo]) {
    (e[yo] = !0),
      Mf.forEach(function (n) {
        n !== 'selectionchange' && (cg.has(n) || pa(n, !1, e), pa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yo] || ((t[yo] = !0), pa('selectionchange', !1, t));
  }
}
function Rp(e, t, n, r) {
  switch (up(t)) {
    case 1:
      var l = C1;
      break;
    case 4:
      l = k1;
      break;
    default:
      l = au;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ts ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ha(e, t, n, r, l) {
  var o = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Un(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Yf(function () {
    var c = o,
      d = ru(n),
      p = [];
    e: {
      var f = Cp.get(e);
      if (f !== void 0) {
        var m = uu,
          x = e;
        switch (e) {
          case 'keypress':
            if (Mo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = z1;
            break;
          case 'focusin':
            (x = 'focus'), (m = aa);
            break;
          case 'focusout':
            (x = 'blur'), (m = aa);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = aa;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Bc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = D1;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = H1;
            break;
          case Ep:
          case wp:
          case Np:
            m = L1;
            break;
          case Sp:
            m = W1;
            break;
          case 'scroll':
            m = R1;
            break;
          case 'wheel':
            m = Q1;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = M1;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Vc;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          v = y ? (f !== null ? f + 'Capture' : null) : f;
        y = [];
        for (var g = c, E; g !== null; ) {
          E = g;
          var N = E.stateNode;
          if (
            (E.tag === 5 &&
              N !== null &&
              ((E = N),
              v !== null && ((N = Ll(g, v)), N != null && y.push($l(g, N, E)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((f = new m(f, x, null, n, d)), p.push({ event: f, listeners: y }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== qa &&
            (x = n.relatedTarget || n.fromElement) &&
            (Un(x) || x[qt]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          m
            ? ((x = n.relatedTarget || n.toElement),
              (m = c),
              (x = x ? Un(x) : null),
              x !== null &&
                ((S = er(x)), x !== S || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((m = null), (x = c)),
          m !== x)
        ) {
          if (
            ((y = Bc),
            (N = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Vc),
              (N = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (g = 'pointer')),
            (S = m == null ? f : mr(m)),
            (E = x == null ? f : mr(x)),
            (f = new y(N, g + 'leave', m, n, d)),
            (f.target = S),
            (f.relatedTarget = E),
            (N = null),
            Un(d) === c &&
              ((y = new y(v, g + 'enter', x, n, d)),
              (y.target = E),
              (y.relatedTarget = S),
              (N = y)),
            (S = N),
            m && x)
          )
            t: {
              for (y = m, v = x, g = 0, E = y; E; E = ir(E)) g++;
              for (E = 0, N = v; N; N = ir(N)) E++;
              for (; 0 < g - E; ) (y = ir(y)), g--;
              for (; 0 < E - g; ) (v = ir(v)), E--;
              for (; g--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = ir(y)), (v = ir(v));
              }
              y = null;
            }
          else y = null;
          m !== null && td(p, f, m, y, !1),
            x !== null && S !== null && td(p, S, x, y, !0);
        }
      }
      e: {
        if (
          ((f = c ? mr(c) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var R = eg;
        else if (Qc(f))
          if (mp) R = lg;
          else {
            R = ng;
            var T = tg;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (R = rg);
        if (R && (R = R(e, c))) {
          hp(p, R, n, d);
          break e;
        }
        T && T(e, f, c),
          e === 'focusout' &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === 'number' &&
            Ga(f, 'number', f.value);
      }
      switch (((T = c ? mr(c) : window), e)) {
        case 'focusin':
          (Qc(T) || T.contentEditable === 'true') &&
            ((pr = T), (is = c), (Sl = null));
          break;
        case 'focusout':
          Sl = is = pr = null;
          break;
        case 'mousedown':
          as = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (as = !1), Zc(p, n, d);
          break;
        case 'selectionchange':
          if (ag) break;
        case 'keydown':
        case 'keyup':
          Zc(p, n, d);
      }
      var O;
      if (du)
        e: {
          switch (e) {
            case 'compositionstart':
              var _ = 'onCompositionStart';
              break e;
            case 'compositionend':
              _ = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              _ = 'onCompositionUpdate';
              break e;
          }
          _ = void 0;
        }
      else
        fr
          ? fp(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (dp &&
          n.locale !== 'ko' &&
          (fr || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && fr && (O = cp())
            : ((yn = d),
              (su = 'value' in yn ? yn.value : yn.textContent),
              (fr = !0))),
        (T = Jo(c, _)),
        0 < T.length &&
          ((_ = new Hc(_, e, null, n, d)),
          p.push({ event: _, listeners: T }),
          O ? (_.data = O) : ((O = pp(n)), O !== null && (_.data = O)))),
        (O = Y1 ? X1(e, n) : J1(e, n)) &&
          ((c = Jo(c, 'onBeforeInput')),
          0 < c.length &&
            ((d = new Hc('onBeforeInput', 'beforeinput', null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = O)));
    }
    kp(p, t);
  });
}
function $l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Ll(e, n)),
      o != null && r.unshift($l(e, o, l)),
      (o = Ll(e, t)),
      o != null && r.push($l(e, o, l))),
      (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function td(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Ll(n, o)), u != null && i.unshift($l(n, u, s)))
        : l || ((u = Ll(n, o)), u != null && i.push($l(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var dg = /\r\n?/g,
  fg = /\u0000|\uFFFD/g;
function nd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      dg,
      `
`,
    )
    .replace(fg, '');
}
function xo(e, t, n) {
  if (((t = nd(t)), nd(e) !== t && n)) throw Error(P(425));
}
function Zo() {}
var ss = null,
  us = null;
function cs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ds = typeof setTimeout == 'function' ? setTimeout : void 0,
  pg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  rd = typeof Promise == 'function' ? Promise : void 0,
  hg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof rd < 'u'
      ? function (e) {
          return rd.resolve(null).then(e).catch(mg);
        }
      : ds;
function mg(e) {
  setTimeout(function () {
    throw e;
  });
}
function ma(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Il(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Il(t);
}
function Sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ld(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2),
  Ft = '__reactFiber$' + Br,
  jl = '__reactProps$' + Br,
  qt = '__reactContainer$' + Br,
  fs = '__reactEvents$' + Br,
  vg = '__reactListeners$' + Br,
  gg = '__reactHandles$' + Br;
function Un(e) {
  var t = e[Ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[Ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ld(e); e !== null; ) {
          if ((n = e[Ft])) return n;
          e = ld(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ql(e) {
  return (
    (e = e[Ft] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Pi(e) {
  return e[jl] || null;
}
var ps = [],
  vr = -1;
function _n(e) {
  return { current: e };
}
function ie(e) {
  0 > vr || ((e.current = ps[vr]), (ps[vr] = null), vr--);
}
function re(e, t) {
  vr++, (ps[vr] = e.current), (e.current = t);
}
var Tn = {},
  Ae = _n(Tn),
  Ge = _n(!1),
  Gn = Tn;
function Mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function qo() {
  ie(Ge), ie(Ae);
}
function od(e, t, n) {
  if (Ae.current !== Tn) throw Error(P(168));
  re(Ae, t), re(Ge, n);
}
function Pp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, t1(e) || 'Unknown', l));
  return pe({}, n, r);
}
function ei(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Gn = Ae.current),
    re(Ae, e),
    re(Ge, Ge.current),
    !0
  );
}
function id(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Pp(e, t, Gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Ge),
      ie(Ae),
      re(Ae, e))
    : ie(Ge),
    re(Ge, n);
}
var Ht = null,
  Di = !1,
  va = !1;
function Dp(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function yg(e) {
  (Di = !0), Dp(e);
}
function Mn() {
  if (!va && Ht !== null) {
    va = !0;
    var e = 0,
      t = J;
    try {
      var n = Ht;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ht = null), (Di = !1);
    } catch (l) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), qf(lu, Mn), l);
    } finally {
      (J = t), (va = !1);
    }
  }
  return null;
}
var gr = [],
  yr = 0,
  ti = null,
  ni = 0,
  ut = [],
  ct = 0,
  Yn = null,
  Wt = 1,
  Kt = '';
function $n(e, t) {
  (gr[yr++] = ni), (gr[yr++] = ti), (ti = e), (ni = t);
}
function Op(e, t, n) {
  (ut[ct++] = Wt), (ut[ct++] = Kt), (ut[ct++] = Yn), (Yn = e);
  var r = Wt;
  e = Kt;
  var l = 32 - kt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - kt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Wt = (1 << (32 - kt(t) + l)) | (n << l) | r),
      (Kt = o + e);
  } else (Wt = (1 << o) | (n << l) | r), (Kt = e);
}
function pu(e) {
  e.return !== null && ($n(e, 1), Op(e, 1, 0));
}
function hu(e) {
  for (; e === ti; )
    (ti = gr[--yr]), (gr[yr] = null), (ni = gr[--yr]), (gr[yr] = null);
  for (; e === Yn; )
    (Yn = ut[--ct]),
      (ut[ct] = null),
      (Kt = ut[--ct]),
      (ut[ct] = null),
      (Wt = ut[--ct]),
      (ut[ct] = null);
}
var nt = null,
  tt = null,
  se = !1,
  St = null;
function Tp(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ad(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = Sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: Wt, overflow: Kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ms(e) {
  if (se) {
    var t = tt;
    if (t) {
      var n = t;
      if (!ad(e, t)) {
        if (hs(e)) throw Error(P(418));
        t = Sn(n.nextSibling);
        var r = nt;
        t && ad(e, t)
          ? Tp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (nt = e));
      }
    } else {
      if (hs(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (nt = e);
    }
  }
}
function sd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function Eo(e) {
  if (e !== nt) return !1;
  if (!se) return sd(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !cs(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (hs(e)) throw (Lp(), Error(P(418)));
    for (; t; ) Tp(e, t), (t = Sn(t.nextSibling));
  }
  if ((sd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              tt = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function Lp() {
  for (var e = tt; e; ) e = Sn(e.nextSibling);
}
function Ir() {
  (tt = nt = null), (se = !1);
}
function mu(e) {
  St === null ? (St = [e]) : St.push(e);
}
var xg = on.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ri = _n(null),
  li = null,
  xr = null,
  vu = null;
function gu() {
  vu = xr = li = null;
}
function yu(e) {
  var t = ri.current;
  ie(ri), (e._currentValue = t);
}
function vs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (li = e),
    (vu = xr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Qe = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xr === null)) {
      if (li === null) throw Error(P(308));
      (xr = e), (li.dependencies = { lanes: 0, firstContext: e });
    } else xr = xr.next = e;
  return t;
}
var Bn = null;
function xu(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function _p(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), xu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    en(e, r)
  );
}
function en(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hn = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (Q & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      en(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), xu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    en(e, n)
  );
}
function Io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
function ud(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oi(e, t, n, r) {
  var l = e.updateQueue;
  hn = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (d = c = u = null), (s = o);
    do {
      var f = s.lane,
        m = s.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var x = e,
            y = s;
          switch (((f = t), (m = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == 'function')) {
                p = x.call(m, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (f = typeof x == 'function' ? x.call(m, p, f) : x),
                f == null)
              )
                break e;
              p = pe({}, p, f);
              break e;
            case 2:
              hn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [s]) : f.push(s));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((c = d = m), (u = p)) : (d = d.next = m),
          (i |= f);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Jn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function cd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(P(191, l));
        l.call(r);
      }
    }
}
var Ip = new _f.Component().refs;
function gs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = Rn(e),
      o = Qt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Cn(e, o, l)),
      t !== null && (Rt(t, e, l, r), Io(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = Rn(e),
      o = Qt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Cn(e, o, l)),
      t !== null && (Rt(t, e, l, r), Io(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = Rn(e),
      l = Qt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Cn(e, l, r)),
      t !== null && (Rt(t, e, r, n), Io(t, e, r));
  },
};
function dd(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bl(n, r) || !bl(l, o)
      : !0
  );
}
function Fp(e, t, n) {
  var r = !1,
    l = Tn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ht(o))
      : ((l = Ye(t) ? Gn : Ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mr(e, l) : Tn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oi.enqueueReplaceState(t, t.state, null);
}
function ys(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ip), Eu(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ht(o))
    : ((o = Ye(t) ? Gn : Ae.current), (l.context = Mr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (gs(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Oi.enqueueReplaceState(l, l.state, null),
      oi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function rl(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            s === Ip && (s = l.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function wo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function pd(e) {
  var t = e._init;
  return t(e._payload);
}
function bp(e) {
  function t(v, g) {
    if (e) {
      var E = v.deletions;
      E === null ? ((v.deletions = [g]), (v.flags |= 16)) : E.push(g);
    }
  }
  function n(v, g) {
    if (!e) return null;
    for (; g !== null; ) t(v, g), (g = g.sibling);
    return null;
  }
  function r(v, g) {
    for (v = new Map(); g !== null; )
      g.key !== null ? v.set(g.key, g) : v.set(g.index, g), (g = g.sibling);
    return v;
  }
  function l(v, g) {
    return (v = Pn(v, g)), (v.index = 0), (v.sibling = null), v;
  }
  function o(v, g, E) {
    return (
      (v.index = E),
      e
        ? ((E = v.alternate),
          E !== null
            ? ((E = E.index), E < g ? ((v.flags |= 2), g) : E)
            : ((v.flags |= 2), g))
        : ((v.flags |= 1048576), g)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, g, E, N) {
    return g === null || g.tag !== 6
      ? ((g = Sa(E, v.mode, N)), (g.return = v), g)
      : ((g = l(g, E)), (g.return = v), g);
  }
  function u(v, g, E, N) {
    var R = E.type;
    return R === dr
      ? d(v, g, E.props.children, N, E.key)
      : g !== null &&
        (g.elementType === R ||
          (typeof R == 'object' &&
            R !== null &&
            R.$$typeof === pn &&
            pd(R) === g.type))
      ? ((N = l(g, E.props)), (N.ref = rl(v, g, E)), (N.return = v), N)
      : ((N = zo(E.type, E.key, E.props, null, v.mode, N)),
        (N.ref = rl(v, g, E)),
        (N.return = v),
        N);
  }
  function c(v, g, E, N) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== E.containerInfo ||
      g.stateNode.implementation !== E.implementation
      ? ((g = Ca(E, v.mode, N)), (g.return = v), g)
      : ((g = l(g, E.children || [])), (g.return = v), g);
  }
  function d(v, g, E, N, R) {
    return g === null || g.tag !== 7
      ? ((g = Kn(E, v.mode, N, R)), (g.return = v), g)
      : ((g = l(g, E)), (g.return = v), g);
  }
  function p(v, g, E) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = Sa('' + g, v.mode, E)), (g.return = v), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case uo:
          return (
            (E = zo(g.type, g.key, g.props, null, v.mode, E)),
            (E.ref = rl(v, null, g)),
            (E.return = v),
            E
          );
        case cr:
          return (g = Ca(g, v.mode, E)), (g.return = v), g;
        case pn:
          var N = g._init;
          return p(v, N(g._payload), E);
      }
      if (pl(g) || Zr(g))
        return (g = Kn(g, v.mode, E, null)), (g.return = v), g;
      wo(v, g);
    }
    return null;
  }
  function f(v, g, E, N) {
    var R = g !== null ? g.key : null;
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return R !== null ? null : s(v, g, '' + E, N);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case uo:
          return E.key === R ? u(v, g, E, N) : null;
        case cr:
          return E.key === R ? c(v, g, E, N) : null;
        case pn:
          return (R = E._init), f(v, g, R(E._payload), N);
      }
      if (pl(E) || Zr(E)) return R !== null ? null : d(v, g, E, N, null);
      wo(v, E);
    }
    return null;
  }
  function m(v, g, E, N, R) {
    if ((typeof N == 'string' && N !== '') || typeof N == 'number')
      return (v = v.get(E) || null), s(g, v, '' + N, R);
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case uo:
          return (v = v.get(N.key === null ? E : N.key) || null), u(g, v, N, R);
        case cr:
          return (v = v.get(N.key === null ? E : N.key) || null), c(g, v, N, R);
        case pn:
          var T = N._init;
          return m(v, g, E, T(N._payload), R);
      }
      if (pl(N) || Zr(N)) return (v = v.get(E) || null), d(g, v, N, R, null);
      wo(g, N);
    }
    return null;
  }
  function x(v, g, E, N) {
    for (
      var R = null, T = null, O = g, _ = (g = 0), I = null;
      O !== null && _ < E.length;
      _++
    ) {
      O.index > _ ? ((I = O), (O = null)) : (I = O.sibling);
      var $ = f(v, O, E[_], N);
      if ($ === null) {
        O === null && (O = I);
        break;
      }
      e && O && $.alternate === null && t(v, O),
        (g = o($, g, _)),
        T === null ? (R = $) : (T.sibling = $),
        (T = $),
        (O = I);
    }
    if (_ === E.length) return n(v, O), se && $n(v, _), R;
    if (O === null) {
      for (; _ < E.length; _++)
        (O = p(v, E[_], N)),
          O !== null &&
            ((g = o(O, g, _)), T === null ? (R = O) : (T.sibling = O), (T = O));
      return se && $n(v, _), R;
    }
    for (O = r(v, O); _ < E.length; _++)
      (I = m(O, v, _, E[_], N)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? _ : I.key),
          (g = o(I, g, _)),
          T === null ? (R = I) : (T.sibling = I),
          (T = I));
    return (
      e &&
        O.forEach(function (xe) {
          return t(v, xe);
        }),
      se && $n(v, _),
      R
    );
  }
  function y(v, g, E, N) {
    var R = Zr(E);
    if (typeof R != 'function') throw Error(P(150));
    if (((E = R.call(E)), E == null)) throw Error(P(151));
    for (
      var T = (R = null), O = g, _ = (g = 0), I = null, $ = E.next();
      O !== null && !$.done;
      _++, $ = E.next()
    ) {
      O.index > _ ? ((I = O), (O = null)) : (I = O.sibling);
      var xe = f(v, O, $.value, N);
      if (xe === null) {
        O === null && (O = I);
        break;
      }
      e && O && xe.alternate === null && t(v, O),
        (g = o(xe, g, _)),
        T === null ? (R = xe) : (T.sibling = xe),
        (T = xe),
        (O = I);
    }
    if ($.done) return n(v, O), se && $n(v, _), R;
    if (O === null) {
      for (; !$.done; _++, $ = E.next())
        ($ = p(v, $.value, N)),
          $ !== null &&
            ((g = o($, g, _)), T === null ? (R = $) : (T.sibling = $), (T = $));
      return se && $n(v, _), R;
    }
    for (O = r(v, O); !$.done; _++, $ = E.next())
      ($ = m(O, v, _, $.value, N)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? _ : $.key),
          (g = o($, g, _)),
          T === null ? (R = $) : (T.sibling = $),
          (T = $));
    return (
      e &&
        O.forEach(function (Je) {
          return t(v, Je);
        }),
      se && $n(v, _),
      R
    );
  }
  function S(v, g, E, N) {
    if (
      (typeof E == 'object' &&
        E !== null &&
        E.type === dr &&
        E.key === null &&
        (E = E.props.children),
      typeof E == 'object' && E !== null)
    ) {
      switch (E.$$typeof) {
        case uo:
          e: {
            for (var R = E.key, T = g; T !== null; ) {
              if (T.key === R) {
                if (((R = E.type), R === dr)) {
                  if (T.tag === 7) {
                    n(v, T.sibling),
                      (g = l(T, E.props.children)),
                      (g.return = v),
                      (v = g);
                    break e;
                  }
                } else if (
                  T.elementType === R ||
                  (typeof R == 'object' &&
                    R !== null &&
                    R.$$typeof === pn &&
                    pd(R) === T.type)
                ) {
                  n(v, T.sibling),
                    (g = l(T, E.props)),
                    (g.ref = rl(v, T, E)),
                    (g.return = v),
                    (v = g);
                  break e;
                }
                n(v, T);
                break;
              } else t(v, T);
              T = T.sibling;
            }
            E.type === dr
              ? ((g = Kn(E.props.children, v.mode, N, E.key)),
                (g.return = v),
                (v = g))
              : ((N = zo(E.type, E.key, E.props, null, v.mode, N)),
                (N.ref = rl(v, g, E)),
                (N.return = v),
                (v = N));
          }
          return i(v);
        case cr:
          e: {
            for (T = E.key; g !== null; ) {
              if (g.key === T)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === E.containerInfo &&
                  g.stateNode.implementation === E.implementation
                ) {
                  n(v, g.sibling),
                    (g = l(g, E.children || [])),
                    (g.return = v),
                    (v = g);
                  break e;
                } else {
                  n(v, g);
                  break;
                }
              else t(v, g);
              g = g.sibling;
            }
            (g = Ca(E, v.mode, N)), (g.return = v), (v = g);
          }
          return i(v);
        case pn:
          return (T = E._init), S(v, g, T(E._payload), N);
      }
      if (pl(E)) return x(v, g, E, N);
      if (Zr(E)) return y(v, g, E, N);
      wo(v, E);
    }
    return (typeof E == 'string' && E !== '') || typeof E == 'number'
      ? ((E = '' + E),
        g !== null && g.tag === 6
          ? (n(v, g.sibling), (g = l(g, E)), (g.return = v), (v = g))
          : (n(v, g), (g = Sa(E, v.mode, N)), (g.return = v), (v = g)),
        i(v))
      : n(v, g);
  }
  return S;
}
var Fr = bp(!0),
  Ap = bp(!1),
  eo = {},
  $t = _n(eo),
  zl = _n(eo),
  Ul = _n(eo);
function Hn(e) {
  if (e === eo) throw Error(P(174));
  return e;
}
function wu(e, t) {
  switch ((re(Ul, t), re(zl, e), re($t, eo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xa(t, e));
  }
  ie($t), re($t, t);
}
function br() {
  ie($t), ie(zl), ie(Ul);
}
function $p(e) {
  Hn(Ul.current);
  var t = Hn($t.current),
    n = Xa(t, e.type);
  t !== n && (re(zl, e), re($t, n));
}
function Nu(e) {
  zl.current === e && (ie($t), ie(zl));
}
var de = _n(0);
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ga = [];
function Su() {
  for (var e = 0; e < ga.length; e++)
    ga[e]._workInProgressVersionPrimary = null;
  ga.length = 0;
}
var Fo = on.ReactCurrentDispatcher,
  ya = on.ReactCurrentBatchConfig,
  Xn = 0,
  fe = null,
  Ee = null,
  Se = null,
  ai = !1,
  Cl = !1,
  Bl = 0,
  Eg = 0;
function Le() {
  throw Error(P(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Pt(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, l, o) {
  if (
    ((Xn = o),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fo.current = e === null || e.memoizedState === null ? Cg : kg),
    (e = n(r, l)),
    Cl)
  ) {
    o = 0;
    do {
      if (((Cl = !1), (Bl = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (Se = Ee = null),
        (t.updateQueue = null),
        (Fo.current = Rg),
        (e = n(r, l));
    } while (Cl);
  }
  if (
    ((Fo.current = si),
    (t = Ee !== null && Ee.next !== null),
    (Xn = 0),
    (Se = Ee = fe = null),
    (ai = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Ru() {
  var e = Bl !== 0;
  return (Bl = 0), e;
}
function It() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function mt() {
  if (Ee === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Se === null ? fe.memoizedState : Se.next;
  if (t !== null) (Se = t), (Ee = e);
  else {
    if (e === null) throw Error(P(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Se === null ? (fe.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Hl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function xa(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((Xn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (i = r)) : (u = u.next = p),
          (fe.lanes |= d),
          (Jn |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = s),
      Pt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (fe.lanes |= o), (Jn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ea(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Pt(o, t.memoizedState) || (Qe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function jp() {}
function zp(e, t) {
  var n = fe,
    r = mt(),
    l = t(),
    o = !Pt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Qe = !0)),
    (r = r.queue),
    Pu(Hp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vl(9, Bp.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(P(349));
    (Xn & 30) !== 0 || Up(n, t, l);
  }
  return l;
}
function Up(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Vp(t) && Wp(e);
}
function Hp(e, t, n) {
  return n(function () {
    Vp(t) && Wp(e);
  });
}
function Vp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pt(e, n);
  } catch {
    return !0;
  }
}
function Wp(e) {
  var t = en(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function hd(e) {
  var t = It();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Sg.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Vl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kp() {
  return mt().memoizedState;
}
function bo(e, t, n, r) {
  var l = It();
  (fe.flags |= e),
    (l.memoizedState = Vl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ti(e, t, n, r) {
  var l = mt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (((o = i.destroy), r !== null && Cu(r, i.deps))) {
      l.memoizedState = Vl(t, n, o, r);
      return;
    }
  }
  (fe.flags |= e), (l.memoizedState = Vl(1 | t, n, o, r));
}
function md(e, t) {
  return bo(8390656, 8, e, t);
}
function Pu(e, t) {
  return Ti(2048, 8, e, t);
}
function Qp(e, t) {
  return Ti(4, 2, e, t);
}
function Gp(e, t) {
  return Ti(4, 4, e, t);
}
function Yp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ti(4, 4, Yp.bind(null, t, e), n)
  );
}
function Du() {}
function Jp(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zp(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qp(e, t, n) {
  return (Xn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n))
    : (Pt(n, t) || ((n = np()), (fe.lanes |= n), (Jn |= n), (e.baseState = !0)),
      t);
}
function wg(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ya.transition;
  ya.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (ya.transition = r);
  }
}
function eh() {
  return mt().memoizedState;
}
function Ng(e, t, n) {
  var r = Rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    th(e))
  )
    nh(t, n);
  else if (((n = _p(e, t, n, r)), n !== null)) {
    var l = Ue();
    Rt(n, e, r, l), rh(n, t, r);
  }
}
function Sg(e, t, n) {
  var r = Rn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (th(e)) nh(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Pt(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), xu(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = _p(e, t, l, r)),
      n !== null && ((l = Ue()), Rt(n, e, r, l), rh(n, t, r));
  }
}
function th(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function nh(e, t) {
  Cl = ai = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rh(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ou(e, n);
  }
}
var si = {
    readContext: ht,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Cg = {
    readContext: ht,
    useCallback: function (e, t) {
      return (It().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: md,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bo(4194308, 4, Yp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = It();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = It();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ng.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = It();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hd,
    useDebugValue: Du,
    useDeferredValue: function (e) {
      return (It().memoizedState = e);
    },
    useTransition: function () {
      var e = hd(!1),
        t = e[0];
      return (e = wg.bind(null, e[1])), (It().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        l = It();
      if (se) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(P(349));
        (Xn & 30) !== 0 || Up(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        md(Hp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vl(9, Bp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = It(),
        t = Ce.identifierPrefix;
      if (se) {
        var n = Kt,
          r = Wt;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Bl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Eg++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kg = {
    readContext: ht,
    useCallback: Jp,
    useContext: ht,
    useEffect: Pu,
    useImperativeHandle: Xp,
    useInsertionEffect: Qp,
    useLayoutEffect: Gp,
    useMemo: Zp,
    useReducer: xa,
    useRef: Kp,
    useState: function () {
      return xa(Hl);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = mt();
      return qp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = xa(Hl)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: zp,
    useId: eh,
    unstable_isNewReconciler: !1,
  },
  Rg = {
    readContext: ht,
    useCallback: Jp,
    useContext: ht,
    useEffect: Pu,
    useImperativeHandle: Xp,
    useInsertionEffect: Qp,
    useLayoutEffect: Gp,
    useMemo: Zp,
    useReducer: Ea,
    useRef: Kp,
    useState: function () {
      return Ea(Hl);
    },
    useDebugValue: Du,
    useDeferredValue: function (e) {
      var t = mt();
      return Ee === null ? (t.memoizedState = e) : qp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ea(Hl)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: zp,
    useId: eh,
    unstable_isNewReconciler: !1,
  };
function Ar(e, t) {
  try {
    var n = '',
      r = t;
    do (n += e1(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function wa(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function xs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pg = typeof WeakMap == 'function' ? WeakMap : Map;
function lh(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ci || ((ci = !0), (Os = r)), xs(e, t);
    }),
    n
  );
}
function oh(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        xs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        xs(e, t),
          typeof r != 'function' &&
            (kn === null ? (kn = new Set([this])) : kn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function vd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pg();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ug.bind(null, e, t, n)), t.then(e, e));
}
function gd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yd(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qt(-1, 1)), (t.tag = 2), Cn(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var Dg = on.ReactCurrentOwner,
  Qe = !1;
function je(e, t, n, r) {
  t.child = e === null ? Ap(t, null, n, r) : Fr(t, e.child, n, r);
}
function xd(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Or(t, l),
    (r = ku(e, t, n, r, o, l)),
    (n = Ru()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tn(e, t, l))
      : (se && n && pu(t), (t.flags |= 1), je(e, t, r, l), t.child)
  );
}
function Ed(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !bu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ih(e, t, o, r, l))
      : ((e = zo(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), (e.lanes & l) === 0)) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bl), n(i, r) && e.ref === t.ref)
    )
      return tn(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Pn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ih(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bl(o, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (Qe = !0);
      else return (t.lanes = e.lanes), tn(e, t, l);
  }
  return Es(e, t, n, r, l);
}
function ah(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(wr, et),
        (et |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(wr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        re(wr, et),
        (et |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(wr, et),
      (et |= r);
  return je(e, t, l, n), t.child;
}
function sh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Es(e, t, n, r, l) {
  var o = Ye(n) ? Gn : Ae.current;
  return (
    (o = Mr(t, o)),
    Or(t, l),
    (n = ku(e, t, n, r, o, l)),
    (r = Ru()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tn(e, t, l))
      : (se && r && pu(t), (t.flags |= 1), je(e, t, n, l), t.child)
  );
}
function wd(e, t, n, r, l) {
  if (Ye(n)) {
    var o = !0;
    ei(t);
  } else o = !1;
  if ((Or(t, l), t.stateNode === null))
    Ao(e, t), Fp(t, n, r), ys(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = ht(c))
      : ((c = Ye(n) ? Gn : Ae.current), (c = Mr(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== c) && fd(t, i, r, c)),
      (hn = !1);
    var f = t.memoizedState;
    (i.state = f),
      oi(t, r, i, l),
      (u = t.memoizedState),
      s !== r || f !== u || Ge.current || hn
        ? (typeof d == 'function' && (gs(t, n, d, r), (u = t.memoizedState)),
          (s = hn || dd(t, n, s, r, f, u, c))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Mp(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : wt(t.type, s)),
      (i.props = c),
      (p = t.pendingProps),
      (f = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ht(u))
        : ((u = Ye(n) ? Gn : Ae.current), (u = Mr(t, u)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((s !== p || f !== u) && fd(t, i, r, u)),
      (hn = !1),
      (f = t.memoizedState),
      (i.state = f),
      oi(t, r, i, l);
    var x = t.memoizedState;
    s !== p || f !== x || Ge.current || hn
      ? (typeof m == 'function' && (gs(t, n, m, r), (x = t.memoizedState)),
        (c = hn || dd(t, n, c, r, f, x, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ws(e, t, n, r, o, l);
}
function ws(e, t, n, r, l, o) {
  sh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && id(t, n, !1), tn(e, t, o);
  (r = t.stateNode), (Dg.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Fr(t, e.child, null, o)), (t.child = Fr(t, null, s, o)))
      : je(e, t, s, o),
    (t.memoizedState = r.state),
    l && id(t, n, !0),
    t.child
  );
}
function uh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? od(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && od(e, t.context, !1),
    wu(e, t.containerInfo);
}
function Nd(e, t, n, r, l) {
  return Ir(), mu(l), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ch(e, t, n) {
  var r = t.pendingProps,
    l = de.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    re(de, l & 1),
    e === null)
  )
    return (
      ms(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              (r & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Mi(i, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ss(n)),
              (t.memoizedState = Ns),
              e)
            : Ou(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Og(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      (i & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Pn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Pn(s, o)) : ((o = Kn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ss(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ns),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Pn(o, { mode: 'visible', children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ou(e, t) {
  return (
    (t = Mi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function No(e, t, n, r) {
  return (
    r !== null && mu(r),
    Fr(t, e.child, null, n),
    (e = Ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Og(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wa(Error(P(422)))), No(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Mi({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = Kn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        (t.mode & 1) !== 0 && Fr(t, e.child, null, i),
        (t.child.memoizedState = Ss(i)),
        (t.memoizedState = Ns),
        o);
  if ((t.mode & 1) === 0) return No(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(P(419))), (r = wa(o, r, void 0)), No(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Qe || s)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), en(e, l), Rt(r, e, l, -1));
    }
    return Fu(), (r = wa(Error(P(421)))), No(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (tt = Sn(l.nextSibling)),
      (nt = t),
      (se = !0),
      (St = null),
      e !== null &&
        ((ut[ct++] = Wt),
        (ut[ct++] = Kt),
        (ut[ct++] = Yn),
        (Wt = e.id),
        (Kt = e.overflow),
        (Yn = t)),
      (t = Ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vs(e.return, t, n);
}
function Na(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function dh(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((je(e, t, r.children, n), (r = de.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sd(e, n, t);
        else if (e.tag === 19) Sd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(de, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Na(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ii(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Na(t, !0, n, null, o);
        break;
      case 'together':
        Na(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ao(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jn |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tg(e, t, n) {
  switch (t.tag) {
    case 3:
      uh(t), Ir();
      break;
    case 5:
      $p(t);
      break;
    case 1:
      Ye(t.type) && ei(t);
      break;
    case 4:
      wu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(ri, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(de, de.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? ch(e, t, n)
          : (re(de, de.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      re(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return dh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ah(e, t, n);
  }
  return tn(e, t, n);
}
var fh, Cs, ph, hh;
fh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cs = function () {};
ph = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Hn($t.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = Ka(e, l)), (r = Ka(e, r)), (o = []);
        break;
      case 'select':
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = Ya(e, l)), (r = Ya(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Zo);
    }
    Ja(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Ol.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === 'style')
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(c, u))
            : c === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(c, '' + u)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Ol.hasOwnProperty(c)
                ? (u != null && c === 'onScroll' && oe('scroll', e),
                  o || s === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
hh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ll(e, t) {
  if (!se)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Lg(e, t, n) {
  var r = t.pendingProps;
  switch ((hu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Ye(t.type) && qo(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        br(),
        ie(Ge),
        ie(Ae),
        Su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), St !== null && (_s(St), (St = null)))),
        Cs(e, t),
        _e(t),
        null
      );
    case 5:
      Nu(t);
      var l = Hn(Ul.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ph(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return _e(t), null;
        }
        if (((e = Hn($t.current)), Eo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ft] = t), (r[jl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              oe('cancel', r), oe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              oe('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < ml.length; l++) oe(ml[l], r);
              break;
            case 'source':
              oe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              oe('error', r), oe('load', r);
              break;
            case 'details':
              oe('toggle', r);
              break;
            case 'input':
              _c(r, o), oe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                oe('invalid', r);
              break;
            case 'textarea':
              Ic(r, o), oe('invalid', r);
          }
          Ja(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (l = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (l = ['children', '' + s]))
                : Ol.hasOwnProperty(i) &&
                  s != null &&
                  i === 'onScroll' &&
                  oe('scroll', r);
            }
          switch (n) {
            case 'input':
              co(r), Mc(r, o, !0);
              break;
            case 'textarea':
              co(r), Fc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Zo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Uf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ft] = t),
            (e[jl] = r),
            fh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Za(n, r)), n)) {
              case 'dialog':
                oe('cancel', e), oe('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < ml.length; l++) oe(ml[l], e);
                l = r;
                break;
              case 'source':
                oe('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', e), oe('load', e), (l = r);
                break;
              case 'details':
                oe('toggle', e), (l = r);
                break;
              case 'input':
                _c(e, r), (l = Ka(e, r)), oe('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  oe('invalid', e);
                break;
              case 'textarea':
                Ic(e, r), (l = Ya(e, r)), oe('invalid', e);
                break;
              default:
                l = r;
            }
            Ja(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === 'style'
                  ? Vf(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Bf(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Tl(e, u)
                    : typeof u == 'number' && Tl(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Ol.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && oe('scroll', e)
                      : u != null && qs(e, o, u, i));
              }
            switch (n) {
              case 'input':
                co(e), Mc(e, r, !1);
                break;
              case 'textarea':
                co(e), Fc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + On(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? kr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      kr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Zo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) hh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166));
        if (((n = Hn(Ul.current)), Hn($t.current), Eo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ft] = t),
            (o = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ft] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (ie(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && tt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          Lp(), Ir(), (t.flags |= 98560), (o = !1);
        else if (((o = Eo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[Ft] = t;
          } else
            Ir(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          _e(t), (o = !1);
        } else St !== null && (_s(St), (St = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (de.current & 1) !== 0
                ? we === 0 && (we = 3)
                : Fu())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        br(), Cs(e, t), e === null && Al(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return yu(t.type._context), _e(t), null;
    case 17:
      return Ye(t.type) && qo(), _e(t), null;
    case 19:
      if ((ie(de), (o = t.memoizedState), o === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ll(o, !1);
        else {
          if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = ii(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ll(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ge() > $r &&
            ((t.flags |= 128), (r = !0), ll(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ii(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ll(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !se)
            )
              return _e(t), null;
          } else
            2 * ge() - o.renderingStartTime > $r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ll(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ge()),
          (t.sibling = null),
          (n = de.current),
          re(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        Iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (et & 1073741824) !== 0 &&
            (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function _g(e, t) {
  switch ((hu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && qo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        br(),
        ie(Ge),
        ie(Ae),
        Su(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Nu(t), null;
    case 13:
      if (
        (ie(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(de), null;
    case 4:
      return br(), null;
    case 10:
      return yu(t.type._context), null;
    case 22:
    case 23:
      return Iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var So = !1,
  Ie = !1,
  Mg = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null;
function Er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function ks(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Cd = !1;
function Ig(e, t) {
  if (((ss = Yo), (e = yp()), fu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (f = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++c === l && (s = i),
                f === o && ++d === r && (u = i),
                (m = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = m;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (us = { focusedElem: e, selectionRange: n }, Yo = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var x = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    S = x.memoizedState,
                    v = t.stateNode,
                    g = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : wt(t.type, y),
                      S,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = '')
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (N) {
          me(t, t.return, N);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (x = Cd), (Cd = !1), x;
}
function kl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ks(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Li(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function mh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ft], delete t[jl], delete t[fs], delete t[vg], delete t[gg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
function Ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ds(e, t, n), e = e.sibling; e !== null; ) Ds(e, t, n), (e = e.sibling);
}
var Pe = null,
  Nt = !1;
function dn(e, t, n) {
  for (n = n.child; n !== null; ) gh(e, t, n), (n = n.sibling);
}
function gh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(Si, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Er(n, t);
    case 6:
      var r = Pe,
        l = Nt;
      (Pe = null),
        dn(e, t, n),
        (Pe = r),
        (Nt = l),
        Pe !== null &&
          (Nt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (Nt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ma(e.parentNode, n)
              : e.nodeType === 1 && ma(e, n),
            Il(e))
          : ma(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = Nt),
        (Pe = n.stateNode.containerInfo),
        (Nt = !0),
        dn(e, t, n),
        (Pe = r),
        (Nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && ks(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      dn(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          me(n, t, s);
        }
      dn(e, t, n);
      break;
    case 21:
      dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), dn(e, t, n), (Ie = r))
        : dn(e, t, n);
      break;
    default:
      dn(e, t, n);
  }
}
function Rd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Mg()),
      t.forEach(function (r) {
        var l = Hg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Pe = s.stateNode), (Nt = !1);
              break e;
            case 3:
              (Pe = s.stateNode.containerInfo), (Nt = !0);
              break e;
            case 4:
              (Pe = s.stateNode.containerInfo), (Nt = !0);
              break e;
          }
          s = s.return;
        }
        if (Pe === null) throw Error(P(160));
        gh(o, i, l), (Pe = null), (Nt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        me(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yh(t, e), (t = t.sibling);
}
function yh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Et(t, e), Mt(e), r & 4)) {
        try {
          kl(3, e, e.return), Li(3, e);
        } catch (y) {
          me(e, e.return, y);
        }
        try {
          kl(5, e, e.return);
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 1:
      Et(t, e), Mt(e), r & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (
        (Et(t, e),
        Mt(e),
        r & 512 && n !== null && Er(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Tl(l, '');
        } catch (y) {
          me(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && jf(l, o),
              Za(s, i);
            var c = Za(s, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                p = u[i + 1];
              d === 'style'
                ? Vf(l, p)
                : d === 'dangerouslySetInnerHTML'
                ? Bf(l, p)
                : d === 'children'
                ? Tl(l, p)
                : qs(l, d, p, c);
            }
            switch (s) {
              case 'input':
                Qa(l, o);
                break;
              case 'textarea':
                zf(l, o);
                break;
              case 'select':
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? kr(l, !!o.multiple, m, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? kr(l, !!o.multiple, o.defaultValue, !0)
                      : kr(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[jl] = o;
          } catch (y) {
            me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Et(t, e), Mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Et(t, e), Mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Il(t.containerInfo);
        } catch (y) {
          me(e, e.return, y);
        }
      break;
    case 4:
      Et(t, e), Mt(e);
      break;
    case 13:
      Et(t, e),
        Mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_u = ge())),
        r & 4 && Rd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (c = Ie) || d), Et(t, e), (Ie = c)) : Et(t, e),
        Mt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && (e.mode & 1) !== 0)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (p = F = d; F !== null; ) {
              switch (((f = F), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kl(4, f, f.return);
                  break;
                case 1:
                  Er(f, f.return);
                  var x = f.stateNode;
                  if (typeof x.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      me(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Er(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Dd(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (F = m)) : Dd(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Hf('display', i)));
              } catch (y) {
                me(e, e.return, y);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = c ? '' : p.memoizedProps;
              } catch (y) {
                me(e, e.return, y);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Et(t, e), Mt(e), r & 4 && Rd(e);
      break;
    case 21:
      break;
    default:
      Et(t, e), Mt(e);
  }
}
function Mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tl(l, ''), (r.flags &= -33));
          var o = kd(e);
          Ds(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = kd(e);
          Ps(e, s, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fg(e, t, n) {
  (F = e), xh(e);
}
function xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || So;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Ie;
        s = So;
        var c = Ie;
        if (((So = i), (Ie = u) && !c))
          for (F = l; F !== null; )
            (i = F),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Od(l)
                : u !== null
                ? ((u.return = i), (F = u))
                : Od(l);
        for (; o !== null; ) (F = o), xh(o), (o = o.sibling);
        (F = l), (So = s), (Ie = c);
      }
      Pd(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = l), (F = o))
        : Pd(e);
  }
}
function Pd(e) {
  for (; F !== null; ) {
    var t = F;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || Li(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && cd(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cd(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Il(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Ie || (t.flags & 512 && Rs(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Dd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Od(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Li(4, t);
          } catch (u) {
            me(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              me(t, l, u);
            }
          }
          var o = t.return;
          try {
            Rs(t);
          } catch (u) {
            me(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Rs(t);
          } catch (u) {
            me(t, i, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      F = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (F = s);
      break;
    }
    F = t.return;
  }
}
var bg = Math.ceil,
  ui = on.ReactCurrentDispatcher,
  Tu = on.ReactCurrentOwner,
  ft = on.ReactCurrentBatchConfig,
  Q = 0,
  Ce = null,
  ye = null,
  De = 0,
  et = 0,
  wr = _n(0),
  we = 0,
  Wl = null,
  Jn = 0,
  _i = 0,
  Lu = 0,
  Rl = null,
  Ke = null,
  _u = 0,
  $r = 1 / 0,
  Bt = null,
  ci = !1,
  Os = null,
  kn = null,
  Co = !1,
  xn = null,
  di = 0,
  Pl = 0,
  Ts = null,
  $o = -1,
  jo = 0;
function Ue() {
  return (Q & 6) !== 0 ? ge() : $o !== -1 ? $o : ($o = ge());
}
function Rn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (Q & 2) !== 0 && De !== 0
    ? De & -De
    : xg.transition !== null
    ? (jo === 0 && (jo = np()), jo)
    : ((e = J),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : up(e.type))),
      e);
}
function Rt(e, t, n, r) {
  if (50 < Pl) throw ((Pl = 0), (Ts = null), Error(P(185)));
  Jl(e, n, r),
    ((Q & 2) === 0 || e !== Ce) &&
      (e === Ce && ((Q & 2) === 0 && (_i |= n), we === 4 && gn(e, De)),
      Xe(e, r),
      n === 1 &&
        Q === 0 &&
        (t.mode & 1) === 0 &&
        (($r = ge() + 500), Di && Mn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  x1(e, t);
  var r = Go(e, e === Ce ? De : 0);
  if (r === 0)
    n !== null && $c(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $c(n), t === 1))
      e.tag === 0 ? yg(Td.bind(null, e)) : Dp(Td.bind(null, e)),
        hg(function () {
          (Q & 6) === 0 && Mn();
        }),
        (n = null);
    else {
      switch (rp(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = ep;
          break;
        case 16:
          n = Qo;
          break;
        case 536870912:
          n = tp;
          break;
        default:
          n = Qo;
      }
      n = Ph(n, Eh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Eh(e, t) {
  if ((($o = -1), (jo = 0), (Q & 6) !== 0)) throw Error(P(327));
  var n = e.callbackNode;
  if (Tr() && e.callbackNode !== n) return null;
  var r = Go(e, e === Ce ? De : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = fi(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = Nh();
    (Ce !== e || De !== t) && ((Bt = null), ($r = ge() + 500), Wn(e, t));
    do
      try {
        jg();
        break;
      } catch (s) {
        wh(e, s);
      }
    while (1);
    gu(),
      (ui.current = o),
      (Q = l),
      ye !== null ? (t = 0) : ((Ce = null), (De = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = rs(e)), l !== 0 && ((r = l), (t = Ls(e, l)))), t === 1)
    )
      throw ((n = Wl), Wn(e, 0), gn(e, r), Xe(e, ge()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !Ag(l) &&
          ((t = fi(e, r)),
          t === 2 && ((o = rs(e)), o !== 0 && ((r = o), (t = Ls(e, o)))),
          t === 1))
      )
        throw ((n = Wl), Wn(e, 0), gn(e, r), Xe(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          jn(e, Ke, Bt);
          break;
        case 3:
          if (
            (gn(e, r), (r & 130023424) === r && ((t = _u + 500 - ge()), 10 < t))
          ) {
            if (Go(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ds(jn.bind(null, e, Ke, Bt), t);
            break;
          }
          jn(e, Ke, Bt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - kt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ds(jn.bind(null, e, Ke, Bt), r);
            break;
          }
          jn(e, Ke, Bt);
          break;
        case 5:
          jn(e, Ke, Bt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Xe(e, ge()), e.callbackNode === n ? Eh.bind(null, e) : null;
}
function Ls(e, t) {
  var n = Rl;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = fi(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && _s(t)),
    e
  );
}
function _s(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function Ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Pt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gn(e, t) {
  for (
    t &= ~Lu,
      t &= ~_i,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Td(e) {
  if ((Q & 6) !== 0) throw Error(P(327));
  Tr();
  var t = Go(e, 0);
  if ((t & 1) === 0) return Xe(e, ge()), null;
  var n = fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rs(e);
    r !== 0 && ((t = r), (n = Ls(e, r)));
  }
  if (n === 1) throw ((n = Wl), Wn(e, 0), gn(e, t), Xe(e, ge()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jn(e, Ke, Bt),
    Xe(e, ge()),
    null
  );
}
function Mu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && (($r = ge() + 500), Di && Mn());
  }
}
function Zn(e) {
  xn !== null && xn.tag === 0 && (Q & 6) === 0 && Tr();
  var t = Q;
  Q |= 1;
  var n = ft.transition,
    r = J;
  try {
    if (((ft.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (ft.transition = n), (Q = t), (Q & 6) === 0 && Mn();
  }
}
function Iu() {
  (et = wr.current), ie(wr);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pg(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((hu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qo();
          break;
        case 3:
          br(), ie(Ge), ie(Ae), Su();
          break;
        case 5:
          Nu(r);
          break;
        case 4:
          br();
          break;
        case 13:
          ie(de);
          break;
        case 19:
          ie(de);
          break;
        case 10:
          yu(r.type._context);
          break;
        case 22:
        case 23:
          Iu();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = Pn(e.current, null)),
    (De = et = t),
    (we = 0),
    (Wl = null),
    (Lu = _i = Jn = 0),
    (Ke = Rl = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function wh(e, t) {
  do {
    var n = ye;
    try {
      if ((gu(), (Fo.current = si), ai)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ai = !1;
      }
      if (
        ((Xn = 0),
        (Se = Ee = fe = null),
        (Cl = !1),
        (Bl = 0),
        (Tu.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (Wl = t), (ye = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = De),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var c = u,
            d = s,
            p = d.tag;
          if ((d.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = gd(i);
          if (m !== null) {
            (m.flags &= -257),
              yd(m, i, s, o, t),
              m.mode & 1 && vd(o, c, t),
              (t = m),
              (u = c);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else x.add(u);
            break e;
          } else {
            if ((t & 1) === 0) {
              vd(o, c, t), Fu();
              break e;
            }
            u = Error(P(426));
          }
        } else if (se && s.mode & 1) {
          var S = gd(i);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              yd(S, i, s, o, t),
              mu(Ar(u, s));
            break e;
          }
        }
        (o = u = Ar(u, s)),
          we !== 4 && (we = 2),
          Rl === null ? (Rl = [o]) : Rl.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var v = lh(o, u, t);
              ud(o, v);
              break e;
            case 1:
              s = u;
              var g = o.type,
                E = o.stateNode;
              if (
                (o.flags & 128) === 0 &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (E !== null &&
                    typeof E.componentDidCatch == 'function' &&
                    (kn === null || !kn.has(E))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var N = oh(o, s, t);
                ud(o, N);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ch(n);
    } catch (R) {
      (t = R), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Nh() {
  var e = ui.current;
  return (ui.current = si), e === null ? si : e;
}
function Fu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ce === null ||
      ((Jn & 268435455) === 0 && (_i & 268435455) === 0) ||
      gn(Ce, De);
}
function fi(e, t) {
  var n = Q;
  Q |= 2;
  var r = Nh();
  (Ce !== e || De !== t) && ((Bt = null), Wn(e, t));
  do
    try {
      $g();
      break;
    } catch (l) {
      wh(e, l);
    }
  while (1);
  if ((gu(), (Q = n), (ui.current = r), ye !== null)) throw Error(P(261));
  return (Ce = null), (De = 0), we;
}
function $g() {
  for (; ye !== null; ) Sh(ye);
}
function jg() {
  for (; ye !== null && !c1(); ) Sh(ye);
}
function Sh(e) {
  var t = Rh(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ch(e) : (ye = t),
    (Tu.current = null);
}
function Ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Lg(n, t, et)), n !== null)) {
        ye = n;
        return;
      }
    } else {
      if (((n = _g(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ye = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function jn(e, t, n) {
  var r = J,
    l = ft.transition;
  try {
    (ft.transition = null), (J = 1), zg(e, t, n, r);
  } finally {
    (ft.transition = l), (J = r);
  }
  return null;
}
function zg(e, t, n, r) {
  do Tr();
  while (xn !== null);
  if ((Q & 6) !== 0) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (E1(e, o),
    e === Ce && ((ye = Ce = null), (De = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Co ||
      ((Co = !0),
      Ph(Qo, function () {
        return Tr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = ft.transition), (ft.transition = null);
    var i = J;
    J = 1;
    var s = Q;
    (Q |= 4),
      (Tu.current = null),
      Ig(e, n),
      yh(n, e),
      ig(us),
      (Yo = !!ss),
      (us = ss = null),
      (e.current = n),
      Fg(n),
      d1(),
      (Q = s),
      (J = i),
      (ft.transition = o);
  } else e.current = n;
  if (
    (Co && ((Co = !1), (xn = e), (di = l)),
    (o = e.pendingLanes),
    o === 0 && (kn = null),
    h1(n.stateNode),
    Xe(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ci) throw ((ci = !1), (e = Os), (Os = null), e);
  return (
    (di & 1) !== 0 && e.tag !== 0 && Tr(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === Ts ? Pl++ : ((Pl = 0), (Ts = e))) : (Pl = 0),
    Mn(),
    null
  );
}
function Tr() {
  if (xn !== null) {
    var e = rp(di),
      t = ft.transition,
      n = J;
    try {
      if (((ft.transition = null), (J = 16 > e ? 16 : e), xn === null))
        var r = !1;
      else {
        if (((e = xn), (xn = null), (di = 0), (Q & 6) !== 0))
          throw Error(P(331));
        var l = Q;
        for (Q |= 4, F = e.current; F !== null; ) {
          var o = F,
            i = o.child;
          if ((F.flags & 16) !== 0) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (F = c; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (F = p);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var f = d.sibling,
                        m = d.return;
                      if ((mh(d), d === c)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (F = f);
                        break;
                      }
                      F = m;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              F = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = o), (F = i);
          else
            e: for (; F !== null; ) {
              if (((o = F), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, o, o.return);
                }
              var v = o.sibling;
              if (v !== null) {
                (v.return = o.return), (F = v);
                break e;
              }
              F = o.return;
            }
        }
        var g = e.current;
        for (F = g; F !== null; ) {
          i = F;
          var E = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && E !== null)
            (E.return = i), (F = E);
          else
            e: for (i = g; F !== null; ) {
              if (((s = F), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Li(9, s);
                  }
                } catch (R) {
                  me(s, s.return, R);
                }
              if (s === i) {
                F = null;
                break e;
              }
              var N = s.sibling;
              if (N !== null) {
                (N.return = s.return), (F = N);
                break e;
              }
              F = s.return;
            }
        }
        if (
          ((Q = l), Mn(), At && typeof At.onPostCommitFiberRoot == 'function')
        )
          try {
            At.onPostCommitFiberRoot(Si, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (ft.transition = t);
    }
  }
  return !1;
}
function Ld(e, t, n) {
  (t = Ar(n, t)),
    (t = lh(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = Ue()),
    e !== null && (Jl(e, 1, t), Xe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Ld(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (kn === null || !kn.has(r)))
        ) {
          (e = Ar(n, e)),
            (e = oh(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = Ue()),
            t !== null && (Jl(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ug(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (De & n) === n &&
      (we === 4 || (we === 3 && (De & 130023424) === De && 500 > ge() - _u)
        ? Wn(e, 0)
        : (Lu |= n)),
    Xe(e, t);
}
function kh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ho), (ho <<= 1), (ho & 130023424) === 0 && (ho = 4194304)));
  var n = Ue();
  (e = en(e, t)), e !== null && (Jl(e, t, n), Xe(e, n));
}
function Bg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kh(e, n);
}
function Hg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), kh(e, n);
}
var Rh;
Rh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Qe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Qe = !1), Tg(e, t, n);
      Qe = (e.flags & 131072) !== 0;
    }
  else (Qe = !1), se && (t.flags & 1048576) !== 0 && Op(t, ni, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ao(e, t), (e = t.pendingProps);
      var l = Mr(t, Ae.current);
      Or(t, n), (l = ku(null, t, r, e, l, n));
      var o = Ru();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), ei(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Eu(t),
            (l.updater = Oi),
            (t.stateNode = l),
            (l._reactInternals = t),
            ys(t, r, e, n),
            (t = ws(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && pu(t), je(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ao(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wg(r)),
          (e = wt(r, e)),
          l)
        ) {
          case 0:
            t = Es(null, t, r, e, n);
            break e;
          case 1:
            t = wd(null, t, r, e, n);
            break e;
          case 11:
            t = xd(null, t, r, e, n);
            break e;
          case 14:
            t = Ed(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        Es(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        wd(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((uh(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Mp(e, t),
          oi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Ar(Error(P(423)), t)), (t = Nd(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Ar(Error(P(424)), t)), (t = Nd(e, t, r, n, l));
            break e;
          } else
            for (
              tt = Sn(t.stateNode.containerInfo.firstChild),
                nt = t,
                se = !0,
                St = null,
                n = Ap(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ir(), r === l)) {
            t = tn(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $p(t),
        e === null && ms(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        cs(r, l) ? (i = null) : o !== null && cs(r, o) && (t.flags |= 32),
        sh(e, t),
        je(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ms(t), null;
    case 13:
      return ch(e, t, n);
    case 4:
      return (
        wu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        xd(e, t, r, l, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          re(ri, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Pt(o.value, i)) {
            if (o.children === l.children && !Ge.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Qt(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      vs(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(P(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  vs(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        je(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (l = ht(l)),
        (r = r(l)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = wt(r, t.pendingProps)),
        (l = wt(r.type, l)),
        Ed(e, t, r, l, n)
      );
    case 15:
      return ih(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : wt(r, l)),
        Ao(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), ei(t)) : (e = !1),
        Or(t, n),
        Fp(t, r, l),
        ys(t, r, l, n),
        ws(null, t, r, !0, e, n)
      );
    case 19:
      return dh(e, t, n);
    case 22:
      return ah(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Ph(e, t) {
  return qf(e, t);
}
function Vg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, n, r) {
  return new Vg(e, t, n, r);
}
function bu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wg(e) {
  if (typeof e == 'function') return bu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tu)) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function Pn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zo(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) bu(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case dr:
        return Kn(n.children, l, o, t);
      case eu:
        (i = 8), (l |= 8);
        break;
      case Ba:
        return (
          (e = dt(12, n, t, l | 2)), (e.elementType = Ba), (e.lanes = o), e
        );
      case Ha:
        return (e = dt(13, n, t, l)), (e.elementType = Ha), (e.lanes = o), e;
      case Va:
        return (e = dt(19, n, t, l)), (e.elementType = Va), (e.lanes = o), e;
      case bf:
        return Mi(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case If:
              i = 10;
              break e;
            case Ff:
              i = 9;
              break e;
            case tu:
              i = 11;
              break e;
            case nu:
              i = 14;
              break e;
            case pn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = dt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Kn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function Mi(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = bf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sa(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function Ca(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Kg(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = la(0)),
    (this.expirationTimes = la(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = la(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Kg(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = dt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(o),
    e
  );
}
function Qg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dh(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return Pp(e, n, t);
  }
  return t;
}
function Oh(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Au(n, r, !0, e, l, o, i, s, u)),
    (e.context = Dh(null)),
    (n = e.current),
    (r = Ue()),
    (l = Rn(n)),
    (o = Qt(r, l)),
    (o.callback = t != null ? t : null),
    Cn(n, o, l),
    (e.current.lanes = l),
    Jl(e, l, r),
    Xe(e, r),
    e
  );
}
function Ii(e, t, n, r) {
  var l = t.current,
    o = Ue(),
    i = Rn(l);
  return (
    (n = Dh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(l, t, i)),
    e !== null && (Rt(e, l, i, o), Io(e, l, i)),
    i
  );
}
function pi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _d(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $u(e, t) {
  _d(e, t), (e = e.alternate) && _d(e, t);
}
function Gg() {
  return null;
}
var Th =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ju(e) {
  this._internalRoot = e;
}
Fi.prototype.render = ju.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ii(e, t, null, null);
};
Fi.prototype.unmount = ju.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      Ii(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Fi(e) {
  this._internalRoot = e;
}
Fi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ip();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && sp(e);
  }
};
function zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Md() {}
function Yg(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = pi(i);
        o.call(c);
      };
    }
    var i = Oh(t, r, e, 0, null, !1, !1, '', Md);
    return (
      (e._reactRootContainer = i),
      (e[qt] = i.current),
      Al(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var c = pi(u);
      s.call(c);
    };
  }
  var u = Au(e, 0, !1, null, null, !1, !1, '', Md);
  return (
    (e._reactRootContainer = u),
    (e[qt] = u.current),
    Al(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      Ii(t, u, n, r);
    }),
    u
  );
}
function Ai(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var s = l;
      l = function () {
        var u = pi(i);
        s.call(u);
      };
    }
    Ii(t, i, e, l);
  } else i = Yg(n, t, e, l, r);
  return pi(i);
}
lp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hl(t.pendingLanes);
        n !== 0 &&
          (ou(t, n | 1),
          Xe(t, ge()),
          (Q & 6) === 0 && (($r = ge() + 500), Mn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = en(e, 1);
        if (r !== null) {
          var l = Ue();
          Rt(r, e, 1, l);
        }
      }),
        $u(e, 1);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Ue();
      Rt(t, e, 134217728, n);
    }
    $u(e, 134217728);
  }
};
op = function (e) {
  if (e.tag === 13) {
    var t = Rn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Ue();
      Rt(n, e, t, r);
    }
    $u(e, t);
  }
};
ip = function () {
  return J;
};
ap = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
es = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Qa(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Pi(r);
            if (!l) throw Error(P(90));
            $f(r), Qa(r, l);
          }
        }
      }
      break;
    case 'textarea':
      zf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && kr(e, !!n.multiple, t, !1);
  }
};
Qf = Mu;
Gf = Zn;
var Xg = { usingClientEntryPoint: !1, Events: [ql, mr, Pi, Wf, Kf, Mu] },
  ol = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Jg = {
    bundleType: ol.bundleType,
    version: ol.version,
    rendererPackageName: ol.rendererPackageName,
    rendererConfig: ol.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ol.findFiberByHostInstance || Gg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ko.isDisabled && ko.supportsFiber)
    try {
      (Si = ko.inject(Jg)), (At = ko);
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zu(t)) throw Error(P(200));
  return Qg(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!zu(e)) throw Error(P(299));
  var n = !1,
    r = '',
    l = Th;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, l)),
    (e[qt] = t.current),
    Al(e.nodeType === 8 ? e.parentNode : e),
    new ju(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)));
  return (e = Jf(t)), (e = e === null ? null : e.stateNode), e;
};
ot.flushSync = function (e) {
  return Zn(e);
};
ot.hydrate = function (e, t, n) {
  if (!bi(t)) throw Error(P(200));
  return Ai(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!zu(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Th;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Oh(t, null, e, 1, n != null ? n : null, l, !1, o, i)),
    (e[qt] = t.current),
    Al(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Fi(t);
};
ot.render = function (e, t, n) {
  if (!bi(t)) throw Error(P(200));
  return Ai(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!bi(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Zn(function () {
        Ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = Mu;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!bi(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ai(e, t, n, !1, r);
};
ot.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ot);
})(Ks);
const Nr = Nf(Ks.exports);
var Id = Ks.exports;
(ja.createRoot = Id.createRoot), (ja.hydrateRoot = Id.hydrateRoot);
/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var ae;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(ae || (ae = {}));
const Fd = 'popstate';
function Lh(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ['/'], initialIndex: n, v5Compat: r = !1 } = e,
    l;
  l = t.map((f, m) =>
    d(f, typeof f == 'string' ? null : f.state, m === 0 ? 'default' : void 0),
  );
  let o = u(n == null ? l.length - 1 : n),
    i = ae.Pop,
    s = null;
  function u(f) {
    return Math.min(Math.max(f, 0), l.length - 1);
  }
  function c() {
    return l[o];
  }
  function d(f, m, x) {
    m === void 0 && (m = null);
    let y = Gt(l ? c().pathname : '/', f, m, x);
    return (
      Ih(
        y.pathname.charAt(0) === '/',
        'relative pathnames are not supported in memory history: ' +
          JSON.stringify(f),
      ),
      y
    );
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return i;
    },
    get location() {
      return c();
    },
    createHref(f) {
      return typeof f == 'string' ? f : nn(f);
    },
    push(f, m) {
      i = ae.Push;
      let x = d(f, m);
      (o += 1),
        l.splice(o, l.length, x),
        r && s && s({ action: i, location: x });
    },
    replace(f, m) {
      i = ae.Replace;
      let x = d(f, m);
      (l[o] = x), r && s && s({ action: i, location: x });
    },
    go(f) {
      (i = ae.Pop), (o = u(o + f)), s && s({ action: i, location: c() });
    },
    listen(f) {
      return (
        (s = f),
        () => {
          s = null;
        }
      );
    },
  };
}
function _h(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: s } = r.location;
    return Gt(
      '',
      { pathname: o, search: i, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : nn(l);
  }
  return Fh(t, n, null, e);
}
function Mh(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = '/',
      search: s = '',
      hash: u = '',
    } = Dt(l.location.hash.substr(1));
    return Gt(
      '',
      { pathname: i, search: s, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(l, o) {
    let i = l.document.querySelector('base'),
      s = '';
    if (i && i.getAttribute('href')) {
      let u = l.location.href,
        c = u.indexOf('#');
      s = c === -1 ? u : u.slice(0, c);
    }
    return s + '#' + (typeof o == 'string' ? o : nn(o));
  }
  function r(l, o) {
    Ih(
      l.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(o) +
        ')',
    );
  }
  return Fh(t, n, r, e);
}
function Ih(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Zg() {
  return Math.random().toString(36).substr(2, 8);
}
function bd(e) {
  return { usr: e.state, key: e.key };
}
function Gt(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || Zg() },
    )
  );
}
function nn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Fh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    s = ae.Pop,
    u = null;
  function c() {
    (s = ae.Pop), u && u({ action: s, location: f.location });
  }
  function d(m, x) {
    s = ae.Push;
    let y = Gt(f.location, m, x);
    n && n(y, m);
    let S = bd(y),
      v = f.createHref(y);
    try {
      i.pushState(S, '', v);
    } catch {
      l.location.assign(v);
    }
    o && u && u({ action: s, location: y });
  }
  function p(m, x) {
    s = ae.Replace;
    let y = Gt(f.location, m, x);
    n && n(y, m);
    let S = bd(y),
      v = f.createHref(y);
    i.replaceState(S, '', v), o && u && u({ action: s, location: y });
  }
  let f = {
    get action() {
      return s;
    },
    get location() {
      return e(l, i);
    },
    listen(m) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Fd, c),
        (u = m),
        () => {
          l.removeEventListener(Fd, c), (u = null);
        }
      );
    },
    createHref(m) {
      return t(l, m);
    },
    push: d,
    replace: p,
    go(m) {
      return i.go(m);
    },
  };
  return f;
}
var Me;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Me || (Me = {}));
function qg(e) {
  return e.index === !0;
}
function bh(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let o = [...t, l],
        i = typeof r.id == 'string' ? r.id : o.join('-');
      return (
        z(
          r.index !== !0 || !r.children,
          'Cannot specify children on an index route',
        ),
        z(
          !n.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        n.add(i),
        qg(r)
          ? ce({}, r, { id: i })
          : ce({}, r, {
              id: i,
              children: r.children ? bh(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function Sr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Dt(t) : t,
    l = $h(r.pathname || '/', n);
  if (l == null) return null;
  let o = Ah(e);
  e0(o);
  let i = null;
  for (let s = 0; i == null && s < o.length; ++s) i = u0(o[s], l);
  return i;
}
function Ah(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''),
    e.forEach((l, o) => {
      let i = {
        relativePath: l.path || '',
        caseSensitive: l.caseSensitive === !0,
        childrenIndex: o,
        route: l,
      };
      i.relativePath.startsWith('/') &&
        (z(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.',
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let s = Yt([r, i.relativePath]),
        u = n.concat(i);
      l.children &&
        l.children.length > 0 &&
        (z(
          l.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + s + '".'),
        ),
        Ah(l.children, t, u, s)),
        !(l.path == null && !l.index) &&
          t.push({ path: s, score: a0(s, l.index), routesMeta: u });
    }),
    t
  );
}
function e0(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : s0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const t0 = /^:\w+$/,
  n0 = 3,
  r0 = 2,
  l0 = 1,
  o0 = 10,
  i0 = -2,
  Ad = (e) => e === '*';
function a0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Ad) && (r += i0),
    t && (r += r0),
    n
      .filter((l) => !Ad(l))
      .reduce((l, o) => l + (t0.test(o) ? n0 : o === '' ? l0 : o0), r)
  );
}
function s0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function u0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let s = n[i],
      u = i === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      d = $i(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c,
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let p = s.route;
    o.push({
      params: r,
      pathname: Yt([l, d.pathname]),
      pathnameBase: h0(Yt([l, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== '/' && (l = Yt([l, d.pathnameBase]));
  }
  return o;
}
function c0(e, t) {
  return (
    t === void 0 && (t = {}),
    e
      .replace(
        /:(\w+)/g,
        (n, r) => (z(t[r] != null, 'Missing ":' + r + '" param'), t[r]),
      )
      .replace(/(\/?)\*/, (n, r, l, o) => {
        const i = '*';
        return t[i] == null ? (o === '/*' ? '/' : '') : '' + r + t[i];
      })
  );
}
function $i(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = d0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    s = l.slice(1);
  return {
    params: r.reduce((c, d, p) => {
      if (d === '*') {
        let f = s[p] || '';
        i = o.slice(0, o.length - f.length).replace(/(.)\/+$/, '$1');
      }
      return (c[d] = f0(s[p] || '', d)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function d0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jh(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (i, s) => (r.push(s), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function f0(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      jh(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function $h(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function z(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function jh(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zh(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : p0(n, t)) : t,
    search: m0(r),
    hash: v0(l),
  };
}
function p0(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function ka(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Uh(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Dt(e))
    : ((l = ce({}, e)),
      z(
        !l.pathname || !l.pathname.includes('?'),
        ka('?', 'pathname', 'search', l),
      ),
      z(
        !l.pathname || !l.pathname.includes('#'),
        ka('#', 'pathname', 'hash', l),
      ),
      z(!l.search || !l.search.includes('#'), ka('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    s;
  if (r || i == null) s = n;
  else {
    let p = t.length - 1;
    if (i.startsWith('..')) {
      let f = i.split('/');
      for (; f[0] === '..'; ) f.shift(), (p -= 1);
      l.pathname = f.join('/');
    }
    s = p >= 0 ? t[p] : '/';
  }
  let u = zh(l, s),
    c = i && i !== '/' && i.endsWith('/'),
    d = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (c || d) && (u.pathname += '/'), u;
}
const Yt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  h0 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  m0 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  v0 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  g0 = function (t, n) {
    n === void 0 && (n = {});
    let r = typeof n == 'number' ? { status: n } : n,
      l = new Headers(r.headers);
    return (
      l.has('Content-Type') ||
        l.set('Content-Type', 'application/json; charset=utf-8'),
      new Response(JSON.stringify(t), ce({}, r, { headers: l }))
    );
  };
class hi extends Error {}
class Bh {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      z(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let n;
    (this.abortPromise = new Promise((l, o) => (n = o))),
      (this.controller = new AbortController());
    let r = () => n(new hi('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((l, o) => {
        let [i, s] = o;
        return Object.assign(l, { [i]: this.trackPromise(i, s) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, null, l),
      (l) => this.onSettle(r, t, l),
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof hi)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const o = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        o && o(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }), o && o(!1), l);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener('abort', r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      z(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: x0(l) });
      }, {})
    );
  }
}
function y0(e) {
  return e instanceof Promise && e._tracked === !0;
}
function x0(e) {
  if (!y0(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
function E0(e) {
  return new Bh(e);
}
const w0 = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, ce({}, r, { headers: l }));
};
class Hr {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ''), (this.data = r);
  }
}
function Uu(e) {
  return e instanceof Hr;
}
const Ra = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  N0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  };
function Bu(e) {
  z(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let t = bh(e.routes),
    n = null,
    r = new Set(),
    l = null,
    o = null,
    i = null,
    s = !1,
    u = Sr(t, e.history.location, e.basename),
    c = null;
  if (u == null) {
    let { matches: k, route: D, error: M } = Bd(t);
    (u = k), (c = { [D.id]: M });
  }
  let d = !u.some((k) => k.route.loader) || e.hydrationData != null,
    p,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: u,
      initialized: d,
      navigation: Ra,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
    },
    m = ae.Pop,
    x = !1,
    y,
    S = !1,
    v = !1,
    g = [],
    E = [],
    N = new Map(),
    R = 0,
    T = -1,
    O = new Map(),
    _ = new Set(),
    I = new Map(),
    $ = new Map();
  function xe() {
    return (
      (n = e.history.listen((k) => {
        let { action: D, location: M } = k;
        return L(D, M);
      })),
      f.initialized || L(ae.Pop, f.location),
      p
    );
  }
  function Je() {
    n && n(), r.clear(), y && y.abort(), f.fetchers.forEach((k, D) => Fn(D));
  }
  function $e(k) {
    return r.add(k), () => r.delete(k);
  }
  function te(k) {
    (f = ce({}, f, k)), r.forEach((D) => D(f));
  }
  function Z(k, D) {
    var M;
    let B =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        f.navigation.state === 'loading' &&
        ((M = f.navigation.formAction) == null ? void 0 : M.split('?')[0]) ===
          k.pathname,
      H = D.loaderData
        ? { loaderData: Da(f.loaderData, D.loaderData, D.matches || []) }
        : {};
    te(
      ce({}, B ? {} : { actionData: null }, D, H, {
        historyAction: m,
        location: k,
        initialized: !0,
        navigation: Ra,
        revalidation: 'idle',
        restoreScrollPosition: f.navigation.formData
          ? !1
          : Sc(k, D.matches || f.matches),
        preventScrollReset: x,
      }),
    ),
      S ||
        m === ae.Pop ||
        (m === ae.Push
          ? e.history.push(k, k.state)
          : m === ae.Replace && e.history.replace(k, k.state)),
      (m = ae.Pop),
      (x = !1),
      (S = !1),
      (v = !1),
      (g = []),
      (E = []);
  }
  async function yt(k, D) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let { path: M, submission: B, error: H } = $d(k, D),
      ue = Gt(f.location, M, D && D.state),
      X = (D && D.replace) === !0 || B != null ? ae.Replace : ae.Push,
      K = D && 'preventScrollReset' in D ? D.preventScrollReset === !0 : void 0;
    return await L(X, ue, {
      submission: B,
      pendingError: H,
      preventScrollReset: K,
      replace: D && D.replace,
    });
  }
  function Ze() {
    if (
      (st(),
      te({ revalidation: 'loading' }),
      f.navigation.state !== 'submitting')
    ) {
      if (f.navigation.state === 'idle') {
        L(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      L(m || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function L(k, D, M) {
    y && y.abort(),
      (y = null),
      (m = k),
      (S = (M && M.startUninterruptedRevalidation) === !0),
      Ov(f.location, f.matches),
      (x = (M && M.preventScrollReset) === !0);
    let B = M && M.overrideNavigation,
      H = Sr(t, D, e.basename);
    if (!H) {
      let { matches: jt, route: zt, error: An } = Bd(t);
      Ji(), Z(D, { matches: jt, loaderData: {}, errors: { [zt.id]: An } });
      return;
    }
    if (R0(f.location, D)) {
      Z(D, { matches: H });
      return;
    }
    y = new AbortController();
    let ue = al(D, y.signal, M && M.submission),
      X,
      K;
    if (M && M.pendingError) K = { [Cr(H).route.id]: M.pendingError };
    else if (M && M.submission) {
      let jt = await j(ue, D, M.submission, H, { replace: M.replace });
      if (jt.shortCircuited) return;
      (X = jt.pendingActionData),
        (K = jt.pendingActionError),
        (B = ce({ state: 'loading', location: D }, M.submission));
    }
    let {
      shortCircuited: ee,
      loaderData: ve,
      errors: ke,
    } = await U(ue, D, H, B, M && M.submission, M && M.replace, X, K);
    ee || ((y = null), Z(D, { matches: H, loaderData: ve, errors: ke }));
  }
  async function j(k, D, M, B, H) {
    st();
    let ue = ce({ state: 'submitting', location: D }, M);
    te({ navigation: ue });
    let X,
      K = Qd(B, D);
    if (!K.route.action) X = Hd(D);
    else if (((X = await il('action', k, K)), k.signal.aborted))
      return { shortCircuited: !0 };
    if (Lr(X)) {
      let ee = ce(
        { state: 'loading', location: Gt(f.location, X.location) },
        M,
      );
      return await he(X, ee, H && H.replace), { shortCircuited: !0 };
    }
    if (Dl(X)) {
      let ee = Cr(B, K.route.id);
      return (
        (H && H.replace) !== !0 && (m = ae.Push),
        { pendingActionError: { [ee.route.id]: X.error } }
      );
    }
    if (Vn(X)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [K.route.id]: X.data } };
  }
  async function U(k, D, M, B, H, ue, X, K) {
    let ee = B;
    ee ||
      (ee = {
        state: 'loading',
        location: D,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [ve, ke] = jd(f, M, H, D, v, g, E, X, K, I);
    if (
      (Ji(
        (Te) =>
          !(M && M.some((We) => We.route.id === Te)) ||
          (ve && ve.some((We) => We.route.id === Te)),
      ),
      ve.length === 0 && ke.length === 0)
    )
      return (
        Z(D, {
          matches: M,
          loaderData: Da(f.loaderData, {}, M),
          errors: K || null,
          actionData: X || null,
        }),
        { shortCircuited: !0 }
      );
    S ||
      (ke.forEach((Te) => {
        let [We] = Te;
        const cn = f.fetchers.get(We);
        let ao = {
          state: 'loading',
          data: cn && cn.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        f.fetchers.set(We, ao);
      }),
      te(
        ce(
          { navigation: ee, actionData: X || f.actionData || null },
          ke.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
        ),
      )),
      (T = ++R),
      ke.forEach((Te) => {
        let [We] = Te;
        return N.set(We, y);
      });
    let {
      results: jt,
      loaderResults: zt,
      fetcherResults: An,
    } = await Ne(f.matches, ve, ke, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    ke.forEach((Te) => {
      let [We] = Te;
      return N.delete(We);
    });
    let Jr = Vd(jt);
    if (Jr) {
      let Te = Pa(f, Jr);
      return await he(Jr, Te, ue), { shortCircuited: !0 };
    }
    let { loaderData: io, errors: or } = Ud(f, M, ve, zt, K, ke, An, $);
    $.forEach((Te, We) => {
      Te.subscribe((cn) => {
        (cn || Te.done) && $.delete(We);
      });
    }),
      lr();
    let Zi = q(T);
    return ce(
      { loaderData: io, errors: or },
      Zi || ke.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
    );
  }
  function V(k) {
    return f.fetchers.get(k) || N0;
  }
  function ne(k, D, M, B) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    N.has(k) && bn(k);
    let H = Sr(t, M, e.basename);
    if (!H) {
      Xr(k, D, new Hr(404, 'Not Found', null));
      return;
    }
    let { path: ue, submission: X } = $d(M, B, !0),
      K = Qd(H, ue);
    if (X) {
      _t(k, D, ue, K, X);
      return;
    }
    I.set(k, [ue, K]), Ve(k, D, ue, K);
  }
  async function _t(k, D, M, B, H) {
    if ((st(), I.delete(k), !B.route.action)) {
      let { error: xt } = Hd(M);
      Xr(k, D, xt);
      return;
    }
    let ue = f.fetchers.get(k),
      X = ce({ state: 'submitting' }, H, { data: ue && ue.data });
    f.fetchers.set(k, X), te({ fetchers: new Map(f.fetchers) });
    let K = new AbortController(),
      ee = al(M, K.signal, H);
    N.set(k, K);
    let ve = await il('action', ee, B);
    if (ee.signal.aborted) {
      N.get(k) === K && N.delete(k);
      return;
    }
    if (Lr(ve)) {
      N.delete(k), _.add(k);
      let xt = ce({ state: 'loading' }, H, { data: void 0 });
      f.fetchers.set(k, xt), te({ fetchers: new Map(f.fetchers) });
      let Ut = ce(
        { state: 'loading', location: Gt(f.location, ve.location) },
        H,
      );
      await he(ve, Ut);
      return;
    }
    if (Dl(ve)) {
      Xr(k, D, ve.error);
      return;
    }
    Vn(ve) && z(!1, 'defer() is not supported in actions');
    let ke = f.navigation.location || f.location,
      jt = al(ke, K.signal),
      zt =
        f.navigation.state !== 'idle'
          ? Sr(t, f.navigation.location, e.basename)
          : f.matches;
    z(zt, "Didn't find any matches after fetcher action");
    let An = ++R;
    O.set(k, An);
    let Jr = ce({ state: 'loading', data: ve.data }, H);
    f.fetchers.set(k, Jr);
    let [io, or] = jd(
      f,
      zt,
      H,
      ke,
      v,
      g,
      E,
      { [B.route.id]: ve.data },
      void 0,
      I,
    );
    or
      .filter((xt) => {
        let [Ut] = xt;
        return Ut !== k;
      })
      .forEach((xt) => {
        let [Ut] = xt,
          kc = f.fetchers.get(Ut),
          _v = {
            state: 'loading',
            data: kc && kc.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        f.fetchers.set(Ut, _v), N.set(Ut, K);
      }),
      te({ fetchers: new Map(f.fetchers) });
    let {
      results: Zi,
      loaderResults: Te,
      fetcherResults: We,
    } = await Ne(f.matches, io, or, jt);
    if (K.signal.aborted) return;
    O.delete(k),
      N.delete(k),
      or.forEach((xt) => {
        let [Ut] = xt;
        return N.delete(Ut);
      });
    let cn = Vd(Zi);
    if (cn) {
      let xt = Pa(f, cn);
      await he(cn, xt);
      return;
    }
    let { loaderData: ao, errors: Cc } = Ud(
        f,
        f.matches,
        io,
        Te,
        void 0,
        or,
        We,
        $,
      ),
      Tv = {
        state: 'idle',
        data: ve.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    f.fetchers.set(k, Tv);
    let Lv = q(An);
    f.navigation.state === 'loading' && An > T
      ? (z(m, 'Expected pending action'),
        y && y.abort(),
        Z(f.navigation.location, {
          matches: zt,
          loaderData: ao,
          errors: Cc,
          fetchers: new Map(f.fetchers),
        }))
      : (te(
          ce(
            { errors: Cc, loaderData: Da(f.loaderData, ao, zt) },
            Lv ? { fetchers: new Map(f.fetchers) } : {},
          ),
        ),
        (v = !1));
  }
  async function Ve(k, D, M, B) {
    let H = f.fetchers.get(k),
      ue = {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: H && H.data,
      };
    f.fetchers.set(k, ue), te({ fetchers: new Map(f.fetchers) });
    let X = new AbortController(),
      K = al(M, X.signal);
    N.set(k, X);
    let ee = await il('loader', K, B);
    if (
      (Vn(ee) && (ee = (await Wh(ee, K.signal, !0)) || ee),
      N.get(k) === X && N.delete(k),
      K.signal.aborted)
    )
      return;
    if (Lr(ee)) {
      let ke = Pa(f, ee);
      await he(ee, ke);
      return;
    }
    if (Dl(ee)) {
      let ke = Cr(f.matches, D);
      f.fetchers.delete(k),
        te({
          fetchers: new Map(f.fetchers),
          errors: { [ke.route.id]: ee.error },
        });
      return;
    }
    z(!Vn(ee), 'Unhandled fetcher deferred data');
    let ve = {
      state: 'idle',
      data: ee.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    f.fetchers.set(k, ve), te({ fetchers: new Map(f.fetchers) });
  }
  async function he(k, D, M) {
    k.revalidate && (v = !0),
      z(D.location, 'Expected a location on the redirect navigation'),
      (y = null);
    let B = M === !0 ? ae.Replace : ae.Push;
    await L(B, D.location, { overrideNavigation: D });
  }
  async function Ne(k, D, M, B) {
    let H = await Promise.all([
        ...D.map((K) => il('loader', B, K)),
        ...M.map((K) => {
          let [, ee, ve] = K;
          return il('loader', al(ee, B.signal), ve);
        }),
      ]),
      ue = H.slice(0, D.length),
      X = H.slice(D.length);
    return (
      await Promise.all([
        Wd(k, D, ue, B.signal, !1, f.loaderData),
        Wd(
          k,
          M.map((K) => {
            let [, , ee] = K;
            return ee;
          }),
          X,
          B.signal,
          !0,
        ),
      ]),
      { results: H, loaderResults: ue, fetcherResults: X }
    );
  }
  function st() {
    (v = !0),
      g.push(...Ji()),
      I.forEach((k, D) => {
        N.has(D) && (E.push(D), bn(D));
      });
  }
  function Xr(k, D, M) {
    let B = Cr(f.matches, D);
    Fn(k), te({ errors: { [B.route.id]: M }, fetchers: new Map(f.fetchers) });
  }
  function Fn(k) {
    N.has(k) && bn(k),
      I.delete(k),
      O.delete(k),
      _.delete(k),
      f.fetchers.delete(k);
  }
  function bn(k) {
    let D = N.get(k);
    z(D, 'Expected fetch controller: ' + k), D.abort(), N.delete(k);
  }
  function rr(k) {
    for (let D of k) {
      let B = {
        state: 'idle',
        data: V(D).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      f.fetchers.set(D, B);
    }
  }
  function lr() {
    let k = [];
    for (let D of _) {
      let M = f.fetchers.get(D);
      z(M, 'Expected fetcher: ' + D),
        M.state === 'loading' && (_.delete(D), k.push(D));
    }
    rr(k);
  }
  function q(k) {
    let D = [];
    for (let [M, B] of O)
      if (B < k) {
        let H = f.fetchers.get(M);
        z(H, 'Expected fetcher: ' + M),
          H.state === 'loading' && (bn(M), O.delete(M), D.push(M));
      }
    return rr(D), D.length > 0;
  }
  function Ji(k) {
    let D = [];
    return (
      $.forEach((M, B) => {
        (!k || k(B)) && (M.cancel(), D.push(B), $.delete(B));
      }),
      D
    );
  }
  function Dv(k, D, M) {
    if (
      ((l = k), (i = D), (o = M || ((B) => B.key)), !s && f.navigation === Ra)
    ) {
      s = !0;
      let B = Sc(f.location, f.matches);
      B != null && te({ restoreScrollPosition: B });
    }
    return () => {
      (l = null), (i = null), (o = null);
    };
  }
  function Ov(k, D) {
    if (l && o && i) {
      let M = D.map((H) => Kd(H, f.loaderData)),
        B = o(k, M) || k.key;
      l[B] = i();
    }
  }
  function Sc(k, D) {
    if (l && o && i) {
      let M = D.map((ue) => Kd(ue, f.loaderData)),
        B = o(k, M) || k.key,
        H = l[B];
      if (typeof H == 'number') return H;
    }
    return null;
  }
  return (
    (p = {
      get basename() {
        return e.basename;
      },
      get state() {
        return f;
      },
      get routes() {
        return t;
      },
      initialize: xe,
      subscribe: $e,
      enableScrollRestoration: Dv,
      navigate: yt,
      fetch: ne,
      revalidate: Ze,
      createHref: ji,
      getFetcher: V,
      deleteFetcher: Fn,
      dispose: Je,
      _internalFetchControllers: N,
      _internalActiveDeferreds: $,
    }),
    p
  );
}
function $d(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : nn(e);
  if (!t || (!('formMethod' in t) && !('formData' in t))) return { path: r };
  if (t.formMethod != null && t.formMethod !== 'get')
    return {
      path: r,
      submission: {
        formMethod: t.formMethod,
        formAction: ji(Dt(r)),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: r };
  let l = Dt(r);
  try {
    let o = Vh(t.formData);
    n && l.search && Kh(l.search) && o.append('index', ''),
      (l.search = '?' + o);
  } catch {
    return {
      path: r,
      error: new Hr(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET',
      ),
    };
  }
  return { path: nn(l) };
}
function Pa(e, t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: l,
    formData: o,
  } = e.navigation;
  return {
    state: 'loading',
    location: Gt(e.location, t.location),
    formMethod: n || void 0,
    formAction: r || void 0,
    formEncType: l || void 0,
    formData: o || void 0,
  };
}
function S0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function jd(e, t, n, r, l, o, i, s, u, c) {
  let d = u ? Object.values(u)[0] : s ? Object.values(s)[0] : null,
    p = u ? Object.keys(u)[0] : void 0,
    m = S0(t, p).filter(
      (y, S) =>
        y.route.loader != null &&
        (C0(e.loaderData, e.matches[S], y) ||
          o.some((v) => v === y.route.id) ||
          zd(e.location, e.matches[S], n, r, y, l, d)),
    ),
    x = [];
  return (
    c &&
      c.forEach((y, S) => {
        let [v, g] = y;
        i.includes(S)
          ? x.push([S, v, g])
          : l && zd(v, g, n, v, g, l, d) && x.push([S, v, g]);
      }),
    [m, x]
  );
}
function C0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Hh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function zd(e, t, n, r, l, o, i) {
  let s = Ms(e),
    u = t.params,
    c = Ms(r),
    d = l.params,
    p = Hh(t, l) || s.toString() === c.toString() || s.search !== c.search || o;
  if (l.route.shouldRevalidate) {
    let f = l.route.shouldRevalidate(
      ce({ currentUrl: s, currentParams: u, nextUrl: c, nextParams: d }, n, {
        actionResult: i,
        defaultShouldRevalidate: p,
      }),
    );
    if (typeof f == 'boolean') return f;
  }
  return p;
}
async function il(e, t, n, r, l) {
  r === void 0 && (r = !1), l === void 0 && (l = !1);
  let o,
    i,
    s,
    u = new Promise((d, p) => (s = p)),
    c = () => s();
  t.signal.addEventListener('abort', c);
  try {
    let d = n.route[e];
    z(
      d,
      'Could not find the ' + e + ' to run on the "' + n.route.id + '" route',
    ),
      (i = await Promise.race([d({ request: t, params: n.params }), u]));
  } catch (d) {
    (o = Me.error), (i = d);
  } finally {
    t.signal.removeEventListener('abort', c);
  }
  if (i instanceof Response) {
    let d = i.status,
      p = i.headers.get('Location');
    if (l) throw i;
    if (d >= 300 && d <= 399 && p != null) {
      if (r) throw i;
      return {
        type: Me.redirect,
        status: d,
        location: p,
        revalidate: i.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    let f,
      m = i.headers.get('Content-Type');
    return (
      m && m.startsWith('application/json')
        ? (f = await i.json())
        : (f = await i.text()),
      o === Me.error
        ? { type: o, error: new Hr(d, i.statusText, f), headers: i.headers }
        : { type: Me.data, data: f, statusCode: i.status, headers: i.headers }
    );
  }
  return o === Me.error
    ? { type: o, error: i }
    : i instanceof Bh
    ? { type: Me.deferred, deferredData: i }
    : { type: Me.data, data: i };
}
function al(e, t, n) {
  let r = Ms(e).toString(),
    l = { signal: t };
  if (n) {
    let { formMethod: o, formEncType: i, formData: s } = n;
    (l.method = o.toUpperCase()),
      (l.body = i === 'application/x-www-form-urlencoded' ? Vh(s) : s);
  }
  return new Request(r, l);
}
function Vh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    z(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
    ),
      t.append(n, r);
  return t;
}
function k0(e, t, n, r, l) {
  let o = {},
    i = null,
    s,
    u = !1,
    c = {};
  return (
    n.forEach((d, p) => {
      let f = t[p].route.id;
      if (
        (z(!Lr(d), 'Cannot handle redirect results in processLoaderData'),
        Dl(d))
      ) {
        let m = Cr(e, f),
          x = d.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (i = Object.assign(i || {}, { [m.route.id]: x })),
          u || ((u = !0), (s = Uu(d.error) ? d.error.status : 500)),
          d.headers && (c[f] = d.headers);
      } else
        Vn(d)
          ? (l && l.set(f, d.deferredData), (o[f] = d.deferredData.data))
          : ((o[f] = d.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !u &&
              (s = d.statusCode),
            d.headers && (c[f] = d.headers));
    }),
    r && (i = r),
    { loaderData: o, errors: i, statusCode: s || 200, loaderHeaders: c }
  );
}
function Ud(e, t, n, r, l, o, i, s) {
  let { loaderData: u, errors: c } = k0(t, n, r, l, s);
  for (let d = 0; d < o.length; d++) {
    let [p, , f] = o[d];
    z(
      i !== void 0 && i[d] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let m = i[d];
    if (Dl(m)) {
      let x = Cr(e.matches, f.route.id);
      (c && c[x.route.id]) || (c = ce({}, c, { [x.route.id]: m.error })),
        e.fetchers.delete(p);
    } else {
      if (Lr(m)) throw new Error('Unhandled fetcher revalidation redirect');
      if (Vn(m)) throw new Error('Unhandled fetcher deferred data');
      {
        let x = {
          state: 'idle',
          data: m.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(p, x);
      }
    }
  }
  return { loaderData: u, errors: c };
}
function Da(e, t, n) {
  let r = ce({}, t);
  return (
    n.forEach((l) => {
      let o = l.route.id;
      t[o] === void 0 && e[o] !== void 0 && (r[o] = e[o]);
    }),
    r
  );
}
function Cr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Bd(e) {
  let t = e.find((n) => n.index || n.path === '' || n.path === '/') || {
    id: '__shim-404-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
    error: new Hr(404, 'Not Found', null),
  };
}
function Hd(e) {
  let t = typeof e == 'string' ? e : ji(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + t + ']'),
    ),
    {
      type: Me.error,
      error: new Hr(
        405,
        'Method Not Allowed',
        'No action found for [' + t + ']',
      ),
    }
  );
}
function Vd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Lr(n)) return n;
  }
}
function ji(e) {
  return (e.pathname || '') + (e.search || '');
}
function R0(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function Vn(e) {
  return e.type === Me.deferred;
}
function Dl(e) {
  return e.type === Me.error;
}
function Lr(e) {
  return (e && e.type) === Me.redirect;
}
async function Wd(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let s = n[i],
      u = t[i],
      c = e.find((p) => p.route.id === u.route.id),
      d = c != null && !Hh(c, u) && (o && o[u.route.id]) !== void 0;
    Vn(s) &&
      (l || d) &&
      (await Wh(s, r, l).then((p) => {
        p && (n[i] = p || n[i]);
      }));
  }
}
async function Wh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Me.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: Me.error, error: l };
      }
    return { type: Me.data, data: e.deferredData.data };
  }
}
function Kh(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Kd(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Qd(e, t) {
  let n = typeof t == 'string' ? Dt(t).search : t.search;
  return e[e.length - 1].route.index && !Kh(n || '')
    ? e.slice(-2)[0]
    : e.slice(-1)[0];
}
function Ms(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    n = typeof e == 'string' ? e : ji(e);
  return new URL(n, t);
}
var zi = { exports: {} },
  Ui = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P0 = h.exports,
  D0 = Symbol.for('react.element'),
  O0 = Symbol.for('react.fragment'),
  T0 = Object.prototype.hasOwnProperty,
  L0 = P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qh(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) T0.call(t, r) && !_0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: D0,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: L0.current,
  };
}
Ui.Fragment = O0;
Ui.jsx = Qh;
Ui.jsxs = Qh;
(function (e) {
  e.exports = Ui;
})(zi);
const A = zi.exports.Fragment,
  a = zi.exports.jsx,
  w = zi.exports.jsxs;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mi.apply(this, arguments)
  );
}
function M0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const I0 = typeof Object.is == 'function' ? Object.is : M0,
  { useState: F0, useEffect: b0, useLayoutEffect: A0, useDebugValue: $0 } = za;
function j0(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = F0({ inst: { value: r, getSnapshot: t } });
  return (
    A0(() => {
      (l.value = r), (l.getSnapshot = t), Oa(l) && o({ inst: l });
    }, [e, r, t]),
    b0(
      () => (
        Oa(l) && o({ inst: l }),
        e(() => {
          Oa(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    $0(r),
    r
  );
}
function Oa(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !I0(n, r);
  } catch {
    return !0;
  }
}
function z0(e, t, n) {
  return t();
}
const U0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  B0 = !U0,
  H0 = B0 ? z0 : j0,
  V0 = 'useSyncExternalStore' in za ? ((e) => e.useSyncExternalStore)(za) : H0,
  Gh = h.exports.createContext(null),
  to = h.exports.createContext(null),
  tr = h.exports.createContext(null),
  vi = h.exports.createContext(null),
  no = h.exports.createContext(null),
  Vr = h.exports.createContext(null),
  vt = h.exports.createContext({ outlet: null, matches: [] }),
  Yh = h.exports.createContext(null);
function Xh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  In() || z(!1);
  let { basename: r, navigator: l } = h.exports.useContext(no),
    { hash: o, pathname: i, search: s } = jr(e, { relative: n }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Yt([r, i])),
    l.createHref({ pathname: u, search: s, hash: o })
  );
}
function In() {
  return h.exports.useContext(Vr) != null;
}
function an() {
  return In() || z(!1), h.exports.useContext(Vr).location;
}
function W0() {
  return h.exports.useContext(Vr).navigationType;
}
function Jh(e) {
  In() || z(!1);
  let { pathname: t } = an();
  return h.exports.useMemo(() => $i(e, t), [t, e]);
}
function Zh(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase),
  );
}
function at() {
  In() || z(!1);
  let { basename: e, navigator: t } = h.exports.useContext(no),
    { matches: n } = h.exports.useContext(vt),
    { pathname: r } = an(),
    l = JSON.stringify(Zh(n).map((s) => s.pathnameBase)),
    o = h.exports.useRef(!1);
  return (
    h.exports.useEffect(() => {
      o.current = !0;
    }),
    h.exports.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof s == 'number') {
          t.go(s);
          return;
        }
        let c = Uh(s, JSON.parse(l), r, u.relative === 'path');
        e !== '/' &&
          (c.pathname = c.pathname === '/' ? e : Yt([e, c.pathname])),
          (u.replace ? t.replace : t.push)(c, u.state, u);
      },
      [e, t, l, r],
    )
  );
}
const qh = h.exports.createContext(null);
function K0() {
  return h.exports.useContext(qh);
}
function em(e) {
  let t = h.exports.useContext(vt).outlet;
  return t && a(qh.Provider, { value: e, children: t });
}
function Wr() {
  let { matches: e } = h.exports.useContext(vt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function jr(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = h.exports.useContext(vt),
    { pathname: l } = an(),
    o = JSON.stringify(Zh(r).map((i) => i.pathnameBase));
  return h.exports.useMemo(
    () => Uh(e, JSON.parse(o), l, n === 'path'),
    [e, o, l, n],
  );
}
function tm(e, t) {
  In() || z(!1);
  let n = h.exports.useContext(tr),
    { matches: r } = h.exports.useContext(vt),
    l = r[r.length - 1],
    o = l ? l.params : {};
  l && l.pathname;
  let i = l ? l.pathnameBase : '/';
  l && l.route;
  let s = an(),
    u;
  if (t) {
    var c;
    let x = typeof t == 'string' ? Dt(t) : t;
    i === '/' || ((c = x.pathname) == null ? void 0 : c.startsWith(i)) || z(!1),
      (u = x);
  } else u = s;
  let d = u.pathname || '/',
    p = i === '/' ? d : d.slice(i.length) || '/',
    f = Sr(e, { pathname: p }),
    m = nm(
      f &&
        f.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, o, x.params),
            pathname: Yt([i, x.pathname]),
            pathnameBase: x.pathnameBase === '/' ? i : Yt([i, x.pathnameBase]),
          }),
        ),
      r,
      n || void 0,
    );
  return t
    ? a(Vr.Provider, {
        value: {
          location: mi(
            {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
            },
            u,
          ),
          navigationType: ae.Pop,
        },
        children: m,
      })
    : m;
}
function Q0() {
  let e = om(),
    t = Uu(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: r },
    o = { padding: '2px 4px', backgroundColor: r };
  return w(A, {
    children: [
      a('h2', { children: 'Unhandled Thrown Error!' }),
      a('h3', { style: { fontStyle: 'italic' }, children: t }),
      n ? a('pre', { style: l, children: n }) : null,
      a('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
      w('p', {
        children: [
          'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
          a('code', { style: o, children: 'errorElement' }),
          ' props on\xA0',
          a('code', { style: o, children: '<Route>' }),
        ],
      }),
    ],
  });
}
class G0 extends h.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? a(Yh.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function Y0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = h.exports.useContext(Gh);
  return (
    l && n.route.errorElement && (l._deepestRenderedBoundaryId = n.route.id),
    a(vt.Provider, { value: t, children: r })
  );
}
function nm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id]),
    );
    o >= 0 || z(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, s) => {
    let u = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      c = n ? i.route.errorElement || a(Q0, {}) : null,
      d = () =>
        a(Y0, {
          match: i,
          routeContext: { outlet: o, matches: t.concat(r.slice(0, s + 1)) },
          children: u ? c : i.route.element !== void 0 ? i.route.element : o,
        });
    return n && (i.route.errorElement || s === 0)
      ? a(G0, { location: n.location, component: c, error: u, children: d() })
      : d();
  }, null);
}
var Is;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(Is || (Is = {}));
var rn;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(rn || (rn = {}));
function X0(e) {
  let t = h.exports.useContext(to);
  return t || z(!1), t;
}
function nr(e) {
  let t = h.exports.useContext(tr);
  return t || z(!1), t;
}
function rm() {
  return nr(rn.UseNavigation).navigation;
}
function J0() {
  let e = X0(Is.UseRevalidator),
    t = nr(rn.UseRevalidator);
  return { revalidate: e.router.revalidate, state: t.revalidation };
}
function lm() {
  let { matches: e, loaderData: t } = nr(rn.UseMatches);
  return h.exports.useMemo(
    () =>
      e.map((n) => {
        let { pathname: r, params: l } = n;
        return {
          id: n.route.id,
          pathname: r,
          params: l,
          data: t[n.route.id],
          handle: n.route.handle,
        };
      }),
    [e, t],
  );
}
function Z0() {
  let e = nr(rn.UseLoaderData),
    t = h.exports.useContext(vt);
  t || z(!1);
  let n = t.matches[t.matches.length - 1];
  return n.route.id || z(!1), e.loaderData[n.route.id];
}
function q0(e) {
  return nr(rn.UseRouteLoaderData).loaderData[e];
}
function ey() {
  let e = nr(rn.UseActionData);
  return (
    h.exports.useContext(vt) || z(!1),
    Object.values((e == null ? void 0 : e.actionData) || {})[0]
  );
}
function om() {
  var e;
  let t = h.exports.useContext(Yh),
    n = nr(rn.UseRouteError),
    r = h.exports.useContext(vt),
    l = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || z(!1),
    l.route.id || z(!1),
    (e = n.errors) == null ? void 0 : e[l.route.id])
  );
}
function im() {
  let e = h.exports.useContext(vi);
  return e == null ? void 0 : e._data;
}
function ty() {
  let e = h.exports.useContext(vi);
  return e == null ? void 0 : e._error;
}
function ny(e) {
  let { fallbackElement: t, router: n } = e,
    r = V0(
      n.subscribe,
      () => n.state,
      () => n.state,
    ),
    l = h.exports.useMemo(
      () => ({
        createHref: n.createHref,
        go: (i) => n.navigate(i),
        push: (i, s, u) =>
          n.navigate(i, {
            state: s,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
        replace: (i, s, u) =>
          n.navigate(i, {
            replace: !0,
            state: s,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
      }),
      [n],
    ),
    o = n.basename || '/';
  return a(to.Provider, {
    value: { router: n, navigator: l, static: !1, basename: o },
    children: a(tr.Provider, {
      value: r,
      children: a(Kr, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: l,
        children: n.state.initialized ? a(Hu, {}) : t,
      }),
    }),
  });
}
function ry(e) {
  let { basename: t, children: n, initialEntries: r, initialIndex: l } = e,
    o = h.exports.useRef();
  o.current == null &&
    (o.current = Lh({ initialEntries: r, initialIndex: l, v5Compat: !0 }));
  let i = o.current,
    [s, u] = h.exports.useState({ action: i.action, location: i.location });
  return (
    h.exports.useLayoutEffect(() => i.listen(u), [i]),
    a(Kr, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: i,
    })
  );
}
function lt(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  In() || z(!1);
  let o = h.exports.useContext(tr),
    i = at();
  return (
    h.exports.useEffect(() => {
      (o && o.navigation.state !== 'idle') ||
        i(t, { replace: n, state: r, relative: l });
    }),
    null
  );
}
function ly(e) {
  return em(e.context);
}
function Re(e) {
  z(!1);
}
function Kr(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = ae.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  In() && z(!1);
  let s = t.replace(/^\/*/, '/'),
    u = h.exports.useMemo(
      () => ({ basename: s, navigator: o, static: i }),
      [s, o, i],
    );
  typeof r == 'string' && (r = Dt(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: f = null,
      key: m = 'default',
    } = r,
    x = h.exports.useMemo(() => {
      let y = $h(c, s);
      return y == null
        ? null
        : { pathname: y, search: d, hash: p, state: f, key: m };
    }, [s, c, d, p, f, m]);
  return x == null
    ? null
    : a(no.Provider, {
        value: u,
        children: a(Vr.Provider, {
          children: n,
          value: { location: x, navigationType: l },
        }),
      });
}
function Hu(e) {
  let { children: t, location: n } = e,
    r = h.exports.useContext(to),
    l = r && !t ? r.router.routes : Kl(t);
  return tm(l, n);
}
function oy(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return a(ay, {
    resolve: r,
    errorElement: n,
    children: a(sy, { children: t }),
  });
}
var qe;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(qe || (qe = {}));
const iy = new Promise(() => {});
class ay extends h.exports.Component {
  constructor(t) {
    super(t), (this.state = { error: null });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      o = qe.pending;
    if (!(r instanceof Promise))
      (o = qe.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      o = qe.error;
      let i = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => i });
    } else
      r._tracked
        ? ((l = r),
          (o =
            l._error !== void 0
              ? qe.error
              : l._data !== void 0
              ? qe.success
              : qe.pending))
        : ((o = qe.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (i) => Object.defineProperty(r, '_data', { get: () => i }),
            (i) => Object.defineProperty(r, '_error', { get: () => i }),
          )));
    if (o === qe.error && l._error instanceof hi) throw iy;
    if (o === qe.error && !n) throw l._error;
    if (o === qe.error) return a(vi.Provider, { value: l, children: n });
    if (o === qe.success) return a(vi.Provider, { value: l, children: t });
    throw l;
  }
}
function sy(e) {
  let { children: t } = e,
    n = im();
  return typeof t == 'function' ? t(n) : a(A, { children: t });
}
function Kl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    h.exports.Children.forEach(e, (r, l) => {
      if (!h.exports.isValidElement(r)) return;
      if (r.type === h.exports.Fragment) {
        n.push.apply(n, Kl(r.props.children, t));
        return;
      }
      r.type !== Re && z(!1), !r.props.index || !r.props.children || z(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = Kl(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function uy(e) {
  return nm(e);
}
function ro(e) {
  return e.map((t) => {
    let n = mi({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = ro(n.children)),
      n
    );
  });
}
function cy(e, t) {
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: Lh({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: ro(e),
  }).initialize();
}
/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gi() {
  return (
    (gi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gi.apply(this, arguments)
  );
}
function Vu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Uo = 'get',
  Ta = 'application/x-www-form-urlencoded';
function Bi(e) {
  return e != null && typeof e.tagName == 'string';
}
function dy(e) {
  return Bi(e) && e.tagName.toLowerCase() === 'button';
}
function fy(e) {
  return Bi(e) && e.tagName.toLowerCase() === 'form';
}
function py(e) {
  return Bi(e) && e.tagName.toLowerCase() === 'input';
}
function hy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function my(e, t) {
  return e.button === 0 && (!t || t === '_self') && !hy(e);
}
function yi(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, []),
    )
  );
}
function vy(e, t) {
  let n = yi(e);
  for (let r of t.keys())
    n.has(r) ||
      t.getAll(r).forEach((l) => {
        n.append(r, l);
      });
  return n;
}
function gy(e, t, n) {
  let r, l, o, i;
  if (fy(e)) {
    let d = n.submissionTrigger;
    (r = n.method || e.getAttribute('method') || Uo),
      (l = n.action || e.getAttribute('action') || t),
      (o = n.encType || e.getAttribute('enctype') || Ta),
      (i = new FormData(e)),
      d && d.name && i.append(d.name, d.value);
  } else if (dy(e) || (py(e) && (e.type === 'submit' || e.type === 'image'))) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    (r =
      n.method ||
      e.getAttribute('formmethod') ||
      d.getAttribute('method') ||
      Uo),
      (l =
        n.action ||
        e.getAttribute('formaction') ||
        d.getAttribute('action') ||
        t),
      (o =
        n.encType ||
        e.getAttribute('formenctype') ||
        d.getAttribute('enctype') ||
        Ta),
      (i = new FormData(d)),
      e.name && i.append(e.name, e.value);
  } else {
    if (Bi(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    if (
      ((r = n.method || Uo),
      (l = n.action || t),
      (o = n.encType || Ta),
      e instanceof FormData)
    )
      i = e;
    else if (((i = new FormData()), e instanceof URLSearchParams))
      for (let [d, p] of e) i.append(d, p);
    else if (e != null) for (let d of Object.keys(e)) i.append(d, e[d]);
  }
  let { protocol: s, host: u } = window.location;
  return { url: new URL(l, s + '//' + u), method: r, encType: o, formData: i };
}
const yy = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  xy = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ],
  Ey = [
    'reloadDocument',
    'replace',
    'method',
    'action',
    'onSubmit',
    'fetcherKey',
    'routeId',
    'relative',
  ];
function wy(e, t) {
  var n;
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: _h({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: ro(e),
  }).initialize();
}
function Ny(e, t) {
  var n;
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: Mh({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: ro(e),
  }).initialize();
}
function am(e) {
  let { basename: t, children: n, window: r } = e,
    l = h.exports.useRef();
  l.current == null && (l.current = _h({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, s] = h.exports.useState({ action: o.action, location: o.location });
  return (
    h.exports.useLayoutEffect(() => o.listen(s), [o]),
    a(Kr, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
function Sy(e) {
  let { basename: t, children: n, window: r } = e,
    l = h.exports.useRef();
  l.current == null && (l.current = Mh({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, s] = h.exports.useState({ action: o.action, location: o.location });
  return (
    h.exports.useLayoutEffect(() => o.listen(s), [o]),
    a(Kr, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
function Cy(e) {
  let { basename: t, children: n, history: r } = e;
  const [l, o] = h.exports.useState({ action: r.action, location: r.location });
  return (
    h.exports.useLayoutEffect(() => r.listen(o), [r]),
    a(Kr, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: r,
    })
  );
}
const Fe = h.exports.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: s,
        target: u,
        to: c,
        preventScrollReset: d,
      } = t,
      p = Vu(t, yy),
      f = Xh(c, { relative: l }),
      m = cm(c, {
        replace: i,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: l,
      });
    function x(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return a('a', { ...p, href: f, onClick: o ? r : x, ref: n, target: u });
  }),
  Wu = h.exports.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: s,
        to: u,
        children: c,
      } = t,
      d = Vu(t, xy),
      p = jr(u),
      f = Jh({ path: p.pathname, end: i, caseSensitive: l }),
      m = h.exports.useContext(tr),
      x = m == null ? void 0 : m.navigation.location,
      y = jr(x || ''),
      v =
        h.exports.useMemo(
          () =>
            x
              ? $i({ path: p.pathname, end: i, caseSensitive: l }, y.pathname)
              : null,
          [x, p.pathname, l, i, y.pathname],
        ) != null,
      g = f != null,
      E = g ? r : void 0,
      N;
    typeof o == 'function'
      ? (N = o({ isActive: g, isPending: v }))
      : (N = [o, g ? 'active' : null, v ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let R = typeof s == 'function' ? s({ isActive: g, isPending: v }) : s;
    return a(Fe, {
      ...d,
      'aria-current': E,
      className: N,
      ref: n,
      style: R,
      to: u,
      children: typeof c == 'function' ? c({ isActive: g, isPending: v }) : c,
    });
  }),
  ky = h.exports.forwardRef((e, t) => a(sm, { ...e, ref: t })),
  sm = h.exports.forwardRef((e, t) => {
    let {
        reloadDocument: n,
        replace: r,
        method: l = Uo,
        action: o,
        onSubmit: i,
        fetcherKey: s,
        routeId: u,
        relative: c,
      } = e,
      d = Vu(e, Ey),
      p = Qu(s, u),
      f = l.toLowerCase() === 'get' ? 'get' : 'post',
      m = Gu(o, { relative: c });
    return a('form', {
      ref: t,
      method: f,
      action: m,
      onSubmit: n
        ? i
        : (y) => {
            if ((i && i(y), y.defaultPrevented)) return;
            y.preventDefault();
            let S = y.nativeEvent.submitter;
            p(S || y.currentTarget, { method: l, replace: r, relative: c });
          },
      ...d,
    });
  });
function Ry(e) {
  let { getKey: t, storageKey: n } = e;
  return My({ getKey: t, storageKey: n }), null;
}
var Ql;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Ql || (Ql = {}));
var xi;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(xi || (xi = {}));
function Ku(e) {
  let t = h.exports.useContext(to);
  return t || z(!1), t;
}
function um(e) {
  let t = h.exports.useContext(tr);
  return t || z(!1), t;
}
function cm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    s = at(),
    u = an(),
    c = jr(e, { relative: i });
  return h.exports.useCallback(
    (d) => {
      if (my(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : nn(u) === nn(c);
        s(e, { replace: p, state: l, preventScrollReset: o, relative: i });
      }
    },
    [u, s, c, r, l, n, e, o, i],
  );
}
function Py(e) {
  let t = h.exports.useRef(yi(e)),
    n = an(),
    r = h.exports.useMemo(() => vy(n.search, t.current), [n.search]),
    l = at(),
    o = h.exports.useCallback(
      (i, s) => {
        const u = yi(typeof i == 'function' ? i(r) : i);
        l('?' + u, s);
      },
      [l, r],
    );
  return [r, o];
}
function Dy() {
  return Qu();
}
function Qu(e, t) {
  let { router: n } = Ku(Ql.UseSubmitImpl),
    r = Gu();
  return h.exports.useCallback(
    function (l, o) {
      if ((o === void 0 && (o = {}), typeof document > 'u'))
        throw new Error(
          'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
        );
      let { method: i, encType: s, formData: u, url: c } = gy(l, r, o),
        d = c.pathname + c.search,
        p = { replace: o.replace, formData: u, formMethod: i, formEncType: s };
      e ? (t == null && z(!1), n.fetch(e, t, d, p)) : n.navigate(d, p);
    },
    [r, n, e, t],
  );
}
function Gu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = h.exports.useContext(no),
    l = h.exports.useContext(vt);
  l || z(!1);
  let [o] = l.matches.slice(-1),
    i = e != null ? e : '.',
    s = gi({}, jr(i, { relative: n })),
    u = an();
  if (e == null && ((s.search = u.search), (s.hash = u.hash), o.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete('index'), (s.search = c.toString() ? '?' + c.toString() : '');
  }
  return (
    (!e || e === '.') &&
      o.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (s.pathname = s.pathname === '/' ? r : Yt([r, s.pathname])),
    nn(s)
  );
}
function Oy(e, t) {
  return h.exports.forwardRef((r, l) =>
    a(sm, { ...r, ref: l, fetcherKey: e, routeId: t }),
  );
}
let Ty = 0;
function Ly() {
  var e;
  let { router: t } = Ku(Ql.UseFetcher),
    n = h.exports.useContext(vt);
  n || z(!1);
  let r = (e = n.matches[n.matches.length - 1]) == null ? void 0 : e.route.id;
  r == null && z(!1);
  let [l] = h.exports.useState(() => String(++Ty)),
    [o] = h.exports.useState(() => (r || z(!1), Oy(l, r))),
    [i] = h.exports.useState(() => (d) => {
      t || z(!1), r || z(!1), t.fetch(l, r, d);
    }),
    s = Qu(l, r),
    u = t.getFetcher(l),
    c = h.exports.useMemo(
      () => gi({ Form: o, submit: s, load: i }, u),
      [u, o, s, i],
    );
  return (
    h.exports.useEffect(
      () => () => {
        if (!t) {
          console.warn('No fetcher available to clean up from useFetcher()');
          return;
        }
        t.deleteFetcher(l);
      },
      [t, l],
    ),
    c
  );
}
function _y() {
  return [...um(xi.UseFetchers).fetchers.values()];
}
const Gd = 'react-router-scroll-positions';
let Ro = {};
function My(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = Ku(Ql.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: o } = um(
      xi.UseScrollRestoration,
    ),
    i = an(),
    s = lm(),
    u = rm();
  h.exports.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    [],
  ),
    Iy(
      h.exports.useCallback(() => {
        if (u.state === 'idle') {
          let c = (t ? t(i, s) : null) || i.key;
          Ro[c] = window.scrollY;
        }
        sessionStorage.setItem(n || Gd, JSON.stringify(Ro)),
          (window.history.scrollRestoration = 'auto');
      }, [n, t, u.state, i, s]),
    ),
    h.exports.useLayoutEffect(() => {
      try {
        let c = sessionStorage.getItem(n || Gd);
        c && (Ro = JSON.parse(c));
      } catch {}
    }, [n]),
    h.exports.useLayoutEffect(() => {
      let c =
        r == null
          ? void 0
          : r.enableScrollRestoration(Ro, () => window.scrollY, t);
      return () => c && c();
    }, [r, t]),
    h.exports.useLayoutEffect(() => {
      if (l !== !1) {
        if (typeof l == 'number') {
          window.scrollTo(0, l);
          return;
        }
        if (i.hash) {
          let c = document.getElementById(i.hash.slice(1));
          if (c) {
            c.scrollIntoView();
            return;
          }
        }
        o !== !0 && window.scrollTo(0, 0);
      }
    }, [i, l, o]);
}
function Iy(e) {
  h.exports.useEffect(
    () => (
      window.addEventListener('beforeunload', e),
      () => {
        window.removeEventListener('beforeunload', e);
      }
    ),
    [e],
  );
}
const Fy = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      BrowserRouter: am,
      Form: ky,
      HashRouter: Sy,
      Link: Fe,
      NavLink: Wu,
      ScrollRestoration: Ry,
      createBrowserRouter: wy,
      createHashRouter: Ny,
      createSearchParams: yi,
      unstable_HistoryRouter: Cy,
      useFetcher: Ly,
      useFetchers: _y,
      useFormAction: Gu,
      useLinkClickHandler: cm,
      useSearchParams: Py,
      useSubmit: Dy,
      AbortedDeferredError: hi,
      Await: oy,
      MemoryRouter: ry,
      Navigate: lt,
      get NavigationType() {
        return ae;
      },
      Outlet: ly,
      Route: Re,
      Router: Kr,
      RouterProvider: ny,
      Routes: Hu,
      UNSAFE_DataRouterContext: to,
      UNSAFE_DataRouterStateContext: tr,
      UNSAFE_DataStaticRouterContext: Gh,
      UNSAFE_LocationContext: Vr,
      UNSAFE_NavigationContext: no,
      UNSAFE_RouteContext: vt,
      UNSAFE_enhanceManualRouteObjects: ro,
      createMemoryRouter: cy,
      createPath: nn,
      createRoutesFromChildren: Kl,
      createRoutesFromElements: Kl,
      defer: E0,
      generatePath: c0,
      isRouteErrorResponse: Uu,
      json: g0,
      matchPath: $i,
      matchRoutes: Sr,
      parsePath: Dt,
      redirect: w0,
      renderMatches: uy,
      resolvePath: zh,
      useActionData: ey,
      useAsyncError: ty,
      useAsyncValue: im,
      useHref: Xh,
      useInRouterContext: In,
      useLoaderData: Z0,
      useLocation: an,
      useMatch: Jh,
      useMatches: lm,
      useNavigate: at,
      useNavigation: rm,
      useNavigationType: W0,
      useOutlet: em,
      useOutletContext: K0,
      useParams: Wr,
      useResolvedPath: jr,
      useRevalidator: J0,
      useRouteError: om,
      useRouteLoaderData: q0,
      useRoutes: tm,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var dm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (!!o) {
          var i = typeof o;
          if (i === 'string' || i === 'number') r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = n.apply(null, o);
              s && r.push(s);
            }
          } else if (i === 'object') {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes('[native code]')
            ) {
              r.push(o.toString());
              continue;
            }
            for (var u in o) t.call(o, u) && o[u] && r.push(u);
          }
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(dm);
const Y = dm.exports;
function Fs() {
  return (
    (Fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fs.apply(this, arguments)
  );
}
function fm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Yd(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function by(e) {
  var t = Ay(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function Ay(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function $y(e, t, n) {
  var r = h.exports.useRef(e !== void 0),
    l = h.exports.useState(t),
    o = l[0],
    i = l[1],
    s = e !== void 0,
    u = r.current;
  return (
    (r.current = s),
    !s && u && o !== t && i(t),
    [
      s ? e : o,
      h.exports.useCallback(
        function (c) {
          for (
            var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), f = 1;
            f < d;
            f++
          )
            p[f - 1] = arguments[f];
          n && n.apply(void 0, [c].concat(p)), i(c);
        },
        [n],
      ),
    ]
  );
}
function pm(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[Yd(r)],
      s = o[r],
      u = fm(o, [Yd(r), r].map(by)),
      c = t[r],
      d = $y(s, i, e[c]),
      p = d[0],
      f = d[1];
    return Fs({}, u, ((l = {}), (l[r] = p), (l[c] = f), l));
  }, e);
}
function bs(e, t) {
  return (
    (bs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    bs(e, t)
  );
}
function jy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    bs(e, t);
}
const zy = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  Uy = 'xs',
  Yu = h.exports.createContext({
    prefixes: {},
    breakpoints: zy,
    minBreakpoint: Uy,
  });
function le(e, t) {
  const { prefixes: n } = h.exports.useContext(Yu);
  return e || n[t] || t;
}
function By() {
  const { breakpoints: e } = h.exports.useContext(Yu);
  return e;
}
function Hy() {
  const { minBreakpoint: e } = h.exports.useContext(Yu);
  return e;
}
function Xu(e) {
  return (e && e.ownerDocument) || document;
}
function Vy(e) {
  var t = Xu(e);
  return (t && t.defaultView) || window;
}
function Wy(e, t) {
  return Vy(e).getComputedStyle(e, t);
}
var Ky = /([A-Z])/g;
function Qy(e) {
  return e.replace(Ky, '-$1').toLowerCase();
}
var Gy = /^ms-/;
function Po(e) {
  return Qy(e).replace(Gy, '-ms-');
}
var Yy =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Xy(e) {
  return !!(e && Yy.test(e));
}
function Xt(e, t) {
  var n = '',
    r = '';
  if (typeof t == 'string')
    return e.style.getPropertyValue(Po(t)) || Wy(e).getPropertyValue(Po(t));
  Object.keys(t).forEach(function (l) {
    var o = t[l];
    !o && o !== 0
      ? e.style.removeProperty(Po(l))
      : Xy(l)
      ? (r += l + '(' + o + ') ')
      : (n += Po(l) + ': ' + o + ';');
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var be = { exports: {} },
  Jy = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Zy = Jy,
  qy = Zy;
function hm() {}
function mm() {}
mm.resetWarningCache = hm;
var ex = function () {
  function e(r, l, o, i, s, u) {
    if (u !== qy) {
      var c = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((c.name = 'Invariant Violation'), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: mm,
    resetWarningCache: hm,
  };
  return (n.PropTypes = n), n;
};
be.exports = ex();
const Xd = { disabled: !1 },
  vm = ze.createContext(null);
var tx = function (t) {
    return t.scrollTop;
  },
  vl = 'unmounted',
  mn = 'exited',
  Ct = 'entering',
  Vt = 'entered',
  Gl = 'exiting',
  sn = (function (e) {
    jy(t, e);
    function t(r, l) {
      var o;
      o = e.call(this, r, l) || this;
      var i = l,
        s = i && !i.isMounting ? r.enter : r.appear,
        u;
      return (
        (o.appearStatus = null),
        r.in
          ? s
            ? ((u = mn), (o.appearStatus = Ct))
            : (u = Vt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = vl)
          : (u = mn),
        (o.state = { status: u }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (l, o) {
      var i = l.in;
      return i && o.status === vl ? { status: mn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var o = null;
        if (l !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== Ct && i !== Vt && (o = Ct)
            : (i === Ct || i === Vt) && (o = Gl);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          o,
          i,
          s;
        return (
          (o = i = s = l),
          l != null &&
            typeof l != 'number' &&
            ((o = l.exit),
            (i = l.enter),
            (s = l.appear !== void 0 ? l.appear : i)),
          { exit: o, enter: i, appear: s }
        );
      }),
      (n.updateStatus = function (l, o) {
        if ((l === void 0 && (l = !1), o !== null))
          if ((this.cancelNextCallback(), o === Ct)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : Nr.findDOMNode(this);
              i && tx(i);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === mn &&
            this.setState({ status: vl });
      }),
      (n.performEnter = function (l) {
        var o = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : l,
          u = this.props.nodeRef ? [s] : [Nr.findDOMNode(this), s],
          c = u[0],
          d = u[1],
          p = this.getTimeouts(),
          f = s ? p.appear : p.enter;
        if ((!l && !i) || Xd.disabled) {
          this.safeSetState({ status: Vt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, d),
          this.safeSetState({ status: Ct }, function () {
            o.props.onEntering(c, d),
              o.onTransitionEnd(f, function () {
                o.safeSetState({ status: Vt }, function () {
                  o.props.onEntered(c, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Nr.findDOMNode(this);
        if (!o || Xd.disabled) {
          this.safeSetState({ status: mn }, function () {
            l.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Gl }, function () {
            l.props.onExiting(s),
              l.onTransitionEnd(i.exit, function () {
                l.safeSetState({ status: mn }, function () {
                  l.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (l, o) {
        (o = this.setNextCallback(o)), this.setState(l, o);
      }),
      (n.setNextCallback = function (l) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (o.nextCallback = null), l(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : Nr.findDOMNode(this),
          s = l == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            c = u[0],
            d = u[1];
          this.props.addEndListener(c, d);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === vl) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var s = fm(o, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return a(vm.Provider, {
          value: null,
          children:
            typeof i == 'function'
              ? i(l, s)
              : ze.cloneElement(ze.Children.only(i), s),
        });
      }),
      t
    );
  })(ze.Component);
sn.contextType = vm;
sn.propTypes = {};
function ar() {}
sn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ar,
  onEntering: ar,
  onEntered: ar,
  onExit: ar,
  onExiting: ar,
  onExited: ar,
};
sn.UNMOUNTED = vl;
sn.EXITED = mn;
sn.ENTERING = Ct;
sn.ENTERED = Vt;
sn.EXITING = Gl;
const Hi = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
var As = !1,
  $s = !1;
try {
  var La = {
    get passive() {
      return (As = !0);
    },
    get once() {
      return ($s = As = !0);
    },
  };
  Hi &&
    (window.addEventListener('test', La, La),
    window.removeEventListener('test', La, !0));
} catch {}
function nx(e, t, n, r) {
  if (r && typeof r != 'boolean' && !$s) {
    var l = r.once,
      o = r.capture,
      i = n;
    !$s &&
      l &&
      ((i =
        n.__once ||
        function s(u) {
          this.removeEventListener(t, s, o), n.call(this, u);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, As ? r : o);
  }
  e.addEventListener(t, n, r);
}
function rx(e, t, n, r) {
  var l = r && typeof r != 'boolean' ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function Ei(e, t, n, r) {
  return (
    nx(e, t, n, r),
    function () {
      rx(e, t, n, r);
    }
  );
}
function lx(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var l = document.createEvent('HTMLEvents');
    l.initEvent(t, n, r), e.dispatchEvent(l);
  }
}
function ox(e) {
  var t = Xt(e, 'transitionDuration') || '',
    n = t.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function ix(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || lx(e, 'transitionend', !0);
    }, t + n),
    o = Ei(
      e,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(l), o();
  };
}
function ax(e, t, n, r) {
  n == null && (n = ox(e) || 0);
  var l = ix(e, n, r),
    o = Ei(e, 'transitionend', t);
  return function () {
    l(), o();
  };
}
function Jd(e, t) {
  const n = Xt(e, t) || '',
    r = n.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Ju(e, t) {
  const n = Jd(e, 'transitionDuration'),
    r = Jd(e, 'transitionDelay'),
    l = ax(
      e,
      (o) => {
        o.target === e && (l(), t(o));
      },
      n + r,
    );
}
function sl(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != 'function')
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.',
        );
      return t === null
        ? n
        : function (...l) {
            t.apply(this, l), n.apply(this, l);
          };
    }, null);
}
function gm(e) {
  e.offsetHeight;
}
var Zd = function (t) {
  return !t || typeof t == 'function'
    ? t
    : function (n) {
        t.current = n;
      };
};
function sx(e, t) {
  var n = Zd(e),
    r = Zd(t);
  return function (l) {
    n && n(l), r && r(l);
  };
}
function ym(e, t) {
  return h.exports.useMemo(
    function () {
      return sx(e, t);
    },
    [e, t],
  );
}
function ux(e) {
  return e && 'setState' in e ? Nr.findDOMNode(e) : e != null ? e : null;
}
const cx = ze.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: s,
        childRef: u,
        ...c
      },
      d,
    ) => {
      const p = h.exports.useRef(null),
        f = ym(p, u),
        m = (T) => {
          f(ux(T));
        },
        x = (T) => (O) => {
          T && p.current && T(p.current, O);
        },
        y = h.exports.useCallback(x(e), [e]),
        S = h.exports.useCallback(x(t), [t]),
        v = h.exports.useCallback(x(n), [n]),
        g = h.exports.useCallback(x(r), [r]),
        E = h.exports.useCallback(x(l), [l]),
        N = h.exports.useCallback(x(o), [o]),
        R = h.exports.useCallback(x(i), [i]);
      return a(sn, {
        ref: d,
        ...c,
        onEnter: y,
        onEntered: v,
        onEntering: S,
        onExit: g,
        onExited: N,
        onExiting: E,
        addEndListener: R,
        nodeRef: p,
        children:
          typeof s == 'function'
            ? (T, O) => s(T, { ...O, ref: m })
            : ze.cloneElement(s, { ref: m }),
      });
    },
  ),
  Zu = cx,
  dx = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight'],
  };
function xm(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    l = dx[e];
  return r + parseInt(Xt(t, l[0]), 10) + parseInt(Xt(t, l[1]), 10);
}
const fx = {
    [mn]: 'collapse',
    [Gl]: 'collapsing',
    [Ct]: 'collapsing',
    [Vt]: 'collapse show',
  },
  px = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    getDimensionValue: xm,
  },
  Em = ze.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        className: o,
        children: i,
        dimension: s = 'height',
        getDimensionValue: u = xm,
        ...c
      },
      d,
    ) => {
      const p = typeof s == 'function' ? s() : s,
        f = h.exports.useMemo(
          () =>
            sl((v) => {
              v.style[p] = '0';
            }, e),
          [p, e],
        ),
        m = h.exports.useMemo(
          () =>
            sl((v) => {
              const g = `scroll${p[0].toUpperCase()}${p.slice(1)}`;
              v.style[p] = `${v[g]}px`;
            }, t),
          [p, t],
        ),
        x = h.exports.useMemo(
          () =>
            sl((v) => {
              v.style[p] = null;
            }, n),
          [p, n],
        ),
        y = h.exports.useMemo(
          () =>
            sl((v) => {
              (v.style[p] = `${u(p, v)}px`), gm(v);
            }, r),
          [r, u, p],
        ),
        S = h.exports.useMemo(
          () =>
            sl((v) => {
              v.style[p] = null;
            }, l),
          [p, l],
        );
      return a(Zu, {
        ref: d,
        addEndListener: Ju,
        ...c,
        'aria-expanded': c.role ? c.in : null,
        onEnter: f,
        onEntering: m,
        onEntered: x,
        onExit: y,
        onExiting: S,
        childRef: i.ref,
        children: (v, g) =>
          ze.cloneElement(i, {
            ...g,
            className: Y(
              o,
              i.props.className,
              fx[v],
              p === 'width' && 'collapse-horizontal',
            ),
          }),
      });
    },
  );
Em.defaultProps = px;
const hx = Em;
function mx(e) {
  var t = h.exports.useRef(e);
  return (
    h.exports.useEffect(
      function () {
        t.current = e;
      },
      [e],
    ),
    t
  );
}
function bt(e) {
  var t = mx(e);
  return h.exports.useCallback(
    function () {
      return t.current && t.current.apply(t, arguments);
    },
    [t],
  );
}
function vx() {
  var e = h.exports.useRef(!0),
    t = h.exports.useRef(function () {
      return e.current;
    });
  return (
    h.exports.useEffect(function () {
      return (
        (e.current = !0),
        function () {
          e.current = !1;
        }
      );
    }, []),
    t.current
  );
}
function gx(e) {
  var t = h.exports.useRef(null);
  return (
    h.exports.useEffect(function () {
      t.current = e;
    }),
    t.current
  );
}
var yx =
    typeof global < 'u' &&
    global.navigator &&
    global.navigator.product === 'ReactNative',
  xx = typeof document < 'u';
const Ex = xx || yx ? h.exports.useLayoutEffect : h.exports.useEffect,
  wx = ['as', 'disabled'];
function Nx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Sx(e) {
  return !e || e.trim() === '#';
}
function wm({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: s = 0,
  type: u,
}) {
  e || (n != null || r != null || l != null ? (e = 'a') : (e = 'button'));
  const c = { tagName: e };
  if (e === 'button') return [{ type: u || 'button', disabled: t }, c];
  const d = (f) => {
      if (((t || (e === 'a' && Sx(n))) && f.preventDefault(), t)) {
        f.stopPropagation();
        return;
      }
      i == null || i(f);
    },
    p = (f) => {
      f.key === ' ' && (f.preventDefault(), d(f));
    };
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: o != null ? o : 'button',
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === 'a' ? r : void 0,
        'aria-disabled': t || void 0,
        rel: e === 'a' ? l : void 0,
        onClick: d,
        onKeyDown: p,
      },
      c,
    ]
  );
}
const Nm = h.exports.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = Nx(e, wx);
  const [o, { tagName: i }] = wm(Object.assign({ tagName: n, disabled: r }, l));
  return a(i, Object.assign({}, l, o, { ref: t }));
});
Nm.displayName = 'Button';
const Cx = ['onKeyDown'];
function kx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Rx(e) {
  return !e || e.trim() === '#';
}
const Sm = h.exports.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = kx(e, Cx);
  const [l] = wm(Object.assign({ tagName: 'a' }, r)),
    o = bt((i) => {
      l.onKeyDown(i), n == null || n(i);
    });
  return Rx(r.href) || r.role === 'button'
    ? a('a', Object.assign({ ref: t }, r, l, { onKeyDown: o }))
    : a('a', Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Sm.displayName = 'Anchor';
const Px = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
  },
  Dx = { [Ct]: 'show', [Vt]: 'show' },
  qu = h.exports.forwardRef(
    ({ className: e, children: t, transitionClasses: n = {}, ...r }, l) => {
      const o = h.exports.useCallback(
        (i, s) => {
          gm(i), r.onEnter == null || r.onEnter(i, s);
        },
        [r],
      );
      return a(Zu, {
        ref: l,
        addEndListener: Ju,
        ...r,
        onEnter: o,
        childRef: t.ref,
        children: (i, s) =>
          h.exports.cloneElement(t, {
            ...s,
            className: Y('fade', e, t.props.className, Dx[i], n[i]),
          }),
      });
    },
  );
qu.defaultProps = Px;
qu.displayName = 'Fade';
const Ox = qu,
  Tx = {
    'aria-label': be.exports.string,
    onClick: be.exports.func,
    variant: be.exports.oneOf(['white']),
  },
  Lx = { 'aria-label': 'Close' },
  Vi = h.exports.forwardRef(({ className: e, variant: t, ...n }, r) =>
    a('button', {
      ref: r,
      type: 'button',
      className: Y('btn-close', t && `btn-close-${t}`, e),
      ...n,
    }),
  );
Vi.displayName = 'CloseButton';
Vi.propTypes = Tx;
Vi.defaultProps = Lx;
const _x = Vi,
  ec = (e) =>
    h.exports.forwardRef((t, n) =>
      a('div', { ...t, ref: n, className: Y(t.className, e) }),
    );
var Mx = /-(.)/g;
function Ix(e) {
  return e.replace(Mx, function (t, n) {
    return n.toUpperCase();
  });
}
const Fx = (e) => e[0].toUpperCase() + Ix(e).slice(1);
function gt(e, { displayName: t = Fx(e), Component: n, defaultProps: r } = {}) {
  const l = h.exports.forwardRef(
    ({ className: o, bsPrefix: i, as: s = n || 'div', ...u }, c) => {
      const d = le(i, e);
      return a(s, { ref: c, className: Y(o, d), ...u });
    },
  );
  return (l.defaultProps = r), (l.displayName = t), l;
}
const Cm = h.exports.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = 'img', ...l }, o) => {
    const i = le(e, 'card-img');
    return a(r, { ref: o, className: Y(n ? `${i}-${n}` : i, t), ...l });
  },
);
Cm.displayName = 'CardImg';
const bx = Cm,
  km = h.exports.createContext(null);
km.displayName = 'CardHeaderContext';
const Rm = km,
  Pm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'div', ...r }, l) => {
      const o = le(e, 'card-header'),
        i = h.exports.useMemo(() => ({ cardHeaderBsPrefix: o }), [o]);
      return a(Rm.Provider, {
        value: i,
        children: a(n, { ref: l, ...r, className: Y(t, o) }),
      });
    },
  );
Pm.displayName = 'CardHeader';
const Ax = Pm,
  $x = ec('h5'),
  jx = ec('h6'),
  Dm = gt('card-body'),
  zx = gt('card-title', { Component: $x }),
  Ux = gt('card-subtitle', { Component: jx }),
  Bx = gt('card-link', { Component: 'a' }),
  Hx = gt('card-text', { Component: 'p' }),
  Vx = gt('card-footer'),
  Wx = gt('card-img-overlay'),
  Kx = { body: !1 },
  tc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: l,
        body: o,
        children: i,
        as: s = 'div',
        ...u
      },
      c,
    ) => {
      const d = le(e, 'card');
      return a(s, {
        ref: c,
        ...u,
        className: Y(
          t,
          d,
          n && `bg-${n}`,
          r && `text-${r}`,
          l && `border-${l}`,
        ),
        children: o ? a(Dm, { children: i }) : i,
      });
    },
  );
tc.displayName = 'Card';
tc.defaultProps = Kx;
const Do = Object.assign(tc, {
  Img: bx,
  Title: zx,
  Subtitle: Ux,
  Body: Dm,
  Link: Bx,
  Text: Hx,
  Header: Ax,
  Footer: Vx,
  ImgOverlay: Wx,
});
function Qx(e) {
  var t = h.exports.useRef(e);
  return (t.current = e), t;
}
function Gx(e) {
  var t = Qx(e);
  h.exports.useEffect(function () {
    return function () {
      return t.current();
    };
  }, []);
}
function Yx(e, t) {
  return h.exports.Children.toArray(e).some(
    (n) => h.exports.isValidElement(n) && n.type === t,
  );
}
function Xx({ as: e, bsPrefix: t, className: n, ...r }) {
  t = le(t, 'col');
  const l = By(),
    o = Hy(),
    i = [],
    s = [];
  return (
    l.forEach((u) => {
      const c = r[u];
      delete r[u];
      let d, p, f;
      typeof c == 'object' && c != null
        ? ({ span: d, offset: p, order: f } = c)
        : (d = c);
      const m = u !== o ? `-${u}` : '';
      d && i.push(d === !0 ? `${t}${m}` : `${t}${m}-${d}`),
        f != null && s.push(`order${m}-${f}`),
        p != null && s.push(`offset${m}-${p}`);
    }),
    [
      { ...r, className: Y(n, ...i, ...s) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const Om = h.exports.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = 'div', bsPrefix: o, spans: i }] =
    Xx(e);
  return a(l, { ...r, ref: t, className: Y(n, !i.length && o) });
});
Om.displayName = 'Col';
const Jx = Om;
var Zx = Function.prototype.bind.call(Function.prototype.call, [].slice);
function zn(e, t) {
  return Zx(e.querySelectorAll(t));
}
function qx() {
  var e = h.exports.useReducer(function (n) {
      return !n;
    }, !1),
    t = e[1];
  return t;
}
function qd(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const wi = h.exports.createContext(null),
  nc = (e, t = null) => (e != null ? String(e) : t || null),
  rc = h.exports.createContext(null);
rc.displayName = 'NavContext';
const eE = 'data-rr-ui-',
  tE = 'rrUi';
function Wi(e) {
  return `${eE}${e}`;
}
function nE(e) {
  return `${tE}${e}`;
}
const Tm = h.exports.createContext(Hi ? window : void 0);
Tm.Provider;
function Lm() {
  return h.exports.useContext(Tm);
}
const _m = h.exports.createContext(null);
_m.displayName = 'NavbarContext';
const Qr = _m,
  rE = {
    type: be.exports.string,
    tooltip: be.exports.bool,
    as: be.exports.elementType,
  },
  lc = h.exports.forwardRef(
    (
      { as: e = 'div', className: t, type: n = 'valid', tooltip: r = !1, ...l },
      o,
    ) =>
      a(e, {
        ...l,
        ref: o,
        className: Y(t, `${n}-${r ? 'tooltip' : 'feedback'}`),
      }),
  );
lc.displayName = 'Feedback';
lc.propTypes = rE;
const Mm = lc,
  lE = h.exports.createContext({}),
  ln = lE,
  Im = h.exports.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = 'checkbox',
        isValid: l = !1,
        isInvalid: o = !1,
        as: i = 'input',
        ...s
      },
      u,
    ) => {
      const { controlId: c } = h.exports.useContext(ln);
      return (
        (t = le(t, 'form-check-input')),
        a(i, {
          ...s,
          ref: u,
          type: r,
          id: e || c,
          className: Y(n, t, l && 'is-valid', o && 'is-invalid'),
        })
      );
    },
  );
Im.displayName = 'FormCheckInput';
const Fm = Im,
  bm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, htmlFor: n, ...r }, l) => {
      const { controlId: o } = h.exports.useContext(ln);
      return (
        (e = le(e, 'form-check-label')),
        a('label', { ...r, ref: l, htmlFor: n || o, className: Y(t, e) })
      );
    },
  );
bm.displayName = 'FormCheckLabel';
const js = bm,
  Am = h.exports.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        bsSwitchPrefix: n,
        inline: r = !1,
        reverse: l = !1,
        disabled: o = !1,
        isValid: i = !1,
        isInvalid: s = !1,
        feedbackTooltip: u = !1,
        feedback: c,
        feedbackType: d,
        className: p,
        style: f,
        title: m = '',
        type: x = 'checkbox',
        label: y,
        children: S,
        as: v = 'input',
        ...g
      },
      E,
    ) => {
      (t = le(t, 'form-check')), (n = le(n, 'form-switch'));
      const { controlId: N } = h.exports.useContext(ln),
        R = h.exports.useMemo(() => ({ controlId: e || N }), [N, e]),
        T = (!S && y != null && y !== !1) || Yx(S, js),
        O = a(Fm, {
          ...g,
          type: x === 'switch' ? 'checkbox' : x,
          ref: E,
          isValid: i,
          isInvalid: s,
          disabled: o,
          as: v,
        });
      return a(ln.Provider, {
        value: R,
        children: a('div', {
          style: f,
          className: Y(
            p,
            T && t,
            r && `${t}-inline`,
            l && `${t}-reverse`,
            x === 'switch' && n,
          ),
          children:
            S ||
            w(A, {
              children: [
                O,
                T && a(js, { title: m, children: y }),
                c && a(Mm, { type: d, tooltip: u, children: c }),
              ],
            }),
        }),
      });
    },
  );
Am.displayName = 'FormCheck';
const Ni = Object.assign(Am, { Input: Fm, Label: js }),
  $m = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: l,
        className: o,
        isValid: i = !1,
        isInvalid: s = !1,
        plaintext: u,
        readOnly: c,
        as: d = 'input',
        ...p
      },
      f,
    ) => {
      const { controlId: m } = h.exports.useContext(ln);
      e = le(e, 'form-control');
      let x;
      return (
        u
          ? (x = { [`${e}-plaintext`]: !0 })
          : (x = { [e]: !0, [`${e}-${n}`]: n }),
        a(d, {
          ...p,
          type: t,
          size: r,
          ref: f,
          readOnly: c,
          id: l || m,
          className: Y(
            o,
            x,
            i && 'is-valid',
            s && 'is-invalid',
            t === 'color' && `${e}-color`,
          ),
        })
      );
    },
  );
$m.displayName = 'FormControl';
const oE = Object.assign($m, { Feedback: Mm }),
  iE = gt('form-floating'),
  jm = h.exports.forwardRef(({ controlId: e, as: t = 'div', ...n }, r) => {
    const l = h.exports.useMemo(() => ({ controlId: e }), [e]);
    return a(ln.Provider, { value: l, children: a(t, { ...n, ref: r }) });
  });
jm.displayName = 'FormGroup';
const zm = jm,
  aE = { column: !1, visuallyHidden: !1 },
  oc = h.exports.forwardRef(
    (
      {
        as: e = 'label',
        bsPrefix: t,
        column: n,
        visuallyHidden: r,
        className: l,
        htmlFor: o,
        ...i
      },
      s,
    ) => {
      const { controlId: u } = h.exports.useContext(ln);
      t = le(t, 'form-label');
      let c = 'col-form-label';
      typeof n == 'string' && (c = `${c} ${c}-${n}`);
      const d = Y(l, t, r && 'visually-hidden', n && c);
      return (
        (o = o || u),
        n
          ? a(Jx, { ref: s, as: 'label', className: d, htmlFor: o, ...i })
          : a(e, { ref: s, className: d, htmlFor: o, ...i })
      );
    },
  );
oc.displayName = 'FormLabel';
oc.defaultProps = aE;
const sE = oc,
  Um = h.exports.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, l) => {
    const { controlId: o } = h.exports.useContext(ln);
    return (
      (e = le(e, 'form-range')),
      a('input', {
        ...r,
        type: 'range',
        ref: l,
        className: Y(t, e),
        id: n || o,
      })
    );
  });
Um.displayName = 'FormRange';
const uE = Um,
  Bm = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        size: t,
        htmlSize: n,
        className: r,
        isValid: l = !1,
        isInvalid: o = !1,
        id: i,
        ...s
      },
      u,
    ) => {
      const { controlId: c } = h.exports.useContext(ln);
      return (
        (e = le(e, 'form-select')),
        a('select', {
          ...s,
          size: n,
          ref: u,
          className: Y(
            r,
            e,
            t && `${e}-${t}`,
            l && 'is-valid',
            o && 'is-invalid',
          ),
          id: i || c,
        })
      );
    },
  );
Bm.displayName = 'FormSelect';
const cE = Bm,
  Hm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'small', muted: r, ...l }, o) => (
      (e = le(e, 'form-text')),
      a(n, { ...l, ref: o, className: Y(t, e, r && 'text-muted') })
    ),
  );
Hm.displayName = 'FormText';
const dE = Hm,
  Vm = h.exports.forwardRef((e, t) => a(Ni, { ...e, ref: t, type: 'switch' }));
Vm.displayName = 'Switch';
const fE = Object.assign(Vm, { Input: Ni.Input, Label: Ni.Label }),
  Wm = h.exports.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: l, ...o },
      i,
    ) => (
      (e = le(e, 'form-floating')),
      w(zm, {
        ref: i,
        className: Y(t, e),
        controlId: r,
        ...o,
        children: [n, a('label', { htmlFor: r, children: l })],
      })
    ),
  );
Wm.displayName = 'FloatingLabel';
const pE = Wm,
  hE = {
    _ref: be.exports.any,
    validated: be.exports.bool,
    as: be.exports.elementType,
  },
  ic = h.exports.forwardRef(
    ({ className: e, validated: t, as: n = 'form', ...r }, l) =>
      a(n, { ...r, ref: l, className: Y(e, t && 'was-validated') }),
  );
ic.displayName = 'Form';
ic.propTypes = hE;
const ul = Object.assign(ic, {
    Group: zm,
    Control: oE,
    Floating: iE,
    Check: Ni,
    Switch: fE,
    Label: sE,
    Text: dE,
    Range: uE,
    Select: cE,
    FloatingLabel: pE,
  }),
  mE = { fluid: !1 },
  ac = h.exports.forwardRef(
    ({ bsPrefix: e, fluid: t, as: n = 'div', className: r, ...l }, o) => {
      const i = le(e, 'container'),
        s = typeof t == 'string' ? `-${t}` : '-fluid';
      return a(n, { ref: o, ...l, className: Y(r, t ? `${i}${s}` : i) });
    },
  );
ac.displayName = 'Container';
ac.defaultProps = mE;
const ef = ac;
be.exports.string,
  be.exports.bool,
  be.exports.bool,
  be.exports.bool,
  be.exports.bool;
const vE = { fluid: !1, rounded: !1, roundedCircle: !1, thumbnail: !1 },
  sc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        fluid: n,
        rounded: r,
        roundedCircle: l,
        thumbnail: o,
        ...i
      },
      s,
    ) => (
      (e = le(e, 'img')),
      a('img', {
        ref: s,
        ...i,
        className: Y(
          t,
          n && `${e}-fluid`,
          r && 'rounded',
          l && 'rounded-circle',
          o && `${e}-thumbnail`,
        ),
      })
    ),
  );
sc.displayName = 'Image';
sc.defaultProps = vE;
const gE = sc,
  Km = h.exports.createContext(null),
  yE = ['as', 'active', 'eventKey'];
function xE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Qm({ key: e, onClick: t, active: n, id: r, role: l, disabled: o }) {
  const i = h.exports.useContext(wi),
    s = h.exports.useContext(rc),
    u = h.exports.useContext(Km);
  let c = n;
  const d = { role: l };
  if (s) {
    !l && s.role === 'tablist' && (d.role = 'tab');
    const p = s.getControllerId(e != null ? e : null),
      f = s.getControlledId(e != null ? e : null);
    (d[Wi('event-key')] = e),
      (d.id = p || r),
      (c = n == null && e != null ? s.activeKey === e : n),
      (c ||
        (!(u != null && u.unmountOnExit) && !(u != null && u.mountOnEnter))) &&
        (d['aria-controls'] = f);
  }
  return (
    d.role === 'tab' &&
      ((d['aria-selected'] = c),
      c || (d.tabIndex = -1),
      o && ((d.tabIndex = -1), (d['aria-disabled'] = !0))),
    (d.onClick = bt((p) => {
      o ||
        (t == null || t(p),
        e != null && i && !p.isPropagationStopped() && i(e, p));
    })),
    [d, { isActive: c }]
  );
}
const Gm = h.exports.forwardRef((e, t) => {
  let { as: n = Nm, active: r, eventKey: l } = e,
    o = xE(e, yE);
  const [i, s] = Qm(Object.assign({ key: nc(l, o.href), active: r }, o));
  return (
    (i[Wi('active')] = s.isActive), a(n, Object.assign({}, o, i, { ref: t }))
  );
});
Gm.displayName = 'NavItem';
const EE = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
function wE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const tf = () => {},
  nf = Wi('event-key'),
  Ym = h.exports.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: l, role: o, onKeyDown: i } = e,
      s = wE(e, EE);
    const u = qx(),
      c = h.exports.useRef(!1),
      d = h.exports.useContext(wi),
      p = h.exports.useContext(Km);
    let f, m;
    p &&
      ((o = o || 'tablist'),
      (l = p.activeKey),
      (f = p.getControlledId),
      (m = p.getControllerId));
    const x = h.exports.useRef(null),
      y = (E) => {
        const N = x.current;
        if (!N) return null;
        const R = zn(N, `[${nf}]:not([aria-disabled=true])`),
          T = N.querySelector('[aria-selected=true]');
        if (!T || T !== document.activeElement) return null;
        const O = R.indexOf(T);
        if (O === -1) return null;
        let _ = O + E;
        return _ >= R.length && (_ = 0), _ < 0 && (_ = R.length - 1), R[_];
      },
      S = (E, N) => {
        E != null && (r == null || r(E, N), d == null || d(E, N));
      },
      v = (E) => {
        if ((i == null || i(E), !p)) return;
        let N;
        switch (E.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            N = y(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            N = y(1);
            break;
          default:
            return;
        }
        !N ||
          (E.preventDefault(),
          S(N.dataset[nE('EventKey')] || null, E),
          (c.current = !0),
          u());
      };
    h.exports.useEffect(() => {
      if (x.current && c.current) {
        const E = x.current.querySelector(`[${nf}][aria-selected=true]`);
        E == null || E.focus();
      }
      c.current = !1;
    });
    const g = ym(t, x);
    return a(wi.Provider, {
      value: S,
      children: a(rc.Provider, {
        value: {
          role: o,
          activeKey: nc(l),
          getControlledId: f || tf,
          getControllerId: m || tf,
        },
        children: a(n, Object.assign({}, s, { onKeyDown: v, ref: g, role: o })),
      }),
    });
  });
Ym.displayName = 'Nav';
const NE = Object.assign(Ym, { Item: Gm });
function _a(e) {
  e === void 0 && (e = Xu());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function SE(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const rf = Wi('modal-open');
class uc {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return SE(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: 'hidden' },
      r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.getElement();
    (t.style = { overflow: l.style.overflow, [r]: l.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(Xt(l, r) || '0', 10) + t.scrollBarWidth}px`),
      l.setAttribute(rf, ''),
      Xt(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(rf), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const Ma = (e, t) =>
  Hi
    ? e == null
      ? (t || Xu()).body
      : (typeof e == 'function' && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function CE(e, t) {
  const n = Lm(),
    [r, l] = h.exports.useState(() => Ma(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = Ma(e);
    o && l(o);
  }
  return (
    h.exports.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    h.exports.useEffect(() => {
      const o = Ma(e);
      o !== r && l(o);
    }, [e, r]),
    r
  );
}
const kE = [
  'show',
  'role',
  'className',
  'style',
  'children',
  'backdrop',
  'keyboard',
  'onBackdropClick',
  'onEscapeKeyDown',
  'transition',
  'backdropTransition',
  'autoFocus',
  'enforceFocus',
  'restoreFocus',
  'restoreFocusOptions',
  'renderDialog',
  'renderBackdrop',
  'manager',
  'container',
  'onShow',
  'onHide',
  'onExit',
  'onExited',
  'onExiting',
  'onEnter',
  'onEntering',
  'onEntered',
];
function RE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
let Ia;
function PE(e) {
  return (
    Ia || (Ia = new uc({ ownerDocument: e == null ? void 0 : e.document })), Ia
  );
}
function DE(e) {
  const t = Lm(),
    n = e || PE(t),
    r = h.exports.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: h.exports.useCallback((l) => {
      r.current.dialog = l;
    }, []),
    setBackdropRef: h.exports.useCallback((l) => {
      r.current.backdrop = l;
    }, []),
  });
}
const Xm = h.exports.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = 'dialog',
      className: l,
      style: o,
      children: i,
      backdrop: s = !0,
      keyboard: u = !0,
      onBackdropClick: c,
      onEscapeKeyDown: d,
      transition: p,
      backdropTransition: f,
      autoFocus: m = !0,
      enforceFocus: x = !0,
      restoreFocus: y = !0,
      restoreFocusOptions: S,
      renderDialog: v,
      renderBackdrop: g = (q) => a('div', Object.assign({}, q)),
      manager: E,
      container: N,
      onShow: R,
      onHide: T = () => {},
      onExit: O,
      onExited: _,
      onExiting: I,
      onEnter: $,
      onEntering: xe,
      onEntered: Je,
    } = e,
    $e = RE(e, kE);
  const te = CE(N),
    Z = DE(E),
    yt = vx(),
    Ze = gx(n),
    [L, j] = h.exports.useState(!n),
    U = h.exports.useRef(null);
  h.exports.useImperativeHandle(t, () => Z, [Z]),
    Hi && !Ze && n && (U.current = _a()),
    !p && !n && !L ? j(!0) : n && L && j(!1);
  const V = bt(() => {
      if (
        (Z.add(),
        (st.current = Ei(document, 'keydown', he)),
        (Ne.current = Ei(document, 'focus', () => setTimeout(_t), !0)),
        R && R(),
        m)
      ) {
        const q = _a(document);
        Z.dialog &&
          q &&
          !qd(Z.dialog, q) &&
          ((U.current = q), Z.dialog.focus());
      }
    }),
    ne = bt(() => {
      if (
        (Z.remove(),
        st.current == null || st.current(),
        Ne.current == null || Ne.current(),
        y)
      ) {
        var q;
        (q = U.current) == null || q.focus == null || q.focus(S),
          (U.current = null);
      }
    });
  h.exports.useEffect(() => {
    !n || !te || V();
  }, [n, te, V]),
    h.exports.useEffect(() => {
      !L || ne();
    }, [L, ne]),
    Gx(() => {
      ne();
    });
  const _t = bt(() => {
      if (!x || !yt() || !Z.isTopModal()) return;
      const q = _a();
      Z.dialog && q && !qd(Z.dialog, q) && Z.dialog.focus();
    }),
    Ve = bt((q) => {
      q.target === q.currentTarget && (c == null || c(q), s === !0 && T());
    }),
    he = bt((q) => {
      u &&
        q.keyCode === 27 &&
        Z.isTopModal() &&
        (d == null || d(q), q.defaultPrevented || T());
    }),
    Ne = h.exports.useRef(),
    st = h.exports.useRef(),
    Xr = (...q) => {
      j(!0), _ == null || _(...q);
    },
    Fn = p;
  if (!te || !(n || (Fn && !L))) return null;
  const bn = Object.assign(
    {
      role: r,
      ref: Z.setDialogRef,
      'aria-modal': r === 'dialog' ? !0 : void 0,
    },
    $e,
    { style: o, className: l, tabIndex: -1 },
  );
  let rr = v
    ? v(bn)
    : a(
        'div',
        Object.assign({}, bn, {
          children: h.exports.cloneElement(i, { role: 'document' }),
        }),
      );
  Fn &&
    (rr = a(Fn, {
      appear: !0,
      unmountOnExit: !0,
      in: !!n,
      onExit: O,
      onExiting: I,
      onExited: Xr,
      onEnter: $,
      onEntering: xe,
      onEntered: Je,
      children: rr,
    }));
  let lr = null;
  if (s) {
    const q = f;
    (lr = g({ ref: Z.setBackdropRef, onClick: Ve })),
      q && (lr = a(q, { appear: !0, in: !!n, children: lr }));
  }
  return a(A, { children: Nr.createPortal(w(A, { children: [lr, rr] }), te) });
});
Xm.displayName = 'Modal';
const OE = Object.assign(Xm, { Manager: uc });
function TE(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function LE(e, t) {
  e.classList
    ? e.classList.add(t)
    : TE(e, t) ||
      (typeof e.className == 'string'
        ? (e.className = e.className + ' ' + t)
        : e.setAttribute(
            'class',
            ((e.className && e.className.baseVal) || '') + ' ' + t,
          ));
}
function lf(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function _E(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = lf(e.className, t))
    : e.setAttribute(
        'class',
        lf((e.className && e.className.baseVal) || '', t),
      );
}
const sr = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
};
class Jm extends uc {
  adjustAndStore(t, n, r) {
    const l = n.style[t];
    (n.dataset[t] = l), Xt(n, { [t]: `${parseFloat(Xt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Xt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((LE(n, 'modal-open'), !t.scrollBarWidth)) return;
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.isRTL ? 'marginLeft' : 'marginRight';
    zn(n, sr.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth),
    ),
      zn(n, sr.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(l, o, -t.scrollBarWidth),
      ),
      zn(n, sr.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(l, o, t.scrollBarWidth),
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    _E(n, 'modal-open');
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.isRTL ? 'marginLeft' : 'marginRight';
    zn(n, sr.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      zn(n, sr.STICKY_CONTENT).forEach((o) => this.restore(l, o)),
      zn(n, sr.NAVBAR_TOGGLER).forEach((o) => this.restore(l, o));
  }
}
let Fa;
function ME(e) {
  return Fa || (Fa = new Jm(e)), Fa;
}
const IE = Jm,
  FE = h.exports.createContext({ onHide() {} }),
  Zm = FE,
  bE = { closeLabel: 'Close', closeButton: !1 },
  qm = h.exports.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: n,
        onHide: r,
        children: l,
        ...o
      },
      i,
    ) => {
      const s = h.exports.useContext(Zm),
        u = bt(() => {
          s == null || s.onHide(), r == null || r();
        });
      return w('div', {
        ref: i,
        ...o,
        children: [l, n && a(_x, { 'aria-label': e, variant: t, onClick: u })],
      });
    },
  );
qm.defaultProps = bE;
const AE = qm;
var of = { exports: {} },
  zs = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
  function n(r) {
    function l(i, s, u, c, d, p) {
      var f = c || '<<anonymous>>',
        m = p || u;
      if (s[u] == null)
        return i
          ? new Error(
              'Required ' +
                d +
                ' `' +
                m +
                '` was not specified ' +
                ('in `' + f + '`.'),
            )
          : null;
      for (
        var x = arguments.length, y = Array(x > 6 ? x - 6 : 0), S = 6;
        S < x;
        S++
      )
        y[S - 6] = arguments[S];
      return r.apply(void 0, [s, u, f, d, m].concat(y));
    }
    var o = l.bind(null, !1);
    return (o.isRequired = l.bind(null, !0)), o;
  }
  e.exports = t.default;
})(zs, zs.exports);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = o);
  var n = zs.exports,
    r = l(n);
  function l(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o() {
    for (var i = arguments.length, s = Array(i), u = 0; u < i; u++)
      s[u] = arguments[u];
    function c() {
      for (var d = arguments.length, p = Array(d), f = 0; f < d; f++)
        p[f] = arguments[f];
      var m = null;
      return (
        s.forEach(function (x) {
          if (m == null) {
            var y = x.apply(void 0, p);
            y != null && (m = y);
          }
        }),
        m
      );
    }
    return (0, r.default)(c);
  }
  e.exports = t.default;
})(of, of.exports);
const $E = gt('nav-item'),
  jE = { disabled: !1 },
  cc = h.exports.forwardRef(
    (
      { bsPrefix: e, className: t, as: n = Sm, active: r, eventKey: l, ...o },
      i,
    ) => {
      e = le(e, 'nav-link');
      const [s, u] = Qm({ key: nc(l, o.href), active: r, ...o });
      return a(n, {
        ...o,
        ...s,
        ref: i,
        className: Y(t, e, o.disabled && 'disabled', u.isActive && 'active'),
      });
    },
  );
cc.displayName = 'NavLink';
cc.defaultProps = jE;
const zE = cc,
  UE = { justify: !1, fill: !1 },
  dc = h.exports.forwardRef((e, t) => {
    const {
        as: n = 'div',
        bsPrefix: r,
        variant: l,
        fill: o,
        justify: i,
        navbar: s,
        navbarScroll: u,
        className: c,
        activeKey: d,
        ...p
      } = pm(e, { activeKey: 'onSelect' }),
      f = le(r, 'nav');
    let m,
      x,
      y = !1;
    const S = h.exports.useContext(Qr),
      v = h.exports.useContext(Rm);
    return (
      S
        ? ((m = S.bsPrefix), (y = s == null ? !0 : s))
        : v && ({ cardHeaderBsPrefix: x } = v),
      a(NE, {
        as: n,
        ref: t,
        activeKey: d,
        className: Y(c, {
          [f]: !y,
          [`${m}-nav`]: y,
          [`${m}-nav-scroll`]: y && u,
          [`${x}-${l}`]: !!x,
          [`${f}-${l}`]: !!l,
          [`${f}-fill`]: o,
          [`${f}-justified`]: i,
        }),
        ...p,
      })
    );
  });
dc.displayName = 'Nav';
dc.defaultProps = UE;
const ur = Object.assign(dc, { Item: $E, Link: zE }),
  ev = h.exports.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, l) => {
    e = le(e, 'navbar-brand');
    const o = n || (r.href ? 'a' : 'span');
    return a(o, { ...r, ref: l, className: Y(t, e) });
  });
ev.displayName = 'NavbarBrand';
const BE = ev,
  tv = h.exports.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = le(t, 'navbar-collapse');
    const l = h.exports.useContext(Qr);
    return a(hx, {
      in: !!(l && l.expanded),
      ...n,
      children: a('div', { ref: r, className: t, children: e }),
    });
  });
tv.displayName = 'NavbarCollapse';
const HE = tv,
  VE = { label: 'Toggle navigation' },
  fc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r,
        as: l = 'button',
        onClick: o,
        ...i
      },
      s,
    ) => {
      e = le(e, 'navbar-toggler');
      const { onToggle: u, expanded: c } = h.exports.useContext(Qr) || {},
        d = bt((p) => {
          o && o(p), u && u();
        });
      return (
        l === 'button' && (i.type = 'button'),
        a(l, {
          ...i,
          ref: s,
          onClick: d,
          'aria-label': r,
          className: Y(t, e, !c && 'collapsed'),
          children: n || a('span', { className: `${e}-icon` }),
        })
      );
    },
  );
fc.displayName = 'NavbarToggle';
fc.defaultProps = VE;
const WE = fc;
var Us = new WeakMap(),
  af = function (t, n) {
    if (!(!t || !n)) {
      var r = Us.get(n) || new Map();
      Us.set(n, r);
      var l = r.get(t);
      return (
        l || ((l = n.matchMedia(t)), (l.refCount = 0), r.set(l.media, l)), l
      );
    }
  };
function KE(e, t) {
  t === void 0 && (t = typeof window > 'u' ? void 0 : window);
  var n = af(e, t),
    r = h.exports.useState(function () {
      return n ? n.matches : !1;
    }),
    l = r[0],
    o = r[1];
  return (
    Ex(
      function () {
        var i = af(e, t);
        if (!i) return o(!1);
        var s = Us.get(t),
          u = function () {
            o(i.matches);
          };
        return (
          i.refCount++,
          i.addListener(u),
          u(),
          function () {
            i.removeListener(u),
              i.refCount--,
              i.refCount <= 0 && (s == null || s.delete(i.media)),
              (i = void 0);
          }
        );
      },
      [e],
    ),
    l
  );
}
function QE(e) {
  var t = Object.keys(e);
  function n(s, u) {
    return s === u ? u : s ? s + ' and ' + u : u;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function l(s) {
    var u = r(s),
      c = e[u];
    return (
      typeof c == 'number'
        ? (c = c - 0.2 + 'px')
        : (c = 'calc(' + c + ' - 0.2px)'),
      '(max-width: ' + c + ')'
    );
  }
  function o(s) {
    var u = e[s];
    return typeof u == 'number' && (u = u + 'px'), '(min-width: ' + u + ')';
  }
  function i(s, u, c) {
    var d;
    if (typeof s == 'object') (d = s), (c = u), (u = !0);
    else {
      var p;
      (u = u || !0), (d = ((p = {}), (p[s] = u), p));
    }
    var f = h.exports.useMemo(
      function () {
        return Object.entries(d).reduce(function (m, x) {
          var y = x[0],
            S = x[1];
          return (
            (S === 'up' || S === !0) && (m = n(m, o(y))),
            (S === 'down' || S === !0) && (m = n(m, l(y))),
            m
          );
        }, '');
      },
      [JSON.stringify(d)],
    );
    return KE(f, c);
  }
  return i;
}
var GE = QE({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const YE = gt('offcanvas-body'),
  XE = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 },
  JE = { [Ct]: 'show', [Vt]: 'show' },
  pc = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, children: n, ...r }, l) => (
      (e = le(e, 'offcanvas')),
      a(Zu, {
        ref: l,
        addEndListener: Ju,
        ...r,
        childRef: n.ref,
        children: (o, i) =>
          h.exports.cloneElement(n, {
            ...i,
            className: Y(
              t,
              n.props.className,
              (o === Ct || o === Gl) && `${e}-toggling`,
              JE[o],
            ),
          }),
      })
    ),
  );
pc.defaultProps = XE;
pc.displayName = 'OffcanvasToggling';
const ZE = pc,
  qE = { closeLabel: 'Close', closeButton: !1 },
  hc = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, ...n }, r) => (
      (e = le(e, 'offcanvas-header')),
      a(AE, { ref: r, ...n, className: Y(t, e) })
    ),
  );
hc.displayName = 'OffcanvasHeader';
hc.defaultProps = qE;
const ew = hc,
  tw = ec('h5'),
  nw = gt('offcanvas-title', { Component: tw }),
  rw = {
    show: !1,
    backdrop: !0,
    keyboard: !0,
    scroll: !1,
    autoFocus: !0,
    enforceFocus: !0,
    restoreFocus: !0,
    placement: 'start',
    renderStaticNode: !1,
  };
function lw(e) {
  return a(ZE, { ...e });
}
function ow(e) {
  return a(Ox, { ...e });
}
const mc = h.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': r,
      placement: l,
      responsive: o,
      show: i,
      backdrop: s,
      keyboard: u,
      scroll: c,
      onEscapeKeyDown: d,
      onShow: p,
      onHide: f,
      container: m,
      autoFocus: x,
      enforceFocus: y,
      restoreFocus: S,
      restoreFocusOptions: v,
      onEntered: g,
      onExit: E,
      onExiting: N,
      onEnter: R,
      onEntering: T,
      onExited: O,
      backdropClassName: _,
      manager: I,
      renderStaticNode: $,
      ...xe
    },
    Je,
  ) => {
    const $e = h.exports.useRef();
    e = le(e, 'offcanvas');
    const { onToggle: te } = h.exports.useContext(Qr) || {},
      [Z, yt] = h.exports.useState(!1),
      Ze = GE(o || 'xs', 'up');
    h.exports.useEffect(() => {
      yt(o ? i && !Ze : i);
    }, [i, o, Ze]);
    const L = bt(() => {
        te == null || te(), f == null || f();
      }),
      j = h.exports.useMemo(() => ({ onHide: L }), [L]);
    function U() {
      return (
        I ||
        (c
          ? ($e.current ||
              ($e.current = new IE({ handleContainerOverflow: !1 })),
            $e.current)
          : ME())
      );
    }
    const V = (he, ...Ne) => {
        he && (he.style.visibility = 'visible'), R == null || R(he, ...Ne);
      },
      ne = (he, ...Ne) => {
        he && (he.style.visibility = ''), O == null || O(...Ne);
      },
      _t = h.exports.useCallback(
        (he) => a('div', { ...he, className: Y(`${e}-backdrop`, _) }),
        [_, e],
      ),
      Ve = (he) =>
        a('div', {
          ...he,
          ...xe,
          className: Y(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          'aria-labelledby': r,
          children: n,
        });
    return w(A, {
      children: [
        !Z && (o || $) && Ve({}),
        a(Zm.Provider, {
          value: j,
          children: a(OE, {
            show: Z,
            ref: Je,
            backdrop: s,
            container: m,
            keyboard: u,
            autoFocus: x,
            enforceFocus: y && !c,
            restoreFocus: S,
            restoreFocusOptions: v,
            onEscapeKeyDown: d,
            onShow: p,
            onHide: L,
            onEnter: V,
            onEntering: T,
            onEntered: g,
            onExit: E,
            onExiting: N,
            onExited: ne,
            manager: U(),
            transition: lw,
            backdropTransition: ow,
            renderBackdrop: _t,
            renderDialog: Ve,
          }),
        }),
      ],
    });
  },
);
mc.displayName = 'Offcanvas';
mc.defaultProps = rw;
const iw = Object.assign(mc, { Body: YE, Header: ew, Title: nw }),
  nv = h.exports.forwardRef((e, t) => {
    const n = h.exports.useContext(Qr);
    return a(iw, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
nv.displayName = 'NavbarOffcanvas';
const aw = nv,
  sw = gt('navbar-text', { Component: 'span' }),
  uw = { expand: !0, variant: 'light', collapseOnSelect: !1 },
  vc = h.exports.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r,
        variant: l,
        bg: o,
        fixed: i,
        sticky: s,
        className: u,
        as: c = 'nav',
        expanded: d,
        onToggle: p,
        onSelect: f,
        collapseOnSelect: m,
        ...x
      } = pm(e, { expanded: 'onToggle' }),
      y = le(n, 'navbar'),
      S = h.exports.useCallback(
        (...E) => {
          f == null || f(...E), m && d && (p == null || p(!1));
        },
        [f, m, d, p],
      );
    x.role === void 0 && c !== 'nav' && (x.role = 'navigation');
    let v = `${y}-expand`;
    typeof r == 'string' && (v = `${v}-${r}`);
    const g = h.exports.useMemo(
      () => ({
        onToggle: () => (p == null ? void 0 : p(!d)),
        bsPrefix: y,
        expanded: !!d,
        expand: r,
      }),
      [y, d, r, p],
    );
    return a(Qr.Provider, {
      value: g,
      children: a(wi.Provider, {
        value: S,
        children: a(c, {
          ref: t,
          ...x,
          className: Y(
            u,
            y,
            r && v,
            l && `${y}-${l}`,
            o && `bg-${o}`,
            s && `sticky-${s}`,
            i && `fixed-${i}`,
          ),
        }),
      }),
    });
  });
vc.defaultProps = uw;
vc.displayName = 'Navbar';
const ba = Object.assign(vc, {
    Brand: BE,
    Collapse: HE,
    Offcanvas: aw,
    Text: sw,
    Toggle: WE,
  }),
  cw = () =>
    a(Rv, {
      children: a(Do, {
        className: 'home-wrapper font',
        children: w(Do.Body, {
          className: 'has-text-centered',
          children: [
            a(Do.Title, {
              className: 'font',
              children: 'Domovsk\xE1 str\xE1nka',
            }),
            a(Do.Text, {
              children:
                'V\xEDtejte na domovsk\xE9 str\xE1nce aplikace Pensionary. Tato aplikace slou\u017E\xED k evidenci zam\u011Bstnanc\u016F a jejich st\xE1vaj\xEDc\xEDch a budouc\xEDch stavech.',
            }),
          ],
        }),
      }),
    });
function rv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: lv } = Object.prototype,
  { getPrototypeOf: gc } = Object,
  yc = ((e) => (t) => {
    const n = lv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  un = (e) => ((e = e.toLowerCase()), (t) => yc(t) === e),
  Ki = (e) => (t) => typeof t === e,
  { isArray: lo } = Array,
  Bs = Ki('undefined');
function dw(e) {
  return (
    e !== null &&
    !Bs(e) &&
    e.constructor !== null &&
    !Bs(e.constructor) &&
    Gr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ov = un('ArrayBuffer');
function fw(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ov(e.buffer)),
    t
  );
}
const pw = Ki('string'),
  Gr = Ki('function'),
  iv = Ki('number'),
  av = (e) => e !== null && typeof e == 'object',
  hw = (e) => e === !0 || e === !1,
  Bo = (e) => {
    if (yc(e) !== 'object') return !1;
    const t = gc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  mw = un('Date'),
  vw = un('File'),
  gw = un('Blob'),
  yw = un('FileList'),
  xw = (e) => av(e) && Gr(e.pipe),
  Ew = (e) => {
    const t = '[object FormData]';
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        lv.call(e) === t ||
        (Gr(e.toString) && e.toString() === t))
    );
  },
  ww = un('URLSearchParams'),
  Nw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Qi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, l;
  if ((typeof e != 'object' && (e = [e]), lo(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let s;
    for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function Hs() {
  const e = {},
    t = (n, r) => {
      Bo(e[r]) && Bo(n)
        ? (e[r] = Hs(e[r], n))
        : Bo(n)
        ? (e[r] = Hs({}, n))
        : lo(n)
        ? (e[r] = n.slice())
        : (e[r] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Qi(arguments[n], t);
  return e;
}
const Sw = (e, t, n, { allOwnKeys: r } = {}) => (
    Qi(
      t,
      (l, o) => {
        n && Gr(l) ? (e[o] = rv(l, n)) : (e[o] = l);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  Cw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  kw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Rw = (e, t, n, r) => {
    let l, o, i;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
        (i = l[o]), (!r || r(i, e, t)) && !s[i] && ((t[i] = e[i]), (s[i] = !0));
      e = n !== !1 && gc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Pw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Dw = (e) => {
    if (!e) return null;
    if (lo(e)) return e;
    let t = e.length;
    if (!iv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ow = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && gc(Uint8Array)),
  Tw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const o = l.value;
      t.call(e, o[0], o[1]);
    }
  },
  Lw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  _w = un('HTMLFormElement'),
  Mw = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  sf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Iw = un('RegExp'),
  sv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Qi(n, (l, o) => {
      t(l, o, e) !== !1 && (r[o] = l);
    }),
      Object.defineProperties(e, r);
  },
  Fw = (e) => {
    sv(e, (t, n) => {
      const r = e[n];
      if (!!Gr(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not read-only method '" + n + "'");
          });
      }
    });
  },
  bw = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((o) => {
          n[o] = !0;
        });
      };
    return lo(e) ? r(e) : r(String(e).split(t)), n;
  },
  Aw = () => {},
  $w = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  C = {
    isArray: lo,
    isArrayBuffer: ov,
    isBuffer: dw,
    isFormData: Ew,
    isArrayBufferView: fw,
    isString: pw,
    isNumber: iv,
    isBoolean: hw,
    isObject: av,
    isPlainObject: Bo,
    isUndefined: Bs,
    isDate: mw,
    isFile: vw,
    isBlob: gw,
    isRegExp: Iw,
    isFunction: Gr,
    isStream: xw,
    isURLSearchParams: ww,
    isTypedArray: Ow,
    isFileList: yw,
    forEach: Qi,
    merge: Hs,
    extend: Sw,
    trim: Nw,
    stripBOM: Cw,
    inherits: kw,
    toFlatObject: Rw,
    kindOf: yc,
    kindOfTest: un,
    endsWith: Pw,
    toArray: Dw,
    forEachEntry: Tw,
    matchAll: Lw,
    isHTMLForm: _w,
    hasOwnProperty: sf,
    hasOwnProp: sf,
    reduceDescriptors: sv,
    freezeMethods: Fw,
    toObjectSet: bw,
    toCamelCase: Mw,
    noop: Aw,
    toFiniteNumber: $w,
  };
function G(e, t, n, r, l) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    l && (this.response = l);
}
C.inherits(G, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const uv = G.prototype,
  cv = {};
[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  cv[e] = { value: e };
});
Object.defineProperties(G, cv);
Object.defineProperty(uv, 'isAxiosError', { value: !0 });
G.from = (e, t, n, r, l, o) => {
  const i = Object.create(uv);
  return (
    C.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== 'isAxiosError',
    ),
    G.call(i, e.message, t, n, r, l),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
var jw = typeof self == 'object' ? self.FormData : window.FormData;
function Vs(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function dv(e) {
  return C.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function uf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, o) {
          return (l = dv(l)), !n && o ? '[' + l + ']' : l;
        })
        .join(n ? '.' : '')
    : t;
}
function zw(e) {
  return C.isArray(e) && !e.some(Vs);
}
const Uw = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Bw(e) {
  return (
    e &&
    C.isFunction(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
function Gi(e, t, n) {
  if (!C.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new (jw || FormData)()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, S) {
        return !C.isUndefined(S[y]);
      },
    ));
  const r = n.metaTokens,
    l = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && Bw(t);
  if (!C.isFunction(l)) throw new TypeError('visitor must be a function');
  function c(x) {
    if (x === null) return '';
    if (C.isDate(x)) return x.toISOString();
    if (!u && C.isBlob(x))
      throw new G('Blob is not supported. Use a Buffer instead.');
    return C.isArrayBuffer(x) || C.isTypedArray(x)
      ? u && typeof Blob == 'function'
        ? new Blob([x])
        : Buffer.from(x)
      : x;
  }
  function d(x, y, S) {
    let v = x;
    if (x && !S && typeof x == 'object') {
      if (C.endsWith(y, '{}'))
        (y = r ? y : y.slice(0, -2)), (x = JSON.stringify(x));
      else if (
        (C.isArray(x) && zw(x)) ||
        C.isFileList(x) ||
        (C.endsWith(y, '[]') && (v = C.toArray(x)))
      )
        return (
          (y = dv(y)),
          v.forEach(function (E, N) {
            !(C.isUndefined(E) || E === null) &&
              t.append(
                i === !0 ? uf([y], N, o) : i === null ? y : y + '[]',
                c(E),
              );
          }),
          !1
        );
    }
    return Vs(x) ? !0 : (t.append(uf(S, y, o), c(x)), !1);
  }
  const p = [],
    f = Object.assign(Uw, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: Vs,
    });
  function m(x, y) {
    if (!C.isUndefined(x)) {
      if (p.indexOf(x) !== -1)
        throw Error('Circular reference detected in ' + y.join('.'));
      p.push(x),
        C.forEach(x, function (v, g) {
          (!(C.isUndefined(v) || v === null) &&
            l.call(t, v, C.isString(g) ? g.trim() : g, y, f)) === !0 &&
            m(v, y ? y.concat(g) : [g]);
        }),
        p.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError('data must be an object');
  return m(e), t;
}
function cf(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function xc(e, t) {
  (this._pairs = []), e && Gi(e, this, t);
}
const fv = xc.prototype;
fv.append = function (t, n) {
  this._pairs.push([t, n]);
};
fv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, cf);
      }
    : cf;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + '=' + n(l[1]);
    }, '')
    .join('&');
};
function Hw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function pv(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Hw,
    l = n && n.serialize;
  let o;
  if (
    (l
      ? (o = l(t, n))
      : (o = C.isURLSearchParams(t) ? t.toString() : new xc(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class df {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const hv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Vw = typeof URLSearchParams < 'u' ? URLSearchParams : xc,
  Ww = FormData,
  Kw = (() => {
    let e;
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u';
  })(),
  Jt = {
    isBrowser: !0,
    classes: { URLSearchParams: Vw, FormData: Ww, Blob },
    isStandardBrowserEnv: Kw,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function Qw(e, t) {
  return Gi(
    e,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, o) {
          return Jt.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Gw(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function Yw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let o;
  for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function mv(e) {
  function t(n, r, l, o) {
    let i = n[o++];
    const s = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && C.isArray(l) ? l.length : i),
      u
        ? (C.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !s)
        : ((!l[i] || !C.isObject(l[i])) && (l[i] = []),
          t(n, r, l[i], o) && C.isArray(l[i]) && (l[i] = Yw(l[i])),
          !s)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, l) => {
        t(Gw(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function Xw(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new G(
          'Request failed with status code ' + n.status,
          [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const Jw = Jt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, o, i, s) {
          const u = [];
          u.push(n + '=' + encodeURIComponent(r)),
            C.isNumber(l) && u.push('expires=' + new Date(l).toGMTString()),
            C.isString(o) && u.push('path=' + o),
            C.isString(i) && u.push('domain=' + i),
            s === !0 && u.push('secure'),
            (document.cookie = u.join('; '));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Zw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qw(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function vv(e, t) {
  return e && !Zw(t) ? qw(e, t) : t;
}
const eN = Jt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function l(o) {
        let i = o;
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = l(window.location.href)),
        function (i) {
          const s = C.isString(i) ? l(i) : i;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function oo(e, t, n) {
  G.call(this, e == null ? 'canceled' : e, G.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
C.inherits(oo, G, { __CANCEL__: !0 });
function tN(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
const nN = C.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  rN = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            (l = i.indexOf(':')),
              (n = i.substring(0, l).trim().toLowerCase()),
              (r = i.substring(l + 1).trim()),
              !(!n || (t[n] && nN[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  ff = Symbol('internals'),
  gv = Symbol('defaults');
function gl(e) {
  return e && String(e).trim().toLowerCase();
}
function Ho(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Ho) : String(e);
}
function lN(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function pf(e, t, n, r) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if (!!C.isString(t)) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function oN(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function iN(e, t) {
  const n = C.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, o, i) {
        return this[r].call(this, t, l, o, i);
      },
      configurable: !0,
    });
  });
}
function cl(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
function pt(e, t) {
  e && this.set(e), (this[gv] = t || null);
}
Object.assign(pt.prototype, {
  set: function (e, t, n) {
    const r = this;
    function l(o, i, s) {
      const u = gl(i);
      if (!u) throw new Error('header name must be a non-empty string');
      const c = cl(r, u);
      (c && s !== !0 && (r[c] === !1 || s === !1)) || (r[c || i] = Ho(o));
    }
    return (
      C.isPlainObject(e)
        ? C.forEach(e, (o, i) => {
            l(o, i, t);
          })
        : l(t, e, n),
      this
    );
  },
  get: function (e, t) {
    if (((e = gl(e)), !e)) return;
    const n = cl(this, e);
    if (n) {
      const r = this[n];
      if (!t) return r;
      if (t === !0) return lN(r);
      if (C.isFunction(t)) return t.call(this, r, n);
      if (C.isRegExp(t)) return t.exec(r);
      throw new TypeError('parser must be boolean|regexp|function');
    }
  },
  has: function (e, t) {
    if (((e = gl(e)), e)) {
      const n = cl(this, e);
      return !!(n && (!t || pf(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function (e, t) {
    const n = this;
    let r = !1;
    function l(o) {
      if (((o = gl(o)), o)) {
        const i = cl(n, o);
        i && (!t || pf(n, n[i], i, t)) && (delete n[i], (r = !0));
      }
    }
    return C.isArray(e) ? e.forEach(l) : l(e), r;
  },
  clear: function () {
    return Object.keys(this).forEach(this.delete.bind(this));
  },
  normalize: function (e) {
    const t = this,
      n = {};
    return (
      C.forEach(this, (r, l) => {
        const o = cl(n, l);
        if (o) {
          (t[o] = Ho(r)), delete t[l];
          return;
        }
        const i = e ? oN(l) : String(l).trim();
        i !== l && delete t[l], (t[i] = Ho(r)), (n[i] = !0);
      }),
      this
    );
  },
  toJSON: function (e) {
    const t = Object.create(null);
    return (
      C.forEach(Object.assign({}, this[gv] || null, this), (n, r) => {
        n == null || n === !1 || (t[r] = e && C.isArray(n) ? n.join(', ') : n);
      }),
      t
    );
  },
});
Object.assign(pt, {
  from: function (e) {
    return C.isString(e)
      ? new this(rN(e))
      : e instanceof this
      ? e
      : new this(e);
  },
  accessor: function (e) {
    const n = (this[ff] = this[ff] = { accessors: {} }).accessors,
      r = this.prototype;
    function l(o) {
      const i = gl(o);
      n[i] || (iN(r, o), (n[i] = !0));
    }
    return C.isArray(e) ? e.forEach(l) : l(e), this;
  },
});
pt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
]);
C.freezeMethods(pt.prototype);
C.freezeMethods(pt);
function aN(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[o];
      i || (i = c), (n[l] = u), (r[l] = c);
      let p = o,
        f = 0;
      for (; p !== l; ) (f += n[p++]), (p = p % e);
      if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), c - i < t)) return;
      const m = d && c - d;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function hf(e, t) {
  let n = 0;
  const r = aN(50, 250);
  return (l) => {
    const o = l.loaded,
      i = l.lengthComputable ? l.total : void 0,
      s = o - n,
      u = r(s),
      c = o <= i;
    n = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && i && c ? (i - o) / u : void 0,
    };
    (d[t ? 'download' : 'upload'] = !0), e(d);
  };
}
function mf(e) {
  return new Promise(function (n, r) {
    let l = e.data;
    const o = pt.from(e.headers).normalize(),
      i = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s),
        e.signal && e.signal.removeEventListener('abort', s);
    }
    C.isFormData(l) && Jt.isStandardBrowserEnv && o.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || '',
        x = e.auth.password
          ? unescape(encodeURIComponent(e.auth.password))
          : '';
      o.set('Authorization', 'Basic ' + btoa(m + ':' + x));
    }
    const d = vv(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), pv(d, e.params, e.paramsSerializer), !0),
      (c.timeout = e.timeout);
    function p() {
      if (!c) return;
      const m = pt.from(
          'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
        ),
        y = {
          data:
            !i || i === 'text' || i === 'json' ? c.responseText : c.response,
          status: c.status,
          statusText: c.statusText,
          headers: m,
          config: e,
          request: c,
        };
      Xw(
        function (v) {
          n(v), u();
        },
        function (v) {
          r(v), u();
        },
        y,
      ),
        (c = null);
    }
    if (
      ('onloadend' in c
        ? (c.onloadend = p)
        : (c.onreadystatechange = function () {
            !c ||
              c.readyState !== 4 ||
              (c.status === 0 &&
                !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
              setTimeout(p);
          }),
      (c.onabort = function () {
        !c || (r(new G('Request aborted', G.ECONNABORTED, e, c)), (c = null));
      }),
      (c.onerror = function () {
        r(new G('Network Error', G.ERR_NETWORK, e, c)), (c = null);
      }),
      (c.ontimeout = function () {
        let x = e.timeout
          ? 'timeout of ' + e.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const y = e.transitional || hv;
        e.timeoutErrorMessage && (x = e.timeoutErrorMessage),
          r(
            new G(
              x,
              y.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED,
              e,
              c,
            ),
          ),
          (c = null);
      }),
      Jt.isStandardBrowserEnv)
    ) {
      const m =
        (e.withCredentials || eN(d)) &&
        e.xsrfCookieName &&
        Jw.read(e.xsrfCookieName);
      m && o.set(e.xsrfHeaderName, m);
    }
    l === void 0 && o.setContentType(null),
      'setRequestHeader' in c &&
        C.forEach(o.toJSON(), function (x, y) {
          c.setRequestHeader(y, x);
        }),
      C.isUndefined(e.withCredentials) ||
        (c.withCredentials = !!e.withCredentials),
      i && i !== 'json' && (c.responseType = e.responseType),
      typeof e.onDownloadProgress == 'function' &&
        c.addEventListener('progress', hf(e.onDownloadProgress, !0)),
      typeof e.onUploadProgress == 'function' &&
        c.upload &&
        c.upload.addEventListener('progress', hf(e.onUploadProgress)),
      (e.cancelToken || e.signal) &&
        ((s = (m) => {
          !c ||
            (r(!m || m.type ? new oo(null, e, c) : m), c.abort(), (c = null));
        }),
        e.cancelToken && e.cancelToken.subscribe(s),
        e.signal &&
          (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
    const f = tN(d);
    if (f && Jt.protocols.indexOf(f) === -1) {
      r(new G('Unsupported protocol ' + f + ':', G.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(l || null);
  });
}
const vf = { http: mf, xhr: mf },
  gf = {
    getAdapter: (e) => {
      if (C.isString(e)) {
        const t = vf[e];
        if (!e)
          throw Error(
            C.hasOwnProp(e)
              ? `Adapter '${e}' is not available in the build`
              : `Can not resolve adapter '${e}'`,
          );
        return t;
      }
      if (!C.isFunction(e)) throw new TypeError('adapter is not a function');
      return e;
    },
    adapters: vf,
  },
  sN = { 'Content-Type': 'application/x-www-form-urlencoded' };
function uN() {
  let e;
  return (
    typeof XMLHttpRequest < 'u'
      ? (e = gf.getAdapter('xhr'))
      : typeof process < 'u' &&
        C.kindOf(process) === 'process' &&
        (e = gf.getAdapter('http')),
    e
  );
}
function cN(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Yr = {
  transitional: hv,
  adapter: uN(),
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        l = r.indexOf('application/json') > -1,
        o = C.isObject(t);
      if ((o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return l && l ? JSON.stringify(mv(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        );
      let s;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Qw(t, this.formSerializer).toString();
        if ((s = C.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return Gi(
            s ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return o || l ? (n.setContentType('application/json', !1), cN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Yr.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === 'json';
      if (t && C.isString(t) && ((r && !this.responseType) || l)) {
        const i = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (i)
            throw s.name === 'SyntaxError'
              ? G.from(s, G.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Jt.classes.FormData, Blob: Jt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
C.forEach(['delete', 'get', 'head'], function (t) {
  Yr.headers[t] = {};
});
C.forEach(['post', 'put', 'patch'], function (t) {
  Yr.headers[t] = C.merge(sN);
});
function Aa(e, t) {
  const n = this || Yr,
    r = t || n,
    l = pt.from(r.headers);
  let o = r.data;
  return (
    C.forEach(e, function (s) {
      o = s.call(n, o, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    o
  );
}
function yv(e) {
  return !!(e && e.__CANCEL__);
}
function $a(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new oo();
}
function yf(e) {
  return (
    $a(e),
    (e.headers = pt.from(e.headers)),
    (e.data = Aa.call(e, e.transformRequest)),
    (e.adapter || Yr.adapter)(e).then(
      function (r) {
        return (
          $a(e),
          (r.data = Aa.call(e, e.transformResponse, r)),
          (r.headers = pt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          yv(r) ||
            ($a(e),
            r &&
              r.response &&
              ((r.response.data = Aa.call(e, e.transformResponse, r.response)),
              (r.response.headers = pt.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
function Yl(e, t) {
  t = t || {};
  const n = {};
  function r(c, d) {
    return C.isPlainObject(c) && C.isPlainObject(d)
      ? C.merge(c, d)
      : C.isPlainObject(d)
      ? C.merge({}, d)
      : C.isArray(d)
      ? d.slice()
      : d;
  }
  function l(c) {
    if (C.isUndefined(t[c])) {
      if (!C.isUndefined(e[c])) return r(void 0, e[c]);
    } else return r(e[c], t[c]);
  }
  function o(c) {
    if (!C.isUndefined(t[c])) return r(void 0, t[c]);
  }
  function i(c) {
    if (C.isUndefined(t[c])) {
      if (!C.isUndefined(e[c])) return r(void 0, e[c]);
    } else return r(void 0, t[c]);
  }
  function s(c) {
    if (c in t) return r(e[c], t[c]);
    if (c in e) return r(void 0, e[c]);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
  };
  return (
    C.forEach(Object.keys(e).concat(Object.keys(t)), function (d) {
      const p = u[d] || l,
        f = p(d);
      (C.isUndefined(f) && p !== s) || (n[d] = f);
    }),
    n
  );
}
const xv = '1.1.3',
  Ec = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ec[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const xf = {};
Ec.transitional = function (t, n, r) {
  function l(o, i) {
    return (
      '[Axios v' +
      xv +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (o, i, s) => {
    if (t === !1)
      throw new G(
        l(i, ' has been removed' + (n ? ' in ' + n : '')),
        G.ERR_DEPRECATED,
      );
    return (
      n &&
        !xf[i] &&
        ((xf[i] = !0),
        console.warn(
          l(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(o, i, s) : !0
    );
  };
};
function dN(e, t, n) {
  if (typeof e != 'object')
    throw new G('options must be an object', G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const o = r[l],
      i = t[o];
    if (i) {
      const s = e[o],
        u = s === void 0 || i(s, o, e);
      if (u !== !0)
        throw new G('option ' + o + ' must be ' + u, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new G('Unknown option ' + o, G.ERR_BAD_OPTION);
  }
}
const Ws = { assertOptions: dN, validators: Ec },
  fn = Ws.validators;
class Qn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new df(), response: new df() });
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Yl(this.defaults, n));
    const { transitional: r, paramsSerializer: l } = n;
    r !== void 0 &&
      Ws.assertOptions(
        r,
        {
          silentJSONParsing: fn.transitional(fn.boolean),
          forcedJSONParsing: fn.transitional(fn.boolean),
          clarifyTimeoutError: fn.transitional(fn.boolean),
        },
        !1,
      ),
      l !== void 0 &&
        Ws.assertOptions(
          l,
          { encode: fn.function, serialize: fn.function },
          !0,
        ),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    const o = n.headers && C.merge(n.headers.common, n.headers[n.method]);
    o &&
      C.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (x) {
          delete n.headers[x];
        },
      ),
      (n.headers = new pt(n.headers, o));
    const i = [];
    let s = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(n) === !1) ||
        ((s = s && x.synchronous), i.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let c,
      d = 0,
      p;
    if (!s) {
      const m = [yf.bind(this), void 0];
      for (
        m.unshift.apply(m, i),
          m.push.apply(m, u),
          p = m.length,
          c = Promise.resolve(n);
        d < p;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    p = i.length;
    let f = n;
    for (d = 0; d < p; ) {
      const m = i[d++],
        x = i[d++];
      try {
        f = m(f);
      } catch (y) {
        x.call(this, y);
        break;
      }
    }
    try {
      c = yf.call(this, f);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Yl(this.defaults, t);
    const n = vv(t.baseURL, t.url);
    return pv(n, t.params, t.paramsSerializer);
  }
}
C.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Qn.prototype[t] = function (n, r) {
    return this.request(
      Yl(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
C.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, s) {
      return this.request(
        Yl(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  (Qn.prototype[t] = n()), (Qn.prototype[t + 'Form'] = n(!0));
});
class wc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let o;
        const i = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(l);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, s) {
        r.reason || ((r.reason = new oo(o, i, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new wc(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function fN(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function pN(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
function Ev(e) {
  const t = new Qn(e),
    n = rv(Qn.prototype.request, t);
  return (
    C.extend(n, Qn.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Ev(Yl(e, l));
    }),
    n
  );
}
const b = Ev(Yr);
b.Axios = Qn;
b.CanceledError = oo;
b.CancelToken = wc;
b.isCancel = yv;
b.VERSION = xv;
b.toFormData = Gi;
b.AxiosError = G;
b.Cancel = b.CanceledError;
b.all = function (t) {
  return Promise.all(t);
};
b.spread = fN;
b.isAxiosError = pN;
b.formToJSON = (e) => mv(C.isHTMLForm(e) ? new FormData(e) : e);
const Nc = () =>
    a(A, {
      children: a('article', {
        className: 'event-footer message is-success',
        children: w('div', {
          className: 'message-body',
          children: [
            a('p', {
              children:
                'V\xEDce info najdete na Modr\xE9m kameni: http://www.modry-kamen.cz/',
            }),
            w('p', {
              children: [
                'V\xFDvoj\xE1\u0159i: ',
                a('a', {
                  href: 'https://github.com/blaziter',
                  children: 'Petr Tran',
                }),
                ' ',
                a('a', {
                  href: 'https://github.com/bouchlavarna',
                  children: '\u0160tefan Jambrich',
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  hN = ({ title: e, subtitle: t, image: n }) =>
    a(A, {
      children: a('div', {
        className: 'card',
        children: a('div', {
          className: 'card-content',
          children: w('div', {
            className: 'media',
            children: [
              a('div', {
                className: 'media-left',
                children: a('figure', {
                  className: 'image',
                  children: a('img', {
                    className: 'info-card-image',
                    src: n,
                    alt: 'Placeholder image',
                  }),
                }),
              }),
              w('div', {
                className: 'media-content info-card-content',
                children: [
                  a('p', { className: 'title info-card-title', children: e }),
                  a('p', {
                    className: 'subtitle info-card-subtitle',
                    children: t,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  mN = () => {
    const [t, n] = h.exports.useState(30),
      [r, l] = h.exports.useState(!1),
      [o, i] = h.exports.useState([]);
    return (
      h.exports.useEffect(() => {
        const s = setInterval(() => {
          let u = t;
          n(u - 0.01), u <= 0 && l(!0);
        }, 10);
        return () => clearInterval(s);
      }),
      h.exports.useEffect(() => {
        b.get('http://localhost:8080/api/external/info').then(async (s) => {
          i(await s.data);
        });
      }, []),
      w(A, {
        children: [
          r && a(lt, { to: '/events' }),
          w('div', {
            className: 'info-container has-text-centered font',
            children: [
              a('h1', {
                className: 'title info-title',
                children: 'Info N\xE1\u0161 t\xFDm',
              }),
              a('progress', {
                className: 'progress is-danger is-large',
                value: t,
                max: 30,
              }),
              o.map((s) =>
                a(hN, { title: s.NAME, subtitle: s.ROLE, image: s.IMAGENAME }),
              ),
              a(Nc, {}),
            ],
          }),
        ],
      })
    );
  },
  dl = ({ title: e, subtitle: t, onClick: n }) =>
    a(A, {
      children: a('div', {
        className: 'tile is-parent dashboard-tile user-select-none',
        children: w('article', {
          onClick: n,
          className:
            'tile is-child box notification tile-max-width dashboard-tile-child',
          children: [
            a('p', { className: 'title', children: e }),
            a('p', { className: 'subtitle', children: t }),
          ],
        }),
      }),
    }),
  vN = () => {
    const e = at(),
      [t, n] = h.exports.useState(0),
      [r, l] = h.exports.useState(0),
      [o, i] = h.exports.useState(0),
      [s, u] = h.exports.useState([]),
      [c, d] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/employee/all', {
              withCredentials: !0,
            })
            .then(async (p) => u(await p.data));
      }, []),
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/announcement/all', {
              withCredentials: !0,
            })
            .then(async (p) => i(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/employee/?group=ROLE&data=doctor', {
              withCredentials: !0,
            })
            .then(async (p) => n(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/employee/?group=ROLE&data=nurse', {
              withCredentials: !0,
            })
            .then(async (p) => l(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/user/all', { withCredentials: !0 })
            .then(async (p) => d(await p.data.length));
      }),
      w(A, {
        children: [
          a('nav', { className: 'breadcumb', 'aria-label': 'breadcrumbs' }),
          w('div', {
            className: 'tile is-ancestor has-text-centered align-items-center',
            children: [
              a(dl, {
                onClick: () => e('/table/administration/page/1'),
                title: 'Veden\xED',
                subtitle: s.filter(
                  (p) => p.ROLE != 'doctor' && p.ROLE != 'nurse',
                ).length,
              }),
              a(dl, {
                onClick: () => e('/table/doctor/page/1'),
                title: 'L\xE9ka\u0159i',
                subtitle: t,
              }),
              a(dl, {
                onClick: () => e('/table/nurse/page/1'),
                title: 'Sest\u0159i\u010Dky',
                subtitle: r,
              }),
              a(dl, {
                onClick: () => e('/table/announcements/page/1'),
                title: 'Ud\xE1losti',
                subtitle: o,
              }),
              a(dl, {
                onClick: () => e('/table/admin/page/1'),
                title: 'Spr\xE1vci',
                subtitle: c,
              }),
            ],
          }),
        ],
      })
    );
  };
var wv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ef = ze.createContext && ze.createContext(wv),
  Dn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Dn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        Dn.apply(this, arguments)
      );
    },
  gN =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function Nv(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ze.createElement(t.tag, Dn({ key: n }, t.attr), Nv(t.child));
    })
  );
}
function Ot(e) {
  return function (t) {
    return a(yN, { ...Dn({ attr: Dn({}, e.attr) }, t), children: Nv(e.child) });
  };
}
function yN(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      o = e.title,
      i = gN(e, ['attr', 'size', 'title']),
      s = l || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      w('svg', {
        ...Dn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: u,
            style: Dn(Dn({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        children: [o && a('title', { children: o }), e.children],
      })
    );
  };
  return Ef !== void 0
    ? a(Ef.Consumer, {
        children: function (n) {
          return t(n);
        },
      })
    : t(wv);
}
function xN(e) {
  return Ot({
    tag: 'svg',
    attr: { version: '1.1', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M0 13h16v2h-16zM2 9h2v3h-2zM5 5h2v7h-2zM8 8h2v4h-2zM11 2h2v10h-2z',
        },
      },
    ],
  })(e);
}
function EN(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          stroke: '#000',
          strokeWidth: '2',
          d: 'M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z',
        },
      },
    ],
  })(e);
}
function wN(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { d: 'M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z' } },
    ],
  })(e);
}
function NN(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02-6.2-1.88-12.7-2.91-19.2-3.05h-2.7zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19 34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4 33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1 12.1.5 23.5 4.8 33.1 11.7 25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1zM91.25 225.3c-9.62.1-19.11 2.1-27.93 6-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2zm69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5 33.2-14.6 50.4-51.8 40.1-86.7z',
        },
      },
    ],
  })(e);
}
function SN(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z',
        },
      },
    ],
  })(e);
}
function CN(e) {
  return Ot({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z',
        },
      },
    ],
  })(e);
}
function Sv(e) {
  return Ot({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z',
        },
      },
    ],
  })(e);
}
function Cv(e) {
  return Ot({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z',
        },
      },
    ],
  })(e);
}
const Tt = () => {
    const { role: e } = Wr();
    return a(A, {
      children: w('aside', {
        className: 'menu user-select-none',
        children: [
          a('p', { className: 'menu-label', children: 'Obecn\xE9' }),
          a('ul', {
            className: 'menu-list',
            children: a('li', {
              children: w(Wu, {
                className: 'menu-item',
                to: '/admin/dashboard',
                children: [a(xN, {}), ' P\u0159ehled'],
              }),
            }),
          }),
          a('p', { className: 'menu-label', children: 'Spr\xE1va' }),
          w('ul', {
            className: 'menu-list',
            children: [
              a('li', {
                children: w(Fe, {
                  className: e == 'admin' ? 'menu-item active' : 'menu-item',
                  to: '/table/admin/page/1',
                  children: [a(EN, {}), ' Spr\xE1vci'],
                }),
              }),
              w('li', {
                children: [
                  a('a', {
                    className: 'menu-disabled',
                    children: 'L\xE9ka\u0159sk\xFD t\xFDm',
                  }),
                  w('ul', {
                    children: [
                      a('li', {
                        children: w(Fe, {
                          className:
                            e == 'administration'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/administration/page/1',
                          children: [a(SN, {}), ' Veden\xED'],
                        }),
                      }),
                      a('li', {
                        children: w(Fe, {
                          className:
                            e == 'doctor' ? 'menu-item active' : 'menu-item',
                          to: '/table/doctor/page/1',
                          children: [a(wN, {}), ' L\xE9ka\u0159i'],
                        }),
                      }),
                      a('li', {
                        children: w(Fe, {
                          className:
                            e == 'nurse' ? 'menu-item active' : 'menu-item',
                          to: '/table/nurse/page/1',
                          children: [a(NN, {}), ' Sest\u0159i\u010Dky'],
                        }),
                      }),
                      a('li', {
                        children: w(Fe, {
                          className:
                            e == 'announcements'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/announcements/page/1',
                          children: [a(CN, {}), ' Ud\xE1losti'],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Lt = () => {
    const [e, t] = h.exports.useState(!1),
      [n, r] = h.exports.useState(!1),
      [l, o] = h.exports.useState(''),
      [i, s] = h.exports.useState(!0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .post('http://localhost:8080/api/auth/verify', {
              withCredentials: !0,
            })
            .then(async (d) => {
              const p = await d.data.username;
              o(p);
            })
            .catch((d) => {
              s(!1);
            });
      }),
      w(A, {
        children: [
          !i && a(lt, { to: '/', replace: !0 }),
          n && a(lt, { to: '/', replace: !0 }),
          w('div', {
            className: 'navbar admin-navbar',
            children: [
              a(Fe, {
                className: 'admin-brand',
                to: '/admin/dashboard',
                children: 'Zdravotn\u011B soci\xE1ln\xED slu\u017Eby Turnov',
              }),
              a('div', {
                className: 'navbar-start',
                children: a(Wu, {
                  className: 'admin-item',
                  to: '/admin/dashboard',
                  children: 'Home',
                }),
              }),
              a('div', {
                className: 'navbar-end',
                children: w('div', {
                  className: e
                    ? 'dropdown is-right is-active user-menu'
                    : 'dropdown is-right user-menu',
                  onClick: () => {
                    t(!e);
                  },
                  children: [
                    a('div', {
                      className: 'dropdown-trigger',
                      children: w('button', {
                        className: 'button',
                        'aria-haspopup': 'true',
                        'aria-controls': 'dropdown-menu4',
                        children: [
                          a('span', { children: l }),
                          a('span', {
                            className: 'icon is-small',
                            children: a('i', {
                              className: 'fas fa-angle-down',
                              'aria-hidden': 'true',
                            }),
                          }),
                        ],
                      }),
                    }),
                    a('div', {
                      className: 'dropdown-menu user-menu-active',
                      id: 'dropdown-menu4',
                      role: 'menu',
                      children: a('div', {
                        className: 'dropdown-content',
                        children: a('div', {
                          className: 'dropdown-item',
                          children: a('div', {
                            className: 'dropdown-item',
                            onClick: () => {
                              (b.defaults.withCredentials = !0),
                                b
                                  .post(
                                    'http://localhost:8080/api/auth/logout',
                                    {},
                                    { withCredentials: !0 },
                                  )
                                  .then((d) => {
                                    localStorage.removeItem('username'),
                                      d.status == 200 ? r(!0) : r(!1);
                                  });
                            },
                            children: 'Log Out',
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  kN = () => {
    const [e, t] = h.exports.useState(!0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .post('http://localhost:8080/api/auth/verify', {
              withCredentials: !0,
            })
            .then((n) => {
              t(!0);
            })
            .catch((n) => {
              t(!1);
            });
      }),
      w(A, {
        children: [
          !e && a(lt, { to: '/', replace: !0 }),
          a(Lt, {}),
          a('div', {
            className: 'section admin-layout',
            children: w('div', {
              className: 'columns',
              children: [
                a('div', { className: 'column is-2', children: a(Tt, {}) }),
                a('div', { className: 'column is-10', children: a(vN, {}) }),
              ],
            }),
          }),
        ],
      })
    );
  };
function RN(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24', fill: 'none' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z',
          fill: 'currentColor',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z',
          fill: 'currentColor',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z',
          fill: 'currentColor',
        },
      },
      {
        tag: 'path',
        attr: {
          d: 'M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z',
          fill: 'currentColor',
        },
      },
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z',
          fill: 'currentColor',
        },
      },
    ],
  })(e);
}
const PN = () => {
    const [e, t] = h.exports.useState({ username: '', password: '' }),
      [n, r] = h.exports.useState(!1),
      l = (i) => {
        t((s) => ({ ...s, [i.target.name]: i.target.value }));
      };
    return w(Rv, {
      children: [
        n ? a(lt, { to: '/admin', replace: !0 }) : a(A, {}),
        w('div', {
          className: 'columns is-multiline',
          children: [
            a('div', {
              className: 'column is-8 is-offset-2 register',
              children: w('div', {
                className: 'columns',
                children: [
                  a('div', {
                    className: 'column left',
                    children: a(gE, { src: 'login.png' }),
                  }),
                  w('div', {
                    className: 'column right has-text-centered',
                    children: [
                      a('h1', {
                        className: 'title is-4',
                        children: 'P\u0159ihl\xE1sit se',
                      }),
                      w(ul, {
                        onSubmit: async (i) => {
                          i.preventDefault(),
                            (b.defaults.withCredentials = !0),
                            await b
                              .post(
                                'http://localhost:8080/api/auth/login',
                                { payload: e },
                                { withCredentials: !0 },
                              )
                              .then(async (s) => {
                                const u = await s.status;
                                setTimeout(() => {
                                  u == 200 ? r(!0) : r(!1);
                                }, 1e3);
                              })
                              .catch(i);
                        },
                        children: [
                          a(ul.Group, {
                            className: 'form-field',
                            controlId: 'controlName',
                            children: a(ul.Control, {
                              name: 'username',
                              className: 'form-input input is-medium',
                              type: 'text',
                              placeholder: 'P\u0159ihla\u0161ovac\xED jm\xE9no',
                              onChange: (i) => l(i),
                            }),
                          }),
                          a(ul.Group, {
                            className: 'form-field',
                            controlId: 'controlPwd',
                            children: a(ul.Control, {
                              name: 'password',
                              className: 'form-input input is-medium',
                              type: 'password',
                              placeholder: 'Heslo',
                              onChange: (i) => l(i),
                            }),
                          }),
                          a('button', {
                            className:
                              'button is-block is-primary is-fullwidth is-medium',
                            children: 'Submit',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a('div', {
              className: 'column is-8 is-offset-2',
              children: a('div', {
                className: 'level',
                children: a('div', {
                  className: 'level-left',
                  children: a('div', {
                    className: 'level-item',
                    children: a('a', {
                      href: 'http://www.zsst.cz/',
                      children: a(RN, {}),
                    }),
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  DN = ({ className: e, title: t, description: n }) =>
    a(A, {
      children: w('article', {
        className: `message event is-danger ${e}`,
        children: [
          a('h1', { className: 'message-header event-title', children: t }),
          a('p', { className: 'message-body event-description', children: n }),
        ],
      }),
    }),
  ON = () => {
    const [e, t] = h.exports.useState([]),
      n = 30,
      [r, l] = h.exports.useState(30),
      [o, i] = h.exports.useState(!1);
    return (
      h.exports.useEffect(() => {
        const s = setInterval(() => {
          let u = r;
          l(u - 0.01), u <= 0 && i(!0);
        }, 10);
        return () => clearInterval(s);
      }),
      h.exports.useEffect(() => {
        b.get('http://localhost:8080/api/events').then(async (s) => {
          t(await s.data);
        });
      }, []),
      w(A, {
        children: [
          o && a(lt, { to: '/info' }),
          w('div', {
            className: 'event-container has-text-centered font',
            children: [
              a('h1', {
                className: 'title info-title',
                children: 'Ud\xE1losti',
              }),
              a('progress', {
                className: 'progress is-danger is-large',
                value: r,
                max: n,
              }),
              e.map((s) =>
                a(A, {
                  children: a(
                    DN,
                    {
                      className: s.date ? 'is-warning' : 'is-primary',
                      title: s.title,
                      description: s.description,
                    },
                    s.title,
                  ),
                }),
              ),
              a(Nc, {}),
            ],
          }),
        ],
      })
    );
  };
var yl = {},
  kv = {};
const TN = Iv(Fy);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
  var t = o(h.exports),
    n = o(be.exports),
    r = TN,
    l = [
      'children',
      'onClick',
      'replace',
      'to',
      'state',
      'activeClassName',
      'className',
      'activeStyle',
      'style',
      'isActive',
    ];
  function o(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function i(y, S) {
    var v = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(y);
      S &&
        (g = g.filter(function (E) {
          return Object.getOwnPropertyDescriptor(y, E).enumerable;
        })),
        v.push.apply(v, g);
    }
    return v;
  }
  function s(y) {
    for (var S = 1; S < arguments.length; S++) {
      var v = arguments[S] != null ? arguments[S] : {};
      S % 2
        ? i(Object(v), !0).forEach(function (g) {
            u(y, g, v[g]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(v))
        : i(Object(v)).forEach(function (g) {
            Object.defineProperty(y, g, Object.getOwnPropertyDescriptor(v, g));
          });
    }
    return y;
  }
  function u(y, S, v) {
    return (
      S in y
        ? Object.defineProperty(y, S, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (y[S] = v),
      y
    );
  }
  function c(y) {
    return (
      (c =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (S) {
              return typeof S;
            }
          : function (S) {
              return S &&
                typeof Symbol == 'function' &&
                S.constructor === Symbol &&
                S !== Symbol.prototype
                ? 'symbol'
                : typeof S;
            }),
      c(y)
    );
  }
  function d(y, S) {
    if (y == null) return {};
    var v = p(y, S),
      g,
      E;
    if (Object.getOwnPropertySymbols) {
      var N = Object.getOwnPropertySymbols(y);
      for (E = 0; E < N.length; E++)
        (g = N[E]),
          !(S.indexOf(g) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(y, g) ||
              (v[g] = y[g]));
    }
    return v;
  }
  function p(y, S) {
    if (y == null) return {};
    var v = {},
      g = Object.keys(y),
      E,
      N;
    for (N = 0; N < g.length; N++)
      (E = g[N]), !(S.indexOf(E) >= 0) && (v[E] = y[E]);
    return v;
  }
  var f = function (S) {
      return !!(S.metaKey || S.altKey || S.ctrlKey || S.shiftKey);
    },
    m = function (S) {
      var v = S.children,
        g = S.onClick,
        E = S.replace,
        N = S.to,
        R = S.state,
        T = S.activeClassName,
        O = S.className,
        _ = S.activeStyle,
        I = S.style,
        $ = S.isActive,
        xe = d(S, l),
        Je = c(N) === 'object' ? N.pathname || '' : N,
        $e = (0, r.useNavigate)(),
        te = (0, r.useHref)(typeof N == 'string' ? { pathname: N } : N),
        Z = (0, r.useMatch)(Je),
        yt = (0, r.useLocation)(),
        Ze = t.default.Children.only(v),
        L = !!($ ? (typeof $ == 'function' ? $(Z, yt) : $) : Z),
        j = function (V) {
          v.props.onClick && v.props.onClick(V),
            g && g(V),
            !V.defaultPrevented &&
              V.button === 0 &&
              !f(V) &&
              (V.preventDefault(), $e(N, { replace: E, state: R }));
        };
      return t.default.cloneElement(
        Ze,
        s(
          s({}, xe),
          {},
          {
            className: [O, Ze.props.className, L ? T : null].join(' ').trim(),
            style: L ? s(s({}, I), _) : I,
            href: te,
            onClick: j,
          },
        ),
      );
    };
  (m.propTypes = {
    children: n.default.element.isRequired,
    onClick: n.default.func,
    replace: n.default.bool,
    to: n.default.oneOfType([n.default.string, n.default.object]).isRequired,
    state: n.default.object,
    className: n.default.string,
    activeClassName: n.default.string,
    style: n.default.objectOf(
      n.default.oneOfType([n.default.string, n.default.number]),
    ),
    activeStyle: n.default.objectOf(
      n.default.oneOfType([n.default.string, n.default.number]),
    ),
    isActive: n.default.oneOfType([n.default.func, n.default.bool]),
  }),
    (m.defaultProps = {
      replace: !1,
      activeClassName: 'active',
      onClick: null,
      className: null,
      style: null,
      activeStyle: null,
      isActive: null,
    });
  var x = m;
  e.default = x;
})(kv);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'LinkContainer', {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    });
  var t = n(kv);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
})(yl);
const Rv = (e) =>
    w(A, {
      children: [
        a(ba, {
          collapseOnSelect: !0,
          expand: 'lg',
          bg: 'light',
          variant: 'light',
          className: 'layout-navbar',
          children: w(ef, {
            fluid: !0,
            children: [
              a(ba.Toggle, { 'aria-controls': 'responsive-navbar-nav' }),
              w(ba.Collapse, {
                id: 'responsive-navbar-nav',
                children: [
                  w(ur, {
                    className: 'me-auto',
                    children: [
                      a(yl.LinkContainer, {
                        to: '/status',
                        children: a(ur.Link, {
                          children: 'Stavy zam\u011Bstnanc\u016F',
                        }),
                      }),
                      a(yl.LinkContainer, {
                        to: '/info',
                        children: a(ur.Link, { children: 'Informace' }),
                      }),
                      a(yl.LinkContainer, {
                        to: '/events',
                        children: a(ur.Link, { children: 'Ud\xE1losti' }),
                      }),
                    ],
                  }),
                  a(ur, {
                    children: a(yl.LinkContainer, {
                      to: '/login',
                      children: a(ur.Link, {
                        children: 'P\u0159ihl\xE1sit se',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        a(ef, { className: 'main-content', children: e.children }),
      ],
    }),
  LN = () => {
    const [e, t] = h.exports.useState([]),
      [n, r] = h.exports.useState(''),
      [l, o] = h.exports.useState('');
    return (
      h.exports.useEffect(
        () => (
          b.get('http://localhost:8080/api/external/all').then(async (i) => {
            t(await i.data);
          }),
          () => {}
        ),
        [],
      ),
      h.exports.useEffect(() => {
        const i = setInterval(() => {
          r(
            new Intl.DateTimeFormat(['ban', 'id'])
              .format(new Date())
              .replaceAll('/', '. '),
          ),
            o(new Date().toLocaleTimeString());
        }, 1e3);
        return () => clearInterval(i);
      }, []),
      w(A, {
        children: [
          console.log(e),
          w('div', {
            className: 'status-container has-text-centered font',
            children: [
              a('div', {
                className: 'containers directors-container',
                children: w('div', {
                  className: 'card',
                  children: [
                    a('div', {
                      className: 'card-header',
                      children: w('div', {
                        className: 'date-holder',
                        children: [
                          a('p', {
                            className: 'date',
                            children: 'Dne\u0161n\xED datum: ',
                          }),
                          ' ',
                          a('p', { className: 'date', children: n }),
                          ' ',
                          a('p', { className: 'date time', children: l }),
                        ],
                      }),
                    }),
                    a('div', {
                      className: 'card-content',
                      children: a('div', {
                        className: 'content',
                        children: a('div', {
                          className: 'card',
                          children: e
                            .filter(
                              (i) => i.ROLE != 'doctor' && i.ROLE != 'nurse',
                            )
                            .map((i) =>
                              w('div', {
                                className: 'director',
                                children: [
                                  a('p', {
                                    className: 'director-role',
                                    children:
                                      i.ROLE == 'chairman'
                                        ? '\u0158editel/ka'
                                        : i.ROLE == 'vice chairman'
                                        ? 'Z\xE1stupce \u0159editele'
                                        : i.ROLE == 'head nurse'
                                        ? 'Vedouc\xED sestra'
                                        : i.ROLE == 'social worker'
                                        ? 'Soci\xE1ln\xED pracovn\xEDk'
                                        : null,
                                  }),
                                  w('p', {
                                    className: 'director-name',
                                    children: [
                                      i.PREFIX,
                                      ' ',
                                      i.NAME.split(' ')[0].charAt(0),
                                      '. ',
                                      i.NAME.split(' ')[1],
                                    ],
                                  }),
                                  i.AVAILABILITY == 1
                                    ? w(A, {
                                        children: [
                                          a('p', {
                                            className:
                                              'employee-text available',
                                            children: 'Dostupn\xFD/\xE1',
                                          }),
                                          a(Sv, {
                                            className:
                                              'employee-text available',
                                            size: '1.5em',
                                          }),
                                        ],
                                      })
                                    : w(A, {
                                        children: [
                                          a('p', {
                                            className:
                                              'employee-text unavailable',
                                            children: 'Nedostupn\xFD/\xE1',
                                          }),
                                          a(Cv, {
                                            className:
                                              'employee-text unavailable',
                                            size: '1.5em',
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a('div', {
                className: 'containers general-nurse',
                children: w('div', {
                  className: 'card',
                  children: [
                    a('div', {
                      className: 'card-header',
                      children: a('p', {
                        children: 'V\u0161eobecn\xE9 sestry',
                      }),
                    }),
                    a('div', {
                      className: 'card-content',
                      children: a('div', {
                        className: 'content',
                        children: w('div', {
                          className: 'general-nurse-info',
                          children: [
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'day-title',
                                  children: 'Denn\xED',
                                }),
                                a('div', { className: 'day-body' }),
                              ],
                            }),
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                a('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a('div', {
                className: 'containers village',
                children: w('div', {
                  className: 'card',
                  children: [
                    w('div', {
                      className: 'card-header',
                      children: [
                        a('p', { children: 'Vesni\u010Dka' }),
                        ' ',
                        a('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    a('div', {
                      className: 'card-content',
                      children: a('div', {
                        className: 'content',
                        children: w('div', {
                          className: 'general-nurse-info',
                          children: [
                            a('div', {
                              className: 'card status-items',
                              children: a('div', {
                                className: 'cart-content',
                                children: w('div', {
                                  className: 'content',
                                  children: [
                                    a('div', {
                                      className: 'day-title',
                                      children: 'Denn\xED',
                                    }),
                                    a('div', { className: 'day-body' }),
                                  ],
                                }),
                              }),
                            }),
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                a('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a('div', {
                className: 'containers first-floor',
                children: w('div', {
                  className: 'card is-warning',
                  children: [
                    w('div', {
                      className: 'card-header',
                      children: [
                        a('p', { children: '1. patro' }),
                        ' ',
                        a('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    a('div', {
                      className: 'card-content',
                      children: a('div', {
                        className: 'content',
                        children: w('div', {
                          className: 'general-nurse-info',
                          children: [
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'day-title',
                                  children: 'Denn\xED',
                                }),
                                a('div', { className: 'day-body' }),
                              ],
                            }),
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                a('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a('div', {
                className: 'containers ground-floor',
                children: w('div', {
                  className: 'card',
                  children: [
                    w('div', {
                      className: 'card-header',
                      children: [
                        a('p', { children: 'P\u0159\xEDzem\xED' }),
                        ' ',
                        a('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    a('div', {
                      className: 'card-content',
                      children: a('div', {
                        className: 'content',
                        children: w('div', {
                          className: 'general-nurse-info',
                          children: [
                            a('div', {
                              className: 'card status-items',
                              children: a('div', {
                                className: 'day-title',
                                children: 'Denn\xED',
                              }),
                            }),
                            w('div', {
                              className: 'card status-items',
                              children: [
                                a('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                a('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              a(Nc, {}),
            ],
          }),
        ],
      })
    );
  },
  _N = () => {
    const e = at(),
      [t, n] = h.exports.useState({
        suffix: '',
        prefix: '',
        name: '',
        role: '',
        availability: 0,
        shift: '',
        workplace: '',
      }),
      [r, l] = h.exports.useState({
        username: '',
        password: '',
        role: 'admin',
      }),
      [o, i] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(!1),
      [p, f] = h.exports.useState(!1),
      [m, x] = h.exports.useState(!1),
      [y, S] = h.exports.useState(!1),
      [v, g] = h.exports.useState(''),
      [E, N] = h.exports.useState(!1),
      [R, T] = h.exports.useState('employee'),
      O = (I) => {
        R == 'employee'
          ? n(
              (I.target.value == 'doctor',
              { ...t, [I.target.name]: I.target.value }),
            )
          : l(
              I.target.value == 'admin'
                ? { ...r, [I.target.name]: I.target.value }
                : { ...r, role: 'admin' },
            ),
          t.role == 'admin' && n({ ...t, [I.target.name]: I.target.value }),
          r.role != 'admin' && l({ ...r, role: 'admin' });
      },
      _ = () => {
        if (
          ((b.defaults.withCredentials = !0),
          R == 'admin' && (r.username == '' && u(!0), r.password == ''))
        )
          return d(!0);
        if (
          R == 'employee' &&
          (t.name == '' && i(!0),
          t.shift == '' && f(!0),
          t.workplace == '' && x(!0),
          r.role == '' || t.role == '')
        )
          return S(!0);
        R != 'admin'
          ? b
              .post('http://localhost:8080/api/employee/new', t, {
                withCredentials: !0,
              })
              .then((I) => {
                I.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    N(!0);
                  }, 3e3));
              })
              .catch((I) => {
                g('error');
              })
          : b
              .post('http://localhost:8080/api/user/new', r, {
                withCredentials: !0,
              })
              .then((I) => {
                I.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    N(!0);
                  }, 3e3));
              })
              .catch((I) => {
                g('error');
              });
      };
    return w(A, {
      children: [
        E ? e(-1) : null,
        a(Lt, {}),
        a('div', {
          className: 'section admin-layout',
          children: w('div', {
            className: 'columns',
            children: [
              a('div', { className: 'column is-2', children: a(Tt, {}) }),
              w('div', {
                className: 'column is-10',
                children: [
                  w('form', {
                    className: 'create-update-container',
                    children: [
                      R != 'admin'
                        ? w(A, {
                            children: [
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Akademick\xFD titul',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('input', {
                                      name: 'prefix',
                                      className: 'input',
                                      type: 'text',
                                      placeholder: 'MUDr. PaedDr. PhD.',
                                      onChange: (I) => O(I),
                                    }),
                                  }),
                                ],
                              }),
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Neakademick\xFD titul',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('input', {
                                      name: 'suffix',
                                      className: 'input',
                                      type: 'text',
                                      placeholder: 'DiS.',
                                      onChange: (I) => O(I),
                                    }),
                                  }),
                                ],
                              }),
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('input', {
                                      required: !0,
                                      name: 'name',
                                      className: o
                                        ? 'input is-danger'
                                        : 'input',
                                      type: 'text',
                                      placeholder:
                                        'Jm\xE9no a p\u0159\xEDjmen\xED',
                                      onChange: (I) => {
                                        i(!1), O(I);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : w(A, {
                            children: [
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children:
                                      'P\u0159ihla\u0161ovac\xED jm\xE9no',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('input', {
                                      required: !0,
                                      name: 'username',
                                      className: s
                                        ? 'input is-danger'
                                        : 'input',
                                      type: 'text',
                                      placeholder:
                                        'P\u0159ihla\u0161ovac\xED jm\xE9no',
                                      onChange: (I) => {
                                        u(!1), O(I);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Heslo',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('input', {
                                      required: !0,
                                      name: 'password',
                                      className: c
                                        ? 'input is-danger'
                                        : 'input',
                                      type: 'text',
                                      placeholder: 'Heslo',
                                      onChange: (I) => {
                                        d(!1), O(I);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', { className: 'label', children: 'Role' }),
                          a('div', {
                            className: 'control',
                            children: a('div', {
                              className: y ? 'select is-danger' : 'select',
                              children: w('select', {
                                required: !0,
                                name: 'role',
                                onChange: (I) => {
                                  I.target.value == 'admin'
                                    ? T('admin')
                                    : T('employee'),
                                    i(!1),
                                    u(!1),
                                    d(!1),
                                    S(!1),
                                    f(!1),
                                    x(!1),
                                    O(I);
                                },
                                children: [
                                  a('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  a('option', {
                                    value: 'admin',
                                    children: 'Spr\xE1vce',
                                  }),
                                  a('option', {
                                    value: 'doctor',
                                    children: 'Doktor',
                                  }),
                                  a('option', {
                                    value: 'nurse',
                                    children: 'Sestra',
                                  }),
                                  a('option', {
                                    value: 'general nurse',
                                    children: 'V\u0161eobecn\xE1 sestra',
                                  }),
                                  a('option', {
                                    value: 'head nurse',
                                    children: 'Vedouc\xED Sestra',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      R != 'admin'
                        ? w(A, {
                            children: [
                              w('div', {
                                className: 'field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Dostupnost',
                                  }),
                                  a('div', {
                                    className: 'control swap-availability',
                                    children: a('label', {
                                      className: 'checkbox',
                                      children: a('input', {
                                        type: 'checkbox',
                                        name: 'availability',
                                        onChange: (I) =>
                                          t.availability == 0
                                            ? n({ ...t, availability: 1 })
                                            : n({ ...t, availability: 0 }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Sm\u011Bna',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('div', {
                                      className: p
                                        ? 'select is-danger'
                                        : 'select',
                                      children: w('select', {
                                        required: !0,
                                        name: 'shift',
                                        onChange: (I) => {
                                          f(!1), O(I);
                                        },
                                        children: [
                                          a('option', {
                                            value: '',
                                            children: 'Vybrat sm\u011Bnu',
                                          }),
                                          a('option', {
                                            value: 'day',
                                            children: 'Denn\xED',
                                          }),
                                          a('option', {
                                            value: 'night',
                                            children: 'No\u010Dn\xED',
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w('div', {
                                className: 'field create-field',
                                children: [
                                  a('label', {
                                    className: 'label',
                                    children: 'Odd\u011Blen\xED',
                                  }),
                                  a('div', {
                                    className: 'control',
                                    children: a('div', {
                                      className: m
                                        ? 'select is-danger'
                                        : 'select',
                                      children: w('select', {
                                        required: !0,
                                        name: 'workplace',
                                        onChange: (I) => {
                                          x(!1), O(I);
                                        },
                                        children: [
                                          a('option', {
                                            value: '',
                                            children: 'Vybrat odd\u011Blen\xED',
                                          }),
                                          a('option', {
                                            value: 'village',
                                            children: 'Vesni\u010Dka',
                                          }),
                                          a('option', {
                                            value: 'first-floor',
                                            children: 'Prvn\xED patro',
                                          }),
                                          a('option', {
                                            value: 'ground-floor',
                                            children: 'P\u0159\xEDzem\xED',
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : a(A, {}),
                    ],
                  }),
                  s
                    ? a('p', {
                        className: 'has-text-danger',
                        children:
                          'Vypl\u0148te p\u0159ihla\u0161ovac\xED jm\xE9no',
                      })
                    : null,
                  c
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Vypl\u0148te heslo',
                      })
                    : null,
                  o
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Vypl\u0148te jm\xE9no a p\u0159\xEDjmen\xED',
                      })
                    : null,
                  y
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte roli',
                      })
                    : null,
                  p
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte sm\u011Bnu',
                      })
                    : null,
                  m
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte odd\u011Blen\xED',
                      })
                    : null,
                  v == 'success'
                    ? R == 'admin'
                      ? a('p', {
                          className: 'has-text-success',
                          children:
                            'Spr\xE1vce byl \xFAsp\u011B\u0161n\u011B p\u0159id\xE1n, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                      : a('p', {
                          className: 'has-text-success',
                          children:
                            'Zam\u011Bstnanec/zam\u011Bstnankyn\u011B byl/a \xFAsp\u011B\u0161n\u011B p\u0159id\xE1n/a, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                    : v == 'error'
                    ? a('p', {
                        className: 'has-text-danger',
                        children:
                          'P\u0159id\xE1n\xED zam\u011Bstnance/zam\u011Bstnankyn\u011B se nezda\u0159ilo',
                      })
                    : null,
                  a('button', {
                    className: 'button crud float-right',
                    onClick: _,
                    disabled: v == 'success',
                    children:
                      R != 'admin'
                        ? 'P\u0159idat zam\u011Bstnance/zam\u011Bstnankyni'
                        : 'P\u0159idat spr\xE1vce',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  wf = () => {
    const { uuid: e } = Wr(),
      [t, n] = h.exports.useState({
        EMPLOYEEID: '',
        SUFFIX: '',
        PREFIX: '',
        NAME: '',
        ROLE: '',
        AVAILABILITY: 0,
        SHIFT: '',
        WORKPLACE: '',
      });
    h.exports.useEffect(() => {
      console.log(e),
        (b.defaults.withCredentials = !0),
        b
          .get(
            `http://localhost:8080/api/employee/?group=EMPLOYEEID&data=${e}`,
            { withCredentials: !0 },
          )
          .then(async (l) => {
            const o = await l.data[0];
            n(o);
          });
    }, []);
    const r = (l) => {
      n({ ...t, [l.target.name]: l.target.value });
    };
    return w(A, {
      children: [
        a(Lt, {}),
        a('div', {
          className: 'section admin-layout',
          children: w('div', {
            className: 'columns',
            children: [
              a('div', { className: 'column is-2', children: a(Tt, {}) }),
              w('div', {
                className: 'column is-10',
                children: [
                  w('form', {
                    className: 'create-update-container',
                    children: [
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Akademick\xFD titul',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'PREFIX',
                              className: 'input',
                              type: 'text',
                              placeholder: t.PREFIX,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Neakademick\xFD titul',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'SUFFIX',
                              className: 'input',
                              type: 'text',
                              placeholder: t.SUFFIX,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'NAME',
                              className: 'input',
                              type: 'text',
                              placeholder: t.NAME,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', { className: 'label', children: 'Role' }),
                          a('div', {
                            className: 'control',
                            children: a('div', {
                              className: 'select',
                              children: w('select', {
                                name: 'ROLE',
                                onChange: (l) => r(l),
                                children: [
                                  a('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  a('option', {
                                    value: 'doctor',
                                    children: 'Doktor',
                                  }),
                                  a('option', {
                                    value: 'nurse',
                                    children: 'Sest\u0159i\u010Dka',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Dostupnost',
                          }),
                          a('div', {
                            className: 'control swap-availability',
                            children: a('label', {
                              className: 'checkbox',
                              children: a('input', {
                                type: 'checkbox',
                                name: 'AVAILABILITY',
                                onChange: (l) =>
                                  t.AVAILABILITY == 0
                                    ? n({ ...t, AVAILABILITY: 1 })
                                    : n({ ...t, AVAILABILITY: 0 }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  a('button', {
                    className: 'button crud float-right',
                    children: `Upravit ${t.NAME}`,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function Yi(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z',
        },
      },
    ],
  })(e);
}
function Xi(e) {
  return Ot({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z',
        },
      },
    ],
  })(e);
}
const MN = ({ className: e, user: t }) => {
    const n = () => {
      (b.defaults.withCredentials = !0),
        b.delete(`http://localhost:8080/api/user/${t.USERID}`).then((r) => {
          r.status == 200 && window.location.reload();
        });
    };
    return a(ze.Suspense, {
      fallback: a('div', { children: 'Loading...' }),
      children: w('div', {
        className: `modal ${e}`,
        children: [
          a('div', { className: 'modal-background' }),
          w('div', {
            className: 'modal-card',
            children: [
              w('header', {
                className: 'modal-card-head',
                children: [
                  w('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.NAME, '?'],
                  }),
                  a('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              w('footer', {
                className: 'modal-card-foot admin-modal',
                children: [
                  a('button', {
                    className: 'button is-success',
                    onClick: n,
                    children: 'Smazat',
                  }),
                  a('button', {
                    className: 'button is-danger',
                    children: 'Cancel',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  IN = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, o] = h.exports.useState(!1),
      [i, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = at(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/user/all')
            .then(async (m) => r(await m.data));
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }, []),
      w(A, {
        children: [
          u && a(lt, { to: 'page/1', replace: !0 }),
          a(Lt, {}),
          w('div', {
            className: 'section admin-layout',
            children: [
              w('div', {
                className: 'columns',
                children: [
                  a('div', { className: 'column is-2', children: a(Tt, {}) }),
                  a('div', {
                    className: 'column is-10',
                    children: w('div', {
                      className: 'table-container',
                      children: [
                        a('div', {
                          children: a(Fe, {
                            to: '/admin/create',
                            className: 'no-deco',
                            children: a('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat u\u017Eivatele',
                            }),
                          }),
                        }),
                        w('table', {
                          className: 'table admin-table',
                          children: [
                            a('thead', {
                              children: w('tr', {
                                children: [
                                  a('th', {
                                    children: 'U\u017Eivatelsk\xE9 jm\xE9no',
                                  }),
                                  a('th', { children: 'Role' }),
                                  a('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            a('tbody', {
                              children: n.slice(10 * (t - 1), 10 * t).map((m) =>
                                w(
                                  'tr',
                                  {
                                    children: [
                                      a('td', {
                                        children: a('p', {
                                          className: 'admin-value',
                                          children: m.USERNAME,
                                        }),
                                      }),
                                      a('td', {
                                        children: a('p', {
                                          className: 'admin-value',
                                          children: 'Spr\xE1vce',
                                        }),
                                      }),
                                      a('td', {
                                        children: w('div', {
                                          className: 'button-holder',
                                          children: [
                                            a(Fe, {
                                              to: `edit/${m.USERID}`,
                                              children: a('button', {
                                                className: 'button admin-edit',
                                                children: a(Xi, {}),
                                              }),
                                            }),
                                            a('button', {
                                              className: 'button admin-edit',
                                              onClick: () => {
                                                s(m), o(!0);
                                              },
                                              children: a(Yi, {}),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  m.ID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              w('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? a('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : a(A, {}),
                  parseInt(t) != p && p > 1
                    ? a('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : a(A, {}),
                  w('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        w(A, {
                          children: [
                            parseInt(t) > 3 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) - 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) - 1)),
                                  children: parseInt(t) - 1,
                                }),
                              }),
                          ],
                        }),
                      a('li', {
                        children: a('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        w(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page ' + p,
                            onClick: (m) => d(`/table/${e}/page/${p}`),
                            children: p,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l ? a(MN, { className: l ? 'is-active' : '', user: i }) : null,
        ],
      })
    );
  },
  FN = ({ className: e, announcement: t }) => {
    const n = () => {
      (b.defaults.withCredentials = !0),
        b
          .delete(`http://localhost:8080/api/announcement/${t.ANNOUNCEMENTID}`)
          .then((r) => {
            r.status == 200 && window.location.reload();
          });
    };
    return a(ze.Suspense, {
      fallback: a('div', { children: 'Loading...' }),
      children: w('div', {
        className: `modal ${e}`,
        children: [
          a('div', { className: 'modal-background' }),
          w('div', {
            className: 'modal-card',
            children: [
              w('header', {
                className: 'modal-card-head',
                children: [
                  w('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.TITLE, '?'],
                  }),
                  a('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              w('footer', {
                className: 'modal-card-foot admin-modal',
                children: [
                  a('button', {
                    className: 'button is-success',
                    onClick: n,
                    children: 'Smazat',
                  }),
                  a('button', {
                    className: 'button is-danger',
                    children: 'Cancel',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  bN = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, o] = h.exports.useState(!1),
      [i, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = at(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/announcement/all')
            .then(async (m) => {
              r(await m.data), f(Math.ceil((await m.data.length) / 10));
            });
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }, [p]),
      w(A, {
        children: [
          u && a(lt, { to: 'page/1', replace: !0 }),
          a(Lt, {}),
          w('div', {
            className: 'section admin-layout',
            children: [
              w('div', {
                className: 'columns',
                children: [
                  a('div', { className: 'column is-2', children: a(Tt, {}) }),
                  a('div', {
                    className: 'column is-10',
                    children: w('div', {
                      className: 'table-container',
                      children: [
                        a('div', {
                          children: a(Fe, {
                            to: '/admin/create-event',
                            className: 'no-deco',
                            children: a('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat ud\xE1lost',
                            }),
                          }),
                        }),
                        w('table', {
                          className: 'table admin-table',
                          children: [
                            a('thead', {
                              children: w('tr', {
                                children: [
                                  a('th', { children: 'N\xE1zev ud\xE1losti' }),
                                  a('th', { children: 'Popis ud\xE1losti' }),
                                  a('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            a('tbody', {
                              children: n.slice(10 * (t - 1), 10 * t).map((m) =>
                                w(
                                  'tr',
                                  {
                                    children: [
                                      a('td', {
                                        children: a('p', {
                                          className: 'admin-value',
                                          children: m.TITLE,
                                        }),
                                      }),
                                      a('td', {
                                        children: a('p', {
                                          className:
                                            'admin-value announcement-text',
                                          children: m.ANNOUNCEMENT,
                                        }),
                                      }),
                                      a('td', {
                                        children: w('div', {
                                          className: 'button-holder',
                                          children: [
                                            a(Fe, {
                                              to: `/admin/edit-event/${m.ANNOUNCEMENTID}`,
                                              children: a('button', {
                                                className: 'button admin-edit',
                                                children: a(Xi, {}),
                                              }),
                                            }),
                                            a('button', {
                                              className: 'button admin-edit',
                                              onClick: () => {
                                                s(m), o(!0);
                                              },
                                              children: a(Yi, {}),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  m.ANNOUNCEMENTID,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              w('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? a('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : a(A, {}),
                  parseInt(t) != p && p > 1
                    ? a('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : a(A, {}),
                  w('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        w(A, {
                          children: [
                            parseInt(t) > 3 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) - 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) - 1)),
                                  children: parseInt(t) - 1,
                                }),
                              }),
                          ],
                        }),
                      a('li', {
                        children: a('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        w(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page ' + p,
                            onClick: (m) => d(`/table/${e}/page/${p}`),
                            children: p,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l
            ? a(FN, { className: l ? 'is-active' : '', announcement: i })
            : a(A, {}),
        ],
      })
    );
  },
  Pv = ({ className: e, employee: t, onClick: n }) => {
    const [r, l] = h.exports.useState(!1),
      o = () => {
        (b.defaults.withCredentials = !0),
          b
            .delete(`http://localhost:8080/api/employee/${t.EMPLOYEEID}`)
            .then(
              (i) => (
                i.status == 200 && (l(!0), window.location.reload()), l(!1)
              ),
            );
      };
    return w(ze.Suspense, {
      fallback: a('div', { children: 'Loading...' }),
      children: [
        r && a(lt, { to: '/admin/employees', replace: !0 }),
        w('div', {
          className: `modal ${e}`,
          children: [
            a('div', { className: 'modal-background' }),
            w('div', {
              className: 'modal-card',
              children: [
                w('header', {
                  className: 'modal-card-head',
                  children: [
                    w('p', {
                      className: 'modal-card-title',
                      children: ['Opravdu chcete smazat ', t.NAME, '?'],
                    }),
                    a('button', { className: 'delete', 'aria-label': 'close' }),
                  ],
                }),
                w('footer', {
                  className: 'modal-card-foot admin-modal',
                  children: [
                    a('button', {
                      className: 'button is-success',
                      onClick: o,
                      children: 'Smazat',
                    }),
                    a('button', {
                      className: 'button is-danger',
                      onClick: n,
                      children: 'Cancel',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  AN = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, o] = h.exports.useState(!1),
      [i, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = at(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/employee/all')
            .then((m) => r(m.data));
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1);
        let m = Math.ceil(n.length / 10);
        f(m);
      }, []),
      w(A, {
        children: [
          u && a(lt, { to: 'page/1', replace: !0 }),
          a(Lt, {}),
          w('div', {
            className: 'section admin-layout',
            children: [
              w('div', {
                className: 'columns',
                children: [
                  a('div', { className: 'column is-2', children: a(Tt, {}) }),
                  a('div', {
                    className: 'column is-10',
                    children: w('div', {
                      className: 'table-container',
                      children: [
                        a('div', {
                          children: a(Fe, {
                            to: '/admin/create',
                            className: 'no-deco',
                            children: a('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat u\u017Eivatele',
                            }),
                          }),
                        }),
                        w('table', {
                          className: 'table admin-table',
                          children: [
                            a('thead', {
                              children: w('tr', {
                                children: [
                                  a('th', { children: 'Akademick\xFD titul' }),
                                  a('th', {
                                    children: 'Neakademick\xFD titul',
                                  }),
                                  a('th', {
                                    children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                                  }),
                                  a('th', { children: 'Role' }),
                                  a('th', { children: 'Dostupnost' }),
                                  a('th', { children: 'Pracovi\u0161t\u011B' }),
                                  a('th', { children: 'Sm\u011Bna' }),
                                  a('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            a('tbody', {
                              children: n.map((m) => {
                                if (m.ROLE == e)
                                  return w(
                                    'tr',
                                    {
                                      children: [
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.PREFIX,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.SUFFIX,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.NAME,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.ROLE == 'doctor'
                                                ? 'Doktor/ka'
                                                : 'Sestra',
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.AVAILABILITY == 1
                                                ? 'Dostupn\xFD/\xE1'
                                                : 'Nedostupn\xFD/\xE1',
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.WORKPLACE == 'village'
                                                ? 'Vesni\u010Dka'
                                                : m.WORKPLACE == 'first-floor'
                                                ? 'Prvn\xED patro'
                                                : m.WORKPLACE == 'ground-floor'
                                                ? 'P\u0159\xEDzem\xED'
                                                : null,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.SHIFT == 'day'
                                                ? 'Denn\xED'
                                                : 'No\u010Dn\xED',
                                          }),
                                        }),
                                        a('td', {
                                          children: w('div', {
                                            className: 'button-holder',
                                            children: [
                                              a(Fe, {
                                                to: `edit/${m.EMPLOYEEID}`,
                                                children: a('button', {
                                                  className:
                                                    'button admin-edit',
                                                  children: a(Xi, {}),
                                                }),
                                              }),
                                              a('button', {
                                                className: 'button admin-edit',
                                                onClick: () => {
                                                  s(m), o(!0);
                                                },
                                                children: a(Yi, {}),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    m.EMPLOYEEID,
                                  );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              w('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? a('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : a(A, {}),
                  parseInt(t) != p && p > 1
                    ? a('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : a(A, {}),
                  w('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        w(A, {
                          children: [
                            parseInt(t) > 3 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) - 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) - 1)),
                                  children: parseInt(t) - 1,
                                }),
                              }),
                          ],
                        }),
                      a('li', {
                        children: a('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        w(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page ' + p,
                            onClick: (m) => d(`/table/${e}/page/${p}`),
                            children: p,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l
            ? a(Pv, {
                className: l ? 'is-active' : '',
                employee: i,
                onClick: () => {
                  o(!1);
                },
              })
            : null,
        ],
      })
    );
  },
  $N = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, o] = h.exports.useState(),
      [i, s] = h.exports.useState(!1),
      [u, c] = h.exports.useState(!1),
      d = at(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b.get('http://localhost:8080/api/employee/all').then(async (m) => {
            r(await m.data);
          });
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }, []),
      w(A, {
        children: [
          u && a(lt, { to: 'page/1', replace: !0 }),
          a(Lt, {}),
          w('div', {
            className: 'section admin-layout',
            children: [
              w('div', {
                className: 'columns',
                children: [
                  a('div', { className: 'column is-2', children: a(Tt, {}) }),
                  a('div', {
                    className: 'column is-10',
                    children: w('div', {
                      className: 'table-container',
                      children: [
                        a('div', {
                          children: a(Fe, {
                            to: '/admin/create-member',
                            className: 'no-deco',
                            children: a('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat \u010Dlena veden\xED',
                            }),
                          }),
                        }),
                        w('table', {
                          className: 'table admin-table',
                          children: [
                            a('thead', {
                              children: w('tr', {
                                children: [
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children: 'Akademick\xFD titul',
                                    }),
                                  }),
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children: 'Neakademick\xFD titul',
                                    }),
                                  }),
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children:
                                        'Jm\xE9no a p\u0159\xEDjmen\xED',
                                    }),
                                  }),
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children: 'Role',
                                    }),
                                  }),
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children: 'Dostupnost',
                                    }),
                                  }),
                                  a('th', {
                                    children: a('p', {
                                      className: 'admin-value',
                                      children: 'Spr\xE1va',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            a('tbody', {
                              children: n
                                .filter(
                                  (m) =>
                                    m.ROLE != 'doctor' && m.ROLE != 'nurse',
                                )
                                .slice(10 * (t - 1), 10 * t)
                                .map((m) =>
                                  w(
                                    'tr',
                                    {
                                      children: [
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.PREFIX,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.SUFFIX,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children: m.NAME,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.ROLE == 'chairman'
                                                ? '\u0158editel/ka'
                                                : m.ROLE == 'vice chairman'
                                                ? 'Z\xE1stupce \u0159editele'
                                                : m.ROLE == 'head nurse'
                                                ? 'Vedouc\xED sestra'
                                                : m.ROLE == 'social worker'
                                                ? 'Soci\xE1ln\xED pracovn\xEDk'
                                                : null,
                                          }),
                                        }),
                                        a('td', {
                                          children: a('p', {
                                            className: 'admin-value',
                                            children:
                                              m.AVAILABILITY == 1
                                                ? a(Sv, {})
                                                : a(Cv, {}),
                                          }),
                                        }),
                                        w('td', {
                                          children: [
                                            a(Fe, {
                                              to: `edit/${m.EMPLOYEEID}`,
                                              children: a('button', {
                                                className: 'button admin-edit',
                                                children: a(Xi, {}),
                                              }),
                                            }),
                                            a('button', {
                                              className: 'button admin-edit',
                                              onClick: () => {
                                                o(m), s(!0);
                                              },
                                              children: a(Yi, {}),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    m.EMPLOYEEID,
                                  ),
                                ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              w('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? a('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : a(A, {}),
                  parseInt(t) != p && p > 1
                    ? a('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : a(A, {}),
                  w('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        w(A, {
                          children: [
                            parseInt(t) > 3 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) - 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) - 1)),
                                  children: parseInt(t) - 1,
                                }),
                              }),
                          ],
                        }),
                      a('li', {
                        children: a('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        w(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              a('li', {
                                children: a('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              a('li', {
                                children: a('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        a('li', {
                          children: a('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page ' + p,
                            onClick: (m) => d(`/table/${e}/page/${p}`),
                            children: p,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          i
            ? a(Pv, {
                className: i ? 'is-active' : '',
                employee: l,
                setModal: (m) => s(!1),
              })
            : a(A, {}),
        ],
      })
    );
  },
  jN = () => {
    const { role: e, page: t } = Wr();
    return e == 'admin'
      ? a(IN, { role: e, page: t })
      : e == 'announcements'
      ? a(bN, { role: e, page: t })
      : e == 'administration'
      ? a($N, { role: e, page: t })
      : e == 'doctor' || e == 'nurse'
      ? a(AN, { role: e, page: t })
      : a(A, {});
  },
  zN = () => {
    const e = at(),
      { id: t } = Wr(),
      [n, r] = h.exports.useState({ USERID: '', USERNAME: '', PASSWORD: '' }),
      [l, o] = h.exports.useState(''),
      [i, s] = h.exports.useState(!1);
    h.exports.useEffect(() => {
      (b.defaults.withCredentials = !0),
        b
          .get(`http://localhost:8080/api/user/${t}`, { withCredentials: !0 })
          .then(async (c) => {
            const d = await c.data[0];
            r(d);
          });
    }, []);
    const u = (c) => {
      r({ ...n, [c.target.name]: c.target.value });
    };
    return w(A, {
      children: [
        i ? e(-1) : null,
        a(Lt, {}),
        a('div', {
          className: 'section admin-layout',
          children: w('div', {
            className: 'columns',
            children: [
              a('div', { className: 'column is-2', children: a(Tt, {}) }),
              w('div', {
                className: 'column is-10',
                children: [
                  w('form', {
                    className: 'create-update-container',
                    children: [
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'U\u017Eivatelsk\xE9 jm\xE9no',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'NAME',
                              className: 'input',
                              type: 'text',
                              placeholder: n.USERNAME,
                              onChange: (c) => u(c),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Nov\xE9 Heslo',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'PASSWORD',
                              className: 'input',
                              type: 'text',
                              placeholder: 'Nov\xE9 heslo',
                              onChange: (c) => u(c),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  l == 'success'
                    ? a('p', {
                        className: 'has-text-success',
                        children:
                          'U\u017Eivatel byl \xFAsp\u011B\u0161n\u011B upraven, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : l == 'error'
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Nezda\u0159ila se \xFAprava u\u017Eivatele',
                      })
                    : null,
                  a('button', {
                    className: 'button crud float-right',
                    disabled: l == 'success',
                    children: `Upravit ${n.USERNAME}`,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  UN = () => {
    const e = at(),
      [t, n] = h.exports.useState({ TITLE: '', ANNOUNCEMENT: '' }),
      [r, l] = h.exports.useState(!1),
      [o, i] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(''),
      [p, f] = h.exports.useState(!1),
      m = (y) => {
        n({ ...t, [y.target.name]: y.target.value });
      },
      x = (y) => {
        if ((y.preventDefault(), t.TITLE == '' && i(!0), t.ANNOUNCEMENT == ''))
          return u(!0);
        if (t.ANNOUNCEMENT == '' && t.TITLE == '') {
          i(!0), u(!0);
          return;
        }
        if (t.ANNOUNCEMENT.length > 255) return l(!0);
        (b.defaults.withCredentials = !0),
          b
            .post('http://localhost:8080/api/announcement/new', t, {
              withCredentials: !0,
            })
            .then((S) => {
              S.status == 200 &&
                (d('success'),
                setTimeout(() => {
                  f(!0);
                }, 3e3));
            })
            .catch((S) => {
              d('error');
            });
      };
    return w(A, {
      children: [
        p ? e(-1) : null,
        a(Lt, {}),
        a('div', {
          className: 'section admin-layout',
          children: w('div', {
            className: 'columns',
            children: [
              a('div', { className: 'column is-2', children: a(Tt, {}) }),
              w('div', {
                className: 'column is-10',
                children: [
                  w('form', {
                    children: [
                      w('div', {
                        className: 'field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'N\xE1zev ud\xE1losti',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'TITLE',
                              className: o ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'N\xE1zev ud\xE1losti',
                              onChange: (y) => {
                                i(!1), m(y);
                              },
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Popis ud\xE1losti',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('textarea', {
                              name: 'ANNOUNCEMENT',
                              className: s ? 'textarea is-danger' : 'textarea',
                              placeholder: 'Popis ud\xE1losti',
                              maxLength: 255,
                              onChange: (y) => {
                                u(!1), m(y);
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  r &&
                    a('p', {
                      className: 'has-text-danger',
                      children:
                        'Popis ud\xE1losti nesm\xED b\xFDt del\u0161\xED ne\u017E 255 znak\u016F!',
                    }),
                  o
                    ? a('p', {
                        className: 'has-text-danger',
                        children:
                          'N\xE1zev ud\xE1losti nesm\xED b\xFDt pr\xE1zdn\xFD!',
                      })
                    : null,
                  s
                    ? a('p', {
                        className: 'has-text-danger',
                        children:
                          'Popis ud\xE1losti nesm\xED b\xFDt pr\xE1zdn\xFD!',
                      })
                    : null,
                  c == 'success'
                    ? a('p', {
                        className: 'has-text-success',
                        children:
                          'Ud\xE1lost byla \xFAsp\u011B\u0161n\u011B p\u0159id\xE1na, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : c == 'error'
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Nepoda\u0159ilo se p\u0159idat ud\xE1lost',
                      })
                    : null,
                  a('button', {
                    className: 'button crud float-right margin-top-10px',
                    onClick: x,
                    disabled: c == 'success',
                    children: 'Vytvo\u0159it ud\xE1lost',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  BN = () => {
    const { id: e } = Wr(),
      t = useNavigate(),
      [n, r] = h.exports.useState({ TITLE: '', ANNOUNCEMENT: '' }),
      [l, o] = h.exports.useState(''),
      [i, s] = h.exports.useState(!1);
    return (
      h.exports.useEffect(() => {
        (b.defaults.withCredentials = !0),
          b
            .get('http://localhost:8080/api/announcement/all', {
              withCredentials: !0,
            })
            .then((u) => {
              u.data.map(async (c) => {
                c.ANNOUNCEMENTID.trim() === e &&
                  ((c.ANNOUNCEMENTID = e), r(await c));
              });
            });
      }, []),
      w(A, {
        children: [
          i ? t(-1) : null,
          a(Lt, {}),
          a('div', {
            className: 'section admin-layout',
            children: w('div', {
              className: 'columns',
              children: [
                a('div', { className: 'column is-2', children: a(Tt, {}) }),
                w('div', {
                  className: 'column is-10',
                  children: [
                    w('form', {
                      children: [
                        w('div', {
                          className: 'field',
                          children: [
                            a('label', {
                              className: 'label',
                              children: 'N\xE1zev ud\xE1losti',
                            }),
                            a('div', {
                              className: 'control',
                              children: a('input', {
                                name: 'TITLE',
                                className: 'input',
                                type: 'text',
                                placeholder: n.TITLE,
                              }),
                            }),
                          ],
                        }),
                        w('div', {
                          className: 'field',
                          children: [
                            a('label', {
                              className: 'label',
                              children: 'Popis ud\xE1losti',
                            }),
                            a('div', {
                              className: 'control',
                              children: a('textarea', {
                                name: 'ANNOUNCEMENT',
                                className: 'textarea',
                                placeholder: n.ANNOUNCEMENT,
                                maxLength: 255,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l == 'success'
                      ? a('p', {
                          className: 'has-text-success',
                          children:
                            'Ud\xE1lost byla \xFAsp\u011B\u0161n\u011B upravena, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                      : l == 'error'
                      ? a('p', {
                          className: 'has-text-danger',
                          children: 'Nezda\u0159ila se \xFAprava ud\xE1losti',
                        })
                      : null,
                    a('button', {
                      className: 'button crud float-right margin-top-10px',
                      disabled: l == 'success',
                      children: 'Upravit ud\xE1lost',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  HN = () => {
    const e = at(),
      [t, n] = h.exports.useState(!1),
      [r, l] = h.exports.useState({
        prefix: '',
        suffix: '',
        name: '',
        role: '',
        availability: 0,
        shift: '',
        workplace: '',
      }),
      [o, i] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(''),
      p = (m) => {
        l({ ...r, [m.target.name]: m.target.value });
      },
      f = (m) => {
        m.preventDefault(),
          r.name === '' && i(!0),
          r.role === '' && u(!0),
          console.log(r),
          (b.defaults.withCredentials = !0),
          b
            .post('http://localhost:8080/api/employee/new', r, {
              withCredentials: !0,
            })
            .then((x) => {
              x.status == 200 &&
                (d('success'),
                setTimeout(() => {
                  n(!0);
                }, 3e3));
            })
            .catch((x) => {
              d('error');
            });
      };
    return w(A, {
      children: [
        t ? e(-1) : null,
        a(Lt, {}),
        a('div', {
          className: 'section admin-layout',
          children: w('div', {
            className: 'columns',
            children: [
              a('div', { className: 'column is-2', children: a(Tt, {}) }),
              w('div', {
                className: 'column is-10',
                children: [
                  w('form', {
                    className: 'create-update-container',
                    children: [
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Akademick\xFD titul',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'prefix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'MUDr. PaedDr. PhD.',
                              onChange: (m) => p(m),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Nekademick\xFD titul',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'suffix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'DiS.',
                              onChange: (m) => p(m),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                          }),
                          a('div', {
                            className: 'control',
                            children: a('input', {
                              name: 'name',
                              className: o ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                              onChange: (m) => {
                                i(!1), p(m);
                              },
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field create-field',
                        children: [
                          a('label', { className: 'label', children: 'Role' }),
                          a('div', {
                            className: 'control',
                            children: a('div', {
                              className: s ? 'select is-danger' : 'select',
                              children: w('select', {
                                required: !0,
                                name: 'role',
                                onChange: (m) => {
                                  u(!1), p(m);
                                },
                                children: [
                                  a('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  a('option', {
                                    value: 'chairman',
                                    children: '\u0158editel/ka',
                                  }),
                                  a('option', {
                                    value: 'vice chairman',
                                    children: 'Z\xE1stupce \u0159editele',
                                  }),
                                  a('option', {
                                    value: 'head nurse',
                                    children: 'Vedouc\xED sestra',
                                  }),
                                  a('option', {
                                    value: 'social worker',
                                    children: 'Soci\xE1ln\xED pracovnice',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      w('div', {
                        className: 'field',
                        children: [
                          a('label', {
                            className: 'label',
                            children: 'Dostupnost',
                          }),
                          a('div', {
                            className: 'control swap-availability',
                            children: a('label', {
                              className: 'checkbox',
                              children: a('input', {
                                type: 'checkbox',
                                name: 'availability',
                                onChange: (m) =>
                                  r.availability == 0
                                    ? l({ ...r, availability: 1 })
                                    : l({ ...r, availability: 0 }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Jm\xE9no nen\xED nastaven\xE9!',
                      })
                    : null,
                  s
                    ? a('p', {
                        className: 'has-text-danger',
                        children: 'Role nen\xED nastaven\xE1!',
                      })
                    : null,
                  c == 'success'
                    ? a('p', {
                        className: 'has-text-success',
                        children:
                          '\u010Clen rady byl p\u0159id\xE1n, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : c == 'error'
                    ? a('p', {
                        className: 'has-text-danger',
                        children:
                          'Nepoda\u0159ilo se p\u0159idat \u010Dlena rady',
                      })
                    : null,
                  a('button', {
                    className: 'button crud float-right margin-top-10px',
                    onClick: f,
                    disabled: c == 'success',
                    children: 'P\u0159idat \u010Dlena rady',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  VN = () =>
    w(Hu, {
      children: [
        a(Re, { index: !0, element: a(cw, {}) }),
        a(Re, {
          path: '/admin',
          element: a(lt, { to: 'dashboard', replace: !0 }),
        }),
        a(Re, { path: 'admin/dashboard', element: a(kN, {}) }),
        a(Re, { path: 'info', element: a(mN, {}) }),
        a(Re, { path: 'login', element: a(PN, {}) }),
        a(Re, { path: 'status', element: a(LN, {}) }),
        a(Re, { path: 'events', element: a(ON, {}) }),
        a(Re, { path: 'table/:role/page/:page', element: a(jN, {}) }),
        a(Re, { path: 'table/:role/edit/:uuid', element: a(wf, {}) }),
        a(Re, { path: 'admin/create', element: a(_N, {}) }),
        a(Re, { path: 'admin/create-event', element: a(UN, {}) }),
        a(Re, { path: 'admin/create-member', element: a(HN, {}) }),
        a(Re, { path: 'admin/edit/:id', element: a(wf, {}) }),
        a(Re, { path: 'admin/edit-user/:id', element: a(zN, {}) }),
        a(Re, { path: 'admin/edit-event/:id', element: a(BN, {}) }),
      ],
    });
const WN = ja.createRoot(document.getElementById('root'));
WN.render(a(am, { children: a(VN, {}) }));
