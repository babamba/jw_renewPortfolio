import { Folio } from "./folio";
import { Resume } from "./resume";
import { Stack } from "./stack";

export interface StackOutput {
  ok: boolean;
  error?: string;
  response?: Stack[];
}

export interface ResumeOutput {
  ok: boolean;
  error?: string;
  response?: Resume[];
}

export interface FolioOutput {
  ok: boolean;
  error?: string;
  response?: Folio[];
}
