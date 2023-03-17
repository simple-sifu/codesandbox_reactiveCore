//import Observable from "./Shared/Observable";
//import { observe, observable, computed } from "mobx";
import { Subject, BehaviorSubject } from "rxjs";

class Person {
  @observable age;
}

// it("pub/sub with normal observable", () => {
//   let person = new Person();

//   var personObservable = new Observable(person);
//   personObservable.value = 37;

//   personObservable.subscribe((value) => {
//     console.log(value);
//   });

//   personObservable.value = 40;

//   personObservable.notify();
// });

it("pub/sub with Mobx FRP library", () => {
  let person = new Person();

  observable(person);
  observe(person, "age", (obj) => {
    console.log(obj.newValue);
  });

  person.age = 37;
  person.age = 47;
});

it.only("pub/sub with RXJS FRP library", () => {
  const subject = BehaviorSubject(37);

  subject.subscribe((person) => {
    console.log(person);
  }, true);

  subject.next(47);
});
