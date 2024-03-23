import { FormData } from '@/components/ContactForm';

export function sendEmail(data: FormData): Promise<string> {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            return response.message;
        })
        .catch((err) => {
            throw new Error(err.toString());
        });
}