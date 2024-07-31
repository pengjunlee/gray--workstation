import http from "../utils/http";
import { PageResult, ListResult, QueryResult } from "./api-types";
import axios from "../plugins/myAxios";

/** 随机壁纸 */
export const randomBgApi = () => {
  return http.get<QueryResult>("/terminal/bg/random");
};

/** 百度翻译 */
export const baiduTranslateApi = (data: any) => {
  return http.post<QueryResult>("/terminal/translate/baidu", data);
};
