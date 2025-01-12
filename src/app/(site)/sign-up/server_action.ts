'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';
import { signUpSchema } from './page';
import { redirect } from 'next/navigation';

export async function onSignUp(formData: z.infer<typeof signUpSchema>) {
    const res = await fetch(`${process.env.backendUrl}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
    }).then((res) => res.json());

    if (res.status === 201 && res?.data && res?.data?.assessToken) {
        const cookie = cookies();
        cookie.set('accessToken', res?.data?.assessToken);
        redirect('/');
    }
}
