import { Field } from "formik";
import "./component_style.css";
export default function AddInput({
  id,
  as,
  label,
  type,
  placeholder,
  className,
  value,
  disabled,
}) {
  return (
    <div className="relative">
      <Field
        id={id}
        as={as}
        type={type}
        autoComplete="false"
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        className={`inputfield_css peer ${className}`}
        required="required"
      />
      <label htmlFor={id} className="labelfeild_css">
        {label}
      </label>
    </div>
  );
}
