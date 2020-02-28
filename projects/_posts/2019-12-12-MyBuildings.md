---
layout: project
permalink: "/projects/mybuildings"
title: MyBuildings
client: CoreVision
header-color: blue
thumb: "/assets/images/content/MyBuildings/new.png"
desc: "Building management system"
desc-long: "Insurance quoting web app to replace previous paper processes. Built to work in remote and low-coverage rural areas across Australia and New Zealand."
roles: [
    User Experience Design,
    Interactive Prototyping,
    Front-end Development
]
---

After the release of the new <a class="link link-blue" href="{{ '/projects/mylocus' | relative_url }}" title="Visit MyLocus Project">MyLocus</a> product, <a class="link link-blue link-external" href="https://corevision.com.au/" title="Visit CoreVision's Website">CoreVision</a> decided it was time to re-design and update their primary product, MyBuildings. Being incrementally developed upon since 2001, it was long due for a refresh.

<h6 class="text-blue-safe text-darkmode-blue-light">Old UI</h6><img alt="MyBuildings old UI" src="/assets/images/content/MyBuildings/old.png">
<h6 class="text-blue-safe text-darkmode-blue-light">New UI</h6><img alt="MyBuildings redesigned UI" src="/assets/images/content/MyBuildings/new.png">

To consolidate the look and feel across CoreVision's products, the MyBuildings user interface was redesigned to utilise and expand upon the visual language that was defined by MyLocus before it. A key goal was to update the look and feel, and improve overall User Experience, while keeping the redesign familiar enough that legacy users of the old MyBuildings would have no trouble finding their way around the redesigned UI.

Another key component of the improved UX was to help users find information relevant to them as simple and painless as possible. Where previously, users would have to manually search for the work requests they submitted to check on their progress, we introduced landing pages to surface the user's own submitted items right there by default.

<img alt="Work Requests Landing Page" src="/assets/images/content/MyBuildings/landing-page.png">

After the design phase, I set out to create a static front-end framework for CoreVision's own developers to integrate and build upon for years to come. It had to be modular and well-documented to ease the handover and training processes. This framework uses the <a class="link link-blue link-external" href="https://getbootstrap.com/docs/4.4/layout/overview/" title="Visit Bootstrap's Website">Bootstrap</a> grid system to make sure each component can easily slot into place on any desired page, allowing new layouts to be developed on the fly with as little overhead as possible.