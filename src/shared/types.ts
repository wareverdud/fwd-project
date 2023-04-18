export enum SelectedPage {
  Home = 'home',
  About = 'about',
  Languages = 'languages',
  SpecificLanguages = 'slanguages',
  Contact = 'contact',
  Gallery = 'gallery',
  SignIn = 'sign',
  Benefits = 'benefits',
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface PhotosType {
  name: string
  description?: string
  image: string
}
