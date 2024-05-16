import imgAboutSection01 from '../assets/AboutSection01.jpg'
import imgAboutSection02 from '../assets/AboutSection02.jpg'
import imgAboutSection03 from '../assets/AboutSection03.jpg'
import imgAboutSection04 from '../assets/AboutSection04.jpg'

const images = [imgAboutSection01, imgAboutSection02, imgAboutSection03, imgAboutSection04]

export function ImageGrid () {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-10">
      {images.map(image => (
        <div
          key={image}
          className="w-full first:-rotate-2 last:-rotate-2 [&:nth-child(2)]:rotate-1 [&:nth-child(3)]:rotate-1"
        >
          <img
            src={image}
            alt=''
            className='h-full w-full object-cover object-center rounded-xl shadow-xl'
          />
        </div>
      ))}
    </div>
  )
}
