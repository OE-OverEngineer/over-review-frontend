import { CreateReportRequest } from '../postSchemas';
import { Report } from '../reponseInterface/report.interface';
import { get, post } from '../RestClient';

export default function reportsController() {
  return {
    postReport: (data: CreateReportRequest) =>
      post<CreateReportRequest, any>('reports', data),
    getReport: () => get<Report[]>('reports'),
    getReportId: (id: string | number) => get(`reports/${id}`),
  };
}
