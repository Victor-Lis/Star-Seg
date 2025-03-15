"use client";

import type { ContactType } from "@/@types/contact";

import { Plus } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ContactRow from "./components/ContactRow";
import GoBackButton from "@/components/GoBackButton";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contacts() {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchContacts() {
    const response = await fetch(process.env.NEXT_PUBLIC_API, {
      next: {
        revalidate: 10,
      },
    });
    const contacts = await response.json();
    return contacts.users as ContactType[];
  }

  useEffect(() => {
    fetchContacts().then((contacts) => {
      setContacts(contacts);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen p-6 max-[450px]:px-2">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Lista de Contatos</h1>
          <GoBackButton href="/" className="mb-0" />
        </header>

        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle>Contatos Salvos</CardTitle>
              <CardDescription>Gerencie seus contatos.</CardDescription>
            </div>
            <Link href="/contacts/new">
              <Button variant="outline" size="sm" className="h-8">
                <Plus className="h-4 w-4" />
                <span className="ml-2 max-sm:hidden">Novo Contato</span>
              </Button>
            </Link>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {loading ? (
                <p>Carregando...</p>
              ) : !contacts || contacts.length === 0 ? (
                <p>Não há contatos cadastrados</p>
              ) : (
                contacts?.map((contact, index) => (
                  <ContactRow key={contact.id} contact={contact} index={index}/>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
