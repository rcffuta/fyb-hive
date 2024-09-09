
import { Form } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "@/utils/notification";
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import { FormError } from "../Form/form.interface";
import validateForm from "@/utils/validate-form";
import submitData from "@/utils/submit";
import { GuestAccount } from "@/lib/nobox/record-structures/Guest";
import axios from "axios";
import CheckInput from "../Form/CheckInput";


const dummyData:any = {
    "contact": "8122137834",
    "email": "preciousbusiness10@gmail.com",
    "firstname": "Precious",
    "gender": "male",
    "lastname": "Olusola",
    "picture": "https://nobox-upload-bucket.s3.eu-west-2.amazonaws.com/uploads/9c60fb7e-2653-46d3-b160-ec10e60d8ce6_rcf-logo.png",
}


export default function AssociateForm(){
    const [form] = Form.useForm();

    const [formData, setFormData] = useState<any>(()=>{
        return {...dummyData}
    });
    const [formerror, setFormError] = useState<FormError | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFinish = () => {
        
        const _errors = validateForm(formData);

        if (_errors) {
            setFormError(_errors);
            return;
        }

        setLoading(true);


        submitData(formData)
        .then(async (guest: GuestAccount)=>{
            await axios.post('/api/mail', { guest });
        })
        .then(()=>{

            setFormData(()=>({}))
            setFormError(()=>null);
            // Show a success notification
            openNotificationWithIcon('success', 'Form Submitted', 'Your form has been submitted successfully!');
            openNotificationWithIcon('success', 'Check your mail', `Please check your email address(${(formData as any).email})`, true);
        })
        .catch((err)=>{
            console.error(err);
            openNotificationWithIcon('error', 'Unable to create account', 'Could not register!');
        })
        .finally(()=>{
            setLoading(false);
        })
        
    }


    const handleElemChange = (key:string, val:any)=>{
        setFormError((p)=>{
            if (!p) return null;
            return null;
        })
        setFormData((prev: any)=>(
            {
                ...prev,
                [key]: val
            }
        ));
    }

    const getValue = (key:string) => {
        return {
            ...dummyData,
            ...formData
        }[key]
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={formData}
        >
            <div className="form-group">

                <ImageUpload
                    name="picture"
                    onChange={handleElemChange}
                    getValue={getValue}
                    error={formerror}
                    disable={loading}
                />


                <div className="form-group group-col">
                    <TextInput
                        name="associateId"
                        label="Finalist consent token"
                        onChange={handleElemChange}
                        getValue={getValue}
                        required
                        error={formerror}
                    />
                    
                    <CheckInput
                        label="Select your gender"
                        name="gender"
                        onChange={handleElemChange}
                        getValue={getValue}
                        error={formerror}
                        disable={loading}
                        options={[
                            {
                                id:'gender-male',
                                label: 'Male',
                                icon: 'icon-male',
                                value: 'male'
                            },
                            {
                                id:'gender-female',
                                label: 'Female',
                                icon: 'icon-female',
                                value: 'female'
                            }
                        ]}
                    />

                    
                </div>

            </div>
            <br/>

            <div className="form-group">
                <TextInput
                    name="firstname"
                    label="First Name"
                    onChange={handleElemChange}
                    getValue={getValue}
                    required
                    error={formerror}
                />

                <TextInput
                    name="lastname"
                    label="Last Name"
                    onChange={handleElemChange}
                    getValue={getValue}
                    required
                    error={formerror}
                />
            </div>

            <br/>

            <div className="form-group">
                <TextInput
                    name="email"
                    label="Email"
                    onChange={handleElemChange}
                    getValue={getValue}
                    required
                    error={formerror}
                    email
                />

                <TextInput
                    name="contact"
                    label="Phone Number"
                    onChange={handleElemChange}
                    getValue={getValue}
                    required
                    error={formerror}
                    tel
                />

            </div>

            <br/>


           <TextInput
                name="relationsipWithAssociate"
                label="Relationship with ...."
                onChange={handleElemChange}
                    getValue={getValue}
                    required
                    error={formerror}
            />

            <br/>


            <div
                className="steps-action"
            >
                <button
                    className="btn btn-primary text-uppercase btn-submit fw-700 fs-18"
                    // onClick={handl}
                    title='Submit'
                    type='submit'
                    disabled={loading}
                >
                    Submit
                </button>
            </div>
        </Form>
    )
}
