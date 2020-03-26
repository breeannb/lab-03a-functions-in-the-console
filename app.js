// Step 2: Creat an Array of Objects and Log to the Console. 
    // 5 objects 
    // 2-3 properties of the object 
    // One property needs to be something that I can test and sort into 2 or more categories.  
    //Put all 5 objects into an array. Store this array in a const
    //Loop through this array and log out each object to the console. Serve your project in live server and open up the javascript console to check that it works 
    //ACP 

//Different Cats 

const vincent = { name: 'vincent', age: 6, weight: 16 };
const bagheera = { name: 'bagheera', age: 3, weight: 12 };
const kuxa = { name: 'kuxa', age: 4, weight: 11 };
const marley = { name: 'marley', age: 9, weight: 11 };
const jill = { name: 'vincent', age: 7, weight: 15, toString: function() {return this.color;}};

const cats = [vincent, bagheera, kuxa, marley, jill];

//Step 3: Make a Function Do the Work 
    //Write function named logOutThings that logs out the words "Here are your 5 things!", but using the array.length property to get the right number of things, don't "Hard code" the number 5!
    //Call your function with your array (logOutThings())
    //Validate that it worked by looking at the output in the console
    //Add one more item and add to your array. Validate that the output changes to "Here are your 6 things"
    //ACP 

    function logOutThings(array) {
        console.log('Here are your ', array.length, 'things!');
        let i = 0;
        for(let i = 0; i < weight.length; i++) {
            const weight = weight[i];
            console.log('Heavier', weight);
            } else {
                console.log('Lighter', weight)
            }
    };
    
    logOutThings