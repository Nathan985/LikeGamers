import { ReactNode } from "react";
import { UserEntity } from "shared/entities";

export type IAuthContext = {
  user?: UserEntity;
  signIn: (data: IAuthContextTypes.ISignIn.Params) => IAuthContextTypes.ISignIn.Result;
  isAuthenticate: boolean;
  logout: () => void;
};

export type IAuthContextProvider = {
  children: ReactNode
};

export namespace IAuthContextTypes {
  export namespace ISignIn {
    export type Params = {
      username: string
    }

    export type Result = UserEntity
  }
}