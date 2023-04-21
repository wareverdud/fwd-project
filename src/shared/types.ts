export enum SelectedPage {
  Home = 'home',
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

export interface CardType {
  english: string
  target: string
}

export interface CardProps {
  card: CardType | undefined
  front: boolean
  language: string
}

export interface Data {
  id: string
  data: CardType[]
}
