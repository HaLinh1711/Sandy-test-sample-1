console.log("Hello, JavaScript!");

// const isVowel = (char) => {
//     if (char.length !== 1) {
//         return false;
//     }
//     const vowels = 'aeiouAEIOU';
//     return vowels.includes(char);
// }
// console.log(isVowel('a'));
// console.log(isVowel('b'));
// console.log(isVowel('hello'));

// const sum = (a,b) => a + b;

const countVowel = (string) => {
    if (string.length === null || string.length === undefined || string.length ===0) {
        return false;
    }
 const vowels = 'aeiouAEIOU';

 let count = 0;
for (let char of string) {
    if (vowels.includes(char)) {
        count++;
    }
}
 return count;
}

console.log(countVowel('hello'));

const checkPassword = (password) => {
    if (password.length < 8) {
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

console.log(checkPassword('Mary@123'));


    