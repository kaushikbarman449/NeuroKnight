/* eslint-disable @next/next/no-img-element */
'use client'

import MaxWidthWrapper from '../(components)/MaxWidthWrapper'
import { LoadingIcon } from '../assets/LoadingIcon'
import { useFetchData } from '../hooks/useFetchData'

const ResultsPage = () => {

  const patientData = useFetchData();

  return (
    <MaxWidthWrapper className='h-screen flex justify-center items-center w-screen text-black'>
      {patientData ?
        <table className="table-auto h-[500px] w-[800px]">
          <thead>
            <tr>
              <th colSpan={3} className='tracking-wide text-2xl'>Diagnostic Imaging Report: Brain Tumor MRI Findings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{patientData?.patientName}</td>
            </tr>
            <tr>
              <td>Model Architecture</td>
              <td>{patientData?.modelType}</td>
            </tr>
            <tr>
              <td>MRI Scanned Image</td>
              <td><img className='rounded-md' src={patientData?.imageURL} alt='Image of the mri scan' /></td>
            </tr>
            <tr>
              <td>Tumor Type</td>
              <td>{patientData?.tumor.tumorName}</td>
            </tr>
            <tr>
              <td>Probabilty</td>
              <td>{patientData?.tumor.probability}%</td>
            </tr>
          </tbody>
        </table>
        : (
          <div className='flex flex-col items-center'>
            <LoadingIcon />
            <span>Generating report...</span>
          </div>
        )
      }
      {/* <table className="table-auto h-[500px] w-[800px]">
        <thead>
          <tr>
            <th colSpan={3} className='tracking-wide text-2xl'>Diagnostic Imaging Report: Brain Tumor MRI Findings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{patientData?.patientName}</td>
          </tr>
          <tr>
            <td>Model Architecture</td>
            <td>{patientData?.modelType}</td>
          </tr>
          <tr>
            <td>MRI Scanned Image</td>
            <td><img src={patientData?.imageURL} alt='Image of the mri scan' /></td>
          </tr>
          <tr>
            <td>Tumor Type</td>
            <td>{patientData?.tumor.tumorName}</td>
          </tr>
          <tr>
            <td>Probabilty</td>
            <td>{patientData?.tumor.probability}%</td>
          </tr>
        </tbody>
      </table> */}

    </MaxWidthWrapper >
  )
}

export default ResultsPage