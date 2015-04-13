---
title: Zen Booleanism
slug: zen-booleanism
template: post.hbs
date: 2006-07-21T06:00:36.000Z
date_updated:   2013-10-21T22:09:02.762Z
tags: text, logic, programming, truth, zen
---

Logic has come a long way since the time of Aristotle. While my mind is continually blown at the fact that some dude in a chlamys sat down one day and "invented" logic, I am not alone in questioning his stubborn assertion that every statement is either true or false.<!--more-->

Philosophers have wrestled with logic for thousands of years, coming up with some amazing advancements:<ul>
<li><strong>Ternary Logic</strong> (1400s) recognized that it's possible that there are other answers than true and false, but only goes as far as adding "unknown". There is an understanding that, if known, that answer would probably be true or false. </li>
<li><strong>Bayesian Logic</strong> (1700s) challenged the <a href="http://en.wikipedia.org/wiki/Law_of_excluded_middle" title="The Law of Excluded Middle on Wikipedia">Law of Excluded Middle</a> by navigating the wasteland between true and false with probability. A threshold for truth is set where if something has, say, a 98% chance of being true, we feel comfortable calling it true.</li>
<li><strong>Fuzzy Logic</strong> (1960s)  can be understood as a set of states (e.g. early, on time, late ) that are assigned ranges of truth (e.g. earlier than 9:00, 8:45 to 9:15, later than 9:00). In this way, you might ask "Was Stan 'late' for work today?" and receive "yes" as your answer, as I arrived at 9:13. If you had asked "Was Stan 'on time' for work today?", you'd receive the same answer.</li>
</ul>

Still, almost three millenia after Aristotle, most common usage relies on <strong>Boolean Logic</strong>. A set of mathematical operations named for <a href="http://www.maths.tcd.ie/pub/HistMath/People/Boole/CalcLogic/" title="Boole's 'Calculus of Logic'">George Boole</a>, who must have been a very hot and cold sort of fellow, everything is true or false, on or off, 1 or 0. Boole is so immensely popular with computer programmers, they've named a whole datatype after him. It contains a single value, either true or false.

<a href="http://www.azlyrics.com/lyrics/bjork/alarmcall.html" title="Lyrics to Bj&ouml;rk's 'Alarm Call'">I'm no fucking Buddhist</a>, but it seems <em>a priori</em> to me that this strict bivalence is missing some answers. Nagarjuna, a Buddhist philosopher back in 150<small>CE</small>, claimed a dialectic of four states: true, false, both true and false, neither true nor false. Though this certainly feels like a more natural way to describe the world ("Are you still in love with her?" really needs those third and fourth states, no?), it's never been embraced by mathematics or computer science because it's near impossible to program a <a href="http://plato.stanford.edu/entries/dialetheism/" title="Stanford's Philosophy Encyclopedia">dialetheia</a>.

Or is it? Say we have a datatype, like a Boolean, but containing one of four values (true, false, both, neither). I guess we'll call it a Nagarjunean. Imagine how this might be used:

<code>if (<em>Nagarjunean</em> is true) then <em>action</em></code>

Let's consider what happens for each value. "True" would trigger the action, as would "both". "False" and "neither" would not. This works with other expressions:

<code>if (<em>Nagarjunean</em> is <strong>not</strong> false) then <em>action</em></code>

Again, "True" would trigger the action, but so would "neither". "Neither" is not false. "Both" would not trigger it, as it <em>is</em> false (both true and false, actually). Is this making sense?

I realize that Nagarjuna himself would take great issue with all of this. His dialectic of the four states was intended as an admonishment of people running around trying to measure everything and claim knowledge of the world. Still, I wonder what power may lie in applying his logic to modern mathematics and computing. Is there application for Buddhist wisdom in today's world?
