'use client'
import { Input, Select, SelectItem } from "@nextui-org/react";
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { EngineIcon } from "../assets/Engine";
import { MailIcon } from '../assets/MailIcon';
import { useRouter } from "next/navigation";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import localFont from 'next/font/local'
import { cn } from '../lib/utils'


const fontScary = localFont({
  src: '../assets/Scary.ttf',
})

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault()
          onOpen();
        }}
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
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={cn("flex flex-col gap-1 tracking-wider text-red-500", fontScary.className)}>
                404! Our Fault
              </ModalHeader>
              <ModalBody>
                <p>
                  This won&apos;t work. Deploying these state-of-the-art models incurs costs beyond our current capabilities. Regrettably, the limitations of free deployment prevent us from offering this feature at the moment. However, integrating these models remains a priority, so stay tuned for updates!
                </p>
                <p>
                  Thank You!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PatientDetailsForm