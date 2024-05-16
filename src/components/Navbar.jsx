import { useState } from 'react'
import { SocialsList } from './sections/Contact'

const navigation = [
  { id: 1, name: 'Proyectos', href: '#projects' },
  { id: 2, name: 'Habilidades', href: '#skills' },
  { id: 3, name: 'Sobre Mi', href: '#about' },
  { id: 4, name: 'Contacto', href: '#contact' }
]

const profile = {
  name: 'Natalia Lavega',
  description: 'Desarrolladora Frontend',
  image: 'https://media.licdn.com/dms/image/D4D03AQHA2kh7ajR2kQ/profile-displayphoto-shrink_200_200/0/1687800451609?e=1720656000&v=beta&t=4eTE2cZsgjWnUxAwj7jZA-GhMWPSZWkZ2aeDwhNtyI0'
}

export default function Navbar () {
  const [openNav, setOpenNav] = useState(false)

  return (
    <nav className={`shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)] bg-white ${openNav && 'h-screen flex flex-col'}`}>
      <div className='px-4 sm:px-6 lg:px-10'>
        <div className='flex justify-between h-16 lg:h-24'>
          <a className='flex items-center gap-3' href='#hero'>
            <div>
              <img
                src={profile.image}
                alt={profile.fullname}
                className='h-11 lg:h-14 w-11 lg:w-14 rounded-full'
              />
            </div>
            <div>
              <h3 className='text-lg lg:text-2xl font-bold text-zinc-900'>{profile.name}</h3>
              <p className='text-xs lg:text-base text-zinc-600'>{profile.description}</p>
            </div>
          </a>
          <div className='ml-6 hidden md:flex items-center gap-10'>
            {navigation.map(item => (
              <a
                key={item.id}
                href={item.href}
                className='text-sm lg:text-base text-zinc-600 text-end h-full flex items-center hover:font-semibold hover:border-b-2 hover:border-zinc-900 focus:text-black'
              >
                {item.name}
              </a>
            ))}
            <SocialsList classname='hover:border-b-2 hover:border-zinc-900' />
          </div>
          <div className='-mr-2.5 flex items-center md:hidden'>
            <button
              className='p-2.5 rounded-md bg-transparent hover:bg-zinc-50 focus:bg-zinc-100'
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav
                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>
      {openNav &&
        <div className='pt-2 pb-3 flex flex-col justify-center items-center flex-grow'>
          {navigation.map(item => (
            <a
              key={item.id}
              href={item.href}
              className='px-4 py-3 text-base text-zinc-500 text-end flex items-center hover:font-bold focus:text-black'
              onClick={() => setOpenNav(false)}
            >
              {item.name}
            </a>
          ))}
          <div className='py-3'>
            <SocialsList />
          </div>
        </div>}
    </nav>
  )
}
