---
layout: page
title: projects
permalink: /projects/
description: ""
nav: true
nav_order: 2
display_categories: []
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <section class="cs-featured" id="case-studies" style="margin-top:0">
    <h2 class="category">case studies</h2>
    <p class="cs-card__l" style="margin:.2rem 0 1.1rem">In-depth write-ups of how I found the problem, made the calls and measured the outcome. Each one is also available as a PDF.</p>
    {% include case_study/cards.liquid %}
  </section>

  <h2 class="category cs-more-head" id="more-projects">more projects</h2>
  {% assign more = site.projects | where_exp: "p", "p.case_study == nil" | where_exp: "p", "p.hidden != true" | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2 justify-content-center">
    {% for project in more %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
