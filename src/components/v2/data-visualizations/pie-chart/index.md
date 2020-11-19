---
sidebarDepth: 5
---
# Pie Chart <Badge text="Alpha - under development" type="error"/>

## Description
This component displays a single dimension on a search.  Color and style is 100% configurable.

## Install

### Widget
To install as a copy and paste widget. As seen here:  <a href="https://www.cbd.int/action-agenda/contributions/action/?action-id=5eeba456395529000178dcbf" rel="noopener noreferrer" target="_blank"> <OutboundLink/> https://www.cbd.int/action-agenda/contributions/action/?action-id=5eeba456395529000178dcbf  </a>

::: tip
This component's options can be passed as an attribute on the script tag. [See options details](/components/view/#options)
```html

<script  type="module" id="pie-chart" source="aichis" src="https://cdn.cbd.int/@action-agenda/pie-chartdist/widget/index.min.js"></script> 

```
:::

<code-group>
<code-block title="MODERN">

```html

<script nomodule="" id="pie-chart-legacy" src="https://cdn.cbd.int/@action-agenda/pie-chart/dist/widget/index.umd.min.js"></script>
<script  type="module" id="pie-chart" src="https://cdn.cbd.int/@action-agenda/pie-chartdist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="MODULE">

```html

<script  type="module" id="view" src="https://cdn.cbd.int/@action-agenda/pie-chart/dist/widget/index.min.js"></script> 


```
</code-block>

<code-block title="UMD">

```html

<script nomodule="" id="view-legacy" src="https://cdn.cbd.int/@action-agenda/pie-chart/dist/widget/index.umd.min.js"></script>

```
</code-block>
</code-group>


### Vuejs
To install as vuejs component.

<code-group>
<code-block title="YARN">

```bash

yarn add @action-agenda/pie-chart

```
</code-block>

<code-block title="NPM">

```bash

npm install @action-agenda/pie-chart

```
</code-block>
</code-group>


```js
<template>
  <PieChart :options="{ source: "aichi" }" ></PieChart>
</template>

<script>
import PieChart from 'src/index.js'

export default { name      : 'App',
                 components: { PieChart } 
               }
</script>

```
### Props

<!-- <<< @action-agenda/pie-chart/src/index.vue#snippet -->


#### Options

<!-- <<< @/packages/components/v2/pie-chart/src/default-options.js#options -->


#### forceEnv
Tell the component which api to use by passing: **dev** | **stg** | **prod**

  **dev** : https://api.cbddev.xyz/api/actions
  
  **stg** : https://api.stg.cbd.int/api/actions
  
  **prod** : https://api.cbd.int/api/actions

## I18n

<!-- <<< @action-agenda/pie-chart/src/locales/index.mjs -->

## Example

<template>
<div id="example-data" class="position-relative p-5 example" >
    <div class="row inner">
      <div class="col-6" v-for="s in sources">
        <component :options="{source:s}" v-if="pieComp" :is="pieComp"></component>
      </div>
      <div class="col-12" >
        <component  v-if="searchComp" :is="searchComp"></component>
      </div>
    </div>
</div>
</template>

<script>
