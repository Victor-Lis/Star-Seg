"use client";

import type { ContactType } from "@/@types/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/schemas/contactFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useViaCep } from "@/hooks/useViaCep";
import { UFSelect } from "../UFSelect";
import { redirect } from "next/navigation";

type ContactFormProps = {
  title?: string;
  description?: string;
  contact?: ContactType;
};

export default function ContactForm({
  title,
  description,
  contact,
}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: contact ? contact.name : "",
      phone: contact ? contact.phone : "",
      email: contact ? contact.email : "",
      cep: contact ? contact.cep : "",
      state: contact ? contact.state : "",
      city: contact ? contact.city : "",
      neighborhood: contact ? contact.neighborhood : "",
      street: contact ? contact.street : "",
      number: contact ? contact.number : 0,
      complement: contact ? contact.complement : "",
    },
  });

  const { getAddressByCep } = useViaCep();

  async function onCepBlur(cep: string) {
    if (cep.length === 8) {
      const address = await getAddressByCep(cep);
      if (address) {
        form.setValue("state", address.uf);
        form.setValue("city", address.localidade);
        form.setValue("neighborhood", address.bairro);
        form.setValue("street", address.logradouro);
      }
    }
  }

  async function onSubmit(data: ContactFormData) {
    try {
      setIsLoading(true);
      if (contact) {
        const body = JSON.stringify({
          ...data,
          id: contact.id,
        });
        const response = await fetch(process.env.NEXT_PUBLIC_API, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contactReponse = await response.json();
        console.log(contactReponse);
        redirect("/contacts/");
      } else {
        const body = JSON.stringify(data);
        console.log(body);
        const response = await fetch(process.env.NEXT_PUBLIC_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contact = await response.json();
        console.log(contact);
        redirect("/contacts/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title ? title : "Novo Contato"}</CardTitle>
        <CardDescription>
          {description ? description : "Adicione um novo contato à sua lista."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="exemplo@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="00000-000"
                          {...field}
                          onBlur={(e) => {
                            field.onBlur();
                            onCepBlur(e.target.value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado</FormLabel>
                      <FormControl>
                        <UFSelect {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="neighborhood"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rua</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="complement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complemento</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              variant={"submit"}
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Salvando..." : "Salvar Contato"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
