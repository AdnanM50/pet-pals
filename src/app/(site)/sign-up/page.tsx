'use client';

import { Form } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import FormInput from '@/components/common/form/input';
import PasswordInput from '@/components/common/form/password_input';
import { Button } from '@/components/ui/button';
import { onSignUp } from './server_action';

export const signUpSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const Page = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    onSignUp(values);
  }

  return (
    <div className='w-1/3 mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput form={form} name="username" label="Username" placeholder="Username" />
          <FormInput form={form} name="email" label="Email" placeholder="Email" />
          <PasswordInput form={form} name="password" label="Password" placeholder="Password" />
          <PasswordInput form={form} name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;

// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page