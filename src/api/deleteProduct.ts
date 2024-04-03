import { InterInstance } from './config';

export const deleteProduct = async (id: number) => {
  try {
    const  data: any = await InterInstance.delete(`products/${id}`, {
      headers: {  },
    });
    return data;
  } catch (e) {
    return e;
  }
};
