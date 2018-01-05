---
title: Prioritize by Bang for the Buck
date: 2017-01-04
layout: post.hbs
---

Some of the most challenging problems in software engineering have nothing to do with engineering. For instance, take prioritizing a roadmap of projects. I've seen an entire room full of competent people grind to a halt trying to decide whether a project is worth doing.

It's therefore unsurprising that there are so may methodologies purporting to be the Holy Grail of project prioritization. Each one has its advocates who have their opinions and — because of the nature of roadmap planning, it's quite a challenge to determine quantitatively which one works best.

Challenge accepted.

---

### Prioritization Methods

**Emergent.** The project roadmap is a FIFO queue. New projects are added to the roadmap as they're conceived and executed when it's their turn. Sounds unwise on its face, but if you're not prioritizing based on any sort of criteria (like deferring to a [HiPPO](https://community.uservoice.com/blog/highest-paid-persons-opinion/), sorting is essentially random.

**Value-Based.** A time-honored strategy, projects are prioritized based on the size of their opportunity. Move the needle. Affect the bottom line. Do stuff that matters.

**Shortest Job First (SJF).** Give priority to projects that can be completed in the least amount of time. Basically this strategy is the same as "pick the low-hanging fruit" (itself a [bad metaphor](https://stanifesto.com/bad-metaphors-in-activism/)) but productivity professionals had to give it an acronym.

**Bang for the Buck.** Prioritize projects based on their value, but divided by their effort. This strategy is also known as Cost of Delay Divided by Duration (CD3) to those pesky productivity professionals again.

So how can we compare these different methods? I've put together a model based on cumulative value. Basically, if a project — once delivered — makes $1k a week and takes 2 weeks to deliver, the cumulative value of that project would look like this:

![figure 1](http://assets.stanifesto.com/images/2018/1/fig1.jpg)

About what we'd expect. No revenue for the first two weeks and $1k each week after that, with a cumulative total of $10k (10 weeks at $1k) by the end of the quarter.

We can apply a cumulative value approach to an entire roadmap. Let's say we have three projects: A, B, and C.

- Project A would make $1k per week and take two weeks to deliver.
- Project B would make $4k per week and take three weeks to deliver.
- Project C would make $2k per week and take one week to deliver.

Each prioritization method would stage these projects differently. Emergent would tackle them [A, B, C], Value-Based [B, C, A], Shortest Job First [C, A, B] and Bang for the Buck [C, B, A].

So what do the cumulative values for each approach look like?

![figure 2](http://assets.stanifesto.com/images/2018/1/fig2.jpg)

Hey look, Bang for the Buck wins! This result might not surprise you based on the title of this post, but let's throw some more "real world" examples at it.

### Prioritizing a Backlog

It seems reasonable to me that an organization could easily generate a list of 40 projects that they could attempt at any given time. It's also reasonable to assume that the resulting value of these projects follow a power curve and not a normal curve — that there are a few really great ideas and a lot more so-so to bad ideas.

Let's generate a random backlog of 40 projects, give each project a value and a duration, and then prioritize that backlog using the Emergent method. In fact, let's do that 100 times and see what we get.

![figure 3](http://assets.stanifesto.com/images/2018/1/fig3.jpg)

As expected, a random algorithm generates some pretty random looking data. But even here there's definitely a pattern. Even though going with your gut occasionally yields a fantastic ($80k!) cumulative value, the average over these 100 runs is only about $18k.

### Bad Estimations

Software projects are notoriously late, the [Standish Group](https://speedandfunction.com/look-25-years-software-projects-can-learn/) estimates 53% of them are late or over budget. We need to build the fact that humans are bad at estimating duration into our model.

But why stop there? Humans are bad at estimating value too. How many times have you worked on a project that was going to change everything only to find that it barely made a dent?

So here's the average cumulative value over 1000 runs for each of our prioritization methods given perfect knowledge:

![figure 4](http://assets.stanifesto.com/images/2018/1/fig4.jpg)

And here they are again when we prioritize based on our *estimated* values and durations:

![figure 5](http://assets.stanifesto.com/images/2018/1/fig5.jpg)

Before we wrap up, here's one more chart. Prioritization is still based on imperfect knowledge but, whenever a project is completed, the remaining backlog is *re-estimated* and *re-prioritized* based on those new estimates.

![figure 6](http://assets.stanifesto.com/images/2018/1/fig6.jpg)

The result is nearly (but not quite) as good as perfect knowledge.

---

Some clear takeaways here:

- Prioritizing by *any* quantitative method (i.e. not just someone's opinion) outperforms the Emergent method, regardless of whether you're operating with perfect or imperfect knowledge.

- Prioritizing by Bang for the Buck outperforms all other methods, again regardless of perfect or imperfect knowledge. This result actually surprised me, because I expected the bad estimates for both value and duration to compound since it considers both of them.

- When operating with imperfect knowledge, re-estimating and re-prioritizing results in average cumulative values that are *almost* as good as those for perfect knowledge.

I hope folks find this useful. I originally presented it to other engineering managers at Chartboost and a few of them suggested I write it up into a blog post.

The second half of the presentation was about deriving semi-accurate metrics for value and duration, since Bang for the Buck (or CD3) highly depends on those metrics. If you're interesting in seeing that part, ping me.