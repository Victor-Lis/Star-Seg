import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactRow from "./components/ContactRow";

export const metadata: Metadata = {
  title: "Contatos",
  description: "Esses são os contatos salvos.",
};

const MOCK_CONTACTS = Array(8).fill(null);

export default function Contacts() {
  return (
    <main className="min-h-screen p-6 max-[450px]:px-2">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold">Lista de Contatos</h1>
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
              {MOCK_CONTACTS.map((_, index) => (
                <ContactRow key={index} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
