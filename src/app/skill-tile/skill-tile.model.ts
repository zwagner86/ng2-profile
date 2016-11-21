export class SkillTile {
  name: string;
  logoPath: string;
  star: boolean;

  constructor(name: string, logoPath: string, star: boolean) {
    this.name = name;
    this.logoPath = logoPath;
    this.star = star;
  }
}
