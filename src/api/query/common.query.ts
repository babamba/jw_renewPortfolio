import axios from "axios";
import { useQuery } from "react-query";
import FetchError from "../FetchError";
import { Stack, STACK } from "@interfaces/stack";
import { HTTP_STATUS } from "@interfaces/output";
import { Resume } from "@interfaces/resume";
import { Folio } from "@interfaces/folio";
const useStacks = (type: STACK) => {
  return useQuery<Stack[], FetchError>({
    queryKey: ["stack", type],
    queryFn: async () => {
      try {
        const { data, status } = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/${type}-stacks`
        );
        if (data && status === 200) return data;
      } catch (error) {
        if (error.response.status === HTTP_STATUS.NOT_FOUND) {
          throw new FetchError(error.response, {
            msg: "Stack 호출에 실패하였습니다.",
            status: error.response.status
          });
        }
      }
    },
    retry: false
  });
};

const useFolios = () => {
  return useQuery<Folio[], FetchError>({
    queryKey: ["folio"],
    queryFn: async () => {
      try {
        const { data, status } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/folios`);
        if (data && status === 200) return data;
      } catch (error) {
        if (error.response.status === HTTP_STATUS.NOT_FOUND) {
          throw new FetchError(error.response, {
            msg: "포트폴리오 목록 호출에 실패하였습니다.",
            status: error.response.status
          });
        }
      }
    },
    retry: false
  });
};

const useResumes = () => {
  return useQuery<Resume[], FetchError>({
    queryKey: ["resumes"],
    queryFn: async () => {
      try {
        const { data, status } = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/resumes`);
        if (data && status === 200) return data;
      } catch (error) {
        if (error.response.status === HTTP_STATUS.NOT_FOUND) {
          throw new FetchError(error.response, {
            msg: "포트폴리오 목록 호출에 실패하였습니다.",
            status: error.response.status
          });
        }
      }
    },
    retry: false
  });
};

export { useStacks, useFolios, useResumes };
