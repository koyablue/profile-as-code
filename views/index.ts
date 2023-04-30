class AboutMe {
  private strength?: string[]
  private frontendSkills?: string[]
  private backendSkills?: string[]
  private dbSkills?: string[]
  private infraSkills?: string[]
  private otherTechSkills?: string[]
  private contactInfo?: string

  constructor(
    strength?: string[],
    frontendSkills?: string[],
    backendSkills?: string[],
    dbSkills?: string[],
    infraSkills?: string[],
    otherTechSkills?: string[],
    contactInfo?: string,
  ) {
    this.strength = strength;
    this.frontendSkills = frontendSkills;
    this.backendSkills = backendSkills;
    this.dbSkills = dbSkills;
    this.infraSkills = infraSkills;
    this.otherTechSkills = otherTechSkills;
    this.contactInfo = contactInfo;
  }
}