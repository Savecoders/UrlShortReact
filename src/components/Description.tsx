import { Building2Icon, ThumbsUpIcon, Users2Icon } from 'lucide-react';

export default function DescriptionWithBlocks() {
  return (
    <>
      <section className='container py-2 lg:py-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid gap-12'>
            <div>
              <h2 className='text-3xl font-bold lg:text-4xl'>Nuestra vision</h2>
              <p className='mt-3 text-muted-foreground'>
                Este es un proyecto de Open Source puedes ver como avanza el proyecto desde su
                repositorio pero lo mas importante, es que queremos convertir y gestionar tus
                UrlTiny.
              </p>
            </div>
            <div className='space-y-6 lg:space-y-10'>
              <div className='flex'>
                <Building2Icon className='flex-shrink-0 mt-2 h-6 w-6' />
                <section className='ms-5 sm:ms-8'>
                  <h3 className='text-base sm:text-lg font-semibold'>Gestiona tus UrlTiny</h3>
                  <p className='mt-1 text-muted-foreground'>
                    Puedes hacer de todo, desde crear tus UrlTiny, agruparlas, editarlas, generar
                    reportes y desactivarlas cuando tu lo veas conveniente.
                  </p>
                </section>
              </div>
              <div className='flex'>
                <Users2Icon className='flex-shrink-0 mt-2 h-6 w-6' />
                <section className='ms-5 sm:ms-8'>
                  <h3 className='text-base sm:text-lg font-semibold'>Auditoria de Tus UrlTiny</h3>
                  <p className='mt-1 text-muted-foreground'>
                    Aparte de crear tus UrlTiny, puedes obtener informacion como, cuandos clicks se
                    han generado, cuando fue creado, el ultimo clic entre otras estadisticas.
                  </p>
                </section>
              </div>
              <div className='flex'>
                <ThumbsUpIcon className='flex-shrink-0 mt-2 h-6 w-6' />
                <section className='ms-5 sm:ms-8'>
                  <h3 className='text-base sm:text-lg font-semibold'>Sin Requisitos</h3>
                  <p className='mt-1 text-muted-foreground'>
                    Puedes crear tu UrlTiny sin necesidad de crear una cuenta, pero recuerda que es
                    con limitaciones, para mas informacion consulta aqui.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
