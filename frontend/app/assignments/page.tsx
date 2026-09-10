import Link from "next/link";
import { Trophy } from "lucide-react";

export default function AssignmentsPage() {
  // Contoh data dummy, nantinya diambil dari Go/Express API
  const contests = [
    { id: "week-1-daspro", title: "Week 1 Daspro - Introducing Java", status: "Active" },
    { id: "week-2-daspro", title: "Week 2 Daspro - Control Flow", status: "Upcoming" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Daftar Assignments</h1>
      <div className="grid gap-4">
        {contests.map((contest) => (
          <Link 
            key={contest.id} 
            href={`/assignments/${contest.id}`}
            className="flex items-center gap-4 p-4 border border-neutral-800 bg-neutral-900/50 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
              <Trophy size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{contest.title}</h2>
              <span className="text-sm text-neutral-400">Status: {contest.status}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}