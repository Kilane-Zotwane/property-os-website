import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GoogleIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

type AuthPanel = 'signin' | 'signup' | 'forgot';

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-600/20';

const SignInPage: React.FC = () => {
  const [panel, setPanel] = useState<AuthPanel>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [resetEmail, setResetEmail] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="text-lg font-semibold tracking-tight text-teal-700 transition hover:text-teal-800">
            Property Os
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="mailto:support@propertyos.app"
              className="text-slate-500 transition hover:text-teal-700"
            >
              Help
            </a>
            <Link to="/" className="font-medium text-slate-600 transition hover:text-teal-700">
              Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-5 py-12">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          {panel !== 'forgot' && (
            <div className="mb-8 flex rounded-full bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setPanel('signin');
                  setPhoneOpen(false);
                }}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
                  panel === 'signin' ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => {
                  setPanel('signup');
                  setPhoneOpen(false);
                }}
                className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
                  panel === 'signup' ? 'bg-white text-teal-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Create account
              </button>
            </div>
          )}

          {panel === 'forgot' ? (
            <>
              <h1 className="font-serif text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
                Reset your password
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enter the email on your account and we’ll send you a link to choose a new password.
              </p>
              <label htmlFor="reset-email" className="mt-8 block text-xs font-medium uppercase tracking-wide text-slate-500">
                Email
              </label>
              <input
                id="reset-email"
                type="email"
                autoComplete="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="you@example.com"
                className={`${inputClass} mt-2`}
              />
              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
              >
                Send reset link
              </button>
              <button
                type="button"
                onClick={() => setPanel('signin')}
                className="mt-4 w-full text-center text-sm font-medium text-teal-700 hover:text-teal-800"
              >
                ← Back to sign in
              </button>
            </>
          ) : (
            <>
              <h1 className="font-serif text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
                {panel === 'signin' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {panel === 'signin'
                  ? 'Sign in to manage listings, leases, and maintenance in one place.'
                  : 'Join landlords and agencies using Property Os for clearer rental operations.'}
              </p>

              {panel === 'signup' && (
                <div className="mt-8">
                  <label htmlFor="full-name" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Full name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Nkosi"
                    className={`${inputClass} mt-2`}
                  />
                </div>
              )}

              <div className={panel === 'signup' ? 'mt-4' : 'mt-8'}>
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={`${inputClass} mt-2`}
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="password" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Password
                  </label>
                  {panel === 'signin' && (
                    <button
                      type="button"
                      onClick={() => {
                        setResetEmail(email);
                        setPanel('forgot');
                      }}
                      className="text-xs font-medium text-teal-700 hover:text-teal-800"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete={panel === 'signup' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${inputClass} mt-2`}
                />
              </div>

              {panel === 'signup' && (
                <div className="mt-4">
                  <label htmlFor="confirm-password" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Confirm password
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`${inputClass} mt-2`}
                  />
                </div>
              )}

              {panel === 'signin' && (
                <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600"
                  />
                  Remember me on this device
                </label>
              )}

              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
              >
                {panel === 'signin' ? 'Sign in' : 'Create account'}
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden>
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs font-medium uppercase tracking-wide">
                  <span className="bg-white px-3 text-slate-400">Or continue with</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    <AppleIcon />
                    Continue with Apple
                  </button>

                  {!phoneOpen ? (
                    <button
                      type="button"
                      onClick={() => setPhoneOpen(true)}
                      className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-teal-600/30 bg-teal-50/80 px-4 py-3.5 text-sm font-semibold text-teal-900 shadow-sm transition hover:border-teal-600/50 hover:bg-teal-50"
                    >
                      <PhoneIcon />
                      Continue with phone number
                    </button>
                  ) : (
                    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                      <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Mobile number
                      </label>
                      <div className="mt-2 flex gap-2">
                        <span className="flex shrink-0 items-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600">
                          +27
                        </span>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="82 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 9))}
                          className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-600/20"
                        />
                      </div>
                      <button
                        type="button"
                        className="mt-4 w-full rounded-lg bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                      >
                        Send verification code
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPhoneOpen(false);
                          setPhone('');
                        }}
                        className="mt-2 w-full text-center text-sm text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline"
                      >
                        Use email or social instead
                      </button>
                    </div>
                  )}
                </div>
            </>
          )}

          <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
            By continuing, you agree to Property Os’s terms and privacy policy.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          <Link to="/" className="font-medium text-teal-700 hover:text-teal-800">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignInPage;
