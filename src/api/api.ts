import axios from "axios";
import { PublisherInputs } from "../interfaces/PublisherInputs";

const endpoint = "http://16.171.166.236/api";

const GET_ALL = async (par: string) => {
  const response = await axios.get(`${endpoint}/${par}`);
  return await response.data;
};

export const getNewsPapers = async () => {
  const { newspapers } = await GET_ALL("newspapers");
  return newspapers;
};

export const getPublishers = async () => {
  const { publishers } = await GET_ALL("publishers");
  return publishers;
};

export const addPublisher = async (data: PublisherInputs) => {
  const { names, joinedDate } = data;
  const response = await axios.post(`${endpoint}/publishers`, {
    names,
    joinedDate,
  });
  return await response.data;
};
