---
title: Microformatting my Addressbook
slug: microformatting-my-addressbook
layout: post.hbs
date: 2006-08-16T06:00:25.000Z
date_updated:   2013-10-21T22:09:02.777Z
tags: text, apple, blogs, design, microformats, programming
---

Last week I fell in love with <acronym title="XHTML Friends Network">XFN</acronym>, a microformat for representing human relationships. I immediately started sketching out fun ways to make it work for me. First stop, my Mac's Addressbook.<!--more-->

But let's back up a second. First, what are <a href="http://microformats.org/" title="Microformats.org, a good place to start">microformats</a>? Just this evening I found myself explaining them, which is difficult without a running start. Once upon a time, a single webpage contained both the contents of the page <em>and</em> how those contents were supposed to look. Webdesigners learned clever tricks that made pages pretty but insanely huge and complicated consequently. Ask anyone who has been <a href="http://alistapart.com/articles/journey/" title="'A Web Designer's Journey' on A List Apart">designing websites longer than 3 years</a> about "nested tables" and you'll see the terror in their eyes. We've come along way since then, separating the content (as <acronym title="eXtensible HyperText Markup Language">XHTML</acronym>) and the design (as <acronym title="Cascading StyleSheet">CSS</acronym>); but soon we realized there was more to be done. The content we had was just meaningless words, what did it describe?

For instance, here's a random (but true) statement:

<code>Last weekend I saw Bj&ouml;rkestra play at the Great American Music Hall with my friend, Anne. They played Bj&ouml;rk greats like "Human Behavior", "Joga", and "Oh So Quiet" with an 18-piece jazz ensemble. The venue was incredible and the band itself phenomenal.</code>

Lots of things are going on here. I'm describing an <a href="http://microformats.org/wiki/hcalendar" title="hCalendar on Microformats.org">event</a>, I mention a <a href="http://microformats.org/wiki/hcard" title="hCard on Microformats.org">person</a>, a <a href="http://microformats.org/wiki/xoxo" title="XOXO on Microformats.org">list</a> of songs, and give a <a href="http://microformats.org/wiki/hreview" title="hReview on Microformats.org">review</a>. You, a human of greater than average intelligence (you are reading Stanifesto afterall) and capable of parsing language for its meaning, immediately recognize all of these things. A computer just sees a string of letters and numbers interrupted by commas, periods, and quotation marks. Not very useful.

Enter microformats. With microformats, you can do a little behind the scenes work (adding some XHTML tags that say things like rel="friend" or class="rating") and soon a computer sees EVENT, PERSON, LIST, REVIEW. To see microformats in action, download the <a href="http://blog.codeeg.com/tails-firefox-extension-03/" title="Don't Forget to Plant It">Tails extension for Firefox</a>, which drops a little green square in the corner of your browser whenever it sees microformats on the page you're viewing. Then scripts that will take those microformats and do useful things with them, like "Map that location on Google" or "Add that person to my address book". Which brings me to the point of this post... finally!

My Addressbook was chaos. There was one group called "work", one called "personal" and then a big pool of unorganized people. I never knew where to look (would my cubemate <a href="http://floatingark.blogspot.com/" title="FloatingArk">Japhet</a>, in whom I often confide great secrets, be contained by "work" or "personal"?) and would frequently find people I did not remember a damn thing about. I had plenty of content, like phone numbers and email addresses, but no way to make sense of it.

<div class="pullquote" style="float:right; text-align:center;">
<img class="content" src="https://assets.stanifesto.blog/images/2006/08/xfnJaphet.jpg" alt="XFN relationship in Addressbook's notes field" />
<p class="small">Nice photo, dude.</p>
</div>

There's a microformat for relationships called <a href="http://gmpg.org/xfn/" title="GMPG.org">XFN</a>. As an example, you could link to someone's else blog and use XFN to note them a colleague that you had actually met in real life (with an easy rel="acquaintance met colleague"). I opened one window to the XFN Quick Reference table and another to my Addressbook and started chugging away. There were some tough decisions to be made (is my father a "friend"? is this person a "muse" or a "crush"?) but a clearer picture of the people in my life and how they relate quickly came into view.

<div class="pullquote" style="float:left; text-align:center;">
<img class="content" src="https://assets.stanifesto.blog/images/2006/08/xfnGroups.jpg" alt="XFN relationshipa as Smart Groups" />
<p class="small">Crushs are just a click away!</p>
</div>

The next step was adding some Smart Groups that will scan the notes field and organize folks into groups automatically. No need to decide whether or not to drag them into "work" or "personal", just tag them honestly and they'll show up where they need to be. Japhet ended up in both "Co-Workers" and "Friends", which sounds just right to me.

Microformatting is not really intended for local applications, it's really more for making better sense of publicly available information. So it's really quite thrilling to me that it was so incredibly useful on a personal level. Like RSS and AJAX, microformats are another great example of the internet community at large (and not a closed corporation) constructing a product to meet their own demands, in an open and organic way. I'm excited to see what else I can apply them to.

Maybe this blog? :)
