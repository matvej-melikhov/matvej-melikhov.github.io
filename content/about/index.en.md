---
title: "About Me"
type: "page"
hidemeta: true
---

<div class="about-container">
<div class="about-header">
<img src="/personal-site/images/profile.jpg" alt="Matvej Melikhov" class="profile-pic">
<div class="about-intro">
<p>Over 3 years of experience in ML/DS. I specialize in agentic LLM systems and ranking/recommendation tasks. I aim to grow towards building production-grade agentic pipelines and LLM infrastructure.</p>

<button class="resume-button" onclick="document.getElementById('resume-modal').classList.add('active'); document.body.classList.add('modal-open')">
<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
View Resume
</button>
</div>
</div>

<h2>Experience Overview</h2>
<div class="experience-timeline">

<div class="timeline-item">
<div class="timeline-date">Feb 2025 — Present</div>
<div class="timeline-title">Senior ML Engineer</div>
<div class="timeline-company">Wildberries (Horizontal ML Team)</div>
<p>Leading the Voice AI bot project for mass-hiring (ASR, NLP, TTS) and personalized ranking for cart incentives (CR +0.9%, GMV +0.2%). Built an LLM-as-a-Judge evaluation service and a RAG-based customer support system that reduced operator load by 6x.</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Oct 2024 — Dec 2024</div>
<div class="timeline-title">ML Engineer</div>
<div class="timeline-company">Kuper (ex. SberMarket)</div>
<p>Optimized the search ranking model's training pipeline (2.4x speedup) through automated feature engineering. Deployed a synonym-dictionary mining pipeline that improved query correction by +9%.</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Aug 2023 — Oct 2024</div>
<div class="timeline-title">ML Engineer</div>
<div class="timeline-company">Jusan Bank</div>
<p>Developed a two-stage spellchecking pipeline, reducing the empty-result rate by 19%. Implemented vector search (recall +21%) and improved the core credit-scoring model using SHAP-interpreted boosting (Gini +8%).</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Nov 2022 — Feb 2024</div>
<div class="timeline-title">Data Science Researcher</div>
<div class="timeline-company">VibeLab (ex. ETU Research Center)</div>
<p>Developed RAG systems for prospective university students and predictive models forecasting budget-seat fill rates for the admissions campaign.</p>
</div>

</div>
</div>

<!-- Modal -->
<div id="resume-modal" class="modal-overlay" onclick="if(event.target === this) this.classList.remove('active'); document.body.classList.remove('modal-open')">
<div class="modal-content">
<button class="modal-close" onclick="document.getElementById('resume-modal').classList.remove('active'); document.body.classList.remove('modal-open')">✖</button>
<iframe src="/personal-site/resume_en.pdf#view=FitH" width="100%" height="100%" frameborder="0"></iframe>
</div>
</div>
