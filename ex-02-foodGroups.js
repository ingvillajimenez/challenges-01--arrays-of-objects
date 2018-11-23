/**

You must generate a function that takes as parameter a `string`
that contains a meal, and look for it in the next object,
returning its` key` and its english value in a new object,
if it does not find the food it must return "food not found".
**/

// ++ Write YOUR CODE Below

function foodGroup(string) {
  if(string == 'Crema'){
    var objCrema = {
      lacteo : {english: "cream"}
    }
    return objCrema;
  }
  else if(string == 'Res'){
    var ObjRes = {
      carne : {english: "beef"}
    }
    return ObjRes;
  }
  else if(string == 'Piña'){
    var ObjPiña = {
      fruta : {english: "pineapple"}
    }
    return ObjPiña;
  }
  else {
    return "Food not found";
  }
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/

console.log("==== ex-02-foodGroups : TEST 1 ====");


console.assert(foodGroup('Crema').lacteo.english === 'cream');
console.assert(foodGroup('Res').carne.english === 'beef');
console.assert(foodGroup('Piña').fruta.english === 'pineapple');

/*-------------------TEST-2-------------------------*/

console.log("==== ex-02-foodGroups : TEST 2 ====");

console.assert(foodGroup('Caña') === "Food not found");

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
