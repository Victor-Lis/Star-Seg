import type { ContactType } from "@/@types/contact";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash, Edit, Clock } from "lucide-react";
import Link from "next/link";
import ContactDialog from "../ContactDialog";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

type ContactRowProps = {
  index: number;
  contact: ContactType;
};

export default function ContactRow({ contact, index }: ContactRowProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  function getProfileImage() {
    return contact.profilePicture
      ? contact.profilePicture
      : `/avatars/0${
          index % 5 === 0
            ? 5
            : index % 4 === 0
            ? 4
            : index % 3 === 0
            ? 3
            : index % 2 === 0
            ? 2
            : 1
        }.png`;
  }

  async function deleteContact() {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${contact.id}`
    );
    if (response.ok) {
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-between flex-wrap gap-2 max-md:mt-4 overflow-hidden truncate">
      <section className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={"/avatars/01.png"} alt="Avatar" />
          <AvatarFallback>
            {contact.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
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
        <ContactDialog contact={contact} />
        <Link href={`/contacts/update/${contact.id}`}>
          <Button variant="edit" size="icon">
            <Edit color="#0e0e0e" className="h-3 w-3" />
          </Button>
        </Link>
        <Button variant="delete" size="icon" onClick={deleteContact}>
          {loading ? (
            <Clock color="#0e0e0e" className="h-3 w-3 animate-spin" />
          ) : (
            <Trash color="#0e0e0e" className="h-3 w-3" />
          )}
        </Button>
      </div>
    </div>
  );
}
