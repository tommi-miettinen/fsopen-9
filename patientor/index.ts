import express from "express";
import { patients } from "./patients";
import cors from "cors";
import { v1 as uuid } from "uuid";
import { z } from "zod";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  occupation: string;
  ssn: string;
};

type PatientNoSsn = Omit<Patient, "ssn">;

app.get("/api/patients", (_req, res) => {
  const payload: PatientNoSsn[] = patients.map(({ ssn, ...rest }) => rest);
  res.json(payload);
});

app.post("/api/patients", (req, res) => {
  const validationResult = z
    .object({
      name: z.string(),
      dateOfBirth: z.string(),
      id: z.string(),
      occupation: z.string(),
      gender: z.string(),
      ssn: z.string(),
    })
    .safeParse({
      id: uuid(),
      ...req.body,
    });

  if (!validationResult.success) {
    return res.send(validationResult.error);
  }

  patients.push(validationResult.data);
  return res.json(validationResult.data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
