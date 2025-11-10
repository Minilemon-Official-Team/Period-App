"use client";

export default function DashboardContent() {
  return (
    <main className="flex-1 p-6 lg:p-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-text-light text-3xl font-bold leading-tight">Good Morning, Elena</h1>
            <p className="text-text-muted-light text-base font-normal leading-normal">Here is your cycle summary for today.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card-light p-6 rounded-xl border border-border-light">
              <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
                <div className="relative w-40 h-40 shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="stroke-current text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                    <path className="stroke-current text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="42, 100" strokeLinecap="round" strokeWidth="3"></path>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <p className="text-text-muted-light text-sm">Day</p>
                    <p className="text-text-light text-4xl font-bold">12</p>
                    <p className="text-text-muted-light text-sm">of 28</p>
                  </div>
                </div>
                <div className="flex w-full grow flex-col items-start justify-center gap-1">
                  <p className="text-text-muted-light text-xs font-medium uppercase tracking-wider">CURRENT CYCLE</p>
                  <p className="text-text-light text-2xl font-bold leading-tight">You're in your Follicular Phase</p>
                  <p className="text-text-muted-light text-base font-normal leading-normal max-w-md">Energy levels may be rising. It's a great time for creativity and planning.</p>
                </div>
              </div>
            </div>

            <div className="bg-card-light p-6 rounded-xl border border-border-light">
              <h2 className="text-text-light text-lg font-bold leading-tight mb-4">Recent Symptoms</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 rounded-lg p-3 bg-background-light">
                  <div className="flex items-center justify-center size-8 rounded-full bg-primary-light text-primary">
                    <span className="material-symbols-outlined text-base">sentiment_very_dissatisfied</span>
                  </div>
                  <p className="text-sm font-medium text-text-light">Cramps</p>
                </div>
                {/* Tambahkan symptom cards lainnya */}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Upcoming Predictions */}
            <div className="bg-card-light p-6 rounded-xl border border-border-light">
              <h2 className="text-text-light text-lg font-bold leading-tight mb-4">Upcoming Predictions</h2>
              <div className="flex flex-col gap-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 bg-background-light">
                  <p className="text-sm font-medium text-text-muted-light">Predicted Ovulation</p>
                  <p className="text-text-light tracking-light text-2xl font-bold leading-tight">in 5 days</p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 bg-background-light">
                  <p className="text-sm font-medium text-text-muted-light">Next Period Starts</p>
                  <p className="text-text-light tracking-light text-2xl font-bold leading-tight">in 17 days</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-light p-6 rounded-xl">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                  <span className="material-symbols-outlined">edit_calendar</span>
                </div>
                <h3 className="text-text-light font-bold">Log Today's Data</h3>
                <p className="text-text-muted-light text-sm">Logging your feelings and symptoms helps improve prediction accuracy.</p>
                <button className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Log Today's Feelings & Symptoms</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
