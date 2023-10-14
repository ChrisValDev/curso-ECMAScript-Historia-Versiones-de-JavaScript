// enhaced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId,
    }
}

console.log(newUser("ChrisVal", 28, 'MX', 7));