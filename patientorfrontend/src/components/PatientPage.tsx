import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Patient } from "../types";
import patientService from "../services/patients";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient>();
  const params = useParams();

  useEffect(() => {
    const fetchPatientList = async () => {
      const patient = await patientService.getPatientById(params.id as string);
      setPatient(patient);
    };
    void fetchPatientList();
  }, []);
  return (
    <div>
      {patient && (
        <div>
          <h1>{patient.name}</h1>
          <div>ssn: {patient.ssn}</div>
          <div>ssn: {patient.gender}</div>
          <div>ssn: {patient.occupation}</div>
        </div>
      )}
    </div>
  );
};

export default PatientPage;
