import axios from "axios";

class CommonService {
  // 모델 요약 통계 조회
  findStack = async (type: string) => {
    const url = `${process.env.REACT_APP_STRAPI_URL}/${type}-stacks`;
    return axios.get(url);
  };
}
export default new CommonService();
