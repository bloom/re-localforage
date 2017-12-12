type t = {
  .
  "getItem": [@bs.meth] (string => Js.Promise.t(Js.Json.t)),
  "setItem": [@bs.meth] ((string, Js.Json.t) => Js.Promise.t(unit))
};

[@bs.module] external instance : t = "localforage";
