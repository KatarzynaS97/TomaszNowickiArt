import type {GalleriaResponsiveOptions} from "primevue";
import type {ButtonHTMLAttributes, HTMLAttributes} from "vue";

export interface GalleriaInterface{
    item?: GalleriaImageItem[]
    id?: string
    value?: any[] // eslint-disable-line
    activeIndex?: number
    fullScreen?: boolean
    visible?: boolean
    numVisible?: number
    responsiveOptions?: GalleriaResponsiveOptions[]
    showItemNavigators?: boolean
    showThumbnailNavigators?: boolean
    showItemNavigatorsOnHover?: boolean
    changeItemInIndicatorHover?: boolean
    circular?: boolean
    autoPlay?: boolean
    transitionInterval?: number
    showThumbnails?: boolean
    thumbnailsPosition?: 'top' | 'right' | 'left' | 'bottom'
    verticalThumbnailViewPortHeight?: string
    showIndicators?: boolean
    showIndicatorsOnItem?: boolean
    indicatorsPosition?: 'top' | 'right' | 'left' | 'bottom'
    baseZIndex?: number
    maskClass?: string
    containerStyle?: any // eslint-disable-line
    containerClass?: any // eslint-disable-line
    containerProps?: HTMLAttributes
    prevButtonProps?: ButtonHTMLAttributes
    nextButtonProps?: ButtonHTMLAttributes
    ariaLabel?: string
    ariaRoledescription?: string
    dt?: any // eslint-disable-line
    pt?: any // eslint-disable-line
    ptOptions?: any // eslint-disable-line
    unstyled?: boolean
}

export interface GalleriaImageItem {
    itemImageSrc: string
    thumbnailImageSrc: string
    alt: string
}