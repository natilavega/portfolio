import imgHeroSection from '../../assets/HeroSection.png'

export default function HeroSection () {
  return (
    <section id='hero' className='-mt-8'>
      <div className='pt-36 sm:pt-60 lg:pt-32 pb-28 px-6 lg:px-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row gap-20'>
            <div className='w-full max-w-xl relative lg:shrink-0'>
              <h1 className='text-zinc-900 tracking-tight font-bold text-4xl sm:text-6xl'>
                Soluciones Frontend en React y Next
              </h1>
              <div className='space-y-2 text-zinc-600 leading-8 mt-6 sm:max-w-md lg:max-w-none'>
                <p>
                  Soy Natalia Lavega. Como desarrolladora frontend, he contribuido a potenciar la presencia en línea de numerosos clientes con aplicaciones web funcionales y efectivas. <span className='font-bold'>Descubre cómo puedo ayudarte a llevar tu proyecto al siguiente nivel.</span>
                </p>
              </div>
              <div className='flex items-center mt-10 gap-x-6'>
                <a href='#skills' className=' bg-zinc-900 text-sm text-white tracking-wide capitalize font-semibold rounded-md py-2.5 px-3.5 hover:bg-teal-500'>
                  Saber más
                </a>
                <a href='#projects' className=' text-zinc-900 text-sm leading-6 capitalize font-semibold flex items-center gap-2 hover:text-teal-500'>
                  Ver proyectos anteriores
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className='w-full'>
              <img src={imgHeroSection} alt='' className='h-auto w-full object-cover object-center drop-shadow-xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
