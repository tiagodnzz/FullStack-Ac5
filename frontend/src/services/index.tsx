import axios from "axios";

export const toCreate = async (newText: {}) => {
  const textData = (await axios.post("http://localhost:5000/", newText)).data;
  return textData;
};

export const tolist = async (): Promise<any> => {
  const textData = (await axios.get("http://localhost:5000/")).data;
  return textData;
};
