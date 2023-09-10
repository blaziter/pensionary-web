function bv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
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
    for (const i of l)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : l.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Sf(e) {
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
var zo = {},
  Ks = { exports: {} },
  at = {},
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
  Mv = Symbol.for('react.portal'),
  Fv = Symbol.for('react.fragment'),
  Av = Symbol.for('react.strict_mode'),
  $v = Symbol.for('react.profiler'),
  zv = Symbol.for('react.provider'),
  jv = Symbol.for('react.context'),
  Uv = Symbol.for('react.forward_ref'),
  Bv = Symbol.for('react.suspense'),
  Hv = Symbol.for('react.memo'),
  Vv = Symbol.for('react.lazy'),
  Dc = Symbol.iterator;
function Wv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Dc && e[Dc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Cf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Rf = {};
function Ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rf),
    (this.updater = n || Cf);
}
Ur.prototype.isReactComponent = {};
Ur.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Df() {}
Df.prototype = Ur.prototype;
function Qs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rf),
    (this.updater = n || Cf);
}
var Gs = (Qs.prototype = new Df());
Gs.constructor = Qs;
kf(Gs, Ur.prototype);
Gs.isPureReactComponent = !0;
var Pc = Array.isArray,
  Pf = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tf(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Pf.call(t, r) && !Of.hasOwnProperty(r) && (l[r] = t[r]);
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
    key: i,
    ref: a,
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
var Oc = /\/+/g;
function Za(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Qv('' + e.key)
    : t.toString(36);
}
function Ti(e, t, n, r, l) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Xl:
          case Mv:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === '' ? '.' + Za(a, 0) : r),
      Pc(l)
        ? ((n = ''),
          e != null && (n = e.replace(Oc, '$&/') + '/'),
          Ti(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Xs(l) &&
            (l = Kv(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Oc, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Pc(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Za(i, s);
      a += Ti(i, t, n, u, l);
    }
  else if (((u = Wv(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Za(i, s++)), (a += Ti(i, t, n, u, l));
  else if (i === 'object')
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
  return a;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ti(e, r, '', '', function (i) {
      return t.call(n, i, l++);
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
  Li = { transition: null },
  Yv = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: Ys,
  };
W.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
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
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
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
W.Component = Ur;
W.Fragment = Fv;
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
  var r = kf({}, e.props),
    l = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Ys.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Pf.call(t, u) &&
        !Of.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Xl, type: e.type, key: l, ref: i, props: r, _owner: a };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: jv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zv, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = Tf;
W.createFactory = function (e) {
  var t = Tf.bind(null, e);
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
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
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
const je = Sf(h.exports),
  jo = bv({ __proto__: null, default: je }, [h.exports]);
var Lf = { exports: {} },
  _f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, z) {
    var U = L.length;
    L.push(z);
    e: for (; 0 < U; ) {
      var V = (U - 1) >>> 1,
        ne = L[V];
      if (0 < l(ne, z)) (L[V] = z), (L[U] = ne), (U = V);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var z = L[0],
      U = L.pop();
    if (U !== z) {
      L[0] = U;
      e: for (var V = 0, ne = L.length, _t = ne >>> 1; V < _t; ) {
        var We = 2 * (V + 1) - 1,
          he = L[We],
          Se = We + 1,
          ct = L[Se];
        if (0 > l(he, U))
          Se < ne && 0 > l(ct, he)
            ? ((L[V] = ct), (L[Se] = U), (V = Se))
            : ((L[V] = he), (L[We] = U), (V = We));
        else if (Se < ne && 0 > l(ct, U)) (L[V] = ct), (L[Se] = U), (V = Se);
        else break e;
      }
    }
    return z;
  }
  function l(L, z) {
    var U = L.sortIndex - z.sortIndex;
    return U !== 0 ? U : L.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
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
  function N(L) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= L)
        r(c), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(c);
    }
  }
  function w(L) {
    if (((y = !1), N(L), !x))
      if (n(u) !== null) (x = !0), Nt(R);
      else {
        var z = n(c);
        z !== null && qe(w, z.startTime - L);
      }
  }
  function R(L, z) {
    (x = !1), y && ((y = !1), v(_), (_ = -1)), (m = !0);
    var U = f;
    try {
      for (
        N(z), p = n(u);
        p !== null && (!(p.expirationTime > z) || (L && !xe()));

      ) {
        var V = p.callback;
        if (typeof V == 'function') {
          (p.callback = null), (f = p.priorityLevel);
          var ne = V(p.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ne == 'function' ? (p.callback = ne) : p === n(u) && r(u),
            N(z);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var _t = !0;
      else {
        var We = n(c);
        We !== null && qe(w, We.startTime - z), (_t = !1);
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
  function Ze() {
    if (O !== null) {
      var L = e.unstable_now();
      $ = L;
      var z = !0;
      try {
        z = O(!0, L);
      } finally {
        z ? $e() : ((T = !1), (O = null));
      }
    } else T = !1;
  }
  var $e;
  if (typeof g == 'function')
    $e = function () {
      g(Ze);
    };
  else if (typeof MessageChannel < 'u') {
    var te = new MessageChannel(),
      Z = te.port2;
    (te.port1.onmessage = Ze),
      ($e = function () {
        Z.postMessage(null);
      });
  } else
    $e = function () {
      S(Ze, 0);
    };
  function Nt(L) {
    (O = L), T || ((T = !0), $e());
  }
  function qe(L, z) {
    _ = S(function () {
      L(e.unstable_now());
    }, z);
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
      x || m || ((x = !0), Nt(R));
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
          var z = 3;
          break;
        default:
          z = f;
      }
      var U = f;
      f = z;
      try {
        return L();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, z) {
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
        return z();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (L, z, U) {
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
          callback: z,
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
              (y ? (v(_), (_ = -1)) : (y = !0), qe(w, U - V)))
          : ((L.sortIndex = ne), t(u, L), x || m || ((x = !0), Nt(R))),
        L
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (L) {
      var z = f;
      return function () {
        var U = f;
        f = z;
        try {
          return L.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(_f);
(function (e) {
  e.exports = _f;
})(Lf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = h.exports,
  lt = Lf.exports;
function D(e) {
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
var If = new Set(),
  Ol = {};
function qn(e, t) {
  br(e, t), br(e + 'Capture', t);
}
function br(e, t) {
  for (Ol[e] = t, e = 0; e < t.length; e++) If.add(t[e]);
}
var Zt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Uo = Object.prototype.hasOwnProperty,
  Xv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Tc = {},
  Lc = {};
function Jv(e) {
  return Uo.call(Lc, e)
    ? !0
    : Uo.call(Tc, e)
    ? !1
    : Xv.test(e)
    ? (Lc[e] = !0)
    : ((Tc[e] = !0), !1);
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
function He(e, t, n, r, l, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Te = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Te[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Te[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Te[e] = new He(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Te[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Te[e] = new He(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Te[e] = new He(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Te[e] = new He(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Te[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function Zs(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    Te[t] = new He(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    Te[t] = new He(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Js, Zs);
  Te[t] = new He(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Te[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new He(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Te[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qs(e, t, n, r) {
  var l = Te.hasOwnProperty(t) ? Te[t] : null;
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
var an = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  di = Symbol.for('react.element'),
  dr = Symbol.for('react.portal'),
  fr = Symbol.for('react.fragment'),
  eu = Symbol.for('react.strict_mode'),
  Bo = Symbol.for('react.profiler'),
  Mf = Symbol.for('react.provider'),
  Ff = Symbol.for('react.context'),
  tu = Symbol.for('react.forward_ref'),
  Ho = Symbol.for('react.suspense'),
  Vo = Symbol.for('react.suspense_list'),
  nu = Symbol.for('react.memo'),
  pn = Symbol.for('react.lazy'),
  Af = Symbol.for('react.offscreen'),
  _c = Symbol.iterator;
function qr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (_c && e[_c]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pe = Object.assign,
  qa;
function fl(e) {
  if (qa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qa = (t && t[1]) || '';
    }
  return (
    `
` +
    qa +
    e
  );
}
var eo = !1;
function to(e, t) {
  if (!e || eo) return '';
  eo = !0;
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
          i = r.stack.split(`
`),
          a = l.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && l[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (l[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || l[a] !== i[s])) {
                var u =
                  `
` + l[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (eo = !1), (Error.prepareStackTrace = n);
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
      return (e = to(e.type, !1)), e;
    case 11:
      return (e = to(e.type.render, !1)), e;
    case 1:
      return (e = to(e.type, !0)), e;
    default:
      return '';
  }
}
function Wo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case fr:
      return 'Fragment';
    case dr:
      return 'Portal';
    case Bo:
      return 'Profiler';
    case eu:
      return 'StrictMode';
    case Ho:
      return 'Suspense';
    case Vo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ff:
        return (e.displayName || 'Context') + '.Consumer';
      case Mf:
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
          (t = e.displayName || null), t !== null ? t : Wo(e.type) || 'Memo'
        );
      case pn:
        (t = e._payload), (e = e._init);
        try {
          return Wo(e(t));
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
      return Wo(t);
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
function $f(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function n1(e) {
  var t = $f(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = n1(e));
}
function zf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = $f(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ko(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function bc(e, t) {
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
function Qo(e, t) {
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
    ? Go(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Go(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ic(e, t, n) {
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
function Go(e, t, n) {
  (t !== 'number' || Wi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var pl = Array.isArray;
function Rr(e, t, n, r) {
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
function Yo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Mc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (pl(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function Uf(e, t) {
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
function Bf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Xo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Bf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var pi,
  Hf = (function (e) {
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
        pi = pi || document.createElement('div'),
          pi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = pi.firstChild;
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
function Vf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (xl.hasOwnProperty(e) && xl[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Vf(n, t[n], r);
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
function Jo(e, t) {
  if (t) {
    if (l1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(D(62));
  }
}
function Zo(e, t) {
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
var qo = null;
function ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var es = null,
  Dr = null,
  Pr = null;
function Ac(e) {
  if ((e = ql(e))) {
    if (typeof es != 'function') throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Pa(t)), es(e.stateNode, e.type, t));
  }
}
function Kf(e) {
  Dr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Dr = e);
}
function Qf() {
  if (Dr) {
    var e = Dr,
      t = Pr;
    if (((Pr = Dr = null), Ac(e), t)) for (e = 0; e < t.length; e++) Ac(t[e]);
  }
}
function Gf(e, t) {
  return e(t);
}
function Yf() {}
var no = !1;
function Xf(e, t, n) {
  if (no) return e(t, n);
  no = !0;
  try {
    return Gf(e, t, n);
  } finally {
    (no = !1), (Dr !== null || Pr !== null) && (Yf(), Qf());
  }
}
function Ll(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pa(n);
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
  if (n && typeof n != 'function') throw Error(D(231, t, typeof n));
  return n;
}
var ts = !1;
if (Zt)
  try {
    var el = {};
    Object.defineProperty(el, 'passive', {
      get: function () {
        ts = !0;
      },
    }),
      window.addEventListener('test', el, el),
      window.removeEventListener('test', el, el);
  } catch {
    ts = !1;
  }
function i1(e, t, n, r, l, i, a, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var El = !1,
  Ki = null,
  Qi = !1,
  ns = null,
  a1 = {
    onError: function (e) {
      (El = !0), (Ki = e);
    },
  };
function o1(e, t, n, r, l, i, a, s, u) {
  (El = !1), (Ki = null), i1.apply(a1, arguments);
}
function s1(e, t, n, r, l, i, a, s, u) {
  if ((o1.apply(this, arguments), El)) {
    if (El) {
      var c = Ki;
      (El = !1), (Ki = null);
    } else throw Error(D(198));
    Qi || ((Qi = !0), (ns = c));
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
function Jf(e) {
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
function $c(e) {
  if (er(e) !== e) throw Error(D(188));
}
function u1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return $c(l), e;
        if (i === r) return $c(l), t;
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var a = !1, s = l.child; s; ) {
        if (s === n) {
          (a = !0), (n = l), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = l), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = l);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Zf(e) {
  return (e = u1(e)), e !== null ? qf(e) : null;
}
function qf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ep = lt.unstable_scheduleCallback,
  zc = lt.unstable_cancelCallback,
  c1 = lt.unstable_shouldYield,
  d1 = lt.unstable_requestPaint,
  ge = lt.unstable_now,
  f1 = lt.unstable_getCurrentPriorityLevel,
  lu = lt.unstable_ImmediatePriority,
  tp = lt.unstable_UserBlockingPriority,
  Gi = lt.unstable_NormalPriority,
  p1 = lt.unstable_LowPriority,
  np = lt.unstable_IdlePriority,
  Ca = null,
  At = null;
function h1(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(Ca, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : g1,
  m1 = Math.log,
  v1 = Math.LN2;
function g1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((m1(e) / v1) | 0)) | 0;
}
var hi = 64,
  mi = 4194304;
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
function Yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~l;
    s !== 0 ? (r = hl(s)) : ((i &= a), i !== 0 && (r = hl(i)));
  } else (a = n & ~l), a !== 0 ? (r = hl(a)) : i !== 0 && (r = hl(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
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
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Pt(i),
      s = 1 << a,
      u = l[a];
    u === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (l[a] = y1(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function rs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rp() {
  var e = hi;
  return (hi <<= 1), (hi & 4194240) === 0 && (hi = 64), e;
}
function ro(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pt(t)),
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
    var l = 31 - Pt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function iu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function lp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var ip,
  au,
  ap,
  op,
  sp,
  ls = !1,
  vi = [],
  En = null,
  Nn = null,
  wn = null,
  _l = new Map(),
  bl = new Map(),
  vn = [],
  N1 =
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
      Nn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      wn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      _l.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      bl.delete(t.pointerId);
  }
}
function tl(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ql(t)), t !== null && au(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function w1(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (En = tl(En, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Nn = tl(Nn, e, t, n, r, l)), !0;
    case 'mouseover':
      return (wn = tl(wn, e, t, n, r, l)), !0;
    case 'pointerover':
      var i = l.pointerId;
      return _l.set(i, tl(_l.get(i) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (i = l.pointerId), bl.set(i, tl(bl.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function up(e) {
  var t = Un(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Jf(n)), t !== null)) {
          (e.blockedOn = t),
            sp(e.priority, function () {
              ap(n);
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
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = is(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qo = r), n.target.dispatchEvent(r), (qo = null);
    } else return (t = ql(n)), t !== null && au(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Uc(e, t, n) {
  _i(e) && n.delete(t);
}
function S1() {
  (ls = !1),
    En !== null && _i(En) && (En = null),
    Nn !== null && _i(Nn) && (Nn = null),
    wn !== null && _i(wn) && (wn = null),
    _l.forEach(Uc),
    bl.forEach(Uc);
}
function nl(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ls ||
      ((ls = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, S1)));
}
function Il(e) {
  function t(l) {
    return nl(l, e);
  }
  if (0 < vi.length) {
    nl(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && nl(En, e),
      Nn !== null && nl(Nn, e),
      wn !== null && nl(wn, e),
      _l.forEach(t),
      bl.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    up(n), n.blockedOn === null && vn.shift();
}
var Or = an.ReactCurrentBatchConfig,
  Xi = !0;
function C1(e, t, n, r) {
  var l = J,
    i = Or.transition;
  Or.transition = null;
  try {
    (J = 1), ou(e, t, n, r);
  } finally {
    (J = l), (Or.transition = i);
  }
}
function k1(e, t, n, r) {
  var l = J,
    i = Or.transition;
  Or.transition = null;
  try {
    (J = 4), ou(e, t, n, r);
  } finally {
    (J = l), (Or.transition = i);
  }
}
function ou(e, t, n, r) {
  if (Xi) {
    var l = is(e, t, n, r);
    if (l === null) ho(e, t, r, Ji, n), jc(e, r);
    else if (w1(l, e, t, n, r)) r.stopPropagation();
    else if ((jc(e, r), t & 4 && -1 < N1.indexOf(e))) {
      for (; l !== null; ) {
        var i = ql(l);
        if (
          (i !== null && ip(i),
          (i = is(e, t, n, r)),
          i === null && ho(e, t, r, Ji, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ho(e, t, r, null, n);
  }
}
var Ji = null;
function is(e, t, n, r) {
  if (((Ji = null), (e = ru(r)), (e = Un(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Jf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ji = e), null;
}
function cp(e) {
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
        case tp:
          return 4;
        case Gi:
        case p1:
          return 16;
        case np:
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
  bi = null;
function dp() {
  if (bi) return bi;
  var e,
    t = su,
    n = t.length,
    r,
    l = 'value' in yn ? yn.value : yn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[i - r]; r++);
  return (bi = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ii(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gi() {
  return !0;
}
function Bc() {
  return !1;
}
function ot(e) {
  function t(n, r, l, i, a) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? gi
        : Bc),
      (this.isPropagationStopped = Bc),
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
          (this.isDefaultPrevented = gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = gi));
      },
      persist: function () {},
      isPersistent: gi,
    }),
    t
  );
}
var Br = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  uu = ot(Br),
  Zl = pe({}, Br, { view: 0, detail: 0 }),
  R1 = ot(Zl),
  lo,
  io,
  rl,
  ka = pe({}, Zl, {
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
        : (e !== rl &&
            (rl && e.type === 'mousemove'
              ? ((lo = e.screenX - rl.screenX), (io = e.screenY - rl.screenY))
              : (io = lo = 0),
            (rl = e)),
          lo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : io;
    },
  }),
  Hc = ot(ka),
  D1 = pe({}, ka, { dataTransfer: 0 }),
  P1 = ot(D1),
  O1 = pe({}, Zl, { relatedTarget: 0 }),
  ao = ot(O1),
  T1 = pe({}, Br, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L1 = ot(T1),
  _1 = pe({}, Br, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  b1 = ot(_1),
  I1 = pe({}, Br, { data: 0 }),
  Vc = ot(I1),
  M1 = {
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
  F1 = {
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
var z1 = pe({}, Zl, {
    key: function (e) {
      if (e.key) {
        var t = M1[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ii(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? F1[e.keyCode] || 'Unidentified'
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
      return e.type === 'keypress' ? Ii(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ii(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  j1 = ot(z1),
  U1 = pe({}, ka, {
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
  Wc = ot(U1),
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
  H1 = ot(B1),
  V1 = pe({}, Br, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  W1 = ot(V1),
  K1 = pe({}, ka, {
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
  Q1 = ot(K1),
  G1 = [9, 13, 27, 32],
  du = Zt && 'CompositionEvent' in window,
  Nl = null;
Zt && 'documentMode' in document && (Nl = document.documentMode);
var Y1 = Zt && 'TextEvent' in window && !Nl,
  fp = Zt && (!du || (Nl && 8 < Nl && 11 >= Nl)),
  Kc = String.fromCharCode(32),
  Qc = !1;
function pp(e, t) {
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
function hp(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var pr = !1;
function X1(e, t) {
  switch (e) {
    case 'compositionend':
      return hp(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Qc = !0), Kc);
    case 'textInput':
      return (e = t.data), e === Kc && Qc ? null : e;
    default:
      return null;
  }
}
function J1(e, t) {
  if (pr)
    return e === 'compositionend' || (!du && pp(e, t))
      ? ((e = dp()), (bi = su = yn = null), (pr = !1), e)
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
      return fp && t.locale !== 'ko' ? null : t.data;
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
function Gc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Z1[e.type] : t === 'textarea';
}
function mp(e, t, n, r) {
  Kf(r),
    (t = Zi(t, 'onChange')),
    0 < t.length &&
      ((n = new uu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wl = null,
  Ml = null;
function q1(e) {
  Rp(e, 0);
}
function Ra(e) {
  var t = vr(e);
  if (zf(t)) return e;
}
function eg(e, t) {
  if (e === 'change') return t;
}
var vp = !1;
if (Zt) {
  var oo;
  if (Zt) {
    var so = 'oninput' in document;
    if (!so) {
      var Yc = document.createElement('div');
      Yc.setAttribute('oninput', 'return;'),
        (so = typeof Yc.oninput == 'function');
    }
    oo = so;
  } else oo = !1;
  vp = oo && (!document.documentMode || 9 < document.documentMode);
}
function Xc() {
  wl && (wl.detachEvent('onpropertychange', gp), (Ml = wl = null));
}
function gp(e) {
  if (e.propertyName === 'value' && Ra(Ml)) {
    var t = [];
    mp(t, Ml, e, ru(e)), Xf(q1, t);
  }
}
function tg(e, t, n) {
  e === 'focusin'
    ? (Xc(), (wl = t), (Ml = n), wl.attachEvent('onpropertychange', gp))
    : e === 'focusout' && Xc();
}
function ng(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ra(Ml);
}
function rg(e, t) {
  if (e === 'click') return Ra(t);
}
function lg(e, t) {
  if (e === 'input' || e === 'change') return Ra(t);
}
function ig(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tt = typeof Object.is == 'function' ? Object.is : ig;
function Fl(e, t) {
  if (Tt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Uo.call(t, l) || !Tt(e[l], t[l])) return !1;
  }
  return !0;
}
function Jc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Zc(e, t) {
  var n = Jc(e);
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
    n = Jc(n);
  }
}
function yp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yp(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xp() {
  for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wi(e.document);
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
function ag(e) {
  var t = xp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yp(n.ownerDocument.documentElement, n)
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
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Zc(n, i));
        var a = Zc(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var og = Zt && 'documentMode' in document && 11 >= document.documentMode,
  hr = null,
  as = null,
  Sl = null,
  os = !1;
function qc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  os ||
    hr == null ||
    hr !== Wi(r) ||
    ((r = hr),
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
    (Sl && Fl(Sl, r)) ||
      ((Sl = r),
      (r = Zi(as, 'onSelect')),
      0 < r.length &&
        ((t = new uu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = hr))));
}
function yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var mr = {
    animationend: yi('Animation', 'AnimationEnd'),
    animationiteration: yi('Animation', 'AnimationIteration'),
    animationstart: yi('Animation', 'AnimationStart'),
    transitionend: yi('Transition', 'TransitionEnd'),
  },
  uo = {},
  Ep = {};
Zt &&
  ((Ep = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete mr.animationend.animation,
    delete mr.animationiteration.animation,
    delete mr.animationstart.animation),
  'TransitionEvent' in window || delete mr.transitionend.transition);
function Da(e) {
  if (uo[e]) return uo[e];
  if (!mr[e]) return e;
  var t = mr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ep) return (uo[e] = t[n]);
  return e;
}
var Np = Da('animationend'),
  wp = Da('animationiteration'),
  Sp = Da('animationstart'),
  Cp = Da('transitionend'),
  kp = new Map(),
  ed =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function Ln(e, t) {
  kp.set(e, t), qn(t, [e]);
}
for (var co = 0; co < ed.length; co++) {
  var fo = ed[co],
    sg = fo.toLowerCase(),
    ug = fo[0].toUpperCase() + fo.slice(1);
  Ln(sg, 'on' + ug);
}
Ln(Np, 'onAnimationEnd');
Ln(wp, 'onAnimationIteration');
Ln(Sp, 'onAnimationStart');
Ln('dblclick', 'onDoubleClick');
Ln('focusin', 'onFocus');
Ln('focusout', 'onBlur');
Ln(Cp, 'onTransitionEnd');
br('onMouseEnter', ['mouseout', 'mouseover']);
br('onMouseLeave', ['mouseout', 'mouseover']);
br('onPointerEnter', ['pointerout', 'pointerover']);
br('onPointerLeave', ['pointerout', 'pointerover']);
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
function td(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), s1(r, t, void 0, e), (e.currentTarget = null);
}
function Rp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== i && l.isPropagationStopped())) break e;
          td(l, s, c), (i = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          td(l, s, c), (i = u);
        }
    }
  }
  if (Qi) throw ((e = ns), (Qi = !1), (ns = null), e);
}
function ie(e, t) {
  var n = t[fs];
  n === void 0 && (n = t[fs] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Dp(t, e, 2, !1), n.add(r));
}
function po(e, t, n) {
  var r = 0;
  t && (r |= 4), Dp(n, e, r, t);
}
var xi = '_reactListening' + Math.random().toString(36).slice(2);
function Al(e) {
  if (!e[xi]) {
    (e[xi] = !0),
      If.forEach(function (n) {
        n !== 'selectionchange' && (cg.has(n) || po(n, !1, e), po(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xi] || ((t[xi] = !0), po('selectionchange', !1, t));
  }
}
function Dp(e, t, n, r) {
  switch (cp(t)) {
    case 1:
      var l = C1;
      break;
    case 4:
      l = k1;
      break;
    default:
      l = ou;
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
function ho(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Un(s)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Xf(function () {
    var c = i,
      d = ru(n),
      p = [];
    e: {
      var f = kp.get(e);
      if (f !== void 0) {
        var m = uu,
          x = e;
        switch (e) {
          case 'keypress':
            if (Ii(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = j1;
            break;
          case 'focusin':
            (x = 'focus'), (m = ao);
            break;
          case 'focusout':
            (x = 'blur'), (m = ao);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = ao;
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
            m = Hc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = P1;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = H1;
            break;
          case Np:
          case wp:
          case Sp:
            m = L1;
            break;
          case Cp:
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
            m = b1;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Wc;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          v = y ? (f !== null ? f + 'Capture' : null) : f;
        y = [];
        for (var g = c, N; g !== null; ) {
          N = g;
          var w = N.stateNode;
          if (
            (N.tag === 5 &&
              w !== null &&
              ((N = w),
              v !== null && ((w = Ll(g, v)), w != null && y.push($l(g, w, N)))),
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
            n !== qo &&
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
            ((y = Hc),
            (w = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Wc),
              (w = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (g = 'pointer')),
            (S = m == null ? f : vr(m)),
            (N = x == null ? f : vr(x)),
            (f = new y(w, g + 'leave', m, n, d)),
            (f.target = S),
            (f.relatedTarget = N),
            (w = null),
            Un(d) === c &&
              ((y = new y(v, g + 'enter', x, n, d)),
              (y.target = N),
              (y.relatedTarget = S),
              (w = y)),
            (S = w),
            m && x)
          )
            t: {
              for (y = m, v = x, g = 0, N = y; N; N = ar(N)) g++;
              for (N = 0, w = v; w; w = ar(w)) N++;
              for (; 0 < g - N; ) (y = ar(y)), g--;
              for (; 0 < N - g; ) (v = ar(v)), N--;
              for (; g--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                (y = ar(y)), (v = ar(v));
              }
              y = null;
            }
          else y = null;
          m !== null && nd(p, f, m, y, !1),
            x !== null && S !== null && nd(p, S, x, y, !0);
        }
      }
      e: {
        if (
          ((f = c ? vr(c) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var R = eg;
        else if (Gc(f))
          if (vp) R = lg;
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
          mp(p, R, n, d);
          break e;
        }
        T && T(e, f, c),
          e === 'focusout' &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === 'number' &&
            Go(f, 'number', f.value);
      }
      switch (((T = c ? vr(c) : window), e)) {
        case 'focusin':
          (Gc(T) || T.contentEditable === 'true') &&
            ((hr = T), (as = c), (Sl = null));
          break;
        case 'focusout':
          Sl = as = hr = null;
          break;
        case 'mousedown':
          os = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (os = !1), qc(p, n, d);
          break;
        case 'selectionchange':
          if (og) break;
        case 'keydown':
        case 'keyup':
          qc(p, n, d);
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
        pr
          ? pp(e, n) && (_ = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
      _ &&
        (fp &&
          n.locale !== 'ko' &&
          (pr || _ !== 'onCompositionStart'
            ? _ === 'onCompositionEnd' && pr && (O = dp())
            : ((yn = d),
              (su = 'value' in yn ? yn.value : yn.textContent),
              (pr = !0))),
        (T = Zi(c, _)),
        0 < T.length &&
          ((_ = new Vc(_, e, null, n, d)),
          p.push({ event: _, listeners: T }),
          O ? (_.data = O) : ((O = hp(n)), O !== null && (_.data = O)))),
        (O = Y1 ? X1(e, n) : J1(e, n)) &&
          ((c = Zi(c, 'onBeforeInput')),
          0 < c.length &&
            ((d = new Vc('onBeforeInput', 'beforeinput', null, n, d)),
            p.push({ event: d, listeners: c }),
            (d.data = O)));
    }
    Rp(p, t);
  });
}
function $l(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Ll(e, n)),
      i != null && r.unshift($l(e, i, l)),
      (i = Ll(e, t)),
      i != null && r.push($l(e, i, l))),
      (e = e.return);
  }
  return r;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nd(e, t, n, r, l) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((u = Ll(n, i)), u != null && a.unshift($l(n, u, s)))
        : l || ((u = Ll(n, i)), u != null && a.push($l(n, u, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var dg = /\r\n?/g,
  fg = /\u0000|\uFFFD/g;
function rd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      dg,
      `
`,
    )
    .replace(fg, '');
}
function Ei(e, t, n) {
  if (((t = rd(t)), rd(e) !== t && n)) throw Error(D(425));
}
function qi() {}
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
  ld = typeof Promise == 'function' ? Promise : void 0,
  hg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ld < 'u'
      ? function (e) {
          return ld.resolve(null).then(e).catch(mg);
        }
      : ds;
function mg(e) {
  setTimeout(function () {
    throw e;
  });
}
function mo(e, t) {
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
function id(e) {
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
var Hr = Math.random().toString(36).slice(2),
  Mt = '__reactFiber$' + Hr,
  zl = '__reactProps$' + Hr,
  qt = '__reactContainer$' + Hr,
  fs = '__reactEvents$' + Hr,
  vg = '__reactListeners$' + Hr,
  gg = '__reactHandles$' + Hr;
function Un(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qt] || n[Mt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = id(e); e !== null; ) {
          if ((n = e[Mt])) return n;
          e = id(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ql(e) {
  return (
    (e = e[Mt] || e[qt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Pa(e) {
  return e[zl] || null;
}
var ps = [],
  gr = -1;
function _n(e) {
  return { current: e };
}
function ae(e) {
  0 > gr || ((e.current = ps[gr]), (ps[gr] = null), gr--);
}
function re(e, t) {
  gr++, (ps[gr] = e.current), (e.current = t);
}
var Tn = {},
  Ae = _n(Tn),
  Ye = _n(!1),
  Gn = Tn;
function Ir(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function ea() {
  ae(Ye), ae(Ae);
}
function ad(e, t, n) {
  if (Ae.current !== Tn) throw Error(D(168));
  re(Ae, t), re(Ye, n);
}
function Pp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(D(108, t1(e) || 'Unknown', l));
  return pe({}, n, r);
}
function ta(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Gn = Ae.current),
    re(Ae, e),
    re(Ye, Ye.current),
    !0
  );
}
function od(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = Pp(e, t, Gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ye),
      ae(Ae),
      re(Ae, e))
    : ae(Ye),
    re(Ye, n);
}
var Ht = null,
  Oa = !1,
  vo = !1;
function Op(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function yg(e) {
  (Oa = !0), Op(e);
}
function bn() {
  if (!vo && Ht !== null) {
    vo = !0;
    var e = 0,
      t = J;
    try {
      var n = Ht;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ht = null), (Oa = !1);
    } catch (l) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), ep(lu, bn), l);
    } finally {
      (J = t), (vo = !1);
    }
  }
  return null;
}
var yr = [],
  xr = 0,
  na = null,
  ra = 0,
  dt = [],
  ft = 0,
  Yn = null,
  Wt = 1,
  Kt = '';
function $n(e, t) {
  (yr[xr++] = ra), (yr[xr++] = na), (na = e), (ra = t);
}
function Tp(e, t, n) {
  (dt[ft++] = Wt), (dt[ft++] = Kt), (dt[ft++] = Yn), (Yn = e);
  var r = Wt;
  e = Kt;
  var l = 32 - Pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Pt(t) + l;
  if (30 < i) {
    var a = l - (l % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (Wt = (1 << (32 - Pt(t) + l)) | (n << l) | r),
      (Kt = i + e);
  } else (Wt = (1 << i) | (n << l) | r), (Kt = e);
}
function pu(e) {
  e.return !== null && ($n(e, 1), Tp(e, 1, 0));
}
function hu(e) {
  for (; e === na; )
    (na = yr[--xr]), (yr[xr] = null), (ra = yr[--xr]), (yr[xr] = null);
  for (; e === Yn; )
    (Yn = dt[--ft]),
      (dt[ft] = null),
      (Kt = dt[--ft]),
      (dt[ft] = null),
      (Wt = dt[--ft]),
      (dt[ft] = null);
}
var rt = null,
  nt = null,
  se = !1,
  Rt = null;
function Lp(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = Sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
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
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
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
    var t = nt;
    if (t) {
      var n = t;
      if (!sd(e, t)) {
        if (hs(e)) throw Error(D(418));
        t = Sn(n.nextSibling);
        var r = rt;
        t && sd(e, t)
          ? Lp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (rt = e));
      }
    } else {
      if (hs(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (rt = e);
    }
  }
}
function ud(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function Ni(e) {
  if (e !== rt) return !1;
  if (!se) return ud(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !cs(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (hs(e)) throw (_p(), Error(D(418)));
    for (; t; ) Lp(e, t), (t = Sn(t.nextSibling));
  }
  if ((ud(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              nt = Sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? Sn(e.stateNode.nextSibling) : null;
  return !0;
}
function _p() {
  for (var e = nt; e; ) e = Sn(e.nextSibling);
}
function Mr() {
  (nt = rt = null), (se = !1);
}
function mu(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
var xg = an.ReactCurrentBatchConfig;
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var la = _n(null),
  ia = null,
  Er = null,
  vu = null;
function gu() {
  vu = Er = ia = null;
}
function yu(e) {
  var t = la.current;
  ae(la), (e._currentValue = t);
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
function Tr(e, t) {
  (ia = e),
    (vu = Er = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ge = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Er === null)) {
      if (ia === null) throw Error(D(308));
      (Er = e), (ia.dependencies = { lanes: 0, firstContext: e });
    } else Er = Er.next = e;
  return t;
}
var Bn = null;
function xu(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function bp(e, t, n, r) {
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
function Ip(e, t) {
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
function Mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
function cd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function aa(e, t, n, r) {
  var l = e.updateQueue;
  hn = !1;
  var i = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), a === null ? (i = c) : (a.next = c), (a = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== a &&
        (s === null ? (d.firstBaseUpdate = c) : (s.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = l.baseState;
    (a = 0), (d = c = u = null), (s = i);
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
          (a |= f);
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
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Jn |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function dd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(D(191, l));
        l.call(r);
      }
    }
}
var Mp = new bf.Component().refs;
function gs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ta = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = Rn(e),
      i = Qt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, l)),
      t !== null && (Ot(t, e, l, r), Mi(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      l = Rn(e),
      i = Qt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cn(e, i, l)),
      t !== null && (Ot(t, e, l, r), Mi(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = Rn(e),
      l = Qt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Cn(e, l, r)),
      t !== null && (Ot(t, e, r, n), Mi(t, e, r));
  },
};
function fd(e, t, n, r, l, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fl(n, r) || !Fl(l, i)
      : !0
  );
}
function Fp(e, t, n) {
  var r = !1,
    l = Tn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = vt(i))
      : ((l = Xe(t) ? Gn : Ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ir(e, l) : Tn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ta),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function pd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ta.enqueueReplaceState(t, t.state, null);
}
function ys(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Mp), Eu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (l.context = vt(i))
    : ((i = Xe(t) ? Gn : Ae.current), (l.context = Ir(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (gs(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ta.enqueueReplaceState(l, l.state, null),
      aa(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ll(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var l = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = l.refs;
            s === Mp && (s = l.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function hd(e) {
  var t = e._init;
  return t(e._payload);
}
function Ap(e) {
  function t(v, g) {
    if (e) {
      var N = v.deletions;
      N === null ? ((v.deletions = [g]), (v.flags |= 16)) : N.push(g);
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
    return (v = Dn(v, g)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, g, N) {
    return (
      (v.index = N),
      e
        ? ((N = v.alternate),
          N !== null
            ? ((N = N.index), N < g ? ((v.flags |= 2), g) : N)
            : ((v.flags |= 2), g))
        : ((v.flags |= 1048576), g)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, g, N, w) {
    return g === null || g.tag !== 6
      ? ((g = So(N, v.mode, w)), (g.return = v), g)
      : ((g = l(g, N)), (g.return = v), g);
  }
  function u(v, g, N, w) {
    var R = N.type;
    return R === fr
      ? d(v, g, N.props.children, w, N.key)
      : g !== null &&
        (g.elementType === R ||
          (typeof R == 'object' &&
            R !== null &&
            R.$$typeof === pn &&
            hd(R) === g.type))
      ? ((w = l(g, N.props)), (w.ref = ll(v, g, N)), (w.return = v), w)
      : ((w = Ui(N.type, N.key, N.props, null, v.mode, w)),
        (w.ref = ll(v, g, N)),
        (w.return = v),
        w);
  }
  function c(v, g, N, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== N.containerInfo ||
      g.stateNode.implementation !== N.implementation
      ? ((g = Co(N, v.mode, w)), (g.return = v), g)
      : ((g = l(g, N.children || [])), (g.return = v), g);
  }
  function d(v, g, N, w, R) {
    return g === null || g.tag !== 7
      ? ((g = Kn(N, v.mode, w, R)), (g.return = v), g)
      : ((g = l(g, N)), (g.return = v), g);
  }
  function p(v, g, N) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = So('' + g, v.mode, N)), (g.return = v), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case di:
          return (
            (N = Ui(g.type, g.key, g.props, null, v.mode, N)),
            (N.ref = ll(v, null, g)),
            (N.return = v),
            N
          );
        case dr:
          return (g = Co(g, v.mode, N)), (g.return = v), g;
        case pn:
          var w = g._init;
          return p(v, w(g._payload), N);
      }
      if (pl(g) || qr(g))
        return (g = Kn(g, v.mode, N, null)), (g.return = v), g;
      wi(v, g);
    }
    return null;
  }
  function f(v, g, N, w) {
    var R = g !== null ? g.key : null;
    if ((typeof N == 'string' && N !== '') || typeof N == 'number')
      return R !== null ? null : s(v, g, '' + N, w);
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case di:
          return N.key === R ? u(v, g, N, w) : null;
        case dr:
          return N.key === R ? c(v, g, N, w) : null;
        case pn:
          return (R = N._init), f(v, g, R(N._payload), w);
      }
      if (pl(N) || qr(N)) return R !== null ? null : d(v, g, N, w, null);
      wi(v, N);
    }
    return null;
  }
  function m(v, g, N, w, R) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (v = v.get(N) || null), s(g, v, '' + w, R);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case di:
          return (v = v.get(w.key === null ? N : w.key) || null), u(g, v, w, R);
        case dr:
          return (v = v.get(w.key === null ? N : w.key) || null), c(g, v, w, R);
        case pn:
          var T = w._init;
          return m(v, g, N, T(w._payload), R);
      }
      if (pl(w) || qr(w)) return (v = v.get(N) || null), d(g, v, w, R, null);
      wi(g, w);
    }
    return null;
  }
  function x(v, g, N, w) {
    for (
      var R = null, T = null, O = g, _ = (g = 0), I = null;
      O !== null && _ < N.length;
      _++
    ) {
      O.index > _ ? ((I = O), (O = null)) : (I = O.sibling);
      var $ = f(v, O, N[_], w);
      if ($ === null) {
        O === null && (O = I);
        break;
      }
      e && O && $.alternate === null && t(v, O),
        (g = i($, g, _)),
        T === null ? (R = $) : (T.sibling = $),
        (T = $),
        (O = I);
    }
    if (_ === N.length) return n(v, O), se && $n(v, _), R;
    if (O === null) {
      for (; _ < N.length; _++)
        (O = p(v, N[_], w)),
          O !== null &&
            ((g = i(O, g, _)), T === null ? (R = O) : (T.sibling = O), (T = O));
      return se && $n(v, _), R;
    }
    for (O = r(v, O); _ < N.length; _++)
      (I = m(O, v, _, N[_], w)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? _ : I.key),
          (g = i(I, g, _)),
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
  function y(v, g, N, w) {
    var R = qr(N);
    if (typeof R != 'function') throw Error(D(150));
    if (((N = R.call(N)), N == null)) throw Error(D(151));
    for (
      var T = (R = null), O = g, _ = (g = 0), I = null, $ = N.next();
      O !== null && !$.done;
      _++, $ = N.next()
    ) {
      O.index > _ ? ((I = O), (O = null)) : (I = O.sibling);
      var xe = f(v, O, $.value, w);
      if (xe === null) {
        O === null && (O = I);
        break;
      }
      e && O && xe.alternate === null && t(v, O),
        (g = i(xe, g, _)),
        T === null ? (R = xe) : (T.sibling = xe),
        (T = xe),
        (O = I);
    }
    if ($.done) return n(v, O), se && $n(v, _), R;
    if (O === null) {
      for (; !$.done; _++, $ = N.next())
        ($ = p(v, $.value, w)),
          $ !== null &&
            ((g = i($, g, _)), T === null ? (R = $) : (T.sibling = $), (T = $));
      return se && $n(v, _), R;
    }
    for (O = r(v, O); !$.done; _++, $ = N.next())
      ($ = m(O, v, _, $.value, w)),
        $ !== null &&
          (e && $.alternate !== null && O.delete($.key === null ? _ : $.key),
          (g = i($, g, _)),
          T === null ? (R = $) : (T.sibling = $),
          (T = $));
    return (
      e &&
        O.forEach(function (Ze) {
          return t(v, Ze);
        }),
      se && $n(v, _),
      R
    );
  }
  function S(v, g, N, w) {
    if (
      (typeof N == 'object' &&
        N !== null &&
        N.type === fr &&
        N.key === null &&
        (N = N.props.children),
      typeof N == 'object' && N !== null)
    ) {
      switch (N.$$typeof) {
        case di:
          e: {
            for (var R = N.key, T = g; T !== null; ) {
              if (T.key === R) {
                if (((R = N.type), R === fr)) {
                  if (T.tag === 7) {
                    n(v, T.sibling),
                      (g = l(T, N.props.children)),
                      (g.return = v),
                      (v = g);
                    break e;
                  }
                } else if (
                  T.elementType === R ||
                  (typeof R == 'object' &&
                    R !== null &&
                    R.$$typeof === pn &&
                    hd(R) === T.type)
                ) {
                  n(v, T.sibling),
                    (g = l(T, N.props)),
                    (g.ref = ll(v, T, N)),
                    (g.return = v),
                    (v = g);
                  break e;
                }
                n(v, T);
                break;
              } else t(v, T);
              T = T.sibling;
            }
            N.type === fr
              ? ((g = Kn(N.props.children, v.mode, w, N.key)),
                (g.return = v),
                (v = g))
              : ((w = Ui(N.type, N.key, N.props, null, v.mode, w)),
                (w.ref = ll(v, g, N)),
                (w.return = v),
                (v = w));
          }
          return a(v);
        case dr:
          e: {
            for (T = N.key; g !== null; ) {
              if (g.key === T)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === N.containerInfo &&
                  g.stateNode.implementation === N.implementation
                ) {
                  n(v, g.sibling),
                    (g = l(g, N.children || [])),
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
            (g = Co(N, v.mode, w)), (g.return = v), (v = g);
          }
          return a(v);
        case pn:
          return (T = N._init), S(v, g, T(N._payload), w);
      }
      if (pl(N)) return x(v, g, N, w);
      if (qr(N)) return y(v, g, N, w);
      wi(v, N);
    }
    return (typeof N == 'string' && N !== '') || typeof N == 'number'
      ? ((N = '' + N),
        g !== null && g.tag === 6
          ? (n(v, g.sibling), (g = l(g, N)), (g.return = v), (v = g))
          : (n(v, g), (g = So(N, v.mode, w)), (g.return = v), (v = g)),
        a(v))
      : n(v, g);
  }
  return S;
}
var Fr = Ap(!0),
  $p = Ap(!1),
  ei = {},
  $t = _n(ei),
  jl = _n(ei),
  Ul = _n(ei);
function Hn(e) {
  if (e === ei) throw Error(D(174));
  return e;
}
function Nu(e, t) {
  switch ((re(Ul, t), re(jl, e), re($t, ei), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xo(t, e));
  }
  ae($t), re($t, t);
}
function Ar() {
  ae($t), ae(jl), ae(Ul);
}
function zp(e) {
  Hn(Ul.current);
  var t = Hn($t.current),
    n = Xo(t, e.type);
  t !== n && (re(jl, e), re($t, n));
}
function wu(e) {
  jl.current === e && (ae($t), ae(jl));
}
var de = _n(0);
function oa(e) {
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
var go = [];
function Su() {
  for (var e = 0; e < go.length; e++)
    go[e]._workInProgressVersionPrimary = null;
  go.length = 0;
}
var Fi = an.ReactCurrentDispatcher,
  yo = an.ReactCurrentBatchConfig,
  Xn = 0,
  fe = null,
  Ee = null,
  ke = null,
  sa = !1,
  Cl = !1,
  Bl = 0,
  Eg = 0;
function _e() {
  throw Error(D(321));
}
function Cu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, l, i) {
  if (
    ((Xn = i),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? Cg : kg),
    (e = n(r, l)),
    Cl)
  ) {
    i = 0;
    do {
      if (((Cl = !1), (Bl = 0), 25 <= i)) throw Error(D(301));
      (i += 1),
        (ke = Ee = null),
        (t.updateQueue = null),
        (Fi.current = Rg),
        (e = n(r, l));
    } while (Cl);
  }
  if (
    ((Fi.current = ua),
    (t = Ee !== null && Ee.next !== null),
    (Xn = 0),
    (ke = Ee = fe = null),
    (sa = !1),
    t)
  )
    throw Error(D(300));
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
  return ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function gt() {
  if (Ee === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = ke === null ? fe.memoizedState : ke.next;
  if (t !== null) (ke = t), (Ee = e);
  else {
    if (e === null) throw Error(D(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      ke === null ? (fe.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Hl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function xo(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var a = l.next;
      (l.next = i.next), (i.next = a);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var s = (a = null),
      u = null,
      c = i;
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
        u === null ? ((s = u = p), (a = r)) : (u = u.next = p),
          (fe.lanes |= d),
          (Jn |= d);
      }
      c = c.next;
    } while (c !== null && c !== i);
    u === null ? (a = r) : (u.next = s),
      Tt(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (fe.lanes |= i), (Jn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Eo(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== l);
    Tt(i, t.memoizedState) || (Ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function jp() {}
function Up(e, t) {
  var n = fe,
    r = gt(),
    l = t(),
    i = !Tt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ge = !0)),
    (r = r.queue),
    Du(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vl(9, Hp.bind(null, n, r, l, t), void 0, null),
      Re === null)
    )
      throw Error(D(349));
    (Xn & 30) !== 0 || Bp(n, t, l);
  }
  return l;
}
function Bp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wp(t) && Kp(e);
}
function Vp(e, t, n) {
  return n(function () {
    Wp(t) && Kp(e);
  });
}
function Wp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function Kp(e) {
  var t = en(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function md(e) {
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
function Qp() {
  return gt().memoizedState;
}
function Ai(e, t, n, r) {
  var l = It();
  (fe.flags |= e),
    (l.memoizedState = Vl(1 | t, n, void 0, r === void 0 ? null : r));
}
function La(e, t, n, r) {
  var l = gt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ee !== null) {
    var a = Ee.memoizedState;
    if (((i = a.destroy), r !== null && Cu(r, a.deps))) {
      l.memoizedState = Vl(t, n, i, r);
      return;
    }
  }
  (fe.flags |= e), (l.memoizedState = Vl(1 | t, n, i, r));
}
function vd(e, t) {
  return Ai(8390656, 8, e, t);
}
function Du(e, t) {
  return La(2048, 8, e, t);
}
function Gp(e, t) {
  return La(4, 2, e, t);
}
function Yp(e, t) {
  return La(4, 4, e, t);
}
function Xp(e, t) {
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
function Jp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), La(4, 4, Xp.bind(null, t, e), n)
  );
}
function Pu() {}
function Zp(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qp(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Cu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function eh(e, t, n) {
  return (Xn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n))
    : (Tt(n, t) || ((n = rp()), (fe.lanes |= n), (Jn |= n), (e.baseState = !0)),
      t);
}
function Ng(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = yo.transition;
  yo.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (yo.transition = r);
  }
}
function th() {
  return gt().memoizedState;
}
function wg(e, t, n) {
  var r = Rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nh(e))
  )
    rh(t, n);
  else if (((n = bp(e, t, n, r)), n !== null)) {
    var l = Ue();
    Ot(n, e, r, l), lh(n, t, r);
  }
}
function Sg(e, t, n) {
  var r = Rn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nh(e)) rh(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), Tt(s, a))) {
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
    (n = bp(e, t, l, r)),
      n !== null && ((l = Ue()), Ot(n, e, r, l), lh(n, t, r));
  }
}
function nh(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function rh(e, t) {
  Cl = sa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function lh(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
var ua = {
    readContext: vt,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  Cg = {
    readContext: vt,
    useCallback: function (e, t) {
      return (It().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: vd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ai(4194308, 4, Xp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ai(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ai(4, 2, e, t);
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
        (e = e.dispatch = wg.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = It();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: md,
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      return (It().memoizedState = e);
    },
    useTransition: function () {
      var e = md(!1),
        t = e[0];
      return (e = Ng.bind(null, e[1])), (It().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        l = It();
      if (se) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(D(349));
        (Xn & 30) !== 0 || Bp(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        vd(Vp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Vl(9, Hp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = It(),
        t = Re.identifierPrefix;
      if (se) {
        var n = Kt,
          r = Wt;
        (n = (r & ~(1 << (32 - Pt(r) - 1))).toString(32) + n),
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
    readContext: vt,
    useCallback: Zp,
    useContext: vt,
    useEffect: Du,
    useImperativeHandle: Jp,
    useInsertionEffect: Gp,
    useLayoutEffect: Yp,
    useMemo: qp,
    useReducer: xo,
    useRef: Qp,
    useState: function () {
      return xo(Hl);
    },
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      var t = gt();
      return eh(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(Hl)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: Up,
    useId: th,
    unstable_isNewReconciler: !1,
  },
  Rg = {
    readContext: vt,
    useCallback: Zp,
    useContext: vt,
    useEffect: Du,
    useImperativeHandle: Jp,
    useInsertionEffect: Gp,
    useLayoutEffect: Yp,
    useMemo: qp,
    useReducer: Eo,
    useRef: Qp,
    useState: function () {
      return Eo(Hl);
    },
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      var t = gt();
      return Ee === null ? (t.memoizedState = e) : eh(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Eo(Hl)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: jp,
    useSyncExternalStore: Up,
    useId: th,
    unstable_isNewReconciler: !1,
  };
function $r(e, t) {
  try {
    var n = '',
      r = t;
    do (n += e1(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function No(e, t, n) {
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
var Dg = typeof WeakMap == 'function' ? WeakMap : Map;
function ih(e, t, n) {
  (n = Qt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      da || ((da = !0), (Os = r)), xs(e, t);
    }),
    n
  );
}
function ah(e, t, n) {
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
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        xs(e, t),
          typeof r != 'function' &&
            (kn === null ? (kn = new Set([this])) : kn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function gd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dg();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Ug.bind(null, e, t, n)), t.then(e, e));
}
function yd(e) {
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
function xd(e, t, n, r, l) {
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
var Pg = an.ReactCurrentOwner,
  Ge = !1;
function ze(e, t, n, r) {
  t.child = e === null ? $p(t, null, n, r) : Fr(t, e.child, n, r);
}
function Ed(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Tr(t, l),
    (r = ku(e, t, n, r, i, l)),
    (n = Ru()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tn(e, t, l))
      : (se && n && pu(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function Nd(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Fu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), oh(e, t, i, r, l))
      : ((e = Ui(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fl), n(a, r) && e.ref === t.ref)
    )
      return tn(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Dn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function oh(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fl(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (Ge = !0);
      else return (t.lanes = e.lanes), tn(e, t, l);
  }
  return Es(e, t, n, r, l);
}
function sh(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(wr, tt),
        (tt |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(wr, tt),
          (tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        re(wr, tt),
        (tt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(wr, tt),
      (tt |= r);
  return ze(e, t, l, n), t.child;
}
function uh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Es(e, t, n, r, l) {
  var i = Xe(n) ? Gn : Ae.current;
  return (
    (i = Ir(t, i)),
    Tr(t, l),
    (n = ku(e, t, n, r, i, l)),
    (r = Ru()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tn(e, t, l))
      : (se && r && pu(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function wd(e, t, n, r, l) {
  if (Xe(n)) {
    var i = !0;
    ta(t);
  } else i = !1;
  if ((Tr(t, l), t.stateNode === null))
    $i(e, t), Fp(t, n, r), ys(t, n, r, l), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var u = a.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = vt(c))
      : ((c = Xe(n) ? Gn : Ae.current), (c = Ir(t, c)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== c) && pd(t, a, r, c)),
      (hn = !1);
    var f = t.memoizedState;
    (a.state = f),
      aa(t, r, a, l),
      (u = t.memoizedState),
      s !== r || f !== u || Ye.current || hn
        ? (typeof d == 'function' && (gs(t, n, d, r), (u = t.memoizedState)),
          (s = hn || fd(t, n, s, r, f, u, c))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = c),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Ip(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ct(t.type, s)),
      (a.props = c),
      (p = t.pendingProps),
      (f = a.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = vt(u))
        : ((u = Xe(n) ? Gn : Ae.current), (u = Ir(t, u)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== p || f !== u) && pd(t, a, r, u)),
      (hn = !1),
      (f = t.memoizedState),
      (a.state = f),
      aa(t, r, a, l);
    var x = t.memoizedState;
    s !== p || f !== x || Ye.current || hn
      ? (typeof m == 'function' && (gs(t, n, m, r), (x = t.memoizedState)),
        (c = hn || fd(t, n, c, r, f, x, u) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, x, u),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, x, u)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (a.props = r),
        (a.state = x),
        (a.context = u),
        (r = c))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ns(e, t, n, r, i, l);
}
function Ns(e, t, n, r, l, i) {
  uh(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && od(t, n, !1), tn(e, t, i);
  (r = t.stateNode), (Pg.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Fr(t, e.child, null, i)), (t.child = Fr(t, null, s, i)))
      : ze(e, t, s, i),
    (t.memoizedState = r.state),
    l && od(t, n, !0),
    t.child
  );
}
function ch(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ad(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ad(e, t.context, !1),
    Nu(e, t.containerInfo);
}
function Sd(e, t, n, r, l) {
  return Mr(), mu(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var ws = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ss(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dh(e, t, n) {
  var r = t.pendingProps,
    l = de.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
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
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Ia(a, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ss(n)),
              (t.memoizedState = ws),
              e)
            : Ou(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Og(e, t, a, r, s, l, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (l = e.child), (s = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      (a & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Dn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (i = Dn(s, i)) : ((i = Kn(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ss(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ws),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Dn(i, { mode: 'visible', children: r.children })),
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
    (t = Ia({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && mu(r),
    Fr(t, e.child, null, n),
    (e = Ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Og(e, t, n, r, l, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = No(Error(D(422)))), Si(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ia({ mode: 'visible', children: r.children }, l, 0, null)),
        (i = Kn(i, l, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && Fr(t, e.child, null, a),
        (t.child.memoizedState = Ss(a)),
        (t.memoizedState = ws),
        i);
  if ((t.mode & 1) === 0) return Si(e, t, a, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(D(419))), (r = No(i, r, void 0)), Si(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Ge || s)) {
    if (((r = Re), r !== null)) {
      switch (a & -a) {
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
      (l = (l & (r.suspendedLanes | a)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), en(e, l), Ot(r, e, l, -1));
    }
    return Mu(), (r = No(Error(D(421)))), Si(e, t, a, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = Sn(l.nextSibling)),
      (rt = t),
      (se = !0),
      (Rt = null),
      e !== null &&
        ((dt[ft++] = Wt),
        (dt[ft++] = Kt),
        (dt[ft++] = Yn),
        (Wt = e.id),
        (Kt = e.overflow),
        (Yn = t)),
      (t = Ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vs(e.return, t, n);
}
function wo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function fh(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ze(e, t, r.children, n), (r = de.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cd(e, n, t);
        else if (e.tag === 19) Cd(e, n, t);
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
            e !== null && oa(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          wo(t, !1, l, n, i);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && oa(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        wo(t, !0, n, null, i);
        break;
      case 'together':
        wo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $i(e, t) {
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
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tg(e, t, n) {
  switch (t.tag) {
    case 3:
      ch(t), Mr();
      break;
    case 5:
      zp(t);
      break;
    case 1:
      Xe(t.type) && ta(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(la, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(de, de.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? dh(e, t, n)
          : (re(de, de.current & 1),
            (e = tn(e, t, n)),
            e !== null ? e.sibling : null);
      re(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return fh(e, t, n);
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
      return (t.lanes = 0), sh(e, t, n);
  }
  return tn(e, t, n);
}
var ph, Cs, hh, mh;
ph = function (e, t) {
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
hh = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Hn($t.current);
    var i = null;
    switch (n) {
      case 'input':
        (l = Ko(e, l)), (r = Ko(e, r)), (i = []);
        break;
      case 'select':
        (l = pe({}, l, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (l = Yo(e, l)), (r = Yo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = qi);
    }
    Jo(n, r);
    var a;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var s = l[c];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Ol.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in u)
              u.hasOwnProperty(a) &&
                s[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (i || (i = []), i.push(c, n)), (n = u);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(c, u))
            : c === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (i = i || []).push(c, '' + u)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Ol.hasOwnProperty(c)
                ? (u != null && c === 'onScroll' && ie('scroll', e),
                  i || s === u || (i = []))
                : (i = i || []).push(c, u));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
mh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function il(e, t) {
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
function be(e) {
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
      return be(t), null;
    case 1:
      return Xe(t.type) && ea(), be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        ae(Ye),
        ae(Ae),
        Su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ni(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Rt !== null && (_s(Rt), (Rt = null)))),
        Cs(e, t),
        be(t),
        null
      );
    case 5:
      wu(t);
      var l = Hn(Ul.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hh(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return be(t), null;
        }
        if (((e = Hn($t.current)), Ni(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Mt] = t), (r[zl] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ie('cancel', r), ie('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ie('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < ml.length; l++) ie(ml[l], r);
              break;
            case 'source':
              ie('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ie('error', r), ie('load', r);
              break;
            case 'details':
              ie('toggle', r);
              break;
            case 'input':
              bc(r, i), ie('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ie('invalid', r);
              break;
            case 'textarea':
              Mc(r, i), ie('invalid', r);
          }
          Jo(n, i), (l = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, s, e),
                    (l = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ei(r.textContent, s, e),
                    (l = ['children', '' + s]))
                : Ol.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  ie('scroll', r);
            }
          switch (n) {
            case 'input':
              fi(r), Ic(r, i, !0);
              break;
            case 'textarea':
              fi(r), Fc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = qi);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Bf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === 'select' &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Mt] = t),
            (e[zl] = r),
            ph(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Zo(n, r)), n)) {
              case 'dialog':
                ie('cancel', e), ie('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < ml.length; l++) ie(ml[l], e);
                l = r;
                break;
              case 'source':
                ie('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ie('error', e), ie('load', e), (l = r);
                break;
              case 'details':
                ie('toggle', e), (l = r);
                break;
              case 'input':
                bc(e, r), (l = Ko(e, r)), ie('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = pe({}, r, { value: void 0 })),
                  ie('invalid', e);
                break;
              case 'textarea':
                Mc(e, r), (l = Yo(e, r)), ie('invalid', e);
                break;
              default:
                l = r;
            }
            Jo(n, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? Wf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Hf(e, u))
                  : i === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Tl(e, u)
                    : typeof u == 'number' && Tl(e, '' + u)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Ol.hasOwnProperty(i)
                      ? u != null && i === 'onScroll' && ie('scroll', e)
                      : u != null && qs(e, i, u, a));
              }
            switch (n) {
              case 'input':
                fi(e), Ic(e, r, !1);
                break;
              case 'textarea':
                fi(e), Fc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + On(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Rr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Rr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = qi);
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
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) mh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(D(166));
        if (((n = Hn(Ul.current)), Hn($t.current), Ni(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mt] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mt] = t),
            (t.stateNode = r);
      }
      return be(t), null;
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && nt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          _p(), Mr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ni(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[Mt] = t;
          } else
            Mr(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          be(t), (i = !1);
        } else Rt !== null && (_s(Rt), (Rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
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
                : Mu())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return (
        Ar(), Cs(e, t), e === null && Al(t.stateNode.containerInfo), be(t), null
      );
    case 10:
      return yu(t.type._context), be(t), null;
    case 17:
      return Xe(t.type) && ea(), be(t), null;
    case 19:
      if ((ae(de), (i = t.memoizedState), i === null)) return be(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) il(i, !1);
        else {
          if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((a = oa(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    il(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
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
          i.tail !== null &&
            ge() > zr &&
            ((t.flags |= 128), (r = !0), il(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oa(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              il(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !se)
            )
              return be(t), null;
          } else
            2 * ge() - i.renderingStartTime > zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), il(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = de.current),
          re(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        Iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (tt & 1073741824) !== 0 &&
            (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function _g(e, t) {
  switch ((hu(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && ea(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        ae(Ye),
        ae(Ae),
        Su(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return wu(t), null;
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(de), null;
    case 4:
      return Ar(), null;
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
var Ci = !1,
  Me = !1,
  bg = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null;
function Nr(e, t) {
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
var kd = !1;
function Ig(e, t) {
  if (((ss = Xi), (e = xp()), fu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            u = -1,
            c = 0,
            d = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = a + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = a + r),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (f = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++c === l && (s = a),
                f === i && ++d === r && (u = a),
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
  for (us = { focusedElem: e, selectionRange: n }, Xi = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
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
                      t.elementType === t.type ? y : Ct(t.type, y),
                      S,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var N = t.stateNode.containerInfo;
                N.nodeType === 1
                  ? (N.textContent = '')
                  : N.nodeType === 9 &&
                    N.documentElement &&
                    N.removeChild(N.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (w) {
          me(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (x = kd), (kd = !1), x;
}
function kl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ks(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _a(e, t) {
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
function vh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mt], delete t[zl], delete t[fs], delete t[vg], delete t[gg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gh(e.return)) return null;
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
function Ds(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = qi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ds(e, t, n), e = e.sibling; e !== null; ) Ds(e, t, n), (e = e.sibling);
}
function Ps(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
var Pe = null,
  kt = !1;
function dn(e, t, n) {
  for (n = n.child; n !== null; ) yh(e, t, n), (n = n.sibling);
}
function yh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(Ca, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Nr(n, t);
    case 6:
      var r = Pe,
        l = kt;
      (Pe = null),
        dn(e, t, n),
        (Pe = r),
        (kt = l),
        Pe !== null &&
          (kt
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (kt
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? mo(e.parentNode, n)
              : e.nodeType === 1 && mo(e, n),
            Il(e))
          : mo(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = kt),
        (Pe = n.stateNode.containerInfo),
        (kt = !0),
        dn(e, t, n),
        (Pe = r),
        (kt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ks(n, t, a),
            (l = l.next);
        } while (l !== r);
      }
      dn(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (Nr(n, t),
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
        ? ((Me = (r = Me) || n.memoizedState !== null), dn(e, t, n), (Me = r))
        : dn(e, t, n);
      break;
    default:
      dn(e, t, n);
  }
}
function Dd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()),
      t.forEach(function (r) {
        var l = Hg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Pe = s.stateNode), (kt = !1);
              break e;
            case 3:
              (Pe = s.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              (Pe = s.stateNode.containerInfo), (kt = !0);
              break e;
          }
          s = s.return;
        }
        if (Pe === null) throw Error(D(160));
        yh(i, a, l), (Pe = null), (kt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        me(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xh(t, e), (t = t.sibling);
}
function xh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), bt(e), r & 4)) {
        try {
          kl(3, e, e.return), _a(3, e);
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
      St(t, e), bt(e), r & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        bt(e),
        r & 512 && n !== null && Nr(n, n.return),
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
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && jf(l, i),
              Zo(s, a);
            var c = Zo(s, i);
            for (a = 0; a < u.length; a += 2) {
              var d = u[a],
                p = u[a + 1];
              d === 'style'
                ? Wf(l, p)
                : d === 'dangerouslySetInnerHTML'
                ? Hf(l, p)
                : d === 'children'
                ? Tl(l, p)
                : qs(l, d, p, c);
            }
            switch (s) {
              case 'input':
                Qo(l, i);
                break;
              case 'textarea':
                Uf(l, i);
                break;
              case 'select':
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Rr(l, !!i.multiple, m, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Rr(l, !!i.multiple, i.defaultValue, !0)
                      : Rr(l, !!i.multiple, i.multiple ? [] : '', !1));
            }
            l[zl] = i;
          } catch (y) {
            me(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((St(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (y) {
          me(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Il(t.containerInfo);
        } catch (y) {
          me(e, e.return, y);
        }
      break;
    case 4:
      St(t, e), bt(e);
      break;
    case 13:
      St(t, e),
        bt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_u = ge())),
        r & 4 && Dd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (c = Me) || d), St(t, e), (Me = c)) : St(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && (e.mode & 1) !== 0)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (p = M = d; M !== null; ) {
              switch (((f = M), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kl(4, f, f.return);
                  break;
                case 1:
                  Nr(f, f.return);
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
                  Nr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Od(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (M = m)) : Od(p);
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
                    ? ((i = l.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Vf('display', a)));
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
      St(t, e), bt(e), r & 4 && Dd(e);
      break;
    case 21:
      break;
    default:
      St(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tl(l, ''), (r.flags &= -33));
          var i = Rd(e);
          Ps(e, i, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Rd(e);
          Ds(e, s, a);
          break;
        default:
          throw Error(D(161));
      }
    } catch (u) {
      me(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mg(e, t, n) {
  (M = e), Eh(e);
}
function Eh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Ci;
      if (!a) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || Me;
        s = Ci;
        var c = Me;
        if (((Ci = a), (Me = u) && !c))
          for (M = l; M !== null; )
            (a = M),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Td(l)
                : u !== null
                ? ((u.return = a), (M = u))
                : Td(l);
        for (; i !== null; ) (M = i), Eh(i), (i = i.sibling);
        (M = l), (Ci = s), (Me = c);
      }
      Pd(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (M = i))
        : Pd(e);
  }
}
function Pd(e) {
  for (; M !== null; ) {
    var t = M;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || _a(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && dd(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                dd(t, a, n);
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
              throw Error(D(163));
          }
        Me || (t.flags & 512 && Rs(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Od(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Td(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _a(4, t);
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
          var i = t.return;
          try {
            Rs(t);
          } catch (u) {
            me(t, i, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Rs(t);
          } catch (u) {
            me(t, a, u);
          }
      }
    } catch (u) {
      me(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (M = s);
      break;
    }
    M = t.return;
  }
}
var Fg = Math.ceil,
  ca = an.ReactCurrentDispatcher,
  Tu = an.ReactCurrentOwner,
  ht = an.ReactCurrentBatchConfig,
  Q = 0,
  Re = null,
  ye = null,
  Oe = 0,
  tt = 0,
  wr = _n(0),
  we = 0,
  Wl = null,
  Jn = 0,
  ba = 0,
  Lu = 0,
  Rl = null,
  Qe = null,
  _u = 0,
  zr = 1 / 0,
  Bt = null,
  da = !1,
  Os = null,
  kn = null,
  ki = !1,
  xn = null,
  fa = 0,
  Dl = 0,
  Ts = null,
  zi = -1,
  ji = 0;
function Ue() {
  return (Q & 6) !== 0 ? ge() : zi !== -1 ? zi : (zi = ge());
}
function Rn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (Q & 2) !== 0 && Oe !== 0
    ? Oe & -Oe
    : xg.transition !== null
    ? (ji === 0 && (ji = rp()), ji)
    : ((e = J),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cp(e.type))),
      e);
}
function Ot(e, t, n, r) {
  if (50 < Dl) throw ((Dl = 0), (Ts = null), Error(D(185)));
  Jl(e, n, r),
    ((Q & 2) === 0 || e !== Re) &&
      (e === Re && ((Q & 2) === 0 && (ba |= n), we === 4 && gn(e, Oe)),
      Je(e, r),
      n === 1 &&
        Q === 0 &&
        (t.mode & 1) === 0 &&
        ((zr = ge() + 500), Oa && bn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  x1(e, t);
  var r = Yi(e, e === Re ? Oe : 0);
  if (r === 0)
    n !== null && zc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && zc(n), t === 1))
      e.tag === 0 ? yg(Ld.bind(null, e)) : Op(Ld.bind(null, e)),
        hg(function () {
          (Q & 6) === 0 && bn();
        }),
        (n = null);
    else {
      switch (lp(r)) {
        case 1:
          n = lu;
          break;
        case 4:
          n = tp;
          break;
        case 16:
          n = Gi;
          break;
        case 536870912:
          n = np;
          break;
        default:
          n = Gi;
      }
      n = Ph(n, Nh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nh(e, t) {
  if (((zi = -1), (ji = 0), (Q & 6) !== 0)) throw Error(D(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = Yi(e, e === Re ? Oe : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = pa(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var i = Sh();
    (Re !== e || Oe !== t) && ((Bt = null), (zr = ge() + 500), Wn(e, t));
    do
      try {
        zg();
        break;
      } catch (s) {
        wh(e, s);
      }
    while (1);
    gu(),
      (ca.current = i),
      (Q = l),
      ye !== null ? (t = 0) : ((Re = null), (Oe = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = rs(e)), l !== 0 && ((r = l), (t = Ls(e, l)))), t === 1)
    )
      throw ((n = Wl), Wn(e, 0), gn(e, r), Je(e, ge()), n);
    if (t === 6) gn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !Ag(l) &&
          ((t = pa(e, r)),
          t === 2 && ((i = rs(e)), i !== 0 && ((r = i), (t = Ls(e, i)))),
          t === 1))
      )
        throw ((n = Wl), Wn(e, 0), gn(e, r), Je(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          zn(e, Qe, Bt);
          break;
        case 3:
          if (
            (gn(e, r), (r & 130023424) === r && ((t = _u + 500 - ge()), 10 < t))
          ) {
            if (Yi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ds(zn.bind(null, e, Qe, Bt), t);
            break;
          }
          zn(e, Qe, Bt);
          break;
        case 4:
          if ((gn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - Pt(r);
            (i = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~i);
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
                : 1960 * Fg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ds(zn.bind(null, e, Qe, Bt), r);
            break;
          }
          zn(e, Qe, Bt);
          break;
        case 5:
          zn(e, Qe, Bt);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return Je(e, ge()), e.callbackNode === n ? Nh.bind(null, e) : null;
}
function Ls(e, t) {
  var n = Rl;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = pa(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && _s(t)),
    e
  );
}
function _s(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function Ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Tt(i(), l)) return !1;
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
      t &= ~ba,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ld(e) {
  if ((Q & 6) !== 0) throw Error(D(327));
  Lr();
  var t = Yi(e, 0);
  if ((t & 1) === 0) return Je(e, ge()), null;
  var n = pa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rs(e);
    r !== 0 && ((t = r), (n = Ls(e, r)));
  }
  if (n === 1) throw ((n = Wl), Wn(e, 0), gn(e, t), Je(e, ge()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, Qe, Bt),
    Je(e, ge()),
    null
  );
}
function bu(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((zr = ge() + 500), Oa && bn());
  }
}
function Zn(e) {
  xn !== null && xn.tag === 0 && (Q & 6) === 0 && Lr();
  var t = Q;
  Q |= 1;
  var n = ht.transition,
    r = J;
  try {
    if (((ht.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (ht.transition = n), (Q = t), (Q & 6) === 0 && bn();
  }
}
function Iu() {
  (tt = wr.current), ae(wr);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pg(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((hu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ea();
          break;
        case 3:
          Ar(), ae(Ye), ae(Ae), Su();
          break;
        case 5:
          wu(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
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
    ((Re = e),
    (ye = e = Dn(e.current, null)),
    (Oe = tt = t),
    (we = 0),
    (Wl = null),
    (Lu = ba = Jn = 0),
    (Qe = Rl = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = l), (r.next = a);
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
      if ((gu(), (Fi.current = ua), sa)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        sa = !1;
      }
      if (
        ((Xn = 0),
        (ke = Ee = fe = null),
        (Cl = !1),
        (Bl = 0),
        (Tu.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (Wl = t), (ye = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          u = t;
        if (
          ((t = Oe),
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
          var m = yd(a);
          if (m !== null) {
            (m.flags &= -257),
              xd(m, a, s, i, t),
              m.mode & 1 && gd(i, c, t),
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
              gd(i, c, t), Mu();
              break e;
            }
            u = Error(D(426));
          }
        } else if (se && s.mode & 1) {
          var S = yd(a);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              xd(S, a, s, i, t),
              mu($r(u, s));
            break e;
          }
        }
        (i = u = $r(u, s)),
          we !== 4 && (we = 2),
          Rl === null ? (Rl = [i]) : Rl.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = ih(i, u, t);
              cd(i, v);
              break e;
            case 1:
              s = u;
              var g = i.type,
                N = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (N !== null &&
                    typeof N.componentDidCatch == 'function' &&
                    (kn === null || !kn.has(N))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = ah(i, s, t);
                cd(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kh(n);
    } catch (R) {
      (t = R), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Sh() {
  var e = ca.current;
  return (ca.current = ua), e === null ? ua : e;
}
function Mu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Re === null ||
      ((Jn & 268435455) === 0 && (ba & 268435455) === 0) ||
      gn(Re, Oe);
}
function pa(e, t) {
  var n = Q;
  Q |= 2;
  var r = Sh();
  (Re !== e || Oe !== t) && ((Bt = null), Wn(e, t));
  do
    try {
      $g();
      break;
    } catch (l) {
      wh(e, l);
    }
  while (1);
  if ((gu(), (Q = n), (ca.current = r), ye !== null)) throw Error(D(261));
  return (Re = null), (Oe = 0), we;
}
function $g() {
  for (; ye !== null; ) Ch(ye);
}
function zg() {
  for (; ye !== null && !c1(); ) Ch(ye);
}
function Ch(e) {
  var t = Dh(e.alternate, e, tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? kh(e) : (ye = t),
    (Tu.current = null);
}
function kh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Lg(n, t, tt)), n !== null)) {
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
function zn(e, t, n) {
  var r = J,
    l = ht.transition;
  try {
    (ht.transition = null), (J = 1), jg(e, t, n, r);
  } finally {
    (ht.transition = l), (J = r);
  }
  return null;
}
function jg(e, t, n, r) {
  do Lr();
  while (xn !== null);
  if ((Q & 6) !== 0) throw Error(D(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (E1(e, i),
    e === Re && ((ye = Re = null), (Oe = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      ki ||
      ((ki = !0),
      Ph(Gi, function () {
        return Lr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = ht.transition), (ht.transition = null);
    var a = J;
    J = 1;
    var s = Q;
    (Q |= 4),
      (Tu.current = null),
      Ig(e, n),
      xh(n, e),
      ag(us),
      (Xi = !!ss),
      (us = ss = null),
      (e.current = n),
      Mg(n),
      d1(),
      (Q = s),
      (J = a),
      (ht.transition = i);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (xn = e), (fa = l)),
    (i = e.pendingLanes),
    i === 0 && (kn = null),
    h1(n.stateNode),
    Je(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (da) throw ((da = !1), (e = Os), (Os = null), e);
  return (
    (fa & 1) !== 0 && e.tag !== 0 && Lr(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === Ts ? Dl++ : ((Dl = 0), (Ts = e))) : (Dl = 0),
    bn(),
    null
  );
}
function Lr() {
  if (xn !== null) {
    var e = lp(fa),
      t = ht.transition,
      n = J;
    try {
      if (((ht.transition = null), (J = 16 > e ? 16 : e), xn === null))
        var r = !1;
      else {
        if (((e = xn), (xn = null), (fa = 0), (Q & 6) !== 0))
          throw Error(D(331));
        var l = Q;
        for (Q |= 4, M = e.current; M !== null; ) {
          var i = M,
            a = i.child;
          if ((M.flags & 16) !== 0) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (M = p);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var f = d.sibling,
                        m = d.return;
                      if ((vh(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (M = f);
                        break;
                      }
                      M = m;
                    }
                }
              }
              var x = i.alternate;
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
              M = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && a !== null)
            (a.return = i), (M = a);
          else
            e: for (; M !== null; ) {
              if (((i = M), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kl(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (M = v);
                break e;
              }
              M = i.return;
            }
        }
        var g = e.current;
        for (M = g; M !== null; ) {
          a = M;
          var N = a.child;
          if ((a.subtreeFlags & 2064) !== 0 && N !== null)
            (N.return = a), (M = N);
          else
            e: for (a = g; M !== null; ) {
              if (((s = M), (s.flags & 2048) !== 0))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _a(9, s);
                  }
                } catch (R) {
                  me(s, s.return, R);
                }
              if (s === a) {
                M = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (M = w);
                break e;
              }
              M = s.return;
            }
        }
        if (
          ((Q = l), bn(), At && typeof At.onPostCommitFiberRoot == 'function')
        )
          try {
            At.onPostCommitFiberRoot(Ca, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (ht.transition = t);
    }
  }
  return !1;
}
function _d(e, t, n) {
  (t = $r(n, t)),
    (t = ih(e, t, 1)),
    (e = Cn(e, t, 1)),
    (t = Ue()),
    e !== null && (Jl(e, 1, t), Je(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) _d(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _d(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (kn === null || !kn.has(r)))
        ) {
          (e = $r(n, e)),
            (e = ah(t, e, 1)),
            (t = Cn(t, e, 1)),
            (e = Ue()),
            t !== null && (Jl(t, 1, e), Je(t, e));
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
    Re === e &&
      (Oe & n) === n &&
      (we === 4 || (we === 3 && (Oe & 130023424) === Oe && 500 > ge() - _u)
        ? Wn(e, 0)
        : (Lu |= n)),
    Je(e, t);
}
function Rh(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = mi), (mi <<= 1), (mi & 130023424) === 0 && (mi = 4194304)));
  var n = Ue();
  (e = en(e, t)), e !== null && (Jl(e, t, n), Je(e, n));
}
function Bg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rh(e, n);
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
      throw Error(D(314));
  }
  r !== null && r.delete(t), Rh(e, n);
}
var Dh;
Dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Ge = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ge = !1), Tg(e, t, n);
      Ge = (e.flags & 131072) !== 0;
    }
  else (Ge = !1), se && (t.flags & 1048576) !== 0 && Tp(t, ra, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $i(e, t), (e = t.pendingProps);
      var l = Ir(t, Ae.current);
      Tr(t, n), (l = ku(null, t, r, e, l, n));
      var i = Ru();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((i = !0), ta(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Eu(t),
            (l.updater = Ta),
            (t.stateNode = l),
            (l._reactInternals = t),
            ys(t, r, e, n),
            (t = Ns(null, t, r, !0, i, n)))
          : ((t.tag = 0), se && i && pu(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($i(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Wg(r)),
          (e = Ct(r, e)),
          l)
        ) {
          case 0:
            t = Es(null, t, r, e, n);
            break e;
          case 1:
            t = wd(null, t, r, e, n);
            break e;
          case 11:
            t = Ed(null, t, r, e, n);
            break e;
          case 14:
            t = Nd(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ct(r, l)),
        Es(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ct(r, l)),
        wd(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ch(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ip(e, t),
          aa(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = $r(Error(D(423)), t)), (t = Sd(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = $r(Error(D(424)), t)), (t = Sd(e, t, r, n, l));
            break e;
          } else
            for (
              nt = Sn(t.stateNode.containerInfo.firstChild),
                rt = t,
                se = !0,
                Rt = null,
                n = $p(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mr(), r === l)) {
            t = tn(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zp(t),
        e === null && ms(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = l.children),
        cs(r, l) ? (a = null) : i !== null && cs(r, i) && (t.flags |= 32),
        uh(e, t),
        ze(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && ms(t), null;
    case 13:
      return dh(e, t, n);
    case 4:
      return (
        Nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ct(r, l)),
        Ed(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (a = l.value),
          re(la, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Tt(i.value, a)) {
            if (i.children === l.children && !Ye.current) {
              t = tn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Qt(-1, n & -n)), (u.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      vs(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(D(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  vs(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Tr(t, n),
        (l = vt(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ct(r, t.pendingProps)),
        (l = Ct(r.type, l)),
        Nd(e, t, r, l, n)
      );
    case 15:
      return oh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ct(r, l)),
        $i(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), ta(t)) : (e = !1),
        Tr(t, n),
        Fp(t, r, l),
        ys(t, r, l, n),
        Ns(null, t, r, !0, e, n)
      );
    case 19:
      return fh(e, t, n);
    case 22:
      return sh(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Ph(e, t) {
  return ep(e, t);
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
function pt(e, t, n, r) {
  return new Vg(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Wg(e) {
  if (typeof e == 'function') return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === tu)) return 11;
    if (e === nu) return 14;
  }
  return 2;
}
function Dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
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
function Ui(e, t, n, r, l, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Fu(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case fr:
        return Kn(n.children, l, i, t);
      case eu:
        (a = 8), (l |= 8);
        break;
      case Bo:
        return (
          (e = pt(12, n, t, l | 2)), (e.elementType = Bo), (e.lanes = i), e
        );
      case Ho:
        return (e = pt(13, n, t, l)), (e.elementType = Ho), (e.lanes = i), e;
      case Vo:
        return (e = pt(19, n, t, l)), (e.elementType = Vo), (e.lanes = i), e;
      case Af:
        return Ia(n, l, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Mf:
              a = 10;
              break e;
            case Ff:
              a = 9;
              break e;
            case tu:
              a = 11;
              break e;
            case nu:
              a = 14;
              break e;
            case pn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = pt(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kn(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function Ia(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Af),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function So(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function Co(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = ro(0)),
    (this.expirationTimes = ro(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ro(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Au(e, t, n, r, l, i, a, s, u) {
  return (
    (e = new Kg(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(i),
    e
  );
}
function Qg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Oh(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Pp(e, n, t);
  }
  return t;
}
function Th(e, t, n, r, l, i, a, s, u) {
  return (
    (e = Au(n, r, !0, e, l, i, a, s, u)),
    (e.context = Oh(null)),
    (n = e.current),
    (r = Ue()),
    (l = Rn(n)),
    (i = Qt(r, l)),
    (i.callback = t != null ? t : null),
    Cn(n, i, l),
    (e.current.lanes = l),
    Jl(e, l, r),
    Je(e, r),
    e
  );
}
function Ma(e, t, n, r) {
  var l = t.current,
    i = Ue(),
    a = Rn(l);
  return (
    (n = Oh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qt(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cn(l, t, a)),
    e !== null && (Ot(e, l, a, i), Mi(e, l, a)),
    a
  );
}
function ha(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $u(e, t) {
  bd(e, t), (e = e.alternate) && bd(e, t);
}
function Gg() {
  return null;
}
var Lh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function zu(e) {
  this._internalRoot = e;
}
Fa.prototype.render = zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Ma(e, t, null, null);
};
Fa.prototype.unmount = zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      Ma(null, e, null, null);
    }),
      (t[qt] = null);
  }
};
function Fa(e) {
  this._internalRoot = e;
}
Fa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = op();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && up(e);
  }
};
function ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Aa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Id() {}
function Yg(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = ha(a);
        i.call(c);
      };
    }
    var a = Th(t, r, e, 0, null, !1, !1, '', Id);
    return (
      (e._reactRootContainer = a),
      (e[qt] = a.current),
      Al(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var c = ha(u);
      s.call(c);
    };
  }
  var u = Au(e, 0, !1, null, null, !1, !1, '', Id);
  return (
    (e._reactRootContainer = u),
    (e[qt] = u.current),
    Al(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      Ma(t, u, n, r);
    }),
    u
  );
}
function $a(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof l == 'function') {
      var s = l;
      l = function () {
        var u = ha(a);
        s.call(u);
      };
    }
    Ma(t, a, e, l);
  } else a = Yg(n, t, e, l, r);
  return ha(a);
}
ip = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hl(t.pendingLanes);
        n !== 0 &&
          (iu(t, n | 1),
          Je(t, ge()),
          (Q & 6) === 0 && ((zr = ge() + 500), bn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = en(e, 1);
        if (r !== null) {
          var l = Ue();
          Ot(r, e, 1, l);
        }
      }),
        $u(e, 1);
  }
};
au = function (e) {
  if (e.tag === 13) {
    var t = en(e, 134217728);
    if (t !== null) {
      var n = Ue();
      Ot(t, e, 134217728, n);
    }
    $u(e, 134217728);
  }
};
ap = function (e) {
  if (e.tag === 13) {
    var t = Rn(e),
      n = en(e, t);
    if (n !== null) {
      var r = Ue();
      Ot(n, e, t, r);
    }
    $u(e, t);
  }
};
op = function () {
  return J;
};
sp = function (e, t) {
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
      if ((Qo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = Pa(r);
            if (!l) throw Error(D(90));
            zf(r), Qo(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Uf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Rr(e, !!n.multiple, t, !1);
  }
};
Gf = bu;
Yf = Zn;
var Xg = { usingClientEntryPoint: !1, Events: [ql, vr, Pa, Kf, Qf, bu] },
  al = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Jg = {
    bundleType: al.bundleType,
    version: al.version,
    rendererPackageName: al.rendererPackageName,
    rendererConfig: al.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: an.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: al.findFiberByHostInstance || Gg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber)
    try {
      (Ca = Ri.inject(Jg)), (At = Ri);
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ju(t)) throw Error(D(200));
  return Qg(e, t, null, n);
};
at.createRoot = function (e, t) {
  if (!ju(e)) throw Error(D(299));
  var n = !1,
    r = '',
    l = Lh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Au(e, 1, !1, null, null, n, !1, r, l)),
    (e[qt] = t.current),
    Al(e.nodeType === 8 ? e.parentNode : e),
    new zu(t)
  );
};
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(D(188))
      : ((e = Object.keys(e).join(',')), Error(D(268, e)));
  return (e = Zf(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e) {
  return Zn(e);
};
at.hydrate = function (e, t, n) {
  if (!Aa(t)) throw Error(D(200));
  return $a(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
  if (!ju(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = '',
    a = Lh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Th(t, null, e, 1, n != null ? n : null, l, !1, i, a)),
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
  return new Fa(t);
};
at.render = function (e, t, n) {
  if (!Aa(t)) throw Error(D(200));
  return $a(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!Aa(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Zn(function () {
        $a(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qt] = null);
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = bu;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Aa(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return $a(e, t, n, !1, r);
};
at.version = '18.2.0-next-9e3b772b8-20220608';
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
  t(), (e.exports = at);
})(Ks);
const Sr = Sf(Ks.exports);
var Md = Ks.exports;
(zo.createRoot = Md.createRoot), (zo.hydrateRoot = Md.hydrateRoot);
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
var oe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(oe || (oe = {}));
const Fd = 'popstate';
function _h(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ['/'], initialIndex: n, v5Compat: r = !1 } = e,
    l;
  l = t.map((f, m) =>
    d(f, typeof f == 'string' ? null : f.state, m === 0 ? 'default' : void 0),
  );
  let i = u(n == null ? l.length - 1 : n),
    a = oe.Pop,
    s = null;
  function u(f) {
    return Math.min(Math.max(f, 0), l.length - 1);
  }
  function c() {
    return l[i];
  }
  function d(f, m, x) {
    m === void 0 && (m = null);
    let y = Gt(l ? c().pathname : '/', f, m, x);
    return (
      Mh(
        y.pathname.charAt(0) === '/',
        'relative pathnames are not supported in memory history: ' +
          JSON.stringify(f),
      ),
      y
    );
  }
  return {
    get index() {
      return i;
    },
    get action() {
      return a;
    },
    get location() {
      return c();
    },
    createHref(f) {
      return typeof f == 'string' ? f : nn(f);
    },
    push(f, m) {
      a = oe.Push;
      let x = d(f, m);
      (i += 1),
        l.splice(i, l.length, x),
        r && s && s({ action: a, location: x });
    },
    replace(f, m) {
      a = oe.Replace;
      let x = d(f, m);
      (l[i] = x), r && s && s({ action: a, location: x });
    },
    go(f) {
      (a = oe.Pop), (i = u(i + f)), s && s({ action: a, location: c() });
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
function bh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Gt(
      '',
      { pathname: i, search: a, hash: s },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default',
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : nn(l);
  }
  return Fh(t, n, null, e);
}
function Ih(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: a = '/',
      search: s = '',
      hash: u = '',
    } = Lt(l.location.hash.substr(1));
    return Gt(
      '',
      { pathname: a, search: s, hash: u },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    );
  }
  function n(l, i) {
    let a = l.document.querySelector('base'),
      s = '';
    if (a && a.getAttribute('href')) {
      let u = l.location.href,
        c = u.indexOf('#');
      s = c === -1 ? u : u.slice(0, c);
    }
    return s + '#' + (typeof i == 'string' ? i : nn(i));
  }
  function r(l, i) {
    Mh(
      l.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(i) +
        ')',
    );
  }
  return Fh(t, n, r, e);
}
function Mh(e, t) {
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
function Ad(e) {
  return { usr: e.state, key: e.key };
}
function Gt(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Lt(t) : t,
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
function Lt(e) {
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
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    a = l.history,
    s = oe.Pop,
    u = null;
  function c() {
    (s = oe.Pop), u && u({ action: s, location: f.location });
  }
  function d(m, x) {
    s = oe.Push;
    let y = Gt(f.location, m, x);
    n && n(y, m);
    let S = Ad(y),
      v = f.createHref(y);
    try {
      a.pushState(S, '', v);
    } catch {
      l.location.assign(v);
    }
    i && u && u({ action: s, location: y });
  }
  function p(m, x) {
    s = oe.Replace;
    let y = Gt(f.location, m, x);
    n && n(y, m);
    let S = Ad(y),
      v = f.createHref(y);
    a.replaceState(S, '', v), i && u && u({ action: s, location: y });
  }
  let f = {
    get action() {
      return s;
    },
    get location() {
      return e(l, a);
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
      return a.go(m);
    },
  };
  return f;
}
var Ie;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Ie || (Ie = {}));
function qg(e) {
  return e.index === !0;
}
function Ah(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let i = [...t, l],
        a = typeof r.id == 'string' ? r.id : i.join('-');
      return (
        j(
          r.index !== !0 || !r.children,
          'Cannot specify children on an index route',
        ),
        j(
          !n.has(a),
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        n.add(a),
        qg(r)
          ? ce({}, r, { id: a })
          : ce({}, r, {
              id: a,
              children: r.children ? Ah(r.children, i, n) : void 0,
            })
      );
    })
  );
}
function Cr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Lt(t) : t,
    l = zh(r.pathname || '/', n);
  if (l == null) return null;
  let i = $h(e);
  e0(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) a = u0(i[s], l);
  return a;
}
function $h(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''),
    e.forEach((l, i) => {
      let a = {
        relativePath: l.path || '',
        caseSensitive: l.caseSensitive === !0,
        childrenIndex: i,
        route: l,
      };
      a.relativePath.startsWith('/') &&
        (j(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.',
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let s = Yt([r, a.relativePath]),
        u = n.concat(a);
      l.children &&
        l.children.length > 0 &&
        (j(
          l.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + s + '".'),
        ),
        $h(l.children, t, u, s)),
        !(l.path == null && !l.index) &&
          t.push({ path: s, score: o0(s, l.index), routesMeta: u });
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
  i0 = 10,
  a0 = -2,
  $d = (e) => e === '*';
function o0(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some($d) && (r += a0),
    t && (r += r0),
    n
      .filter((l) => !$d(l))
      .reduce((l, i) => l + (t0.test(i) ? n0 : i === '' ? l0 : i0), r)
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
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      u = a === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      d = za(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        c,
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let p = s.route;
    i.push({
      params: r,
      pathname: Yt([l, d.pathname]),
      pathnameBase: h0(Yt([l, d.pathnameBase])),
      route: p,
    }),
      d.pathnameBase !== '/' && (l = Yt([l, d.pathnameBase]));
  }
  return i;
}
function c0(e, t) {
  return (
    t === void 0 && (t = {}),
    e
      .replace(
        /:(\w+)/g,
        (n, r) => (j(t[r] != null, 'Missing ":' + r + '" param'), t[r]),
      )
      .replace(/(\/?)\*/, (n, r, l, i) => {
        const a = '*';
        return t[a] == null ? (i === '/*' ? '/' : '') : '' + r + t[a];
      })
  );
}
function za(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = d0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    a = i.replace(/(.)\/+$/, '$1'),
    s = l.slice(1);
  return {
    params: r.reduce((c, d, p) => {
      if (d === '*') {
        let f = s[p] || '';
        a = i.slice(0, i.length - f.length).replace(/(.)\/+$/, '$1');
      }
      return (c[d] = f0(s[p] || '', d)), c;
    }, {}),
    pathname: i,
    pathnameBase: a,
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
        .replace(/:(\w+)/g, (a, s) => (r.push(s), '([^\\/]+)'));
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
function zh(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function j(e, t) {
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
function Uh(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Lt(e) : e;
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
function ko(e, t, n, r) {
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
function Bh(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Lt(e))
    : ((l = ce({}, e)),
      j(
        !l.pathname || !l.pathname.includes('?'),
        ko('?', 'pathname', 'search', l),
      ),
      j(
        !l.pathname || !l.pathname.includes('#'),
        ko('#', 'pathname', 'hash', l),
      ),
      j(!l.search || !l.search.includes('#'), ko('#', 'search', 'hash', l)));
  let i = e === '' || l.pathname === '',
    a = i ? '/' : l.pathname,
    s;
  if (r || a == null) s = n;
  else {
    let p = t.length - 1;
    if (a.startsWith('..')) {
      let f = a.split('/');
      for (; f[0] === '..'; ) f.shift(), (p -= 1);
      l.pathname = f.join('/');
    }
    s = p >= 0 ? t[p] : '/';
  }
  let u = Uh(l, s),
    c = a && a !== '/' && a.endsWith('/'),
    d = (i || a === '.') && n.endsWith('/');
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
class ma extends Error {}
class Hh {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      j(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let n;
    (this.abortPromise = new Promise((l, i) => (n = i))),
      (this.controller = new AbortController());
    let r = () => n(new ma('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((l, i) => {
        let [a, s] = i;
        return Object.assign(l, { [a]: this.trackPromise(a, s) });
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
    if (this.controller.signal.aborted && r instanceof ma)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const i = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        i && i(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }), i && i(!1), l);
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
          this.subscribe((i) => {
            t.removeEventListener('abort', r), (i || this.done) && l(i);
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
      j(
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
  return new Hh(e);
}
const N0 = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = { status: r })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return l.set('Location', t), new Response(null, ce({}, r, { headers: l }));
};
class Vr {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ''), (this.data = r);
  }
}
function Uu(e) {
  return e instanceof Vr;
}
const Ro = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  w0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  };
function Bu(e) {
  j(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter',
  );
  let t = Ah(e.routes),
    n = null,
    r = new Set(),
    l = null,
    i = null,
    a = null,
    s = !1,
    u = Cr(t, e.history.location, e.basename),
    c = null;
  if (u == null) {
    let { matches: k, route: P, error: b } = Hd(t);
    (u = k), (c = { [P.id]: b });
  }
  let d = !u.some((k) => k.route.loader) || e.hydrationData != null,
    p,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: u,
      initialized: d,
      navigation: Ro,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
    },
    m = oe.Pop,
    x = !1,
    y,
    S = !1,
    v = !1,
    g = [],
    N = [],
    w = new Map(),
    R = 0,
    T = -1,
    O = new Map(),
    _ = new Set(),
    I = new Map(),
    $ = new Map();
  function xe() {
    return (
      (n = e.history.listen((k) => {
        let { action: P, location: b } = k;
        return L(P, b);
      })),
      f.initialized || L(oe.Pop, f.location),
      p
    );
  }
  function Ze() {
    n && n(), r.clear(), y && y.abort(), f.fetchers.forEach((k, P) => Mn(P));
  }
  function $e(k) {
    return r.add(k), () => r.delete(k);
  }
  function te(k) {
    (f = ce({}, f, k)), r.forEach((P) => P(f));
  }
  function Z(k, P) {
    var b;
    let B =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        f.navigation.state === 'loading' &&
        ((b = f.navigation.formAction) == null ? void 0 : b.split('?')[0]) ===
          k.pathname,
      H = P.loaderData
        ? { loaderData: Po(f.loaderData, P.loaderData, P.matches || []) }
        : {};
    te(
      ce({}, B ? {} : { actionData: null }, P, H, {
        historyAction: m,
        location: k,
        initialized: !0,
        navigation: Ro,
        revalidation: 'idle',
        restoreScrollPosition: f.navigation.formData
          ? !1
          : Cc(k, P.matches || f.matches),
        preventScrollReset: x,
      }),
    ),
      S ||
        m === oe.Pop ||
        (m === oe.Push
          ? e.history.push(k, k.state)
          : m === oe.Replace && e.history.replace(k, k.state)),
      (m = oe.Pop),
      (x = !1),
      (S = !1),
      (v = !1),
      (g = []),
      (N = []);
  }
  async function Nt(k, P) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let { path: b, submission: B, error: H } = zd(k, P),
      ue = Gt(f.location, b, P && P.state),
      X = (P && P.replace) === !0 || B != null ? oe.Replace : oe.Push,
      K = P && 'preventScrollReset' in P ? P.preventScrollReset === !0 : void 0;
    return await L(X, ue, {
      submission: B,
      pendingError: H,
      preventScrollReset: K,
      replace: P && P.replace,
    });
  }
  function qe() {
    if (
      (ct(),
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
  async function L(k, P, b) {
    y && y.abort(),
      (y = null),
      (m = k),
      (S = (b && b.startUninterruptedRevalidation) === !0),
      Ov(f.location, f.matches),
      (x = (b && b.preventScrollReset) === !0);
    let B = b && b.overrideNavigation,
      H = Cr(t, P, e.basename);
    if (!H) {
      let { matches: zt, route: jt, error: An } = Hd(t);
      Xa(), Z(P, { matches: zt, loaderData: {}, errors: { [jt.id]: An } });
      return;
    }
    if (R0(f.location, P)) {
      Z(P, { matches: H });
      return;
    }
    y = new AbortController();
    let ue = sl(P, y.signal, b && b.submission),
      X,
      K;
    if (b && b.pendingError) K = { [kr(H).route.id]: b.pendingError };
    else if (b && b.submission) {
      let zt = await z(ue, P, b.submission, H, { replace: b.replace });
      if (zt.shortCircuited) return;
      (X = zt.pendingActionData),
        (K = zt.pendingActionError),
        (B = ce({ state: 'loading', location: P }, b.submission));
    }
    let {
      shortCircuited: ee,
      loaderData: ve,
      errors: De,
    } = await U(ue, P, H, B, b && b.submission, b && b.replace, X, K);
    ee || ((y = null), Z(P, { matches: H, loaderData: ve, errors: De }));
  }
  async function z(k, P, b, B, H) {
    ct();
    let ue = ce({ state: 'submitting', location: P }, b);
    te({ navigation: ue });
    let X,
      K = Gd(B, P);
    if (!K.route.action) X = Vd(P);
    else if (((X = await ol('action', k, K)), k.signal.aborted))
      return { shortCircuited: !0 };
    if (_r(X)) {
      let ee = ce(
        { state: 'loading', location: Gt(f.location, X.location) },
        b,
      );
      return await he(X, ee, H && H.replace), { shortCircuited: !0 };
    }
    if (Pl(X)) {
      let ee = kr(B, K.route.id);
      return (
        (H && H.replace) !== !0 && (m = oe.Push),
        { pendingActionError: { [ee.route.id]: X.error } }
      );
    }
    if (Vn(X)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [K.route.id]: X.data } };
  }
  async function U(k, P, b, B, H, ue, X, K) {
    let ee = B;
    ee ||
      (ee = {
        state: 'loading',
        location: P,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [ve, De] = jd(f, b, H, P, v, g, N, X, K, I);
    if (
      (Xa(
        (Le) =>
          !(b && b.some((Ke) => Ke.route.id === Le)) ||
          (ve && ve.some((Ke) => Ke.route.id === Le)),
      ),
      ve.length === 0 && De.length === 0)
    )
      return (
        Z(P, {
          matches: b,
          loaderData: Po(f.loaderData, {}, b),
          errors: K || null,
          actionData: X || null,
        }),
        { shortCircuited: !0 }
      );
    S ||
      (De.forEach((Le) => {
        let [Ke] = Le;
        const cn = f.fetchers.get(Ke);
        let ui = {
          state: 'loading',
          data: cn && cn.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        f.fetchers.set(Ke, ui);
      }),
      te(
        ce(
          { navigation: ee, actionData: X || f.actionData || null },
          De.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
        ),
      )),
      (T = ++R),
      De.forEach((Le) => {
        let [Ke] = Le;
        return w.set(Ke, y);
      });
    let {
      results: zt,
      loaderResults: jt,
      fetcherResults: An,
    } = await Se(f.matches, ve, De, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    De.forEach((Le) => {
      let [Ke] = Le;
      return w.delete(Ke);
    });
    let Zr = Wd(zt);
    if (Zr) {
      let Le = Do(f, Zr);
      return await he(Zr, Le, ue), { shortCircuited: !0 };
    }
    let { loaderData: si, errors: ir } = Bd(f, b, ve, jt, K, De, An, $);
    $.forEach((Le, Ke) => {
      Le.subscribe((cn) => {
        (cn || Le.done) && $.delete(Ke);
      });
    }),
      lr();
    let Ja = q(T);
    return ce(
      { loaderData: si, errors: ir },
      Ja || De.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
    );
  }
  function V(k) {
    return f.fetchers.get(k) || w0;
  }
  function ne(k, P, b, B) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    w.has(k) && Fn(k);
    let H = Cr(t, b, e.basename);
    if (!H) {
      Jr(k, P, new Vr(404, 'Not Found', null));
      return;
    }
    let { path: ue, submission: X } = zd(b, B, !0),
      K = Gd(H, ue);
    if (X) {
      _t(k, P, ue, K, X);
      return;
    }
    I.set(k, [ue, K]), We(k, P, ue, K);
  }
  async function _t(k, P, b, B, H) {
    if ((ct(), I.delete(k), !B.route.action)) {
      let { error: wt } = Vd(b);
      Jr(k, P, wt);
      return;
    }
    let ue = f.fetchers.get(k),
      X = ce({ state: 'submitting' }, H, { data: ue && ue.data });
    f.fetchers.set(k, X), te({ fetchers: new Map(f.fetchers) });
    let K = new AbortController(),
      ee = sl(b, K.signal, H);
    w.set(k, K);
    let ve = await ol('action', ee, B);
    if (ee.signal.aborted) {
      w.get(k) === K && w.delete(k);
      return;
    }
    if (_r(ve)) {
      w.delete(k), _.add(k);
      let wt = ce({ state: 'loading' }, H, { data: void 0 });
      f.fetchers.set(k, wt), te({ fetchers: new Map(f.fetchers) });
      let Ut = ce(
        { state: 'loading', location: Gt(f.location, ve.location) },
        H,
      );
      await he(ve, Ut);
      return;
    }
    if (Pl(ve)) {
      Jr(k, P, ve.error);
      return;
    }
    Vn(ve) && j(!1, 'defer() is not supported in actions');
    let De = f.navigation.location || f.location,
      zt = sl(De, K.signal),
      jt =
        f.navigation.state !== 'idle'
          ? Cr(t, f.navigation.location, e.basename)
          : f.matches;
    j(jt, "Didn't find any matches after fetcher action");
    let An = ++R;
    O.set(k, An);
    let Zr = ce({ state: 'loading', data: ve.data }, H);
    f.fetchers.set(k, Zr);
    let [si, ir] = jd(
      f,
      jt,
      H,
      De,
      v,
      g,
      N,
      { [B.route.id]: ve.data },
      void 0,
      I,
    );
    ir
      .filter((wt) => {
        let [Ut] = wt;
        return Ut !== k;
      })
      .forEach((wt) => {
        let [Ut] = wt,
          Rc = f.fetchers.get(Ut),
          _v = {
            state: 'loading',
            data: Rc && Rc.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        f.fetchers.set(Ut, _v), w.set(Ut, K);
      }),
      te({ fetchers: new Map(f.fetchers) });
    let {
      results: Ja,
      loaderResults: Le,
      fetcherResults: Ke,
    } = await Se(f.matches, si, ir, zt);
    if (K.signal.aborted) return;
    O.delete(k),
      w.delete(k),
      ir.forEach((wt) => {
        let [Ut] = wt;
        return w.delete(Ut);
      });
    let cn = Wd(Ja);
    if (cn) {
      let wt = Do(f, cn);
      await he(cn, wt);
      return;
    }
    let { loaderData: ui, errors: kc } = Bd(
        f,
        f.matches,
        si,
        Le,
        void 0,
        ir,
        Ke,
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
      ? (j(m, 'Expected pending action'),
        y && y.abort(),
        Z(f.navigation.location, {
          matches: jt,
          loaderData: ui,
          errors: kc,
          fetchers: new Map(f.fetchers),
        }))
      : (te(
          ce(
            { errors: kc, loaderData: Po(f.loaderData, ui, jt) },
            Lv ? { fetchers: new Map(f.fetchers) } : {},
          ),
        ),
        (v = !1));
  }
  async function We(k, P, b, B) {
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
      K = sl(b, X.signal);
    w.set(k, X);
    let ee = await ol('loader', K, B);
    if (
      (Vn(ee) && (ee = (await Kh(ee, K.signal, !0)) || ee),
      w.get(k) === X && w.delete(k),
      K.signal.aborted)
    )
      return;
    if (_r(ee)) {
      let De = Do(f, ee);
      await he(ee, De);
      return;
    }
    if (Pl(ee)) {
      let De = kr(f.matches, P);
      f.fetchers.delete(k),
        te({
          fetchers: new Map(f.fetchers),
          errors: { [De.route.id]: ee.error },
        });
      return;
    }
    j(!Vn(ee), 'Unhandled fetcher deferred data');
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
  async function he(k, P, b) {
    k.revalidate && (v = !0),
      j(P.location, 'Expected a location on the redirect navigation'),
      (y = null);
    let B = b === !0 ? oe.Replace : oe.Push;
    await L(B, P.location, { overrideNavigation: P });
  }
  async function Se(k, P, b, B) {
    let H = await Promise.all([
        ...P.map((K) => ol('loader', B, K)),
        ...b.map((K) => {
          let [, ee, ve] = K;
          return ol('loader', sl(ee, B.signal), ve);
        }),
      ]),
      ue = H.slice(0, P.length),
      X = H.slice(P.length);
    return (
      await Promise.all([
        Kd(k, P, ue, B.signal, !1, f.loaderData),
        Kd(
          k,
          b.map((K) => {
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
  function ct() {
    (v = !0),
      g.push(...Xa()),
      I.forEach((k, P) => {
        w.has(P) && (N.push(P), Fn(P));
      });
  }
  function Jr(k, P, b) {
    let B = kr(f.matches, P);
    Mn(k), te({ errors: { [B.route.id]: b }, fetchers: new Map(f.fetchers) });
  }
  function Mn(k) {
    w.has(k) && Fn(k),
      I.delete(k),
      O.delete(k),
      _.delete(k),
      f.fetchers.delete(k);
  }
  function Fn(k) {
    let P = w.get(k);
    j(P, 'Expected fetch controller: ' + k), P.abort(), w.delete(k);
  }
  function rr(k) {
    for (let P of k) {
      let B = {
        state: 'idle',
        data: V(P).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      f.fetchers.set(P, B);
    }
  }
  function lr() {
    let k = [];
    for (let P of _) {
      let b = f.fetchers.get(P);
      j(b, 'Expected fetcher: ' + P),
        b.state === 'loading' && (_.delete(P), k.push(P));
    }
    rr(k);
  }
  function q(k) {
    let P = [];
    for (let [b, B] of O)
      if (B < k) {
        let H = f.fetchers.get(b);
        j(H, 'Expected fetcher: ' + b),
          H.state === 'loading' && (Fn(b), O.delete(b), P.push(b));
      }
    return rr(P), P.length > 0;
  }
  function Xa(k) {
    let P = [];
    return (
      $.forEach((b, B) => {
        (!k || k(B)) && (b.cancel(), P.push(B), $.delete(B));
      }),
      P
    );
  }
  function Pv(k, P, b) {
    if (
      ((l = k), (a = P), (i = b || ((B) => B.key)), !s && f.navigation === Ro)
    ) {
      s = !0;
      let B = Cc(f.location, f.matches);
      B != null && te({ restoreScrollPosition: B });
    }
    return () => {
      (l = null), (a = null), (i = null);
    };
  }
  function Ov(k, P) {
    if (l && i && a) {
      let b = P.map((H) => Qd(H, f.loaderData)),
        B = i(k, b) || k.key;
      l[B] = a();
    }
  }
  function Cc(k, P) {
    if (l && i && a) {
      let b = P.map((ue) => Qd(ue, f.loaderData)),
        B = i(k, b) || k.key,
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
      enableScrollRestoration: Pv,
      navigate: Nt,
      fetch: ne,
      revalidate: qe,
      createHref: ja,
      getFetcher: V,
      deleteFetcher: Mn,
      dispose: Ze,
      _internalFetchControllers: w,
      _internalActiveDeferreds: $,
    }),
    p
  );
}
function zd(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : nn(e);
  if (!t || (!('formMethod' in t) && !('formData' in t))) return { path: r };
  if (t.formMethod != null && t.formMethod !== 'get')
    return {
      path: r,
      submission: {
        formMethod: t.formMethod,
        formAction: ja(Lt(r)),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: r };
  let l = Lt(r);
  try {
    let i = Wh(t.formData);
    n && l.search && Qh(l.search) && i.append('index', ''),
      (l.search = '?' + i);
  } catch {
    return {
      path: r,
      error: new Vr(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET',
      ),
    };
  }
  return { path: nn(l) };
}
function Do(e, t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: l,
    formData: i,
  } = e.navigation;
  return {
    state: 'loading',
    location: Gt(e.location, t.location),
    formMethod: n || void 0,
    formAction: r || void 0,
    formEncType: l || void 0,
    formData: i || void 0,
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
function jd(e, t, n, r, l, i, a, s, u, c) {
  let d = u ? Object.values(u)[0] : s ? Object.values(s)[0] : null,
    p = u ? Object.keys(u)[0] : void 0,
    m = S0(t, p).filter(
      (y, S) =>
        y.route.loader != null &&
        (C0(e.loaderData, e.matches[S], y) ||
          i.some((v) => v === y.route.id) ||
          Ud(e.location, e.matches[S], n, r, y, l, d)),
    ),
    x = [];
  return (
    c &&
      c.forEach((y, S) => {
        let [v, g] = y;
        a.includes(S)
          ? x.push([S, v, g])
          : l && Ud(v, g, n, v, g, l, d) && x.push([S, v, g]);
      }),
    [m, x]
  );
}
function C0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Vh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Ud(e, t, n, r, l, i, a) {
  let s = bs(e),
    u = t.params,
    c = bs(r),
    d = l.params,
    p = Vh(t, l) || s.toString() === c.toString() || s.search !== c.search || i;
  if (l.route.shouldRevalidate) {
    let f = l.route.shouldRevalidate(
      ce({ currentUrl: s, currentParams: u, nextUrl: c, nextParams: d }, n, {
        actionResult: a,
        defaultShouldRevalidate: p,
      }),
    );
    if (typeof f == 'boolean') return f;
  }
  return p;
}
async function ol(e, t, n, r, l) {
  r === void 0 && (r = !1), l === void 0 && (l = !1);
  let i,
    a,
    s,
    u = new Promise((d, p) => (s = p)),
    c = () => s();
  t.signal.addEventListener('abort', c);
  try {
    let d = n.route[e];
    j(
      d,
      'Could not find the ' + e + ' to run on the "' + n.route.id + '" route',
    ),
      (a = await Promise.race([d({ request: t, params: n.params }), u]));
  } catch (d) {
    (i = Ie.error), (a = d);
  } finally {
    t.signal.removeEventListener('abort', c);
  }
  if (a instanceof Response) {
    let d = a.status,
      p = a.headers.get('Location');
    if (l) throw a;
    if (d >= 300 && d <= 399 && p != null) {
      if (r) throw a;
      return {
        type: Ie.redirect,
        status: d,
        location: p,
        revalidate: a.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    let f,
      m = a.headers.get('Content-Type');
    return (
      m && m.startsWith('application/json')
        ? (f = await a.json())
        : (f = await a.text()),
      i === Ie.error
        ? { type: i, error: new Vr(d, a.statusText, f), headers: a.headers }
        : { type: Ie.data, data: f, statusCode: a.status, headers: a.headers }
    );
  }
  return i === Ie.error
    ? { type: i, error: a }
    : a instanceof Hh
    ? { type: Ie.deferred, deferredData: a }
    : { type: Ie.data, data: a };
}
function sl(e, t, n) {
  let r = bs(e).toString(),
    l = { signal: t };
  if (n) {
    let { formMethod: i, formEncType: a, formData: s } = n;
    (l.method = i.toUpperCase()),
      (l.body = a === 'application/x-www-form-urlencoded' ? Wh(s) : s);
  }
  return new Request(r, l);
}
function Wh(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    j(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
    ),
      t.append(n, r);
  return t;
}
function k0(e, t, n, r, l) {
  let i = {},
    a = null,
    s,
    u = !1,
    c = {};
  return (
    n.forEach((d, p) => {
      let f = t[p].route.id;
      if (
        (j(!_r(d), 'Cannot handle redirect results in processLoaderData'),
        Pl(d))
      ) {
        let m = kr(e, f),
          x = d.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (a = Object.assign(a || {}, { [m.route.id]: x })),
          u || ((u = !0), (s = Uu(d.error) ? d.error.status : 500)),
          d.headers && (c[f] = d.headers);
      } else
        Vn(d)
          ? (l && l.set(f, d.deferredData), (i[f] = d.deferredData.data))
          : ((i[f] = d.data),
            d.statusCode != null &&
              d.statusCode !== 200 &&
              !u &&
              (s = d.statusCode),
            d.headers && (c[f] = d.headers));
    }),
    r && (a = r),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: c }
  );
}
function Bd(e, t, n, r, l, i, a, s) {
  let { loaderData: u, errors: c } = k0(t, n, r, l, s);
  for (let d = 0; d < i.length; d++) {
    let [p, , f] = i[d];
    j(
      a !== void 0 && a[d] !== void 0,
      'Did not find corresponding fetcher result',
    );
    let m = a[d];
    if (Pl(m)) {
      let x = kr(e.matches, f.route.id);
      (c && c[x.route.id]) || (c = ce({}, c, { [x.route.id]: m.error })),
        e.fetchers.delete(p);
    } else {
      if (_r(m)) throw new Error('Unhandled fetcher revalidation redirect');
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
function Po(e, t, n) {
  let r = ce({}, t);
  return (
    n.forEach((l) => {
      let i = l.route.id;
      t[i] === void 0 && e[i] !== void 0 && (r[i] = e[i]);
    }),
    r
  );
}
function kr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Hd(e) {
  let t = e.find((n) => n.index || n.path === '' || n.path === '/') || {
    id: '__shim-404-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
    error: new Vr(404, 'Not Found', null),
  };
}
function Vd(e) {
  let t = typeof e == 'string' ? e : ja(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + t + ']'),
    ),
    {
      type: Ie.error,
      error: new Vr(
        405,
        'Method Not Allowed',
        'No action found for [' + t + ']',
      ),
    }
  );
}
function Wd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (_r(n)) return n;
  }
}
function ja(e) {
  return (e.pathname || '') + (e.search || '');
}
function R0(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function Vn(e) {
  return e.type === Ie.deferred;
}
function Pl(e) {
  return e.type === Ie.error;
}
function _r(e) {
  return (e && e.type) === Ie.redirect;
}
async function Kd(e, t, n, r, l, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      u = t[a],
      c = e.find((p) => p.route.id === u.route.id),
      d = c != null && !Vh(c, u) && (i && i[u.route.id]) !== void 0;
    Vn(s) &&
      (l || d) &&
      (await Kh(s, r, l).then((p) => {
        p && (n[a] = p || n[a]);
      }));
  }
}
async function Kh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ie.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: Ie.error, error: l };
      }
    return { type: Ie.data, data: e.deferredData.data };
  }
}
function Qh(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Qd(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Gd(e, t) {
  let n = typeof t == 'string' ? Lt(t).search : t.search;
  return e[e.length - 1].route.index && !Qh(n || '')
    ? e.slice(-2)[0]
    : e.slice(-1)[0];
}
function bs(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    n = typeof e == 'string' ? e : ja(e);
  return new URL(n, t);
}
var Ua = { exports: {} },
  Ba = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D0 = h.exports,
  P0 = Symbol.for('react.element'),
  O0 = Symbol.for('react.fragment'),
  T0 = Object.prototype.hasOwnProperty,
  L0 = D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gh(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) T0.call(t, r) && !_0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: P0,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: L0.current,
  };
}
Ba.Fragment = O0;
Ba.jsx = Gh;
Ba.jsxs = Gh;
(function (e) {
  e.exports = Ba;
})(Ua);
const A = Ua.exports.Fragment,
  o = Ua.exports.jsx,
  E = Ua.exports.jsxs;
/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function va() {
  return (
    (va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    va.apply(this, arguments)
  );
}
function b0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const I0 = typeof Object.is == 'function' ? Object.is : b0,
  { useState: M0, useEffect: F0, useLayoutEffect: A0, useDebugValue: $0 } = jo;
function z0(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = M0({ inst: { value: r, getSnapshot: t } });
  return (
    A0(() => {
      (l.value = r), (l.getSnapshot = t), Oo(l) && i({ inst: l });
    }, [e, r, t]),
    F0(
      () => (
        Oo(l) && i({ inst: l }),
        e(() => {
          Oo(l) && i({ inst: l });
        })
      ),
      [e],
    ),
    $0(r),
    r
  );
}
function Oo(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !I0(n, r);
  } catch {
    return !0;
  }
}
function j0(e, t, n) {
  return t();
}
const U0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  B0 = !U0,
  H0 = B0 ? j0 : z0,
  V0 = 'useSyncExternalStore' in jo ? ((e) => e.useSyncExternalStore)(jo) : H0,
  Yh = h.exports.createContext(null),
  ti = h.exports.createContext(null),
  tr = h.exports.createContext(null),
  ga = h.exports.createContext(null),
  ni = h.exports.createContext(null),
  Wr = h.exports.createContext(null),
  yt = h.exports.createContext({ outlet: null, matches: [] }),
  Xh = h.exports.createContext(null);
function Jh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  In() || j(!1);
  let { basename: r, navigator: l } = h.exports.useContext(ni),
    { hash: i, pathname: a, search: s } = jr(e, { relative: n }),
    u = a;
  return (
    r !== '/' && (u = a === '/' ? r : Yt([r, a])),
    l.createHref({ pathname: u, search: s, hash: i })
  );
}
function In() {
  return h.exports.useContext(Wr) != null;
}
function on() {
  return In() || j(!1), h.exports.useContext(Wr).location;
}
function W0() {
  return h.exports.useContext(Wr).navigationType;
}
function Zh(e) {
  In() || j(!1);
  let { pathname: t } = on();
  return h.exports.useMemo(() => za(e, t), [t, e]);
}
function qh(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase),
  );
}
function Ve() {
  In() || j(!1);
  let { basename: e, navigator: t } = h.exports.useContext(ni),
    { matches: n } = h.exports.useContext(yt),
    { pathname: r } = on(),
    l = JSON.stringify(qh(n).map((s) => s.pathnameBase)),
    i = h.exports.useRef(!1);
  return (
    h.exports.useEffect(() => {
      i.current = !0;
    }),
    h.exports.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof s == 'number') {
          t.go(s);
          return;
        }
        let c = Bh(s, JSON.parse(l), r, u.relative === 'path');
        e !== '/' &&
          (c.pathname = c.pathname === '/' ? e : Yt([e, c.pathname])),
          (u.replace ? t.replace : t.push)(c, u.state, u);
      },
      [e, t, l, r],
    )
  );
}
const em = h.exports.createContext(null);
function K0() {
  return h.exports.useContext(em);
}
function tm(e) {
  let t = h.exports.useContext(yt).outlet;
  return t && o(em.Provider, { value: e, children: t });
}
function Kr() {
  let { matches: e } = h.exports.useContext(yt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function jr(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = h.exports.useContext(yt),
    { pathname: l } = on(),
    i = JSON.stringify(qh(r).map((a) => a.pathnameBase));
  return h.exports.useMemo(
    () => Bh(e, JSON.parse(i), l, n === 'path'),
    [e, i, l, n],
  );
}
function nm(e, t) {
  In() || j(!1);
  let n = h.exports.useContext(tr),
    { matches: r } = h.exports.useContext(yt),
    l = r[r.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : '/';
  l && l.route;
  let s = on(),
    u;
  if (t) {
    var c;
    let x = typeof t == 'string' ? Lt(t) : t;
    a === '/' || ((c = x.pathname) == null ? void 0 : c.startsWith(a)) || j(!1),
      (u = x);
  } else u = s;
  let d = u.pathname || '/',
    p = a === '/' ? d : d.slice(a.length) || '/',
    f = Cr(e, { pathname: p }),
    m = rm(
      f &&
        f.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, i, x.params),
            pathname: Yt([a, x.pathname]),
            pathnameBase: x.pathnameBase === '/' ? a : Yt([a, x.pathnameBase]),
          }),
        ),
      r,
      n || void 0,
    );
  return t
    ? o(Wr.Provider, {
        value: {
          location: va(
            {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
            },
            u,
          ),
          navigationType: oe.Pop,
        },
        children: m,
      })
    : m;
}
function Q0() {
  let e = am(),
    t = Uu(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: r },
    i = { padding: '2px 4px', backgroundColor: r };
  return E(A, {
    children: [
      o('h2', { children: 'Unhandled Thrown Error!' }),
      o('h3', { style: { fontStyle: 'italic' }, children: t }),
      n ? o('pre', { style: l, children: n }) : null,
      o('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
      E('p', {
        children: [
          'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
          o('code', { style: i, children: 'errorElement' }),
          ' props on\xA0',
          o('code', { style: i, children: '<Route>' }),
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
      ? o(Xh.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function Y0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = h.exports.useContext(Yh);
  return (
    l && n.route.errorElement && (l._deepestRenderedBoundaryId = n.route.id),
    o(yt.Provider, { value: t, children: r })
  );
}
function rm(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let i = r.findIndex(
      (a) => a.route.id && (l == null ? void 0 : l[a.route.id]),
    );
    i >= 0 || j(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, a, s) => {
    let u = a.route.id ? (l == null ? void 0 : l[a.route.id]) : null,
      c = n ? a.route.errorElement || o(Q0, {}) : null,
      d = () =>
        o(Y0, {
          match: a,
          routeContext: { outlet: i, matches: t.concat(r.slice(0, s + 1)) },
          children: u ? c : a.route.element !== void 0 ? a.route.element : i,
        });
    return n && (a.route.errorElement || s === 0)
      ? o(G0, { location: n.location, component: c, error: u, children: d() })
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
  let t = h.exports.useContext(ti);
  return t || j(!1), t;
}
function nr(e) {
  let t = h.exports.useContext(tr);
  return t || j(!1), t;
}
function lm() {
  return nr(rn.UseNavigation).navigation;
}
function J0() {
  let e = X0(Is.UseRevalidator),
    t = nr(rn.UseRevalidator);
  return { revalidate: e.router.revalidate, state: t.revalidation };
}
function im() {
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
    t = h.exports.useContext(yt);
  t || j(!1);
  let n = t.matches[t.matches.length - 1];
  return n.route.id || j(!1), e.loaderData[n.route.id];
}
function q0(e) {
  return nr(rn.UseRouteLoaderData).loaderData[e];
}
function ey() {
  let e = nr(rn.UseActionData);
  return (
    h.exports.useContext(yt) || j(!1),
    Object.values((e == null ? void 0 : e.actionData) || {})[0]
  );
}
function am() {
  var e;
  let t = h.exports.useContext(Xh),
    n = nr(rn.UseRouteError),
    r = h.exports.useContext(yt),
    l = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || j(!1),
    l.route.id || j(!1),
    (e = n.errors) == null ? void 0 : e[l.route.id])
  );
}
function om() {
  let e = h.exports.useContext(ga);
  return e == null ? void 0 : e._data;
}
function ty() {
  let e = h.exports.useContext(ga);
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
        go: (a) => n.navigate(a),
        push: (a, s, u) =>
          n.navigate(a, {
            state: s,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
        replace: (a, s, u) =>
          n.navigate(a, {
            replace: !0,
            state: s,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
      }),
      [n],
    ),
    i = n.basename || '/';
  return o(ti.Provider, {
    value: { router: n, navigator: l, static: !1, basename: i },
    children: o(tr.Provider, {
      value: r,
      children: o(Qr, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: l,
        children: n.state.initialized ? o(Hu, {}) : t,
      }),
    }),
  });
}
function ry(e) {
  let { basename: t, children: n, initialEntries: r, initialIndex: l } = e,
    i = h.exports.useRef();
  i.current == null &&
    (i.current = _h({ initialEntries: r, initialIndex: l, v5Compat: !0 }));
  let a = i.current,
    [s, u] = h.exports.useState({ action: a.action, location: a.location });
  return (
    h.exports.useLayoutEffect(() => a.listen(u), [a]),
    o(Qr, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
    })
  );
}
function it(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  In() || j(!1);
  let i = h.exports.useContext(tr),
    a = Ve();
  return (
    h.exports.useEffect(() => {
      (i && i.navigation.state !== 'idle') ||
        a(t, { replace: n, state: r, relative: l });
    }),
    null
  );
}
function ly(e) {
  return tm(e.context);
}
function Ce(e) {
  j(!1);
}
function Qr(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = oe.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  In() && j(!1);
  let s = t.replace(/^\/*/, '/'),
    u = h.exports.useMemo(
      () => ({ basename: s, navigator: i, static: a }),
      [s, i, a],
    );
  typeof r == 'string' && (r = Lt(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: f = null,
      key: m = 'default',
    } = r,
    x = h.exports.useMemo(() => {
      let y = zh(c, s);
      return y == null
        ? null
        : { pathname: y, search: d, hash: p, state: f, key: m };
    }, [s, c, d, p, f, m]);
  return x == null
    ? null
    : o(ni.Provider, {
        value: u,
        children: o(Wr.Provider, {
          children: n,
          value: { location: x, navigationType: l },
        }),
      });
}
function Hu(e) {
  let { children: t, location: n } = e,
    r = h.exports.useContext(ti),
    l = r && !t ? r.router.routes : Kl(t);
  return nm(l, n);
}
function iy(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return o(oy, {
    resolve: r,
    errorElement: n,
    children: o(sy, { children: t }),
  });
}
var et;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(et || (et = {}));
const ay = new Promise(() => {});
class oy extends h.exports.Component {
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
      i = et.pending;
    if (!(r instanceof Promise))
      (i = et.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_data', { get: () => r });
    else if (this.state.error) {
      i = et.error;
      let a = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', { get: () => !0 }),
        Object.defineProperty(l, '_error', { get: () => a });
    } else
      r._tracked
        ? ((l = r),
          (i =
            l._error !== void 0
              ? et.error
              : l._data !== void 0
              ? et.success
              : et.pending))
        : ((i = et.pending),
          Object.defineProperty(r, '_tracked', { get: () => !0 }),
          (l = r.then(
            (a) => Object.defineProperty(r, '_data', { get: () => a }),
            (a) => Object.defineProperty(r, '_error', { get: () => a }),
          )));
    if (i === et.error && l._error instanceof ma) throw ay;
    if (i === et.error && !n) throw l._error;
    if (i === et.error) return o(ga.Provider, { value: l, children: n });
    if (i === et.success) return o(ga.Provider, { value: l, children: t });
    throw l;
  }
}
function sy(e) {
  let { children: t } = e,
    n = om();
  return typeof t == 'function' ? t(n) : o(A, { children: t });
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
      r.type !== Ce && j(!1), !r.props.index || !r.props.children || j(!1);
      let i = [...t, l],
        a = {
          id: r.props.id || i.join('-'),
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
      r.props.children && (a.children = Kl(r.props.children, i)), n.push(a);
    }),
    n
  );
}
function uy(e) {
  return rm(e);
}
function ri(e) {
  return e.map((t) => {
    let n = va({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = ri(n.children)),
      n
    );
  });
}
function cy(e, t) {
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: _h({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: ri(e),
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
 */ function ya() {
  return (
    (ya = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ya.apply(this, arguments)
  );
}
function Vu(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Bi = 'get',
  To = 'application/x-www-form-urlencoded';
function Ha(e) {
  return e != null && typeof e.tagName == 'string';
}
function dy(e) {
  return Ha(e) && e.tagName.toLowerCase() === 'button';
}
function fy(e) {
  return Ha(e) && e.tagName.toLowerCase() === 'form';
}
function py(e) {
  return Ha(e) && e.tagName.toLowerCase() === 'input';
}
function hy(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function my(e, t) {
  return e.button === 0 && (!t || t === '_self') && !hy(e);
}
function xa(e) {
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
  let n = xa(e);
  for (let r of t.keys())
    n.has(r) ||
      t.getAll(r).forEach((l) => {
        n.append(r, l);
      });
  return n;
}
function gy(e, t, n) {
  let r, l, i, a;
  if (fy(e)) {
    let d = n.submissionTrigger;
    (r = n.method || e.getAttribute('method') || Bi),
      (l = n.action || e.getAttribute('action') || t),
      (i = n.encType || e.getAttribute('enctype') || To),
      (a = new FormData(e)),
      d && d.name && a.append(d.name, d.value);
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
      Bi),
      (l =
        n.action ||
        e.getAttribute('formaction') ||
        d.getAttribute('action') ||
        t),
      (i =
        n.encType ||
        e.getAttribute('formenctype') ||
        d.getAttribute('enctype') ||
        To),
      (a = new FormData(d)),
      e.name && a.append(e.name, e.value);
  } else {
    if (Ha(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    if (
      ((r = n.method || Bi),
      (l = n.action || t),
      (i = n.encType || To),
      e instanceof FormData)
    )
      a = e;
    else if (((a = new FormData()), e instanceof URLSearchParams))
      for (let [d, p] of e) a.append(d, p);
    else if (e != null) for (let d of Object.keys(e)) a.append(d, e[d]);
  }
  let { protocol: s, host: u } = window.location;
  return { url: new URL(l, s + '//' + u), method: r, encType: i, formData: a };
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
function Ny(e, t) {
  var n;
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: bh({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: ri(e),
  }).initialize();
}
function wy(e, t) {
  var n;
  return Bu({
    basename: t == null ? void 0 : t.basename,
    history: Ih({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: ri(e),
  }).initialize();
}
function sm(e) {
  let { basename: t, children: n, window: r } = e,
    l = h.exports.useRef();
  l.current == null && (l.current = bh({ window: r, v5Compat: !0 }));
  let i = l.current,
    [a, s] = h.exports.useState({ action: i.action, location: i.location });
  return (
    h.exports.useLayoutEffect(() => i.listen(s), [i]),
    o(Qr, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function Sy(e) {
  let { basename: t, children: n, window: r } = e,
    l = h.exports.useRef();
  l.current == null && (l.current = Ih({ window: r, v5Compat: !0 }));
  let i = l.current,
    [a, s] = h.exports.useState({ action: i.action, location: i.location });
  return (
    h.exports.useLayoutEffect(() => i.listen(s), [i]),
    o(Qr, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
function Cy(e) {
  let { basename: t, children: n, history: r } = e;
  const [l, i] = h.exports.useState({ action: r.action, location: r.location });
  return (
    h.exports.useLayoutEffect(() => r.listen(i), [r]),
    o(Qr, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: r,
    })
  );
}
const Ne = h.exports.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: a,
        state: s,
        target: u,
        to: c,
        preventScrollReset: d,
      } = t,
      p = Vu(t, yy),
      f = Jh(c, { relative: l }),
      m = dm(c, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: d,
        relative: l,
      });
    function x(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return o('a', { ...p, href: f, onClick: i ? r : x, ref: n, target: u });
  }),
  Wu = h.exports.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: i = '',
        end: a = !1,
        style: s,
        to: u,
        children: c,
      } = t,
      d = Vu(t, xy),
      p = jr(u),
      f = Zh({ path: p.pathname, end: a, caseSensitive: l }),
      m = h.exports.useContext(tr),
      x = m == null ? void 0 : m.navigation.location,
      y = jr(x || ''),
      v =
        h.exports.useMemo(
          () =>
            x
              ? za({ path: p.pathname, end: a, caseSensitive: l }, y.pathname)
              : null,
          [x, p.pathname, l, a, y.pathname],
        ) != null,
      g = f != null,
      N = g ? r : void 0,
      w;
    typeof i == 'function'
      ? (w = i({ isActive: g, isPending: v }))
      : (w = [i, g ? 'active' : null, v ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let R = typeof s == 'function' ? s({ isActive: g, isPending: v }) : s;
    return o(Ne, {
      ...d,
      'aria-current': N,
      className: w,
      ref: n,
      style: R,
      to: u,
      children: typeof c == 'function' ? c({ isActive: g, isPending: v }) : c,
    });
  }),
  ky = h.exports.forwardRef((e, t) => o(um, { ...e, ref: t })),
  um = h.exports.forwardRef((e, t) => {
    let {
        reloadDocument: n,
        replace: r,
        method: l = Bi,
        action: i,
        onSubmit: a,
        fetcherKey: s,
        routeId: u,
        relative: c,
      } = e,
      d = Vu(e, Ey),
      p = Qu(s, u),
      f = l.toLowerCase() === 'get' ? 'get' : 'post',
      m = Gu(i, { relative: c });
    return o('form', {
      ref: t,
      method: f,
      action: m,
      onSubmit: n
        ? a
        : (y) => {
            if ((a && a(y), y.defaultPrevented)) return;
            y.preventDefault();
            let S = y.nativeEvent.submitter;
            p(S || y.currentTarget, { method: l, replace: r, relative: c });
          },
      ...d,
    });
  });
function Ry(e) {
  let { getKey: t, storageKey: n } = e;
  return by({ getKey: t, storageKey: n }), null;
}
var Ql;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Ql || (Ql = {}));
var Ea;
(function (e) {
  (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Ea || (Ea = {}));
function Ku(e) {
  let t = h.exports.useContext(ti);
  return t || j(!1), t;
}
function cm(e) {
  let t = h.exports.useContext(tr);
  return t || j(!1), t;
}
function dm(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: a,
    } = t === void 0 ? {} : t,
    s = Ve(),
    u = on(),
    c = jr(e, { relative: a });
  return h.exports.useCallback(
    (d) => {
      if (my(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : nn(u) === nn(c);
        s(e, { replace: p, state: l, preventScrollReset: i, relative: a });
      }
    },
    [u, s, c, r, l, n, e, i, a],
  );
}
function Dy(e) {
  let t = h.exports.useRef(xa(e)),
    n = on(),
    r = h.exports.useMemo(() => vy(n.search, t.current), [n.search]),
    l = Ve(),
    i = h.exports.useCallback(
      (a, s) => {
        const u = xa(typeof a == 'function' ? a(r) : a);
        l('?' + u, s);
      },
      [l, r],
    );
  return [r, i];
}
function Py() {
  return Qu();
}
function Qu(e, t) {
  let { router: n } = Ku(Ql.UseSubmitImpl),
    r = Gu();
  return h.exports.useCallback(
    function (l, i) {
      if ((i === void 0 && (i = {}), typeof document > 'u'))
        throw new Error(
          'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.',
        );
      let { method: a, encType: s, formData: u, url: c } = gy(l, r, i),
        d = c.pathname + c.search,
        p = { replace: i.replace, formData: u, formMethod: a, formEncType: s };
      e ? (t == null && j(!1), n.fetch(e, t, d, p)) : n.navigate(d, p);
    },
    [r, n, e, t],
  );
}
function Gu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = h.exports.useContext(ni),
    l = h.exports.useContext(yt);
  l || j(!1);
  let [i] = l.matches.slice(-1),
    a = e != null ? e : '.',
    s = ya({}, jr(a, { relative: n })),
    u = on();
  if (e == null && ((s.search = u.search), (s.hash = u.hash), i.route.index)) {
    let c = new URLSearchParams(s.search);
    c.delete('index'), (s.search = c.toString() ? '?' + c.toString() : '');
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (s.pathname = s.pathname === '/' ? r : Yt([r, s.pathname])),
    nn(s)
  );
}
function Oy(e, t) {
  return h.exports.forwardRef((r, l) =>
    o(um, { ...r, ref: l, fetcherKey: e, routeId: t }),
  );
}
let Ty = 0;
function Ly() {
  var e;
  let { router: t } = Ku(Ql.UseFetcher),
    n = h.exports.useContext(yt);
  n || j(!1);
  let r = (e = n.matches[n.matches.length - 1]) == null ? void 0 : e.route.id;
  r == null && j(!1);
  let [l] = h.exports.useState(() => String(++Ty)),
    [i] = h.exports.useState(() => (r || j(!1), Oy(l, r))),
    [a] = h.exports.useState(() => (d) => {
      t || j(!1), r || j(!1), t.fetch(l, r, d);
    }),
    s = Qu(l, r),
    u = t.getFetcher(l),
    c = h.exports.useMemo(
      () => ya({ Form: i, submit: s, load: a }, u),
      [u, i, s, a],
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
  return [...cm(Ea.UseFetchers).fetchers.values()];
}
const Yd = 'react-router-scroll-positions';
let Di = {};
function by(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = Ku(Ql.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: i } = cm(
      Ea.UseScrollRestoration,
    ),
    a = on(),
    s = im(),
    u = lm();
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
          let c = (t ? t(a, s) : null) || a.key;
          Di[c] = window.scrollY;
        }
        sessionStorage.setItem(n || Yd, JSON.stringify(Di)),
          (window.history.scrollRestoration = 'auto');
      }, [n, t, u.state, a, s]),
    ),
    h.exports.useLayoutEffect(() => {
      try {
        let c = sessionStorage.getItem(n || Yd);
        c && (Di = JSON.parse(c));
      } catch {}
    }, [n]),
    h.exports.useLayoutEffect(() => {
      let c =
        r == null
          ? void 0
          : r.enableScrollRestoration(Di, () => window.scrollY, t);
      return () => c && c();
    }, [r, t]),
    h.exports.useLayoutEffect(() => {
      if (l !== !1) {
        if (typeof l == 'number') {
          window.scrollTo(0, l);
          return;
        }
        if (a.hash) {
          let c = document.getElementById(a.hash.slice(1));
          if (c) {
            c.scrollIntoView();
            return;
          }
        }
        i !== !0 && window.scrollTo(0, 0);
      }
    }, [a, l, i]);
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
const My = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      BrowserRouter: sm,
      Form: ky,
      HashRouter: Sy,
      Link: Ne,
      NavLink: Wu,
      ScrollRestoration: Ry,
      createBrowserRouter: Ny,
      createHashRouter: wy,
      createSearchParams: xa,
      unstable_HistoryRouter: Cy,
      useFetcher: Ly,
      useFetchers: _y,
      useFormAction: Gu,
      useLinkClickHandler: dm,
      useSearchParams: Dy,
      useSubmit: Py,
      AbortedDeferredError: ma,
      Await: iy,
      MemoryRouter: ry,
      Navigate: it,
      get NavigationType() {
        return oe;
      },
      Outlet: ly,
      Route: Ce,
      Router: Qr,
      RouterProvider: ny,
      Routes: Hu,
      UNSAFE_DataRouterContext: ti,
      UNSAFE_DataRouterStateContext: tr,
      UNSAFE_DataStaticRouterContext: Yh,
      UNSAFE_LocationContext: Wr,
      UNSAFE_NavigationContext: ni,
      UNSAFE_RouteContext: yt,
      UNSAFE_enhanceManualRouteObjects: ri,
      createMemoryRouter: cy,
      createPath: nn,
      createRoutesFromChildren: Kl,
      createRoutesFromElements: Kl,
      defer: E0,
      generatePath: c0,
      isRouteErrorResponse: Uu,
      json: g0,
      matchPath: za,
      matchRoutes: Cr,
      parsePath: Lt,
      redirect: N0,
      renderMatches: uy,
      resolvePath: Uh,
      useActionData: ey,
      useAsyncError: ty,
      useAsyncValue: om,
      useHref: Jh,
      useInRouterContext: In,
      useLoaderData: Z0,
      useLocation: on,
      useMatch: Zh,
      useMatches: im,
      useNavigate: Ve,
      useNavigation: lm,
      useNavigationType: W0,
      useOutlet: tm,
      useOutletContext: K0,
      useParams: Kr,
      useResolvedPath: jr,
      useRevalidator: J0,
      useRouteError: am,
      useRouteLoaderData: q0,
      useRoutes: nm,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
var fm = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var i = arguments[l];
        if (!!i) {
          var a = typeof i;
          if (a === 'string' || a === 'number') r.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i);
              s && r.push(s);
            }
          } else if (a === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              r.push(i.toString());
              continue;
            }
            for (var u in i) t.call(i, u) && i[u] && r.push(u);
          }
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(fm);
const Y = fm.exports;
function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
function pm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Xd(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function Fy(e) {
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
    i = l[0],
    a = l[1],
    s = e !== void 0,
    u = r.current;
  return (
    (r.current = s),
    !s && u && i !== t && a(t),
    [
      s ? e : i,
      h.exports.useCallback(
        function (c) {
          for (
            var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), f = 1;
            f < d;
            f++
          )
            p[f - 1] = arguments[f];
          n && n.apply(void 0, [c].concat(p)), a(c);
        },
        [n],
      ),
    ]
  );
}
function hm(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      i = n,
      a = i[Xd(r)],
      s = i[r],
      u = pm(i, [Xd(r), r].map(Fy)),
      c = t[r],
      d = $y(s, a, e[c]),
      p = d[0],
      f = d[1];
    return Ms({}, u, ((l = {}), (l[r] = p), (l[c] = f), l));
  }, e);
}
function Fs(e, t) {
  return (
    (Fs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    Fs(e, t)
  );
}
function zy(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Fs(e, t);
}
const jy = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  Uy = 'xs',
  Yu = h.exports.createContext({
    prefixes: {},
    breakpoints: jy,
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
function Pi(e) {
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
    return e.style.getPropertyValue(Pi(t)) || Wy(e).getPropertyValue(Pi(t));
  Object.keys(t).forEach(function (l) {
    var i = t[l];
    !i && i !== 0
      ? e.style.removeProperty(Pi(l))
      : Xy(l)
      ? (r += l + '(' + i + ') ')
      : (n += Pi(l) + ': ' + i + ';');
  }),
    r && (n += 'transform: ' + r + ';'),
    (e.style.cssText += ';' + n);
}
var Fe = { exports: {} },
  Jy = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Zy = Jy,
  qy = Zy;
function mm() {}
function vm() {}
vm.resetWarningCache = mm;
var ex = function () {
  function e(r, l, i, a, s, u) {
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
    checkPropTypes: vm,
    resetWarningCache: mm,
  };
  return (n.PropTypes = n), n;
};
Fe.exports = ex();
const Jd = { disabled: !1 },
  gm = je.createContext(null);
var tx = function (t) {
    return t.scrollTop;
  },
  vl = 'unmounted',
  mn = 'exited',
  Dt = 'entering',
  Vt = 'entered',
  Gl = 'exiting',
  sn = (function (e) {
    zy(t, e);
    function t(r, l) {
      var i;
      i = e.call(this, r, l) || this;
      var a = l,
        s = a && !a.isMounting ? r.enter : r.appear,
        u;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((u = mn), (i.appearStatus = Dt))
            : (u = Vt)
          : r.unmountOnExit || r.mountOnEnter
          ? (u = vl)
          : (u = mn),
        (i.state = { status: u }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (l, i) {
      var a = l.in;
      return a && i.status === vl ? { status: mn } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var i = null;
        if (l !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Dt && a !== Vt && (i = Dt)
            : (a === Dt || a === Vt) && (i = Gl);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = l),
          l != null &&
            typeof l != 'number' &&
            ((i = l.exit),
            (a = l.enter),
            (s = l.appear !== void 0 ? l.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (n.updateStatus = function (l, i) {
        if ((l === void 0 && (l = !1), i !== null))
          if ((this.cancelNextCallback(), i === Dt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Sr.findDOMNode(this);
              a && tx(a);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === mn &&
            this.setState({ status: vl });
      }),
      (n.performEnter = function (l) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : l,
          u = this.props.nodeRef ? [s] : [Sr.findDOMNode(this), s],
          c = u[0],
          d = u[1],
          p = this.getTimeouts(),
          f = s ? p.appear : p.enter;
        if ((!l && !a) || Jd.disabled) {
          this.safeSetState({ status: Vt }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, d),
          this.safeSetState({ status: Dt }, function () {
            i.props.onEntering(c, d),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: Vt }, function () {
                  i.props.onEntered(c, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Sr.findDOMNode(this);
        if (!i || Jd.disabled) {
          this.safeSetState({ status: mn }, function () {
            l.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Gl }, function () {
            l.props.onExiting(s),
              l.onTransitionEnd(a.exit, function () {
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
      (n.safeSetState = function (l, i) {
        (i = this.setNextCallback(i)), this.setState(l, i);
      }),
      (n.setNextCallback = function (l) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), l(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Sr.findDOMNode(this),
          s = l == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var u = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            c = u[0],
            d = u[1];
          this.props.addEndListener(c, d);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === vl) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = pm(i, [
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
        return o(gm.Provider, {
          value: null,
          children:
            typeof a == 'function'
              ? a(l, s)
              : je.cloneElement(je.Children.only(a), s),
        });
      }),
      t
    );
  })(je.Component);
sn.contextType = gm;
sn.propTypes = {};
function or() {}
sn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: or,
  onEntering: or,
  onEntered: or,
  onExit: or,
  onExiting: or,
  onExited: or,
};
sn.UNMOUNTED = vl;
sn.EXITED = mn;
sn.ENTERING = Dt;
sn.ENTERED = Vt;
sn.EXITING = Gl;
const Va = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
var As = !1,
  $s = !1;
try {
  var Lo = {
    get passive() {
      return (As = !0);
    },
    get once() {
      return ($s = As = !0);
    },
  };
  Va &&
    (window.addEventListener('test', Lo, Lo),
    window.removeEventListener('test', Lo, !0));
} catch {}
function nx(e, t, n, r) {
  if (r && typeof r != 'boolean' && !$s) {
    var l = r.once,
      i = r.capture,
      a = n;
    !$s &&
      l &&
      ((a =
        n.__once ||
        function s(u) {
          this.removeEventListener(t, s, i), n.call(this, u);
        }),
      (n.__once = a)),
      e.addEventListener(t, a, As ? r : i);
  }
  e.addEventListener(t, n, r);
}
function rx(e, t, n, r) {
  var l = r && typeof r != 'boolean' ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function Na(e, t, n, r) {
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
function ix(e) {
  var t = Xt(e, 'transitionDuration') || '',
    n = t.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function ax(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || lx(e, 'transitionend', !0);
    }, t + n),
    i = Na(
      e,
      'transitionend',
      function () {
        r = !0;
      },
      { once: !0 },
    );
  return function () {
    clearTimeout(l), i();
  };
}
function ox(e, t, n, r) {
  n == null && (n = ix(e) || 0);
  var l = ax(e, n, r),
    i = Na(e, 'transitionend', t);
  return function () {
    l(), i();
  };
}
function Zd(e, t) {
  const n = Xt(e, t) || '',
    r = n.indexOf('ms') === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function Ju(e, t) {
  const n = Zd(e, 'transitionDuration'),
    r = Zd(e, 'transitionDelay'),
    l = ox(
      e,
      (i) => {
        i.target === e && (l(), t(i));
      },
      n + r,
    );
}
function ul(...e) {
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
function ym(e) {
  e.offsetHeight;
}
var qd = function (t) {
  return !t || typeof t == 'function'
    ? t
    : function (n) {
        t.current = n;
      };
};
function sx(e, t) {
  var n = qd(e),
    r = qd(t);
  return function (l) {
    n && n(l), r && r(l);
  };
}
function xm(e, t) {
  return h.exports.useMemo(
    function () {
      return sx(e, t);
    },
    [e, t],
  );
}
function ux(e) {
  return e && 'setState' in e ? Sr.findDOMNode(e) : e != null ? e : null;
}
const cx = je.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: i,
        addEndListener: a,
        children: s,
        childRef: u,
        ...c
      },
      d,
    ) => {
      const p = h.exports.useRef(null),
        f = xm(p, u),
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
        N = h.exports.useCallback(x(l), [l]),
        w = h.exports.useCallback(x(i), [i]),
        R = h.exports.useCallback(x(a), [a]);
      return o(sn, {
        ref: d,
        ...c,
        onEnter: y,
        onEntered: v,
        onEntering: S,
        onExit: g,
        onExited: w,
        onExiting: N,
        addEndListener: R,
        nodeRef: p,
        children:
          typeof s == 'function'
            ? (T, O) => s(T, { ...O, ref: m })
            : je.cloneElement(s, { ref: m }),
      });
    },
  ),
  Zu = cx,
  dx = {
    height: ['marginTop', 'marginBottom'],
    width: ['marginLeft', 'marginRight'],
  };
function Em(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    l = dx[e];
  return r + parseInt(Xt(t, l[0]), 10) + parseInt(Xt(t, l[1]), 10);
}
const fx = {
    [mn]: 'collapse',
    [Gl]: 'collapsing',
    [Dt]: 'collapsing',
    [Vt]: 'collapse show',
  },
  px = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    getDimensionValue: Em,
  },
  Nm = je.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        className: i,
        children: a,
        dimension: s = 'height',
        getDimensionValue: u = Em,
        ...c
      },
      d,
    ) => {
      const p = typeof s == 'function' ? s() : s,
        f = h.exports.useMemo(
          () =>
            ul((v) => {
              v.style[p] = '0';
            }, e),
          [p, e],
        ),
        m = h.exports.useMemo(
          () =>
            ul((v) => {
              const g = `scroll${p[0].toUpperCase()}${p.slice(1)}`;
              v.style[p] = `${v[g]}px`;
            }, t),
          [p, t],
        ),
        x = h.exports.useMemo(
          () =>
            ul((v) => {
              v.style[p] = null;
            }, n),
          [p, n],
        ),
        y = h.exports.useMemo(
          () =>
            ul((v) => {
              (v.style[p] = `${u(p, v)}px`), ym(v);
            }, r),
          [r, u, p],
        ),
        S = h.exports.useMemo(
          () =>
            ul((v) => {
              v.style[p] = null;
            }, l),
          [p, l],
        );
      return o(Zu, {
        ref: d,
        addEndListener: Ju,
        ...c,
        'aria-expanded': c.role ? c.in : null,
        onEnter: f,
        onEntering: m,
        onEntered: x,
        onExit: y,
        onExiting: S,
        childRef: a.ref,
        children: (v, g) =>
          je.cloneElement(a, {
            ...g,
            className: Y(
              i,
              a.props.className,
              fx[v],
              p === 'width' && 'collapse-horizontal',
            ),
          }),
      });
    },
  );
Nm.defaultProps = px;
const hx = Nm;
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
function Ft(e) {
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
  Nx = ['as', 'disabled'];
function wx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
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
  role: i,
  onClick: a,
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
      a == null || a(f);
    },
    p = (f) => {
      f.key === ' ' && (f.preventDefault(), d(f));
    };
  return (
    e === 'a' && (n || (n = '#'), t && (n = void 0)),
    [
      {
        role: i != null ? i : 'button',
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
const Sm = h.exports.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = wx(e, Nx);
  const [i, { tagName: a }] = wm(Object.assign({ tagName: n, disabled: r }, l));
  return o(a, Object.assign({}, l, i, { ref: t }));
});
Sm.displayName = 'Button';
const Cx = ['onKeyDown'];
function kx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Rx(e) {
  return !e || e.trim() === '#';
}
const Cm = h.exports.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = kx(e, Cx);
  const [l] = wm(Object.assign({ tagName: 'a' }, r)),
    i = Ft((a) => {
      l.onKeyDown(a), n == null || n(a);
    });
  return Rx(r.href) || r.role === 'button'
    ? o('a', Object.assign({ ref: t }, r, l, { onKeyDown: i }))
    : o('a', Object.assign({ ref: t }, r, { onKeyDown: n }));
});
Cm.displayName = 'Anchor';
const Dx = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
  },
  Px = { [Dt]: 'show', [Vt]: 'show' },
  qu = h.exports.forwardRef(
    ({ className: e, children: t, transitionClasses: n = {}, ...r }, l) => {
      const i = h.exports.useCallback(
        (a, s) => {
          ym(a), r.onEnter == null || r.onEnter(a, s);
        },
        [r],
      );
      return o(Zu, {
        ref: l,
        addEndListener: Ju,
        ...r,
        onEnter: i,
        childRef: t.ref,
        children: (a, s) =>
          h.exports.cloneElement(t, {
            ...s,
            className: Y('fade', e, t.props.className, Px[a], n[a]),
          }),
      });
    },
  );
qu.defaultProps = Dx;
qu.displayName = 'Fade';
const Ox = qu,
  Tx = {
    'aria-label': Fe.exports.string,
    onClick: Fe.exports.func,
    variant: Fe.exports.oneOf(['white']),
  },
  Lx = { 'aria-label': 'Close' },
  Wa = h.exports.forwardRef(({ className: e, variant: t, ...n }, r) =>
    o('button', {
      ref: r,
      type: 'button',
      className: Y('btn-close', t && `btn-close-${t}`, e),
      ...n,
    }),
  );
Wa.displayName = 'CloseButton';
Wa.propTypes = Tx;
Wa.defaultProps = Lx;
const _x = Wa,
  ec = (e) =>
    h.exports.forwardRef((t, n) =>
      o('div', { ...t, ref: n, className: Y(t.className, e) }),
    );
var bx = /-(.)/g;
function Ix(e) {
  return e.replace(bx, function (t, n) {
    return n.toUpperCase();
  });
}
const Mx = (e) => e[0].toUpperCase() + Ix(e).slice(1);
function xt(e, { displayName: t = Mx(e), Component: n, defaultProps: r } = {}) {
  const l = h.exports.forwardRef(
    ({ className: i, bsPrefix: a, as: s = n || 'div', ...u }, c) => {
      const d = le(a, e);
      return o(s, { ref: c, className: Y(i, d), ...u });
    },
  );
  return (l.defaultProps = r), (l.displayName = t), l;
}
const km = h.exports.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = 'img', ...l }, i) => {
    const a = le(e, 'card-img');
    return o(r, { ref: i, className: Y(n ? `${a}-${n}` : a, t), ...l });
  },
);
km.displayName = 'CardImg';
const Fx = km,
  Rm = h.exports.createContext(null);
Rm.displayName = 'CardHeaderContext';
const Dm = Rm,
  Pm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'div', ...r }, l) => {
      const i = le(e, 'card-header'),
        a = h.exports.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
      return o(Dm.Provider, {
        value: a,
        children: o(n, { ref: l, ...r, className: Y(t, i) }),
      });
    },
  );
Pm.displayName = 'CardHeader';
const Ax = Pm,
  $x = ec('h5'),
  zx = ec('h6'),
  Om = xt('card-body'),
  jx = xt('card-title', { Component: $x }),
  Ux = xt('card-subtitle', { Component: zx }),
  Bx = xt('card-link', { Component: 'a' }),
  Hx = xt('card-text', { Component: 'p' }),
  Vx = xt('card-footer'),
  Wx = xt('card-img-overlay'),
  Kx = { body: !1 },
  tc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        bg: n,
        text: r,
        border: l,
        body: i,
        children: a,
        as: s = 'div',
        ...u
      },
      c,
    ) => {
      const d = le(e, 'card');
      return o(s, {
        ref: c,
        ...u,
        className: Y(
          t,
          d,
          n && `bg-${n}`,
          r && `text-${r}`,
          l && `border-${l}`,
        ),
        children: i ? o(Om, { children: a }) : a,
      });
    },
  );
tc.displayName = 'Card';
tc.defaultProps = Kx;
const Oi = Object.assign(tc, {
  Img: Fx,
  Title: jx,
  Subtitle: Ux,
  Body: Om,
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
    i = Hy(),
    a = [],
    s = [];
  return (
    l.forEach((u) => {
      const c = r[u];
      delete r[u];
      let d, p, f;
      typeof c == 'object' && c != null
        ? ({ span: d, offset: p, order: f } = c)
        : (d = c);
      const m = u !== i ? `-${u}` : '';
      d && a.push(d === !0 ? `${t}${m}` : `${t}${m}-${d}`),
        f != null && s.push(`order${m}-${f}`),
        p != null && s.push(`offset${m}-${p}`);
    }),
    [
      { ...r, className: Y(n, ...a, ...s) },
      { as: e, bsPrefix: t, spans: a },
    ]
  );
}
const Tm = h.exports.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = 'div', bsPrefix: i, spans: a }] =
    Xx(e);
  return o(l, { ...r, ref: t, className: Y(n, !a.length && i) });
});
Tm.displayName = 'Col';
const Jx = Tm;
var Zx = Function.prototype.bind.call(Function.prototype.call, [].slice);
function jn(e, t) {
  return Zx(e.querySelectorAll(t));
}
function qx() {
  var e = h.exports.useReducer(function (n) {
      return !n;
    }, !1),
    t = e[1];
  return t;
}
function ef(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const wa = h.exports.createContext(null),
  nc = (e, t = null) => (e != null ? String(e) : t || null),
  rc = h.exports.createContext(null);
rc.displayName = 'NavContext';
const eE = 'data-rr-ui-',
  tE = 'rrUi';
function Ka(e) {
  return `${eE}${e}`;
}
function nE(e) {
  return `${tE}${e}`;
}
const Lm = h.exports.createContext(Va ? window : void 0);
Lm.Provider;
function _m() {
  return h.exports.useContext(Lm);
}
const bm = h.exports.createContext(null);
bm.displayName = 'NavbarContext';
const Gr = bm,
  rE = {
    type: Fe.exports.string,
    tooltip: Fe.exports.bool,
    as: Fe.exports.elementType,
  },
  lc = h.exports.forwardRef(
    (
      { as: e = 'div', className: t, type: n = 'valid', tooltip: r = !1, ...l },
      i,
    ) =>
      o(e, {
        ...l,
        ref: i,
        className: Y(t, `${n}-${r ? 'tooltip' : 'feedback'}`),
      }),
  );
lc.displayName = 'Feedback';
lc.propTypes = rE;
const Im = lc,
  lE = h.exports.createContext({}),
  ln = lE,
  Mm = h.exports.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = 'checkbox',
        isValid: l = !1,
        isInvalid: i = !1,
        as: a = 'input',
        ...s
      },
      u,
    ) => {
      const { controlId: c } = h.exports.useContext(ln);
      return (
        (t = le(t, 'form-check-input')),
        o(a, {
          ...s,
          ref: u,
          type: r,
          id: e || c,
          className: Y(n, t, l && 'is-valid', i && 'is-invalid'),
        })
      );
    },
  );
Mm.displayName = 'FormCheckInput';
const Fm = Mm,
  Am = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, htmlFor: n, ...r }, l) => {
      const { controlId: i } = h.exports.useContext(ln);
      return (
        (e = le(e, 'form-check-label')),
        o('label', { ...r, ref: l, htmlFor: n || i, className: Y(t, e) })
      );
    },
  );
Am.displayName = 'FormCheckLabel';
const zs = Am,
  $m = h.exports.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        bsSwitchPrefix: n,
        inline: r = !1,
        reverse: l = !1,
        disabled: i = !1,
        isValid: a = !1,
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
      N,
    ) => {
      (t = le(t, 'form-check')), (n = le(n, 'form-switch'));
      const { controlId: w } = h.exports.useContext(ln),
        R = h.exports.useMemo(() => ({ controlId: e || w }), [w, e]),
        T = (!S && y != null && y !== !1) || Yx(S, zs),
        O = o(Fm, {
          ...g,
          type: x === 'switch' ? 'checkbox' : x,
          ref: N,
          isValid: a,
          isInvalid: s,
          disabled: i,
          as: v,
        });
      return o(ln.Provider, {
        value: R,
        children: o('div', {
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
            E(A, {
              children: [
                O,
                T && o(zs, { title: m, children: y }),
                c && o(Im, { type: d, tooltip: u, children: c }),
              ],
            }),
        }),
      });
    },
  );
$m.displayName = 'FormCheck';
const Sa = Object.assign($m, { Input: Fm, Label: zs }),
  zm = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        type: t,
        size: n,
        htmlSize: r,
        id: l,
        className: i,
        isValid: a = !1,
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
        o(d, {
          ...p,
          type: t,
          size: r,
          ref: f,
          readOnly: c,
          id: l || m,
          className: Y(
            i,
            x,
            a && 'is-valid',
            s && 'is-invalid',
            t === 'color' && `${e}-color`,
          ),
        })
      );
    },
  );
zm.displayName = 'FormControl';
const iE = Object.assign(zm, { Feedback: Im }),
  aE = xt('form-floating'),
  jm = h.exports.forwardRef(({ controlId: e, as: t = 'div', ...n }, r) => {
    const l = h.exports.useMemo(() => ({ controlId: e }), [e]);
    return o(ln.Provider, { value: l, children: o(t, { ...n, ref: r }) });
  });
jm.displayName = 'FormGroup';
const Um = jm,
  oE = { column: !1, visuallyHidden: !1 },
  ic = h.exports.forwardRef(
    (
      {
        as: e = 'label',
        bsPrefix: t,
        column: n,
        visuallyHidden: r,
        className: l,
        htmlFor: i,
        ...a
      },
      s,
    ) => {
      const { controlId: u } = h.exports.useContext(ln);
      t = le(t, 'form-label');
      let c = 'col-form-label';
      typeof n == 'string' && (c = `${c} ${c}-${n}`);
      const d = Y(l, t, r && 'visually-hidden', n && c);
      return (
        (i = i || u),
        n
          ? o(Jx, { ref: s, as: 'label', className: d, htmlFor: i, ...a })
          : o(e, { ref: s, className: d, htmlFor: i, ...a })
      );
    },
  );
ic.displayName = 'FormLabel';
ic.defaultProps = oE;
const sE = ic,
  Bm = h.exports.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, l) => {
    const { controlId: i } = h.exports.useContext(ln);
    return (
      (e = le(e, 'form-range')),
      o('input', {
        ...r,
        type: 'range',
        ref: l,
        className: Y(t, e),
        id: n || i,
      })
    );
  });
Bm.displayName = 'FormRange';
const uE = Bm,
  Hm = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        size: t,
        htmlSize: n,
        className: r,
        isValid: l = !1,
        isInvalid: i = !1,
        id: a,
        ...s
      },
      u,
    ) => {
      const { controlId: c } = h.exports.useContext(ln);
      return (
        (e = le(e, 'form-select')),
        o('select', {
          ...s,
          size: n,
          ref: u,
          className: Y(
            r,
            e,
            t && `${e}-${t}`,
            l && 'is-valid',
            i && 'is-invalid',
          ),
          id: a || c,
        })
      );
    },
  );
Hm.displayName = 'FormSelect';
const cE = Hm,
  Vm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'small', muted: r, ...l }, i) => (
      (e = le(e, 'form-text')),
      o(n, { ...l, ref: i, className: Y(t, e, r && 'text-muted') })
    ),
  );
Vm.displayName = 'FormText';
const dE = Vm,
  Wm = h.exports.forwardRef((e, t) => o(Sa, { ...e, ref: t, type: 'switch' }));
Wm.displayName = 'Switch';
const fE = Object.assign(Wm, { Input: Sa.Input, Label: Sa.Label }),
  Km = h.exports.forwardRef(
    (
      { bsPrefix: e, className: t, children: n, controlId: r, label: l, ...i },
      a,
    ) => (
      (e = le(e, 'form-floating')),
      E(Um, {
        ref: a,
        className: Y(t, e),
        controlId: r,
        ...i,
        children: [n, o('label', { htmlFor: r, children: l })],
      })
    ),
  );
Km.displayName = 'FloatingLabel';
const pE = Km,
  hE = {
    _ref: Fe.exports.any,
    validated: Fe.exports.bool,
    as: Fe.exports.elementType,
  },
  ac = h.exports.forwardRef(
    ({ className: e, validated: t, as: n = 'form', ...r }, l) =>
      o(n, { ...r, ref: l, className: Y(e, t && 'was-validated') }),
  );
ac.displayName = 'Form';
ac.propTypes = hE;
const cl = Object.assign(ac, {
    Group: Um,
    Control: iE,
    Floating: aE,
    Check: Sa,
    Switch: fE,
    Label: sE,
    Text: dE,
    Range: uE,
    Select: cE,
    FloatingLabel: pE,
  }),
  mE = { fluid: !1 },
  oc = h.exports.forwardRef(
    ({ bsPrefix: e, fluid: t, as: n = 'div', className: r, ...l }, i) => {
      const a = le(e, 'container'),
        s = typeof t == 'string' ? `-${t}` : '-fluid';
      return o(n, { ref: i, ...l, className: Y(r, t ? `${a}${s}` : a) });
    },
  );
oc.displayName = 'Container';
oc.defaultProps = mE;
const tf = oc;
Fe.exports.string,
  Fe.exports.bool,
  Fe.exports.bool,
  Fe.exports.bool,
  Fe.exports.bool;
const vE = { fluid: !1, rounded: !1, roundedCircle: !1, thumbnail: !1 },
  sc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        fluid: n,
        rounded: r,
        roundedCircle: l,
        thumbnail: i,
        ...a
      },
      s,
    ) => (
      (e = le(e, 'img')),
      o('img', {
        ref: s,
        ...a,
        className: Y(
          t,
          n && `${e}-fluid`,
          r && 'rounded',
          l && 'rounded-circle',
          i && `${e}-thumbnail`,
        ),
      })
    ),
  );
sc.displayName = 'Image';
sc.defaultProps = vE;
const gE = sc,
  Qm = h.exports.createContext(null),
  yE = ['as', 'active', 'eventKey'];
function xE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Gm({ key: e, onClick: t, active: n, id: r, role: l, disabled: i }) {
  const a = h.exports.useContext(wa),
    s = h.exports.useContext(rc),
    u = h.exports.useContext(Qm);
  let c = n;
  const d = { role: l };
  if (s) {
    !l && s.role === 'tablist' && (d.role = 'tab');
    const p = s.getControllerId(e != null ? e : null),
      f = s.getControlledId(e != null ? e : null);
    (d[Ka('event-key')] = e),
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
      i && ((d.tabIndex = -1), (d['aria-disabled'] = !0))),
    (d.onClick = Ft((p) => {
      i ||
        (t == null || t(p),
        e != null && a && !p.isPropagationStopped() && a(e, p));
    })),
    [d, { isActive: c }]
  );
}
const Ym = h.exports.forwardRef((e, t) => {
  let { as: n = Sm, active: r, eventKey: l } = e,
    i = xE(e, yE);
  const [a, s] = Gm(Object.assign({ key: nc(l, i.href), active: r }, i));
  return (
    (a[Ka('active')] = s.isActive), o(n, Object.assign({}, i, a, { ref: t }))
  );
});
Ym.displayName = 'NavItem';
const EE = ['as', 'onSelect', 'activeKey', 'role', 'onKeyDown'];
function NE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const nf = () => {},
  rf = Ka('event-key'),
  Xm = h.exports.forwardRef((e, t) => {
    let { as: n = 'div', onSelect: r, activeKey: l, role: i, onKeyDown: a } = e,
      s = NE(e, EE);
    const u = qx(),
      c = h.exports.useRef(!1),
      d = h.exports.useContext(wa),
      p = h.exports.useContext(Qm);
    let f, m;
    p &&
      ((i = i || 'tablist'),
      (l = p.activeKey),
      (f = p.getControlledId),
      (m = p.getControllerId));
    const x = h.exports.useRef(null),
      y = (N) => {
        const w = x.current;
        if (!w) return null;
        const R = jn(w, `[${rf}]:not([aria-disabled=true])`),
          T = w.querySelector('[aria-selected=true]');
        if (!T || T !== document.activeElement) return null;
        const O = R.indexOf(T);
        if (O === -1) return null;
        let _ = O + N;
        return _ >= R.length && (_ = 0), _ < 0 && (_ = R.length - 1), R[_];
      },
      S = (N, w) => {
        N != null && (r == null || r(N, w), d == null || d(N, w));
      },
      v = (N) => {
        if ((a == null || a(N), !p)) return;
        let w;
        switch (N.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            w = y(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            w = y(1);
            break;
          default:
            return;
        }
        !w ||
          (N.preventDefault(),
          S(w.dataset[nE('EventKey')] || null, N),
          (c.current = !0),
          u());
      };
    h.exports.useEffect(() => {
      if (x.current && c.current) {
        const N = x.current.querySelector(`[${rf}][aria-selected=true]`);
        N == null || N.focus();
      }
      c.current = !1;
    });
    const g = xm(t, x);
    return o(wa.Provider, {
      value: S,
      children: o(rc.Provider, {
        value: {
          role: i,
          activeKey: nc(l),
          getControlledId: f || nf,
          getControllerId: m || nf,
        },
        children: o(n, Object.assign({}, s, { onKeyDown: v, ref: g, role: i })),
      }),
    });
  });
Xm.displayName = 'Nav';
const wE = Object.assign(Xm, { Item: Ym });
function _o(e) {
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
const lf = Ka('modal-open');
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
      l.setAttribute(lf, ''),
      Xt(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(lf), Object.assign(n.style, t.style);
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
const bo = (e, t) =>
  Va
    ? e == null
      ? (t || Xu()).body
      : (typeof e == 'function' && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function CE(e, t) {
  const n = _m(),
    [r, l] = h.exports.useState(() => bo(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = bo(e);
    i && l(i);
  }
  return (
    h.exports.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    h.exports.useEffect(() => {
      const i = bo(e);
      i !== r && l(i);
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
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
let Io;
function DE(e) {
  return (
    Io || (Io = new uc({ ownerDocument: e == null ? void 0 : e.document })), Io
  );
}
function PE(e) {
  const t = _m(),
    n = e || DE(t),
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
const Jm = h.exports.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = 'dialog',
      className: l,
      style: i,
      children: a,
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
      renderBackdrop: g = (q) => o('div', Object.assign({}, q)),
      manager: N,
      container: w,
      onShow: R,
      onHide: T = () => {},
      onExit: O,
      onExited: _,
      onExiting: I,
      onEnter: $,
      onEntering: xe,
      onEntered: Ze,
    } = e,
    $e = RE(e, kE);
  const te = CE(w),
    Z = PE(N),
    Nt = vx(),
    qe = gx(n),
    [L, z] = h.exports.useState(!n),
    U = h.exports.useRef(null);
  h.exports.useImperativeHandle(t, () => Z, [Z]),
    Va && !qe && n && (U.current = _o()),
    !p && !n && !L ? z(!0) : n && L && z(!1);
  const V = Ft(() => {
      if (
        (Z.add(),
        (ct.current = Na(document, 'keydown', he)),
        (Se.current = Na(document, 'focus', () => setTimeout(_t), !0)),
        R && R(),
        m)
      ) {
        const q = _o(document);
        Z.dialog &&
          q &&
          !ef(Z.dialog, q) &&
          ((U.current = q), Z.dialog.focus());
      }
    }),
    ne = Ft(() => {
      if (
        (Z.remove(),
        ct.current == null || ct.current(),
        Se.current == null || Se.current(),
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
  const _t = Ft(() => {
      if (!x || !Nt() || !Z.isTopModal()) return;
      const q = _o();
      Z.dialog && q && !ef(Z.dialog, q) && Z.dialog.focus();
    }),
    We = Ft((q) => {
      q.target === q.currentTarget && (c == null || c(q), s === !0 && T());
    }),
    he = Ft((q) => {
      u &&
        q.keyCode === 27 &&
        Z.isTopModal() &&
        (d == null || d(q), q.defaultPrevented || T());
    }),
    Se = h.exports.useRef(),
    ct = h.exports.useRef(),
    Jr = (...q) => {
      z(!0), _ == null || _(...q);
    },
    Mn = p;
  if (!te || !(n || (Mn && !L))) return null;
  const Fn = Object.assign(
    {
      role: r,
      ref: Z.setDialogRef,
      'aria-modal': r === 'dialog' ? !0 : void 0,
    },
    $e,
    { style: i, className: l, tabIndex: -1 },
  );
  let rr = v
    ? v(Fn)
    : o(
        'div',
        Object.assign({}, Fn, {
          children: h.exports.cloneElement(a, { role: 'document' }),
        }),
      );
  Mn &&
    (rr = o(Mn, {
      appear: !0,
      unmountOnExit: !0,
      in: !!n,
      onExit: O,
      onExiting: I,
      onExited: Jr,
      onEnter: $,
      onEntering: xe,
      onEntered: Ze,
      children: rr,
    }));
  let lr = null;
  if (s) {
    const q = f;
    (lr = g({ ref: Z.setBackdropRef, onClick: We })),
      q && (lr = o(q, { appear: !0, in: !!n, children: lr }));
  }
  return o(A, { children: Sr.createPortal(E(A, { children: [lr, rr] }), te) });
});
Jm.displayName = 'Modal';
const OE = Object.assign(Jm, { Manager: uc });
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
function af(e, t) {
  return e
    .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
function _E(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == 'string'
    ? (e.className = af(e.className, t))
    : e.setAttribute(
        'class',
        af((e.className && e.className.baseVal) || '', t),
      );
}
const sr = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler',
};
class Zm extends uc {
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
    jn(n, sr.FIXED_CONTENT).forEach((i) =>
      this.adjustAndStore(r, i, t.scrollBarWidth),
    ),
      jn(n, sr.STICKY_CONTENT).forEach((i) =>
        this.adjustAndStore(l, i, -t.scrollBarWidth),
      ),
      jn(n, sr.NAVBAR_TOGGLER).forEach((i) =>
        this.adjustAndStore(l, i, t.scrollBarWidth),
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    _E(n, 'modal-open');
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.isRTL ? 'marginLeft' : 'marginRight';
    jn(n, sr.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      jn(n, sr.STICKY_CONTENT).forEach((i) => this.restore(l, i)),
      jn(n, sr.NAVBAR_TOGGLER).forEach((i) => this.restore(l, i));
  }
}
let Mo;
function bE(e) {
  return Mo || (Mo = new Zm(e)), Mo;
}
const IE = Zm,
  ME = h.exports.createContext({ onHide() {} }),
  qm = ME,
  FE = { closeLabel: 'Close', closeButton: !1 },
  ev = h.exports.forwardRef(
    (
      {
        closeLabel: e,
        closeVariant: t,
        closeButton: n,
        onHide: r,
        children: l,
        ...i
      },
      a,
    ) => {
      const s = h.exports.useContext(qm),
        u = Ft(() => {
          s == null || s.onHide(), r == null || r();
        });
      return E('div', {
        ref: a,
        ...i,
        children: [l, n && o(_x, { 'aria-label': e, variant: t, onClick: u })],
      });
    },
  );
ev.defaultProps = FE;
const AE = ev;
var of = { exports: {} },
  js = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
  function n(r) {
    function l(a, s, u, c, d, p) {
      var f = c || '<<anonymous>>',
        m = p || u;
      if (s[u] == null)
        return a
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
    var i = l.bind(null, !1);
    return (i.isRequired = l.bind(null, !0)), i;
  }
  e.exports = t.default;
})(js, js.exports);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = i);
  var n = js.exports,
    r = l(n);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i() {
    for (var a = arguments.length, s = Array(a), u = 0; u < a; u++)
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
const $E = xt('nav-item'),
  zE = { disabled: !1 },
  cc = h.exports.forwardRef(
    (
      { bsPrefix: e, className: t, as: n = Cm, active: r, eventKey: l, ...i },
      a,
    ) => {
      e = le(e, 'nav-link');
      const [s, u] = Gm({ key: nc(l, i.href), active: r, ...i });
      return o(n, {
        ...i,
        ...s,
        ref: a,
        className: Y(t, e, i.disabled && 'disabled', u.isActive && 'active'),
      });
    },
  );
cc.displayName = 'NavLink';
cc.defaultProps = zE;
const jE = cc,
  UE = { justify: !1, fill: !1 },
  dc = h.exports.forwardRef((e, t) => {
    const {
        as: n = 'div',
        bsPrefix: r,
        variant: l,
        fill: i,
        justify: a,
        navbar: s,
        navbarScroll: u,
        className: c,
        activeKey: d,
        ...p
      } = hm(e, { activeKey: 'onSelect' }),
      f = le(r, 'nav');
    let m,
      x,
      y = !1;
    const S = h.exports.useContext(Gr),
      v = h.exports.useContext(Dm);
    return (
      S
        ? ((m = S.bsPrefix), (y = s == null ? !0 : s))
        : v && ({ cardHeaderBsPrefix: x } = v),
      o(wE, {
        as: n,
        ref: t,
        activeKey: d,
        className: Y(c, {
          [f]: !y,
          [`${m}-nav`]: y,
          [`${m}-nav-scroll`]: y && u,
          [`${x}-${l}`]: !!x,
          [`${f}-${l}`]: !!l,
          [`${f}-fill`]: i,
          [`${f}-justified`]: a,
        }),
        ...p,
      })
    );
  });
dc.displayName = 'Nav';
dc.defaultProps = UE;
const ur = Object.assign(dc, { Item: $E, Link: jE }),
  tv = h.exports.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, l) => {
    e = le(e, 'navbar-brand');
    const i = n || (r.href ? 'a' : 'span');
    return o(i, { ...r, ref: l, className: Y(t, e) });
  });
tv.displayName = 'NavbarBrand';
const BE = tv,
  nv = h.exports.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = le(t, 'navbar-collapse');
    const l = h.exports.useContext(Gr);
    return o(hx, {
      in: !!(l && l.expanded),
      ...n,
      children: o('div', { ref: r, className: t, children: e }),
    });
  });
nv.displayName = 'NavbarCollapse';
const HE = nv,
  VE = { label: 'Toggle navigation' },
  fc = h.exports.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r,
        as: l = 'button',
        onClick: i,
        ...a
      },
      s,
    ) => {
      e = le(e, 'navbar-toggler');
      const { onToggle: u, expanded: c } = h.exports.useContext(Gr) || {},
        d = Ft((p) => {
          i && i(p), u && u();
        });
      return (
        l === 'button' && (a.type = 'button'),
        o(l, {
          ...a,
          ref: s,
          onClick: d,
          'aria-label': r,
          className: Y(t, e, !c && 'collapsed'),
          children: n || o('span', { className: `${e}-icon` }),
        })
      );
    },
  );
fc.displayName = 'NavbarToggle';
fc.defaultProps = VE;
const WE = fc;
var Us = new WeakMap(),
  sf = function (t, n) {
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
  var n = sf(e, t),
    r = h.exports.useState(function () {
      return n ? n.matches : !1;
    }),
    l = r[0],
    i = r[1];
  return (
    Ex(
      function () {
        var a = sf(e, t);
        if (!a) return i(!1);
        var s = Us.get(t),
          u = function () {
            i(a.matches);
          };
        return (
          a.refCount++,
          a.addListener(u),
          u(),
          function () {
            a.removeListener(u),
              a.refCount--,
              a.refCount <= 0 && (s == null || s.delete(a.media)),
              (a = void 0);
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
  function i(s) {
    var u = e[s];
    return typeof u == 'number' && (u = u + 'px'), '(min-width: ' + u + ')';
  }
  function a(s, u, c) {
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
            (S === 'up' || S === !0) && (m = n(m, i(y))),
            (S === 'down' || S === !0) && (m = n(m, l(y))),
            m
          );
        }, '');
      },
      [JSON.stringify(d)],
    );
    return KE(f, c);
  }
  return a;
}
var GE = QE({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const YE = xt('offcanvas-body'),
  XE = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 },
  JE = { [Dt]: 'show', [Vt]: 'show' },
  pc = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, children: n, ...r }, l) => (
      (e = le(e, 'offcanvas')),
      o(Zu, {
        ref: l,
        addEndListener: Ju,
        ...r,
        childRef: n.ref,
        children: (i, a) =>
          h.exports.cloneElement(n, {
            ...a,
            className: Y(
              t,
              n.props.className,
              (i === Dt || i === Gl) && `${e}-toggling`,
              JE[i],
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
      o(AE, { ref: r, ...n, className: Y(t, e) })
    ),
  );
hc.displayName = 'OffcanvasHeader';
hc.defaultProps = qE;
const eN = hc,
  tN = ec('h5'),
  nN = xt('offcanvas-title', { Component: tN }),
  rN = {
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
function lN(e) {
  return o(ZE, { ...e });
}
function iN(e) {
  return o(Ox, { ...e });
}
const mc = h.exports.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      'aria-labelledby': r,
      placement: l,
      responsive: i,
      show: a,
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
      onExit: N,
      onExiting: w,
      onEnter: R,
      onEntering: T,
      onExited: O,
      backdropClassName: _,
      manager: I,
      renderStaticNode: $,
      ...xe
    },
    Ze,
  ) => {
    const $e = h.exports.useRef();
    e = le(e, 'offcanvas');
    const { onToggle: te } = h.exports.useContext(Gr) || {},
      [Z, Nt] = h.exports.useState(!1),
      qe = GE(i || 'xs', 'up');
    h.exports.useEffect(() => {
      Nt(i ? a && !qe : a);
    }, [a, i, qe]);
    const L = Ft(() => {
        te == null || te(), f == null || f();
      }),
      z = h.exports.useMemo(() => ({ onHide: L }), [L]);
    function U() {
      return (
        I ||
        (c
          ? ($e.current ||
              ($e.current = new IE({ handleContainerOverflow: !1 })),
            $e.current)
          : bE())
      );
    }
    const V = (he, ...Se) => {
        he && (he.style.visibility = 'visible'), R == null || R(he, ...Se);
      },
      ne = (he, ...Se) => {
        he && (he.style.visibility = ''), O == null || O(...Se);
      },
      _t = h.exports.useCallback(
        (he) => o('div', { ...he, className: Y(`${e}-backdrop`, _) }),
        [_, e],
      ),
      We = (he) =>
        o('div', {
          ...he,
          ...xe,
          className: Y(t, i ? `${e}-${i}` : e, `${e}-${l}`),
          'aria-labelledby': r,
          children: n,
        });
    return E(A, {
      children: [
        !Z && (i || $) && We({}),
        o(qm.Provider, {
          value: z,
          children: o(OE, {
            show: Z,
            ref: Ze,
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
            onExit: N,
            onExiting: w,
            onExited: ne,
            manager: U(),
            transition: lN,
            backdropTransition: iN,
            renderBackdrop: _t,
            renderDialog: We,
          }),
        }),
      ],
    });
  },
);
mc.displayName = 'Offcanvas';
mc.defaultProps = rN;
const aN = Object.assign(mc, { Body: YE, Header: eN, Title: nN }),
  rv = h.exports.forwardRef((e, t) => {
    const n = h.exports.useContext(Gr);
    return o(aN, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
rv.displayName = 'NavbarOffcanvas';
const oN = rv,
  sN = xt('navbar-text', { Component: 'span' }),
  uN = { expand: !0, variant: 'light', collapseOnSelect: !1 },
  vc = h.exports.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r,
        variant: l,
        bg: i,
        fixed: a,
        sticky: s,
        className: u,
        as: c = 'nav',
        expanded: d,
        onToggle: p,
        onSelect: f,
        collapseOnSelect: m,
        ...x
      } = hm(e, { expanded: 'onToggle' }),
      y = le(n, 'navbar'),
      S = h.exports.useCallback(
        (...N) => {
          f == null || f(...N), m && d && (p == null || p(!1));
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
    return o(Gr.Provider, {
      value: g,
      children: o(wa.Provider, {
        value: S,
        children: o(c, {
          ref: t,
          ...x,
          className: Y(
            u,
            y,
            r && v,
            l && `${y}-${l}`,
            i && `bg-${i}`,
            s && `sticky-${s}`,
            a && `fixed-${a}`,
          ),
        }),
      }),
    });
  });
vc.defaultProps = uN;
vc.displayName = 'Navbar';
const Fo = Object.assign(vc, {
    Brand: BE,
    Collapse: HE,
    Offcanvas: oN,
    Text: sN,
    Toggle: WE,
  }),
  cN = () =>
    o(Dv, {
      children: o(Oi, {
        className: 'home-wrapper font',
        children: E(Oi.Body, {
          className: 'has-text-centered',
          children: [
            o(Oi.Title, {
              className: 'font',
              children: 'Domovsk\xE1 str\xE1nka',
            }),
            o(Oi.Text, {
              children:
                'V\xEDtejte na domovsk\xE9 str\xE1nce aplikace Pensionary. Tato aplikace slou\u017E\xED k evidenci zam\u011Bstnanc\u016F a jejich st\xE1vaj\xEDc\xEDch a budouc\xEDch stavech.',
            }),
          ],
        }),
      }),
    });
function lv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: iv } = Object.prototype,
  { getPrototypeOf: gc } = Object,
  yc = ((e) => (t) => {
    const n = iv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  un = (e) => ((e = e.toLowerCase()), (t) => yc(t) === e),
  Qa = (e) => (t) => typeof t === e,
  { isArray: li } = Array,
  Bs = Qa('undefined');
function dN(e) {
  return (
    e !== null &&
    !Bs(e) &&
    e.constructor !== null &&
    !Bs(e.constructor) &&
    Yr(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const av = un('ArrayBuffer');
function fN(e) {
  let t;
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && av(e.buffer)),
    t
  );
}
const pN = Qa('string'),
  Yr = Qa('function'),
  ov = Qa('number'),
  sv = (e) => e !== null && typeof e == 'object',
  hN = (e) => e === !0 || e === !1,
  Hi = (e) => {
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
  mN = un('Date'),
  vN = un('File'),
  gN = un('Blob'),
  yN = un('FileList'),
  xN = (e) => sv(e) && Yr(e.pipe),
  EN = (e) => {
    const t = '[object FormData]';
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        iv.call(e) === t ||
        (Yr(e.toString) && e.toString() === t))
    );
  },
  NN = un('URLSearchParams'),
  wN = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function Ga(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return;
  let r, l;
  if ((typeof e != 'object' && (e = [e]), li(e)))
    for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let s;
    for (r = 0; r < a; r++) (s = i[r]), t.call(null, e[s], s, e);
  }
}
function Hs() {
  const e = {},
    t = (n, r) => {
      Hi(e[r]) && Hi(n)
        ? (e[r] = Hs(e[r], n))
        : Hi(n)
        ? (e[r] = Hs({}, n))
        : li(n)
        ? (e[r] = n.slice())
        : (e[r] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Ga(arguments[n], t);
  return e;
}
const SN = (e, t, n, { allOwnKeys: r } = {}) => (
    Ga(
      t,
      (l, i) => {
        n && Yr(l) ? (e[i] = lv(l, n)) : (e[i] = l);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  CN = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  kN = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  RN = (e, t, n, r) => {
    let l, i, a;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (l = Object.getOwnPropertyNames(e), i = l.length; i-- > 0; )
        (a = l[i]), (!r || r(a, e, t)) && !s[a] && ((t[a] = e[a]), (s[a] = !0));
      e = n !== !1 && gc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  DN = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  PN = (e) => {
    if (!e) return null;
    if (li(e)) return e;
    let t = e.length;
    if (!ov(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ON = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && gc(Uint8Array)),
  TN = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  LN = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  _N = un('HTMLFormElement'),
  bN = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  uf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  IN = un('RegExp'),
  uv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ga(n, (l, i) => {
      t(l, i, e) !== !1 && (r[i] = l);
    }),
      Object.defineProperties(e, r);
  },
  MN = (e) => {
    uv(e, (t, n) => {
      const r = e[n];
      if (!!Yr(r)) {
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
  FN = (e, t) => {
    const n = {},
      r = (l) => {
        l.forEach((i) => {
          n[i] = !0;
        });
      };
    return li(e) ? r(e) : r(String(e).split(t)), n;
  },
  AN = () => {},
  $N = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  C = {
    isArray: li,
    isArrayBuffer: av,
    isBuffer: dN,
    isFormData: EN,
    isArrayBufferView: fN,
    isString: pN,
    isNumber: ov,
    isBoolean: hN,
    isObject: sv,
    isPlainObject: Hi,
    isUndefined: Bs,
    isDate: mN,
    isFile: vN,
    isBlob: gN,
    isRegExp: IN,
    isFunction: Yr,
    isStream: xN,
    isURLSearchParams: NN,
    isTypedArray: ON,
    isFileList: yN,
    forEach: Ga,
    merge: Hs,
    extend: SN,
    trim: wN,
    stripBOM: CN,
    inherits: kN,
    toFlatObject: RN,
    kindOf: yc,
    kindOfTest: un,
    endsWith: DN,
    toArray: PN,
    forEachEntry: TN,
    matchAll: LN,
    isHTMLForm: _N,
    hasOwnProperty: uf,
    hasOwnProp: uf,
    reduceDescriptors: uv,
    freezeMethods: MN,
    toObjectSet: FN,
    toCamelCase: bN,
    noop: AN,
    toFiniteNumber: $N,
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
const cv = G.prototype,
  dv = {};
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
  dv[e] = { value: e };
});
Object.defineProperties(G, dv);
Object.defineProperty(cv, 'isAxiosError', { value: !0 });
G.from = (e, t, n, r, l, i) => {
  const a = Object.create(cv);
  return (
    C.toFlatObject(
      e,
      a,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== 'isAxiosError',
    ),
    G.call(a, e.message, t, n, r, l),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
var zN = typeof self == 'object' ? self.FormData : window.FormData;
function Vs(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function fv(e) {
  return C.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function cf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (l, i) {
          return (l = fv(l)), !n && i ? '[' + l + ']' : l;
        })
        .join(n ? '.' : '')
    : t;
}
function jN(e) {
  return C.isArray(e) && !e.some(Vs);
}
const UN = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function BN(e) {
  return (
    e &&
    C.isFunction(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
function Ya(e, t, n) {
  if (!C.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new (zN || FormData)()),
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
    i = n.dots,
    a = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && BN(t);
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
        (C.isArray(x) && jN(x)) ||
        C.isFileList(x) ||
        (C.endsWith(y, '[]') && (v = C.toArray(x)))
      )
        return (
          (y = fv(y)),
          v.forEach(function (N, w) {
            !(C.isUndefined(N) || N === null) &&
              t.append(
                a === !0 ? cf([y], w, i) : a === null ? y : y + '[]',
                c(N),
              );
          }),
          !1
        );
    }
    return Vs(x) ? !0 : (t.append(cf(S, y, i), c(x)), !1);
  }
  const p = [],
    f = Object.assign(UN, {
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
function df(e) {
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
  (this._pairs = []), e && Ya(e, this, t);
}
const pv = xc.prototype;
pv.append = function (t, n) {
  this._pairs.push([t, n]);
};
pv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, df);
      }
    : df;
  return this._pairs
    .map(function (l) {
      return n(l[0]) + '=' + n(l[1]);
    }, '')
    .join('&');
};
function HN(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function hv(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || HN,
    l = n && n.serialize;
  let i;
  if (
    (l
      ? (i = l(t, n))
      : (i = C.isURLSearchParams(t) ? t.toString() : new xc(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf('#');
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
  }
  return e;
}
class ff {
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
const mv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  VN = typeof URLSearchParams < 'u' ? URLSearchParams : xc,
  WN = FormData,
  KN = (() => {
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
    classes: { URLSearchParams: VN, FormData: WN, Blob },
    isStandardBrowserEnv: KN,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
function QN(e, t) {
  return Ya(
    e,
    new Jt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, l, i) {
          return Jt.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function GN(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  );
}
function YN(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const l = n.length;
  let i;
  for (r = 0; r < l; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function vv(e) {
  function t(n, r, l, i) {
    let a = n[i++];
    const s = Number.isFinite(+a),
      u = i >= n.length;
    return (
      (a = !a && C.isArray(l) ? l.length : a),
      u
        ? (C.hasOwnProp(l, a) ? (l[a] = [l[a], r]) : (l[a] = r), !s)
        : ((!l[a] || !C.isObject(l[a])) && (l[a] = []),
          t(n, r, l[a], i) && C.isArray(l[a]) && (l[a] = YN(l[a])),
          !s)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, l) => {
        t(GN(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function XN(e, t, n) {
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
const JN = Jt.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, l, i, a, s) {
          const u = [];
          u.push(n + '=' + encodeURIComponent(r)),
            C.isNumber(l) && u.push('expires=' + new Date(l).toGMTString()),
            C.isString(i) && u.push('path=' + i),
            C.isString(a) && u.push('domain=' + a),
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
function ZN(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qN(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function gv(e, t) {
  return e && !ZN(t) ? qN(e, t) : t;
}
const ew = Jt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function l(i) {
        let a = i;
        return (
          t && (n.setAttribute('href', a), (a = n.href)),
          n.setAttribute('href', a),
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
        function (a) {
          const s = C.isString(a) ? l(a) : a;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ii(e, t, n) {
  G.call(this, e == null ? 'canceled' : e, G.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
C.inherits(ii, G, { __CANCEL__: !0 });
function tw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
const nw = C.toObjectSet([
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
  rw = (e) => {
    const t = {};
    let n, r, l;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (a) {
            (l = a.indexOf(':')),
              (n = a.substring(0, l).trim().toLowerCase()),
              (r = a.substring(l + 1).trim()),
              !(!n || (t[n] && nw[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
          }),
      t
    );
  },
  pf = Symbol('internals'),
  yv = Symbol('defaults');
function gl(e) {
  return e && String(e).trim().toLowerCase();
}
function Vi(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Vi) : String(e);
}
function lw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function hf(e, t, n, r) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if (!!C.isString(t)) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function iw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function aw(e, t) {
  const n = C.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (l, i, a) {
        return this[r].call(this, t, l, i, a);
      },
      configurable: !0,
    });
  });
}
function dl(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    l;
  for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
  return null;
}
function mt(e, t) {
  e && this.set(e), (this[yv] = t || null);
}
Object.assign(mt.prototype, {
  set: function (e, t, n) {
    const r = this;
    function l(i, a, s) {
      const u = gl(a);
      if (!u) throw new Error('header name must be a non-empty string');
      const c = dl(r, u);
      (c && s !== !0 && (r[c] === !1 || s === !1)) || (r[c || a] = Vi(i));
    }
    return (
      C.isPlainObject(e)
        ? C.forEach(e, (i, a) => {
            l(i, a, t);
          })
        : l(t, e, n),
      this
    );
  },
  get: function (e, t) {
    if (((e = gl(e)), !e)) return;
    const n = dl(this, e);
    if (n) {
      const r = this[n];
      if (!t) return r;
      if (t === !0) return lw(r);
      if (C.isFunction(t)) return t.call(this, r, n);
      if (C.isRegExp(t)) return t.exec(r);
      throw new TypeError('parser must be boolean|regexp|function');
    }
  },
  has: function (e, t) {
    if (((e = gl(e)), e)) {
      const n = dl(this, e);
      return !!(n && (!t || hf(this, this[n], n, t)));
    }
    return !1;
  },
  delete: function (e, t) {
    const n = this;
    let r = !1;
    function l(i) {
      if (((i = gl(i)), i)) {
        const a = dl(n, i);
        a && (!t || hf(n, n[a], a, t)) && (delete n[a], (r = !0));
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
        const i = dl(n, l);
        if (i) {
          (t[i] = Vi(r)), delete t[l];
          return;
        }
        const a = e ? iw(l) : String(l).trim();
        a !== l && delete t[l], (t[a] = Vi(r)), (n[a] = !0);
      }),
      this
    );
  },
  toJSON: function (e) {
    const t = Object.create(null);
    return (
      C.forEach(Object.assign({}, this[yv] || null, this), (n, r) => {
        n == null || n === !1 || (t[r] = e && C.isArray(n) ? n.join(', ') : n);
      }),
      t
    );
  },
});
Object.assign(mt, {
  from: function (e) {
    return C.isString(e)
      ? new this(rw(e))
      : e instanceof this
      ? e
      : new this(e);
  },
  accessor: function (e) {
    const n = (this[pf] = this[pf] = { accessors: {} }).accessors,
      r = this.prototype;
    function l(i) {
      const a = gl(i);
      n[a] || (aw(r, i), (n[a] = !0));
    }
    return C.isArray(e) ? e.forEach(l) : l(e), this;
  },
});
mt.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
]);
C.freezeMethods(mt.prototype);
C.freezeMethods(mt);
function ow(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let l = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        d = r[i];
      a || (a = c), (n[l] = u), (r[l] = c);
      let p = i,
        f = 0;
      for (; p !== l; ) (f += n[p++]), (p = p % e);
      if (((l = (l + 1) % e), l === i && (i = (i + 1) % e), c - a < t)) return;
      const m = d && c - d;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function mf(e, t) {
  let n = 0;
  const r = ow(50, 250);
  return (l) => {
    const i = l.loaded,
      a = l.lengthComputable ? l.total : void 0,
      s = i - n,
      u = r(s),
      c = i <= a;
    n = i;
    const d = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
    };
    (d[t ? 'download' : 'upload'] = !0), e(d);
  };
}
function vf(e) {
  return new Promise(function (n, r) {
    let l = e.data;
    const i = mt.from(e.headers).normalize(),
      a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s),
        e.signal && e.signal.removeEventListener('abort', s);
    }
    C.isFormData(l) && Jt.isStandardBrowserEnv && i.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || '',
        x = e.auth.password
          ? unescape(encodeURIComponent(e.auth.password))
          : '';
      i.set('Authorization', 'Basic ' + btoa(m + ':' + x));
    }
    const d = gv(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), hv(d, e.params, e.paramsSerializer), !0),
      (c.timeout = e.timeout);
    function p() {
      if (!c) return;
      const m = mt.from(
          'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
        ),
        y = {
          data:
            !a || a === 'text' || a === 'json' ? c.responseText : c.response,
          status: c.status,
          statusText: c.statusText,
          headers: m,
          config: e,
          request: c,
        };
      XN(
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
        const y = e.transitional || mv;
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
        (e.withCredentials || ew(d)) &&
        e.xsrfCookieName &&
        JN.read(e.xsrfCookieName);
      m && i.set(e.xsrfHeaderName, m);
    }
    l === void 0 && i.setContentType(null),
      'setRequestHeader' in c &&
        C.forEach(i.toJSON(), function (x, y) {
          c.setRequestHeader(y, x);
        }),
      C.isUndefined(e.withCredentials) ||
        (c.withCredentials = !!e.withCredentials),
      a && a !== 'json' && (c.responseType = e.responseType),
      typeof e.onDownloadProgress == 'function' &&
        c.addEventListener('progress', mf(e.onDownloadProgress, !0)),
      typeof e.onUploadProgress == 'function' &&
        c.upload &&
        c.upload.addEventListener('progress', mf(e.onUploadProgress)),
      (e.cancelToken || e.signal) &&
        ((s = (m) => {
          !c ||
            (r(!m || m.type ? new ii(null, e, c) : m), c.abort(), (c = null));
        }),
        e.cancelToken && e.cancelToken.subscribe(s),
        e.signal &&
          (e.signal.aborted ? s() : e.signal.addEventListener('abort', s)));
    const f = tw(d);
    if (f && Jt.protocols.indexOf(f) === -1) {
      r(new G('Unsupported protocol ' + f + ':', G.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(l || null);
  });
}
const gf = { http: vf, xhr: vf },
  yf = {
    getAdapter: (e) => {
      if (C.isString(e)) {
        const t = gf[e];
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
    adapters: gf,
  },
  sw = { 'Content-Type': 'application/x-www-form-urlencoded' };
function uw() {
  let e;
  return (
    typeof XMLHttpRequest < 'u'
      ? (e = yf.getAdapter('xhr'))
      : typeof process < 'u' &&
        C.kindOf(process) === 'process' &&
        (e = yf.getAdapter('http')),
    e
  );
}
function cw(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const Xr = {
  transitional: mv,
  adapter: uw(),
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        l = r.indexOf('application/json') > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return l && l ? JSON.stringify(vv(t)) : t;
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
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return QN(t, this.formSerializer).toString();
        if ((s = C.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData;
          return Ya(
            s ? { 'files[]': t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return i || l ? (n.setContentType('application/json', !1), cw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Xr.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === 'json';
      if (t && C.isString(t) && ((r && !this.responseType) || l)) {
        const a = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
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
  Xr.headers[t] = {};
});
C.forEach(['post', 'put', 'patch'], function (t) {
  Xr.headers[t] = C.merge(sw);
});
function Ao(e, t) {
  const n = this || Xr,
    r = t || n,
    l = mt.from(r.headers);
  let i = r.data;
  return (
    C.forEach(e, function (s) {
      i = s.call(n, i, l.normalize(), t ? t.status : void 0);
    }),
    l.normalize(),
    i
  );
}
function xv(e) {
  return !!(e && e.__CANCEL__);
}
function $o(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ii();
}
function xf(e) {
  return (
    $o(e),
    (e.headers = mt.from(e.headers)),
    (e.data = Ao.call(e, e.transformRequest)),
    (e.adapter || Xr.adapter)(e).then(
      function (r) {
        return (
          $o(e),
          (r.data = Ao.call(e, e.transformResponse, r)),
          (r.headers = mt.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          xv(r) ||
            ($o(e),
            r &&
              r.response &&
              ((r.response.data = Ao.call(e, e.transformResponse, r.response)),
              (r.response.headers = mt.from(r.response.headers)))),
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
  function i(c) {
    if (!C.isUndefined(t[c])) return r(void 0, t[c]);
  }
  function a(c) {
    if (C.isUndefined(t[c])) {
      if (!C.isUndefined(e[c])) return r(void 0, e[c]);
    } else return r(void 0, t[c]);
  }
  function s(c) {
    if (c in t) return r(e[c], t[c]);
    if (c in e) return r(void 0, e[c]);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
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
const Ev = '1.1.3',
  Ec = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ec[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  },
);
const Ef = {};
Ec.transitional = function (t, n, r) {
  function l(i, a) {
    return (
      '[Axios v' +
      Ev +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? '. ' + r : '')
    );
  }
  return (i, a, s) => {
    if (t === !1)
      throw new G(
        l(a, ' has been removed' + (n ? ' in ' + n : '')),
        G.ERR_DEPRECATED,
      );
    return (
      n &&
        !Ef[a] &&
        ((Ef[a] = !0),
        console.warn(
          l(
            a,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, a, s) : !0
    );
  };
};
function dw(e, t, n) {
  if (typeof e != 'object')
    throw new G('options must be an object', G.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const i = r[l],
      a = t[i];
    if (a) {
      const s = e[i],
        u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new G('option ' + i + ' must be ' + u, G.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new G('Unknown option ' + i, G.ERR_BAD_OPTION);
  }
}
const Ws = { assertOptions: dw, validators: Ec },
  fn = Ws.validators;
class Qn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ff(), response: new ff() });
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
    const i = n.headers && C.merge(n.headers.common, n.headers[n.method]);
    i &&
      C.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function (x) {
          delete n.headers[x];
        },
      ),
      (n.headers = new mt(n.headers, i));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == 'function' && x.runWhen(n) === !1) ||
        ((s = s && x.synchronous), a.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (x) {
      u.push(x.fulfilled, x.rejected);
    });
    let c,
      d = 0,
      p;
    if (!s) {
      const m = [xf.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          p = m.length,
          c = Promise.resolve(n);
        d < p;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    p = a.length;
    let f = n;
    for (d = 0; d < p; ) {
      const m = a[d++],
        x = a[d++];
      try {
        f = m(f);
      } catch (y) {
        x.call(this, y);
        break;
      }
    }
    try {
      c = xf.call(this, f);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Yl(this.defaults, t);
    const n = gv(t.baseURL, t.url);
    return hv(n, t.params, t.paramsSerializer);
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
    return function (i, a, s) {
      return this.request(
        Yl(s || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: a,
        }),
      );
    };
  }
  (Qn.prototype[t] = n()), (Qn.prototype[t + 'Form'] = n(!0));
});
class Nc {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((l) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](l);
      r._listeners = null;
    }),
      (this.promise.then = (l) => {
        let i;
        const a = new Promise((s) => {
          r.subscribe(s), (i = s);
        }).then(l);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, s) {
        r.reason || ((r.reason = new ii(i, a, s)), n(r.reason));
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
      token: new Nc(function (l) {
        t = l;
      }),
      cancel: t,
    };
  }
}
function fw(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function pw(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
function Nv(e) {
  const t = new Qn(e),
    n = lv(Qn.prototype.request, t);
  return (
    C.extend(n, Qn.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (l) {
      return Nv(Yl(e, l));
    }),
    n
  );
}
const F = Nv(Xr);
F.Axios = Qn;
F.CanceledError = ii;
F.CancelToken = Nc;
F.isCancel = xv;
F.VERSION = Ev;
F.toFormData = Ya;
F.AxiosError = G;
F.Cancel = F.CanceledError;
F.all = function (t) {
  return Promise.all(t);
};
F.spread = fw;
F.isAxiosError = pw;
F.formToJSON = (e) => vv(C.isHTMLForm(e) ? new FormData(e) : e);
const wc = () =>
    o(A, {
      children: o('article', {
        className: 'event-footer message is-success',
        children: E('div', {
          className: 'message-body',
          children: [
            o('p', {
              children:
                'V\xEDce info najdete na Modr\xE9m kameni: http://www.modry-kamen.cz/',
            }),
            E('p', {
              children: [
                'V\xFDvoj\xE1\u0159i: ',
                o('a', {
                  href: 'https://github.com/blaziter',
                  children: 'Petr Tran',
                }),
                ' ',
                o('a', {
                  href: 'https://github.com/bouchlavarna',
                  children: '\u0160tefan Jambrich',
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  hw = ({ title: e, subtitle: t, image: n }) =>
    o(A, {
      children: o('div', {
        className: 'card',
        children: o('div', {
          className: 'card-content',
          children: E('div', {
            className: 'media',
            children: [
              o('div', {
                className: 'media-left',
                children: o('figure', {
                  className: 'image',
                  children: o('img', {
                    className: 'info-card-image',
                    src: n,
                    alt: 'Placeholder image',
                  }),
                }),
              }),
              E('div', {
                className: 'media-content info-card-content',
                children: [
                  o('p', { className: 'title info-card-title', children: e }),
                  o('p', {
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
  mw = () => {
    const [t, n] = h.exports.useState(30),
      [r, l] = h.exports.useState(!1),
      [i, a] = h.exports.useState([]);
    return (
      h.exports.useEffect(() => {
        const s = setInterval(() => {
          let u = t;
          n(u - 0.01), u <= 0 && l(!0);
        }, 10);
        return () => clearInterval(s);
      }),
      h.exports.useEffect(() => {
        F.get('http://localhost:8080/api/employee/all').then(async (s) => {
          a(await s.data);
        });
      }, []),
      E(A, {
        children: [
          r && o(it, { to: '/events' }),
          E('div', {
            className: 'info-container has-text-centered font',
            children: [
              o('h1', {
                className: 'title info-title',
                children: 'Info N\xE1\u0161 t\xFDm',
              }),
              o('progress', {
                className: 'progress is-danger is-large',
                value: t,
                max: 30,
              }),
              i &&
                i
                  .filter(
                    (s) =>
                      s.ROLE != 'doctor' &&
                      s.ROLE != 'nurse' &&
                      s.ROLE != 'chairman' &&
                      s.ROLE != 'vice chairman' &&
                      s.ROLE != 'head nurse' &&
                      s.ROLE != 'social worker',
                  )
                  .map((s) =>
                    o(hw, {
                      title: s.NAME,
                      subtitle: s.ROLE,
                      image: s.IMAGENAME,
                    }),
                  ),
              o(wc, {}),
            ],
          }),
        ],
      })
    );
  },
  cr = ({ title: e, subtitle: t, onClick: n }) =>
    o(A, {
      children: o('div', {
        className: 'tile is-parent dashboard-tile user-select-none',
        children: E('article', {
          onClick: n,
          className:
            'tile is-child box notification tile-max-width dashboard-tile-child',
          children: [
            o('p', { className: 'title', children: e }),
            o('p', { className: 'subtitle', children: t }),
          ],
        }),
      }),
    }),
  vw = () => {
    const e = Ve(),
      [t, n] = h.exports.useState(0),
      [r, l] = h.exports.useState(0),
      [i, a] = h.exports.useState(0),
      [s, u] = h.exports.useState([]),
      [c, d] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/all', {
            withCredentials: !0,
          }).then(async (p) => u(await p.data));
      }, []),
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/announcement/all', {
            withCredentials: !0,
          }).then(async (p) => a(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/?group=ROLE&data=doctor', {
            withCredentials: !0,
          }).then(async (p) => n(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/?group=ROLE&data=nurse', {
            withCredentials: !0,
          }).then(async (p) => l(await p.data.length));
      }),
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/user/all', {
            withCredentials: !0,
          }).then(async (p) => d(await p.data.length));
      }),
      E(A, {
        children: [
          o('nav', { className: 'breadcumb', 'aria-label': 'breadcrumbs' }),
          E('div', {
            className: 'tile is-ancestor has-text-centered align-items-center',
            children: [
              o(cr, {
                onClick: () => e('/table/administration/page/1'),
                title: 'Veden\xED',
                subtitle: s.filter(
                  (p) => p.ROLE != 'doctor' && p.ROLE != 'nurse',
                ).length,
              }),
              o(cr, {
                onClick: () => e('/table/doctor/page/1'),
                title: 'L\xE9ka\u0159i',
                subtitle: t,
              }),
              o(cr, {
                onClick: () => e('/table/nurse/page/1'),
                title: 'Sest\u0159i\u010Dky',
                subtitle: r,
              }),
              o(cr, {
                onClick: () => e('/table/announcements/page/1'),
                title: 'Ud\xE1losti',
                subtitle: i,
              }),
              o(cr, {
                onClick: () => e('/table/admin/page/1'),
                title: 'Spr\xE1vci',
                subtitle: c,
              }),
              o(cr, {
                onClick: () => e('/table/info/page/1'),
                title: '\u010Clenov\xE9 t\xFDmu',
                subtitle: s.filter(
                  (p) =>
                    p.ROLE != 'doctor' &&
                    p.ROLE != 'nurse' &&
                    p.ROLE != 'chairman' &&
                    p.ROLE != 'vice chairman' &&
                    p.ROLE != 'head nurse' &&
                    p.ROLE != 'social worker',
                ).length,
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
  Nf = je.createContext && je.createContext(wv),
  Pn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Pn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        Pn.apply(this, arguments)
      );
    },
  gw =
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
function Sv(e) {
  return (
    e &&
    e.map(function (t, n) {
      return je.createElement(t.tag, Pn({ key: n }, t.attr), Sv(t.child));
    })
  );
}
function Et(e) {
  return function (t) {
    return o(yw, { ...Pn({ attr: Pn({}, e.attr) }, t), children: Sv(e.child) });
  };
}
function yw(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      a = gw(e, ['attr', 'size', 'title']),
      s = l || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      E('svg', {
        ...Pn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: u,
            style: Pn(Pn({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        children: [i && o('title', { children: i }), e.children],
      })
    );
  };
  return Nf !== void 0
    ? o(Nf.Consumer, {
        children: function (n) {
          return t(n);
        },
      })
    : t(wv);
}
function xw(e) {
  return Et({
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
function Ew(e) {
  return Et({
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
function Nw(e) {
  return Et({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          {
            tag: 'path',
            attr: {
              d: 'M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
            },
          },
        ],
      },
    ],
  })(e);
}
function ww(e) {
  return Et({
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
function Sw(e) {
  return Et({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { d: 'M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z' } },
    ],
  })(e);
}
function Cw(e) {
  return Et({
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
function kw(e) {
  return Et({
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
function Cv(e) {
  return Et({
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
function kv(e) {
  return Et({
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
const st = () => {
    const { role: e } = Kr();
    return o(A, {
      children: E('aside', {
        className: 'menu user-select-none',
        children: [
          o('p', { className: 'menu-label', children: 'Obecn\xE9' }),
          o('ul', {
            className: 'menu-list',
            children: o('li', {
              children: E(Wu, {
                className: 'menu-item',
                to: '/admin/dashboard',
                children: [o(xw, {}), ' P\u0159ehled'],
              }),
            }),
          }),
          o('p', { className: 'menu-label', children: 'Spr\xE1va' }),
          E('ul', {
            className: 'menu-list',
            children: [
              o('li', {
                children: E(Ne, {
                  className: e == 'admin' ? 'menu-item active' : 'menu-item',
                  to: '/table/admin/page/1',
                  children: [o(Ew, {}), ' Spr\xE1vci'],
                }),
              }),
              E('li', {
                children: [
                  o('a', {
                    className: 'menu-disabled',
                    children: 'L\xE9ka\u0159sk\xFD t\xFDm',
                  }),
                  E('ul', {
                    children: [
                      o('li', {
                        children: E(Ne, {
                          className:
                            e == 'administration'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/administration/page/1',
                          children: [o(Cw, {}), ' Veden\xED'],
                        }),
                      }),
                      o('li', {
                        children: E(Ne, {
                          className:
                            e == 'doctor' ? 'menu-item active' : 'menu-item',
                          to: '/table/doctor/page/1',
                          children: [o(Sw, {}), ' L\xE9ka\u0159i'],
                        }),
                      }),
                      o('li', {
                        children: E(Ne, {
                          className:
                            e == 'nurse' ? 'menu-item active' : 'menu-item',
                          to: '/table/nurse/page/1',
                          children: [o(ww, {}), ' Sest\u0159i\u010Dky'],
                        }),
                      }),
                      o('li', {
                        children: E(Ne, {
                          className:
                            e == 'announcements'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/announcements/page/1',
                          children: [o(kw, {}), ' Ud\xE1losti'],
                        }),
                      }),
                      o('li', {
                        children: E(Ne, {
                          className:
                            e == 'info' ? 'menu-item active' : 'menu-item',
                          to: '/table/info/page/1',
                          children: [o(Nw, {}), ' \u010Clenov\xE9 t\xFDmu'],
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
  ut = () => {
    const [e, t] = h.exports.useState(!1),
      [n, r] = h.exports.useState(!1),
      [l, i] = h.exports.useState(''),
      [a, s] = h.exports.useState(!0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.post('http://localhost:8080/api/auth/verify', {
            withCredentials: !0,
          })
            .then(async (d) => {
              const p = await d.data.username;
              i(p);
            })
            .catch((d) => {
              s(!1);
            });
      }),
      E(A, {
        children: [
          !a && o(it, { to: '/', replace: !0 }),
          n && o(it, { to: '/', replace: !0 }),
          E('div', {
            className: 'navbar admin-navbar',
            children: [
              o(Ne, {
                className: 'admin-brand',
                to: '/admin/dashboard',
                children: 'Zdravotn\u011B soci\xE1ln\xED slu\u017Eby Turnov',
              }),
              o('div', {
                className: 'navbar-start',
                children: o(Wu, {
                  className: 'admin-item',
                  to: '/admin/dashboard',
                  children: 'Home',
                }),
              }),
              o('div', {
                className: 'navbar-end',
                children: E('div', {
                  className: e
                    ? 'dropdown is-right is-active user-menu'
                    : 'dropdown is-right user-menu',
                  onClick: () => {
                    t(!e);
                  },
                  children: [
                    o('div', {
                      className: 'dropdown-trigger',
                      children: E('button', {
                        className: 'button',
                        'aria-haspopup': 'true',
                        'aria-controls': 'dropdown-menu4',
                        children: [
                          o('span', { children: l }),
                          o('span', {
                            className: 'icon is-small',
                            children: o('i', {
                              className: 'fas fa-angle-down',
                              'aria-hidden': 'true',
                            }),
                          }),
                        ],
                      }),
                    }),
                    o('div', {
                      className: 'dropdown-menu user-menu-active',
                      id: 'dropdown-menu4',
                      role: 'menu',
                      children: o('div', {
                        className: 'dropdown-content',
                        children: o('div', {
                          className: 'dropdown-item',
                          children: o('div', {
                            className: 'dropdown-item',
                            onClick: () => {
                              (F.defaults.withCredentials = !0),
                                F.post(
                                  'http://localhost:8080/api/auth/logout',
                                  {},
                                  { withCredentials: !0 },
                                ).then((d) => {
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
  Rw = () => {
    const [e, t] = h.exports.useState(!0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.post('http://localhost:8080/api/auth/verify', {
            withCredentials: !0,
          })
            .then((n) => {
              t(!0);
            })
            .catch((n) => {
              t(!1);
            });
      }),
      E(A, {
        children: [
          !e && o(it, { to: '/', replace: !0 }),
          o(ut, {}),
          o('div', {
            className: 'section admin-layout',
            children: E('div', {
              className: 'columns',
              children: [
                o('div', { className: 'column is-2', children: o(st, {}) }),
                o('div', { className: 'column is-10', children: o(vw, {}) }),
              ],
            }),
          }),
        ],
      })
    );
  };
function Dw(e) {
  return Et({
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
const Pw = () => {
    const [e, t] = h.exports.useState({ username: '', password: '' }),
      [n, r] = h.exports.useState(!1),
      l = (a) => {
        t((s) => ({ ...s, [a.target.name]: a.target.value }));
      };
    return E(Dv, {
      children: [
        n ? o(it, { to: '/admin', replace: !0 }) : o(A, {}),
        E('div', {
          className: 'columns is-multiline',
          children: [
            o('div', {
              className: 'column is-8 is-offset-2 register',
              children: E('div', {
                className: 'columns',
                children: [
                  o('div', {
                    className: 'column left',
                    children: o(gE, { src: 'login.png' }),
                  }),
                  E('div', {
                    className: 'column right has-text-centered',
                    children: [
                      o('h1', {
                        className: 'title is-4',
                        children: 'P\u0159ihl\xE1sit se',
                      }),
                      E(cl, {
                        onSubmit: async (a) => {
                          a.preventDefault(),
                            (F.defaults.withCredentials = !0),
                            await F.post(
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
                              .catch(a);
                        },
                        children: [
                          o(cl.Group, {
                            className: 'form-field',
                            controlId: 'controlName',
                            children: o(cl.Control, {
                              name: 'username',
                              className: 'form-input input is-medium',
                              type: 'text',
                              placeholder: 'P\u0159ihla\u0161ovac\xED jm\xE9no',
                              onChange: (a) => l(a),
                            }),
                          }),
                          o(cl.Group, {
                            className: 'form-field',
                            controlId: 'controlPwd',
                            children: o(cl.Control, {
                              name: 'password',
                              className: 'form-input input is-medium',
                              type: 'password',
                              placeholder: 'Heslo',
                              onChange: (a) => l(a),
                            }),
                          }),
                          o('button', {
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
            o('div', {
              className: 'column is-8 is-offset-2',
              children: o('div', {
                className: 'level',
                children: o('div', {
                  className: 'level-left',
                  children: o('div', {
                    className: 'level-item',
                    children: o('a', {
                      href: 'http://www.zsst.cz/',
                      children: o(Dw, {}),
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
  Ow = ({ className: e, title: t, description: n }) =>
    o(A, {
      children: E('article', {
        className: `message event is-danger ${e}`,
        children: [
          o('h1', { className: 'message-header event-title', children: t }),
          o('p', { className: 'message-body event-description', children: n }),
        ],
      }),
    }),
  Tw = () => {
    const [e, t] = h.exports.useState([]),
      n = 30,
      [r, l] = h.exports.useState(30),
      [i, a] = h.exports.useState(!1);
    return (
      h.exports.useEffect(() => {
        const s = setInterval(() => {
          let u = r;
          l(u - 0.01), u <= 0 && a(!0);
        }, 10);
        return () => clearInterval(s);
      }),
      h.exports.useEffect(() => {
        F.get('http://localhost:8080/api/announcement/all').then(async (s) => {
          t(await s.data);
        });
      }, []),
      E(A, {
        children: [
          i && o(it, { to: '/info' }),
          E('div', {
            className: 'event-container has-text-centered font',
            children: [
              o('h1', {
                className: 'title info-title',
                children: 'Ud\xE1losti',
              }),
              o('progress', {
                className: 'progress is-danger is-large',
                value: r,
                max: n,
              }),
              e &&
                e
                  .slice(0, 8)
                  .map((s) =>
                    o(A, {
                      children: o(
                        Ow,
                        {
                          className: s.date ? 'is-warning' : 'is-primary',
                          title: s.title,
                          description: s.description,
                        },
                        s.title,
                      ),
                    }),
                  ),
              o(wc, {}),
            ],
          }),
        ],
      })
    );
  };
var yl = {},
  Rv = {};
const Lw = Iv(My);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
  var t = i(h.exports),
    n = i(Fe.exports),
    r = Lw,
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
  function i(y) {
    return y && y.__esModule ? y : { default: y };
  }
  function a(y, S) {
    var v = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(y);
      S &&
        (g = g.filter(function (N) {
          return Object.getOwnPropertyDescriptor(y, N).enumerable;
        })),
        v.push.apply(v, g);
    }
    return v;
  }
  function s(y) {
    for (var S = 1; S < arguments.length; S++) {
      var v = arguments[S] != null ? arguments[S] : {};
      S % 2
        ? a(Object(v), !0).forEach(function (g) {
            u(y, g, v[g]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(v))
        : a(Object(v)).forEach(function (g) {
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
      N;
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(y);
      for (N = 0; N < w.length; N++)
        (g = w[N]),
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
      N,
      w;
    for (w = 0; w < g.length; w++)
      (N = g[w]), !(S.indexOf(N) >= 0) && (v[N] = y[N]);
    return v;
  }
  var f = function (S) {
      return !!(S.metaKey || S.altKey || S.ctrlKey || S.shiftKey);
    },
    m = function (S) {
      var v = S.children,
        g = S.onClick,
        N = S.replace,
        w = S.to,
        R = S.state,
        T = S.activeClassName,
        O = S.className,
        _ = S.activeStyle,
        I = S.style,
        $ = S.isActive,
        xe = d(S, l),
        Ze = c(w) === 'object' ? w.pathname || '' : w,
        $e = (0, r.useNavigate)(),
        te = (0, r.useHref)(typeof w == 'string' ? { pathname: w } : w),
        Z = (0, r.useMatch)(Ze),
        Nt = (0, r.useLocation)(),
        qe = t.default.Children.only(v),
        L = !!($ ? (typeof $ == 'function' ? $(Z, Nt) : $) : Z),
        z = function (V) {
          v.props.onClick && v.props.onClick(V),
            g && g(V),
            !V.defaultPrevented &&
              V.button === 0 &&
              !f(V) &&
              (V.preventDefault(), $e(w, { replace: N, state: R }));
        };
      return t.default.cloneElement(
        qe,
        s(
          s({}, xe),
          {},
          {
            className: [O, qe.props.className, L ? T : null].join(' ').trim(),
            style: L ? s(s({}, I), _) : I,
            href: te,
            onClick: z,
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
})(Rv);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'LinkContainer', {
      enumerable: !0,
      get: function () {
        return t.default;
      },
    });
  var t = n(Rv);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
})(yl);
const Dv = (e) =>
    E(A, {
      children: [
        o(Fo, {
          collapseOnSelect: !0,
          expand: 'lg',
          bg: 'light',
          variant: 'light',
          className: 'layout-navbar',
          children: E(tf, {
            fluid: !0,
            children: [
              o(Fo.Toggle, { 'aria-controls': 'responsive-navbar-nav' }),
              E(Fo.Collapse, {
                id: 'responsive-navbar-nav',
                children: [
                  E(ur, {
                    className: 'me-auto',
                    children: [
                      o(yl.LinkContainer, {
                        to: '/status',
                        children: o(ur.Link, {
                          children: 'Stavy zam\u011Bstnanc\u016F',
                        }),
                      }),
                      o(yl.LinkContainer, {
                        to: '/info',
                        children: o(ur.Link, { children: 'Informace' }),
                      }),
                      o(yl.LinkContainer, {
                        to: '/events',
                        children: o(ur.Link, { children: 'Ud\xE1losti' }),
                      }),
                    ],
                  }),
                  o(ur, {
                    children: o(yl.LinkContainer, {
                      to: '/login',
                      children: o(ur.Link, {
                        children: 'P\u0159ihl\xE1sit se',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        o(tf, { className: 'main-content', children: e.children }),
      ],
    }),
  _w = () => {
    const [e, t] = h.exports.useState([]),
      [n, r] = h.exports.useState(''),
      [l, i] = h.exports.useState('');
    return (
      h.exports.useEffect(
        () => (
          F.get('http://localhost:8080/api/employee/all').then(async (a) => {
            t(await a.data);
          }),
          () => {}
        ),
        [],
      ),
      h.exports.useEffect(() => {
        const a = setInterval(() => {
          r(
            new Intl.DateTimeFormat(['ban', 'id'])
              .format(new Date())
              .replaceAll('/', '. '),
          ),
            i(new Date().toLocaleTimeString());
        }, 1e3);
        return () => clearInterval(a);
      }, []),
      E(A, {
        children: [
          console.log(e),
          E('div', {
            className: 'status-container has-text-centered font',
            children: [
              o('div', {
                className: 'containers directors-container',
                children: E('div', {
                  className: 'card',
                  children: [
                    o('div', {
                      className: 'card-header',
                      children: E('div', {
                        className: 'date-holder',
                        children: [
                          o('p', {
                            className: 'date',
                            children: 'Dne\u0161n\xED datum: ',
                          }),
                          ' ',
                          o('p', { className: 'date', children: n }),
                          ' ',
                          o('p', { className: 'date time', children: l }),
                        ],
                      }),
                    }),
                    o('div', {
                      className: 'card-content',
                      children: o('div', {
                        className: 'content',
                        children: o('div', {
                          className: 'card',
                          children:
                            e &&
                            e
                              .filter(
                                (a) => a.ROLE != 'doctor' && a.ROLE != 'nurse',
                              )
                              .map((a) =>
                                E('div', {
                                  className: 'director',
                                  children: [
                                    o('p', {
                                      className: 'director-role',
                                      children:
                                        a.ROLE == 'chairman'
                                          ? '\u0158editel/ka'
                                          : a.ROLE == 'vice chairman'
                                          ? 'Z\xE1stupce \u0159editele'
                                          : a.ROLE == 'head nurse'
                                          ? 'Vedouc\xED sestra'
                                          : a.ROLE == 'social worker'
                                          ? 'Soci\xE1ln\xED pracovn\xEDk'
                                          : null,
                                    }),
                                    E('p', {
                                      className: 'director-name',
                                      children: [
                                        a.PREFIX,
                                        ' ',
                                        a.NAME.split(' ')[0].charAt(0),
                                        '. ',
                                        a.NAME.split(' ')[1],
                                      ],
                                    }),
                                    a.AVAILABILITY == 1
                                      ? E(A, {
                                          children: [
                                            o('p', {
                                              className:
                                                'employee-text available',
                                              children: 'Dostupn\xFD/\xE1',
                                            }),
                                            o(Cv, {
                                              className:
                                                'employee-text available',
                                              size: '1.5em',
                                            }),
                                          ],
                                        })
                                      : E(A, {
                                          children: [
                                            o('p', {
                                              className:
                                                'employee-text unavailable',
                                              children: 'Nedostupn\xFD/\xE1',
                                            }),
                                            o(kv, {
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
              o('div', {
                className: 'containers general-nurse',
                children: E('div', {
                  className: 'card',
                  children: [
                    o('div', {
                      className: 'card-header',
                      children: o('p', {
                        children: 'V\u0161eobecn\xE9 sestry',
                      }),
                    }),
                    o('div', {
                      className: 'card-content',
                      children: o('div', {
                        className: 'content',
                        children: E('div', {
                          className: 'general-nurse-info',
                          children: [
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'day-title',
                                  children: 'Denn\xED',
                                }),
                                o('div', { className: 'day-body' }),
                              ],
                            }),
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                o('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              o('div', {
                className: 'containers village',
                children: E('div', {
                  className: 'card',
                  children: [
                    E('div', {
                      className: 'card-header',
                      children: [
                        o('p', { children: 'Vesni\u010Dka' }),
                        ' ',
                        o('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    o('div', {
                      className: 'card-content',
                      children: o('div', {
                        className: 'content',
                        children: E('div', {
                          className: 'general-nurse-info',
                          children: [
                            o('div', {
                              className: 'card status-items',
                              children: o('div', {
                                className: 'cart-content',
                                children: E('div', {
                                  className: 'content',
                                  children: [
                                    o('div', {
                                      className: 'day-title',
                                      children: 'Denn\xED',
                                    }),
                                    o('div', { className: 'day-body' }),
                                  ],
                                }),
                              }),
                            }),
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                o('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              o('div', {
                className: 'containers first-floor',
                children: E('div', {
                  className: 'card is-warning',
                  children: [
                    E('div', {
                      className: 'card-header',
                      children: [
                        o('p', { children: '1. patro' }),
                        ' ',
                        o('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    o('div', {
                      className: 'card-content',
                      children: o('div', {
                        className: 'content',
                        children: E('div', {
                          className: 'general-nurse-info',
                          children: [
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'day-title',
                                  children: 'Denn\xED',
                                }),
                                o('div', { className: 'day-body' }),
                              ],
                            }),
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                o('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              o('div', {
                className: 'containers ground-floor',
                children: E('div', {
                  className: 'card',
                  children: [
                    E('div', {
                      className: 'card-header',
                      children: [
                        o('p', { children: 'P\u0159\xEDzem\xED' }),
                        ' ',
                        o('p', { children: 'Vedouc\xED odd\u011Blen\xED: ' }),
                      ],
                    }),
                    o('div', {
                      className: 'card-content',
                      children: o('div', {
                        className: 'content',
                        children: E('div', {
                          className: 'general-nurse-info',
                          children: [
                            o('div', {
                              className: 'card status-items',
                              children: o('div', {
                                className: 'day-title',
                                children: 'Denn\xED',
                              }),
                            }),
                            E('div', {
                              className: 'card status-items',
                              children: [
                                o('div', {
                                  className: 'night-title',
                                  children: 'No\u010Dn\xED',
                                }),
                                o('div', { className: 'night-body' }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              o(wc, {}),
            ],
          }),
        ],
      })
    );
  },
  bw = () => {
    const e = Ve(),
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
      [i, a] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(!1),
      [p, f] = h.exports.useState(!1),
      [m, x] = h.exports.useState(!1),
      [y, S] = h.exports.useState(!1),
      [v, g] = h.exports.useState(''),
      [N, w] = h.exports.useState(!1),
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
          ((F.defaults.withCredentials = !0),
          R == 'admin' && (r.username == '' && u(!0), r.password == ''))
        )
          return d(!0);
        if (
          R == 'employee' &&
          (t.name == '' && a(!0),
          t.shift == '' && f(!0),
          t.workplace == '' && x(!0),
          r.role == '' || t.role == '')
        )
          return S(!0);
        R != 'admin'
          ? F.post('http://localhost:8080/api/employee/new', t, {
              withCredentials: !0,
            })
              .then((I) => {
                I.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    w(!0);
                  }, 3e3));
              })
              .catch((I) => {
                g('error');
              })
          : F.post('http://localhost:8080/api/user/new', r, {
              withCredentials: !0,
            })
              .then((I) => {
                I.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    w(!0);
                  }, 3e3));
              })
              .catch((I) => {
                g('error');
              });
      };
    return E(A, {
      children: [
        N ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    className: 'create-update-container',
                    children: [
                      R != 'admin'
                        ? E(A, {
                            children: [
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Akademick\xFD titul',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('input', {
                                      name: 'prefix',
                                      className: 'input',
                                      type: 'text',
                                      placeholder: 'MUDr. PaedDr. PhD.',
                                      onChange: (I) => O(I),
                                    }),
                                  }),
                                ],
                              }),
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Neakademick\xFD titul',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('input', {
                                      name: 'suffix',
                                      className: 'input',
                                      type: 'text',
                                      placeholder: 'DiS.',
                                      onChange: (I) => O(I),
                                    }),
                                  }),
                                ],
                              }),
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('input', {
                                      required: !0,
                                      name: 'name',
                                      className: i
                                        ? 'input is-danger'
                                        : 'input',
                                      type: 'text',
                                      placeholder:
                                        'Jm\xE9no a p\u0159\xEDjmen\xED',
                                      onChange: (I) => {
                                        a(!1), O(I);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : E(A, {
                            children: [
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children:
                                      'P\u0159ihla\u0161ovac\xED jm\xE9no',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('input', {
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
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Heslo',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('input', {
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
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: y ? 'select is-danger' : 'select',
                              children: E('select', {
                                required: !0,
                                name: 'role',
                                onChange: (I) => {
                                  I.target.value == 'admin'
                                    ? T('admin')
                                    : T('employee'),
                                    a(!1),
                                    u(!1),
                                    d(!1),
                                    S(!1),
                                    f(!1),
                                    x(!1),
                                    O(I);
                                },
                                children: [
                                  o('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  o('option', {
                                    value: 'admin',
                                    children: 'Spr\xE1vce',
                                  }),
                                  o('option', {
                                    value: 'doctor',
                                    children: 'Doktor',
                                  }),
                                  o('option', {
                                    value: 'nurse',
                                    children: 'Sestra',
                                  }),
                                  o('option', {
                                    value: 'general nurse',
                                    children: 'V\u0161eobecn\xE1 sestra',
                                  }),
                                  o('option', {
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
                        ? E(A, {
                            children: [
                              E('div', {
                                className: 'field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Dostupnost',
                                  }),
                                  o('div', {
                                    className: 'control swap-availability',
                                    children: o('label', {
                                      className: 'checkbox',
                                      children: o('input', {
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
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Sm\u011Bna',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('div', {
                                      className: p
                                        ? 'select is-danger'
                                        : 'select',
                                      children: E('select', {
                                        required: !0,
                                        name: 'shift',
                                        onChange: (I) => {
                                          f(!1), O(I);
                                        },
                                        children: [
                                          o('option', {
                                            value: '',
                                            children: 'Vybrat sm\u011Bnu',
                                          }),
                                          o('option', {
                                            value: 'day',
                                            children: 'Denn\xED',
                                          }),
                                          o('option', {
                                            value: 'night',
                                            children: 'No\u010Dn\xED',
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              E('div', {
                                className: 'field create-field',
                                children: [
                                  o('label', {
                                    className: 'label',
                                    children: 'Odd\u011Blen\xED',
                                  }),
                                  o('div', {
                                    className: 'control',
                                    children: o('div', {
                                      className: m
                                        ? 'select is-danger'
                                        : 'select',
                                      children: E('select', {
                                        required: !0,
                                        name: 'workplace',
                                        onChange: (I) => {
                                          x(!1), O(I);
                                        },
                                        children: [
                                          o('option', {
                                            value: '',
                                            children: 'Vybrat odd\u011Blen\xED',
                                          }),
                                          o('option', {
                                            value: 'village',
                                            children: 'Vesni\u010Dka',
                                          }),
                                          o('option', {
                                            value: 'first-floor',
                                            children: 'Prvn\xED patro',
                                          }),
                                          o('option', {
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
                        : o(A, {}),
                    ],
                  }),
                  s
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'Vypl\u0148te p\u0159ihla\u0161ovac\xED jm\xE9no',
                      })
                    : null,
                  c
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Vypl\u0148te heslo',
                      })
                    : null,
                  i
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Vypl\u0148te jm\xE9no a p\u0159\xEDjmen\xED',
                      })
                    : null,
                  y
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte roli',
                      })
                    : null,
                  p
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte sm\u011Bnu',
                      })
                    : null,
                  m
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Vyberte odd\u011Blen\xED',
                      })
                    : null,
                  v == 'success'
                    ? R == 'admin'
                      ? o('p', {
                          className: 'has-text-success',
                          children:
                            'Spr\xE1vce byl \xFAsp\u011B\u0161n\u011B p\u0159id\xE1n, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                      : o('p', {
                          className: 'has-text-success',
                          children:
                            'Zam\u011Bstnanec/zam\u011Bstnankyn\u011B byl/a \xFAsp\u011B\u0161n\u011B p\u0159id\xE1n/a, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                    : v == 'error'
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'P\u0159id\xE1n\xED zam\u011Bstnance/zam\u011Bstnankyn\u011B se nezda\u0159ilo',
                      })
                    : null,
                  o('button', {
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
    const { uuid: e } = Kr(),
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
        (F.defaults.withCredentials = !0),
        F.get(
          `http://localhost:8080/api/employee/?group=EMPLOYEEID&data=${e}`,
          { withCredentials: !0 },
        ).then(async (l) => {
          const i = await l.data[0];
          n(i);
        });
    }, []);
    const r = (l) => {
      n({ ...t, [l.target.name]: l.target.value });
    };
    return E(A, {
      children: [
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    className: 'create-update-container',
                    children: [
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Akademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'PREFIX',
                              className: 'input',
                              type: 'text',
                              placeholder: t.PREFIX,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Neakademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'SUFFIX',
                              className: 'input',
                              type: 'text',
                              placeholder: t.SUFFIX,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'NAME',
                              className: 'input',
                              type: 'text',
                              placeholder: t.NAME,
                              onChange: (l) => r(l),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: 'select',
                              children: E('select', {
                                name: 'ROLE',
                                onChange: (l) => r(l),
                                children: [
                                  o('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  o('option', {
                                    value: 'doctor',
                                    children: 'Doktor',
                                  }),
                                  o('option', {
                                    value: 'nurse',
                                    children: 'Sest\u0159i\u010Dka',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Dostupnost',
                          }),
                          o('div', {
                            className: 'control swap-availability',
                            children: o('label', {
                              className: 'checkbox',
                              children: o('input', {
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
                  o('button', {
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
function ai(e) {
  return Et({
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
function oi(e) {
  return Et({
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
const Iw = ({ className: e, user: t }) => {
    const n = () => {
      (F.defaults.withCredentials = !0),
        F.delete(`http://localhost:8080/api/user/${t.USERID}`).then((r) => {
          r.status == 200 && window.location.reload();
        });
    };
    return o(je.Suspense, {
      fallback: o('div', { children: 'Loading...' }),
      children: E('div', {
        className: `modal ${e}`,
        children: [
          o('div', { className: 'modal-background' }),
          E('div', {
            className: 'modal-card',
            children: [
              E('header', {
                className: 'modal-card-head',
                children: [
                  E('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.NAME, '?'],
                  }),
                  o('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              E('footer', {
                className: 'modal-card-foot admin-modal',
                children: [
                  o('button', {
                    className: 'button is-success',
                    onClick: n,
                    children: 'Smazat',
                  }),
                  o('button', {
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
  Mw = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, i] = h.exports.useState(!1),
      [a, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = Ve(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/user/all').then(async (m) =>
            r(await m.data),
          );
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }, []),
      E(A, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          E('div', {
            className: 'section admin-layout',
            children: [
              E('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: E('div', {
                      className: 'table-container',
                      children: [
                        o('div', {
                          children: o(Ne, {
                            to: '/admin/create',
                            className: 'no-deco',
                            children: o('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat u\u017Eivatele',
                            }),
                          }),
                        }),
                        E('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: E('tr', {
                                children: [
                                  o('th', {
                                    children: 'U\u017Eivatelsk\xE9 jm\xE9no',
                                  }),
                                  o('th', { children: 'Role' }),
                                  o('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            o('tbody', {
                              children: n.slice(10 * (t - 1), 10 * t).map((m) =>
                                E(
                                  'tr',
                                  {
                                    children: [
                                      o('td', {
                                        children: o('p', {
                                          className: 'admin-value',
                                          children: m.USERNAME,
                                        }),
                                      }),
                                      o('td', {
                                        children: o('p', {
                                          className: 'admin-value',
                                          children: 'Spr\xE1vce',
                                        }),
                                      }),
                                      o('td', {
                                        children: E('div', {
                                          className: 'button-holder',
                                          children: [
                                            o(Ne, {
                                              to: `edit/${m.USERID}`,
                                              children: o('button', {
                                                className: 'button admin-edit',
                                                children: o(oi, {}),
                                              }),
                                            }),
                                            o('button', {
                                              className: 'button admin-edit',
                                              onClick: () => {
                                                s(m), i(!0);
                                              },
                                              children: o(ai, {}),
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
              E('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? o('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : o(A, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(A, {}),
                  E('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        E(A, {
                          children: [
                            parseInt(t) > 3 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              o('li', {
                                children: o('p', {
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
                      o('li', {
                        children: o('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        E(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        o('li', {
                          children: o('p', {
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
          l ? o(Iw, { className: l ? 'is-active' : '', user: a }) : null,
        ],
      })
    );
  },
  Fw = ({ className: e, announcement: t }) => {
    const n = () => {
      (F.defaults.withCredentials = !0),
        F.delete(
          `http://localhost:8080/api/announcement/${t.ANNOUNCEMENTID}`,
        ).then((r) => {
          r.status == 200 && window.location.reload();
        });
    };
    return o(je.Suspense, {
      fallback: o('div', { children: 'Loading...' }),
      children: E('div', {
        className: `modal ${e}`,
        children: [
          o('div', { className: 'modal-background' }),
          E('div', {
            className: 'modal-card',
            children: [
              E('header', {
                className: 'modal-card-head',
                children: [
                  E('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.TITLE, '?'],
                  }),
                  o('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              E('footer', {
                className: 'modal-card-foot admin-modal',
                children: [
                  o('button', {
                    className: 'button is-success',
                    onClick: n,
                    children: 'Smazat',
                  }),
                  o('button', {
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
  Aw = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, i] = h.exports.useState(!1),
      [a, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = Ve(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/announcement/all').then(
            async (m) => {
              r(await m.data), f(Math.ceil((await m.data.length) / 10));
            },
          );
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1), f(Math.ceil(n.length / 10));
      }, [p]),
      E(A, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          E('div', {
            className: 'section admin-layout',
            children: [
              E('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: E('div', {
                      className: 'table-container',
                      children: [
                        o('div', {
                          children: o(Ne, {
                            to: '/admin/create-event',
                            className: 'no-deco',
                            children: o('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat ud\xE1lost',
                            }),
                          }),
                        }),
                        E('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: E('tr', {
                                children: [
                                  o('th', { children: 'N\xE1zev ud\xE1losti' }),
                                  o('th', { children: 'Popis ud\xE1losti' }),
                                  o('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            o('tbody', {
                              children:
                                n &&
                                n.slice(10 * (t - 1), 10 * t).map((m) =>
                                  E(
                                    'tr',
                                    {
                                      children: [
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.TITLE,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className:
                                              'admin-value announcement-text',
                                            children: m.ANNOUNCEMENT,
                                          }),
                                        }),
                                        o('td', {
                                          children: E('div', {
                                            className: 'button-holder',
                                            children: [
                                              o(Ne, {
                                                to: `/admin/edit-event/${m.ANNOUNCEMENTID}`,
                                                children: o('button', {
                                                  className:
                                                    'button admin-edit',
                                                  children: o(oi, {}),
                                                }),
                                              }),
                                              o('button', {
                                                className: 'button admin-edit',
                                                onClick: () => {
                                                  s(m), i(!0);
                                                },
                                                children: o(ai, {}),
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
              E('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? o('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : o(A, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(A, {}),
                  E('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        E(A, {
                          children: [
                            parseInt(t) > 3 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              o('li', {
                                children: o('p', {
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
                      o('li', {
                        children: o('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        E(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        o('li', {
                          children: o('p', {
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
            ? o(Fw, { className: l ? 'is-active' : '', announcement: a })
            : o(A, {}),
        ],
      })
    );
  },
  Sc = ({ className: e, employee: t, onClick: n }) => {
    const [r, l] = h.exports.useState(!1),
      i = () => {
        (F.defaults.withCredentials = !0),
          F.delete(`http://localhost:8080/api/employee/${t.EMPLOYEEID}`).then(
            (a) => (
              a.status == 200 && (l(!0), window.location.reload()), l(!1)
            ),
          );
      };
    return E(je.Suspense, {
      fallback: o('div', { children: 'Loading...' }),
      children: [
        r && o(it, { to: '/admin/employees', replace: !0 }),
        E('div', {
          className: `modal ${e}`,
          children: [
            o('div', { className: 'modal-background' }),
            E('div', {
              className: 'modal-card',
              children: [
                E('header', {
                  className: 'modal-card-head',
                  children: [
                    E('p', {
                      className: 'modal-card-title',
                      children: ['Opravdu chcete smazat ', t.NAME, '?'],
                    }),
                    o('button', { className: 'delete', 'aria-label': 'close' }),
                  ],
                }),
                E('footer', {
                  className: 'modal-card-foot admin-modal',
                  children: [
                    o('button', {
                      className: 'button is-success',
                      onClick: i,
                      children: 'Smazat',
                    }),
                    o('button', {
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
  $w = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, i] = h.exports.useState(!1),
      [a, s] = h.exports.useState({}),
      [u, c] = h.exports.useState(!1),
      d = Ve(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/all').then((m) =>
            r(m.data),
          );
      }, []),
      h.exports.useEffect(() => {
        if (t < 1 || t == null) return c(!0);
        c(!1);
        let m = Math.ceil(n.length / 10);
        f(m);
      }, []),
      E(A, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          E('div', {
            className: 'section admin-layout',
            children: [
              E('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: E('div', {
                      className: 'table-container',
                      children: [
                        o('div', {
                          children: o(Ne, {
                            to: '/admin/create',
                            className: 'no-deco',
                            children: o('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat u\u017Eivatele',
                            }),
                          }),
                        }),
                        E('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: E('tr', {
                                children: [
                                  o('th', { children: 'Akademick\xFD titul' }),
                                  o('th', {
                                    children: 'Neakademick\xFD titul',
                                  }),
                                  o('th', {
                                    children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                                  }),
                                  o('th', { children: 'Role' }),
                                  o('th', { children: 'Dostupnost' }),
                                  o('th', { children: 'Pracovi\u0161t\u011B' }),
                                  o('th', { children: 'Sm\u011Bna' }),
                                  o('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            o('tbody', {
                              children: n.map((m) => {
                                if (m.ROLE == e)
                                  return E(
                                    'tr',
                                    {
                                      children: [
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.PREFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.SUFFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.NAME,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children:
                                              m.ROLE == 'doctor'
                                                ? 'Doktor/ka'
                                                : 'Sestra',
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children:
                                              m.AVAILABILITY == 1
                                                ? 'Dostupn\xFD/\xE1'
                                                : 'Nedostupn\xFD/\xE1',
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
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
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children:
                                              m.SHIFT == 'day'
                                                ? 'Denn\xED'
                                                : 'No\u010Dn\xED',
                                          }),
                                        }),
                                        o('td', {
                                          children: E('div', {
                                            className: 'button-holder',
                                            children: [
                                              o(Ne, {
                                                to: `edit/${m.EMPLOYEEID}`,
                                                children: o('button', {
                                                  className:
                                                    'button admin-edit',
                                                  children: o(oi, {}),
                                                }),
                                              }),
                                              o('button', {
                                                className: 'button admin-edit',
                                                onClick: () => {
                                                  s(m), i(!0);
                                                },
                                                children: o(ai, {}),
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
              E('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? o('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : o(A, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(A, {}),
                  E('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        E(A, {
                          children: [
                            parseInt(t) > 3 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              o('li', {
                                children: o('p', {
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
                      o('li', {
                        children: o('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        E(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        o('li', {
                          children: o('p', {
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
            ? o(Sc, {
                className: l ? 'is-active' : '',
                employee: a,
                onClick: () => {
                  i(!1);
                },
              })
            : null,
        ],
      })
    );
  },
  zw = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, i] = h.exports.useState(),
      [a, s] = h.exports.useState(!1),
      [u, c] = h.exports.useState(!1),
      d = Ve(),
      [p, f] = h.exports.useState(0);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/all').then(async (m) => {
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
      E(A, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          E('div', {
            className: 'section admin-layout',
            children: [
              E('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: E('div', {
                      className: 'table-container',
                      children: [
                        o('div', {
                          children: o(Ne, {
                            to: '/admin/create-member',
                            className: 'no-deco',
                            children: o('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat \u010Dlena veden\xED',
                            }),
                          }),
                        }),
                        E('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: E('tr', {
                                children: [
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children: 'Akademick\xFD titul',
                                    }),
                                  }),
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children: 'Neakademick\xFD titul',
                                    }),
                                  }),
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children:
                                        'Jm\xE9no a p\u0159\xEDjmen\xED',
                                    }),
                                  }),
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children: 'Role',
                                    }),
                                  }),
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children: 'Dostupnost',
                                    }),
                                  }),
                                  o('th', {
                                    children: o('p', {
                                      className: 'admin-value',
                                      children: 'Spr\xE1va',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            o('tbody', {
                              children: n
                                .filter(
                                  (m) =>
                                    m.ROLE != 'doctor' && m.ROLE != 'nurse',
                                )
                                .slice(10 * (t - 1), 10 * t)
                                .map((m) =>
                                  E(
                                    'tr',
                                    {
                                      children: [
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.PREFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.SUFFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: m.NAME,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
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
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children:
                                              m.AVAILABILITY == 1
                                                ? o(Cv, {})
                                                : o(kv, {}),
                                          }),
                                        }),
                                        E('td', {
                                          children: [
                                            o(Ne, {
                                              to: `edit/${m.EMPLOYEEID}`,
                                              children: o('button', {
                                                className: 'button admin-edit',
                                                children: o(oi, {}),
                                              }),
                                            }),
                                            o('button', {
                                              className: 'button admin-edit',
                                              onClick: () => {
                                                i(m), s(!0);
                                              },
                                              children: o(ai, {}),
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
              E('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? o('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : o(A, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(A, {}),
                  E('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (m) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        E(A, {
                          children: [
                            parseInt(t) > 3 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              o('li', {
                                children: o('p', {
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
                      o('li', {
                        children: o('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < p &&
                        E(A, {
                          children: [
                            parseInt(t) < p - 1 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (m) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < p - 2 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < p &&
                        o('li', {
                          children: o('p', {
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
          a
            ? o(Sc, {
                className: a ? 'is-active' : '',
                employee: l,
                setModal: (m) => s(!1),
              })
            : o(A, {}),
        ],
      })
    );
  },
  jw = ({ role: e, page: t }) => {
    const [n, r] = h.exports.useState([]),
      [l, i] = h.exports.useState({}),
      [a, s] = h.exports.useState(!1);
    h.exports.useState(!1);
    const [u, c] = h.exports.useState(0),
      d = Ve();
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/employee/all').then((p) =>
            r(p.data),
          );
      }, []),
      E(A, {
        children: [
          o(ut, {}),
          E('div', {
            className: 'section admin-layout',
            children: [
              E('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: E('div', {
                      className: 'table-container',
                      children: [
                        o('div', {
                          children: o(Ne, {
                            to: '/admin/create-team-member',
                            className: 'no-deco',
                            children: o('button', {
                              className: 'button add-employee float-right',
                              children: 'P\u0159idat \u010Dlena t\xFDmu',
                            }),
                          }),
                        }),
                        E('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: E('tr', {
                                children: [
                                  o('th', { children: 'Akademick\xFD titul' }),
                                  o('th', {
                                    children: 'Neakademick\xFD titul',
                                  }),
                                  o('th', {
                                    children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                                  }),
                                  o('th', { children: 'Role' }),
                                  o('th', { children: 'Spr\xE1va' }),
                                ],
                              }),
                            }),
                            o('tbody', {
                              children: n
                                .filter(
                                  (p) =>
                                    p.ROLE != 'doctor' &&
                                    p.ROLE != 'nurse' &&
                                    p.ROLE != 'chairman' &&
                                    p.ROLE != 'vice chairman' &&
                                    p.ROLE != 'head nurse' &&
                                    p.ROLE != 'social worker',
                                )
                                .map((p) =>
                                  E(
                                    'tr',
                                    {
                                      children: [
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: p.PREFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: p.SUFFIX,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: p.NAME,
                                          }),
                                        }),
                                        o('td', {
                                          children: o('p', {
                                            className: 'admin-value',
                                            children: p.ROLE,
                                          }),
                                        }),
                                        o('td', {
                                          children: E('div', {
                                            className: 'button-holder',
                                            children: [
                                              o(Ne, {
                                                to: `edit/${p.EMPLOYEEID}`,
                                                children: o('button', {
                                                  className:
                                                    'button admin-edit',
                                                  children: o(oi, {}),
                                                }),
                                              }),
                                              o('button', {
                                                className: 'button admin-edit',
                                                onClick: () => {
                                                  i(p), s(!0);
                                                },
                                                children: o(ai, {}),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    p.EMPLOYEEID,
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
              E('nav', {
                className: 'pagination table-pagination',
                role: 'navigation',
                'aria-label': 'pagination',
                children: [
                  parseInt(t) != 1
                    ? o('a', {
                        className:
                          'pagination-previous table-pagination-previous',
                        onClick: (p) =>
                          d(`/table/${e}/page/` + (parseInt(t) - 1)),
                        children: 'Previous',
                      })
                    : o(A, {}),
                  parseInt(t) != u && u > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (p) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(A, {}),
                  E('ul', {
                    className: 'pagination-list table-pagination-list',
                    children: [
                      parseInt(t) > 1 &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page 1',
                            onClick: (p) => d(`/table/${e}/page/` + 1),
                            children: '1',
                          }),
                        }),
                      parseInt(t) > 2 &&
                        E(A, {
                          children: [
                            parseInt(t) > 3 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                            parseInt(t) > 2 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) - 1),
                                  onClick: (p) =>
                                    d(`/table/${e}/page/` + (parseInt(t) - 1)),
                                  children: parseInt(t) - 1,
                                }),
                              }),
                          ],
                        }),
                      o('li', {
                        children: o('p', {
                          className: 'pagination-link is-current',
                          'aria-label': 'Page ' + parseInt(t),
                          'aria-current': 'page',
                          children: t,
                        }),
                      }),
                      parseInt(t) < u &&
                        E(A, {
                          children: [
                            parseInt(t) < u - 1 &&
                              o('li', {
                                children: o('p', {
                                  className: 'pagination-link',
                                  'aria-label':
                                    'Goto page ' + (parseInt(t) + 1),
                                  onClick: (p) =>
                                    d(`/table/${e}/page/` + (parseInt(t) + 1)),
                                  children: parseInt(t) + 1,
                                }),
                              }),
                            parseInt(t) < u - 2 &&
                              o('li', {
                                children: o('span', {
                                  className: 'pagination-ellipsis',
                                  children: '\u2026',
                                }),
                              }),
                          ],
                        }),
                      parseInt(t) < u &&
                        o('li', {
                          children: o('p', {
                            className: 'pagination-link',
                            'aria-label': 'Goto page ' + u,
                            onClick: (p) => d(`/table/${e}/page/${u}`),
                            children: u,
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a
            ? o(Sc, {
                className: a ? 'is-active' : '',
                employee: l,
                onClick: () => {
                  s(!1);
                },
              })
            : null,
        ],
      })
    );
  },
  Uw = () => {
    const { role: e, page: t } = Kr();
    return e == 'info'
      ? o(jw, { role: e, page: t })
      : e == 'admin'
      ? o(Mw, { role: e, page: t })
      : e == 'announcements'
      ? o(Aw, { role: e, page: t })
      : e == 'administration'
      ? o(zw, { role: e, page: t })
      : e == 'doctor' || e == 'nurse'
      ? o($w, { role: e, page: t })
      : o(A, {});
  },
  Bw = () => {
    const e = Ve(),
      { id: t } = Kr(),
      [n, r] = h.exports.useState({ USERID: '', USERNAME: '', PASSWORD: '' }),
      [l, i] = h.exports.useState(''),
      [a, s] = h.exports.useState(!1);
    h.exports.useEffect(() => {
      (F.defaults.withCredentials = !0),
        F.get(`http://localhost:8080/api/user/${t}`, {
          withCredentials: !0,
        }).then(async (c) => {
          const d = await c.data[0];
          r(d);
        });
    }, []);
    const u = (c) => {
      r({ ...n, [c.target.name]: c.target.value });
    };
    return E(A, {
      children: [
        a ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    className: 'create-update-container',
                    children: [
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'U\u017Eivatelsk\xE9 jm\xE9no',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'NAME',
                              className: 'input',
                              type: 'text',
                              placeholder: n.USERNAME,
                              onChange: (c) => u(c),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Nov\xE9 Heslo',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
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
                    ? o('p', {
                        className: 'has-text-success',
                        children:
                          'U\u017Eivatel byl \xFAsp\u011B\u0161n\u011B upraven, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : l == 'error'
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Nezda\u0159ila se \xFAprava u\u017Eivatele',
                      })
                    : null,
                  o('button', {
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
  Hw = () => {
    const e = Ve(),
      [t, n] = h.exports.useState({ TITLE: '', ANNOUNCEMENT: '' }),
      [r, l] = h.exports.useState(!1),
      [i, a] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(''),
      [p, f] = h.exports.useState(!1),
      m = (y) => {
        n({ ...t, [y.target.name]: y.target.value });
      },
      x = (y) => {
        if ((y.preventDefault(), t.TITLE == '' && a(!0), t.ANNOUNCEMENT == ''))
          return u(!0);
        if (t.ANNOUNCEMENT == '' && t.TITLE == '') {
          a(!0), u(!0);
          return;
        }
        if (t.ANNOUNCEMENT.length > 255) return l(!0);
        (F.defaults.withCredentials = !0),
          F.post('http://localhost:8080/api/announcement/new', t, {
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
    return E(A, {
      children: [
        p ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    children: [
                      E('div', {
                        className: 'field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'N\xE1zev ud\xE1losti',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'TITLE',
                              className: i ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'N\xE1zev ud\xE1losti',
                              onChange: (y) => {
                                a(!1), m(y);
                              },
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Popis ud\xE1losti',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('textarea', {
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
                    o('p', {
                      className: 'has-text-danger',
                      children:
                        'Popis ud\xE1losti nesm\xED b\xFDt del\u0161\xED ne\u017E 255 znak\u016F!',
                    }),
                  i
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'N\xE1zev ud\xE1losti nesm\xED b\xFDt pr\xE1zdn\xFD!',
                      })
                    : null,
                  s
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'Popis ud\xE1losti nesm\xED b\xFDt pr\xE1zdn\xFD!',
                      })
                    : null,
                  c == 'success'
                    ? o('p', {
                        className: 'has-text-success',
                        children:
                          'Ud\xE1lost byla \xFAsp\u011B\u0161n\u011B p\u0159id\xE1na, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : c == 'error'
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Nepoda\u0159ilo se p\u0159idat ud\xE1lost',
                      })
                    : null,
                  o('button', {
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
  Vw = () => {
    const { id: e } = Kr(),
      t = useNavigate(),
      [n, r] = h.exports.useState({ TITLE: '', ANNOUNCEMENT: '' }),
      [l, i] = h.exports.useState(''),
      [a, s] = h.exports.useState(!1);
    return (
      h.exports.useEffect(() => {
        (F.defaults.withCredentials = !0),
          F.get('http://localhost:8080/api/announcement/all', {
            withCredentials: !0,
          }).then((u) => {
            u.data.map(async (c) => {
              c.ANNOUNCEMENTID.trim() === e &&
                ((c.ANNOUNCEMENTID = e), r(await c));
            });
          });
      }, []),
      E(A, {
        children: [
          a ? t(-1) : null,
          o(ut, {}),
          o('div', {
            className: 'section admin-layout',
            children: E('div', {
              className: 'columns',
              children: [
                o('div', { className: 'column is-2', children: o(st, {}) }),
                E('div', {
                  className: 'column is-10',
                  children: [
                    E('form', {
                      children: [
                        E('div', {
                          className: 'field',
                          children: [
                            o('label', {
                              className: 'label',
                              children: 'N\xE1zev ud\xE1losti',
                            }),
                            o('div', {
                              className: 'control',
                              children: o('input', {
                                name: 'TITLE',
                                className: 'input',
                                type: 'text',
                                placeholder: n.TITLE,
                              }),
                            }),
                          ],
                        }),
                        E('div', {
                          className: 'field',
                          children: [
                            o('label', {
                              className: 'label',
                              children: 'Popis ud\xE1losti',
                            }),
                            o('div', {
                              className: 'control',
                              children: o('textarea', {
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
                      ? o('p', {
                          className: 'has-text-success',
                          children:
                            'Ud\xE1lost byla \xFAsp\u011B\u0161n\u011B upravena, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                        })
                      : l == 'error'
                      ? o('p', {
                          className: 'has-text-danger',
                          children: 'Nezda\u0159ila se \xFAprava ud\xE1losti',
                        })
                      : null,
                    o('button', {
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
  Ww = () => {
    const e = Ve(),
      [t, n] = h.exports.useState(!1),
      [r, l] = h.exports.useState({
        prefix: '',
        suffix: '',
        name: '',
        role: '',
        availability: 0,
        shift: '',
        workplace: '',
        imagename: '',
      }),
      [i, a] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(!1),
      [p, f] = h.exports.useState(''),
      [m, x] = h.exports.useState(),
      y = (v) => {
        l({ ...r, [v.target.name]: v.target.value });
      },
      S = (v) => {
        v.preventDefault(),
          r.name === '' && a(!0),
          r.role === '' && u(!0),
          r.imagename === '' && d(!0),
          console.log(r),
          (F.defaults.withCredentials = !0),
          F.post('http://localhost:8080/api/employee/new', r, {
            withCredentials: !0,
          })
            .then((N) => {
              N.status == 200 &&
                (f('success'),
                setTimeout(() => {
                  n(!0);
                }, 3e3));
            })
            .catch((N) => {
              f('error');
            });
        const g = new FormData();
        g.append('file', m),
          console.log(g),
          F({
            method: 'post',
            url: 'http://localhost:8080/api/image/upload',
            data: g,
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: !0,
          });
      };
    return E(A, {
      children: [
        t ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    className: 'create-update-container',
                    encType: 'multipart/form-data',
                    children: [
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Akademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'prefix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'MUDr. PaedDr. PhD.',
                              onChange: (v) => y(v),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Nekademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'suffix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'DiS.',
                              onChange: (v) => y(v),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'name',
                              className: i ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                              onChange: (v) => {
                                a(!1), y(v);
                              },
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'role',
                              className: i ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'Role',
                              onChange: (v) => {
                                u(!1), y(v);
                              },
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field image',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Obr\xE1zek',
                          }),
                          o('div', {
                            className: c
                              ? 'file has-name is-danger'
                              : 'file has-name is-success',
                            children: E('label', {
                              className: 'file-label',
                              children: [
                                o('input', {
                                  required: !0,
                                  className: 'file-input',
                                  type: 'file',
                                  name: 'imagename',
                                  onChange: (v) => {
                                    d(!1),
                                      v.target.files &&
                                        l({
                                          ...r,
                                          imagename: v.target.files[0].name,
                                        }),
                                      v.target.files && x(v.target.files[0]);
                                  },
                                }),
                                E('span', {
                                  className: 'file-cta',
                                  children: [
                                    o('span', {
                                      className: 'file-icon',
                                      children: o('i', {
                                        className: 'fas fa-upload',
                                      }),
                                    }),
                                    o('span', {
                                      className: 'file-label',
                                      children: 'Choose a file\u2026',
                                    }),
                                  ],
                                }),
                                o('span', {
                                  className: 'file-name',
                                  children: r.imagename,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Jm\xE9no nen\xED nastaven\xE9!',
                      })
                    : null,
                  s
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Role nen\xED nastaven\xE1!',
                      })
                    : null,
                  c
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'Nen\xED vlo\u017Een\xFD \u017E\xE1dn\xFD obr\xE1zek',
                      })
                    : null,
                  p == 'success'
                    ? o('p', {
                        className: 'has-text-success',
                        children:
                          '\u010Clen t\xFDmu byl p\u0159id\xE1n, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : p == 'error'
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'Nepoda\u0159ilo se p\u0159idat \u010Dlena t\xFDmu',
                      })
                    : null,
                  o('button', {
                    className: 'button crud float-right margin-top-10px',
                    onClick: S,
                    disabled: p == 'success',
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
  Kw = () => {
    const e = Ve(),
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
      [i, a] = h.exports.useState(!1),
      [s, u] = h.exports.useState(!1),
      [c, d] = h.exports.useState(''),
      p = (m) => {
        l({ ...r, [m.target.name]: m.target.value });
      },
      f = (m) => {
        m.preventDefault(),
          r.name === '' && a(!0),
          r.role === '' && u(!0),
          console.log(r),
          (F.defaults.withCredentials = !0),
          F.post('http://localhost:8080/api/employee/new', r, {
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
    return E(A, {
      children: [
        t ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: E('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              E('div', {
                className: 'column is-10',
                children: [
                  E('form', {
                    className: 'create-update-container',
                    children: [
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Akademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'prefix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'MUDr. PaedDr. PhD.',
                              onChange: (m) => p(m),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Nekademick\xFD titul',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'suffix',
                              className: 'input',
                              type: 'text',
                              placeholder: 'DiS.',
                              onChange: (m) => p(m),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                          }),
                          o('div', {
                            className: 'control',
                            children: o('input', {
                              name: 'name',
                              className: i ? 'input is-danger' : 'input',
                              type: 'text',
                              placeholder: 'Jm\xE9no a p\u0159\xEDjmen\xED',
                              onChange: (m) => {
                                a(!1), p(m);
                              },
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: s ? 'select is-danger' : 'select',
                              children: E('select', {
                                required: !0,
                                name: 'role',
                                onChange: (m) => {
                                  u(!1), p(m);
                                },
                                children: [
                                  o('option', {
                                    value: '',
                                    children: 'Vybrat roli',
                                  }),
                                  o('option', {
                                    value: 'chairman',
                                    children: '\u0158editel/ka',
                                  }),
                                  o('option', {
                                    value: 'vice chairman',
                                    children: 'Z\xE1stupce \u0159editele',
                                  }),
                                  o('option', {
                                    value: 'head nurse',
                                    children: 'Vedouc\xED sestra',
                                  }),
                                  o('option', {
                                    value: 'social worker',
                                    children: 'Soci\xE1ln\xED pracovnice',
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      E('div', {
                        className: 'field',
                        children: [
                          o('label', {
                            className: 'label',
                            children: 'Dostupnost',
                          }),
                          o('div', {
                            className: 'control swap-availability',
                            children: o('label', {
                              className: 'checkbox',
                              children: o('input', {
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
                  i
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Jm\xE9no nen\xED nastaven\xE9!',
                      })
                    : null,
                  s
                    ? o('p', {
                        className: 'has-text-danger',
                        children: 'Role nen\xED nastaven\xE1!',
                      })
                    : null,
                  c == 'success'
                    ? o('p', {
                        className: 'has-text-success',
                        children:
                          '\u010Clen rady byl p\u0159id\xE1n, p\u0159esm\u011Brov\xE1n\xED bude za 3 sekundy',
                      })
                    : c == 'error'
                    ? o('p', {
                        className: 'has-text-danger',
                        children:
                          'Nepoda\u0159ilo se p\u0159idat \u010Dlena rady',
                      })
                    : null,
                  o('button', {
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
  Qw = () =>
    E(Hu, {
      children: [
        o(Ce, { index: !0, element: o(cN, {}) }),
        o(Ce, {
          path: '/admin',
          element: o(it, { to: 'dashboard', replace: !0 }),
        }),
        o(Ce, { path: 'admin/dashboard', element: o(Rw, {}) }),
        o(Ce, { path: 'info', element: o(mw, {}) }),
        o(Ce, { path: 'login', element: o(Pw, {}) }),
        o(Ce, { path: 'status', element: o(_w, {}) }),
        o(Ce, { path: 'events', element: o(Tw, {}) }),
        o(Ce, { path: 'table/:role/page/:page', element: o(Uw, {}) }),
        o(Ce, { path: 'table/:role/edit/:uuid', element: o(wf, {}) }),
        o(Ce, { path: 'admin/create', element: o(bw, {}) }),
        o(Ce, { path: 'admin/create-event', element: o(Hw, {}) }),
        o(Ce, { path: 'admin/create-member', element: o(Kw, {}) }),
        o(Ce, { path: 'admin/create-team-member', element: o(Ww, {}) }),
        o(Ce, { path: 'admin/edit/:id', element: o(wf, {}) }),
        o(Ce, { path: 'admin/edit-user/:id', element: o(Bw, {}) }),
        o(Ce, { path: 'admin/edit-event/:id', element: o(Vw, {}) }),
      ],
    });
const Gw = zo.createRoot(document.getElementById('root'));
Gw.render(o(sm, { children: o(Qw, {}) }));
