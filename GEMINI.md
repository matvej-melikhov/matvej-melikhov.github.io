# Multilingual Content Workflow

When the user asks to add new content (posts, articles, meetups, etc.) and provides it in Russian:
1. Automatically translate the provided Russian content into English.
2. Create **two versions** of the content file:
   - The Russian version in the appropriate language subdirectory or with the appropriate language prefix/suffix (e.g., `content/ru/...`).
   - The English version in the corresponding English location (e.g., `content/en/...` or default `content/...` depending on Hugo i18n setup).
3. Ensure that the frontmatter for both files is populated correctly, translating any metadata (titles, descriptions, tags) into the target language.
4. Do NOT wait for explicit permission to create the English version; this should happen automatically whenever Russian content is added.
