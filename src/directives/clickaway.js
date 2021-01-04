import { version as ver } from 'vue';

export const version = '0.0.1';

const compatible = (/^3\./).test(ver);
if (!compatible) {
  console.warn(`clickaway ${version} supports Vue 3.x, isn't compatible with Vue ${ver}`);
}

// @SECTION: implementation

const handlers = new Map();

function addHandler(el, binding) {
  removeHandler(el);

  const callback = binding.value;
  const vm = binding.instance;

  // const vm = binding.instance;

  // var callback = binding.value;
  if (callback === null) return;
  if (!(callback instanceof Function)) {
    if (process.env.NODE_ENV !== 'production') {
      // console.warn(`v-${binding.name}="${binding.expression}" expects a function value, got ${callback}`);
      console.warn(`clickaway expects a function value, got ${callback}`);
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  let initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  const handler = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    const path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', handler, false);
  handlers.set(el, handler);
}

function removeHandler(el) {
  const handler = handlers.get(el);
  document.documentElement.removeEventListener('click', handler, false);
  handlers.delete(el);
}

export const clickaway = {
  mounted: addHandler,
  updated(el, binding) {
    if (binding.value !== binding.oldValue) addHandler(el, binding);
  },
  beforeUnmount: removeHandler,
};

export const directive = clickaway;

export const mixin = {
  directives: { clickaway },
};
