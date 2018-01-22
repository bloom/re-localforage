open Jest;

let then_ = Js.Promise.then_;
let thenWrap = (a, prom) => prom
  |> then_(x => Js.Promise.resolve(a(x)));
 
 
describe("LocalForage", () => {
  open Expect;

  testPromise("can save and recover an item", () => {
    LocalForage.setItem("test", Js.Json.number(212.0))
    |> then_((_) => LocalForage.getItem("test"))
    |> thenWrap(num => {
      let asInt = Js.Json.decodeNumber(num);
      expect(asInt) |> toBe(Some(212.0))
    })
  });
});