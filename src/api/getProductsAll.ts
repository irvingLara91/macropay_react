import { InterInstance } from './config';

export const getProductsAll = async () => {
  try {
    const  data: any  = await InterInstance.get(`products`, {
      headers: {  },
    });
    return data;
  } catch (e) {
    return e;
  }
};
