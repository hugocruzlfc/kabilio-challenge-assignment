import { useToast } from "@/hooks/use-toast";
import { Form } from "@remix-run/react";
import { MailWarning } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface EmailTileProps {
  emailId: string;
}

export function UpdateStatusButton({ emailId }: EmailTileProps) {
  const { toast } = useToast();

  return (
    <Form method="PUT">
      <input type="hidden" name="id" value={emailId} />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation(),
                  toast({
                    title: "Email marked as unread",
                    description: "The email has been marked as unread",
                  });
              }}
            >
              <MailWarning />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mark as unread</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Form>
  );
}
