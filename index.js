//1.
//Flatten

/* Flatten a given array, eliminating nested and empty arrays. 
Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4].

Second: work ‘in-place’ in the given array (do not create another). 
Alter order if needed. Ex.: [1,[2,3],4,[]] could become [1,3,4,2].

Third: make your algorithm both in-place and stable. 
Do you need a return value? */

function flatten(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            for(var j = 0; j < arr[i].length; j++){
                newArr.push(arr[i][j]);
            }
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//Example:
console.log(flatten([1,[2,3],4,[]]));

//We set a new array to push the values into.
//We loop through the array.
//If the value is an array, we loop through that array and push the values into the new array.
//If the value is not an array, we push that value into the new array.
//We return the new array.

//#########################################################################################################

//2.  
//Remove Duplicates

/* Remove array duplicates. Do not alter original. 
Return new array with results ‘stable’ (original order). 
For [1,2,1,3,4,2] return [1,2,3,4].

Second: work ‘in-place’ in given array. 
Alter order if needed (stability is not required). 
Ex.: [1,2,1,3,4,2] could become [1,2,4,3].

Third: make it in-place and stable.

Fourth: eliminate any second (inner) loop. */
