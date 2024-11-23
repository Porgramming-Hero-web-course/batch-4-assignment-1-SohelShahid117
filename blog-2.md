***2.How to handle asynchronous operations using async/await over callback/promise TypeScript?

The asynchronous operations in TypeScript can be performed in the same way as we usually do in simple JavaScript. We can use the Promises, Callbacks, and async/await statements to handle the asynchronous operation in TypeScript. The below syntax will show how you can use different approaches to handle the asynchronous operations in TypeScript


//Syntax:

// Using Promises
function function_name(): Promise<string>{
    return new Promise(()=>{
        // Resolve promise here
    });
}

// Using Callbacks
function function_name((data: string, error?: Error) => {
    // Resolve callback here
}); 


// Using async/await
function func1(delay: number): Promise<void>{
    return new Promise(()=>{
        // Resolve Promise here
    })
}

async function function_name(): Promise<string>{
    const pro = await func1(2000);
    return pro;
}
function_name();

example:
// Function returning a promise

function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async data has been fetched!");
    }, 2000);
  });
}

// Async function using await to handle the promise
async function fetchDataAsync(): Promise<void> {
  try {
    const result = await fetchData();
    console.log(result); // Output: Async data has been fetched!
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchDataAsync();
