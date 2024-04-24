import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <section className='w-full h-screen flex items-center justify-center '>
      <Card className='mx-auto md:min-w-[400px] p-2'>
        <CardHeader>
          <CardTitle className='text-3xl'>Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <section className='grid gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='first-name'>Username</Label>
              <Input id='first-name' placeholder='username' required />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='exam@example.com' required />
            </div>
            <div className='grid gap-4'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
            <Button type='submit' className='w-full'>
              Create an Account
            </Button>
          </section>
          <div className='mt-4 text-center text-sm'>
            Already have an Account?{' '}
            <Link to='#' className='underline'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
