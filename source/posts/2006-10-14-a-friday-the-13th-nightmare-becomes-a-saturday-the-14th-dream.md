---
title: A Friday the 13th nightmare becomes a Saturday the 14th dream
slug: a-friday-the-13th-nightmare-becomes-a-saturday-the-14th-dream
layout: post.hbs
date: 2006-10-14T19:02:58.000Z
date_updated:   2013-10-21T22:09:02.801Z
tags: text, blogs, marketing, tech support, unix, webhost
---

This Friday the 13th, my website went down. But just like Jason, it's back from the dead stronger than ever and ready to cause some damage thanks to the fine folks over at <a href="http://dreamhost.com" title="DreamHost">DreamHost</a>.<!--more-->

My old webhost had been great for years, but suddenly started flaking out about a month ago. They disabled my email account, saying I was "getting too much spam", but turned it back on when I complained. Then I was <em>only</em> getting spam while friends' emails bounced. Next the webserver started going up and down and random intervals. Finally, poor Sunshocked was down for the count. I kept waiting for it to come back up in 20 minutes. Nope. Maybe they were pissed at me or something.

It was definitely time to get a new webhost. So I did what any logical person would do in this situation, opened a terminal window and busted out <a href="http://www.hmug.org/man/1/dig.php" title="man dig">dig</a>.

<pre>
% dig simplebits.com +nssearch
SOA ns1.dreamhost.com. hostmaster.dreamhost.com.

% dig subtraction.com +nssearch
SOA ns1.dreamhost.com. hostmaster.dreamhost.com.

% dig jasonsantamaria.com +nssearch
SOA ns1.dreamhost.com. hostmaster.dreamhost.com.
</pre>

Interesting. Dan Cederholm (<a href="http://simplebits.com/" title="SimpleBits">SimpleBits</a>), Khoi Vinh (<a href="http://subtraction.com/" title="Subtraction.com">Subtraction</a>), and <a href="http://jasonsantamaria.com" title="JasonSantaMaria.com">Jason Santa Maria</a> are People Who Know What They're Doing<sup>TM</sup>, so I thought maybe I should check out this "DreamHost". Though to be honest, I also dug <a href="http://alistapart.com/" title="AListApart.com">AListApart.com</a>, <a href="http://43folders.com/" title="43Folders.com">43Folders.com</a>, <a href="http://tantek.com/" title="Tantek.com">Tantek.com</a>, and <a href="http://kottke.org/" title="Kottke.org">Kottke.org</a> and got four <em>other</em> webhosts...

Here are some amazingly great things about DreamHost.

Their <a href="http://www.dreamhost.com/hosting.html" title="DreamHost plans">basic plan</a>, which they call "Crazy Domain Insane!" is only $7.95 a month for 200GB of space and 3TB of bandwidth! That <em>is</em> insane. And it goes up a little bit every week you host with them. In every category where other webhosts have numbers less than 10 (domains, database connections, ssh accounts, you name it), DreamHost lists "unlimited". <a href="http://www.rubyonrails.org/" title="RubyOnRails.org">RubyOnRails</a>? Standard. One-click <a href="http://wordpress.org/" title="Wordpress.org">Wordpress</a>? Standard. <a href="http://www.apple.com/quicktime/streamingserver/" title="QTSS on Apple">Quicktime streaming</a>? Standard. <a href="http://en.wikipedia.org/wiki/Webdav" title="WebDAV on Wikipedia">WebDAV</a>? Standard.

Even better, they are <a href="http://www.dreamhost.com/aboutus.html" title="DreamHost's About Us page">employee owned</a>, not some huge faceless company. In fact, the faces are completely accessible on the employee profile page. <a href="http://blog.dreamhost.com/" title="The DreamHost blog">Their blog</a>, while not quite Buffy the Vampire Slayer, is entertaining and worth reading. Finally, they provide matching funds for donations to rotating charities (for <a href="http://defectivebydesign.org/en/blog/ten_things_for_oct3" title="'Ten things you can do today' on DefectiveByDesign">Day Against <acronym title="Digital Rights Management">DRM</acronym></a> it was Defective By Design) where all you have to do is click a button in the account management panel as you pay your hosting bill.

I went ahead and paid far in advance for my hosting, because these folks seem unbeatable. Still, if I'm unhappy, the get-your-money-back period is a uncharacteristically prime 97 days.

No, I'm not getting paid to say any of this. I tend to get beat up and thrown around by webhosting companies so hopefully, I'm not just in the <a href="http://incestabuse.about.com/od/domesticabuse/a/dvcycle.htm" title="Cycle of Domestic Violence">Honeymoon Phase</a> of another bad relationship. Cross your fingers.
