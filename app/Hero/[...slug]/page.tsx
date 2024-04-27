/* eslint-disable @next/next/no-img-element */
'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface PatientData {
  _id: string,
  imageURL: string,
  patientName: string,
  tumor: {
    tumorName: string,
    probability: string
  }
}

const ResultsPage = ({ params }: { params: { slug: string } }) => {

  const [patientData, setPatientData] = useState<PatientData>()

  useEffect(() => {
    axios.get('http://localhost:5000').then(
      response => {
        console.log(response.data)
        setPatientData(response.data)
      }
    )
  }, [])

  return (
    <div>
      {patientData && (
        <div key={patientData._id}>
          <p>{patientData.patientName}</p>
          {patientData.tumor && (
            <>
              <p>{patientData.tumor.tumorName}</p>
              <p>{patientData.tumor.probability}</p>
            </>
          )}
          <img src={patientData.imageURL} alt='image' />
        </div>
      )}
    </div>
  )
}

export default ResultsPage