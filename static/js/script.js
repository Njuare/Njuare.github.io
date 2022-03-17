// challenge 1: your age in days!

function ageInMinutes() {
    var birthyear = prompt('What year were you born?');
    var ageinminutes = (2022 - birthyear) * 525600;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +  ageinminutes  +  ' minutes old ')
    h1.setAttribute('id', 'ageInMinutes');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset() {
    document.getElementById('ageInMinutes').remove();
}