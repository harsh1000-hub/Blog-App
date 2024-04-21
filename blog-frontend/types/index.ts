export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
export interface IResourceMeta {
  pagination: IPagination;
}
export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}
