export interface CheckboxInterface {
  value?: any[]; // eslint-disable-line
  modelValue?: any[]; // eslint-disable-line
  defaultValue?: any[]; // eslint-disable-line
  name?: string;
  binary?: boolean;
  indeterminate?: boolean;
  size?: "small" | "large";
  invalid?: boolean;
  disabled?: boolean;
  variant?: "filled" | "outlined";
  readonly?: boolean;
  required?: boolean;
  tabindex?: number;
  trueValue?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  falseValue?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  inputId?: string;
  inputClass?: object;
  inputStyle?: string | object;
  ariaLabelledby?: string;
  ariaLabel?: string;
  formControl?: Record<string, any>; // eslint-disable-line
  dt?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  pt?: any; // eslint-disable-line
  ptOptions?: any; // eslint-disable-line
  unstyled?: boolean;
}
