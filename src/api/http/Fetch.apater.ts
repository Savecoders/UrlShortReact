import { HttpAdapterInterface } from './Http.interface';

export class FetchAdapter implements HttpAdapterInterface {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post<T>(url: string, payload: object): Promise<T> {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }

  async patch<T>(url: string, payload: object): Promise<T> {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  }

  async delete(url: string): Promise<void> {
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
