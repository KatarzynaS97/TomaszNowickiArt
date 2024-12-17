export interface InputOtpInterface{
    modelValue?: boolean
    defaultValue?: string | boolean
    name?: string
    size?:  'small' | 'large'
    invalid?: boolean
    disabled?: boolean
    readonly?: boolean
    variant?: 'filled' | 'outlined'
    tabindex?: number
    length?: number
    mask?: boolean
    integerOnly?: boolean
    formControl?: Record<string, any> // eslint-disable-line
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}