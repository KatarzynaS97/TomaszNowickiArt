export interface InputTextInterface{
    value?: string
    defaultValue?: string
    name?: string
    size?: 'small' | 'large'
    invalid?: boolean
    variant?: 'filled' | 'outlined'
    fluid?: boolean
    formControl?: Record<string, any> // eslint-disable-line
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}