import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Gerenciador de Contatos</h1>
      <p className="text-lg mb-8">Bem-vindo ao seu gerenciador de contatos!</p>
      <Link
        href="/contacts/new"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Criar Novo Contato
      </Link>
      <Link href="/contacts" className="mt-4 text-blue-500">
        Ver Contatos Cadastrados
      </Link>
    </div>
  );
}