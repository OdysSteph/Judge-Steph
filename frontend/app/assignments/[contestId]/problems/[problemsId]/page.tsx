"use client";

import { useState, use } from "react";
import dynamic from "next/dynamic";
import { Play, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-neutral-500 font-mono text-sm">
      Memuat Editor...
    </div>
  ),
});

export default function ProblemWorkspace({
  params,
}: {
  params: Promise<{ contestId: string; problemId: string }>;
}) {
  const unwrappedParams = use(params);

  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState(
    'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}'
  );

  return (
    <div className="flex h-full w-full">
      {/* BAGIAN KIRI: Deskripsi Soal */}
      <div className="w-1/2 h-full border-r border-neutral-800 flex flex-col bg-[#0a0a0a] overflow-y-auto">
        <div className="p-6 space-y-6">
          <Link
            href={`/assignments/${unwrappedParams.contestId}`}
            className="flex items-center gap-2 text-neutral-400 hover:text-white w-fit transition-colors mb-2"
          >
            <ArrowLeft size={16} /> Kembali ke Contest
          </Link>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2 capitalize">
              {unwrappedParams.problemId?.replace(/-/g, " ")}
            </h2>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-500 font-medium">
                Easy
              </span>
              <span className="px-2 py-1 rounded bg-neutral-800 text-neutral-300 capitalize">
                {unwrappedParams.contestId?.replace(/-/g, " ")}
              </span>
            </div>
          </div>

          <div className="text-neutral-300 space-y-4 text-sm leading-relaxed">
            <p>
              Diberikan sebuah array integer <code>nums</code> dan sebuah integer <code>target</code>,
              kembalikan indeks dari dua angka yang jika dijumlahkan menghasilkan <code>target</code>.
            </p>
            <p>
              Anda dapat mengasumsikan bahwa setiap input hanya memiliki tepat satu solusi,
              dan Anda tidak boleh menggunakan elemen yang sama dua kali.
            </p>

            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
              <p className="font-semibold text-white mb-1">Example 1:</p>
              <code className="text-blue-400">Input: nums = [2,7,11,15], target = 9</code><br />
              <code className="text-blue-400">Output: [0,1]</code><br />
              <span className="text-neutral-500 text-xs">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</span>
            </div>
          </div>
        </div>
      </div>

      {/* BAGIAN KANAN: Code Editor & Console */}
      <div className="w-1/2 h-full flex flex-col bg-[#1e1e1e]">
        {/* Editor Toolbar */}
        <div className="h-14 bg-[#0a0a0a] border-b border-neutral-800 flex items-center justify-between px-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 text-sm text-white px-3 py-1.5 rounded-md outline-none focus:border-blue-500"
          >
            <option value="java">Java 17</option>
            <option value="cpp">C++ 20</option>
            <option value="python">Python 3.10</option>
          </select>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-colors text-sm font-medium">
              <Play size={16} />
              Compile
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium">
              <Send size={16} />
              Submit
            </button>
          </div>
        </div>

        {/* Monaco Editor Container */}
        <div className="flex-1 overflow-hidden relative">
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "var(--font-mono)",
              padding: { top: 16 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
            }}
          />
        </div>

        {/* Console / Output Area */}
        <div className="h-48 border-t border-neutral-800 bg-[#0a0a0a] p-4 flex flex-col">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Output Console
          </div>
          <div className="flex-1 bg-neutral-950 border border-neutral-800 rounded p-3 font-mono text-sm text-neutral-400 overflow-y-auto">
            Run your code to see the output here...
          </div>
        </div>
      </div>
    </div>
  );
}