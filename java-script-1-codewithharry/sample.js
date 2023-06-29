
function outer1() {
    console.log("I am in the outer 1 function")
}

// both are the work--

let outer = () =>{
    console.log("I am in the outer function");
};

outer1()
outer()