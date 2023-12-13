import TechnologyIcon from './TechnologyIcon';

export default class Project {
  constructor(title, description, imageUrl, liveUrl, sourceUrl, icons) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.liveUrl = liveUrl;
    this.sourceUrl = sourceUrl;
    this.icons = icons.map((icon) => new TechnologyIcon(icon.src, icon.label));
  }
}
