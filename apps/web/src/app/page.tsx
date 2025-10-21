import { Brand, formatCurrencyBRL } from "@atrium/ui";

export default function HomePage() {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-50 p-6">
      <div className="max-w-xl w-full rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-2">{Brand.name}</h1>
        <p className="text-slate-600">
          Pacote <code>@atrium/ui</code> funcionando. Exemplo de utilitário:{" "}
          <strong>{formatCurrencyBRL(39)}</strong>
        </p>
      </div>
    </main>
  );
}
