import { InterInstance } from './config';

export const getProductFilter = async (title:string) => {
  try {
    const  data: any  = await InterInstance.get(`products/?title=${title}`, {
      headers: {  },
    });
    return data;
  } catch (e) {
    return e;
  }
};
