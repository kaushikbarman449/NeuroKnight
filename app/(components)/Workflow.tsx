import Image from 'next/image'
import { Arrow } from '../assets/Arrow'
import localFont from 'next/font/local'
import { cn } from '../lib/utils'


const fontScary = localFont({
  src: '../assets/Scary.ttf',
})

const AboutModels = [
  {
    id: 101,
    title: "AlexNet",
    about: "AlexNet is a deep convolutional neural network (CNN) architecture that gained significant attention after winning the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) in 2012. It consists of five convolutional layers followed by max-pooling layers, with three fully connected layers at the end."
  },
  {
    id: 102,
    title: "GoogleNet (Inception)",
    about: "GoogleNet, also known as Inception, is a CNN architecture developed by Google researchers. It introduced the concept of &quot;inception modules,&quot; which are convolutional modules with multiple parallel convolutional operations at different spatial scales. GoogleNet won the ILSVRC in 2014 and demonstrated state-of-the-art performance on various computer vision tasks."
  },
  {
    id: 103,
    title: "Vision Transformers",
    about: "The Vision Transformer (ViT) is a recent approach to computer vision tasks that applies the transformer architecture, originally developed for natural language processing, to image classification tasks. ViT divides the input image into patches, which are flattened and processed by transformer blocks. By leveraging self-attention mechanisms, ViT achieves strong performance on image classification tasks without relying on CNNs."
  },
  {
    id: 104,
    title: "ResNet",
    about: "ResNet is a deep CNN architecture. ResNet architectures consist of residual blocks, which enable the training of extremely deep networks (hundreds of layers) while mitigating the vanishing gradient problem."
  },
  {
    id: 105,
    title: "VGG-19",
    about: "VGG19 is a deep convolutional neural network (CNN) architecture, an extension of the VGG16 model, with 19 layers. Its architecture comprises 16 convolutional layers and 3 fully connected layers, hence the name."
  }
]

const Workflow = () => {
  return (
    <div className="sm:mt-32 p-2 w-full sm:p-20 sm:px-40 text-center flex flex-col gap-y-4 bg-[#fcf3e4]">
      <h2 className="relative tracking-tight font-bold !leading-[4rem] text-gray-900 sm:text-5xl text-4xl">&quot;Workflow of our {' '} <span className="bg-red-500 text-white px-4 text-nowrap">Machine Learning</span> {' '}Web App&quot;</h2>
      <Arrow />
      <p>
        We have these 4 classes.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-2xl">
        <div>
          <p>Glioma Tumor</p>
          <Image
            height={400}
            width={250}
            src='/glioma.png'
            alt='glioma'
          />
        </div>
        <div>
          <p>Meningioma Tumor</p>
          <Image
            height={400}
            width={250}
            src='/meningioma.png'
            alt='meningioma'
          />
        </div>
        <div>
          <p>No Tumor</p>
          <Image
            height={400}
            width={250}
            src='/no_tumor.png'
            alt='no_tumor'
          />
        </div>
        <div>
          <p>Pituitary Tumor</p>
          <Image
            height={400}
            width={250}
            src='/pituitary.png'
            alt='pituitary'
          />
        </div>
      </div>
      <p className='mx-auto text-lg max-w-2xl text-balance'>The model provides reliable classification of these 3 broad tumor categories, it does not differentiate between <span className='text-red-500'>subclasses or types</span> within each category. This streamlined approach allows for efficient and effective screening and triaging of patients, enabling prompt medical intervention and treatment planning.</p>
      <div className='mt-16 px-2 text-balance'>
        <h3 className='tracking-tight font-bold !leading-[4rem] text-gray-900 sm:text-3xl text-2xl'>Model Architectures</h3>
        <p className='mx-auto text-lg max-w-4xl text-balance'>We successfully trained five distinct model architectures using a meticulously partitioned dataset, comprising Training, Testing, and Validation subsets.</p>
        <ul className='sm:text-left text-center space-y-4 mt-8'>
          {AboutModels.map((item, index) => (
            <li key={item.title}>
              <span className='underline underline-offset-4 text-xl'>{item.title}</span>
              <p className='no-underline mt-2'>{item.about}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-[#dae9fc] mt-16 rounded-2xl w-full p-8 text-center'>
        <h4
          className={cn(
            'font-bold text-red-500 tracking-widest !leading-[4rem] sm:text-3xl text-2xl',
            fontScary.className
          )}>
          Disclaimer
        </h4>
        <p className='mx-auto text-lg max-w-3xl text-balance'>
          Please note that while our models have been rigorously trained and tested on specific datasets for the task of brain tumor classification, they may not perform optimally on images outside of their intended domain. For instance, if a user uploads an image of a flower instead of a brain tumor MRI scan, the model&apos;s output may not be accurate or relevant. We advise users to ensure that uploaded images align with the intended use case of the selected model for optimal results. Additionally, our models have not been specifically trained to handle special cases or edge scenarios. We encourage users to exercise discretion and interpret results accordingly.
        </p>
      </div>
    </div>
  )
}

export default Workflow