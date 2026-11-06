---
layout: page
permalink: /repositories/
title: repositories
description: #Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.
nav: true
nav_order: 6
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repo-user-grid">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% if site.repo_trophies.enabled %}

---

{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repo-grid">
  {% if site.data.github_cache and site.data.github_cache.repos.size > 0 %}
    {% for repo in site.data.github_cache.repos %}
      {% if site.data.repositories.github_repos contains repo.full_name %}
        {% include repository/repo_cached.liquid repo=repo %}
      {% endif %}
    {% endfor %}
  {% else %}
    {% for repo in site.data.repositories.github_repos %}
      {% include repository/repo.liquid repository=repo %}
    {% endfor %}
  {% endif %}
</div>
{% endif %}

<script src="{{ '/assets/js/github-repos.js' | relative_url }}" defer></script>
