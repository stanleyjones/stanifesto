---
title: Choose your weapons
slug: choose-your-weapons
layout: post.hbs
date: 2007-02-19T08:29:20.000Z
date_updated:   2013-10-21T22:09:02.879Z
tags: text, design, fonts, microsoft, typography
---

Once upon a time, designers were free to use any typeface in our cabinet. Now, we must rely on those that <em>others</em> have. Which 10 fonts do you wish everyone had, and why?<!--more-->

A quick primer: as you're reading this, my webserver is sending you text and images for your browser to display, but only <em>specifying</em> the typeface&mdash;not actually sending it. Your browser looks on your computer and tries to find it locally. If it can't find it, the browser uses a different one. This has led designers to suggest "backup" typefaces, so a typical <a href="http://www.w3.org/Style/CSS/" title="CSS from the W3C">Cascading Style Sheet</a> might look like this:

<code>font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;</code>

In the olden days (the 90s), one solution was to pre-render certain text as an image instead. Unfortunately, this leaves non-sighted visitors out of the party, increases load time, and makes updates difficult. <a href="http://www.mikeindustries.com/sifr/" title="sIFR from Mike Davidson">Scalable Inman Flash Replacement</a> (sIFR) is a more modern technology that scans and replaces specified text with tiny Flash movies of the same words but in a different typeface. It works well and fails intelligently (if you don't have Flash or Javascript), but still takes time and bandwidth&mdash;limiting it to titles and headers.

The best solution is for me to know what fonts you have on your computer and design using those. Afterall, <a href="http://www.informationarchitects.jp/the-web-is-all-about-typography-period" title="iA's now famous 'Web Design is 95% Typography">a good designer can make due</a> with non-fancy typefaces.

<div class="pullquote" style="float:right;"><img class="content" src="http://assets.stanifesto.com/images/2007/02/mscorefonts.jpg" alt="MS Core Fonts"/><p class="small">Microsoft's Core Fonts for the Web</p></div>

Microsoft (caution: Stan is about to praise Microsoft) realized this back in 1996 and released "<a href="http://en.wikipedia.org/wiki/Core_fonts_for_the_Web" title="Core fonts for the web on Wikipedia">Core Fonts for the Web</a>", a collection of 10 typefaces free for distribution and bundled with <em>everything</em>. The project was canceled in 2002 but five years after the project's cancellation it's still had an effect on the current landscape; the <a href="http://www.visibone.com/font/FontResults.html" title="According to a Visibone survey...">Top 10 reigning champs</a> of web typography are:

<table style="width:100%;">
<tr><th>Typeface</th><th>Adoption</th><th>MS Core Font?</th></tr>
<tr><td style="font-family:Arial;">Arial</td><td>99%</td><td>√</td></tr>
<tr><td style="font-family:Times New Roman;">Times New Roman</td><td>99%</td><td>√</td></tr>
<tr><td style="font-family:Arial Black;">Arial Black</td><td>98%</td><td></td></tr>
<tr><td style="font-family:Courier New;">Courier New</td><td>98%</td><td>√</td></tr>
<tr><td style="font-family:Verdana;">Verdana</td><td>98%</td><td>√</td></tr>
<tr><td style="font-family:Comic Sans MS;">Comic Sans MS</td><td>97%</td><td>√</td></tr>
<tr><td style="font-family:Courier;">Courier</td><td>97%</td><td></td></tr>
<tr><td style="font-family:Trebuchet MS;">Trebuchet MS</td><td>96%</td><td>√</td></tr>
<tr><td style="font-family:Georgia;">Georgia</td><td>95%</td><td>√</td></tr>
<tr><td style="font-family:Impact;">Impact</td><td>95%</td><td>√</td></tr>
</table>
Those are the only typefaces in the 90-100% range. After these, it drops all the way to 88% and keeps getting worse. However, <a href="http://www.codestyle.org/css/font-family/sampler-CombinedResults.shtml" title="Codestyle's Combined Results">different surveys</a> show different results.

Big Question Time. Which 10 typefaces would you choose for a modern day "Core Fonts for the Web"? What would criteria be?

Since asking the question means I have to try to answer it myself, here are mine. The <a href="http://www.w3.org/TR/css3-fonts/#generic-font-families" title="More W3C anyone?">CSS3 specification</a> contains 5 font families: serif, sans-serif, cursive, fantasy, and monospace. I've tried to make sure they're all represented.

<div class="pullquote" style="float:right;"><img class="content" src="http://assets.stanifesto.com/images/2007/02/stancorefonts.jpg" alt="MS Core Fonts"/><p class="small">Stan's 'Ardkore Fonts for the Web</p></div>

<dl>
<dt>Serif</dt>
<dd><a href="http://www.adobe.com/type/browser/P/P_1703.html" title="The 'Pro' is owned by Adobe">Garamond</a>: I almost went with Caslon, but Garamond has an awesome capital W. There are lots of Garamonds out there, but I admit my preference for Adobe's version.</dd>
<dd><a href="http://www.microsoft.com/typography/fonts/font.aspx?FID=9&FNAME=Times%20New%20Roman" title="Designed for The Times, no less">Times New Roman</a>: it ain't broke.</dd>
<dt>Sans-serif</dt>
<dd><a href="http://www.linotype.com/1266/neuehelvetica-family.html" title="Linotype.com">Helvetica Neue</a>: my favoritest font ever. Seriously, who doesn't love Helvetica? And this one is <em>Neue</em>.</dd>
<dd><a href="http://www.linotype.com/1828/univers.html" title="Linotype.com">Univers</a>: Or maybe <a href="http://www.linotype.com/472/futura-family.html" title="More Linotype.com">Futura</a>? Does a gothic font deserve the second sans-serif spot? Univers is so versatile, though. You can bend it and stretch it into so many different shapes.</dd>
<dt>Cursive</dt>
<dd><a href="http://www.linotype.com/1351/poetica-family.html" title="Linotype.com">Poetica</a>: This has been my go-to cursive font since my college days. Swash capitals, alternate endings... it's like the Collector's Edition DVD of script fonts.</dd>
<dd><a href="http://www.adobe.com/type/browser/P/P_1725.html" title="Crap, Adobe owns it?">Caflisch Script</a>: None of the script fonts have good Unicode support, but Caflisch is at least pretty.</dd>
<dt>Fantasy</dt>
<dd><a href="http://apostrophiclab.pedroreina.net/" title="Apostrophic Labs, sort  of">Komika</a>: I don't know what's up with "fantasy" fonts, but it makes sense to replace Comic Sans with something nice.</dd>
<dd><a href="http://en.wikipedia.org/wiki/Uncial" title="Uncial on Wikipedia">Uncial</a>: This is fantasy, right? It's from the middle ages, so...</dd>
<dt>Monospace</dt>
<dd><a href="http://www.evertype.com/emono/" title="EverType.com">Everson Mono</a>: 4,893 characters can't be wrong (I've got your &there4;, right here, buddy!).</dd>
<dd><a href="http://www.0sil8.com/episodes/silkscreen/index.html" title="0sil8.com">Silkscreen</a>: A pixel font! How useful would that be, eh?</dd>
</dl>

Hmm... not sure how I feel about my picks. Let's consider this a first draft. How about you? What would you add or subtract? Once we get the list finalized, we can approach the owners of each one and figure out how to bundle them with every browser (Firefox would be down with that, right?).
