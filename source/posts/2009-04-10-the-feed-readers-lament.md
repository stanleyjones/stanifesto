---
title: The feed-readers lament
slug: the-feed-readers-lament
layout: post.hbs
date: 2009-04-10T11:51:06.000Z
date_updated:   2013-10-21T22:09:02.990Z
tags: text, content, css, design, feeds, html, rss, style, typography
---

Veteran web designers are proud to tell stories from the <cite>Great Separation of Style and Content</cite> during the early '00s. But the emancipation of content, illustrated most profoundly by the RSS feed, has left many of us searching for the line where content ends and style begins.<!--more-->

On a technical level, it's easy. The words of this blog post are stored in a database and then formatted into markup (HTML) when your browser hits this webpage. Then a stylesheet (CSS) comes along and handles its appearance: which typefaces it uses, what colors it's rendered in, any non-content graphics like icons or backgrounds, and even layout like whether the sidebar goes on the left or right.

On a semantic level, it's more complex. Where does style end and content begin? Most of us would say that typefaces and colors are clearly style and not content, but what about capitalization and <a href="http://www.markboulton.co.uk/journal/comments/five_simple_steps_to_typesetting_on_the_web_the_right_glyph_for_the_job/">punctuation</a>? Although it's mostly obsessive designers ranting about <a href="http://en.wikipedia.org/wiki/Small_caps">small-capped subheads</a> and <a href="http://en.wikipedia.org/wiki/Em_dash#Em_dash">em dashes</a>, they <em>are</em> characters embedded in sentences. From a technical standpoint, they fall on the markup side of the markup/stylesheet divide.

Except when they don't.

<h4>The blurry line</h4>

For lists, we consider it sufficient to specify whether items are ordered (<code>&lt;ol&gt;</code>) or unordered (<code>&lt;ul&gt;</code>) in the markup. The stylesheet then decides whether to provide bullets, numbers, Roman numerals, or even tiny hearts. Punctuation, in this case, is style. Typing "1." in an HTML document is semantic heresy!

Those small-capped subheads are the same way. We specify a line of text as a subheader (<code>&lt;h2&gt;</code>) and the stylesheet can decide if it should be all caps, small caps, or left as is. Typing "THIS IS A SUBHEAD" limits these options, so we don't do it.

Like lists and caps, we could leave it to the stylesheet to wrap any quotes (<code>&lt;q&gt;</code>) with the right quotation marks. It's not hard to <a href="http://monc.se/kitchen/129/rendering-quotes-with-css">empower the stylesheet</a> for this task and it would provide genuine value to <a href="http://en.wikipedia.org/wiki/Quotation_mark,_non-English_usage">cultures that don't use double-quotes</a>. Perhaps because quotation marks are readily available on our keyboard, our semantics-inspired idealism fades. We type " and move on.

The line gets even blurrier with treatments like italics, boldface, or underlining. Traditionally, designers have used these visual alternatives not merely to illuminate or embellish, but to convey meaning. There is more than style at work in the difference between little women and <cite>Little Women</cite>.

<h4>Separation anxiety</h4>

Why does finding this line matter?

In your browser, it doesn't. Content and style are reunited in a practically invisible process, leaving the fact that there even <em>is</em> a line irrelevant to the reader (although it makes the designer's life better).

The divide is more pronounced with feed-reading.  A feed-reader like <a href="http://www.google.com/reader/">Google Reader</a> or <a href="http://www.newsgator.com/INDIVIDUALS/NETNEWSWIRE/">NetNewsWire</a> (my choice), accesses the content but leaves behind the style. Users of feed-readers value this "pure" approach as a (if not <em>the</em>) advantage over visiting each and every blog or news service to which they subscribe. It allows for quick and efficient reading... but at what cost?

There have been plenty of studies on how <a href="http://www.newsobserver.com/politics/story/1020411.html">typography</a> and <a href="http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?tp=&arnumber=1375314&isnumber=30036">other elements of style</a> affect the perception of tone. Color and imagery are used to provide context. Consider the Wall Street Journal's <a href="http://www.nolinovak.com/">stipple portraits</a> instead of photographs or A List Apart's <a href="http://www.alistapart.com/">muted palette and watercolor illustrations</a> that elevate it from just another tech blog to the Wall Street Journal of the web design world.

<p class="aside">More than superficial enhancements are lost. This is an aside. In a feed, it's just another paragraph and seems out of place.</p>

Stylistic elements are used to decipher the personality of the speaker, which in turn allows you to parse the content <em>more efficiently</em>. Without these cues, it's too easy to hit "next unread" and be halfway into a new paragraph before you remember that <em>this</em> author uses a lot of hyperbole and her claiming that <em>everyone</em> needs to be on Facebook is completely different than if <a href="http://www.subtraction.com/2008/10/30/if-its-too-social-youre-too-old">the design director for NYTimes.com</a> had said it.

<h4>Two solutions</h4>

The most basic solution is for <a href="http://www.43folders.com/2009/04/10/free-me">authors to exert control</a> over the context of their content. This might take the form of limiting feeds to article summaries, forcing a visit the website of origin in order to finish reading. Or it might be a branded footer including links back to the original source... a reminder that the feed is not congruent to the content, but a variant in an alternative format. This is a popular solution, because it's something that an author can do by him- or herself.

A more complex&mdash;but potentially more satisfying&mdash;solution would be to allow for greater blurriness (the blurriness that already exists) in feed-reading. This would involve authors agreeing to abide by stricter semantic rules such as those provided by the <a href="http://microformats.org/wiki/hatom">hAtom microformat</a> or new <a href="http://www.w3.org/TR/html5/semantics.html#semantics">HTML 5 elements</a> like <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;section&gt;</code>. In turn, developers of feed-reading software would allow styling for <em>those elements alone</em>. We could still provide transportability while avoiding the headers, footers, sidebars, and distracting advertising that have driven people to feed-readers in the first place.

This second solution begins to sound a little like the standards-free hell of email clients right now. Does GMail support this CSS declaration or that one? How about Outlook? No one wants to take that paradigm and apply it to the 90% working world of RSS feeds. Instead, we're likely to see this situation resolve itself in one of two ways: the concept of authorship and context becomes significantly <em>more</em> important and require more attention than it has been in the past, or a generation that's grown up with this new paradigm as the only one they've ever known says, "yeah, so what?"
