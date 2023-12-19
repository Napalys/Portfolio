import TechnologyIcon from './TechnologyIcon';

export default class Project {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.imageUrl = data.imageUrl;
    this.liveUrl = data.liveUrl;
    this.sourceUrl = data.sourceUrl;
    this.icons = data.icons.map((icon) => new TechnologyIcon(icon.src, icon.label));
  }
}
