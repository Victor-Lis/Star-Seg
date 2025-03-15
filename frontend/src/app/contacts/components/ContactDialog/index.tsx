"use client";

import type { ContactType } from "@/@types/contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ContactDialogProps {
  contact: ContactType;
}

export default function ContactDialog({ contact }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="view" size="icon">
          <Eye className="h-4 w-4" color="#0e0e0e" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{contact.name}</DialogTitle>
          <DialogDescription>
            Informações detalhadas do contato
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Informações de Contato</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Telefone</p>
                <p>{contact.phone}</p>
              </div>
              <div>
                <p className="text-muted-foreground">E-mail</p>
                <p>{contact.email}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Endereço</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">CEP</p>
                <p>{contact.cep}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Estado</p>
                <p>{contact.state}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Cidade</p>
                <p>{contact.city}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Bairro</p>
                <p>{contact.neighborhood}</p>
              </div>
              <div className="col-span-2">
                <p className="text-muted-foreground">Rua</p>
                <p>{contact.street}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Número</p>
                <p>{contact.number}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Complemento</p>
                <p>{contact.complement || "-"}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Datas</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Criado em</p>
                <p>
                  {format(new Date(contact.createdAt), "dd/MM/yyyy 'às' HH:mm", {
                    locale: ptBR,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
