import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface IUserState {
  token: string;
  userName: string;
  avatar: string;
  account: string;
  email: string;
  mobile: string;
}

@Module({ dynamic: true, store, name: 'user' })
class UserState extends VuexModule implements IUserState {
  public token = '';
  public userName = '';
  public avatar = '';
  public account = '';
  public email = '';
  public mobile = '';

  @Mutation
  public SetUserInfo(): void {
    this.userName = 'ybbb';
  }
}

export const UserModule = getModule(UserState);
