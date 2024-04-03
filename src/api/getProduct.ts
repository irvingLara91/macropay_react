import { InterInstance } from './config';

export const getProduct = async (id: string) => {
  try {
    const  data : any  = await InterInstance.get(`products/${id}`, {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return data;
  } catch (e) {
    return e;
  }
};
