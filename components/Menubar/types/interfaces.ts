import type {MenuItem} from "primevue/menuitem";
import type {ButtonHTMLAttributes} from "vue";
import type {MenubarPassThroughOptions} from "primevue";
import type {PassThrough} from "@primevue/core";

export  interface MenubarInterface{
    model?:MenuItem[]
    breakpoint?:string
    buttonProps?:ButtonHTMLAttributes
    ariaLabel?:string
    ariaLabelledby?:string
    dt?:any
    pt?:PassThrough<MenubarPassThroughOptions>
    ptOptions?:any
    unstyled?:boolean
}