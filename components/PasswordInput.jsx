"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function PasswordInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error = null,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid w-full items-center">
      <Label htmlFor={id} className="mb-2 text-md">
        {label}
      </Label>
      <div className="relative mb-1">
        <Input
          type={showPassword ? "text" : "password"}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`py-6 rounded-3xl bg-background ${
            error ? "border border-red-400" : ""
          }`}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-0 top-0 h-full px-6 hover:bg-transparent cursor-pointer"
        >
          {type === "password" ? (
            showPassword ? (
              <EyeOff className="size-6 text-muted-foreground" />
            ) : (
              <Eye className="size-6 text-muted-foreground" />
            )
          ) : null}
        </Button>
      </div>
      <div className="h-3 text-sm text-red-400">{error}</div>
    </div>
  );
}
