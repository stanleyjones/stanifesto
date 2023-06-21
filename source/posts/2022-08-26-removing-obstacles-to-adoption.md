---
title: Removing Obstacles to Adoption
date: 2022-08-26
layout: post.hbs
source: Medium.com
---

Eric Bravick, CEO of The Lifted Initiative, was clear. He wanted our users to get to “Hello World” in [less than five minutes](https://en.wikipedia.org/wiki/Ready_Five).

---

If you’re brand new to Web3, the two first steps to starting a project are:

1. Order a hardware wallet. It will arrive in two weeks.
2. Learn a new programming language. There are online courses that take under a month.

Not exactly _five_ minutes.

If five minutes seems outlandish, it shouldn’t. A modern developer workflow is perfectly capable of setting up a new environment, scaffolding an app, and running it locally in 30 seconds. When we sent our team to observe at Web3 hackathons, we saw developers taking hours if not days to get their basic foundation in place so they could start building on top of it.

In our hackathon follow-up interviews, we heard over and over again that developing in Web3 is just so _different_ from what most developers are used to. There are new concepts, new toolchains, and especially new problems. How could we make it more familiar? Maybe even fun?

## It Started With a Turtle

Video games are wildly popular and, although some see them as mindless recreation, even casual gamers are capable of planning and executing complex logic in the name of fun. Everything from simple farming games to sci-fi shooters usually begins with a “tutorial level” to get players acquainted with the mechanics before throwing bigger and badder challenges at them. By contrast, digging into Web3 feels like learning basic controls in the middle of a boss fight.

![tutorial](https://assets.stanifesto.blog/images/2022/8/gwen1.jpg)

Could we steal a page from their playbook and make setting up a new account an opportunity to learn how to “play” the game of decentralized software development?

Such an approach, called Low Code / No Code (LCNC), can be divisive. Beginners [appreciate the easy onboarding](https://www.developernation.net/blog/are-low-no-code-tools-living-up-to-their-disruptive-promise), but more experienced software engineers may consider it limiting.

Web3 developers make up [less than 1%](https://medium.com/electric-capital/electric-capital-developer-report-2021-f37874efea6d) of the total software developers in the world today. It’s important when making these product decisions to focus on the _potential_ audience and not just the current one. Luckily, the biggest and fastest-growing segment of Web3 developers has less than five years of experience so LCNC seems like a perfect match.

In fact, the game Minecraft has its own LCNC language called Blocks and every year its creator Mojang Studios hosts an #HourOfCode to expose students (and other folks) to programming. As of last year, over [1 billion people](https://hourofcode.com/us) have taken part — that’s 40 times the number of software developers in the world and at least 10,000 times the number of Web3 developers.

This broader audience of not thousands but millions of developers was our target for a brand new onboarding experience that we call Gwen.

## Markers Smell Like Ideas

With Gwen, we’re taking aim at the two biggest obstacles currently facing new developers who struggle to bring their project to Web3: managing their identity with wallets and learning a new language to program “smart contracts.”

Starting with sketches provides a great opportunity to approach a problem from multiple angles. Maybe your first sketch is a best guess at how things will work, but then you make a second and question some of your assumptions in the first. We usually make [at least eight](https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s).

![social login sketch](https://assets.stanifesto.blog/images/2022/8/gwen2.jpg)

_Could we really get rid of wallets?_ I remember setting up my own hardware wallet when my wife walked in and asked what the device in my hand was. I got as far as “private key” when she apologized, “Never mind. I don’t actually care.” and left the room. My wife loves me dearly and is almost definitely smarter than me. If I can’t interest her in wallets, what hope do we have in providing a frictionless onboarding experience for someone substantially less invested in understanding asymmetric cryptography than her?

Instead, we wanted people to sign into their accounts in a familiar way: social logins. When given the option, [70% of users](https://www.loginradius.com/blog/identity/social-login-infographic/) prefer social login over creating yet another username and password that they have to remember.

![nocode sketch](https://assets.stanifesto.blog/images/2022/8/gwen3.jpg)

_Could we really get rid of programming languages?_ We wanted to create a way for users to connect different services in novel ways that allow the magic of smart contracts but without all the semi-colons. Almost [80% of existing smart contracts](https://ieeexplore.ieee.org/document/9426068) contain duplicate code, which suggests that Web3 has a lot of reusable building blocks.

We envision users literally dragging these building blocks around to construct workflows like periodically pulling source code from a git repository, building it, storing the resulting files onto a blockchain, and then handling incoming HTTP requests so end users don’t need a wallet either. Each of these steps is easy enough separately, but combining them in a Web3 context is terrifically hard today.

We looked into a lot of similar products, from API-fueled platforms like Zapier and IFTTT to simple automation like Apple Shortcuts and more complex constructions like Unity Visual Scripting. Even [modular synthesizers](https://www.youtube.com/watch?v=cWslSTTkiFU) were an inspiration.

Gwen was starting to get exciting.

## What Do You Think?

We felt like we had some solid ideas but they were still full of assumptions. It was time to put them in front of real people and get qualitative feedback.

![social login mockup](https://assets.stanifesto.blog/images/2022/8/gwen4.png)

Signing into our app using social accounts like Google split our potential users in half. Some said, “I log into everything using Google, because it’s so convenient.” and the other half said, “Absolutely not. Google has access to enough of my life already.” Surprisingly, only one user said that they would use their Ledger wallet but admitted, “I bought this thing, I might as well use it.” These fabulously conflicting reactions are precisely why talking to people is so important.

![nocode mockup](https://assets.stanifesto.blog/images/2022/8/gwen5.png)

When we showed developers our draggable building block concept, the feedback was equally mixed. While everyone was enthusiastic — one even said, “This solves exactly the problem we’re having.” — as expected, the more experienced developers confessed that they saw the value for newcomers but probably wouldn’t use it themselves. One shrugged, “I’d rather just use a library.” Self-reported surveys are tricky and since everyone said they’d [recommend the product to a friend](https://www.usertesting.com/blog/nps-customer-experience), we decided it was worth pursuing.

## From Prototype to Product

The poet Paul Valéry has said that art is [never completed, only abandoned](https://quoteinvestigator.com/2019/03/01/abandon/). He would probably be a great UX designer because at some point you have to say, “Good enough. Ship it.”

![final product](https://assets.stanifesto.blog/images/2022/8/gwen6.png)

While Gwen is still preparing for lift-off, we’ve now entered a prototype phase where we’re constantly iterating and improving a real live web app. We’re tightening up the typography and color palette, factoring out reusable components, and connecting everything to the recently launched Manifest Network.

Once it’s ready, you will indeed be able to get to “Hello World” in less than five minutes.

Let us know if you want to join the user-testing for sneak previews.
