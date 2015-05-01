app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards().then(function(res) {
			$scope.flashCards = res;
	});

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if (answer.correct) {
				ScoreFactory.correct++;
			}
			else {
				ScoreFactory.incorrect++;
			}
		}
	}

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.getCategoryCards = function(category) {
		FlashCardsFactory.getFlashCards(category).then(function(res) {
				$scope.flashCards = res;
			});
		$scope.thisCategory = category;
	}

	$scope.resetCategory = function() {
		FlashCardsFactory.getFlashCards().then(function(res) {
			$scope.flashCards=res;
		});
		$scope.thisCategory=null;
	}

});