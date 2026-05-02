import Image from 'next/image'
import Link from 'next/link'

const PROJECTS = [
  { name: 'Veris', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5113017310b7c54705b1_Frame%202147223292.avif', url: 'https://www.getveris.com/' },
  { name: 'Futurense', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52576655dc248a94ef49_Frame%202147223294.avif', url: 'https://futurense.com/' },
  { name: 'Zoconut', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da52baf341559e0fb3ccf9_Frame%202147223296.avif', url: 'https://www.zoconut.com/' },
  { name: '1% Club', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da530e525c24160128f45c_Frame%202147223298.avif', url: 'https://www.onepercentclub.io/' },
  { name: 'Unscript', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537b58342fe236bf613e_Frame%202147223302.avif', url: 'https://www.unscript.ai/' },
  { name: 'Joindevops', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da537d017310b7c5494918_Frame%202147223300.avif', url: 'https://www.joindevops.com/' },
  { name: 'Assembly', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5451546eab36bdfeee52_Frame%202147223304.avif', url: 'https://www.joinassembly.com/' },
  { name: 'Quickreply', image: 'https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67da5452ac80062ccd556c54_Frame%202147223306.avif', url: 'https://www.quickreply.ai/new-year-2025' },
]

export default function ProjectsGrid() {
  return (
    <section id="projects-x" className="relative section-padding bg-[#0b011d]">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="highlight-text mb-3">Our Work</p>
            <h2 className="heading-h2 mb-3">Featured Projects</h2>
            <p className="para max-w-md">
              Websites that captivate, convert, and scale — built for leading brands.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <Link
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '16 / 10' }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b011d]/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Name + icon */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <p className="text-white font-bold text-xl font-montserrat drop-shadow">
                  {project.name}
                </p>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Image
                    src="https://cdn.prod.website-files.com/67ac3af1ffceaa0540cf0fe3/67ddc3236980be3d22017b72_open_in_new_24dp_FFFFFF_FILL0_wght200_GRAD200_opsz24.svg"
                    alt="Open"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See more */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://linktr.ee/faizzfz"
            target="_blank"
            rel="noopener noreferrer"
            className="base-button text-base px-8 py-3"
          >
            See more Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
