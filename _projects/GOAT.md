---
layout: page
title: "GOAT: building trust in a resale marketplace"
description: "How GOAT uses machine learning and human experts to build trust, and how to cut fraud costs without slowing sign-up."
img: assets/img/GOAT.png
importance: 4
category: work
giscus_comments: false
---
<p class="proj-glance"><span><b>Role</b> Co-author</span><span><b>When</b> Carnegie Mellon, technology strategy course</span><span><b>Team</b> Five authors</span></p>

GOAT is a marketplace for sneakers and streetwear, and its whole value is that you can trust what you buy. Counterfeits are a real problem in resale, so the platform authenticates items before they reach the buyer. Our report looked at how that works and where the strategy could be stronger.

## How GOAT builds trust

Sellers apply before they can list, and they upload standardized photos from several angles. Those photos train image-recognition models that learn what authentic items look like and flag inconsistencies. When a sale happens, the item goes to a GOAT distribution center first, where trained specialists check things a photo can't show, like stitching, texture and feel. GOAT calls this "ship to verify." Buyers are covered by a protection policy that gives an authentic replacement or a refund. The platform reported catching $72 million in counterfeit shoes in 2019, which shows how large the problem is.

GOAT also charges competitively, at a 9.5% seller commission against 8% to 10% for StockX, 13.25% for eBay and 15% to 80% for The RealReal.

## Where we saw an opening

Authentication and buyer protection treat counterfeits after they've been listed. They don't remove the people who list them, and they cost a lot to run. Our central recommendation was to make it harder for bad actors to get in, without hurting sign-up.

Sign-up is a growth metric for a marketplace, so we didn't want to add friction at the start. Instead, we proposed asking for a valid photo ID later in onboarding, after a seller has already put in significant effort and is unlikely to leave. Automated ID verification services exist and are cheap compared with the cost of one counterfeit item going through the entire process. For a counterfeit seller, the effort now outweighs the payoff.

## Other recommendations

- **Partnerships and creators:** GOAT's $50 million partnership with Paris Saint-Germain put the brand in front of millions. We suggested continuing that with rising athletes, and adding video and live-stream selling through creators
- **Community:** build on its 40 million members with events and content
- **Data:** use data from over 320,000 listings to give sellers pricing and inventory guidance, and to predict price movements
- **Sustainability and resilience:** lean into second-hand luxury as demand grows, and keep a flexible fee structure that holds up when the economy slows

## What I'd note today

GOAT's approach is a good example of a human-in-the-loop AI system: the model handles volume, and people handle the cases where the evidence isn't visual. That's also a pattern I use when I design AI products in healthcare.

## The report

<iframe src="{{ '/assets/pdf/GOAT.pdf' | relative_url }}" width="100%" height="600px" style="border: none;"></iframe>
