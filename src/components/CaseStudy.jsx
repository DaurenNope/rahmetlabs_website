export default function CaseStudy() {
  return (
    <section className="section bg-neutral-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-50 mb-6">
            Real Results for
            <span className="block text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Discover how we transformed challenges into opportunities for our clients
          </p>
        </div>

        {/* Case Study 1 */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden">
            {/* Case Study Header */}
            <div className="p-8 border-b border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-50">E-commerce Platform Automation</h3>
                    <p className="text-neutral-400">Retail Industry | 500+ Employees</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-500">+247%</div>
                  <p className="text-sm text-neutral-400">Revenue Growth</p>
                </div>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 divide-x divide-neutral-800">
              {/* Before */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-red-500">Before</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Manual Order Processing</p>
                      <p className="text-sm text-neutral-500">8+ hours daily manual data entry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Inventory Chaos</p>
                      <p className="text-sm text-neutral-500">40% stock discrepancy rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Poor Customer Response</p>
                      <p className="text-sm text-neutral-500">24-48 hour support ticket resolution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Revenue Stagnation</p>
                      <p className="text-sm text-neutral-500">2-3% annual growth</p>
                    </div>
                  </div>
                </div>

                {/* Metrics Before */}
                <div className="mt-6 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-400">$2.1M</div>
                      <p className="text-xs text-neutral-400">Annual Revenue</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-400">68%</div>
                      <p className="text-xs text-neutral-400">Customer Retention</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-green-500">After</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Automated Workflow</p>
                      <p className="text-sm text-neutral-500">15 minutes daily oversight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Real-time Inventory</p>
                      <p className="text-sm text-neutral-500">99.8% accuracy rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">AI-Powered Support</p>
                      <p className="text-sm text-neutral-500">5 minute average response</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-neutral-300 font-medium">Exponential Growth</p>
                      <p className="text-sm text-neutral-500">247% revenue increase</p>
                    </div>
                  </div>
                </div>

                {/* Metrics After */}
                <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">$7.3M</div>
                      <p className="text-xs text-neutral-400">Annual Revenue</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">94%</div>
                      <p className="text-xs text-neutral-400">Customer Retention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-8 bg-neutral-900 border-t border-neutral-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-neutral-300 italic mb-2">
                    "Rahmet Labs didn't just automate our processes—they completely reimagined how we operate. 
                    Our revenue has nearly tripled, and we've reduced operational costs by 40%."
                  </p>
                  <div>
                    <p className="text-neutral-50 font-medium">John Davidson</p>
                    <p className="text-sm text-neutral-400">CEO, TechRetail Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neutral-50 mb-4">Ready for Your Success Story?</h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join dozens of companies that have transformed their operations with our solutions.
          </p>
          <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
