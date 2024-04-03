import { InterInstance } from './config';

export const createProduct = async (params:any) => {
  try {
    const  data: any  = await InterInstance({
      method: 'post',
      url: `products/`,
      headers: {},
      data: params,
    });
    return data
  } catch (e) {
    return e;
  }
};
