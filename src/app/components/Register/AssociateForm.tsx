
import ImageUpload from "../ImageUpload";
import TextInput from "../Form/TextInput";
import CheckInput from "../Form/CheckInput";
import { Form } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "@/app/utils/notification";


export default function AssociateForm(){
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({});

    const handleFinish = (values: any) => {
        console.log(formData);

        // Show a success notification
        openNotificationWithIcon('success', 'Form Submitted', 'Your form has been submitted successfully!');

    }

    const handleElemChange = (key:string, val:any)=>{
        setFormData(prev=>(
            {
                ...prev,
                [key]: val
            }
        ))
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            initialValues={formData}
        >
                <div className="form-group">

                <ImageUpload/>


                <div className="form-group group-col">
                    <TextInput
                        name="associateId"
                        label="Finalist consent token"
                        onChange={handleElemChange}
                    />
                    
                    <CheckInput
                        label="Select your gender"
                        name="gender"
                        onChange={handleElemChange}
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
                />

                <TextInput
                    name="lastname"
                    label="Last Name"
                    onChange={handleElemChange}
                />
            </div>

            <br/>

            <div className="form-group">
                <TextInput
                    name="email"
                    label="Email"
                    onChange={handleElemChange}
                    email
                />

                <TextInput
                    name="contact"
                    label="Phone Number"
                    onChange={handleElemChange}
                    tel
                />

            </div>

            <br/>


           <TextInput
                name="relationsipWithAssociate"
                label="Relationship with ...."
                onChange={handleElemChange}
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
                >
                    Submit
                </button>
            </div>
        </Form>
    )
}
