import React from 'react';
import { ShieldAlert, FileText, AlertCircle } from 'lucide-react';

export function LegalPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Legal & <span className="text-[#eab308]">Policies</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Please review our terms, conditions, and policies before participating.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Terms & Conditions */}
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <FileText className="text-blue-400" size={28} />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Terms & Conditions</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-slate-300 text-sm leading-relaxed">
              <li>Registration fee is refundable only on certain terms and conditions (see Refund Policy).</li>
              <li>Decisions of judges and organizers will be final and binding.</li>
              <li>Organizers reserve the right to modify rules, dates, or structure of the event.</li>
              <li>Participation implies acceptance of all guidelines and rules.</li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <AlertCircle className="text-yellow-400" size={28} />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Refund Policy</h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-slate-300 text-sm leading-relaxed">
              <li>If an idea is not shortlisted for participation, the registration fee will be refunded within 7 working days.</li>
              <li>If a problem statement is cancelled due to an insufficient number of registrations, the fee will be refunded within 7 working days.</li>
              <li><strong className="text-red-400">No refund will be provided under any circumstances other than the above-mentioned cases.</strong></li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <ShieldAlert className="text-red-400" size={28} />
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Code of Conduct</h2>
            </div>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p className="font-bold text-white">All submissions must be:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Original</li>
                <li>Free from plagiarism</li>
              </ul>
              
              <p className="font-bold text-white mt-4">Participants must adhere to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Event rules</li>
                <li>Ethical conduct</li>
                <li>Instructions of organizers</li>
              </ul>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200">
                <strong>Note:</strong> In case of any misconduct, rule violation, or failure to produce the required documents, immediate disqualification will be enforced without prior notice.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
