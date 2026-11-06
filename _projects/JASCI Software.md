---
layout: page
title: "JASCI: adding human feedback to warehouse robotics"
description: "Diagnosed a warehouse-software scale-up and proposed adding human feedback to its robotics AI."
img: assets/img/JASCI_Software.png
importance: 3
category: work
giscus_comments: false
---
<p class="proj-glance"><span><b>Role</b> Analyst and change-plan author</span><span><b>When</b> Carnegie Mellon, management diagnostic</span><span><b>Team</b> Individual project</span></p>

JASCI Software sells warehouse management systems to retailers, distributors and e-commerce companies, competing with Manhattan Associates, Blue Yonder, Oracle and SAP. It was founded in 2015, has been growing quickly, and runs on a matrix structure where each customer project pulls engineers from several departments. For this course project I studied how the company really works, then proposed a change.

## What I found

The matrix structure suits a company that does customer implementations and product work at the same time, but it strains the scarce people. Cloud engineers, in particular, are stretched across several competing projects. The culture is engineering-strong and encourages risk-taking, which is good for people with ambitious technical ideas and harder on people from more structured backgrounds who need onboarding and mentorship. Employee reviews on Glassdoor said the same thing from the inside: fast, supportive and full of learning for people who fit, and sink-or-swim for those who don't.

## What I proposed

JASCI already has an autonomous AI product, ALIDA, that distributes work to robots without custom integrations. The recurring cost is that every customer has different workflows and hardware, so each deployment needed expensive custom software.

My proposal was to add reinforcement learning from human feedback (RLHF) to the robotics module. Users would occasionally rate how well a robot handled a task, in optional screens inside the product, and those ratings would train a model specific to that customer. That removes much of the custom development, improves the experience for each customer, and makes it quicker to onboard new robotics partners.

## How I'd get it done

- **Team:** the CTO, a workflow solutions architect, two software engineers and a project manager (my role), all trained in machine learning
- **Effort:** treated as R&D, 18 to 24 months and about 4,800 hours
- **Sequence:** build urgency with the COO, CEO and CTO using the cost savings, assemble the people who can broker support across departments, ship a minimum viable product early as a short-term win, then build the approach into how the company measures performance and talks to customers

## What I took from it

Technology proposals fail in the organization more often than in the code. The most useful part of this project was working out who would have to say yes, and in what order.

## The report

<iframe src="{{ '/assets/pdf/JASCI_Software_Analysis.pdf' | relative_url }}" width="100%" height="600px" style="border: none;"></iframe>
