const calculateElement = document.getElementById('calculate');
const birthdayElement = document.getElementById('birthday');
const resultElement = document.getElementById('result')

function calculateAge() {
    // console.log('calculateAge');
    const birthdayValue = birthdayElement.value;
    
    if (!birthdayValue || isNaN(new Date(birthdayValue).getTime())) {
        alert('Please enter your birthday date');
        return;
    }

    else{
        const age  = getAge(birthdayValue);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthYear = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthYear.getFullYear();
    // console.log(age);

    const month = currentDate.getMonth() - birthYear.getMonth();

    // create a condition to check if the birthday has passed
    if (month < 0 || (month === 0 && currentDate.getDate() < birthYear.getDate())) {
        age--;
    }

    return age;
}

calculateElement.addEventListener('click', 
    calculateAge)
