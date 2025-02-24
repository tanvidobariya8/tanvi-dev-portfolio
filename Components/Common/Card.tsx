import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg bg-gray-800 text-gray-200 shadow-lg p-5 m-8 ${className}`} // Added shadow-lg and removed white border
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`text-2xl font-semibold ${className}`} {...props}>
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <>
    <div className="border-b border-b-gray-600"></div>
    <div ref={ref} className={`mt-4 text-gray-400 ${className}`} {...props}>
      {children}
    </div>
  </>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`mt-4 ${className}`} {...props}>
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
