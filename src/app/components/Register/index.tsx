'use client';
import { Steps, Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import FormSlide1 from './FormSlide1';
import FormSlide2 from './FormSlide2';
import FormSlide3 from './FormSlide3';
import FormCustomDot from '../FormCounter';
import { useRouter } from 'next/navigation';

const { Step } = Steps;

export default function RegistrationForm() {
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    // Submit form data
    const handleFinish = () => {

        // form
        // .validateFields()
        // .then(values => {
        //     // Store form data
        //     setFormData({
        //     ...formData,
        //     ...values,
        //     });

        //     // Move to the next step
        //     setCurrent(current + 1);
        // })
        // .catch(info => {
        //     console.log('Validate Failed:', info);
        // });
        message.success('Form submitted successfully!');
        console.log('Form Data:', formData);

        router.replace('/register/done');
        
    };

    return (
        <div>

            <br/><br/>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={formData}
            >
                <div className="steps-content">
                    <FormSlide1/>
                </div>


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
        </div>
    );
}
