const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Heyyy!!');
        } else {
            reject('Buuuuu!!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finnaly'));