export interface ButtonInterface{
    label?: string
    icon?: string
    iconPos?:  'top' | 'right' | 'left' | 'bottom'
    iconClass?: string
    badge?: string
    badgeClass?: string
    badgeSeverity?:  | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    loading?: boolean | undefined
    loadingIcon?: string
    as?: string | Component
    asChild?: boolean
    link?: string
    severity?:   | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'help'
    | 'danger'
    raised?: boolean
    rounded?: boolean
    text?: boolean
    outlined?: boolean
    size?: 'small' | 'large'
    variant?: 'outlined' | 'text' | 'link'
    fluid?: boolean
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}