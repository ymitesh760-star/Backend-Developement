// Promise-based Recruitment Evaluation System


// 1. Coding Assessment
function codingScoreCheck(marks, cutoff) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let sum = 0;

            for (let mark of marks) {
                sum += mark;
            }

            let average = sum / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }

        }, 2000);

    });
}


// 2. Technical Interview
function technicalInterviewCheck(marks, cutoff) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let sum = 0;

            for (let mark of marks) {
                sum += mark;
            }

            let average = sum / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }

        }, 2000);

    });
}


// 3. Final Selection Review
function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }

        }, 2000);

    });
}


// Calling the functions using .then() and .catch()

codingScoreCheck([80, 75, 90], 70)

    .then((codingAverage) => {

        console.log("Coding Assessment cleared!");
        console.log("Coding Average:", codingAverage);

        return technicalInterviewCheck([75, 80, 85], 70);
    })

    .then((technicalAverage) => {

        console.log("Technical Interview cleared!");
        console.log("Technical Average:", technicalAverage);

        return finalSelectionCheck(80, technicalAverage, 70);
    })

    .then((finalAverage) => {

        console.log("Final Selection cleared!");
        console.log("Final Average:", finalAverage);
        console.log("Congratulations! You have been selected.");

    })

    .catch((error) => {

        console.log(error);

    });