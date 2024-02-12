export const calculateBmi = (height, weight) => {
    const bmi = weight / Math.pow(height / 100, 2);
    if (bmi < 16.0)
        return "Underweight (Severe thinness)";
    if (bmi >= 16.0 && bmi <= 16.9)
        return "Underweight (Moderate thinness)";
    if (bmi >= 17.0 && bmi <= 18.4)
        return "Underweight (Mild thinness)";
    if (bmi >= 18.5 && bmi <= 24.9)
        return "Normal range";
    if (bmi >= 25.0 && bmi <= 29.9)
        return "Overweight (Pre-obese)";
    if (bmi >= 30.0 && bmi <= 34.9)
        return "Obese (Class I)";
    if (bmi >= 35.0 && bmi <= 39.9)
        return "Obese (Class II)";
    if (bmi >= 40.0)
        return "Obese (Class III)";
    return "Invalid BMI";
};
/*

const [, , height, weight] = process.argv;
if (!height || !weight) {
  console.log("Please provide height and weight as arguments (e.g., npm run calculateBmi 180 75)");
} else {
  console.log(calculateBmi(Number(height), Number(weight)));
}

*/
