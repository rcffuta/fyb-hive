'use client';
import { Steps, Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import FormSlide1 from './FinalistForm';
import FormCustomDot from '../FormCounter';
import { useRouter } from 'next/navigation';
import ImageUpload from '../ImageUpload';
import CheckInput from '../Form/CheckInput';
import TextInput from '../Form/TextInput';
import FinalistForm from './FinalistForm';
import AssociateForm from './AssociateForm';
import ConsentToken from './ConsentToken';

const { Step } = Steps;

export default function RegistrationForm() {
    const [currentTab, setCurrentTab] = useState(0);

    const tabs = [
        { title: 'Register as a finalist', content: <FinalistForm /> },
        { title: 'Register an associate', content: <AssociateForm /> },
        // { title: 'Tab 3', content: <ConsentToken /> },
    ];

    const handleTabClick = (index: number) => {
        setCurrentTab(index);
    };

    return (
        <section className="registration-container">
            <div className="tabs">
                {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`tab-button ${currentTab === index ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                >
                    {tab.title}
                </button>
                ))}
            </div>

            <div className="tab-content">
                {tabs[currentTab].content}
            </div>
        </section>
        
    );
}
