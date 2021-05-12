import { AxiosResponse } from "axios";
import { ErrorStatus } from "@interfaces/output";

class FetchError extends Error {
  statusOut: ErrorStatus;
  constructor(public res: AxiosResponse<any>, statusOut: ErrorStatus) {
    super();
    this.statusOut = statusOut;
  }
}

export default FetchError;
