import { frontendSkills, backendSkills, infraSkills, dbSkills, otherTechSkills } from './constants/techSkills';
import { strength } from './constants/strength';
import { linkedInContactUrl } from './constants/urls';

class Profile {
  private frontendExperience: boolean;
  private backendExperience: boolean;
  private infrastructureExperience: boolean;
  private frontendSkills: string[];
  private backendSkills: string[];
  private infraSkills: string[];
  private dbSkills: string[];
  private otherTechSkills: string[];
  private strength: string[];
  private contactInfo: string;

  constructor() {
    this.frontendExperience = true;
    this.backendExperience = true;
    this.infrastructureExperience = true;
    this.frontendSkills = frontendSkills;
    this.backendSkills = backendSkills;
    this.infraSkills = infraSkills;
    this.dbSkills = dbSkills;
    this.otherTechSkills = otherTechSkills;
    this.strength = strength;
    this.contactInfo = linkedInContactUrl;
  }

  isFullStackEngineer(): boolean {
    return this.backendExperience
      && this.frontendExperience
      && this.infrastructureExperience;
  }

  howICanContribute(): string[] {
    return this.strength
  }

  contact(): string {
    return this.contactInfo;
  }

  profileSummary(): string {
    const exampleInfraSkills = this.infraSkills.slice(0, 2)
    const infraSkillSentence = exampleInfraSkills.length ? `And I also have experience in infrastructure, such as ${exampleInfraSkills.join(' and ')}.` : ''
    const strengthSection = this.strength.map((v, k, l) => {
      return k === l.length - 1 ? `and ${v}` : `${v}\n`
    })

    return `I am a front-end engineer with a deep understanding of back-end development.\n
Currently I am more strongly interested in the front-end, so I don't call myself a full-stack engineer, but a front-end engineer.\n
${infraSkillSentence ? `${infraSkillSentence}\n` : ''}
I have extensive knowledge and can use it to: \n
${strengthSection}\n
\n
I have practical knowledge about below:\n
\n
# Frontend
    `
  }
}

// TODO: want to output sentences

const KoyaAoyama = new Profile()
// console.log(KoyaAoyama.isFullStackEngineer())
// console.log(`Please check out ${KoyaAoyama.howICanContribute().join(', ')}.`)
// console.log(`Feel free to contact me from here: ${KoyaAoyama.contact()}.`)
console.log(KoyaAoyama.profileSummary())