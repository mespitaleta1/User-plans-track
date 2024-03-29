'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });

  const [formStatus, setFormStatus] = useState<{ isSubmitting: boolean; submissionError: string | null }>({
    isSubmitting: false,
    submissionError: null,
  });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setFormStatus({ ...formStatus, isSubmitting: true });

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          contentType: 'application/json',
        },
        body: JSON.stringify({ userName: formData.username, password: formData.password }),
      });

      if (!response.ok) {
        setFormStatus({ ...formStatus, isSubmitting: false, submissionError: 'Invalid credentials' });
      }

      if (response.ok) {
        router.push('/home');
      }
    } catch (error) {
      setFormStatus({ ...formStatus, isSubmitting: false, submissionError: `An error has ocurred ${error}` });
    }
  };
  console.log(formStatus.submissionError);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="ml-px block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Jane Smith"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                disabled={formStatus.isSubmitting}
                type="submit"
                className="flex w-full justify-center rounded-md bg-rose-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Login
              </button>
            </div>
            {formStatus.submissionError && <p>Error: {formStatus.submissionError}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
