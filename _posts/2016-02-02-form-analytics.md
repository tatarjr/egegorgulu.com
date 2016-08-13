---
layout: post
title: Form Analytics Case Study - Ege Gorgulu
prettyTitle: Form Analytics
selector: analytics
permalink: /works/:title
role: UI Design, Front-End Development, Information Architecture, Interaction Design
type: Web App
desc: Tracks form performance by providing key stats.
cover: bg.jpg
imgPath: /assets/img/analytics/
carousel: true
---

# JotForm Form Analytics

## A powerful form analytics suite

JotForm Form Analytics is an analytics suite integrated into the JotForm platform, allowing users to track the performance of their forms and gain insights about their customers. 

The project was a thorn in our sides for quite a while. Our competitors already  had similar functionality and we were behind the competition. We set out to right that wrong, and the result was this:

<div class="browser viewer-cont">
	<div class="browser-init">
		<div class="vert-align">
			<i class="glyphicon glyphicon-hand-up"></i><br>
			Run browser preview
		</div>
	</div>
	<div class="browser-bar">
		<div class="browser-controls"></div>
		JotForm Form Analytics
	</div>
	<div class="browser-stage">
		<div>
			<img src="{{ page.imgPath }}traffic.png" id="stage" alt="">
		</div>
	</div>
</div>
<div class="img-switcher">
	<a data-target="{{ page.imgPath }}traffic.png" class="active">Traffic</a>
	<span class="sep">&sdot;</span>
	<a data-target="{{ page.imgPath }}referrers.png">Referrers</a>
	<span class="sep">&sdot;</span>
	<a data-target="{{ page.imgPath }}devices.png">Devices</a>
	<span class="sep">&sdot;</span>
	<a data-target="{{ page.imgPath }}platform.png">Platforms</a>
	<span class="sep">&sdot;</span>
	<a data-target="{{ page.imgPath }}locations.png">Location</a>
</div>

### Research & Wireframes

A discovery survey was prepared and sent out to 50 users, hand-picked based on their traffic and activity in order to better understand their needs and <strong>discover the data that is important to them</strong>.

Our intention from the start was to make this a single page app, so we opted for low-fidelity pen & paper sketches to get the ball rolling and jumped into action following the outcome of the survey.

### The Design

We wanted to avoid the classic pitfall of dashboards that provide too much data and end up confusing the user with visual clutter, so we opted for a single big chart that would change based on what the user wanted to see and made sure that the users was able to find what they were looking for.

Following the responses and a few quick evaluation meetings about them, it was clear <strong>how pageviews, responses, conversion rates and time spent changes over time</strong> would <strong>have the most impact</strong> on improving our users success.

![Stats Main]({{ page.imgPath }}main.png)

We moved onto adding detailed metrics for each stat, offering an in-depth view with individual response details, devices used, referrers, browsers and locations. 

Our main goal while designing this section was to enable our users to answer one question really well: <strong>"Who are my customers?"</strong>

<img class="captioned" src="{{ page.imgPath }}traffic-exploded.png"><span class="caption">Exploded view of the Traffic tab.</span> 

### Results

We conducted a small usability study with 5 participants and discovered only minor issues which were fixed right away.

The project received praise from a large number of customers, and was particularly well-receieved by our high-tier users.

One certain customer was very surpised to see that even though most of his form traffic originated from US, his Canadian customers were more likely to complete the purchase.

By providing Form Analytics, we enabled our users to discover and address mission-critical issues for their business and hopefully helped them become better at what they do.



