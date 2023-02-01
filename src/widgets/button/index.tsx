import './index.css';

type ButtonVariantType = "primary" | "secondary"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariantType;
}

 export const Button = (props: ButtonProps) => {
  
  let variantStyle = `button-${props.variant}`
  let variantLabelStyle = `button-label-${props.variant}`
  return (
    <button className={`button font-size-small ${variantStyle} ${props.className || ''}`} {...props}>
      <span className={`button-label font-size-small ${variantLabelStyle} `}>{props.children}</span>
    </button>
  );
};
