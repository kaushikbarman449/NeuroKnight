import Link from 'next/link'
import IconGithub from '../assets/GithubIcon'


const Navbar = () => {
  return (
    <div className={'flex justify-between w-full md:px-40 p-4 sticky h-16 inset-x-0 top-0 z-30 border-b-2 border-gray-200 bg-white/75 backdrop-blur-lg transition-all bg-white'}>
      <div className='flex items-center'>
        <Link href='/Hero' className='text-2xl mt-2'>NeuroKnightMRI</Link>
      </div>
      <div className='flex items-center'>
        <a href="https://github.com/kaushikbarman449" target='_blank'>
          <IconGithub className='cursor-pointer' />
        </a>
      </div>
    </div>
  )
}

export default Navbar