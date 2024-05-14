import Navbar from './Navbar'
import { SocialsList } from './sections/Contact'

export function Header () {
  return (
    <header className='sticky top-0 z-10'>
      <Navbar />
    </header>
  )
}

export function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-32'>
      <div className='bg-zinc-100 py-10 sm:px-8'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className='px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
              <div className='flex flex-col sm:flex-row items-center justify-between'>
                <p className='text-xs text-zinc-600'>
                  {year} - Hecho en Buenos Aires.
                </p>
                <div className='mt-3 sm:mt-0'>
                  <SocialsList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Section ({ id, children }) {
  return (
    <section id={id} className='mt-8 pt-24 md:pt-28 sm:px-8'>
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
