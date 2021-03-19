import StyledInput from "./styles"

export default function Input(props) {
  const { type, id, name, placeholder } = props;

  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  )
}