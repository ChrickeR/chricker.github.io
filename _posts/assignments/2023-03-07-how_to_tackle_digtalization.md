---
title: "How to tackle digtalization"
categories: posts
breadcrumbs: true
paginator: true
categories: 
- posts
tags:
- Digitalization
- Technology trends
- Inovation
- Agile
- Monolith thinking
- Distributed solutions
share: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?w=1800&t=st=1678218778~exp=1678219378~hmac=47a00ef81b3f3f73343c493a29b76af8b2c55d29eab45ca78558d47ff335daec"
  caption: "Picture by: Starline"
  teaser: "unsplash-gallery-image-2-th.jpg"
excerpt: 'Part One - My way of adressing the challenge'
---
More to come soon...

## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
