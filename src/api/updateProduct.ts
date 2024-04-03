import { InterInstance } from './config';

export const updateProduct = async (id: string,params:any) => {
  try {
    const data   : any = await InterInstance({
      method: 'put',
      url: `products/${id}`,
      headers: {},
      data: params,
    });
    return  data
  } catch (e) {
    return e;
  }
};
