export interface IProjectsData  {
    ref: (node?: Element | null | undefined) => void
    src: string
    title: string
    description: string
    showDescription?: boolean   
}