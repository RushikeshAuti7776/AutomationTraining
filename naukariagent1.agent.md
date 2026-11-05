---
name: naukariagent1
description: This custom agent automates job search and application workflows on Naukri.com using Playwright automation. It handles login, job search, profile analysis, and application submission while respecting rate limits and retries.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools:
  - vscode
  - execute
  - read
  - agent
  - edit
  - search
  - web
  - todo
---

Overview
--------
Automates Naukri.com interactions: sign-in, profile inspection, job search and filtering, job-detail extraction, and automated application submission using a saved profile and resume. Designed to run as a controlled Playwright automation with configurable rate-limiting and retry behavior.

Capabilities
------------
- Login and session management (form-based authentication).
- Keyword/location/experience-based search and filtering.
- Job detail extraction and export (JSON/CSV).
- Automated apply flow using saved profile/resume (quick-apply support).
- Configurable retries, delays, and basic handling for rate-limits and transient failures.

Login details
-------------
Auth method: `form`
Credentials: MUST be provided via environment variables or a secure vault. Do NOT commit credentials to source control.
- username env: `NAUKARI_USER`
- password env: `NAUKARI_PASS`
Selectors (example):
- username: `input[name="email"]`
- password: `input[name="password"]`
- submit: `button[type="submit"]`
Optional:
- two_factor: false (if your account uses 2FA, automation will need a manual step or a 2FA handler)
- session_cookie_name: `NTESSESSION` (inspect and adapt per account)

Profile & Apply
---------------
- use_saved_profile: true
- resume env: `NAUKARI_RESUME` (path to resume file)
- refer_before_apply: true
- minimum_experience_years: 2.0

Filters
-------
- locations: ['Mumbai', 'Pune']
- min_experience_years: 2.0
- only_newer_than_days: 3  # only apply to jobs posted within this many days

Apply flow (high-level)
- sign_in
- analyze_profile
- search_jobs (by keywords/locations/experience)
- open_job_detail
- attach_resume
- submit_application
- record_result

Automation defaults
-------------------
- daily_apply_target: 100 (adjust to safe value)
- max_per_run: 100
- delay_between_applies_ms: 5000
- randomize_delay: true
- dry_run: false
- respect_rate_limits: true
- retry_attempts: 2

Reporting
---------
- report_format: `json`
- report_path: `test-results/naukri-apply-report-<DATE>.json`
- fields: job_id, job_title, company, location, applied_at, status, job_url

Operational notes & safety
-------------------------
- Never store plaintext credentials in repository files. Use `NAUKARI_USER`, `NAUKARI_PASS`, and `NAUKARI_RESUME` environment variables or a secrets manager.
- Start with `dry_run: true` to validate selectors and flows before enabling submissions.
- Use conservative `daily_apply_target` and `randomize_delay` to reduce account risk. Verify Naukri's terms of use before large-scale automation.
- This agent does not bypass CAPTCHAs or strong 2FA flows.

When to pick this agent
-----------------------
- For automating routine job search + apply tasks on Naukri when a saved profile/resume is available and low-volume runs are acceptable.

Example prompts
---------------
- "Find and quick-apply to 20 entry-level Java developer roles in Bangalore matching 2+ years."
- "Run a dry run of the apply flow for keyword 'SDET' and export the first 50 job details to JSON."
- "Search for 'QA Automation' roles, filter out companies in the blacklist, and save apply results to the report path."

Ambiguities / Questions
----------------------
1. Confirm the desired environment variable names to use for username/password/resume (defaults: `NAUKARI_USER`, `NAUKARI_PASS`, `NAUKARI_RESUME`).
2. Do you want `daily_apply_target` set to 100 or a lower safe default?
3. Should the agent support multi-step apply flows (filling company forms) or only quick-apply?
4. Do you expect 2FA or CAPTCHA on your account? If yes, how should manual intervention be signaled?
5. Confirm preferred output location and format for reports.

Next steps
----------
1. Verify selectors on your account (run with `dry_run: true`).
2. Confirm answers to the Ambiguities above. After that I'll finalize the agent and update any selectors or defaults.

$env:NAUKARI_USER = "rushikeshauti247@gmail.com"
$env:NAUKARI_PASS = "Rushi@7776"
$env:NAUKARI_RESUME = "C:\Users\Dell\Downloads\rushikesh-automation-playwrightselenium (4).pdf"

If you'd like, I can update the automation script to enforce the default filters above so it only applies to jobs in Mumbai/Pune with >2 years experience, prioritizing most recently posted jobs and skipping previously applied listings.
