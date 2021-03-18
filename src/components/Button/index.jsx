import { StyledButton } from "./style"

export default function Button({ children, }) {
  return (
    <StyledButton className="buttons">
      {children}
    </StyledButton>
  )
}