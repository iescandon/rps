var buttonChoices = document.getElementsByClassName('choiceBtn');

var userChoice = function () {
	var choice = this.getAttribute('data-choice');
	userChoice = choice;
	console.log(userChoice);
};

var computerChoice = function () {
	var choiceArray = ['rock', 'paper', 'scissors'];
	computerChoice = choiceArray[Math.floor(Math.random() * 3)];
	console.log(computerChoice);
};

for (var i = 0; i < buttonChoices.length; i++) {
	buttonChoices[i].addEventListener('click', userChoice);
	buttonChoices[i].addEventListener('click', computerChoice);
}
