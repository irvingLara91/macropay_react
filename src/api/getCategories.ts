import { InterInstance } from './config';

export const getCategories = async () => {
  try {
    const  data: any  = await InterInstance.get(`categories`, {
      headers: {  },
    });
    return data;
  } catch (e) {
    return e;
  }
};
