import { Input } from "antd";



interface TextInputProps {
    name: string;
    label: string;
    placeholder?: string;
    email?: boolean;
    tel?: boolean;
}


export default function TextInput(props: TextInputProps) {

    let type = 'text';
    let addon;

    if (props.email) {
        type = 'email'
    }

    if (props.tel) {
        type = 'tel'
    }

    return (
        <label
            htmlFor={props.name}
            className="form-input"
        >
            <span
                className="text-capitalize fw-400 fs-14 lh-27"
            >
                {props.label}
            </span>

            <Input
                placeholder={props.placeholder}
                type={type}
                addonBefore={props.tel ? '+234' : ''}
            />

        </label>
    )
}
