import { Stack } from "./stack";

export interface StackOutput {
  ok: boolean;
  error?: string;
  response?: Stack[];
}
