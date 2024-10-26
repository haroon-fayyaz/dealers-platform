export const ErrorHelperText = ({
  error,
}: {
  error: string | false | undefined;
}) => error && <p className="text-red-500 text-xs mt-1">{error}</p>;
