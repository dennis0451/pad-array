// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, padword) => {
//for loop to iterate through array and add to reach minsize
    let finalArr = []
    if(padword != undefined){
        while (finalArr.length < minSize){
            finalArr.push(padword)
            console.log(finalArr)
        }
    }else{
        while (finalArr.length < minSize){
            finalArr.push(null)
            console.log(finalArr)  
        }
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] != finalArr[i]){
            finalArr[i] = array[i]
        }
    }
    return finalArr        
}

console.log(pad([1,2,3,4,5,6,7,8,9,10], 30, 'cat'))
