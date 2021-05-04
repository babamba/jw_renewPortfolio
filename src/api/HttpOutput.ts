const HttpOutput = (status: boolean, msg: string, data?: any) => {
  return { status, msg, data };
};

export { HttpOutput };
