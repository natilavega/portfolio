import { Section } from '../Layout'
import { ImageGrid } from '../ImageGrid'

export default function AboutSection () {
  return (
    <Section id='about'>
      <div className='grid grid-rows-1 gap-y-16 lg:gap-y-8 gap-x-12 max-w-2xl lg:max-w-none'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>
            Soy Natalia. Hace casi 10 años escribo código desde Buenos Aires para el mundo.
          </h2>
          <div className='mt-6 space-y-7 text-base text-zinc-600'>
            <p>
              Desde que tengo memoria, he sentido curiosidad por comprender cómo funciona el mundo
              y por plasmar mis ideas en la realidad. En mi búsqueda constante de respuestas,
              he explorado tanto el arte y la filosofía como el fascinante mundo de la programación,
              descubriendo en cada caso nuevos y mejores interrogantes.
            </p>
            <p>
              Me interesa el impacto que unas simples líneas de código pueden tener en el mundo entero,
              así como el poder de desarrollar soluciones que mejoren la vida de los usuarios, además
              de la capacidad de conectar con personas en cualquier rincón del planeta en un instante.
            </p>
            <p>
              Pero, aunque me apasiona el mundo digital, también creo en la importancia de desconectar
              y disfrutar de la vida fuera de las pantallas. Por eso, en mi tiempo libre, me encontrarás
              compartiendo un café con amigas, leyendo un buen libro, cuidando mis suculentas o dando un
              paseo por la orilla del río.
            </p>
          </div>
        </div>
        <ImageGrid />
      </div>
    </Section>
  )
}
