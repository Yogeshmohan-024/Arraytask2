// 1.Given the array let fruits = ["Apple", "Banana", "Orange"];, how would you add "Mango" to the end of the array? 

let push=()=>{
    let friuts=["Apple", "Banana", "Orange"];
    friuts.push("Mango")
    return(friuts)
}
console.log(push());

// 2.How can you remove "Orange" from the fruits array? 

let pop=()=>{
    let friuts=["Apple", "Banana", "Orange"];
    friuts.pop();
    return(friuts);
}
console.log(pop());

// 3. How would you add "Pineapple" to the beginning of the fruits array? 

let unshift=function(){
    let friuts=["Apple", "Banana", "Orange"];
    friuts.unshift("Pineapple");
    return(friuts);
}
console.log(unshift());

// 4. How can you remove "Apple" from the fruits array?

let shift=function(){
    let friuts=["Apple", "Banana", "Orange"];
    friuts.shift();
    return(friuts);
}
console.log(shift());

// 5. Given the fruits array, how would you find the position of "Banana"? 

let index=function(){
    let friuts=["Apple", "Banana", "Orange"];
    let index_result=friuts.indexOf("Banana");
    return(index_result);
}
console.log(index());

// 6. How can you check if "Grapes" is in the fruits array?

let includes=()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let includes_result=friuts.includes("Grapes");
    return(includes_result)
}
console.log(includes());

//  7. How would you create a shallow copy of the fruits array?

function shallow_copy(){
    let friuts1=["Apple", "Banana", "Orange"];
    let copy_result=friuts1.copyWithin();
    return(copy_result)
}
console.log(shallow_copy());



// 8. How can you combine the fruits array with another array ["Grapes", "Kiwi"]?

function concat(){
    let friuts=["Apple", "Banana", "Orange"];
    let another_friuts=["Grapes", "Kiwi"];
    let concat_result=friuts.concat(another_friuts);
    return(concat_result)

}
console.log(concat());

// 9. How would you extract the first two elements from the fruits array? 

(()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let slice_result=friuts.slice(0,2);
    console.log(slice_result);
})();

// 10. How can you replace "Banana" with "Strawberry" in the fruits array? 

let spilce = ()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let spilce_result=friuts.splice(1,1,"Strawberry");
    console.log(friuts);
    return(spilce_result);
}
console.log(spilce());

// 11. How would you reverse the order of elements in the fruits array? 

let reverse = function(){
    let friuts=["Apple", "Banana", "Orange"];
    let reverse_result=friuts.reverse();
    return(reverse_result);
}
console.log(reverse());

// 12. How can you sort the fruits array alphabetically? 

let sort =()=>{
    let friuts=["Apple", "Banana", "Orange","Avacoda","Berry","Cherry"];
    let sort_result=friuts.sort();
    return(sort_result);
}
console.log(sort());

// 13. How would you create a new array with each fruit name in uppercase? 

let uppercase =()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let upper_result=friuts.map(friuts=>friuts.toUpperCase());
     return(upper_result);   
}
console.log(uppercase());

// 14. How can you filter out fruits that do not contain the letter "a" from the fruits array?

let filter =()=>{
    let friuts=["Apple", "Banana", "Orange","Avacoda","Berry","Cherry"];
    let filterresult=friuts.filter(friuts=>friuts.toLowerCase().includes("a"));
    let filter_result=friuts.filter(friuts=>!friuts.toLowerCase().includes("a"));
    return(filter_result);
}
console.log(filter());

//15.How would you iterate over the fruits array and print each fruit using forEach()?

let fruits = ["Apple", "Banana", "Orange", "Avocado", "Berry", "Cherry"];
fruits.forEach((fruit,index) => {
    console.log(` ${index}: ${fruit}`);
});

// 16. How can you check if every fruit name in the fruits array has more than 3 characters? 

let array_characters = ()=>{
    let friuts=["Apple", "Banana", "Orange","Avacoda","Berry","Cherry","byr"];
    let array = friuts.every(friuts=>friuts.length>3);
    return(array);
}
console.log(array_characters());

// 17. How would you find the first fruit in the fruits array that starts with the letter "O"?

let filter_methods = ()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let O_filter=friuts.filter(friuts=>friuts.includes("O"));
    return(O_filter);
}
console.log(filter_methods());

// 18. How can you join all the elements of the fruits array into a single string separated by commas? 

let join = ()=>{
    let friuts=["Apple", "Banana", "Orange"];
    let join_result=friuts.join(",");
    return(join_result);
}
console.log(join());

// 19. How would you remove the second element ("Banana") from the fruits array? 

let remove = () =>{
    let friuts=["Apple", "Banana", "Orange"];
    let remove_result=friuts.splice(1,1);
    console.log(friuts);
    return(remove_result);
}
console.log(remove());

// 20. How can you flatten a nested array like let nestedFruits = ["Apple", ["Banana", "Orange"], "Grapes"]; into a single array 

let nested_array = ()=>{
    let nestedFruits = ["Apple", ["Banana", "Orange"], "Grapes"];
    let nestedFruits_result=nestedFruits.flat();
    return(nestedFruits_result);
}
console.log(nested_array());
