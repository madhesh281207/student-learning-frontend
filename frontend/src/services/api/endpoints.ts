export const apiEndpoints = {
  auth: {
    login: 'AUTH_LOGIN',
    register: 'AUTH_REGISTER',
    currentUser: 'AUTH_CURRENT_USER',
  },
  problems: {
    list: 'PROBLEMS_LIST',
    detail: 'PROBLEM_DETAIL',
  },
  submissions: {
    list: 'SUBMISSIONS_LIST',
    detail: 'SUBMISSION_DETAIL',
  },
  progress: {
    overview: 'PROGRESS_OVERVIEW',
  },
  execution: {
    run: 'EXECUTION_RUN',
    submit: 'EXECUTION_SUBMIT',
  },
} as const

export default apiEndpoints
