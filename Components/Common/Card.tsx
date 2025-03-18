import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`card ${className}`} {...props}>
    {children}
  </div>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`card-header ${className}`} {...props}>
    {children}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <>
    <div className="card-divider"></div>
    <div ref={ref} className={`card-content ${className}`} {...props}>
      {children}
    </div>
  </>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`card-footer ${className}`} {...props}>
    {children}
  </div>
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
