export default interface QueryParamsDTO {
  search?: string;
  column: string;
  order?: 'ASC' | 'DESC';
  skip: number;
  take: number;
}
