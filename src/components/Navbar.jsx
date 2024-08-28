import avatar from '../assets/AboutSection02.jpg'

const profile = {
  name: 'Natalia Lavega',
  job: 'Desarrolladora Frontend',
  image: avatar
}

export default function Navbar () {
  return (
    <nav className='bg-white'>
      <div className='px-5 md:px-8 lg:px-20'>
        <div className='flex justify-between h-16 lg:h-24'>
          <a className='flex items-center gap-3' href='#hero'>
            <div>
              <img
                src={profile.image}
                alt={profile.name}
                className='h-10 w-10 rounded-full'
              />
            </div>
            <div>
              <h3 className='text-base text-zinc-900'>{profile.name}</h3>
              <p className='text-xs text-zinc-600'>{profile.job}</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}
