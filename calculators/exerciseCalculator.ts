interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (dailyHours: number[], target: number): ExerciseResult => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((day) => day > 0).length;
  const totalHours = dailyHours.reduce((acc, curr) => acc + curr, 0);
  const average = totalHours / periodLength;
  const success = average >= target;

  let rating = 1;
  let ratingDescription = "you need to push yourself more";

  if (average >= target) {
    rating = 3;
    ratingDescription = "great job, you met your target!";
  } else if (average >= target * 0.8) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

/*

const [, , target, ...exerciseHours] = process.argv;
const hours = exerciseHours.map((hour) => Number(hour));

if (isNaN(+target)) {
  throw new Error("Provided target is not a number");
}

if (hours.some((hour) => isNaN(hour))) {
  throw new Error("Provided exercise hours include non-numbers");
}

console.log(calculateExercises(hours, Number(target)));
*/
