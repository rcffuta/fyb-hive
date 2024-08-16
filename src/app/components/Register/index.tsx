'use client';
import { Steps, Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import FormSlide1 from './FormSlide1';
import FormSlide2 from './FormSlide2';
import FormSlide3 from './FormSlide3';
import FormCustomDot from '../FormCounter';

const { Step } = Steps;

export default function RegistrationForm() {
    const [current, setCurrent] = useState(0);
    const [form] = Form.useForm();


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });


    const steps = [
        {
        title: 'Step 1',
        content: (
            <FormSlide1/>
        ),
        },
        {
        title: 'Step 2',
        content: (
            <FormSlide2 />
        ),
        },
        {
        title: 'Step 3',
        content: (
            <FormSlide3 />
        ),
        },
    ];

    const next = () => {
        form
        .validateFields()
        .then(values => {
            // Store form data
            setFormData({
            ...formData,
            ...values,
            });

            // Move to the next step
            setCurrent(current + 1);
        })
        .catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const prev = () => {

        if (current == 0) return;
        setCurrent(current - 1);
    };

    // Submit form data
    const handleFinish = () => {
        message.success('Form submitted successfully!');
        console.log('Form Data:', formData);
    };

    return (
        <div>

            <br/>
            <Steps 
                current={current}
                direction='horizontal'
                progressDot={FormCustomDot}
            >
                {steps.map((item, index) => (
                    <Step key={index}/>
                ))}
            </Steps>

            <br/>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={formData}
            >
                <div className="steps-content">{steps[current].content}</div>


                <div
                    className="steps-action"
                >
                    <button
                        className="btn btn-primary"
                        onClick={prev}
                        title='Previous'
                    >
                        <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 7.42677V9.57323H4.35781L10.5995 15.476L8.98798 17L0 8.5L8.98798 0L10.5995 1.52399L4.35781 7.42677L30 7.42677Z" fill="#F4F4F4"/>
                        </svg>
                    </button>


                    {
                        current === steps.length - 1 ? (
                             <button
                                className="btn btn-primary text-uppercase"
                                type='submit'
                                title='Submit'
                            >
                                Done
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary text-uppercase"
                                onClick={next}
                                title='Next'
                            >
                                <svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 9.57323V7.42677L25.6422 7.42677L19.4005 1.52399L21.012 0L30 8.5L21.012 17L19.4005 15.476L25.6422 9.57323L0 9.57323Z" fill="white"/>
                                </svg>
                            </button>
                        )
                    }
                </div>
            </Form>
        </div>
    );
}
