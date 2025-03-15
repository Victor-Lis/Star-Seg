import * as React from "react";
import { type UseControllerProps, useController } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UFSelectProps extends UseControllerProps {
  label?: string;
}

export const UFSelect = React.forwardRef<HTMLDivElement, UFSelectProps>(({ control, name, label }, ref) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  const values = [
    { AC: "Acre" },
    { AL: "Alagoas" },
    { AP: "Amapá" },
    { AM: "Amazonas" },
    { BA: "Bahia" },
    { CE: "Ceará" },
    { DF: "Distrito Federal" },
    { ES: "Espírito Santo" },
    { GO: "Goiás" },
    { MA: "Maranhão" },
    { MT: "Mato Grosso" },
    { MS: "Mato Grosso do Sul" },
    { MG: "Minas Gerais" },
    { PA: "Pará" },
    { PB: "Paraíba" },
    { PR: "Paraná" },
    { PE: "Pernambuco" },
    { PI: "Piauí" },
    { RJ: "Rio de Janeiro" },
    { RN: "Rio Grande do Norte" },
    { RS: "Rio Grande do Sul" },
    { RO: "Rondônia" },
    { RR: "Roraima" },
    { SC: "Santa Catarina" },
    { SP: "São Paulo" },
    { SE: "Sergipe" },
    { TO: "Tocantins" },
  ];

  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecione o estado" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectGroup>
          <SelectLabel>{label || "Estados"}</SelectLabel>
          {values.map((value) => (
            <SelectItem
              key={Object.keys(value)[0]}
              value={Object.keys(value)[0]}
            >
              {Object.values(value)[0]}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
})