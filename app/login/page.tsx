"use client"

import LoginForm from '@/components/login/LoginForm';
import VisualElements from '@/components/login/VisualElements';

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-[#F5F8FC] flex items-center p-4">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <LoginForm />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <VisualElements />
                </div>
            </div>
        </div>
    );
}