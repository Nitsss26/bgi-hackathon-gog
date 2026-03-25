import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Loader2, ShieldCheck, Mail, Smartphone, Users, FileText, CreditCard } from 'lucide-react';

const THEMES = [
  "Smart Education",
  "Healthcare & Biomedical Devices",
  "Agriculture & Rural Development",
  "Smart Automation",
  "Clean & Green Technology",
  "Disaster Management",
  "Smart Vehicles",
  "Blockchain & Cybersecurity"
];

const PROBLEM_STATEMENTS: Record<string, string[]> = {
  "Smart Education": ["AI-based personalized learning", "Virtual labs for remote areas"],
  "Healthcare & Biomedical Devices": ["Low-cost diagnostic tools", "Remote patient monitoring"],
  "Agriculture & Rural Development": ["Smart irrigation systems", "Crop disease prediction"],
  "Smart Automation": ["Home automation for elderly", "Industrial IoT solutions"],
  "Clean & Green Technology": ["Waste management optimization", "Renewable energy tracking"],
  "Disaster Management": ["Early warning systems", "Resource allocation during crisis"],
  "Smart Vehicles": ["Traffic flow optimization", "EV battery management"],
  "Blockchain & Cybersecurity": ["Secure voting system", "Fake news detection"]
};

export function RegisterPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Form State
  const [theme, setTheme] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  
  const [leader, setLeader] = useState({
    name: "", email: "", phone: "", aadhar: "", institute: "", degree: "", enrollment: "", dob: ""
  });
  
  const [otps, setOtps] = useState({ email: "", mobile: "" });
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  
  const [members, setMembers] = useState([{ name: "", institute: "", degree: "", enrollment: "", dob: "" }]);
  
  const handleSendOtp = async () => {
    if (!leader.email || !leader.phone) {
      setError("Please enter both email and phone number.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: leader.email })
      });
      if (res.ok) {
        setOtpSent(true);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otps.email || !otps.mobile) {
      setError("Please enter both OTPs.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: leader.email, emailOtp: otps.email, mobileOtp: otps.mobile })
      });
      if (res.ok) {
        setOtpVerified(true);
        setStep(3);
      } else {
        setError("Invalid OTPs. Please check and try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  const handlePayment = async () => {
    setLoading(true);
    setError("");
    // Simulate payment delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamLeader: leader,
          teamMembers: members,
          projectDetails: { theme, problemStatement }
        })
      });
      
      if (res.ok) {
        setStep(5); // Success
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  const addMember = () => {
    if (members.length < 4) {
      setMembers([...members, { name: "", institute: "", degree: "", enrollment: "", dob: "" }]);
    }
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const removeMember = (index: number) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Team <span className="text-brand-secondary">Registration</span>
        </h1>
        <p className="text-slate-400 text-lg">Join the BGI Hackathon 2026 and build the future.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10 rounded-full" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-secondary -z-10 rounded-full transition-all duration-500"
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        />
        {[
          { icon: FileText, label: "Project" },
          { icon: ShieldCheck, label: "Leader" },
          { icon: Users, label: "Team" },
          { icon: CreditCard, label: "Payment" },
          { icon: CheckCircle2, label: "Done" }
        ].map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step > i + 1 ? 'bg-brand-secondary border-brand-secondary text-slate-900' : step === i + 1 ? 'bg-slate-900 border-brand-secondary text-brand-secondary' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>
              <s.icon size={18} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${step >= i + 1 ? 'text-white' : 'text-slate-500'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Step 1: Project Details */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Project Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Select Theme</label>
                <select 
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all"
                  value={theme}
                  onChange={(e) => { setTheme(e.target.value); setProblemStatement(""); }}
                >
                  <option value="">-- Select a Theme --</option>
                  {THEMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {theme && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Problem Statement</label>
                  <select 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary outline-none transition-all"
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                  >
                    <option value="">-- Select Problem Statement --</option>
                    {PROBLEM_STATEMENTS[theme]?.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-6">
              <button 
                onClick={() => setStep(2)}
                disabled={!theme || !problemStatement}
                className="bg-brand-secondary text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                Next Step <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Team Leader & OTP */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Team Leader Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input type="text" value={leader.name} onChange={e => setLeader({...leader, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="Rahul Sharma" disabled={otpVerified} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Aadhar Number</label>
                <input type="text" value={leader.aadhar} onChange={e => setLeader({...leader, aadhar: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="XXXX XXXX XXXX" disabled={otpVerified} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                <input type="email" value={leader.email} onChange={e => setLeader({...leader, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="rahul@example.com" disabled={otpSent || otpVerified} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                <input type="tel" value={leader.phone} onChange={e => setLeader({...leader, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="+91 9876543210" disabled={otpSent || otpVerified} />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Institute Name</label>
                  <input type="text" value={leader.institute} onChange={e => setLeader({...leader, institute: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" disabled={otpVerified} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Degree/Course</label>
                  <input type="text" value={leader.degree} onChange={e => setLeader({...leader, degree: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" placeholder="B.Tech CSE" disabled={otpVerified} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Enrollment Number</label>
                  <input type="text" value={leader.enrollment} onChange={e => setLeader({...leader, enrollment: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" disabled={otpVerified} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Date of Birth</label>
                  <input type="date" value={leader.dob} onChange={e => setLeader({...leader, dob: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none" disabled={otpVerified} />
                </div>
              </div>
            </div>

            {!otpSent && !otpVerified && (
              <div className="flex justify-between pt-6 border-t border-white/10">
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white px-6 py-3 font-medium transition-colors">Back</button>
                <button 
                  onClick={handleSendOtp}
                  disabled={loading || !leader.email || !leader.phone || !leader.name || !leader.aadhar}
                  className="bg-brand-secondary text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {loading ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} />}
                  Verify Contact Details
                </button>
              </div>
            )}

            {otpSent && !otpVerified && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-6 border-t border-white/10 space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-blue-400 text-sm">
                  OTPs have been sent to your email and mobile number. (For demo, use 123456 for mobile).
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"><Mail size={16}/> Email OTP</label>
                    <input type="text" value={otps.email} onChange={e => setOtps({...otps, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none text-center tracking-[0.5em] font-mono text-lg" placeholder="------" maxLength={6} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2 flex items-center gap-2"><Smartphone size={16}/> Mobile OTP</label>
                    <input type="text" value={otps.mobile} onChange={e => setOtps({...otps, mobile: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none text-center tracking-[0.5em] font-mono text-lg" placeholder="123456" maxLength={6} />
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <button 
                    onClick={handleVerifyOtp}
                    disabled={loading || otps.email.length !== 6 || otps.mobile.length !== 6}
                    className="bg-brand-secondary text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : "Verify & Continue"}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 3: Team Members */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white">Team Members</h2>
              <span className="text-slate-400 text-sm">{members.length}/4 Members Added</span>
            </div>
            
            <div className="space-y-8">
              {members.map((member, index) => (
                <div key={index} className="bg-slate-950/50 p-6 rounded-xl border border-white/5 relative">
                  <div className="absolute top-4 right-4">
                    {members.length > 1 && (
                      <button onClick={() => removeMember(index)} className="text-red-400 hover:text-red-300 text-sm font-medium">Remove</button>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-brand-secondary mb-4">Member {index + 1}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Full Name</label>
                      <input type="text" value={member.name} onChange={e => updateMember(index, 'name', e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-brand-secondary outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Institute</label>
                      <input type="text" value={member.institute} onChange={e => updateMember(index, 'institute', e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-brand-secondary outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Degree</label>
                      <input type="text" value={member.degree} onChange={e => updateMember(index, 'degree', e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-brand-secondary outline-none text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">Enrollment No.</label>
                      <input type="text" value={member.enrollment} onChange={e => updateMember(index, 'enrollment', e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:border-brand-secondary outline-none text-sm" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {members.length < 4 && (
              <button onClick={addMember} className="w-full py-4 border-2 border-dashed border-slate-700 rounded-xl text-slate-400 hover:text-white hover:border-slate-500 transition-colors font-medium flex items-center justify-center gap-2">
                + Add Another Member
              </button>
            )}

            <div className="flex justify-between pt-6 border-t border-white/10">
              <button onClick={() => setStep(2)} className="text-slate-400 hover:text-white px-6 py-3 font-medium transition-colors">Back</button>
              <button 
                onClick={() => setStep(4)}
                className="bg-brand-secondary text-slate-900 px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors flex items-center gap-2"
              >
                Proceed to Payment <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center py-8">
            <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard size={40} className="text-brand-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Registration Fee</h2>
            <p className="text-slate-400 mb-8">Complete your payment of ₹500 to finalize registration.</p>
            
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 max-w-sm mx-auto mb-8 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-slate-400">Team Size</span>
                <span className="text-white font-medium">{members.length + 1} Members</span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b border-slate-800">
                <span className="text-slate-400">Registration Fee</span>
                <span className="text-white font-medium">₹500.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span className="text-white">Total</span>
                <span className="text-brand-secondary">₹500.00</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button onClick={() => setStep(3)} className="text-slate-400 hover:text-white px-6 py-3 font-medium transition-colors">Back</button>
              <button 
                onClick={handlePayment}
                disabled={loading}
                className="bg-brand-secondary text-slate-900 px-10 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 flex items-center gap-2 text-lg shadow-lg shadow-brand-secondary/20"
              >
                {loading ? <Loader2 className="animate-spin" size={24} /> : "Pay Now (Dummy)"}
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 5: Success */}
        {step === 5 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
            <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Registration Successful!</h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto mb-8">
              Welcome to BGI Hackathon 2026! We have sent a confirmation email to <strong className="text-white">{leader.email}</strong> with the link to submit your Ideation PPT.
            </p>
            <div className="bg-slate-950/50 border border-brand-secondary/30 p-6 rounded-xl inline-block text-left">
              <h3 className="text-brand-secondary font-bold mb-2">Next Steps:</h3>
              <ol className="list-decimal list-inside text-slate-300 space-y-2">
                <li>Check your email for the confirmation.</li>
                <li>Prepare your Ideation PPT based on the guidelines.</li>
                <li>Submit the PPT using the link provided in the email.</li>
              </ol>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
