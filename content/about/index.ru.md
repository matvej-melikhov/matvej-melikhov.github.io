---
title: "Обо мне"
type: "page"
hidemeta: true
---

<div class="about-container">
<div class="about-header">
<img src="/personal-site/images/profile.jpg" alt="Матвей Мелихов" class="profile-pic">
<div class="about-intro">
<p>Больше 3-х лет в сфере ML/DS. Специализируюсь на агентских LLM-системах и задачах ранжирования / рекомендаций. Хочу развиваться в сторону построения production-grade агентских пайплайнов и LLM-инфраструктуры.</p>

<button class="resume-button" onclick="document.getElementById('resume-modal').classList.add('active'); document.body.classList.add('modal-open')">
<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
Смотреть резюме
</button>
</div>
</div>

<h2>Опыт работы</h2>
<div class="experience-timeline">

<div class="timeline-item">
<div class="timeline-date">Февраль 2025 — н. в.</div>
<div class="timeline-title">Senior ML Engineer</div>
<div class="timeline-company">Wildberries (Horizontal ML Team)</div>
<p>Лид разработки голосового ИИ-робота для массового найма (ASR, NLP, TTS) и системы персонального ранжирования «стимулов» в корзине (CR +0.9%, GMV +0.2%). Разработал сервис LLM-as-a-Judge и построил RAG-систему техподдержки, сократившую нагрузку на операторов в 6 раз.</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Октябрь 2024 — Декабрь 2024</div>
<div class="timeline-title">ML Engineer</div>
<div class="timeline-company">Купер (ex. СберМаркет)</div>
<p>Оптимизировал пайплайн обучения модели ранжирования в поиске (ускорение в 2.4 раза). Внедрил автоматический майнинг синонимов, что дало +9% исправленных поисковых запросов.</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Август 2023 — Октябрь 2024</div>
<div class="timeline-title">ML Engineer</div>
<div class="timeline-company">Jusan Bank</div>
<p>Разработал двухэтапный пайплайн спеллчекера, снизивший долю пустых выдач (ERR) на 19%. Внедрил векторный поиск (recall +21%) и улучшил модель кредитного скоринга за счет перехода на бустинг с интерпретацией SHAP.</p>
</div>

<div class="timeline-item">
<div class="timeline-date">Ноябрь 2022 — Февраль 2024</div>
<div class="timeline-title">Data Science Researcher</div>
<div class="timeline-company">VibeLab (ex. ИМЦ ЛЭТИ)</div>
<p>Разрабатывал RAG-систему для абитуриентов и модель прогнозирования заполненности бюджетных мест для приёмной кампании университета.</p>
</div>

</div>
</div>

<!-- Modal -->
<div id="resume-modal" class="modal-overlay" onclick="if(event.target === this) this.classList.remove('active'); document.body.classList.remove('modal-open')">
<div class="modal-content">
<button class="modal-close" onclick="document.getElementById('resume-modal').classList.remove('active'); document.body.classList.remove('modal-open')">✖</button>
<iframe src="/personal-site/resume_ru.pdf#view=FitH" width="100%" height="100%" frameborder="0"></iframe>
</div>
</div>
