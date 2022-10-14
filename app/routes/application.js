import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch('/data.json');
    return response.json();
  }
}
