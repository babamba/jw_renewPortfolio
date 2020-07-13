import axios from "axios";
import { Auth } from "aws-amplify";

class CommonRepo {
  constructor() {
    this.address_url = `${process.env.REACT_APP_KAKAO_API_URL}/v2/local/geo/coord2address.json`;
  }

  // 위도 경도 값으로 주소 추적
  findAddress = async param => {
    return axios.get(this.address_url, {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
      },
      params: param ? { ...param, input_coord: "WGS84" } : null
    });
  };

  getAllLocations = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}/v1/location`;
    const token = await Auth.currentSession();
    return axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token.idToken.jwtToken
      }
    });
  };
}

// 싱글톤으로 리턴 (매번 새로운 객체를 생성 할 필요가 없다면 처음 부터 싱글톤으로 export)
export default new CommonRepo();
