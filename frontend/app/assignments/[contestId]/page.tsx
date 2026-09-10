import Link from "next/link";
import { Code2, ArrowLeft } from "lucide-react";

export default function ContestDetail({ 
  params 
}: { 
  params: { contestId: string } 
}) {
  const problems = [
    { id: "two-sum", title: "1. Two Sum", difficulty: "30"},
    { id: "fibonacci", title: "2. Fibonacci Sequence", difficulty: "50"},
  ];

  return (
    <div className="p-8">
      <Link href="/assignments" className="flex items-center gap-2 text-neutral-400 hover:text-white mb-6 w-fit">
        <ArrowLeft size={16} /> Kembali ke Assignments
      </Link>
      
      {/* params.contestId didapat langsung dari nama folder */}
      <h1 className="text-3xl font-bold text-white mb-2">Contest: {params.contestId}</h1>
      <p className="text-neutral-400 mb-8">Selesaikan soal di bawah ini sebelum batas waktu habis.</p>

      <div className="space-y-3">
        {problems.map((problem) => (
          <Link 
            key={problem.id}
            href={`/assignments/${params.contestId}/problems/${problem.id}`}
            className="flex items-center justify-between p-4 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors"
          >
            <div className="flex items-center gap-3 text-white font-medium">
              <Code2 size={18} className="text-neutral-500" />
              {problem.title}
            </div>
            <div className="flex gap-3 text-xs font-semibold">
              <span className="px-2 py-1 rounded bg-red-500/10 text-red-500">{problem.difficulty}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}