// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent() {
  // The lexical scope of queen is kingdom() because that's where it was initially defined. Belong === lexical
  const parent = "Grandfather";
  console.log(`I am the ${parent}`);
  
  function child() {
    const child = "Father";
    console.log(`Hello, ${parent}`);
    
    function grandchild() {
      console.log(`Hello, ${parent}`);
      console.log(`Hello, ${child}`);
    }  
    grandchild();
  }
  child();
}

parent();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
