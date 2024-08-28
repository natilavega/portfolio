import Navbar from './Navbar'
import { SocialsList } from './sections/Contact'

export function Header () {
  return (
    <header>
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <Navbar />
      </div>
    </header>
  )
}

export function Footer () {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-20'>
      <div className='bg-zinc-100 py-5 sm:px-8'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className='px-5 md:px-8 lg:px-20'>
            <div className='flex flex-row items-center justify-between'>
              <p className='text-xs text-zinc-600'>
                {year} - Hecho en Buenos Aires.
              </p>
              <div>
                <SocialsList />
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
    <section id={id} className='pt-20'>
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <div className='relative px-5 md:px-8 lg:px-20'>
          {children}
        </div>
      </div>
    </section>
  )
}
