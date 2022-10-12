const answer = prompt('red,yellow or green');
if (answer ===  'green'){
    console.log('GO');
} else if (answer === 'yellow'){
    console.log('WAIT');
} else if (answer === 'red'){
    console.log('STOP GUYS');
} else {
    console.log('Ведите цвет светофора');
}