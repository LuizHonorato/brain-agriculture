type PaginateResults = {
  data: object[];
  total: number;
  count: number;
  next?: number;
  previous?: number;
  success: boolean;
};

export default class PaginatedDefaultResponse {
  public success: boolean;
  public data: object[];
  public total: number;
  public page_total: number;
  public count: number;

  constructor(paginateResults: PaginateResults) {
    this.success = paginateResults.success;
    this.data = paginateResults.data;
    this.total = paginateResults.total;
    this.page_total = paginateResults.data.length;
    this.count = paginateResults.count;
  }
}
