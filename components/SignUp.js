import styles from '../styles/components/SignUp.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignUpEmailPassword } from '@nhost/nextjs';
import Spinner from './Spinner';
import Link from 'next/link';
import Image from 'next/image';
import Input from './Input';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const {
    signUpEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error
  } = useSignUpEmailPassword();

  console.log(error);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await signUpEmailPassword( email, password, {
      displayName: `${firstName} ${lastName}`.trim(),
      metadata: {
        firstName,
        lastName
      }
    })
  };

  // on successful sign-up
  if(isSuccess){
    router.push('/')
    return null
  }

 

  const disableForm = isLoading || needsEmailVerification;


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          {/* <Image src="/myLogo.svg" alt="logo" layout="fill" objectFit="contain" /> */}
        </div>

    { needsEmailVerification ? (
      <article>
        <p> Please check your mailbox and follow the verification link to verify your email.</p>
      </article>
    ):(
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles['input-group']}>
            <Input
              label="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              disabled={disableForm}
              required
            />
            <Input
              label="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              disabled={disableForm}
              required
            />
          </div>
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={disableForm}
            required
          />
          <Input
            type="password"
            label="Create password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={disableForm}
            required
          />

          <button type="submit" className={styles.button} disabled={disableForm}>
          {isLoading ? <Spinner size="sm" /> : 'Create account'}
          </button>
          {isError ? `${error?.message}` : null}
        </form>
    )
}
      </div>

      <p className={styles.text}>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a className={styles.link}>Sign in</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
