import { Catalog_Categories } from '../constant/APIURL';
import httpService from './httpService';

// export function loginFunction(data: any) {
//   if (data) {
//     return httpService.post(Login_URL, data);
//   }
//   return Promise.reject(new Error('Error'));
// }

export function getCatalog() {
  return httpService.post(Catalog_Categories);
}
