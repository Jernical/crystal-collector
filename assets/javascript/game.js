$(document).ready(function() {

	// ******* NUMBER ARRAYS *******

	// random var array
	var randNum = [];

		for (var r = 19; r < 121; r++) {
			randNum.push(r);
	}

	// crystal numbers array
	var crystals = [];

		for (var c = 1; c < 13; c++) {

			crystals.push(c);
	}

	console.log(crystals);

	// ******* GLOBAL VARS *******

	// random VARS
	var randNumber;
	var crystalNumbers = [];

	var c1;
	var c2;
	var c3;
	var c4;

  	var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******

	// pick a random number
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

			console.log("random number: " + randNumber);

	} // END of pickRandomNumber function

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

				crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(randNum);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNum").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(randNum); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNum").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNum").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNum").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNum").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNum").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNum").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE")}, 200);
		}
	});

});