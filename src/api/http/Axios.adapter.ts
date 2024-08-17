import axios from 'axios';
import { HttpAdapterInterface } from './Http.interface';

export class AxiosAdapter implements HttpAdapterInterface {
  async get<T>(url: string): Promise<T> {
    const res = await axios.get(url);
    return res.data;
  }

  async post<T>(url: string, payload: object): Promise<T> {
    const res = await axios.post(url, payload);
    return res.data;
  }

  async patch<T>(url: string, payload: object): Promise<T> {
    const res = await axios.patch(url, payload);
    return res.data;
  }

  async delete(url: string): Promise<void> {
    await axios.delete(url);
  }
}
