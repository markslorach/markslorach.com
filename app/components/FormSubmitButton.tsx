import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

// Icons
import { Send, LoaderCircle } from "lucide-react";

const FormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      variant="outline"
      className="w-full bg-transparent font-semibold dark:bg-transparent border-gray-400 dark:border-gray-500 hover:bg-gray-200/60 p-2 transition-colors dark:hover:bg-white/5"
      type="submit"
    >
      Send
      {pending ? (
        <LoaderCircle className="ml-1.5 h-3.5 w-3.5 animate-spin" />
      ) : (
        <Send className="ml-1.5 h-3.5 w-3.5" />
      )}
    </Button>
  );
};

export default FormSubmitButton;
