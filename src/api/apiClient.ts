export const apiClient = async <T>(url: string, options?: any): Promise<T> => {
  return fetch(`${url}`, options)
    .then((res) => res.json())
    .catch((error) => {
      throw error;
    });
};
