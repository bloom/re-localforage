[@bs.module "./vendor/localforage.min.js"] external getItem : (string) => Js.Promise.t(Js.Json.t) = "";
[@bs.module "./vendor/localforage.min.js"] external setItem : (string, Js.Json.t) => Js.Promise.t(unit) = "";