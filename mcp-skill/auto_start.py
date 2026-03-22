"""
Auto-start script called by the SessionStart hook in .claude/settings.local.json.
Posts a new session to the Nexus backend when Claude Code opens.
"""

import json
import os
import uuid
import subprocess
from datetime import datetime, timezone
from pathlib import Path

import httpx

NEXUS_API_URL = os.getenv("NEXUS_API_URL", "https://unflattering-elinor-distinctively.ngrok-free.dev").rstrip("/")
DATA_FILE = Path(__file__).parent / "sessions.json"


def get_git_info():
    try:
        repo = subprocess.check_output(
            ["git", "remote", "get-url", "origin"], stderr=subprocess.DEVNULL
        ).decode().strip()
    except Exception:
        repo = "unknown"
    try:
        branch = subprocess.check_output(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"], stderr=subprocess.DEVNULL
        ).decode().strip()
    except Exception:
        branch = "unknown"
    return repo, branch


def main():
    repo, branch = get_git_info()
    session_id = f"sess_{uuid.uuid4().hex[:8]}"
    started_at = datetime.now(timezone.utc).isoformat()

    session = {
        "id": session_id,
        "repo": repo,
        "branch": branch,
        "agent": "claude-code",
        "engineer": os.getenv("USER", "unknown"),
        "ticket_id": None,
        "started_at": started_at,
        "ended_at": None,
        "pr_id": None,
        "decision_count": 0,
        "pr_milestones": [],
        "metadata": {},
    }

    # Save locally
    sessions = []
    if DATA_FILE.exists():
        try:
            data = json.loads(DATA_FILE.read_text())
            sessions = data if isinstance(data, list) else []
        except Exception:
            sessions = []
    sessions.append(session)
    DATA_FILE.write_text(json.dumps(sessions, indent=2))

    # Post to backend
    if NEXUS_API_URL:
        try:
            r = httpx.post(
                f"{NEXUS_API_URL}/sessions",
                json=session,
                headers={"ngrok-skip-browser-warning": "true"},
                timeout=5,
            )
            print(f"Nexus session started: {session_id} (status {r.status_code})")
        except Exception as e:
            print(f"Nexus session started locally: {session_id} (backend offline: {e})")
    else:
        print(f"Nexus session started locally: {session_id}")


if __name__ == "__main__":
    main()
