import { UserModule } from '@/store/modules/user';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  public title = 'Hello';

  public userName = UserModule.userName;

  public onLoad(): void {}
}
