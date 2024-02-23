import { DIFFICULT } from "./difficult"
import { TS_Quiz } from "./type"
import { TS_OptionAns } from "./type"

// What is async, await and Promise?
// * sync
// - It means the program works in order.
// * Promise
// - Promise let the function return unknown value as the known value.
//   That value will be determined if it valid (resolve) or not (reject)
//   So that th other part of the software can works without waiting on decide if the value valid or not
// * async
// - This word is used before function.
// * await
// - This word is used before nested function inside the async function.
// * note
// - async and await are another ways to write promise.
// - It is usually not recommented to code async and await in loop.
// * Reference
// - https://blog.webdevsimplified.com/2021-11/async-await/
// - https://youtu.be/DHvZLI7Db8E?si=Uw2Vi2_TjQJzPw8m
// - https://blog.webdevsimplified.com/2021-09/javascript-promises/
// - https://youtu.be/V_Kr9OSfDeU?si=lxjYMBd8XSjtbk9P
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// - https://youtu.be/RvYYCGs45L4?si=llvWfxe9z2v8oiro

// export async function API(amount: number, level:0|1|2): Promise<any>{
//     let difficulty=DIFFICULT[level]
//     // https://blog.webdevsimplified.com/2022-01/js-fetch-api/
//     //let data = fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
//     let data = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`).then(
//     res=>{
//     console.log(res.json())
//     return res.json()
// }
//     )
//     return data
// }

export const API=fetch("https://jsonplaceholder.typicode.com/users").then(res => {
  console.log(res.ok) // true
  console.log(res.status) // 200
  // https://stackoverflow.com/questions/71282198/property-map-does-not-exist-on-type
  return Object.values(res).map(i=>{return i.name})//.json()
})