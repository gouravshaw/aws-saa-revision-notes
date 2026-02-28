## AWS SAA Revision Cards

This is a small, static web app to help you quickly revise for the **AWS Certified Solutions Architect – Associate** exam using your own high‑yield notes.

### What this app does

- **Section-based revision:**  
  Five main sections, matching your notes:
  - Section 3 – Getting Started with AWS
  - Section 4 – IAM & AWS CLI
  - Section 5 – EC2 Fundamentals
  - Section 6 – EC2 (Solutions Architect Level)
  - Section 7 – EC2 Instance Storage

- **Card UI for fast daily review:**
  - The home screen shows **one card per section**.
  - Clicking a card opens a **single large card** with all sub‑topics for that section (e.g., Regions & AZ, IAM Policy Logic, Placement Groups, EBS vs Snapshots, etc.).
  - A **“← Back to topics”** button (or tapping outside the card) closes it and returns you to the section list.

- **Mobile friendly:**
  - Works well on phones (single‑column layout, large tap targets).
  - Supports notched devices via `viewport-fit=cover` and safe‑area padding.

### Files

- `index.html` – Main page with:
  - Section cards on the home screen.
  - Hidden card bodies containing all notes for each section.
  - The overlay used to show a single large card when a section is opened.
- `styles.css` – Styles for:
  - Dark theme, typography, spacing.
  - Card grid and section cards.
  - Exam triggers and highlighted rules.
  - Mobile responsiveness and the overlay “detail” card.
- `app.js` – Small script that:
  - Attaches click/keyboard handlers to each section card.
  - Copies the card’s content into the overlay for viewing.
  - Handles closing the overlay via the back button, backdrop, or Escape key.

### Running locally

This is a pure static site – no build step is required.

From the project directory, run:

```bash
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

### How to use for daily revision

1. Open the site in your browser (desktop or mobile).  
2. On the home screen, pick a **section card** you want to revise (e.g., “Section 4 – IAM & AWS CLI”).  
3. Read through the sub‑topics in the large card (exam triggers and keywords are visually highlighted).  
4. Click **“← Back to topics”** to return to the list and move to the next section.  
5. Repeat daily until each section feels instant.

