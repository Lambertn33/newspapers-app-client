export interface INewsPaperDetails {
  id: number;
  abstract: string;
  creationDate: Date;
  image: string;
  link: string;
  publisher: {
    id: number;
    names: string;
  };
  title: string;
}
