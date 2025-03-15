interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export function useViaCep() {
  async function getAddressByCep(cep: string): Promise<ViaCepResponse | null> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        return null;
      }

      return data;
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
      return null;
    }
  }

  return {
    getAddressByCep,
  };
}