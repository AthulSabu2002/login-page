"use client"

import LoginForm from '../components/login/LoginForm';
import VisualElements from '../components/login/VisualElements';

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-[#F5F8FC] flex flex-col justify-center md:flex-row md:justify-end lg:justify-center items-center gap-6 md:gap-8 lg:gap-12 p-4">
            <LoginForm />
            <VisualElements />
        </div>
    );
}