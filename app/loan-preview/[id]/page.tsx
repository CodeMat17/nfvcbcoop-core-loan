import PreviewCoreLoan from "@/components/coreLoans/PreviewCoreLoan";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";

interface PageProps {
  params: {
    id: string;
  };
}

const PreviewLoan = async ({ params }: PageProps) => {
  const loanId = params.id as Id<'coreLoans'>;

  const loan = await fetchQuery(api.coreLoans.getCoreLoanById, {
    loanId,
  });

  if (!loan) {
    return (
      <div className='italic py-20 px-4 text-center animate-pulse'>
        Loan not found.
      </div>
    );
  }

  return (
    <div className='w-full max-w-6xl mx-auto px-4 py-8'>
      <PreviewCoreLoan loan={loan} />
    </div>
  );
};

export default PreviewLoan;
