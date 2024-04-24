import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';

export default function NotFount() {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center'>
      <Label className='text-2xl'>404 - Error Page Not Found</Label>
      <Button className='mt-6 ' size={'lg'} onClick={() => window.history.back()}>
        {' '}
        Go Back{' '}
      </Button>
    </section>
  );
}
