(function () {
"use strict";
const R = require('ramda');

const teams = [
	{ name : "Lions", score : 5 },
	{ name : "Tigers", score : 4 },
	{ name : "Bears", score : 6 },
	{ name : "Monkeys", score : 2 }
];

const totalScore = R.pipe(
	R.pluck("score"),
	R.reduce(R.add, 0)
);

const winningTeam = R.pipe(
	R.sortBy(R.prop("score")),
	R.last(),
	R.prop("name")
);

describe("Football team results", () => {

	it("should calculate the total score", () => {
		totalScore(teams).should.eql(17);
	});

	it("should identify the winning team", () => {
		winningTeam(teams).should.eql("Bears");
	});

});
}());
