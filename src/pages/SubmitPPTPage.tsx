import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Link as LinkIcon, FileText, CheckCircle2, AlertCircle, Loader2, ChevronRight } from 'lucide-react';

export function SubmitPPTPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    teamName: '',
    pptLink: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Submission Successful!
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-8"
        >
          Your Ideation PPT has been received. Our evaluation panel will review your submission and get back to you soon.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.3 }}
          onClick={() => window.location.href = '/'}
          className="bg-slate-800 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-slate-700 transition-colors"
        >
          Return to Home
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
          Submit <span className="text-brand-secondary">Ideation PPT</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Upload your presentation or provide a link to your slide deck. Make sure you follow the guidelines before submitting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Guidelines Panel */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 border border-brand-secondary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-brand-secondary" size={28} />
              <h2 className="text-2xl font-bold text-white">PPT Guidelines</h2>
            </div>
            
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                <span><strong>Maximum 10 slides</strong> including the title and thank you slides.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                <span>Must clearly state the <strong>Problem Statement</strong> and your proposed <strong>Solution</strong>.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                <span>Include a slide on the <strong>Technology Stack</strong> you plan to use.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                <span>Highlight the <strong>Innovation/Uniqueness</strong> of your idea.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={18} />
                <span>If providing a Google Drive link, ensure the access is set to <strong>"Anyone with the link can view"</strong>.</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 items-start">
              <AlertCircle className="text-blue-400 shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-blue-200">
                Submissions are final. You cannot edit your submission once it has been uploaded. Please double-check your presentation.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="lg:col-span-3">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Team Leader Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors" 
                    placeholder="Registered email address" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Team Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.teamName}
                    onChange={(e) => setFormData({...formData, teamName: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:border-brand-secondary outline-none transition-colors" 
                    placeholder="e.g. Tech Titans" 
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <label className="block text-sm font-medium text-slate-400 mb-4">Provide Presentation Link</label>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <LinkIcon className="text-slate-500" size={20} />
                  </div>
                  <input 
                    type="url" 
                    required
                    value={formData.pptLink}
                    onChange={(e) => setFormData({...formData, pptLink: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-12 pr-4 py-4 text-white focus:border-brand-secondary outline-none transition-colors" 
                    placeholder="https://docs.google.com/presentation/d/..." 
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Paste a link to your Google Slides, OneDrive, or Canva presentation. Ensure it is publicly viewable.
                </p>
              </div>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-900 text-slate-500">OR UPLOAD FILE</span>
                </div>
              </div>

              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-brand-secondary/50 transition-colors cursor-pointer group bg-slate-950/50">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="text-brand-secondary" size={28} />
                </div>
                <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-slate-500 text-sm">PDF or PPTX (Max 10MB)</p>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={loading || !formData.email || !formData.teamName || !formData.pptLink}
                  className="w-full bg-brand-secondary text-slate-900 px-8 py-4 rounded-lg font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg shadow-brand-secondary/20"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={24} /> Submitting...</>
                  ) : (
                    <><Upload size={20} /> Submit Presentation</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
