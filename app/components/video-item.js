import Component from '@glimmer/component';
import { dasherize } from '@ember/string';

export default class VideoItemComponent extends Component {
  get img() {
    return `/avatars/${dasherize(this.args.item.author.toLowerCase())}.jpeg`;
  }
}
