import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function Login() {
  return (
    <main className='w-full h-screen md:flex md:min-h-[600px]'>
      <section className='flex flex-col w-full max-w-[460px] justify-center p-5 space-y-8 bg-black'>
        <h1 className='text-primary text-4xl text-center'>Login UrlTiny</h1>
        <form className='flex flex-col space-y-6 w-full p-10'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' />
          <Label htmlFor='password'>Password</Label>
          <Input type='password' id='password' />
          <div className='flex items-center space-x-4'>
            <input type='checkbox' id='savePassword' />
            <Label htmlFor='savePassword'>Save Password</Label>
          </div>

          <div className='flex justify-center text-center'>
            Don't have an account? &nbsp;
            <a href='/signUp' className='text-blue-600'>
              Sign Up
            </a>
          </div>

          <Button type='submit'>Login</Button>
        </form>
      </section>
      <div className='w-full h-full'>
        <img
          src='https://images.unsplash.com/photo-1494633114655-819eb91fde40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='login'
          className='object-cover w-full h-full hidden md:block contrast-125
        '
        />
      </div>
    </main>
  );
}
