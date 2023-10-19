import axios from "axios";
import { IPublisherInputs } from "../interfaces/IPublisherInputs";

const endpoint = "http://16.171.166.236/api";

const GET = async (par: string) => {
  const response = await axios.get(`${endpoint}/${par}`);
  return await response.data;
};

const POST = async (par: string, data: object) => {
  const response = await axios.post(`${endpoint}/${par}`, data);
  return await response.data;
};

export const getNewsPapers = async () => {
  const { newspapers } = await GET("newspapers");
  return newspapers;
};

export const getPublishers = async () => {
  const { publishers } = await GET("publishers");
  return publishers;
};

export const getPublisher = async (id: string) => {
  const { publisher } = await GET(`publishers/${id}`);
  return publisher;
};

export const addPublisher = async (data: IPublisherInputs) => {
  const response = await POST("publishers", data);
  return await response.data;
};
