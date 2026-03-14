import { Input as InternalInput } from './input';
import { Password } from './password';

type InputType = typeof InternalInput & {
  Password: typeof Password;
};

const Input = InternalInput as InputType;
Input.Password = Password;

export { Input };
export type { InputProps } from './input';
export type { PasswordProps } from './password';