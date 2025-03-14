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

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 max-[450px]:p-2">
      <div className="w-full md:max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Lista de Contatos</h2>
        </div>

        <Card className="w-full">
          <CardHeader className="flex justify-between items-center flex-wrap">
            <header>
              <CardTitle className="whitespace-nowrap">Contatos Salvos</CardTitle>
              <CardDescription>Gerencie seus contatos.</CardDescription>
            </header>
            <Link href="/contacts/new">
              <Button variant="outline" size="sm" className="max-sm:w-7 max-sm:h-7">
                <Plus className="h-2 w-2" />
                <span className="max-sm:hidden">Novo Contato</span>
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ContactRow />
              <ContactRow />
              <ContactRow />
              <ContactRow />
              <ContactRow />
              <ContactRow />
              <ContactRow />
              <ContactRow />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
