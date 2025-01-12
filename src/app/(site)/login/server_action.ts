'use server';

import { cookies } from 'next/headers';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { loginSchema } from '@/components/login-form';

export async function onLogin(formData: z.infer<typeof loginSchema>) {
    const res = await fetch(`${process.env.backendUrl}/user/login`, {
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

        if (res?.data?.role === 'admin') {
            redirect('/admin');
        } else if (res?.data?.role === 'trainer') {
            redirect('/trainer');
        } else {
            redirect('/');
        }

    }
}
