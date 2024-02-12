import express from "express";
import { calculateExercises } from "./exerciseCalculator";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.use(express.json());

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (isNaN(target) || daily_exercises.some((hour: number) => isNaN(hour))) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateExercises(daily_exercises, target);

  return res.json(result);
});

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const bmi = calculateBmi(height, weight);

  return res.json({ height, weight, bmi });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
