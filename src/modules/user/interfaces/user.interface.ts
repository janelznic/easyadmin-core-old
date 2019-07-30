export interface User {
  readonly id: number;
  readonly username: string;
  readonly password: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly authority: number;
  readonly registered: Date;
  readonly last_login: Date;
  readonly status: boolean;
}
