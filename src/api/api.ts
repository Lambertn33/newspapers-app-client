import axios from "axios";
import { IPublisherInputs } from "../interfaces/IPublisherInputs";
import { INewsPaperInputs } from "../interfaces/INewsPaperInputs";

const endpoint = process.env.REACT_APP_BACKEND;


const GET = async (par: string) => {
  const response = await axios.get(`${endpoint}/${par}`);
  return await response.data;
};

const POST = async (par: string, data: object, headers?: any) => {
  const response = await axios.post(`${endpoint}/${par}`, data, {
    headers
  });
  return await response.data;
};

const PUT = async(par: string, data: object) => {
  const response = await axios.put(`${endpoint}/${par}`, data);
  return await response.data;
}

const DELETE = async (par: string) => {
  const response = await axios.delete(`${endpoint}/${par}`);
  return await response.data;
};

export const getNewsPapers = async () => {
  const { newspapers } = await GET("newspapers");
  return newspapers;
};

export const getNewsPaper = async(id: number) => {
  const { newsPaper } = await GET(`newspapers/${id}`);
  return newsPaper;
}

export const addNewsPaper = async(data: INewsPaperInputs) => {
  const response = await POST("newspapers", data, {
    "Content-Type": "multipart/form-data"
  });
  return await response;
}

export const deleteNewsPaper = async (id: number) => {
  const response = await DELETE(`newspapers/${id}`);
  return response;
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
  return await response;
};

export const editPublisher = async(data: IPublisherInputs) => {
  const { id, names, joinedDate } = data;
  const response = await PUT(`publishers/${id}`, {
    names,
    joinedDate
  });
  return response;
}

export const deletePublisher = async (id: number) => {
  const response = await DELETE(`publishers/${id}`);
  return response;
};
