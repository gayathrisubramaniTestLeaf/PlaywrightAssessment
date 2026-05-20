function getStudentGrade(score) {

    switch (true) {

        case (score >= 90 && score <= 100):
        console.log(score + "Grade A");
        break;

        case (score >= 75 && score < 90):
            console.log(score + "Grade B");
            break;

        case (score >= 50 && score < 75):
            console.log(score + " Grade C");
            break;

        case (score >= 35 && score < 50):
            console.log(score + " Grade D");
            break;

        default:
            console.log("Fail");
    }
}
let score = 65;
getStudentGrade(score);