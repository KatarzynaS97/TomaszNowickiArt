export interface AvatarInterface{
    label?: string
    icon?: string
    image?: string
    size?: 'large' | 'xlarge' | 'normal'
    shape?: "square" | "circle"
    ariaLabel?: string
    ariaLabelledby?: string
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}