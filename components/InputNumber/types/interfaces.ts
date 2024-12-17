import type {RoundingMode} from "primevue";

export interface InputNumberInterface{
    modelValue?: number
    defaultValue?: number
    name?: string
    format?: boolean
    showButtons?: boolean
    buttonLayout?: 'horizontal' | 'vertical' | 'stacked'
    incrementButtonClass?: string
    decrementButtonClass?: string
    incrementIcon?: string
    decrementIcon?: string
    locale?: string
    localMatcher?: 'lookup' | 'best fit'
    mode?: 'decimal' | 'currency'
    prefix?: string
    suffix?: string
    currency?: string
    currencyDisplay?: string
    useGrouping?: boolean
    minFractionDigits?: number
    maxFractionDigits?: number
    roundingMode?: RoundingMode
    min?: number
    max?: number
    step?: number
    allowEmpty?: boolean
    highlightOnFocus?: boolean
    size?: 'small' | 'large'
    invalid?: boolean
    disabled?: boolean
    variant?: 'filled' | 'outlined'
    readonly?: boolean
    placeholder?: string
    fluid?: boolean
    inputId?: string
    inputClass?: string | object
    inputStyle?: object
    ariaLabelledby?: string
    ariaLabel?: string
    formControl?: Record<string, any> // eslint-disable-line
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}