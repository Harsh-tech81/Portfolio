import React from 'react';
import { motion } from 'motion/react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'right',
  loading,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/25 shine-sweep",
    secondary: "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 hover:border-blue-400/60 dark:hover:border-blue-500/60",
    ghost: "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
  };

  const isDisabled = disabled || loading;
  
  const classes = `group ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  const renderContent = () => (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const motionProps = {
    whileHover: !isDisabled ? { scale: 1.02 } : {},
    whileTap: !isDisabled ? { scale: 0.98 } : {},
    className: classes,
    onClick: isDisabled ? undefined : onClick,
    ...props
  };

  if (href) {
    return (
      <motion.a href={isDisabled ? undefined : href} {...motionProps}>
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      disabled={isDisabled}
      {...motionProps}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
