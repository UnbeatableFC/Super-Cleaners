
export enum SelectedPage {
    Home="home",
    About = 'about',
    Services='services',
    Pricing='pricing',
    Reviews='reviews',
    Contact='contact'
}

export interface ServiceType {
    icon: JSX.Element,
    title : string,
    description : string
}

export interface ServiceTabType {
    image: string,
    title : string
}

export interface TestType {
    image :string,
    name: string ,
    location: string,
    testimonial: string
}

export interface MoveType {
    title :string
}
