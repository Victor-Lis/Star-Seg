"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import GoBackButton from "@/components/GoBackButton";

function ContactsNew() {
  return (
    <div className="w-full min-h-svh p-4 flex flex-col justify-center items-center">
      <GoBackButton />
      <ContactForm />
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactsNew), {
  ssr: false,
});
