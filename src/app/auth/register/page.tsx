import RegisterForm from "@/app/ui/register/login-form";

export default function RegisterPage() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center w-full h-screen">
            <h1 className="text-3xl font-bold">Register Page</h1>
            <RegisterForm />
        </div>
    )
}