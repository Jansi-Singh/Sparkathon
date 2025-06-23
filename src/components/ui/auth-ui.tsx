import * as React from "react";
import { useState, useId } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

// COMPONENT: Label
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// COMPONENT: Button
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-600 bg-transparent text-white hover:bg-gray-800 hover:border-gray-500",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
        ghost: "hover:bg-gray-800 hover:text-white",
        link: "text-blue-400 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-6",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
const AuthButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
AuthButton.displayName = "AuthButton";

// COMPONENT: Input
const AuthInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-3 text-sm text-white shadow-sm transition-colors placeholder:text-gray-400 focus-visible:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
AuthInput.displayName = "AuthInput";

// COMPONENT: PasswordInput
export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, ...props }, ref) => {
    const id = useId();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    return (
      <div className="grid w-full items-center gap-2">
        {label && <Label htmlFor={id} className="text-white">{label}</Label>}
        <div className="relative">
          <AuthInput id={id} type={showPassword ? "text" : "password"} className={cn("pe-10", className)} ref={ref} {...props} />
          <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 end-0 flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" aria-label={showPassword ? "Hide password" : "Show password"}>
            {showPassword ? (<EyeOff className="size-4" aria-hidden="true" />) : (<Eye className="size-4" aria-hidden="true" />)}
          </button>
        </div>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

// FORM: SignInForm
function SignInForm() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    console.log("SmartMart: Sign In form submitted"); 
  };
  return (
    <div className="animate-fade-in">
      <form onSubmit={handleSignIn} autoComplete="on" className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-white">Welcome Back to SmartMart</h1>
          <p className="text-balance text-sm text-gray-400">Sign in to access your smart shopping experience</p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <AuthInput id="email" name="email" type="email" placeholder="your@email.com" required autoComplete="email" />
          </div>
          <PasswordInput name="password" label="Password" required autoComplete="current-password" placeholder="••••••••" />
          <AuthButton type="submit" className="mt-2">Sign In to SmartMart</AuthButton>
        </div>
      </form>
    </div>
  );
}

// FORM: SignUpForm
function SignUpForm() {
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    console.log("SmartMart: Sign Up form submitted"); 
  };
  return (
    <div className="animate-fade-in">
      <form onSubmit={handleSignUp} autoComplete="on" className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-white">Join SmartMart</h1>
          <p className="text-balance text-sm text-gray-400">Create your account and start shopping smarter</p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <AuthInput id="name" name="name" type="text" placeholder="John Doe" required autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <AuthInput id="email" name="email" type="email" placeholder="your@email.com" required autoComplete="email" />
          </div>
          <PasswordInput name="password" label="Password" required autoComplete="new-password" placeholder="••••••••"/>
          <AuthButton type="submit" className="mt-2">Create SmartMart Account</AuthButton>
        </div>
      </form>
    </div>
  );
}

// CONTAINER for the forms to handle state switching
function AuthFormContainer({ initialMode = "signin" }: { initialMode?: "signin" | "signup" }) {
    const [isSignIn, setIsSignIn] = useState(initialMode === "signin");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleToggle = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsSignIn(!isSignIn);
        setIsTransitioning(false);
      }, 150);
    };

    return (
        <div className="mx-auto grid w-[350px] gap-6">
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {isSignIn ? <SignInForm /> : <SignUpForm />}
            </div>
            <div className="text-center text-sm text-gray-400">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
                <AuthButton variant="link" className="pl-1" onClick={handleToggle}>
                    {isSignIn ? "Sign up" : "Sign in"}
                </AuthButton>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-gray-700">
                <span className="relative z-10 bg-gray-900 px-2 text-gray-400">Or continue with</span>
            </div>
            <AuthButton variant="outline" type="button" onClick={() => console.log("SmartMart: Google button clicked")}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google icon" className="mr-2 h-4 w-4" />
                Continue with Google
            </AuthButton>
        </div>
    )
}

// --- MAIN EXPORTED COMPONENT ---

interface AuthUIProps {
    image?: {
        src: string;
        alt: string;
    };
    quote?: {
        text: string;
        author: string;
    };
    initialMode?: "signin" | "signup";
}

const defaultImage = {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80",
    alt: "Smart shopping experience"
};

const defaultQuote = {
    text: "SmartMart has revolutionized my shopping experience. The AI-powered recommendations and real-time inventory access have saved me both time and money.",
    author: "Sarah Johnson, Smart Shopper"
}

export function AuthUI({ image = defaultImage, quote = defaultQuote, initialMode = "signin" }: AuthUIProps) {
  return (
    <div className="w-full min-h-screen bg-gray-900 md:grid md:grid-cols-2">
      <style>{`
        input[type="password"]::-ms-reveal,
        input[type="password"]::-ms-clear {
          display: none;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>

      {/* Left Column: The Form */}
      <div className="flex h-screen items-center justify-center p-6 md:h-auto md:p-0 md:py-12 bg-gray-900">
        <AuthFormContainer initialMode={initialMode} />
      </div>

      {/* Right Column: The Image and Quote */}
      <div
        className="hidden md:block relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Centered Quote */}
        <div className="relative z-10 flex h-full items-center justify-center p-10">
            <blockquote className="space-y-4 text-center text-white max-w-md">
              <p className="text-lg font-medium leading-relaxed">"{quote.text}"</p>
              <cite className="block text-sm font-light text-blue-300 not-italic">
                  — {quote.author}
              </cite>
            </blockquote>
        </div>
      </div>
    </div>
  );
}