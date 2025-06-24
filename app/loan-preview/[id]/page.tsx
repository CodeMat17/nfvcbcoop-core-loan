import PreviewCoreLoan from "@/components/coreLoans/PreviewCoreLoan";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Id } from "@/convex/_generated/dataModel";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const loanId = params.id as Id<"coreLoans">;

  const loan = await fetchQuery(api.coreLoans.getCoreLoanById, {
    loanId,
  });

  if (!loan) return notFound();

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <PreviewCoreLoan loan={loan} />
    </div>
  );
}
