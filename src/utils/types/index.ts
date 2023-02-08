export interface IProjectsData  {
    id?: number
    ref: (node?: Element | null | undefined) => void
    src: string
    title: string
    description: string
    showDescription?: boolean
    linkToSite?: string
}