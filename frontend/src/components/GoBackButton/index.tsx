import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
}

export default function GoBackButton({ href, className }: Props) {
  return (
    <Link href={href ? href : "/contacts"} className={className ? className : "mb-2"}>
      <Button variant="edit" size="sm" className="h-8 text-black">
        <MoveLeft className="h-4 w-4" />
        <span className="ml-2 max-sm:hidden">Voltar</span>
      </Button>
    </Link>
  );
}
