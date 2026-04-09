

## Plan: Add LinkedIn URLs to all team members

The current code already has the LinkedIn popup animation working for Zahida, with the dismiss fix ready. This plan adds LinkedIn URLs to every remaining team member and ensures the overlay dismiss works correctly.

### Changes (single file: `src/pages/Team.tsx`)

**1. Add LinkedIn URLs to all members:**

Leadership:
- Muhymin Chowdhury → `https://www.linkedin.com/in/muhymin-chowdhury/`
- A.K. Faizan Salam → `https://www.linkedin.com/in/faizan-salam-ak/`
- Sarah Iqbal → `https://www.linkedin.com/in/sarah-iqbal-5962b641/`
- Hridoy Islam → `https://www.linkedin.com/in/hridoyislam/`

Core Team:
- M. Samiul Haque → `https://www.linkedin.com/in/m-samiul-haque/`
- Saddam Khan Sumit → `https://www.linkedin.com/in/sksumit/`
- Lamia Hafiz → `https://www.linkedin.com/in/lamia-hafiz-4a3a303b9/`
- Kashfia Mahmud → `https://www.linkedin.com/in/kashfiamahmud-mfin/`
- Ahmed Jawad Yusuf → `https://www.linkedin.com/in/ahmed-jyusuf/`

**2. Fix overlay dismiss:**

Change the overlay's `onClick` so clicking the background dismisses the popup (returns to portrait), while clicking the LinkedIn button itself opens the link without dismissing.

