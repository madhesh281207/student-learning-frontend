import { Link } from 'react-router-dom'

import ActivityHeatmap from '../components/progress/ActivityHeatmap'
import DifficultyProgress from '../components/progress/DifficultyProgress'
import ProgressCompletion from '../components/progress/ProgressCompletion'
import ProgressMilestones from '../components/progress/ProgressMilestones'
import ProgressSummary from '../components/progress/ProgressSummary'
import StreakCard from '../components/progress/StreakCard'
import TopicProgress from '../components/progress/TopicProgress'
import WeeklyProgress from '../components/progress/WeeklyProgress'
import { progressData } from '../data/progress'

function Progress() {
  const { summary, difficulty, topics, activity, weekly, milestones } = progressData

  return (
    <main className="min-h-full bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center gap-2 text-sm"><Link to="/dashboard" className="font-medium text-slate-500 transition hover:text-slate-900">Dashboard</Link><span className="text-slate-300">/</span><span className="font-medium text-slate-700">Progress</span></div>
        <section className="mb-8"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Progress</h1><p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">Understand how your problem-solving skills are developing across problems, difficulty levels, and topics.</p></div><Link to="/practice" className="inline-flex w-fit items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">Continue practicing<span className="ml-2">→</span></Link></div></section>
        <div className="mb-8"><ProgressSummary summary={summary} /></div>
        <div className="mb-8"><ProgressCompletion summary={summary} /></div>
        <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2"><DifficultyProgress data={difficulty} /><StreakCard summary={summary} /></section>
        <div className="mb-8"><ActivityHeatmap activity={activity} /></div>
        <div className="mb-8"><WeeklyProgress weekly={weekly} /></div>
        <div className="mb-8"><TopicProgress topics={topics} /></div>
        <div className="mb-8"><ProgressMilestones milestones={milestones} /></div>
        <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"><div className="mx-auto max-w-2xl"><p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Keep going</p><h2 className="mt-2 text-2xl font-bold text-slate-900">Turn your progress into consistency</h2><p className="mt-3 text-sm leading-6 text-slate-500">Choose another problem and keep building your problem-solving skills.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/practice" className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">Browse problems</Link><Link to="/submissions" className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">View submissions</Link></div></div></section>
      </div>
    </main>
  )
}

export default Progress
