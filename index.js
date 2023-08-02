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

function removeDuplicates(arr){
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if(newArr.includes(arr[i]) == false){

            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//Example:
console.log(removeDuplicates([1,2,1,3,4,2]));

//We set a new array to push the values into.
//We loop through the array.
//If the value is not in the new array, we push that value into the new array.
//We return the new array.

//#########################################################################################################

//3.
//Mode

/* Back in the Basic 13, you wrote code to compute an array’s minimum and maximum values. 
You also wrote code to determine the average value (the “mean”). 
What about the “mode” – the most common value in that data set. 
Create a function that, given an array, returns the most frequent value in the array.

Second: memory constraints prevent your using a new array. 
How does this affect your solution?
 */

function mode(arr){
    var count = 0;
    var mode = 0;

    for(var i = 0; i < arr.length; i++){
        var tempCount = 0;

        for(var j = 0; j < arr.length; j++){
            if(arr[i] == arr[j]){
                tempCount++;
            }
        }

        if(tempCount > count){
            count = tempCount;
            mode = arr[i];
        }
    }

    return mode;

}

//Example:
console.log(mode([1,2,1,3,4,2]));

//We set a count and mode variable to 0.
//We loop through the array.
//We set a tempCount variable to 0.
//We loop through the array again.
//If the value of the first loop is equal to the value of the second loop, we increment tempCount.
//If tempCount is greater than count, we set count equal to tempCount and mode equal to the value of the first loop.
//We return mode.

//#########################################################################################################

//4.
//Buffer Copy

/* Create arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals) 
to copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc. 
Do not lengthen destArr, nor read off the end of sourceArr.

Second: if you reach either array’s end, 
wraparound to continue writing/reading at beginning of array.

Third: if numVals > destArr.length, 
only copy the minimum needed amount.

Fourth: sourceArr can now be the same array as destArr! 
Only handle the non-wrap case. That is, you can assume that you won’t need to read beyond arr.length. 
You can extend the array on writes.

Fifth: if you made it this far, good job! 
Now for a real challenge: handle all possible cases where sourceArr and destArr are the same array, 
including wraparound, not overwriting original array data prematurely, nor extending it, 
but copying all data in-place. If arr.length is 100, how would you handle significant wraparound and overwriting, 
such as arrBufferCopy(arr,arr,30,80,95)? */

function arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    var count = 0;

    for(var i = sourceStartIdx; i < sourceArr.length; i++){
        if(count < numVals){
            destArr[destStartIdx] = sourceArr[i];
            destStartIdx++;
            count++;
        }
    }

    return destArr;
}

//Example: