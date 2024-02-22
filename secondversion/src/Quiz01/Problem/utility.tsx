

export function randomIntFromInterval(min:number, max:number) { // min and max included 
    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle<T>(array: T[]):T[]{ 
// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

export function RandomArray():string[]{
    let ls=[]
    for(let i=0;i<5;i++){
        let let_New=randomIntFromInterval(-10,10)
        while(let_New in ls){
            let_New=randomIntFromInterval(-10,10)
        }
        ls.push(let_New.toFixed(2).toString())
    }
    return ls
}