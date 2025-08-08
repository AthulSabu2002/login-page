"use client"

import LoginForm from '@/components/login/LoginForm';
import VisualElements from '@/components/login/VisualElements';

export default function LoginPage() {
    return (
        <div className="w-screen h-screen bg-[#F5F8FC] flex items-center justify-center overflow-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 p-4 transform-origin-center">
                <LoginForm />
                <VisualElements />
            </div>
        </div>
    );
}