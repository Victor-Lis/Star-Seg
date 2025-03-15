"use client";

import type { ContactType } from "@/@types/contact";

import { useEffect, useState } from "react";
import { redirect, useParams } from "next/navigation";
import dynamic from "next/dynamic";

import ContactForm from "@/components/ContactForm";
import GoBackButton from "@/components/GoBackButton";

type ContactsUpdateProps = {
  id: string
}

function ContactsUpdate() {
  const params = useParams<ContactsUpdateProps>()
  const [contact, setContact] = useState<ContactType | null>(null);

  async function getContact({ id }: { id: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${id}`);
    const { user } = await response.json();
    return { contact: user };
  }

  useEffect(() => {
    async function handleGetContact() {
      if (!contact) {
        const { id } = params;
        if (!id) redirect("/");

        const { contact } = await getContact({ id });
        if (!contact) redirect("/");
        setContact(contact);
      }
    }

    handleGetContact();
  }, [contact, params]);

  return (
    <div className="w-full min-h-svh p-4 flex flex-col justify-center items-center">
      <GoBackButton />
      {contact && <ContactForm title="Atualizar Contato" description="Atualize um contato da sua lista." contact={contact}/>}
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactsUpdate), {
  ssr: false,
});
