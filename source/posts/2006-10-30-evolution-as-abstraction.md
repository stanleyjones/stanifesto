---
title: Evolution as abstraction
slug: evolution-as-abstraction
template: post.hbs
date: 2006-10-30T08:00:14.000Z
date_updated:   2013-10-21T22:09:02.809Z
tags: text, abstraction, evolution, politics, programming, ruby on rails
---

This weekend I finally bit the bullet and jumped into <a href="http://rubyonrails.com/" title="RubyOnRails.com">Ruby on Rails</a>. The experience blew the dust off old memories of writing <acronym title="Beginner's All-purpose Symbolic Instructional Code">BASIC</acronym> programs with my dad on our <a href="http://en.wikipedia.org/wiki/Commodore_64" title="The C64 on Wikipedia">Commodore</a>, which inevitably got me thinking about human evolution.<!--more-->

<pre>
10 PRINT "Stan is awesome."
20 GOTO 10
</pre>

BASIC programs in the 80s were written as one big heap of code. This line number sent you to that line number, as labyrinthian as the "<a href="http://www.cyoa.com/" title="CYOA.com">Choose Your Own Adventure</a>" books popular at the time. I faced a hard game of catch-up when I went to college and had to discard the monolithic BASIC for the, by comparison, fractured and disjointed C++. Classes? Libraries? I want my code all in one place!

<pre>
&lt;%= 1000.times {puts "Stan is awesome."} %&gt;
</pre>

It was an evolutionary hurdle to understand that the functionality I had relied on could be abstracted into functions, to be written once and called upon whenever I needed them. Ruby on Rails is a step beyond C++ in terms of abstraction, built upon a <acronym title="Model-Controller-View">MVC</acronym> framework that separates what the program does (the Controller) from what it does it to (the Model) and how it looks when it's done (<a href="http://abc.go.com/daytime/theview/" title="Not that one">the View</a>). These "three branches" got me thinking about abstraction in government.

First there were monarchies, these were BASIC. A single leader who did all the governing single-handedly: judge, jury, and executioner (though of course, they didn't use that phrase because judges and juries hadn't been invented yet). Lots left to be desired here, obviously. There's a big jump in 1215 with the <a href="http://en.wikipedia.org/wiki/Magna_Carta" title="Magna Carta on Wikipedia">Magna Carta</a>, which introduced functions in the form of Barons (who could <a href="http://en.wikipedia.org/wiki/First_Barons'_War" title="First Baron's War on Wikipedia">throw exceptions</a> with the best of them).

The U.S. government is more like an MVC framework than any before, with clearly defined roles of each branch. Looking closer, the legislative branch contains two classes, Senate and House, that contain methods like Pass, Reject, and the <a href="http://en.wikipedia.org/wiki/Recursion" title="Recursion on Wikipedia">wickedly recursive</a> Direct to Subcommittee.

What would a truly agile government look like? How could programming methodologies like <a href="http://c2.com/xp/YouArentGonnaNeedIt.html" title="YAGNI on C2.com">YAGNI</a> or <a href="http://c2.com/cgi/wiki?DontRepeatYourself" title="DRY on C2.com">DRY</a> be applied to the passage or even <em>execution</em> of law? Is the inevitable babbling about a "<a href="http://swiftreport.blogs.com/news/2005/07/disposable_litm.html" title="'Disposable Litmus Test Could Determine Next Supreme Court Justice' on The Swift Report">litmus test</a>" whenever a Supreme Court Justice is nominated really just <a href="http://c2.com/xp/UnitTest.html" title="Unit Tests on C2.com">unit testing</a>?

This is getting dangerously close to the dorkiest post I've ever made, so I should point out that the trend toward abstraction exists in environments other than just programming and government. In storytelling, we've gone from epic oral mythologies to self-contained novels to hypertext that links to pre-written content. In occupations, we've gone from hunting/gathering to raising specific crops for trade to trading representations of those crops in <a href="http://www.investopedia.com/university/futures/" title="Future Markets on Investopedia">futures markets</a>. At each step, the subject of the old level becomes an object of the new.
