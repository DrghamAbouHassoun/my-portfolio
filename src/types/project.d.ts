interface IProject {
  id: number,
  title: string,
  subtitle: string,
  type: string,
  description: string,
  from: string,
  to: string,
  client: string,
  websiteLink?: string,
  githubLink?: string,
  androidLink?: string,
  iosLink?: string,
  media: {
    src: string,
    alt: string,
    type: string
  }[],
  skills: string[]
}