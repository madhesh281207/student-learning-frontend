import { Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from '../components/layout/AppLayout'
import AuthLayout from '../layouts/AuthLayout'
import CodingWorkspace from '../pages/CodingWorkspace/CodingWorkspace'
import Dashboard from '../pages/Dashboard'
import Leaderboard from '../pages/Leaderboard'
import Practice from '../pages/Practice'
import ProblemDetails from '../pages/ProblemDetails'
import Problems from '../pages/Problems'
import Profile from '../pages/Profile'
import Progress from '../pages/Progress'
import Settings from '../pages/Settings'
import Submissions from '../pages/Submissions'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:problemId" element={<ProblemDetails />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/:problemId" element={<ProblemDetails />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default AppRoutes
