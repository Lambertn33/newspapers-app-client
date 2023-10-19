import { IPublisherInputs } from "./IPublisherInputs";

interface NewsPaper {
  id: number;
  link: string;
  image: string;
  abstract: string;
  creationDate: Date;
  title: string;
}

export interface IPublisherDetails extends IPublisherInputs {
  id: number
  newsPapers: NewsPaper[];
}
