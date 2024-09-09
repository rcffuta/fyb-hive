

export type FormError  = {
    [key: string]: string | null;
};


export interface FormElement {
    onChange: (key:string, val:any) => void;
    required?: boolean;
    error?: FormError | null;
    disable?: boolean;
}
