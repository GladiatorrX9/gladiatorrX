// API Types for LeakOSINT API
export interface LeakOSINTRequest {
  token: string;
  request: string;
  limit: number;
  lang: string;
}

export interface DatabaseResult {
  Data: Record<string, any>[];
  InfoLeak: string;
  NumOfResults: number;
}

export interface LeakOSINTResponse {
  List: Record<string, DatabaseResult>;
  NumOfDatabase: number;
  NumOfResults: number;
  free_requests_left: number;
  price: number;
  "search time": number;
}
