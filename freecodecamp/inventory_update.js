function updateInventory(curInv, newInv) {
    // Check each item of new inventory
    for(let newItem of newInv) {
        let found = false; //flag
        // Check against current inventory
        for(let oldItem of curInv) {
            //Update value if new item is found
            if(newItem[1] === oldItem[1]) {
                oldItem[0] += newItem[0]; //--> Updates quantity of an existing item
                found = true //flag
                break
            }
        }
        //Otherwise add item to the old inventory
        if(!found) curInv.push([...newItem]);
    }
    return curInv
        .sort((a, b) => {
            if (a[1] < b[1]) return -1
            if (a[1] > b[1]) return 1
            return 0
        })
}


/*
Code Explanation
La función actualiza y fusiona dos inventarios
y luego los devuelve ordenados por nombre. 
Muy útil para sistemas de inventario básicos.
*/


//Example
var curInv = [
    [21, "Bow"],
    [2, "Arrow"],
    [5, "Helmet"]
];

var newInv = [
    [3, "Arrow"],
    [7, "Bow"],
    [1, "Boots"],
    [2, "Helmet"],
    [5, "Gloves"]
];

const result = updateInventory(curInv, newInv);
console.log("result", result)

//////////////////////////////////////////////////////////////////////
/*
function updateInventory2(currentInventory, newInventory) {
    const combinedInventory = {}
    
    for (let item of currentInventory) {
        combinedInventory[item[1]] = item[0];
    }

    for (let item of newInventory) {
        combinedInventory[item[1]] ??= 0;
        combinedInventory[item[1] += item[0]]
    }

    return Object.keys(combinedInventory)
        .sort()
        .map(item => [combinedInventory[item], item])
}


Code Explanation
In this solution, we use an object as a hash table to de-nest the two loops. 
This approach trades time complexity for space complexity.
In this case, the input array is not mutated.


//Example
var currentInventory = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInventory = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

const result2 = updateInventory2(currentInventory, newInventory)
console.log("result2",result2)

*/