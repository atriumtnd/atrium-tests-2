export const Brand = { name: "AtriumTests" };

// Exemplo de função compartilhada (opcional):
export function formatCurrencyBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
