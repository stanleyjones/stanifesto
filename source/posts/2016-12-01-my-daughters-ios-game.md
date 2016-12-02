---
title: My daughter's iOS game
date: 2016-12-01
layout: post.hbs
---

Friday nights at [Rock Wall](http://www.rockwallwines.com/) is a popular spot for Alameda families. Parents chat over Chardonnay, watching the sun set behind a San Francisco skyline, while their kids run around the cement lot that was once a Naval airstrip, making new friends and inventing games to play. On one such Friday evening, my daughter Adela asked for my iPhone so she could show here new friends "her game". After a few minutes, she returned a bit glum. "I thought they would be more impressed," she said. "Maybe they didn't realize you made it yourself," I offered.

Not many people believe that my daughter made her own iOS app. I don't blame them. It's not something you expect from a 5-year old.

[It's called TriTacToe and it launched today.](https://itunes.apple.com/us/app/tritactoe/id1150863265?ls=1&mt=8)

![TriTacToe Landing Page](http://assets.stanifesto.com/images/2016/12/tritactoe.jpg)

"But you *actually* made it, right?" people ask me, knowing that I'm a coder and assuming that I'm being magnanimous in sharing credit. They're correct that my daughter — who is just learning to read — didn't [teach herself Objective-C](http://tryobjectivec.codeschool.com/) and the intricacies of [Xcode](https://developer.apple.com/xcode/). But they're wrong that it's not her game. It was her idea and she's made key decisions along the way to defend her vision. I'm just the engineering team.

[Shigeru Miyamoto](http://www.newyorker.com/magazine/2010/12/20/master-of-play) is renown for creating classic video games like Donkey Kong, Super Mario Bros, and The Legend of Zelda. Game designer [Sid Meier](http://www.firaxis.com/?/about#legacy-2)'s name appears in titles like Sid Meier's Civilization, Sid Meier's Civilization II, and most recently Sid Meier's Civilization VI. Both of these men rely on teams of engineers to bring their vision to life. Adela is no different.

---

It started with her asking me if I knew how to make video games. She knew I worked at [Chartboost](https://www.chartboost.com/) and knew they had something to do with games (we're a monetization platform consisting primarily of a games-only ad network). When I admitted that I didn't but that I'd like to learn, she quickly responded that she would too and we should make a game together.

From the beginning, she had a clear idea for the game. She wanted something she could play with her mother and I, all together. We brainstormed together for a few minutes, quickly arriving on a three-person version of tic-tac-toe. It would need a bigger board than the standard 3x3 matrix, I suggested. She nodded. It's unclear whether she had arrived at the same conclusion or, more likely, trusted my opinion as the technical lead. I won't pretend that she made any implementation decisions like building it with [React Native](https://facebook.github.io/react-native/) or using [Redux](http://redux.js.org/) to handle application state, but she did sit patiently while I got the basic framework running.

It wasn't long before we had a prototype. The first version rotated between "Mommy's Turn", "Daddy's Turn", and "Adela's Turn". Adela quickly realized that meant she couldn't play with her friends, so they became colored dots. I brought up [Adobe Color](https://color.adobe.com/create/color-wheel/) so she could interactively select a color palette with appropriate contrast. She decided on purple, green, and yellow.

The game cried out for sound effects, so I brought out my iPad and launched [KORG Gadget](http://www.korg.com/us/products/software/korg_gadget/). We played around with some drum machines until we got a nice click sound and then fooled around with an 8-bit synth until we got sufficient "you win" and "no one wins" jingles. I handled importing these into our Xcode project once she approved them.

Our prototype was now playable and we felt we had a winner. It was surprisingly fun. To win, you had to rapidly switch between cooperative play with one opponent to block the third and competitive play to seize an opportunity when it presented itself. We could've stopped there and had it be our special game, but Adela wanted to release it to the App Store so everyone could download it.

That meant beta-testing.

---

We submitted the app for beta review on iTunes Connect and informed our carefully curated list of expert beta-testers: grandmas and grandpas, aunts and uncles, teachers, babysitters, and parents of Adela's friends. After an initial round of surprise and disbelief, the feedback started flowing in. Adela carefully considered each comment.

Savvy players of TriTacToe could quickly find a winning strategy and ruthlessly employ it every game. They wondered if there was anything we could offer to keep things interesting. My first thought was that [tic-tac-toe has the same problem](http://blog.ostermiller.org/tic-tac-toe-strategy) so this was just something they had to deal with. Adela's response was that we could allow players to make the board bigger than the standard 4x4 if they wanted. She actually thought you should be able to enter *any* number (like 1000) but I talked her down to 4x4, 5x5, and 6x6. We had to keep the squares "touchable", I said.

Another common request was that people wanted to play by themselves, either vs computer opponents or online vs strangers. Adela was clear on this point, saying "No, you have to go find some friends." I was relieved to not have to write a multiplayer backend service or AI engine, but also admired her commitment to a vision of how she wanted the game to be experienced. This was not a time-filling distraction, it was for families and friends to do something together in the present.

One person suggested that players choose their own colors. Adela compromised on having a handful of themes — partly because I reminded her that the colors needed to maintain sufficient contrast and partly because it meant she got to pick out three more color palettes.

There were other small comments like it was difficult to tell when someone won (so we added flashing animations showing the three in a row) or that you had to play until the end even when no one could win (so we added some logic to detect those scenarios).

The final decision was about monetization strategy. I asked Adela if we should charge a little bit of money to play or make it free but then show people ads. I was hoping she went the first route because it meant I wouldn't have to write a React Native bridge to the Chartboost SDK (which to my knowledge hadn't been done before) but she unfortunately [conformed with industry best practices](http://savvyapps.com/blog/how-do-free-apps-make-money) and went the free-to-play route. I've made a deal with her that any money we make goes straight to her college fund.

All in all we did three rounds of beta-testing before submitting for final acceptance to the App Store. We were all biting our nails waiting for approval. I had heard that the approval process could take weeks and that very few first-time submissions were accepted. Bracing for a no from Apple, I considered how to break our rejection to Adela.

It was accepted in less than twelve hours.

---

We've already started thinking about our next game. We're collaborating a little bit more on this one, as I have some ideas that I'd like to see in a game too. I suggested it take place in space and she — with a level of enthusiasm reserved for 5-year olds — suggested it be about mining gems from asteroids. I suggested it have multiple teams competing and she suggested one team be robots. I said "or robot dragons" and she lit up. I decided to let her in on a little secret I had picked up in my 39 years.

"Here's a trick. Take two cool things and combine them in a strange way and you end up with something even cooler."

She thought a moment.

"Like Buddhist sharks?"

"Yes, exactly like Buddhist sharks."

She's a natural game designer. Maybe all 5-year olds are and I'm just too old to have wildly fun ideas anymore. I decided I had to regain some of my street credit and said, "One team could be Vampire Pirates." For about thirteen seconds I managed to feel clever again, until she said, "Ah yes, we'll call them Vampirates."

We'll let you know when our Buddhist sharks vs Vampirates asteroid gem-mining game is ready for beta-testing.
