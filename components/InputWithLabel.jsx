import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { CircleCheck } from "lucide-react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function InputWithLabel({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error = null,
}) {
  return (
    <div className="grid w-full items-center">
      <Label htmlFor={id} className="mb-2 text-md">
        {label}
      </Label>
      <div className="relative mb-1">
        <Input
          type={type}
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
          disabled
          className={`${
            type === "email" && validateEmail(value) ? "visible" : "invisible"
          } absolute right-0 top-0 h-full px-6 hover:bg-transparent`}
        >
          <CircleCheck className="size-6 text-green-500" />
        </Button>
      </div>
      <div className="h-3 text-sm text-red-400">{error}</div>
    </div>
  );
}
