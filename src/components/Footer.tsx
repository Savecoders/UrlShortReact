import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='px-10 py-2 my-24 relative flex justify-between max-w-5xl mx-auto rounded-md  border-teal-800 text-center'>
      <div className='flex flex-col text-left gap-3'>
        <p>© 2024 - UrlTiny. All rights reserved.</p>
        <p>
          Created by{' '}
          <a className='text-teal-300' href='https://github.com/Savecoders'>
            Savecoders
          </a>
        </p>
      </div>
      <Link to='' className='text-muted-foreground hover:text-foreground'>
        Privaticy Police
      </Link>
    </footer>
  );
}
