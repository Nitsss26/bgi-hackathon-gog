import React from 'react';
import { Users, FileCheck, CreditCard, Presentation, Scale, Gavel } from 'lucide-react';

export function GuidelinesPage() {
  return (
    <div className="bg-[#020617] min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Rules & <span className="text-[#eab308]">Guidelines</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about participating in the BGI Hackathon 2026. Please read carefully before registering.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Team Formation & Eligibility */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Team Formation & Eligibility</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Who Can Participate</h3>
                  <p className="text-sm leading-relaxed">Participation is open to all students currently enrolled in Diploma, Undergraduate (UG), or Postgraduate (PG) programs (any discipline) from any recognized private or government institution or university. <strong className="text-red-400">Note: Pass-out students are not eligible.</strong></p>
                </div>
                <div>
                  <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Team Structure</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Team size: 1 to 5 members.</li>
                    <li>Members may belong to the same or different institutions and disciplines.</li>
                    <li>Each team must nominate a Single Point of Contact (SPOC) during registration.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Registration & Submission */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center text-green-400">
                  <Presentation size={24} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Registration & Idea Submission</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Registration Process</h3>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    <li>Register on the official website.</li>
                    <li>Select venue and problem statement.</li>
                    <li>Fill in Team details, SPOC details, and Member details.</li>
                    <li>Pay the registration fee.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Idea (PPT) Submission</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Mandatory for participation.</li>
                    <li>Post Registration & Fee payment, confirmation will be sent to the SPOC via email, along with the Application ID and the link for idea submission (PPT upload).</li>
                    <li>Format: PPT (as per template) - Max Size: 5 MB.</li>
                    <li>Only shortlisted teams (notified via email) will proceed to the main event.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hackathon Format */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                  <Scale size={24} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Hackathon Format & Judging</h2>
              </div>
              <div className="space-y-6 text-slate-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Format</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Duration: 2 Days (9:30 AM – 5:00 PM)</li>
                      <li>Reporting Time: 9:30 AM (Daily)</li>
                      <li>No internal/college-level rounds.</li>
                      <li>Multiple evaluation rounds may be conducted.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[#eab308] font-bold text-sm uppercase tracking-wider mb-2">Judging Criteria</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Innovation & Creativity</li>
                      <li>Problem Understanding & Relevance</li>
                      <li>Technical Implementation</li>
                      <li>Impact & Scalability</li>
                      <li>Design & User Experience</li>
                      <li>Presentation & Communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Documents Required */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center text-orange-400">
                  <FileCheck size={20} />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">Documents Required</h2>
              </div>
              <div className="space-y-4 text-slate-300 text-sm">
                <p className="font-bold text-white">During Registration:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Student ID / Enrollment Number</li>
                  <li>Aadhaar Number</li>
                </ul>
                <p className="font-bold text-white mt-4">At the Venue (Mandatory):</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Bonafide Certificate (signed & sealed by Head of Institute/Department)</li>
                  <li>Valid Student ID</li>
                  <li>Aadhaar Card or Govt ID</li>
                </ul>
                <p className="text-xs text-red-400 mt-2">Note: Documents must be carried on both days. Failure to produce valid documents will result in denial of participation.</p>
              </div>
            </div>

            {/* Fee & Refund */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-400/10 flex items-center justify-center text-teal-400">
                  <CreditCard size={20} />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">Fee & Refund Policy</h2>
              </div>
              <div className="space-y-4 text-slate-300 text-sm">
                <div className="bg-[#020617] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-black text-white mb-1">₹1000</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Per Problem Statement (Team of 1-5)</div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Fee payment is mandatory prior to idea submission.</li>
                  <li>Separate registration is required for each venue/location.</li>
                  <li>Refunded within 7 days if idea is not shortlisted.</li>
                  <li>Refunded within 7 days if problem statement is cancelled.</li>
                  <li>No refund under any other circumstances.</li>
                </ul>
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-400/10 flex items-center justify-center text-rose-400">
                  <Gavel size={20} />
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">Code of Conduct</h2>
              </div>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>All submissions must be original and free from plagiarism.</p>
                <p>Participants must adhere to event rules, ethical conduct, and instructions of organizers.</p>
                <p className="text-xs text-red-400 mt-4">Misconduct or rule violation will result in immediate disqualification without prior notice.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
