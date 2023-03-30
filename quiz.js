function checkAnswers() {
	// Get the user's answers
	var q1Answer = document.querySelector('input[name="q1"]:checked').value;
	var q2Answer = document.querySelector('input[name="q2"]:checked').value;
	var q3Answer = document.querySelector('input[name="q3"]:checked').value;

	// Check the answers and calculate the score
	var score = 0;
	if (q1Answer === "b") {
		score++;
	}
	if (q2Answer === "c") {
		score++;
	}
	if (q3Answer === "a") {
		score++;
	}

	// Display the results
	var results = document.getElementById("results");
	if (score === 3) {
		results.innerHTML = "Gratulálok! Az összes válaszod helyes.";
	} else {
		results.innerHTML = "Gratulálok! szereztél " + score + " pontott a 3-ból következönek ügyesebb leszel.";
	}
}
