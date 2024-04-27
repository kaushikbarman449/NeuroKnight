'use client'
import { Input, Select, SelectItem } from "@nextui-org/react";
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { EngineIcon } from "../assets/Engine";
import { MailIcon } from '../assets/MailIcon';
import { useRouter } from "next/navigation";

const models = [
  {
    label: "VGG-16",
    value: "VGG16"
  },
  {
    label: "Vision Transformers",
    value: "VisionTransformers"
  },
  {
    label: "Alex Net",
    value: "AlexNet"
  },
  {
    label: "ResNet",
    value: "ResNet"
  },
  {
    label: "GoogleNet",
    value: "Inception"
  }
]


const PatientDetailsForm = () => {

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<string | File | null>();

  const patientNameElement = useRef<HTMLInputElement>(null);
  const modelTypeElement = useRef<HTMLSelectElement>(null);


  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files == null) return
    else setImageFile(e.target.files[0])
  }


  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const patientName = patientNameElement.current?.value
    const modelType = modelTypeElement.current?.value
    if (!patientName || !modelType || !imageFile) {
      console.error("Patient Name, Model Type or Uploaded Image File is undefined")
      return;
    }

    const formData = new FormData();
    formData.append("patientName", patientNameElement.current?.value)
    formData.append("modelType", modelTypeElement.current?.value)
    formData.append("imageFile", imageFile)

    try {
      const result = await axios.post("http://localhost:8000/patients", formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.push(`/Hero/${patientName}`)
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <form
        className='bg-[#e1e8f1] rounded-lg'
        // onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className='flex flex-col p-6 sm:p-10 gap-y-8'>
          <Input
            ref={patientNameElement}
            autoFocus
            isRequired
            type="text"
            label="Patient's Name"
            placeholder="John Doe"
            labelPlacement="outside"
            id="patientName"
            className="text-black"
            startContent={
              <MailIcon className="text-2xl text-[#71717a] pointer-events-none flex-shrink-0" />
            }
          />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-[#182327]">Upload MRI Scanned Image <span className="text-[#f32c62]">*</span> </span>
            </div>
            <input
              onChange={handleImageFileUpload}
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full max-w-xs bg-white"
              required
            />
          </label>

          <Select
            id="modelType"
            ref={modelTypeElement}
            isRequired
            label="Model Architecture"
            labelPlacement="outside"
            placeholder="Select a model type"
            startContent={
              <EngineIcon className="w-4 h-4 text-[#71717a] pointer-events-none flex-shrink-0" />
            }
          >
            {models.map((model) => (
              <SelectItem
                key={model.value}
                value={model.value}
                className="text-black"
              >
                {model.label}
              </SelectItem>
            ))}
          </Select>

          <button
            className="btn uppercase bg-[#e13159] text-white outline-0	border-0 hover:bg-[#e23159]">
            {
              loading && <span className="loading loading-spinner"
              />
            }
            Tumor Check
          </button>
        </div>
      </form>
    </div>
  )
}

export default PatientDetailsForm