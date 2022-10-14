import Component from '@glimmer/component';
import { dasherize } from '@ember/string';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VideoItemComponent extends Component {
  @tracked checked = JSON.parse(localStorage.getItem(this.args.item.title));

  @tracked showDialog = false;

  get img() {
    return `/avatars/${dasherize(this.args.item.author.toLowerCase())}.jpeg`;
  }

  get tweetText() {
    return encodeURIComponent(`I've just watched the @EmberFest video '${this.args.item.title}' and my favorite part of it was:

<edit me>

I'm tracking the videos I watch with https://emberfest-watch-list.netlify.app 💪`);
  }

  @action
  onChecked(value) {
    this.checked = value;

    localStorage.setItem(this.args.item.title, value);

    if (value) {
      this.showDialog = true;
    }
  }

  @action
  closeDialog() {
    this.showDialog = false;
  }
}
