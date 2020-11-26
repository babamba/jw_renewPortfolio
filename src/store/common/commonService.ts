import axios from "axios";

class CommonService {
  // 모델 요약 통계 조회
  findStacks = async (type: string) => {
    const url = `${process.env.REACT_APP_STRAPI_URL}/${type}-stacks`;
    return axios.get(url);
  };

  findFolios = async () => {
    const url = `${process.env.REACT_APP_STRAPI_URL}/folios`;
    return axios.get(url);
  };

  findResumes = async () => {
    const url = `${process.env.REACT_APP_STRAPI_URL}/resumes`;
    return axios.get(url);
  };
}
export default new CommonService();
