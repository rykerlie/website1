'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface WaitlistFormProps {
  size?: 'default' | 'lg';
  className?: string;
}

export default function WaitlistForm({ size = 'default', className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(data.message || 'Successfully added to waitlist!');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-[var(--cta-vibrant)] text-lg font-medium">
          🎉 You're on the waitlist!
        </p>
        <p className="text-[var(--accent-secondary)] mt-2">
          We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            required
            error={message && !isSuccess ? message : undefined}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size={size}
          disabled={isLoading || !email}
        >
          {isLoading ? 'Joining...' : 'Join the Waitlist'}
        </Button>
      </div>
    </form>
  );
}
