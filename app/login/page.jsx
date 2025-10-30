"use client";
import { InputWithLabel } from "@/components/InputWithLabel";
import { PasswordInput } from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="mih-h-screen bg-background font-inter">
      <div className="p-8 flex justify-center items-center gap-2">
        <Droplet className="size-8 text-primary" />
        <h1 className="font-poppins font-bold text-2xl text-foreground">
          AuraFlow
        </h1>
      </div>
      <div className="max-w-104 mx-auto p-8 rounded-3xl bg-card shadow-sm">
        <div className="mb-4 text-center">
          <h2 className="font-poppins font-bold text-4xl mb-2">Welcome Back</h2>
          <p className="text-lg text-foreground/80">Log in to your account</p>
        </div>
        <form action="">
          <div className="mt-8">
            <InputWithLabel
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <PasswordInput
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={"Incorrect password. Please try again."}
            />
          </div>
          <div className="my-6 flex justify-end">
            <Link
              href="#"
              className="font-poppins font-semibold text-sm text-primary"
            >
              Forgot Password?
            </Link>
          </div>
          <div>
            <Button
              type="submit"
              size="sm"
              className="w-full h-fit rounded-3xl bg-primary text-white font-poppins font-semibold text-md cursor-pointer transition duration-300"
            >
              Login
            </Button>
          </div>
        </form>
        <div className="mt-8">
          <div className="font-poppins text-center text-foreground/80 text-sm">
            Don&#39;t have an account?{" "}
            <Link href="#" className="font-poppins font-semibold text-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
