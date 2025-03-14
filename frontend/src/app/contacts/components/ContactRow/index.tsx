import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash, Edit } from 'lucide-react'

export default function ContactRow() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2 max-md:mt-4 overflow-hidden truncate">
      <section className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="max-sm:ml-4 space-y-1 max-w-80 max-sm:pr-4">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground truncate">
            olivia.martin@email.comaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbb
          </p>
        </div>
      </section>
      <div className="flex gap-2 max-[500px]:w-full">
        <Button variant="edit" size="icon">
          <Edit color="#0e0e0e" className="h-3 w-3" />
        </Button>
        <Button variant="delete" size="icon">
        <Trash color="#0e0e0e" className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
