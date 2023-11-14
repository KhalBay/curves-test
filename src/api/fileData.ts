import { httpClient } from "@/modules/httpClient";
import type {InfoGetResponseT} from "@/models/interfaces";

export default {
  get: (id: string = '46769a') => httpClient.get<InfoGetResponseT>(`/api/scripts/${id}`),
};
