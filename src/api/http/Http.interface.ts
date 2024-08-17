export interface HttpAdapterInterface {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, payload: object): Promise<T>;
  patch<T>(url: string, payload: object): Promise<T>;
  delete(url: string): Promise<void>;
}
