# 天津大学数学学院本科生指北

A Chinese-language study guide for mathematics undergraduates at Tianjin University: programme overview, professional courses, choosing a major direction, and notes on core courses.

**Status:** content written July 2023 – April 2024 (mostly about the 2021 cohort); maintained occasionally.

The repository began as a fork of James Willett's [mkdocs-material-youtube-tutorial](https://github.com/james-willett/mkdocs-material-youtube-tutorial) and is built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/); the guide's content is my own, with contributions listed on the contributors page. Course files linked from the guide live in [my-math-notes](https://github.com/zhouyi-xiaoxiao/my-math-notes).

**Site:** https://zhouyixiaoxiao.info/

## Run locally

```bash
pip install "mkdocs-material>=9.7,<10" pillow cairosvg
mkdocs serve
```

Then open `http://127.0.0.1:8000`. `mkdocs build` writes the static site to `site/`.

## Layout

- `docs/` — Markdown pages (foreword, professional courses, majors, contributor notes)
- `mkdocs.yml` — site configuration and theme
- `docs/stylesheets/guide.css`, `docs/assets/`, `overrides/` — the site's look: paper and ink, a compass mark

## License

See [LICENSE](LICENSE).
