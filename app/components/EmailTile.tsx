import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Email } from "@prisma/client";
import { Link } from "@remix-run/react";
import { ReadStatus } from "./ReadStatus";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UpdateStatusButton } from "./UpdateStatusButton";

export interface EmailTileProps {
  email: Email;
}

export function EmailTile({ email }: EmailTileProps) {
  const { id, subject, from, tag, read } = email;

  return (
    <TooltipProvider>
      <Tooltip>
        <Link to={`/email-details/${id}`}>
          <TooltipTrigger asChild>
            <Card className="min-h-40">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-2">
                  <CardTitle>{subject}</CardTitle>
                  <CardDescription>From: {from}</CardDescription>
                </div>
                <Badge>{tag}</Badge>
              </CardHeader>
              <CardContent className="flex flex-row items-center justify-between p-0 px-6">
                <ReadStatus read={read} />
                {read && <UpdateStatusButton emailId={id} />}
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`View Details from ${from}`}</p>
          </TooltipContent>
        </Link>
      </Tooltip>
    </TooltipProvider>
  );
}
