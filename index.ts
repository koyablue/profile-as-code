class Profile {
  private frontendExperience: boolean;
  private backendExperience: boolean;
  private infrastructureExperience: boolean;
  private frontendSkills: string[];
  private backendSkills: string[];
  private infraSkills: string[];
  private otherTechSkills: string[];
  private waysToContribute: string[];
  private contactInfo: string;

  constructor() {
    this.frontendExperience = true;
    this.backendExperience = true;
    this.infrastructureExperience = true;
    this.frontendSkills = [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'CSS-in-JS',
      'Jest',
      'Storybook',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ];
    this.waysToContribute = [
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

  howICanContribute(): string[] {
    return this.waysToContribute
  }

  contact(): string {
    return this.contactInfo;
  }
}

// TODO: want to output sentences

const KoyaAoyama = new Profile()
console.log(KoyaAoyama.isFullStackEngineer())
console.log(`Please check out ${KoyaAoyama.howICanContribute().join(', ')}.`)
console.log(`Feel free to contact me from here: ${KoyaAoyama.contact()}.`)