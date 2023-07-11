// authAxios를 이용해 오류 여러개를 한 번에 처리하는 코드

import axios from "axios";
import { getNewRefreshToken } from "./refresh";
// 에러 처리 부분 분리
export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: "http://front.cau-likelion.org",
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};

// import axios from "axios";
// import { getNewRefreshToken } from "./refresh";

// export const getAuthAxios = (token) => {
//   // create로 새로 catch를 만들어준다? 뭔말
//   const authAxios = axios.create({
//     config: {
//       baseURL: "http://front.cau-likelion.org",
//       headers: {
//         // 헤더에 모든 경우에 access토큰이 있게돼
//         Authorization: token,
//       },
//     },
//   });
//   authAxios.interceptors.response.use(
//     (res) => res,
//     async (error) => {
//       if (error.response.status === 401) {
//         //401은 토큰이 만료된 경우를 뜻함 => 새로운 토큰을 받아와야돼
//         const { accessToken, refreshToken } = await getNewRefreshToken();
//         error.config.headers.Authorization = accessToken; // 헤더에 새로운 토큰을 넣어주고
//         localStorage.setItem("access", accessToken);
//         localStorage.setItem("refresh", refreshToken);
//         return (await axios.get(error.config.url, error.config)).data; // 새로운 axios 요청
//       }
//     }
//   );
//   return authAxios;
// };
