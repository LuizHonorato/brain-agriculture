export default interface PaginatedRepositoryDto<T> {
  total: number;
  count: number;
  list: T[];
}
