import axios from "axios";
import { useEffect, useState } from "react";

interface PatientData {
  _id: string;
  modelType: string;
  imageURL: string;
  patientName: string;
  tumor: {
    tumorName: string;
    probability: string;
  };
}

export function useFetchData() {
  const [patientData, setPatientData] = useState<PatientData>();

  useEffect(() => {
    axios.get("http://localhost:5000").then((response) => {
      try {
        console.log(response.data);
        setPatientData(response.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return patientData;
}
