import Announcement from './ui/Announcement';

export default function HeroSectionCentredWithImage() {
  return (
    <>
      <main className='relative overflow-hidden py-24 lg:py-32'>
        <section className='container'>
          <div className='max-w-2xl text-center mx-auto pb-6'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              UrlTiny
            </h1>
            <p className='mt-3 text-xl text-muted-foreground'>
              Perfecto para redes sociales y email marketing
            </p>
            {/* <p className='mt-3 text-xl text-muted-foreground text-teal-500 font-medium'>
              Más corto, más fácil. UrlTiny.
            </p> */}
            <Announcement />
          </div>
          <div className='mt-10 relative max-w-4xl mx-auto'>
            <img
              src='https://media.istockphoto.com/id/1707071510/es/foto/optimizaci%C3%B3n-de-motores-de-b%C3%BAsqueda-o-seo-manos-de-hombre-usando-computadora-port%C3%A1til-para.jpg?s=612x612&w=0&k=20&c=sX9CY_WdR-JCVnoFzBiCUa0G5dilzl7EcN5iY9BCfks='
              className='rounded-xl w-[1024px] brightness-50 '
              alt='Image Description'
            />
            <figure className='absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-bl  from-teal-400 via-teal-600 to-teal-900 p-px rounded-lg'>
              <div className='w-48 h-48 rounded-lg bg-background/10' />
            </figure>
            <figure className='absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full'>
              <div className='w-48 h-48 rounded-full bg-background/10' />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
