---
layout: page
title: "Loan Default Prediction"
description: "Chose a logistic model (AUC 68.2%, 9.5% false negatives) and a 16% approval cutoff that maximizes expected profit."
img: assets/img/loan_default.png
importance: 2
category: work
giscus_comments: false
---
<style>
.inline-hover-underline { color: white; text-decoration: none; }
.inline-hover-underline:hover { text-decoration: underline; }
</style>

<p class="proj-glance"><span><b>Role</b> Modeler and analyst</span><span><b>When</b> Carnegie Mellon, ETE Analytics</span><span><b>Team</b> Two people</span></p>

A lender makes money on the loans it approves and loses it on the ones that default. This project asked how to decide who to approve, using borrower-level data on about 9,600 loans: FICO score, interest rate, whether the borrower met the lender's credit policy, revolving utilization and similar fields. My teammate and I built the models and then turned the result into a lending rule.

## Choosing what to optimize

The first decision wasn't about the model. It was about what "good" means. A loan that defaults and gets approved anyway costs far more than a good loan that gets declined, so we set the primary goal as keeping the false-negative rate low (defaults we fail to catch), with AUC as the second measure. Because lending is a mature industry where consistent returns matter more than growth, we put profit ahead of market share and return on investment when we had to choose.

## Three models, one decision

We tried a decision tree, a logistic regression and a random forest, and used ROC curves and counterfactual tables to compare them.

- **The tree** looked strong at first. It used only interest rate, credit policy and FICO score, and the credit-policy split alone accounted for 84% of its predictive power. But its counterfactual false-negative rate was about 12%, against about 10% for the logistic model, so the higher AUC was misleading for our actual goal.
- **The revised logistic regression** kept only significant, uncorrelated variables, chosen with stepwise regression. It scored an AUC of 68.2% with a 9.5% false-negative rate.
- **The random forest** came out almost level on false negatives (9.4%) but lower on AUC (66.3%), and it is much harder to explain to an underwriter.

We chose the logistic model: slightly better AUC, almost identical on missed defaults, and a lender can see exactly why a given application was scored the way it was.

## From a score to a decision

A model only gives a probability. The decision is where you draw the line. I built an optimization model that tested approval cutoffs against expected profit and landed on 16%. At that cutoff, expected profit is maximized across the interest rates a lender would realistically charge, and it matches what the market does.

## What I'd do differently

An AUC in the high 60s is modest, and I'd say so to anyone relying on it. With more time I'd test a gradient-boosted model, check performance across borrower groups before using it in credit decisions, and work out the cost of a false positive more carefully, since declining a good borrower isn't free either.

## The presentation

<iframe src="/assets/pdf/Loan_Default_Presentation.pdf" width="100%" height="600px" style="border: none;"></iframe>

<p><a href="https://drive.google.com/file/d/1YVQoUw2ckYFP-M8GkYttJ30PV9E_Yy-7/view?usp=sharing" class="inline-hover-underline">Recording of the presentation</a></p>
