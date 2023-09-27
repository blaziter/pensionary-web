function _v(e, t) {
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
function Av(e) {
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
 */ var Gl = Symbol.for('react.element'),
  Mv = Symbol.for('react.portal'),
  Fv = Symbol.for('react.fragment'),
  bv = Symbol.for('react.strict_mode'),
  $v = Symbol.for('react.profiler'),
  zv = Symbol.for('react.provider'),
  jv = Symbol.for('react.context'),
  Uv = Symbol.for('react.forward_ref'),
  Bv = Symbol.for('react.suspense'),
  Hv = Symbol.for('react.memo'),
  Vv = Symbol.for('react.lazy'),
  Pc = Symbol.iterator;
function Wv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pc && e[Pc]) || e['@@iterator']),
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
function Pf() {}
Pf.prototype = Ur.prototype;
function Qs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Rf),
    (this.updater = n || Cf);
}
var Xs = (Qs.prototype = new Pf());
Xs.constructor = Qs;
kf(Xs, Ur.prototype);
Xs.isPureReactComponent = !0;
var Dc = Array.isArray,
  Df = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Df.call(t, r) && !Of.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Gl,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: Ys.current,
  };
}
function Kv(e, t) {
  return {
    $$typeof: Gl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gs(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gl;
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
function Li(e, t, n, r, l) {
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
          case Gl:
          case Mv:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === '' ? '.' + Za(a, 0) : r),
      Dc(l)
        ? ((n = ''),
          e != null && (n = e.replace(Oc, '$&/') + '/'),
          Li(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Gs(l) &&
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
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Dc(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Za(i, s);
      a += Li(i, t, n, u, l);
    }
  else if (((u = Wv(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Za(i, s++)), (a += Li(i, t, n, u, l));
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
    Li(e, r, '', '', function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Xv(e) {
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
  Ti = { transition: null },
  Yv = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: Ti,
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
    if (!Gs(e))
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
W.StrictMode = bv;
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
      Df.call(t, u) &&
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
  return { $$typeof: Gl, type: e.type, key: l, ref: i, props: r, _owner: a };
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
W.createElement = Lf;
W.createFactory = function (e) {
  var t = Lf.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Uv, render: e };
};
W.isValidElement = Gs;
W.lazy = function (e) {
  return { $$typeof: Vv, _payload: { _status: -1, _result: e }, _init: Xv };
};
W.memo = function (e, t) {
  return { $$typeof: Hv, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Ti.transition;
  Ti.transition = {};
  try {
    e();
  } finally {
    Ti.transition = t;
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
  jo = _v({ __proto__: null, default: je }, [h.exports]);
var Tf = { exports: {} },
  If = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, z) {
    var U = T.length;
    T.push(z);
    e: for (; 0 < U; ) {
      var V = (U - 1) >>> 1,
        ne = T[V];
      if (0 < l(ne, z)) (T[V] = z), (T[U] = ne), (U = V);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var z = T[0],
      U = T.pop();
    if (U !== z) {
      T[0] = U;
      e: for (var V = 0, ne = T.length, It = ne >>> 1; V < It; ) {
        var We = 2 * (V + 1) - 1,
          he = T[We],
          Se = We + 1,
          ct = T[Se];
        if (0 > l(he, U))
          Se < ne && 0 > l(ct, he)
            ? ((T[V] = ct), (T[Se] = U), (V = Se))
            : ((T[V] = he), (T[We] = U), (V = We));
        else if (Se < ne && 0 > l(ct, U)) (T[V] = ct), (T[Se] = U), (V = Se);
        else break e;
      }
    }
    return z;
  }
  function l(T, z) {
    var U = T.sortIndex - z.sortIndex;
    return U !== 0 ? U : T.id - z.id;
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
    E = !1,
    x = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function N(T) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= T)
        r(c), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(c);
    }
  }
  function w(T) {
    if (((x = !1), N(T), !E))
      if (n(u) !== null) (E = !0), Nt(R);
      else {
        var z = n(c);
        z !== null && qe(w, z.startTime - T);
      }
  }
  function R(T, z) {
    (E = !1), x && ((x = !1), v(I), (I = -1)), (m = !0);
    var U = f;
    try {
      for (
        N(z), p = n(u);
        p !== null && (!(p.expirationTime > z) || (T && !xe()));

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
      if (p !== null) var It = !0;
      else {
        var We = n(c);
        We !== null && qe(w, We.startTime - z), (It = !1);
      }
      return It;
    } finally {
      (p = null), (f = U), (m = !1);
    }
  }
  var L = !1,
    O = null,
    I = -1,
    A = 5,
    $ = -1;
  function xe() {
    return !(e.unstable_now() - $ < A);
  }
  function Ze() {
    if (O !== null) {
      var T = e.unstable_now();
      $ = T;
      var z = !0;
      try {
        z = O(!0, T);
      } finally {
        z ? $e() : ((L = !1), (O = null));
      }
    } else L = !1;
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
  function Nt(T) {
    (O = T), L || ((L = !0), $e());
  }
  function qe(T, z) {
    I = S(function () {
      T(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || m || ((E = !0), Nt(R));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
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
        return T();
      } finally {
        f = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, z) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var U = f;
      f = T;
      try {
        return z();
      } finally {
        f = U;
      }
    }),
    (e.unstable_scheduleCallback = function (T, z, U) {
      var V = e.unstable_now();
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? V + U : V))
          : (U = V),
        T)
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
        (T = {
          id: d++,
          callback: z,
          priorityLevel: T,
          startTime: U,
          expirationTime: ne,
          sortIndex: -1,
        }),
        U > V
          ? ((T.sortIndex = U),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (x ? (v(I), (I = -1)) : (x = !0), qe(w, U - V)))
          : ((T.sortIndex = ne), t(u, T), E || m || ((E = !0), Nt(R))),
        T
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (T) {
      var z = f;
      return function () {
        var U = f;
        f = z;
        try {
          return T.apply(this, arguments);
        } finally {
          f = U;
        }
      };
    });
})(If);
(function (e) {
  e.exports = If;
})(Tf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
function Ih(e) {
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
  function d(f, m, E) {
    m === void 0 && (m = null);
    let x = Xt(l ? c().pathname : '/', f, m, E);
    return (
      Mh(
        x.pathname.charAt(0) === '/',
        'relative pathnames are not supported in memory history: ' +
          JSON.stringify(f),
      ),
      x
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
      let E = d(f, m);
      (i += 1),
        l.splice(i, l.length, E),
        r && s && s({ action: a, location: E });
    },
    replace(f, m) {
      a = oe.Replace;
      let E = d(f, m);
      (l[i] = E), r && s && s({ action: a, location: E });
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
function _h(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Xt(
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
function Ah(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: a = '/',
      search: s = '',
      hash: u = '',
    } = Tt(l.location.hash.substr(1));
    return Xt(
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
function bd(e) {
  return { usr: e.state, key: e.key };
}
function Xt(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Tt(t) : t,
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
function Tt(e) {
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
  function d(m, E) {
    s = oe.Push;
    let x = Xt(f.location, m, E);
    n && n(x, m);
    let S = bd(x),
      v = f.createHref(x);
    try {
      a.pushState(S, '', v);
    } catch {
      l.location.assign(v);
    }
    i && u && u({ action: s, location: x });
  }
  function p(m, E) {
    s = oe.Replace;
    let x = Xt(f.location, m, E);
    n && n(x, m);
    let S = bd(x),
      v = f.createHref(x);
    a.replaceState(S, '', v), i && u && u({ action: s, location: x });
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
var Ae;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Ae || (Ae = {}));
function qg(e) {
  return e.index === !0;
}
function bh(e, t, n) {
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
              children: r.children ? bh(r.children, i, n) : void 0,
            })
      );
    })
  );
}
function Cr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Tt(t) : t,
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
  } = typeof e == 'string' ? Tt(e) : e;
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
    ? (l = Tt(e))
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
  let t = bh(e.routes),
    n = null,
    r = new Set(),
    l = null,
    i = null,
    a = null,
    s = !1,
    u = Cr(t, e.history.location, e.basename),
    c = null;
  if (u == null) {
    let { matches: k, route: D, error: _ } = Hd(t);
    (u = k), (c = { [D.id]: _ });
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
    E = !1,
    x,
    S = !1,
    v = !1,
    g = [],
    N = [],
    w = new Map(),
    R = 0,
    L = -1,
    O = new Map(),
    I = new Set(),
    A = new Map(),
    $ = new Map();
  function xe() {
    return (
      (n = e.history.listen((k) => {
        let { action: D, location: _ } = k;
        return T(D, _);
      })),
      f.initialized || T(oe.Pop, f.location),
      p
    );
  }
  function Ze() {
    n && n(), r.clear(), x && x.abort(), f.fetchers.forEach((k, D) => Mn(D));
  }
  function $e(k) {
    return r.add(k), () => r.delete(k);
  }
  function te(k) {
    (f = ce({}, f, k)), r.forEach((D) => D(f));
  }
  function Z(k, D) {
    var _;
    let B =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        f.navigation.state === 'loading' &&
        ((_ = f.navigation.formAction) == null ? void 0 : _.split('?')[0]) ===
          k.pathname,
      H = D.loaderData
        ? { loaderData: Do(f.loaderData, D.loaderData, D.matches || []) }
        : {};
    te(
      ce({}, B ? {} : { actionData: null }, D, H, {
        historyAction: m,
        location: k,
        initialized: !0,
        navigation: Ro,
        revalidation: 'idle',
        restoreScrollPosition: f.navigation.formData
          ? !1
          : Cc(k, D.matches || f.matches),
        preventScrollReset: E,
      }),
    ),
      S ||
        m === oe.Pop ||
        (m === oe.Push
          ? e.history.push(k, k.state)
          : m === oe.Replace && e.history.replace(k, k.state)),
      (m = oe.Pop),
      (E = !1),
      (S = !1),
      (v = !1),
      (g = []),
      (N = []);
  }
  async function Nt(k, D) {
    if (typeof k == 'number') {
      e.history.go(k);
      return;
    }
    let { path: _, submission: B, error: H } = zd(k, D),
      ue = Xt(f.location, _, D && D.state),
      G = (D && D.replace) === !0 || B != null ? oe.Replace : oe.Push,
      K = D && 'preventScrollReset' in D ? D.preventScrollReset === !0 : void 0;
    return await T(G, ue, {
      submission: B,
      pendingError: H,
      preventScrollReset: K,
      replace: D && D.replace,
    });
  }
  function qe() {
    if (
      (ct(),
      te({ revalidation: 'loading' }),
      f.navigation.state !== 'submitting')
    ) {
      if (f.navigation.state === 'idle') {
        T(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      T(m || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function T(k, D, _) {
    x && x.abort(),
      (x = null),
      (m = k),
      (S = (_ && _.startUninterruptedRevalidation) === !0),
      Ov(f.location, f.matches),
      (E = (_ && _.preventScrollReset) === !0);
    let B = _ && _.overrideNavigation,
      H = Cr(t, D, e.basename);
    if (!H) {
      let { matches: zt, route: jt, error: bn } = Hd(t);
      Ga(), Z(D, { matches: zt, loaderData: {}, errors: { [jt.id]: bn } });
      return;
    }
    if (R0(f.location, D)) {
      Z(D, { matches: H });
      return;
    }
    x = new AbortController();
    let ue = sl(D, x.signal, _ && _.submission),
      G,
      K;
    if (_ && _.pendingError) K = { [kr(H).route.id]: _.pendingError };
    else if (_ && _.submission) {
      let zt = await z(ue, D, _.submission, H, { replace: _.replace });
      if (zt.shortCircuited) return;
      (G = zt.pendingActionData),
        (K = zt.pendingActionError),
        (B = ce({ state: 'loading', location: D }, _.submission));
    }
    let {
      shortCircuited: ee,
      loaderData: ve,
      errors: Pe,
    } = await U(ue, D, H, B, _ && _.submission, _ && _.replace, G, K);
    ee || ((x = null), Z(D, { matches: H, loaderData: ve, errors: Pe }));
  }
  async function z(k, D, _, B, H) {
    ct();
    let ue = ce({ state: 'submitting', location: D }, _);
    te({ navigation: ue });
    let G,
      K = Xd(B, D);
    if (!K.route.action) G = Vd(D);
    else if (((G = await ol('action', k, K)), k.signal.aborted))
      return { shortCircuited: !0 };
    if (Ir(G)) {
      let ee = ce(
        { state: 'loading', location: Xt(f.location, G.location) },
        _,
      );
      return await he(G, ee, H && H.replace), { shortCircuited: !0 };
    }
    if (Dl(G)) {
      let ee = kr(B, K.route.id);
      return (
        (H && H.replace) !== !0 && (m = oe.Push),
        { pendingActionError: { [ee.route.id]: G.error } }
      );
    }
    if (Vn(G)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [K.route.id]: G.data } };
  }
  async function U(k, D, _, B, H, ue, G, K) {
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
    let [ve, Pe] = jd(f, _, H, D, v, g, N, G, K, A);
    if (
      (Ga(
        (Te) =>
          !(_ && _.some((Ke) => Ke.route.id === Te)) ||
          (ve && ve.some((Ke) => Ke.route.id === Te)),
      ),
      ve.length === 0 && Pe.length === 0)
    )
      return (
        Z(D, {
          matches: _,
          loaderData: Do(f.loaderData, {}, _),
          errors: K || null,
          actionData: G || null,
        }),
        { shortCircuited: !0 }
      );
    S ||
      (Pe.forEach((Te) => {
        let [Ke] = Te;
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
          { navigation: ee, actionData: G || f.actionData || null },
          Pe.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
        ),
      )),
      (L = ++R),
      Pe.forEach((Te) => {
        let [Ke] = Te;
        return w.set(Ke, x);
      });
    let {
      results: zt,
      loaderResults: jt,
      fetcherResults: bn,
    } = await Se(f.matches, ve, Pe, k);
    if (k.signal.aborted) return { shortCircuited: !0 };
    Pe.forEach((Te) => {
      let [Ke] = Te;
      return w.delete(Ke);
    });
    let Zr = Wd(zt);
    if (Zr) {
      let Te = Po(f, Zr);
      return await he(Zr, Te, ue), { shortCircuited: !0 };
    }
    let { loaderData: si, errors: ir } = Bd(f, _, ve, jt, K, Pe, bn, $);
    $.forEach((Te, Ke) => {
      Te.subscribe((cn) => {
        (cn || Te.done) && $.delete(Ke);
      });
    }),
      lr();
    let Ja = q(L);
    return ce(
      { loaderData: si, errors: ir },
      Ja || Pe.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
    );
  }
  function V(k) {
    return f.fetchers.get(k) || w0;
  }
  function ne(k, D, _, B) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    w.has(k) && Fn(k);
    let H = Cr(t, _, e.basename);
    if (!H) {
      Jr(k, D, new Vr(404, 'Not Found', null));
      return;
    }
    let { path: ue, submission: G } = zd(_, B, !0),
      K = Xd(H, ue);
    if (G) {
      It(k, D, ue, K, G);
      return;
    }
    A.set(k, [ue, K]), We(k, D, ue, K);
  }
  async function It(k, D, _, B, H) {
    if ((ct(), A.delete(k), !B.route.action)) {
      let { error: wt } = Vd(_);
      Jr(k, D, wt);
      return;
    }
    let ue = f.fetchers.get(k),
      G = ce({ state: 'submitting' }, H, { data: ue && ue.data });
    f.fetchers.set(k, G), te({ fetchers: new Map(f.fetchers) });
    let K = new AbortController(),
      ee = sl(_, K.signal, H);
    w.set(k, K);
    let ve = await ol('action', ee, B);
    if (ee.signal.aborted) {
      w.get(k) === K && w.delete(k);
      return;
    }
    if (Ir(ve)) {
      w.delete(k), I.add(k);
      let wt = ce({ state: 'loading' }, H, { data: void 0 });
      f.fetchers.set(k, wt), te({ fetchers: new Map(f.fetchers) });
      let Ut = ce(
        { state: 'loading', location: Xt(f.location, ve.location) },
        H,
      );
      await he(ve, Ut);
      return;
    }
    if (Dl(ve)) {
      Jr(k, D, ve.error);
      return;
    }
    Vn(ve) && j(!1, 'defer() is not supported in actions');
    let Pe = f.navigation.location || f.location,
      zt = sl(Pe, K.signal),
      jt =
        f.navigation.state !== 'idle'
          ? Cr(t, f.navigation.location, e.basename)
          : f.matches;
    j(jt, "Didn't find any matches after fetcher action");
    let bn = ++R;
    O.set(k, bn);
    let Zr = ce({ state: 'loading', data: ve.data }, H);
    f.fetchers.set(k, Zr);
    let [si, ir] = jd(
      f,
      jt,
      H,
      Pe,
      v,
      g,
      N,
      { [B.route.id]: ve.data },
      void 0,
      A,
    );
    ir
      .filter((wt) => {
        let [Ut] = wt;
        return Ut !== k;
      })
      .forEach((wt) => {
        let [Ut] = wt,
          Rc = f.fetchers.get(Ut),
          Iv = {
            state: 'loading',
            data: Rc && Rc.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        f.fetchers.set(Ut, Iv), w.set(Ut, K);
      }),
      te({ fetchers: new Map(f.fetchers) });
    let {
      results: Ja,
      loaderResults: Te,
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
      let wt = Po(f, cn);
      await he(cn, wt);
      return;
    }
    let { loaderData: ui, errors: kc } = Bd(
        f,
        f.matches,
        si,
        Te,
        void 0,
        ir,
        Ke,
        $,
      ),
      Lv = {
        state: 'idle',
        data: ve.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    f.fetchers.set(k, Lv);
    let Tv = q(bn);
    f.navigation.state === 'loading' && bn > L
      ? (j(m, 'Expected pending action'),
        x && x.abort(),
        Z(f.navigation.location, {
          matches: jt,
          loaderData: ui,
          errors: kc,
          fetchers: new Map(f.fetchers),
        }))
      : (te(
          ce(
            { errors: kc, loaderData: Do(f.loaderData, ui, jt) },
            Tv ? { fetchers: new Map(f.fetchers) } : {},
          ),
        ),
        (v = !1));
  }
  async function We(k, D, _, B) {
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
    let G = new AbortController(),
      K = sl(_, G.signal);
    w.set(k, G);
    let ee = await ol('loader', K, B);
    if (
      (Vn(ee) && (ee = (await Kh(ee, K.signal, !0)) || ee),
      w.get(k) === G && w.delete(k),
      K.signal.aborted)
    )
      return;
    if (Ir(ee)) {
      let Pe = Po(f, ee);
      await he(ee, Pe);
      return;
    }
    if (Dl(ee)) {
      let Pe = kr(f.matches, D);
      f.fetchers.delete(k),
        te({
          fetchers: new Map(f.fetchers),
          errors: { [Pe.route.id]: ee.error },
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
  async function he(k, D, _) {
    k.revalidate && (v = !0),
      j(D.location, 'Expected a location on the redirect navigation'),
      (x = null);
    let B = _ === !0 ? oe.Replace : oe.Push;
    await T(B, D.location, { overrideNavigation: D });
  }
  async function Se(k, D, _, B) {
    let H = await Promise.all([
        ...D.map((K) => ol('loader', B, K)),
        ..._.map((K) => {
          let [, ee, ve] = K;
          return ol('loader', sl(ee, B.signal), ve);
        }),
      ]),
      ue = H.slice(0, D.length),
      G = H.slice(D.length);
    return (
      await Promise.all([
        Kd(k, D, ue, B.signal, !1, f.loaderData),
        Kd(
          k,
          _.map((K) => {
            let [, , ee] = K;
            return ee;
          }),
          G,
          B.signal,
          !0,
        ),
      ]),
      { results: H, loaderResults: ue, fetcherResults: G }
    );
  }
  function ct() {
    (v = !0),
      g.push(...Ga()),
      A.forEach((k, D) => {
        w.has(D) && (N.push(D), Fn(D));
      });
  }
  function Jr(k, D, _) {
    let B = kr(f.matches, D);
    Mn(k), te({ errors: { [B.route.id]: _ }, fetchers: new Map(f.fetchers) });
  }
  function Mn(k) {
    w.has(k) && Fn(k),
      A.delete(k),
      O.delete(k),
      I.delete(k),
      f.fetchers.delete(k);
  }
  function Fn(k) {
    let D = w.get(k);
    j(D, 'Expected fetch controller: ' + k), D.abort(), w.delete(k);
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
    for (let D of I) {
      let _ = f.fetchers.get(D);
      j(_, 'Expected fetcher: ' + D),
        _.state === 'loading' && (I.delete(D), k.push(D));
    }
    rr(k);
  }
  function q(k) {
    let D = [];
    for (let [_, B] of O)
      if (B < k) {
        let H = f.fetchers.get(_);
        j(H, 'Expected fetcher: ' + _),
          H.state === 'loading' && (Fn(_), O.delete(_), D.push(_));
      }
    return rr(D), D.length > 0;
  }
  function Ga(k) {
    let D = [];
    return (
      $.forEach((_, B) => {
        (!k || k(B)) && (_.cancel(), D.push(B), $.delete(B));
      }),
      D
    );
  }
  function Dv(k, D, _) {
    if (
      ((l = k), (a = D), (i = _ || ((B) => B.key)), !s && f.navigation === Ro)
    ) {
      s = !0;
      let B = Cc(f.location, f.matches);
      B != null && te({ restoreScrollPosition: B });
    }
    return () => {
      (l = null), (a = null), (i = null);
    };
  }
  function Ov(k, D) {
    if (l && i && a) {
      let _ = D.map((H) => Qd(H, f.loaderData)),
        B = i(k, _) || k.key;
      l[B] = a();
    }
  }
  function Cc(k, D) {
    if (l && i && a) {
      let _ = D.map((ue) => Qd(ue, f.loaderData)),
        B = i(k, _) || k.key,
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
        formAction: ja(Tt(r)),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: r };
  let l = Tt(r);
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
function Po(e, t) {
  let {
    formMethod: n,
    formAction: r,
    formEncType: l,
    formData: i,
  } = e.navigation;
  return {
    state: 'loading',
    location: Xt(e.location, t.location),
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
      (x, S) =>
        x.route.loader != null &&
        (C0(e.loaderData, e.matches[S], x) ||
          i.some((v) => v === x.route.id) ||
          Ud(e.location, e.matches[S], n, r, x, l, d)),
    ),
    E = [];
  return (
    c &&
      c.forEach((x, S) => {
        let [v, g] = x;
        a.includes(S)
          ? E.push([S, v, g])
          : l && Ud(v, g, n, v, g, l, d) && E.push([S, v, g]);
      }),
    [m, E]
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
  let s = _s(e),
    u = t.params,
    c = _s(r),
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
    (i = Ae.error), (a = d);
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
        type: Ae.redirect,
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
      i === Ae.error
        ? { type: i, error: new Vr(d, a.statusText, f), headers: a.headers }
        : { type: Ae.data, data: f, statusCode: a.status, headers: a.headers }
    );
  }
  return i === Ae.error
    ? { type: i, error: a }
    : a instanceof Hh
    ? { type: Ae.deferred, deferredData: a }
    : { type: Ae.data, data: a };
}
function sl(e, t, n) {
  let r = _s(e).toString(),
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
        (j(!Ir(d), 'Cannot handle redirect results in processLoaderData'),
        Dl(d))
      ) {
        let m = kr(e, f),
          E = d.error;
        r && ((E = Object.values(r)[0]), (r = void 0)),
          (a = Object.assign(a || {}, { [m.route.id]: E })),
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
    if (Dl(m)) {
      let E = kr(e.matches, f.route.id);
      (c && c[E.route.id]) || (c = ce({}, c, { [E.route.id]: m.error })),
        e.fetchers.delete(p);
    } else {
      if (Ir(m)) throw new Error('Unhandled fetcher revalidation redirect');
      if (Vn(m)) throw new Error('Unhandled fetcher deferred data');
      {
        let E = {
          state: 'idle',
          data: m.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(p, E);
      }
    }
  }
  return { loaderData: u, errors: c };
}
function Do(e, t, n) {
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
      type: Ae.error,
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
    if (Ir(n)) return n;
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
  return e.type === Ae.deferred;
}
function Dl(e) {
  return e.type === Ae.error;
}
function Ir(e) {
  return (e && e.type) === Ae.redirect;
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
        return { type: Ae.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: Ae.error, error: l };
      }
    return { type: Ae.data, data: e.deferredData.data };
  }
}
function Qh(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Qd(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Xd(e, t) {
  let n = typeof t == 'string' ? Tt(t).search : t.search;
  return e[e.length - 1].route.index && !Qh(n || '')
    ? e.slice(-2)[0]
    : e.slice(-1)[0];
}
function _s(e) {
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
 */ var P0 = h.exports,
  D0 = Symbol.for('react.element'),
  O0 = Symbol.for('react.fragment'),
  L0 = Object.prototype.hasOwnProperty,
  T0 = P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  I0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(e, t, n) {
  var r,
    l = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) L0.call(t, r) && !I0.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: D0,
    type: e,
    key: i,
    ref: a,
    props: l,
    _owner: T0.current,
  };
}
Ba.Fragment = O0;
Ba.jsx = Xh;
Ba.jsxs = Xh;
(function (e) {
  e.exports = Ba;
})(Ua);
const b = Ua.exports.Fragment,
  o = Ua.exports.jsx,
  y = Ua.exports.jsxs;
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
function _0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const A0 = typeof Object.is == 'function' ? Object.is : _0,
  { useState: M0, useEffect: F0, useLayoutEffect: b0, useDebugValue: $0 } = jo;
function z0(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = M0({ inst: { value: r, getSnapshot: t } });
  return (
    b0(() => {
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
    return !A0(n, r);
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
  Gh = h.exports.createContext(null);
function Jh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  An() || j(!1);
  let { basename: r, navigator: l } = h.exports.useContext(ni),
    { hash: i, pathname: a, search: s } = jr(e, { relative: n }),
    u = a;
  return (
    r !== '/' && (u = a === '/' ? r : Yt([r, a])),
    l.createHref({ pathname: u, search: s, hash: i })
  );
}
function An() {
  return h.exports.useContext(Wr) != null;
}
function on() {
  return An() || j(!1), h.exports.useContext(Wr).location;
}
function W0() {
  return h.exports.useContext(Wr).navigationType;
}
function Zh(e) {
  An() || j(!1);
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
  An() || j(!1);
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
  An() || j(!1);
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
    let E = typeof t == 'string' ? Tt(t) : t;
    a === '/' || ((c = E.pathname) == null ? void 0 : c.startsWith(a)) || j(!1),
      (u = E);
  } else u = s;
  let d = u.pathname || '/',
    p = a === '/' ? d : d.slice(a.length) || '/',
    f = Cr(e, { pathname: p }),
    m = rm(
      f &&
        f.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, i, E.params),
            pathname: Yt([a, E.pathname]),
            pathnameBase: E.pathnameBase === '/' ? a : Yt([a, E.pathnameBase]),
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
  return y(b, {
    children: [
      o('h2', { children: 'Unhandled Thrown Error!' }),
      o('h3', { style: { fontStyle: 'italic' }, children: t }),
      n ? o('pre', { style: l, children: n }) : null,
      o('p', { children: '\u{1F4BF} Hey developer \u{1F44B}' }),
      y('p', {
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
class X0 extends h.exports.Component {
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
      ? o(Gh.Provider, {
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
      ? o(X0, { location: n.location, component: c, error: u, children: d() })
      : d();
  }, null);
}
var As;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(As || (As = {}));
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
function G0(e) {
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
  let e = G0(As.UseRevalidator),
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
  let t = h.exports.useContext(Gh),
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
    (i.current = Ih({ initialEntries: r, initialIndex: l, v5Compat: !0 }));
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
  An() || j(!1);
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
  An() && j(!1);
  let s = t.replace(/^\/*/, '/'),
    u = h.exports.useMemo(
      () => ({ basename: s, navigator: i, static: a }),
      [s, i, a],
    );
  typeof r == 'string' && (r = Tt(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: f = null,
      key: m = 'default',
    } = r,
    E = h.exports.useMemo(() => {
      let x = zh(c, s);
      return x == null
        ? null
        : { pathname: x, search: d, hash: p, state: f, key: m };
    }, [s, c, d, p, f, m]);
  return E == null
    ? null
    : o(ni.Provider, {
        value: u,
        children: o(Wr.Provider, {
          children: n,
          value: { location: E, navigationType: l },
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
  return typeof t == 'function' ? t(n) : o(b, { children: t });
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
    history: Ih({
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
  Lo = 'application/x-www-form-urlencoded';
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
      (i = n.encType || e.getAttribute('enctype') || Lo),
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
        Lo),
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
      (i = n.encType || Lo),
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
    history: _h({ window: t == null ? void 0 : t.window }),
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
    history: Ah({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
    routes: ri(e),
  }).initialize();
}
function sm(e) {
  let { basename: t, children: n, window: r } = e,
    l = h.exports.useRef();
  l.current == null && (l.current = _h({ window: r, v5Compat: !0 }));
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
  l.current == null && (l.current = Ah({ window: r, v5Compat: !0 }));
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
    function E(x) {
      r && r(x), x.defaultPrevented || m(x);
    }
    return o('a', { ...p, href: f, onClick: i ? r : E, ref: n, target: u });
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
      E = m == null ? void 0 : m.navigation.location,
      x = jr(E || ''),
      v =
        h.exports.useMemo(
          () =>
            E
              ? za({ path: p.pathname, end: a, caseSensitive: l }, x.pathname)
              : null,
          [E, p.pathname, l, a, x.pathname],
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
      m = Xu(i, { relative: c });
    return o('form', {
      ref: t,
      method: f,
      action: m,
      onSubmit: n
        ? a
        : (x) => {
            if ((a && a(x), x.defaultPrevented)) return;
            x.preventDefault();
            let S = x.nativeEvent.submitter;
            p(S || x.currentTarget, { method: l, replace: r, relative: c });
          },
      ...d,
    });
  });
function Ry(e) {
  let { getKey: t, storageKey: n } = e;
  return _y({ getKey: t, storageKey: n }), null;
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
function Py(e) {
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
function Dy() {
  return Qu();
}
function Qu(e, t) {
  let { router: n } = Ku(Ql.UseSubmitImpl),
    r = Xu();
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
function Xu(e, t) {
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
let Ly = 0;
function Ty() {
  var e;
  let { router: t } = Ku(Ql.UseFetcher),
    n = h.exports.useContext(yt);
  n || j(!1);
  let r = (e = n.matches[n.matches.length - 1]) == null ? void 0 : e.route.id;
  r == null && j(!1);
  let [l] = h.exports.useState(() => String(++Ly)),
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
function Iy() {
  return [...cm(Ea.UseFetchers).fetchers.values()];
}
const Yd = 'react-router-scroll-positions';
let Pi = {};
function _y(e) {
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
    Ay(
      h.exports.useCallback(() => {
        if (u.state === 'idle') {
          let c = (t ? t(a, s) : null) || a.key;
          Pi[c] = window.scrollY;
        }
        sessionStorage.setItem(n || Yd, JSON.stringify(Pi)),
          (window.history.scrollRestoration = 'auto');
      }, [n, t, u.state, a, s]),
    ),
    h.exports.useLayoutEffect(() => {
      try {
        let c = sessionStorage.getItem(n || Yd);
        c && (Pi = JSON.parse(c));
      } catch {}
    }, [n]),
    h.exports.useLayoutEffect(() => {
      let c =
        r == null
          ? void 0
          : r.enableScrollRestoration(Pi, () => window.scrollY, t);
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
function Ay(e) {
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
      useFetcher: Ty,
      useFetchers: Iy,
      useFormAction: Xu,
      useLinkClickHandler: dm,
      useSearchParams: Py,
      useSubmit: Dy,
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
      parsePath: Tt,
      redirect: N0,
      renderMatches: uy,
      resolvePath: Uh,
      useActionData: ey,
      useAsyncError: ty,
      useAsyncValue: om,
      useHref: Jh,
      useInRouterContext: An,
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
function Gd(e) {
  return 'default' + e.charAt(0).toUpperCase() + e.substr(1);
}
function Fy(e) {
  var t = by(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function by(e, t) {
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
      a = i[Gd(r)],
      s = i[r],
      u = pm(i, [Gd(r), r].map(Fy)),
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
function Gu(e) {
  return (e && e.ownerDocument) || document;
}
function Vy(e) {
  var t = Gu(e);
  return (t && t.defaultView) || window;
}
function Wy(e, t) {
  return Vy(e).getComputedStyle(e, t);
}
var Ky = /([A-Z])/g;
function Qy(e) {
  return e.replace(Ky, '-$1').toLowerCase();
}
var Xy = /^ms-/;
function Di(e) {
  return Qy(e).replace(Xy, '-ms-');
}
var Yy =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Gy(e) {
  return !!(e && Yy.test(e));
}
function Gt(e, t) {
  var n = '',
    r = '';
  if (typeof t == 'string')
    return e.style.getPropertyValue(Di(t)) || Wy(e).getPropertyValue(Di(t));
  Object.keys(t).forEach(function (l) {
    var i = t[l];
    !i && i !== 0
      ? e.style.removeProperty(Di(l))
      : Gy(l)
      ? (r += l + '(' + i + ') ')
      : (n += Di(l) + ': ' + i + ';');
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
  Pt = 'entering',
  Vt = 'entered',
  Xl = 'exiting',
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
            ? ((u = mn), (i.appearStatus = Pt))
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
            ? a !== Pt && a !== Vt && (i = Pt)
            : (a === Pt || a === Vt) && (i = Xl);
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
          if ((this.cancelNextCallback(), i === Pt)) {
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
          this.safeSetState({ status: Pt }, function () {
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
          this.safeSetState({ status: Xl }, function () {
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
sn.ENTERING = Pt;
sn.ENTERED = Vt;
sn.EXITING = Xl;
const Va = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
);
var bs = !1,
  $s = !1;
try {
  var To = {
    get passive() {
      return (bs = !0);
    },
    get once() {
      return ($s = bs = !0);
    },
  };
  Va &&
    (window.addEventListener('test', To, To),
    window.removeEventListener('test', To, !0));
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
      e.addEventListener(t, a, bs ? r : i);
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
  var t = Gt(e, 'transitionDuration') || '',
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
  const n = Gt(e, t) || '',
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
        m = (L) => {
          f(ux(L));
        },
        E = (L) => (O) => {
          L && p.current && L(p.current, O);
        },
        x = h.exports.useCallback(E(e), [e]),
        S = h.exports.useCallback(E(t), [t]),
        v = h.exports.useCallback(E(n), [n]),
        g = h.exports.useCallback(E(r), [r]),
        N = h.exports.useCallback(E(l), [l]),
        w = h.exports.useCallback(E(i), [i]),
        R = h.exports.useCallback(E(a), [a]);
      return o(sn, {
        ref: d,
        ...c,
        onEnter: x,
        onEntered: v,
        onEntering: S,
        onExit: g,
        onExited: w,
        onExiting: N,
        addEndListener: R,
        nodeRef: p,
        children:
          typeof s == 'function'
            ? (L, O) => s(L, { ...O, ref: m })
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
  return r + parseInt(Gt(t, l[0]), 10) + parseInt(Gt(t, l[1]), 10);
}
const fx = {
    [mn]: 'collapse',
    [Xl]: 'collapsing',
    [Pt]: 'collapsing',
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
        E = h.exports.useMemo(
          () =>
            ul((v) => {
              v.style[p] = null;
            }, n),
          [p, n],
        ),
        x = h.exports.useMemo(
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
        onEntered: E,
        onExit: x,
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
const Px = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
  },
  Dx = { [Pt]: 'show', [Vt]: 'show' },
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
            className: Y('fade', e, t.props.className, Dx[a], n[a]),
          }),
      });
    },
  );
qu.defaultProps = Px;
qu.displayName = 'Fade';
const Ox = qu,
  Lx = {
    'aria-label': Fe.exports.string,
    onClick: Fe.exports.func,
    variant: Fe.exports.oneOf(['white']),
  },
  Tx = { 'aria-label': 'Close' },
  Wa = h.exports.forwardRef(({ className: e, variant: t, ...n }, r) =>
    o('button', {
      ref: r,
      type: 'button',
      className: Y('btn-close', t && `btn-close-${t}`, e),
      ...n,
    }),
  );
Wa.displayName = 'CloseButton';
Wa.propTypes = Lx;
Wa.defaultProps = Tx;
const Ix = Wa,
  ec = (e) =>
    h.exports.forwardRef((t, n) =>
      o('div', { ...t, ref: n, className: Y(t.className, e) }),
    );
var _x = /-(.)/g;
function Ax(e) {
  return e.replace(_x, function (t, n) {
    return n.toUpperCase();
  });
}
const Mx = (e) => e[0].toUpperCase() + Ax(e).slice(1);
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
const Pm = Rm,
  Dm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, as: n = 'div', ...r }, l) => {
      const i = le(e, 'card-header'),
        a = h.exports.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
      return o(Pm.Provider, {
        value: a,
        children: o(n, { ref: l, ...r, className: Y(t, i) }),
      });
    },
  );
Dm.displayName = 'CardHeader';
const bx = Dm,
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
  Header: bx,
  Footer: Vx,
  ImgOverlay: Wx,
});
function Qx(e) {
  var t = h.exports.useRef(e);
  return (t.current = e), t;
}
function Xx(e) {
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
function Gx({ as: e, bsPrefix: t, className: n, ...r }) {
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
const Lm = h.exports.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = 'div', bsPrefix: i, spans: a }] =
    Gx(e);
  return o(l, { ...r, ref: t, className: Y(n, !a.length && i) });
});
Lm.displayName = 'Col';
const Jx = Lm;
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
const Tm = h.exports.createContext(Va ? window : void 0);
Tm.Provider;
function Im() {
  return h.exports.useContext(Tm);
}
const _m = h.exports.createContext(null);
_m.displayName = 'NavbarContext';
const Xr = _m,
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
const Am = lc,
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
  bm = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, htmlFor: n, ...r }, l) => {
      const { controlId: i } = h.exports.useContext(ln);
      return (
        (e = le(e, 'form-check-label')),
        o('label', { ...r, ref: l, htmlFor: n || i, className: Y(t, e) })
      );
    },
  );
bm.displayName = 'FormCheckLabel';
const zs = bm,
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
        type: E = 'checkbox',
        label: x,
        children: S,
        as: v = 'input',
        ...g
      },
      N,
    ) => {
      (t = le(t, 'form-check')), (n = le(n, 'form-switch'));
      const { controlId: w } = h.exports.useContext(ln),
        R = h.exports.useMemo(() => ({ controlId: e || w }), [w, e]),
        L = (!S && x != null && x !== !1) || Yx(S, zs),
        O = o(Fm, {
          ...g,
          type: E === 'switch' ? 'checkbox' : E,
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
            L && t,
            r && `${t}-inline`,
            l && `${t}-reverse`,
            E === 'switch' && n,
          ),
          children:
            S ||
            y(b, {
              children: [
                O,
                L && o(zs, { title: m, children: x }),
                c && o(Am, { type: d, tooltip: u, children: c }),
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
      let E;
      return (
        u
          ? (E = { [`${e}-plaintext`]: !0 })
          : (E = { [e]: !0, [`${e}-${n}`]: n }),
        o(d, {
          ...p,
          type: t,
          size: r,
          ref: f,
          readOnly: c,
          id: l || m,
          className: Y(
            i,
            E,
            a && 'is-valid',
            s && 'is-invalid',
            t === 'color' && `${e}-color`,
          ),
        })
      );
    },
  );
zm.displayName = 'FormControl';
const iE = Object.assign(zm, { Feedback: Am }),
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
      y(Um, {
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
function Xm({ key: e, onClick: t, active: n, id: r, role: l, disabled: i }) {
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
  const [a, s] = Xm(Object.assign({ key: nc(l, i.href), active: r }, i));
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
  Gm = h.exports.forwardRef((e, t) => {
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
    const E = h.exports.useRef(null),
      x = (N) => {
        const w = E.current;
        if (!w) return null;
        const R = jn(w, `[${rf}]:not([aria-disabled=true])`),
          L = w.querySelector('[aria-selected=true]');
        if (!L || L !== document.activeElement) return null;
        const O = R.indexOf(L);
        if (O === -1) return null;
        let I = O + N;
        return I >= R.length && (I = 0), I < 0 && (I = R.length - 1), R[I];
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
            w = x(-1);
            break;
          case 'ArrowRight':
          case 'ArrowDown':
            w = x(1);
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
      if (E.current && c.current) {
        const N = E.current.querySelector(`[${rf}][aria-selected=true]`);
        N == null || N.focus();
      }
      c.current = !1;
    });
    const g = xm(t, E);
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
Gm.displayName = 'Nav';
const wE = Object.assign(Gm, { Item: Ym });
function Io(e) {
  e === void 0 && (e = Gu());
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
        (n[r] = `${parseInt(Gt(l, r) || '0', 10) + t.scrollBarWidth}px`),
      l.setAttribute(lf, ''),
      Gt(l, n);
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
const _o = (e, t) =>
  Va
    ? e == null
      ? (t || Gu()).body
      : (typeof e == 'function' && (e = e()),
        e && 'current' in e && (e = e.current),
        e && ('nodeType' in e || e.getBoundingClientRect) ? e : null)
    : null;
function CE(e, t) {
  const n = Im(),
    [r, l] = h.exports.useState(() => _o(e, n == null ? void 0 : n.document));
  if (!r) {
    const i = _o(e);
    i && l(i);
  }
  return (
    h.exports.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    h.exports.useEffect(() => {
      const i = _o(e);
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
let Ao;
function PE(e) {
  return (
    Ao || (Ao = new uc({ ownerDocument: e == null ? void 0 : e.document })), Ao
  );
}
function DE(e) {
  const t = Im(),
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
      enforceFocus: E = !0,
      restoreFocus: x = !0,
      restoreFocusOptions: S,
      renderDialog: v,
      renderBackdrop: g = (q) => o('div', Object.assign({}, q)),
      manager: N,
      container: w,
      onShow: R,
      onHide: L = () => {},
      onExit: O,
      onExited: I,
      onExiting: A,
      onEnter: $,
      onEntering: xe,
      onEntered: Ze,
    } = e,
    $e = RE(e, kE);
  const te = CE(w),
    Z = DE(N),
    Nt = vx(),
    qe = gx(n),
    [T, z] = h.exports.useState(!n),
    U = h.exports.useRef(null);
  h.exports.useImperativeHandle(t, () => Z, [Z]),
    Va && !qe && n && (U.current = Io()),
    !p && !n && !T ? z(!0) : n && T && z(!1);
  const V = Ft(() => {
      if (
        (Z.add(),
        (ct.current = Na(document, 'keydown', he)),
        (Se.current = Na(document, 'focus', () => setTimeout(It), !0)),
        R && R(),
        m)
      ) {
        const q = Io(document);
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
        x)
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
      !T || ne();
    }, [T, ne]),
    Xx(() => {
      ne();
    });
  const It = Ft(() => {
      if (!E || !Nt() || !Z.isTopModal()) return;
      const q = Io();
      Z.dialog && q && !ef(Z.dialog, q) && Z.dialog.focus();
    }),
    We = Ft((q) => {
      q.target === q.currentTarget && (c == null || c(q), s === !0 && L());
    }),
    he = Ft((q) => {
      u &&
        q.keyCode === 27 &&
        Z.isTopModal() &&
        (d == null || d(q), q.defaultPrevented || L());
    }),
    Se = h.exports.useRef(),
    ct = h.exports.useRef(),
    Jr = (...q) => {
      z(!0), I == null || I(...q);
    },
    Mn = p;
  if (!te || !(n || (Mn && !T))) return null;
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
      onExiting: A,
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
  return o(b, { children: Sr.createPortal(y(b, { children: [lr, rr] }), te) });
});
Jm.displayName = 'Modal';
const OE = Object.assign(Jm, { Manager: uc });
function LE(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
        ' ' + t + ' ',
      ) !== -1;
}
function TE(e, t) {
  e.classList
    ? e.classList.add(t)
    : LE(e, t) ||
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
function IE(e, t) {
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
    (n.dataset[t] = l), Gt(n, { [t]: `${parseFloat(Gt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], Gt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((TE(n, 'modal-open'), !t.scrollBarWidth)) return;
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
    IE(n, 'modal-open');
    const r = this.isRTL ? 'paddingLeft' : 'paddingRight',
      l = this.isRTL ? 'marginLeft' : 'marginRight';
    jn(n, sr.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
      jn(n, sr.STICKY_CONTENT).forEach((i) => this.restore(l, i)),
      jn(n, sr.NAVBAR_TOGGLER).forEach((i) => this.restore(l, i));
  }
}
let Mo;
function _E(e) {
  return Mo || (Mo = new Zm(e)), Mo;
}
const AE = Zm,
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
      return y('div', {
        ref: a,
        ...i,
        children: [l, n && o(Ix, { 'aria-label': e, variant: t, onClick: u })],
      });
    },
  );
ev.defaultProps = FE;
const bE = ev;
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
        var E = arguments.length, x = Array(E > 6 ? E - 6 : 0), S = 6;
        S < E;
        S++
      )
        x[S - 6] = arguments[S];
      return r.apply(void 0, [s, u, f, d, m].concat(x));
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
        s.forEach(function (E) {
          if (m == null) {
            var x = E.apply(void 0, p);
            x != null && (m = x);
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
      const [s, u] = Xm({ key: nc(l, i.href), active: r, ...i });
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
      E,
      x = !1;
    const S = h.exports.useContext(Xr),
      v = h.exports.useContext(Pm);
    return (
      S
        ? ((m = S.bsPrefix), (x = s == null ? !0 : s))
        : v && ({ cardHeaderBsPrefix: E } = v),
      o(wE, {
        as: n,
        ref: t,
        activeKey: d,
        className: Y(c, {
          [f]: !x,
          [`${m}-nav`]: x,
          [`${m}-nav-scroll`]: x && u,
          [`${E}-${l}`]: !!E,
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
    const l = h.exports.useContext(Xr);
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
      const { onToggle: u, expanded: c } = h.exports.useContext(Xr) || {},
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
        return Object.entries(d).reduce(function (m, E) {
          var x = E[0],
            S = E[1];
          return (
            (S === 'up' || S === !0) && (m = n(m, i(x))),
            (S === 'down' || S === !0) && (m = n(m, l(x))),
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
var XE = QE({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 });
const YE = xt('offcanvas-body'),
  GE = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1 },
  JE = { [Pt]: 'show', [Vt]: 'show' },
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
              (i === Pt || i === Xl) && `${e}-toggling`,
              JE[i],
            ),
          }),
      })
    ),
  );
pc.defaultProps = GE;
pc.displayName = 'OffcanvasToggling';
const ZE = pc,
  qE = { closeLabel: 'Close', closeButton: !1 },
  hc = h.exports.forwardRef(
    ({ bsPrefix: e, className: t, ...n }, r) => (
      (e = le(e, 'offcanvas-header')),
      o(bE, { ref: r, ...n, className: Y(t, e) })
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
      autoFocus: E,
      enforceFocus: x,
      restoreFocus: S,
      restoreFocusOptions: v,
      onEntered: g,
      onExit: N,
      onExiting: w,
      onEnter: R,
      onEntering: L,
      onExited: O,
      backdropClassName: I,
      manager: A,
      renderStaticNode: $,
      ...xe
    },
    Ze,
  ) => {
    const $e = h.exports.useRef();
    e = le(e, 'offcanvas');
    const { onToggle: te } = h.exports.useContext(Xr) || {},
      [Z, Nt] = h.exports.useState(!1),
      qe = XE(i || 'xs', 'up');
    h.exports.useEffect(() => {
      Nt(i ? a && !qe : a);
    }, [a, i, qe]);
    const T = Ft(() => {
        te == null || te(), f == null || f();
      }),
      z = h.exports.useMemo(() => ({ onHide: T }), [T]);
    function U() {
      return (
        A ||
        (c
          ? ($e.current ||
              ($e.current = new AE({ handleContainerOverflow: !1 })),
            $e.current)
          : _E())
      );
    }
    const V = (he, ...Se) => {
        he && (he.style.visibility = 'visible'), R == null || R(he, ...Se);
      },
      ne = (he, ...Se) => {
        he && (he.style.visibility = ''), O == null || O(...Se);
      },
      It = h.exports.useCallback(
        (he) => o('div', { ...he, className: Y(`${e}-backdrop`, I) }),
        [I, e],
      ),
      We = (he) =>
        o('div', {
          ...he,
          ...xe,
          className: Y(t, i ? `${e}-${i}` : e, `${e}-${l}`),
          'aria-labelledby': r,
          children: n,
        });
    return y(b, {
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
            autoFocus: E,
            enforceFocus: x && !c,
            restoreFocus: S,
            restoreFocusOptions: v,
            onEscapeKeyDown: d,
            onShow: p,
            onHide: T,
            onEnter: V,
            onEntering: L,
            onEntered: g,
            onExit: N,
            onExiting: w,
            onExited: ne,
            manager: U(),
            transition: lN,
            backdropTransition: iN,
            renderBackdrop: It,
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
    const n = h.exports.useContext(Xr);
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
        ...E
      } = hm(e, { expanded: 'onToggle' }),
      x = le(n, 'navbar'),
      S = h.exports.useCallback(
        (...N) => {
          f == null || f(...N), m && d && (p == null || p(!1));
        },
        [f, m, d, p],
      );
    E.role === void 0 && c !== 'nav' && (E.role = 'navigation');
    let v = `${x}-expand`;
    typeof r == 'string' && (v = `${v}-${r}`);
    const g = h.exports.useMemo(
      () => ({
        onToggle: () => (p == null ? void 0 : p(!d)),
        bsPrefix: x,
        expanded: !!d,
        expand: r,
      }),
      [x, d, r, p],
    );
    return o(Xr.Provider, {
      value: g,
      children: o(wa.Provider, {
        value: S,
        children: o(c, {
          ref: t,
          ...E,
          className: Y(
            u,
            x,
            r && v,
            l && `${x}-${l}`,
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
    o(Pv, {
      children: o(Oi, {
        className: 'home-wrapper font',
        children: y(Oi.Body, {
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
function Xa(e, t, { allOwnKeys: n = !1 } = {}) {
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
    arguments[n] && Xa(arguments[n], t);
  return e;
}
const SN = (e, t, n, { allOwnKeys: r } = {}) => (
    Xa(
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
  PN = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  DN = (e) => {
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
  LN = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let l;
    for (; (l = r.next()) && !l.done; ) {
      const i = l.value;
      t.call(e, i[0], i[1]);
    }
  },
  TN = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  IN = un('HTMLFormElement'),
  _N = (e) =>
    e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (n, r, l) {
      return r.toUpperCase() + l;
    }),
  uf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  AN = un('RegExp'),
  uv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Xa(n, (l, i) => {
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
  bN = () => {},
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
    isRegExp: AN,
    isFunction: Yr,
    isStream: xN,
    isURLSearchParams: NN,
    isTypedArray: ON,
    isFileList: yN,
    forEach: Xa,
    merge: Hs,
    extend: SN,
    trim: wN,
    stripBOM: CN,
    inherits: kN,
    toFlatObject: RN,
    kindOf: yc,
    kindOfTest: un,
    endsWith: PN,
    toArray: DN,
    forEachEntry: LN,
    matchAll: TN,
    isHTMLForm: IN,
    hasOwnProperty: uf,
    hasOwnProp: uf,
    reduceDescriptors: uv,
    freezeMethods: MN,
    toObjectSet: FN,
    toCamelCase: _N,
    noop: bN,
    toFiniteNumber: $N,
  };
function X(e, t, n, r, l) {
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
C.inherits(X, Error, {
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
const cv = X.prototype,
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
Object.defineProperties(X, dv);
Object.defineProperty(cv, 'isAxiosError', { value: !0 });
X.from = (e, t, n, r, l, i) => {
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
    X.call(a, e.message, t, n, r, l),
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
      function (x, S) {
        return !C.isUndefined(S[x]);
      },
    ));
  const r = n.metaTokens,
    l = n.visitor || d,
    i = n.dots,
    a = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && BN(t);
  if (!C.isFunction(l)) throw new TypeError('visitor must be a function');
  function c(E) {
    if (E === null) return '';
    if (C.isDate(E)) return E.toISOString();
    if (!u && C.isBlob(E))
      throw new X('Blob is not supported. Use a Buffer instead.');
    return C.isArrayBuffer(E) || C.isTypedArray(E)
      ? u && typeof Blob == 'function'
        ? new Blob([E])
        : Buffer.from(E)
      : E;
  }
  function d(E, x, S) {
    let v = E;
    if (E && !S && typeof E == 'object') {
      if (C.endsWith(x, '{}'))
        (x = r ? x : x.slice(0, -2)), (E = JSON.stringify(E));
      else if (
        (C.isArray(E) && jN(E)) ||
        C.isFileList(E) ||
        (C.endsWith(x, '[]') && (v = C.toArray(E)))
      )
        return (
          (x = fv(x)),
          v.forEach(function (N, w) {
            !(C.isUndefined(N) || N === null) &&
              t.append(
                a === !0 ? cf([x], w, i) : a === null ? x : x + '[]',
                c(N),
              );
          }),
          !1
        );
    }
    return Vs(E) ? !0 : (t.append(cf(S, x, i), c(E)), !1);
  }
  const p = [],
    f = Object.assign(UN, {
      defaultVisitor: d,
      convertValue: c,
      isVisitable: Vs,
    });
  function m(E, x) {
    if (!C.isUndefined(E)) {
      if (p.indexOf(E) !== -1)
        throw Error('Circular reference detected in ' + x.join('.'));
      p.push(E),
        C.forEach(E, function (v, g) {
          (!(C.isUndefined(v) || v === null) &&
            l.call(t, v, C.isString(g) ? g.trim() : g, x, f)) === !0 &&
            m(v, x ? x.concat(g) : [g]);
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
function XN(e) {
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
        t(XN(r), l, n, 0);
      }),
      n
    );
  }
  return null;
}
function GN(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new X(
          'Request failed with status code ' + n.status,
          [X.ERR_BAD_REQUEST, X.ERR_BAD_RESPONSE][
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
  X.call(this, e == null ? 'canceled' : e, X.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
C.inherits(ii, X, { __CANCEL__: !0 });
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
        E = e.auth.password
          ? unescape(encodeURIComponent(e.auth.password))
          : '';
      i.set('Authorization', 'Basic ' + btoa(m + ':' + E));
    }
    const d = gv(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), hv(d, e.params, e.paramsSerializer), !0),
      (c.timeout = e.timeout);
    function p() {
      if (!c) return;
      const m = mt.from(
          'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
        ),
        x = {
          data:
            !a || a === 'text' || a === 'json' ? c.responseText : c.response,
          status: c.status,
          statusText: c.statusText,
          headers: m,
          config: e,
          request: c,
        };
      GN(
        function (v) {
          n(v), u();
        },
        function (v) {
          r(v), u();
        },
        x,
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
        !c || (r(new X('Request aborted', X.ECONNABORTED, e, c)), (c = null));
      }),
      (c.onerror = function () {
        r(new X('Network Error', X.ERR_NETWORK, e, c)), (c = null);
      }),
      (c.ontimeout = function () {
        let E = e.timeout
          ? 'timeout of ' + e.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const x = e.transitional || mv;
        e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
          r(
            new X(
              E,
              x.clarifyTimeoutError ? X.ETIMEDOUT : X.ECONNABORTED,
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
        C.forEach(i.toJSON(), function (E, x) {
          c.setRequestHeader(x, E);
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
      r(new X('Unsupported protocol ' + f + ':', X.ERR_BAD_REQUEST, e));
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
const Gr = {
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
      const n = this.transitional || Gr.transitional,
        r = n && n.forcedJSONParsing,
        l = this.responseType === 'json';
      if (t && C.isString(t) && ((r && !this.responseType) || l)) {
        const a = !(n && n.silentJSONParsing) && l;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (a)
            throw s.name === 'SyntaxError'
              ? X.from(s, X.ERR_BAD_RESPONSE, this, null, this.response)
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
  Gr.headers[t] = {};
});
C.forEach(['post', 'put', 'patch'], function (t) {
  Gr.headers[t] = C.merge(sw);
});
function bo(e, t) {
  const n = this || Gr,
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
    (e.data = bo.call(e, e.transformRequest)),
    (e.adapter || Gr.adapter)(e).then(
      function (r) {
        return (
          $o(e),
          (r.data = bo.call(e, e.transformResponse, r)),
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
              ((r.response.data = bo.call(e, e.transformResponse, r.response)),
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
      throw new X(
        l(a, ' has been removed' + (n ? ' in ' + n : '')),
        X.ERR_DEPRECATED,
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
    throw new X('options must be an object', X.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let l = r.length;
  for (; l-- > 0; ) {
    const i = r[l],
      a = t[i];
    if (a) {
      const s = e[i],
        u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new X('option ' + i + ' must be ' + u, X.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new X('Unknown option ' + i, X.ERR_BAD_OPTION);
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
        function (E) {
          delete n.headers[E];
        },
      ),
      (n.headers = new mt(n.headers, i));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (E) {
      (typeof E.runWhen == 'function' && E.runWhen(n) === !1) ||
        ((s = s && E.synchronous), a.unshift(E.fulfilled, E.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (E) {
      u.push(E.fulfilled, E.rejected);
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
        E = a[d++];
      try {
        f = m(f);
      } catch (x) {
        E.call(this, x);
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
const F = Nv(Gr);
F.Axios = Qn;
F.CanceledError = ii;
F.CancelToken = Nc;
F.isCancel = xv;
F.VERSION = Ev;
F.toFormData = Ya;
F.AxiosError = X;
F.Cancel = F.CanceledError;
F.all = function (t) {
  return Promise.all(t);
};
F.spread = fw;
F.isAxiosError = pw;
F.formToJSON = (e) => vv(C.isHTMLForm(e) ? new FormData(e) : e);
const wc = () =>
    o(b, {
      children: o('article', {
        className: 'event-footer message is-success',
        children: y('div', {
          className: 'message-body',
          children: [
            o('p', {
              children:
                'V\xEDce info najdete na Modr\xE9m kameni: http://www.modry-kamen.cz/',
            }),
            y('p', {
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
    o(b, {
      children: o('div', {
        className: 'card',
        children: o('div', {
          className: 'card-content',
          children: y('div', {
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
              y('div', {
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
      y(b, {
        children: [
          r && o(it, { to: '/events' }),
          y('div', {
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
    o(b, {
      children: o('div', {
        className: 'tile is-parent dashboard-tile user-select-none',
        children: y('article', {
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
      y(b, {
        children: [
          o('nav', { className: 'breadcumb', 'aria-label': 'breadcrumbs' }),
          y('div', {
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
      return je.createElement(t.tag, Dn({ key: n }, t.attr), Sv(t.child));
    })
  );
}
function Et(e) {
  return function (t) {
    return o(yw, { ...Dn({ attr: Dn({}, e.attr) }, t), children: Sv(e.child) });
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
      y('svg', {
        ...Dn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          a,
          {
            className: u,
            style: Dn(Dn({ color: e.color || n.color }, n.style), e.style),
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
    return o(b, {
      children: y('aside', {
        className: 'menu user-select-none',
        children: [
          o('p', { className: 'menu-label', children: 'Obecn\xE9' }),
          o('ul', {
            className: 'menu-list',
            children: o('li', {
              children: y(Wu, {
                className: 'menu-item',
                to: '/admin/dashboard',
                children: [o(xw, {}), ' P\u0159ehled'],
              }),
            }),
          }),
          o('p', { className: 'menu-label', children: 'Spr\xE1va' }),
          y('ul', {
            className: 'menu-list',
            children: [
              o('li', {
                children: y(Ne, {
                  className: e == 'admin' ? 'menu-item active' : 'menu-item',
                  to: '/table/admin/page/1',
                  children: [o(Ew, {}), ' Spr\xE1vci'],
                }),
              }),
              y('li', {
                children: [
                  o('a', {
                    className: 'menu-disabled',
                    children: 'L\xE9ka\u0159sk\xFD t\xFDm',
                  }),
                  y('ul', {
                    children: [
                      o('li', {
                        children: y(Ne, {
                          className:
                            e == 'administration'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/administration/page/1',
                          children: [o(Cw, {}), ' Veden\xED'],
                        }),
                      }),
                      o('li', {
                        children: y(Ne, {
                          className:
                            e == 'doctor' ? 'menu-item active' : 'menu-item',
                          to: '/table/doctor/page/1',
                          children: [o(Sw, {}), ' L\xE9ka\u0159i'],
                        }),
                      }),
                      o('li', {
                        children: y(Ne, {
                          className:
                            e == 'nurse' ? 'menu-item active' : 'menu-item',
                          to: '/table/nurse/page/1',
                          children: [o(ww, {}), ' Sest\u0159i\u010Dky'],
                        }),
                      }),
                      o('li', {
                        children: y(Ne, {
                          className:
                            e == 'announcements'
                              ? 'menu-item active'
                              : 'menu-item',
                          to: '/table/announcements/page/1',
                          children: [o(kw, {}), ' Ud\xE1losti'],
                        }),
                      }),
                      o('li', {
                        children: y(Ne, {
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
      y(b, {
        children: [
          !a && o(it, { to: '/', replace: !0 }),
          n && o(it, { to: '/', replace: !0 }),
          y('div', {
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
                children: y('div', {
                  className: e
                    ? 'dropdown is-right is-active user-menu'
                    : 'dropdown is-right user-menu',
                  onClick: () => {
                    t(!e);
                  },
                  children: [
                    o('div', {
                      className: 'dropdown-trigger',
                      children: y('button', {
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
      y(b, {
        children: [
          !e && o(it, { to: '/', replace: !0 }),
          o(ut, {}),
          o('div', {
            className: 'section admin-layout',
            children: y('div', {
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
function Pw(e) {
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
const Dw = () => {
    const [e, t] = h.exports.useState({ username: '', password: '' }),
      [n, r] = h.exports.useState(!1),
      l = (a) => {
        t((s) => ({ ...s, [a.target.name]: a.target.value }));
      };
    return y(Pv, {
      children: [
        n ? o(it, { to: '/admin', replace: !0 }) : o(b, {}),
        y('div', {
          className: 'columns is-multiline',
          children: [
            o('div', {
              className: 'column is-8 is-offset-2 register',
              children: y('div', {
                className: 'columns',
                children: [
                  o('div', {
                    className: 'column left',
                    children: o(gE, { src: 'login.png' }),
                  }),
                  y('div', {
                    className: 'column right has-text-centered',
                    children: [
                      o('h1', {
                        className: 'title is-4',
                        children: 'P\u0159ihl\xE1sit se',
                      }),
                      y(cl, {
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
                      children: o(Pw, {}),
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
    o(b, {
      children: y('article', {
        className: `message event is-danger ${e}`,
        children: [
          o('h1', { className: 'message-header event-title', children: t }),
          o('p', { className: 'message-body event-description', children: n }),
        ],
      }),
    }),
  Lw = () => {
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
      y(b, {
        children: [
          i && o(it, { to: '/info' }),
          y('div', {
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
                    o(b, {
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
const Tw = Av(My);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
  var t = i(h.exports),
    n = i(Fe.exports),
    r = Tw,
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
  function i(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function a(x, S) {
    var v = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var g = Object.getOwnPropertySymbols(x);
      S &&
        (g = g.filter(function (N) {
          return Object.getOwnPropertyDescriptor(x, N).enumerable;
        })),
        v.push.apply(v, g);
    }
    return v;
  }
  function s(x) {
    for (var S = 1; S < arguments.length; S++) {
      var v = arguments[S] != null ? arguments[S] : {};
      S % 2
        ? a(Object(v), !0).forEach(function (g) {
            u(x, g, v[g]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(v))
        : a(Object(v)).forEach(function (g) {
            Object.defineProperty(x, g, Object.getOwnPropertyDescriptor(v, g));
          });
    }
    return x;
  }
  function u(x, S, v) {
    return (
      S in x
        ? Object.defineProperty(x, S, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (x[S] = v),
      x
    );
  }
  function c(x) {
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
      c(x)
    );
  }
  function d(x, S) {
    if (x == null) return {};
    var v = p(x, S),
      g,
      N;
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(x);
      for (N = 0; N < w.length; N++)
        (g = w[N]),
          !(S.indexOf(g) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(x, g) ||
              (v[g] = x[g]));
    }
    return v;
  }
  function p(x, S) {
    if (x == null) return {};
    var v = {},
      g = Object.keys(x),
      N,
      w;
    for (w = 0; w < g.length; w++)
      (N = g[w]), !(S.indexOf(N) >= 0) && (v[N] = x[N]);
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
        L = S.activeClassName,
        O = S.className,
        I = S.activeStyle,
        A = S.style,
        $ = S.isActive,
        xe = d(S, l),
        Ze = c(w) === 'object' ? w.pathname || '' : w,
        $e = (0, r.useNavigate)(),
        te = (0, r.useHref)(typeof w == 'string' ? { pathname: w } : w),
        Z = (0, r.useMatch)(Ze),
        Nt = (0, r.useLocation)(),
        qe = t.default.Children.only(v),
        T = !!($ ? (typeof $ == 'function' ? $(Z, Nt) : $) : Z),
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
            className: [O, qe.props.className, T ? L : null].join(' ').trim(),
            style: T ? s(s({}, A), I) : A,
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
  var E = m;
  e.default = E;
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
const Pv = (e) =>
    y(b, {
      children: [
        o(Fo, {
          collapseOnSelect: !0,
          expand: 'lg',
          bg: 'light',
          variant: 'light',
          className: 'layout-navbar',
          children: y(tf, {
            fluid: !0,
            children: [
              o(Fo.Toggle, { 'aria-controls': 'responsive-navbar-nav' }),
              y(Fo.Collapse, {
                id: 'responsive-navbar-nav',
                children: [
                  y(ur, {
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
  Iw = () => {
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
      o(b, {
        children: y('div', {
          className: 'status-container has-text-centered font',
          children: [
            o('div', {
              className: 'containers directors-container',
              children: y('div', {
                className: 'card',
                children: [
                  o('div', {
                    className: 'card-header',
                    children: y('div', {
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
                              y('div', {
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
                                  y('p', {
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
                                    ? y(b, {
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
                                    : y(b, {
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
              children: y('div', {
                className: 'card',
                children: [
                  o('div', {
                    className: 'card-header',
                    children: o('p', { children: 'V\u0161eobecn\xE9 sestry' }),
                  }),
                  o('div', {
                    className: 'card-content',
                    children: o('div', {
                      className: 'content',
                      children: y('div', {
                        className: 'general-nurse-info',
                        children: [
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'day-title',
                                children: 'Denn\xED',
                              }),
                              o('div', {
                                className: 'day-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'general nurse' &&
                                        a.SHIFT == 'day' &&
                                        a.AVAILABILITY == 1,
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
                            ],
                          }),
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'night-title',
                                children: 'No\u010Dn\xED',
                              }),
                              o('div', {
                                className: 'night-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'general nurse' &&
                                        a.SHIFT == 'night' &&
                                        a.AVAILABILITY == 1,
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
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
              children: y('div', {
                className: 'card',
                children: [
                  y('div', {
                    className: 'card-header',
                    children: [
                      o('p', { children: 'Vesni\u010Dka' }),
                      ' ',
                      y('p', {
                        children: [
                          'Vedouc\xED odd\u011Blen\xED: ',
                          e
                            .filter(
                              (a) =>
                                a.ROLE == 'head nurse' &&
                                a.WORKPLACE == 'village' &&
                                a.AVAILABILITY == 1,
                            )
                            .map((a) =>
                              o(b, {
                                children: o('div', {
                                  className: 'employee',
                                  children: y('p', {
                                    className: 'employee-text',
                                    children: [
                                      a.PREFIX,
                                      ' ',
                                      a.NAME.split(' ')[0].charAt(0),
                                      '. ',
                                      a.NAME.split(' ')[1],
                                      ' ',
                                      a.SUFFIX,
                                    ],
                                  }),
                                }),
                              }),
                            ),
                        ],
                      }),
                    ],
                  }),
                  o('div', {
                    className: 'card-content',
                    children: o('div', {
                      className: 'content',
                      children: y('div', {
                        className: 'general-nurse-info',
                        children: [
                          o('div', {
                            className: 'card status-items',
                            children: o('div', {
                              className: 'cart-content',
                              children: y('div', {
                                className: 'content',
                                children: [
                                  o('div', {
                                    className: 'day-title',
                                    children: 'Denn\xED',
                                  }),
                                  o('div', {
                                    className: 'day-body',
                                    children:
                                      e &&
                                      e
                                        .filter(
                                          (a) =>
                                            a.ROLE == 'nurse' &&
                                            a.SHIFT == 'day' &&
                                            a.AVAILABILITY == 1 &&
                                            a.WORKPLACE == 'village',
                                        )
                                        .map((a) =>
                                          o('div', {
                                            className: 'employee',
                                            children: y('p', {
                                              className: 'employee-text',
                                              children: [
                                                a.PREFIX,
                                                ' ',
                                                a.NAME.split(' ')[0].charAt(0),
                                                '. ',
                                                a.NAME.split(' ')[1],
                                                ' ',
                                                a.SUFFIX,
                                              ],
                                            }),
                                          }),
                                        ),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'night-title',
                                children: 'No\u010Dn\xED',
                              }),
                              o('div', {
                                className: 'night-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'nurse' &&
                                        a.SHIFT == 'night' &&
                                        a.AVAILABILITY == 1 &&
                                        a.WORKPLACE == 'village',
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
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
              children: y('div', {
                className: 'card is-warning',
                children: [
                  y('div', {
                    className: 'card-header',
                    children: [
                      o('p', { children: '1. patro' }),
                      ' ',
                      y('p', {
                        children: [
                          'Vedouc\xED odd\u011Blen\xED: ',
                          e
                            .filter(
                              (a) =>
                                a.ROLE == 'head nurse' &&
                                a.AVAILABILITY == 1 &&
                                a.WORKPLACE == 'first floor',
                            )
                            .map((a) =>
                              o('div', {
                                className: 'employee',
                                children: y('p', {
                                  className: 'employee-text',
                                  children: [
                                    a.PREFIX,
                                    ' ',
                                    a.NAME.split(' ')[0].charAt(0),
                                    '. ',
                                    a.NAME.split(' ')[1],
                                    ' ',
                                    a.SUFFIX,
                                  ],
                                }),
                              }),
                            ),
                        ],
                      }),
                    ],
                  }),
                  o('div', {
                    className: 'card-content',
                    children: o('div', {
                      className: 'content',
                      children: y('div', {
                        className: 'general-nurse-info',
                        children: [
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'day-title',
                                children: 'Denn\xED',
                              }),
                              o('div', {
                                className: 'day-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'nurse' &&
                                        a.SHIFT == 'day' &&
                                        a.AVAILABILITY == 1 &&
                                        a.WORKPLACE == 'first floor',
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
                            ],
                          }),
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'night-title',
                                children: 'No\u010Dn\xED',
                              }),
                              o('div', {
                                className: 'night-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'nurse' &&
                                        a.SHIFT == 'night' &&
                                        a.AVAILABILITY == 1 &&
                                        a.WORKPLACE == 'first floor',
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
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
              children: y('div', {
                className: 'card',
                children: [
                  y('div', {
                    className: 'card-header',
                    children: [
                      o('p', { children: 'P\u0159\xEDzem\xED' }),
                      ' ',
                      y('p', {
                        children: [
                          'Vedouc\xED odd\u011Blen\xED: ',
                          e
                            .filter(
                              (a) =>
                                a.ROLE == 'head nurse' &&
                                a.AVAILABILITY == 1 &&
                                a.WORKPLACE == 'ground floor',
                            )
                            .map((a) =>
                              o('div', {
                                className: 'employee',
                                children: y('p', {
                                  className: 'employee-text',
                                  children: [
                                    a.PREFIX,
                                    ' ',
                                    a.NAME.split(' ')[0].charAt(0),
                                    '. ',
                                    a.NAME.split(' ')[1],
                                    ' ',
                                    a.SUFFIX,
                                  ],
                                }),
                              }),
                            ),
                        ],
                      }),
                    ],
                  }),
                  o('div', {
                    className: 'card-content',
                    children: o('div', {
                      className: 'content',
                      children: y('div', {
                        className: 'general-nurse-info',
                        children: [
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'day-title',
                                children: 'Denn\xED',
                              }),
                              e &&
                                e
                                  .filter(
                                    (a) =>
                                      a.ROLE == 'nurse' &&
                                      a.SHIFT == 'day' &&
                                      a.AVAILABILITY == 1 &&
                                      a.WORKPLACE == 'ground floor',
                                  )
                                  .map((a) =>
                                    o('div', {
                                      className: 'employee',
                                      children: y('p', {
                                        className: 'employee-text',
                                        children: [
                                          a.PREFIX,
                                          ' ',
                                          a.NAME.split(' ')[0].charAt(0),
                                          '. ',
                                          a.NAME.split(' ')[1],
                                          ' ',
                                          a.SUFFIX,
                                        ],
                                      }),
                                    }),
                                  ),
                            ],
                          }),
                          y('div', {
                            className: 'card status-items',
                            children: [
                              o('div', {
                                className: 'night-title',
                                children: 'No\u010Dn\xED',
                              }),
                              o('div', {
                                className: 'night-body',
                                children:
                                  e &&
                                  e
                                    .filter(
                                      (a) =>
                                        a.ROLE == 'nurse' &&
                                        a.SHIFT == 'night' &&
                                        a.AVAILABILITY == 1 &&
                                        a.WORKPLACE == 'ground floor',
                                    )
                                    .map((a) =>
                                      o('div', {
                                        className: 'employee',
                                        children: y('p', {
                                          className: 'employee-text',
                                          children: [
                                            a.PREFIX,
                                            ' ',
                                            a.NAME.split(' ')[0].charAt(0),
                                            '. ',
                                            a.NAME.split(' ')[1],
                                            ' ',
                                            a.SUFFIX,
                                          ],
                                        }),
                                      }),
                                    ),
                              }),
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
      })
    );
  },
  _w = () => {
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
      [m, E] = h.exports.useState(!1),
      [x, S] = h.exports.useState(!1),
      [v, g] = h.exports.useState(''),
      [N, w] = h.exports.useState(!1),
      [R, L] = h.exports.useState('employee'),
      O = (A) => {
        R == 'employee'
          ? n(
              (A.target.value == 'doctor',
              { ...t, [A.target.name]: A.target.value }),
            )
          : l(
              A.target.value == 'admin'
                ? { ...r, [A.target.name]: A.target.value }
                : { ...r, role: 'admin' },
            ),
          t.role == 'admin' && n({ ...t, [A.target.name]: A.target.value }),
          r.role != 'admin' && l({ ...r, role: 'admin' });
      },
      I = () => {
        if (
          ((F.defaults.withCredentials = !0),
          R == 'admin' && (r.username == '' && u(!0), r.password == ''))
        )
          return d(!0);
        if (
          R == 'employee' &&
          (t.name == '' && a(!0),
          t.shift == '' && f(!0),
          t.workplace == '' && E(!0),
          r.role == '' || t.role == '')
        )
          return S(!0);
        R != 'admin'
          ? F.post('http://localhost:8080/api/employee/new', t, {
              withCredentials: !0,
            })
              .then((A) => {
                A.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    w(!0);
                  }, 3e3));
              })
              .catch((A) => {
                g('error');
              })
          : F.post('http://localhost:8080/api/user/new', r, {
              withCredentials: !0,
            })
              .then((A) => {
                A.status == 200 &&
                  (g('success'),
                  setTimeout(() => {
                    w(!0);
                  }, 3e3));
              })
              .catch((A) => {
                g('error');
              });
      };
    return y(b, {
      children: [
        N ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    className: 'create-update-container',
                    children: [
                      R != 'admin'
                        ? y(b, {
                            children: [
                              y('div', {
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
                                      onChange: (A) => O(A),
                                    }),
                                  }),
                                ],
                              }),
                              y('div', {
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
                                      onChange: (A) => O(A),
                                    }),
                                  }),
                                ],
                              }),
                              y('div', {
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
                                      onChange: (A) => {
                                        a(!1), O(A);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : y(b, {
                            children: [
                              y('div', {
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
                                      onChange: (A) => {
                                        u(!1), O(A);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                              y('div', {
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
                                      onChange: (A) => {
                                        d(!1), O(A);
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      y('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: x ? 'select is-danger' : 'select',
                              children: y('select', {
                                required: !0,
                                name: 'role',
                                onChange: (A) => {
                                  A.target.value == 'admin'
                                    ? L('admin')
                                    : L('employee'),
                                    a(!1),
                                    u(!1),
                                    d(!1),
                                    S(!1),
                                    f(!1),
                                    E(!1),
                                    O(A);
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
                        ? y(b, {
                            children: [
                              y('div', {
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
                                        onChange: (A) =>
                                          t.availability == 0
                                            ? n({ ...t, availability: 1 })
                                            : n({ ...t, availability: 0 }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              y('div', {
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
                                      children: y('select', {
                                        required: !0,
                                        name: 'shift',
                                        onChange: (A) => {
                                          f(!1), O(A);
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
                              y('div', {
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
                                      children: y('select', {
                                        required: !0,
                                        name: 'workplace',
                                        onChange: (A) => {
                                          E(!1), O(A);
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
                                            value: 'first floor',
                                            children: 'Prvn\xED patro',
                                          }),
                                          o('option', {
                                            value: 'ground floor',
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
                        : o(b, {}),
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
                  x
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
                    onClick: I,
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
    return y(b, {
      children: [
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    className: 'create-update-container',
                    children: [
                      y('div', {
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
                      y('div', {
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
                      y('div', {
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
                      y('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: 'select',
                              children: y('select', {
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
                      y('div', {
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
const Aw = ({ className: e, user: t }) => {
    const n = () => {
      (F.defaults.withCredentials = !0),
        F.delete(`http://localhost:8080/api/user/${t.USERID}`).then((r) => {
          r.status == 200 && window.location.reload();
        });
    };
    return o(je.Suspense, {
      fallback: o('div', { children: 'Loading...' }),
      children: y('div', {
        className: `modal ${e}`,
        children: [
          o('div', { className: 'modal-background' }),
          y('div', {
            className: 'modal-card',
            children: [
              y('header', {
                className: 'modal-card-head',
                children: [
                  y('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.NAME, '?'],
                  }),
                  o('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              y('footer', {
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
      y(b, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          y('div', {
            className: 'section admin-layout',
            children: [
              y('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: y('div', {
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
                        y('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: y('tr', {
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
                                y(
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
                                        children: y('div', {
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
              y('nav', {
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
                    : o(b, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(b, {}),
                  y('ul', {
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
                        y(b, {
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
                        y(b, {
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
          l ? o(Aw, { className: l ? 'is-active' : '', user: a }) : null,
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
      children: y('div', {
        className: `modal ${e}`,
        children: [
          o('div', { className: 'modal-background' }),
          y('div', {
            className: 'modal-card',
            children: [
              y('header', {
                className: 'modal-card-head',
                children: [
                  y('p', {
                    className: 'modal-card-title',
                    children: ['Opravdu chcete smazat ', t.TITLE, '?'],
                  }),
                  o('button', { className: 'delete', 'aria-label': 'close' }),
                ],
              }),
              y('footer', {
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
  bw = ({ role: e, page: t }) => {
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
      y(b, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          y('div', {
            className: 'section admin-layout',
            children: [
              y('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: y('div', {
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
                        y('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: y('tr', {
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
                                  y(
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
                                          children: y('div', {
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
              y('nav', {
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
                    : o(b, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(b, {}),
                  y('ul', {
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
                        y(b, {
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
                        y(b, {
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
            : o(b, {}),
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
    return y(je.Suspense, {
      fallback: o('div', { children: 'Loading...' }),
      children: [
        r && o(it, { to: '/admin/employees', replace: !0 }),
        y('div', {
          className: `modal ${e}`,
          children: [
            o('div', { className: 'modal-background' }),
            y('div', {
              className: 'modal-card',
              children: [
                y('header', {
                  className: 'modal-card-head',
                  children: [
                    y('p', {
                      className: 'modal-card-title',
                      children: ['Opravdu chcete smazat ', t.NAME, '?'],
                    }),
                    o('button', { className: 'delete', 'aria-label': 'close' }),
                  ],
                }),
                y('footer', {
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
      y(b, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          y('div', {
            className: 'section admin-layout',
            children: [
              y('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: y('div', {
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
                        y('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: y('tr', {
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
                                  return y(
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
                                          children: y('div', {
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
              y('nav', {
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
                    : o(b, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(b, {}),
                  y('ul', {
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
                        y(b, {
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
                        y(b, {
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
      y(b, {
        children: [
          u && o(it, { to: 'page/1', replace: !0 }),
          o(ut, {}),
          y('div', {
            className: 'section admin-layout',
            children: [
              y('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: y('div', {
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
                        y('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: y('tr', {
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
                                  y(
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
                                        y('td', {
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
              y('nav', {
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
                    : o(b, {}),
                  parseInt(t) != p && p > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (m) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(b, {}),
                  y('ul', {
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
                        y(b, {
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
                        y(b, {
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
            : o(b, {}),
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
      y(b, {
        children: [
          o(ut, {}),
          y('div', {
            className: 'section admin-layout',
            children: [
              y('div', {
                className: 'columns',
                children: [
                  o('div', { className: 'column is-2', children: o(st, {}) }),
                  o('div', {
                    className: 'column is-10',
                    children: y('div', {
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
                        y('table', {
                          className: 'table admin-table',
                          children: [
                            o('thead', {
                              children: y('tr', {
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
                                  y(
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
                                          children: y('div', {
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
              y('nav', {
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
                    : o(b, {}),
                  parseInt(t) != u && u > 1
                    ? o('a', {
                        className: 'pagination-next table-pagination-next',
                        onClick: (p) =>
                          d(`/table/${e}/page/` + (parseInt(t) + 1)),
                        children: 'Next page',
                      })
                    : o(b, {}),
                  y('ul', {
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
                        y(b, {
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
                        y(b, {
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
      ? o(bw, { role: e, page: t })
      : e == 'administration'
      ? o(zw, { role: e, page: t })
      : e == 'doctor' || e == 'nurse'
      ? o($w, { role: e, page: t })
      : o(b, {});
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
    return y(b, {
      children: [
        a ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    className: 'create-update-container',
                    children: [
                      y('div', {
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
                      y('div', {
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
      m = (x) => {
        n({ ...t, [x.target.name]: x.target.value });
      },
      E = (x) => {
        if ((x.preventDefault(), t.TITLE == '' && a(!0), t.ANNOUNCEMENT == ''))
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
    return y(b, {
      children: [
        p ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    children: [
                      y('div', {
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
                              onChange: (x) => {
                                a(!1), m(x);
                              },
                            }),
                          }),
                        ],
                      }),
                      y('div', {
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
                              onChange: (x) => {
                                u(!1), m(x);
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
                    onClick: E,
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
      y(b, {
        children: [
          a ? t(-1) : null,
          o(ut, {}),
          o('div', {
            className: 'section admin-layout',
            children: y('div', {
              className: 'columns',
              children: [
                o('div', { className: 'column is-2', children: o(st, {}) }),
                y('div', {
                  className: 'column is-10',
                  children: [
                    y('form', {
                      children: [
                        y('div', {
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
                        y('div', {
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
      [m, E] = h.exports.useState(),
      x = (v) => {
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
    return y(b, {
      children: [
        t ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    className: 'create-update-container',
                    encType: 'multipart/form-data',
                    children: [
                      y('div', {
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
                              onChange: (v) => x(v),
                            }),
                          }),
                        ],
                      }),
                      y('div', {
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
                              onChange: (v) => x(v),
                            }),
                          }),
                        ],
                      }),
                      y('div', {
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
                                a(!1), x(v);
                              },
                            }),
                          }),
                        ],
                      }),
                      y('div', {
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
                                u(!1), x(v);
                              },
                            }),
                          }),
                        ],
                      }),
                      y('div', {
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
                            children: y('label', {
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
                                      v.target.files && E(v.target.files[0]);
                                  },
                                }),
                                y('span', {
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
            .then((E) => {
              E.status == 200 &&
                (d('success'),
                setTimeout(() => {
                  n(!0);
                }, 3e3));
            })
            .catch((E) => {
              d('error');
            });
      };
    return y(b, {
      children: [
        t ? e(-1) : null,
        o(ut, {}),
        o('div', {
          className: 'section admin-layout',
          children: y('div', {
            className: 'columns',
            children: [
              o('div', { className: 'column is-2', children: o(st, {}) }),
              y('div', {
                className: 'column is-10',
                children: [
                  y('form', {
                    className: 'create-update-container',
                    children: [
                      y('div', {
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
                      y('div', {
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
                      y('div', {
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
                      y('div', {
                        className: 'field create-field',
                        children: [
                          o('label', { className: 'label', children: 'Role' }),
                          o('div', {
                            className: 'control',
                            children: o('div', {
                              className: s ? 'select is-danger' : 'select',
                              children: y('select', {
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
                      y('div', {
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
    y(Hu, {
      children: [
        o(Ce, { index: !0, element: o(cN, {}) }),
        o(Ce, {
          path: '/admin',
          element: o(it, { to: 'dashboard', replace: !0 }),
        }),
        o(Ce, { path: 'admin/dashboard', element: o(Rw, {}) }),
        o(Ce, { path: 'info', element: o(mw, {}) }),
        o(Ce, { path: 'login', element: o(Dw, {}) }),
        o(Ce, { path: 'status', element: o(Iw, {}) }),
        o(Ce, { path: 'events', element: o(Lw, {}) }),
        o(Ce, { path: 'table/:role/page/:page', element: o(Uw, {}) }),
        o(Ce, { path: 'table/:role/edit/:uuid', element: o(wf, {}) }),
        o(Ce, { path: 'admin/create', element: o(_w, {}) }),
        o(Ce, { path: 'admin/create-event', element: o(Hw, {}) }),
        o(Ce, { path: 'admin/create-member', element: o(Kw, {}) }),
        o(Ce, { path: 'admin/create-team-member', element: o(Ww, {}) }),
        o(Ce, { path: 'admin/edit/:id', element: o(wf, {}) }),
        o(Ce, { path: 'admin/edit-user/:id', element: o(Bw, {}) }),
        o(Ce, { path: 'admin/edit-event/:id', element: o(Vw, {}) }),
      ],
    });
const Xw = zo.createRoot(document.getElementById('root'));
Xw.render(o(sm, { children: o(Qw, {}) }));