# Development Process - Sprint 01

## 1. Project Overview
This portfolio was developed as a React-based application using Vite. It features a tabbed interface to display technical capabilities and professional internship experience.

## 2. AI Usage & Transparency
* **AI Tool:** Gemini AI was used to assist in the initial project structure and CSS layout logic.
* **Audit Correction:** Following the audit feedback, all placeholder buzzwords (like "Quantum Logic") were removed and replaced with actual technical skills implemented during the sprint.

## 3. Troubleshooting Log (Feb 6, 2026)
* **Issue:** The Git repository entered a 'rebase' state, which blocked new code from being pushed to the live site.
* **Fix:** Successfully executed `git rebase --abort` to restore the repository to a clean state.
* **Issue:** GitHub Actions builds were not triggering for new commits.
* **Fix:** Performed a forced push (`git push origin main --force`) to reset the deployment trigger and verified the build status in the Actions tab.
* **Issue:** Website appeared as a blank screen after deployment.
* **Fix:** Corrected the file paths in `App.jsx` and ensured all dependencies were properly included in the build.

## 4. Skills Demonstrated
* Frontend Development (React.js, JavaScript ES6)
* Responsive Design (CSS Grid/Flexbox)
* Version Control (Git/GitHub)
* Technical Documentation