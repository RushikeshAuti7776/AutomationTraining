---
name: jobapply-agent
description: This custom agent directly apply to jobs on naukari.com. It handles login, job search, profile analysis, and application submission while respecting rate limits and retries.
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: [vscode/extensions, vscode/installExtension, vscode/memory, vscode/newWorkspace, vscode/resolveMemoryFileUri, vscode/runCommand, vscode/vscodeAPI, vscode/askQuestions, execute/getTerminalOutput, execute/killTerminal, execute/sendToTerminal, execute/runTask, execute/createAndRunTask, execute/runInTerminal, execute/runNotebookCell, execute/runTests, execute/testFailure, read/terminalSelection, read/terminalLastCommand, read/getTaskOutput, read/getNotebookSummary, read/problems, read/readFile, read/viewImage, read/readNotebookCellOutput, agent/runSubagent, edit/createDirectory, edit/createFile, edit/createJupyterNotebook, edit/editFiles, edit/editNotebook, edit/rename, search/codebase, search/fileSearch, search/listDirectory, search/textSearch, search/usages, web/fetch, web/githubRepo, web/githubTextSearch, todo] 
 # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

naukari job:
	title: Naukari Job Automation
	overview: Automates job search and application workflows on Naukri.com, including login, search, filtering, job-detail extraction, and apply actions.
	features:
		- Login and session management
		- Keyword/location/experience-based search and filtering
		- Job detail extraction and export (JSON/CSV)
		- Automated apply flow using saved profile and resume
		- Configurable retries and simple handling for rate-limits or transient failures
	login_details:
		# Use environment variable names here; DO NOT store plaintext credentials in agent files.
		username_env: NAUKARI_USER
		password_env: NAUKARI_PASS
		selectors:
			username: 'input[name="email"]'
			password: 'input[name="password"]'
			submit: 'button[type="submit"]'
		optional:
			-two_factor: false
			-session_cookie_name: 'NTESSESSION'
		notes: Store credentials in environment variables or a secure vault; do not commit secrets to source control.

	profile:
		experience_years: 2.7
		use_saved_profile: true
		resume_env: NAUKARI_RESUME
		refer_before_apply: true
		selectors:
			view_profile: 'a[href*="/myprofile"]'
			apply_from_profile_button: 'button.apply-from-profile'

	automation:
		daily_apply_target: 100
		max_per_run: 100
		delay_between_applies_ms: 5000
		randomize_delay: true
		dry_run: false
		respect_rate_limits: true
		retry_attempts: 2
		notes: |
			- The automation will sign in, open the user's profile for reference, and attempt to apply to jobs up to `daily_apply_target`.
			- Use environment variables `NAUKARI_USER`, `NAUKARI_PASS`, and `NAUKARI_RESUME` to supply secrets and resume path.
			- Stagger applications and enable `randomize_delay` to reduce risk of account restrictions. Review Naukri's terms before large-scale automation.


	apply_flow:
		refer_profile_before_apply: true
		resume_env: NAUKARI_RESUME
		apply_method: quick_apply
		criteria:
			min_experience: 2.0
			keywords: []
			locations: []
			company_blacklist: []
			company_whitelist: []
		actions:
			- sign_in
			- analyze_profile
			- search_jobs
			- open_job_detail
			- attach_resume
			- submit_application
			- record_result

	reporting:
		report_format: json
		report_path: test-results/naukri-apply-report-<DATE>.json
		fields:
			- job_id
			- job_title
			- company
			- location
			- applied_at
			- status
			- job_url




<!-- Tip: Use /create-agent in chat to generate content with agent assistance -->

Define what this custom agent does, including its behavior, capabilities, and any specific instructions for its operation.