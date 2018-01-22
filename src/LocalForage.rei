let getItem: (string) => Js.Promise.t(Js.Json.t);
let setItem: (string, Js.Json.t) => Js.Promise.t(unit);