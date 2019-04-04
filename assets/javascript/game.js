$(document).ready(function() {
	// ******* GLOBAL VARS *******

	// random VARS
	var randNumber;
	var crystalNumbers = [];

	var cry1;
	var cry2;
	var cry3;
	var cry4;

  	var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

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

	// pick a random number
	function pickRandomNumber(arr) {

		var reset = arr[Math.floor(Math.random() * arr.length)];
		randNumber = reset;
		$("#randomNumber").html(randNumber);

			console.log("random number is: " + randNumber);

	}

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
			cry1 = arr[0];
			cry2 = arr[1];
			cry3 = arr[2];
			cry4 = arr[3];
	}

	function gameReset(reset) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(randNum);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNum").html(totalScore);

		alert(reset);
	}

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(randNum); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#button-1").on("click", function() {

			totalScore += cry1;
			$("#totalNum").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += cry2;
			$("#totalNum").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += cry3;
			$("#totalNum").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += cry4;
			$("#totalNum").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNum").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 180);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNum").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("YOU LOSE")}, 180);
		}
	});

});