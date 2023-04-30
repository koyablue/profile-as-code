class Profile {
  private frontendExperience: boolean;
  private backendExperience: boolean;
  private infrastructureExperience: boolean;
  private skills: string[];
  private contactInfo: string;

  constructor() {
    this.frontendExperience = true;
    this.backendExperience = true;
    this.infrastructureExperience = true;
    this.skills = [
      'fullstack development',
      'problem-solving',
      'communicate well within the team',
      'contributing to project success',
    ];
    this.contactInfo = 'https://www.linkedin.com/in/koya-aoyama/overlay/contact-info/'
  }

  isFullStackEngineer(): boolean {
    return this.backendExperience
      && this.frontendExperience
      && this.infrastructureExperience;
  }

  whatICanContribute(): string[] {
    return this.skills
  }

  contact(): string {
    return this.contactInfo;
  }
}

const KoyaAoyama = new Profile()
console.log(KoyaAoyama.isFullStackEngineer())
console.log(`Please check out ${KoyaAoyama.whatICanContribute().join(', ')}.`)
console.log(`Feel free to contact me from here: ${KoyaAoyama.contact()}.`)