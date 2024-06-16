// promise concept with callbacks

let doTask = (success, failure) => {
    // dong the task
    let isDone = true;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is Not Done');
    }
};
doTask((message) => {
    console.log(message);
}, (message) => {
    console.error(message);
});


// Actual Promise Creation:-
let cleanCamera = new Promise((resolve, reject) => {
    // cleaning camera
    let isDone = true;
    if(isDone){
        resolve('Cleaning is Done');
    }
    else{
        reject('Cleaning is Not Done');
    }
});

cleanCamera.then((message) => {
    console.log(message);
}).catch((message) => {
    console.error(message);
});

