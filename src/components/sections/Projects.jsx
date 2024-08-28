import imgElDebate from '../../assets/Debate.png'
import imgLaPrensaGrafica from '../../assets/LaPrensaGrafica.png'
import imgPeppermint from '../../assets/Peppermint.png'
import imgGoGardenStore from '../../assets/GoGardenStore.png'
import imgPintatuti from '../../assets/Pintatuti.png'
import imgSilvinaMoreno from '../../assets/SilvinaMoreno.png'

import { useState, useRef, useEffect } from 'react'
import { Section } from '../Layout'

const projects = [
  {
    id: 1,
    title: 'El Debate',
    date: '2023',
    summary: 'Actualización tecnológica de El Debate, líder en medios digitales de México, y sus 20+ sitios asociados. Implementación de React y Next.js para mejorar el rendimiento y la experiencia del usuario, resultando en un crecimiento exponencial de la audiencia.',
    body: [
      'Como desarrolladora front-end principal en un equipo multidisciplinario, mi tarea fue transformar el nuevo diseño en realidad utilizando React y Next.js.',
      'El objetivo principal fue crear un template versátil capaz de adaptarse a las diversas necesidades de cada sitio. Esto requirió una cuidadosa consideración de todas las posibles variaciones de formato, diseño e idioma, asegurando que cada medio mantuviera su identidad única mientras se beneficiaba de una base tecnológica común y avanzada.',
      'El enfoque meticuloso en la reproducción pixel a pixel del diseño, combinado con la implementación de las últimas tecnologías de front-end, no solo mejoró la estética de los sitios, sino que también optimizó significativamente su rendimiento y experiencia de usuario. Como resultado, El Debate y sus medios asociados experimentaron un aumento exponencial en su audiencia, alcanzando más de 100 millones de usuarios mensuales.'
    ],
    image: imgElDebate,
    skills: ['JavaScript', 'React js', 'Next js'],
    link: { title: 'debate.com.mx', href: 'https://www.debate.com.mx/' },
  },
  {
    id: 2,
    title: 'La Prensa Gráfica',
    date: '2022 - 2023',
    summary: 'Migración de La Prensa Gráfica, destacado medio de El Salvador, a React y Next.js. Manteniendo la integridad del archivo histórico del diario, el cambio mejoró significativamente en velocidad de carga y experiencia de usuario.',
    body: [
      'La Prensa Gráfica, un importante medio gráfico de El Salvador, emprendió la actualización de su plataforma digital. Como única desarrolladora front-end a cargo del proyecto, asumí la responsabilidad de implementar esta transición.',
      'El desafío principal residió en asegurar la compatibilidad con las tecnologías anteriores que albergaban el extenso archivo del diario. Era fundamental preservar toda la información histórica y garantizar que los usuarios mantuvieran acceso ininterrumpido a todo el contenido durante y después de la migración.',
      'La implementación exitosa de React y Next.js modernizó la plataforma y mejoró significativamente la velocidad de carga y la experiencia general del usuario.'
    ],
    image: imgLaPrensaGrafica,
    skills: ['JavaScript', 'React js', 'Next js'],
    link: { title: 'laprensagrafica.com', href: 'https://www.laprensagrafica.com/' },
  },
  {
    id: 3,
    title: 'Peppermint Flores',
    date: '2021 - 2022',
    summary: 'Desarrollo de sitio de ecommerce para Peppermint Flores, un servicio de ramos de flores por suscripción. Implementación de un modelo de venta único con opciones personalizadas y suscripciones mensuales, logrando una alta tasa de conversión.',
    body: [
      'Como desarrolladora front-end a cargo del proyecto, creé desde cero una plataforma que permitía la venta de ramos individuales e incorporaba un modelo de suscripción mensual.',
      'El principal desafío fue desarrollar un sitio de e-commerce centrado en un único producto con tres opciones de tamaño, a la vez que se explicaba claramente la dinámica del negocio de suscripción mensual. Esto implicó diseñar una interfaz intuitiva que guiaba a los usuarios a través del proceso de selección y compra.',
      'Mediante la implementación de WordPress y WooCommerce, junto con mejoras continuas en el diseño y la experiencia de usuario, se logró una alta tasa de conversión en la venta de suscripciones, el producto principal del negocio. La eficacia del diseño y la funcionalidad del sitio se reflejó en la ausencia de reclamos de clientes relacionados con problemas en el proceso de compra.'
    ],
    image: imgPeppermint,
    skills: ['WordPress', 'WooCommerce']
  },
  {
    id: 4,
    title: 'Go Garden Store',
    date: '2021',
    summary: 'Integración de comercio electrónico en la página web existente de Go Garden Store, plataforma de sueño portátil para recién nacidos. Implementación ágil de funcionalidades de compra manteniendo una experiencia de usuario fluida.',
    body: [
      'Go Garden Store, especializada en plataformas de sueño portátil para recién nacidos, requería incorporar capacidades de comercio electrónico a su página web existente. Como desarrolladora front-end, mi tarea fue integrar estas nuevas funcionalidades de manera seamless, preservando la identidad visual y la experiencia de usuario del sitio original.',
      'Utilizando WordPress y WooCommerce, logré implementar las funcionalidades de e-commerce de manera eficiente, cumpliendo con los plazos ajustados y consiguiendo los resultados deseados sin inconvenientes. El éxito del proyecto se reflejó en la capacidad de los usuarios para realizar compras de manera intuitiva y sin obstáculos, manteniendo la coherencia con la experiencia previa del sitio.'
    ],
    image: imgGoGardenStore,
    skills: ['WordPress', 'WooCommerce'],
    link: { title: 'gogardenstore.com', href: 'https://gogardenstore.com/' },
  },
  {
    id: 5,
    title: 'Pintatuti',
    date: '2020',
    summary: 'Desarrollo del primer sitio de ecommerce para Pintatuti, emprendimiento de objetos de decoración de madera hechos a mano. Implementación estratégica durante la pandemia, permitiendo la continuidad del negocio en el entorno digital.',
    body: [
      'Como desarrolladora front-end, mi tarea fue crear un sitio de comercio electrónico que no solo permitiera las ventas en línea, sino que también capturara la esencia artesanal de la marca.',
      'Un desafío clave fue comunicar eficazmente la naturaleza única de los productos hechos a mano. Era crucial resaltar que podían existir ligeras diferencias entre objetos similares, previniendo así posibles malentendidos o quejas de los clientes. Esto requirió un diseño cuidadoso de la interfaz y la implementación de descripciones detalladas de productos.',
      'Utilizando WordPress y WooCommerce, desarrollé una plataforma que no solo facilitaba las transacciones, sino que también educaba a los clientes sobre el valor de la artesanía. El sitio logró introducir exitosamente a Pintatuti en el mundo digital, permitiéndole continuar sus operaciones en un contexto de restricciones por la pandemia.'
    ],
    image: imgPintatuti,
    skills: ['WordPress', 'WooCommerce']
  },
  {
    id: 6,
    title: 'Silvina Moreno',
    date: '2020',
    summary: 'Desarrollo de una página web unificada para Silvina Moreno, músico argentina, consolidando su presencia en línea durante la pandemia. Diseño minimalista e intuitivo que facilitó la continuidad de su carrera en el entorno digital.',
    body: [
      'El principal desafío fue integrar todo el material de la artista en una sola página, manteniendo una interfaz minimalista e intuitiva. Era crucial presentar una gran cantidad de información y contenido multimedia sin abrumar al usuario, asegurando una navegación fluida y una experiencia agradable.',
      'El objetivo se logró utilizando HTML, CSS y JavaScript. La página resultante consolidó eficazmente la presencia digital de Silvina y se convirtió en una herramienta esencial para su trabajo durante la pandemia, permitiéndole mantener y expandir su conexión con su audiencia en un momento en que los eventos presenciales no eran posibles.'
    ],
    image: imgSilvinaMoreno,
    skills: ['HTML', 'CSS', 'JavaScript'],
    link: { title: 'silvinamoreno.com', href: 'https://silvinamoreno.com/' },
  },
]

export default function ProjectsSection () {
  return (
    <Section id='projects'>
      <div className='max-w-2xl'>
        <h2 className='text-4xl tracking-tight text-zinc-900 sm:text-5xl'>
          Mi huella en el mundo digital
        </h2>
        <p className='mt-6 text-base text-zinc-600'>
          Cada proyecto que emprendo es una oportunidad para superar desafíos con dedicación y compromiso, buscando soluciones efectivas e innovadoras.
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
  const [isExpanded, setIsExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [project])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <article className="mb-16">
      <div className='flex flex-col-reverse gap-10 sm:flex-row sm:gap-20'>
        <div className='group flex flex-col items-start sm:w-2/3 lg:w-3/5'>
          <h3 className='text-xl lg:text-2xl tracking-tight text-zinc-900'>
            {project.title}
          </h3>
          <time className='relative order-first mb-3 flex items-center text-xs text-zinc-400 pl-3.5'>
            <span className='absolute inset-y-0 left-0 flex items-center'>
              <span className='h-4 w-0.5 rounded-full bg-zinc-200'></span>
            </span>
            {project.date}
          </time>
          <p className='text-base mt-2'>
            {project.summary}
          </p>
          <div
            ref={contentRef}
            className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out`}
            style={{ maxHeight: isExpanded ? `${contentHeight}px` : '0px' }}
          >
            {project.body.map((paragraph, index) => (
              <p key={index} className="text-base text-zinc-600 mb-4">
                {paragraph}
              </p>
            ))}
            <div className='mt-4 flex flex-row gap-4 flex-wrap'>
              {project.skills.map(skill => (
                <Budget key={skill} name={skill} />
              ))}
            </div>
            {project.link &&
              <a
                href={project.link.href}
                target='_blank'
                rel="noopener noreferrer"
                className='my-4 flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-teal-500'
              >
                {project.link.title}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            }
          </div>
          <button
            onClick={toggleExpand}
            className='mt-4 flex items-center gap-2 text-sm font-medium text-teal-500'
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className='w-full sm:w-1/3 lg:w-2/5'>
          <img
            src={project.image}
            alt={project.title}
            className='h-auto w-full object-cover object-center rounded-xl drop-shadow-xl'
          />
        </div>
      </div>
    </article>
  )
}

function Budget ({ name }) {
  return (
    <span className='bg-zinc-100 rounded-md py-1 px-2 text-xs font-medium'>
      {name}
    </span>
  )
}
