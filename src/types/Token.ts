export type NewToken = {
  value: string;
};

export interface TokenPayload {
  email: string;
  id: string;
  iat: number;
}
