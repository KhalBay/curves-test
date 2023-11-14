export type RateInfoT = {
    title: string
    value: string
}
export type FooterLinkT = {
    title: string
    link: string
}
export type SummaryScriptT = {
    duration: number
    start: number
    text: string
}
export type FileScriptT = SummaryScriptT & {
    speaker: number
}
export type GroupedSpeakersT = Omit<FileScriptT, 'duration' | 'text'> & {
    groupIndexes: number[]
    text: string[]
}
export type InfoGetResponseT = {
    duration: number
    error: null
    fileName: string
    fileSize: number
    fileSrc: string
    id: string
    mediaType: null
    processId: null
    public: boolean
    script: FileScriptT[]
    speakers: null
    status: string
    summary: string
    summaryScript: SummaryScriptT[]
    type: string
    uploadAt: string
}