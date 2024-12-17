export interface DividerInterface{
    align?:  'top' | 'right' | 'left' | 'bottom' | 'center'
    layout?: 'horizontal' | 'vertical'
    type?: 'solid' | 'dashed' | 'dotted'
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}