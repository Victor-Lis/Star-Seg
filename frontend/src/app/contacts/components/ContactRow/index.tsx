import type { ContactType } from "@/@types/contact";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash, Edit, Eye } from "lucide-react";
import Link from "next/link";
import ContactDialog from "../ContactDialog";

type ContactRowProps = {
  contact: ContactType
};

export default function ContactRow({ contact }: ContactRowProps) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2 max-md:mt-4 overflow-hidden truncate">
      <section className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>
            {contact.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
        </Avatar>
        <div className="max-sm:ml-4 space-y-1 max-w-80 max-sm:pr-4">
          <p className="text-sm font-medium leading-none">{contact.name}</p>
          <p className="text-sm text-muted-foreground truncate">
          {contact.email}
          </p>
        </div>
      </section>
      <div className="flex gap-2 max-[500px]:w-full">
        <ContactDialog contact={contact}/>
        <Link href={`/contacts/update/${contact.id}`}>
          <Button variant="edit" size="icon">
            <Edit color="#0e0e0e" className="h-3 w-3" />
          </Button>
        </Link>
        <Button variant="delete" size="icon">
          <Trash color="#0e0e0e" className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
