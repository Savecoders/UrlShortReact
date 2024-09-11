import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function SignUp() {
  return (
    <main className='w-full h-screen md:flex md:min-h-[600px]'>
      <div className='w-full h-full'>
        <img
          src='https://images.unsplash.com/photo-1494633114655-819eb91fde40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='login'
          className='object-cover w-full h-full hidden md:block '
        />
      </div>
      <section className='flex flex-col w-full max-w-[560px] justify-center p-10 space-y-10 bg-black'>
        <h1 className='text-primary text-4xl text-center'>Register UrlShort</h1>
        <p className='px-10 py-0 text-center'>
          Create an account to start shortening your links. It's free and only
        </p>
        <form className='flex flex-col space-y-6 w-full px-10 py-2'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' />
          <Label htmlFor='password'>Password</Label>
          <Input type='password' id='password' />

          <Label htmlFor='password'>Confirm Password</Label>
          <Input type='password' id='confpassword' />

          <div className='flex justify-center text-center'>
            Already have an account? &nbsp;
            <a href='/login' className='text-blue-600 font-semibold'>
              login here!
            </a>
          </div>

          <Button type='submit'>Register</Button>
        </form>
      </section>
    </main>
  );
}
