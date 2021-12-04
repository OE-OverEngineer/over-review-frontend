import { CreateReportRequest } from '../postSchemas';
import { get, post } from '../RestClient';

export default function reportsController() {
  return {
    postReport: (data: CreateReportRequest) =>
      post<CreateReportRequest, any>('reports', data),
    getReport: () => get('reports'),
    getReportId: (id: string | number) => get(`reports/${id}`),
  };
}
