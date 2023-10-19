import { IPublisherInputs } from "./IPublisherInputs";

interface INewsPaper {
  id: number;
  link: string;
  image: string;
  abstract: string;
  creationDate: Date;
  title: string;
}

export interface IPublisherDetails extends IPublisherInputs {
  id: number
  newsPapers: INewsPaper[];
}
