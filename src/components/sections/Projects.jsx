import imgProjectSection01 from '../../assets/ProjectsSection01.jpg'
import imgProjectSection02 from '../../assets/ProjectsSection02.jpg'
import imgProjectSection03 from '../../assets/ProjectsSection03.jpg'

import { useState } from 'react'
import { Budget } from '../Atoms'
import { Section } from '../Layout'

const projects = [
  {
    id: 1,
    title: '¿Es posible desarrollar una aplicación desde cero y compartir el proceso en redes sociales?',
    date: '2024',
    summary: 'Con mi primer proyecto full stack, decidí abordar un desafío ambicioso: crear una aplicación que permitiera a los usuarios registrar sus hábitos en un entorno colaborativo, mientras compartía cada paso del proceso en línea.',
    body: 'Mi objetivo principal fue desarrollar una aplicación innovadora diseñada para fomentar la colaboración y el apoyo entre estudiantes de programación. Esta plataforma permite a los usuarios comprometerse con diversas actividades y registrar su progreso en un entorno comunitario. A través de esta iniciativa, no solo aplico mis habilidades técnicas en el desarrollo de software, sino que también fomento el intercambio de conocimientos y la recepción de feedback en redes sociales.',
    image: imgProjectSection01,
    skills: ['React js', 'Next js', 'Tailwind CSS'],
    link: { title: 'instagram.com/natilavega_', href: 'https://www.instagram.com/natilavega_/' },
  },
  {
    id: 2,
    title: '¿Cómo actualizar el frontend de más de 20 medios gráficos con un solo template?',
    date: '2022 -2023',
    summary: 'Para este proyecto colaborativo con el equipo de Iconosur, nos enfrentamos al desafío de modernizar el frontend de las aplicaciones web para el grupo de medios más importante de México.',
    body: 'Nuestro objetivo era crear un template versátil capaz de adaptarse a las diversas necesidades de más de 20 publicaciones distintas. Este trabajo implicó considerar cuidadosamente todas las posibles variaciones de formato, diseño e idioma y garantizar que el template ofreciera una adaptación fluida para cada una de ellas. Fue un trabajo en equipo que requirió atención al detalle en cada paso del proceso.',
    image: imgProjectSection02,
    skills: ['React js', 'Next js'],
    link: { title: 'debate.com.mx', href: 'https://www.debate.com.mx/' },
  },
  {
    id: 3,
    title: '¿Cómo diseñar un ecommerce para un solo producto de suscripción mensual?',
    date: '2020 - 2022',
    summary: 'Con Peppermint Flores, nos enfrentamos al desafío de desarrollar un sitio de comercio electrónico con un único producto en tres opciones de tamaño y explicar la dinámica de negocio de suscripción mensual.',
    body: 'El objetivo principal era crear una experiencia de compra intuitiva y atractiva que permitiera a los usuarios entender fácilmente la dinámica de la suscripción y seleccionar la opción que mejor se adaptara a sus necesidades. La solución implicó el diseño de una interfaz limpia y minimalista que resaltaba la belleza de los ramos de flores y la implementación de un proceso de compra que guiaba a los usuarios en la elección del tamaño, los medios de pago y los datos de envío de manera secuencial y sencilla.',
    image: imgProjectSection03,
    skills: ['React js', 'WordPress', 'WooCommerce']
  },
]

export default function ProjectsSection () {
  return (
    <Section id='projects'>
      <div className='max-w-2xl'>
        <h2 className='text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl'>
          Mi huella en el mundo digital.
        </h2>
        <p className='mt-6 text-base text-zinc-600'>
          Me apasiona contribuir a la creación de una web más accesible y beneficiosa para todos los usuarios. Cada proyecto que emprendo es una oportunidad para superar desafíos con dedicación y compromiso, buscando soluciones efectivas e innovadoras.
        </p>
      </div>
      <div className='mt-16 sm:mt-20'>
        <div className='flex flex-col gap-16'>
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function Project ({ project }) {
  const [viewMore, setViewMore] = useState(false)

  return (
    <article>
      <div className='flex flex-col-reverse gap-10 sm:flex-row sm:gap-20'>
        <div className='group flex flex-col items-start sm:w-2/3 lg:w-3/5'>
          <h3 className='text-xl lg:text-2xl font-bold tracking-tight text-zinc-900'>
            {project.title}
          </h3>
          <time className='relative order-first mb-3 flex items-center text-xs text-zinc-400 pl-3.5'>
            <span className='absolute inset-y-0 left-0 flex items-center'>
              <span className='h-4 w-0.5 rounded-full bg-zinc-200'></span>
            </span>
            {project.date}
          </time>
          <p className='mt-2'>
            {project.summary}
          </p>
          <button
            onClick={() => setViewMore(!viewMore)}
            className='mt-4 flex items-center gap-2 text-sm font-medium text-teal-500'
          >
            Leer más
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ${viewMore ? 'rotate-90' : 'rotate-0'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className={`mt-4 transition-all duration-500 ease-in-out ${viewMore ? 'h-72 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
            <p className="text-zinc-600">
              {project.body}
            </p>
            <div className='mt-4 flex flex-row gap-4'>
              {project.skills.map(skill => (
                <Budget key={skill} name={skill} />
              ))}
            </div>
            {project.link && <a href={project.link.href} className='mt-6 flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-teal-500'>
              {project.link.title}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>}
          </div>
        </div>
        <div className='w-full sm:w-1/3 lg:w-2/5'>
          <img
            src={project.image}
            alt={project.title}
            className='h-auto w-full object-cover object-center rounded-xl'
          />
        </div>
      </div>
    </article>
  )
}
