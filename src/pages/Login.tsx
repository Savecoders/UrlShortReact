import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function Login() {
  return (
    <main className='w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-slate-500'>
      <section className='flex flex-col justify-center p-10 space-y-10 bg-black'>
        <h1 className='text-primary text-4xl text-center'>Login</h1>
        <form className='flex flex-col space-y-5 w-full rounded-sm border border-zinc-500 p-10'>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' />
          <Label htmlFor='password'>Password</Label>
          <Input type='password' id='password' />
          <Button type='submit'>Login</Button>
        </form>
      </section>
    </main>
  );
}
