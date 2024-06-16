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



// Dependent Promises:-

// -> buildProject
//  -> attendTechnicalRound
//   -> attendManagerRound
//    -> attendHRRound

let buildProject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if(isDone){
            resolve('Project is Finished');
        }
        else{
            reject('Project is Not Finished');
        }
    }, 1000);
});

let attendTechnicalRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if(isDone){
            resolve('Technical Round is Finished');
        }
        else{
            reject('Technical Round is Not Finished');
        }
    }, 2000);
});

let attendManagerRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if(isDone){
            resolve('Manager Round is Finished');
        }
        else{
            reject('Manager Round is Not Finished');
        }
    }, 3000);
});

let attendHRRound = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
        if(isDone){
            resolve('HR Round is Finished, Got Job');
        }
        else{
            reject('HR Round is Not Finished');
        }
        }, 4000);
});

buildProject.then((message) => {
    let result = `${message} -> `;
    console.log(message);   
    attendTechnicalRound.then((message) => {
        result += `${message} -> `;
        console.log(message);
        attendManagerRound.then((message) => {
            result += `${message} -> `;
            console.log(message);
            attendHRRound.then((message) => {
                result += `${message}`;
                console.log(message);
                // console.log(result);
            }).catch((err) => {
                console.error(err);
            });
        }).catch((err) => {
            console.error(err);
        });
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});