import { Component, Vue } from 'vue-property-decorator';
import { UserModule } from './store/modules/user';
@Component({})
export default class App extends Vue {
  public mpType = 'app';
  public onLaunch(): void {
    console.log('App Launch');
    UserModule.SetUserInfo();
  }
  public onShow(): void {
    console.log('App Show');
  }
  public onHide(): void {
    console.log('App Hide');
  }
}
