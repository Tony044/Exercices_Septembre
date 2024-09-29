// Exercice 1
// function simplePromise() {
//     const success = Math.random()*10;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success < 5) {
//                 resolve("Réussie après 2 secondes");
//             } else {
//                 reject('Non réussie');
//             }
//         }, 2000);
    
// });
// }

// simplePromise()
//     .then((resolve) => {
//         console.log(resolve);
//     })
//     .catch((reject) => {
//         console.log("error: " + reject);
//     })


//Exercice 2
// function firstPromise () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('1ère promise réussie');
//         }, 1000);
//     })
// }
// function secondPromise () {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('2ème promise non réussie');
//         }, 1000);
//     })
// }

// firstPromise()
//     .then((firstPromise) => {
//         console.log(firstPromise);
//         return secondPromise();
//     })
//     .then((secondPromise) => {
//         console.log(secondPromise);
//     })
//     .catch((reject) => {
//             console.log("error : ", reject);
//         })

//Exercice 3

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('La première promèsse');
//     }, 1)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('La deuxième promèsse');
//     }, 1)
// })

// Promise.all([promise1, promise2])
//     .then((resolve) => {
//         console.log(resolve)
//     })
//     .catch((reject) => {
//         console.log("Error: " + reject);
//     })

//Exercice 4
const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La première promèsse');
        }, 1)
    })
    
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('La deuxième promèsse est rejetée');
        }, 1)
    })
    
    async function promiseAll() {
        try {
            let result1 = await promise1;
            console.log(result1);
        }catch (error1) {
            console.error(error1);
        }

        try {
            let result2 = await promise2;
            console.log(result2);
        }catch (error2) {
            console.error(error2);
        }
    }

    promiseAll();

    // Promise.all([promise1, promise2])
    //     .then((resolve) => {
    //         console.log(resolve)
    //     })
    //     .catch((reject) => {
    //         console.log("Error: " + reject);
    //     })