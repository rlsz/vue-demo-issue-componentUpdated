<template>
  <div id="app">
    <pre>
      describtion:
      Open developer tool of your brower, click 'add flag' button to refresh app component, then look at the logs on console.
      Whether child component will be updated is only depends on if it has content.
    </pre>
    <h1>app component flag:{{flag}}</h1>
    <button @click.stop="addFlag">add flag</button>
    <first-component context="First component without content."></first-component>
    <first-component context="First component with content." style="background-color:yellow;">test</first-component>
  </div>
</template>

<script>
import firstComponent from './components/first-component.vue';


export default {
  components: {
    firstComponent
  },
  data: function() {
        return {
           flag:0
        }
    },
    updated(){
        console.log("log for app updated");
    },
    methods:{
      addFlag(){
        this.flag++;
        console.log("app add flag has triggered");
      }
    }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}


</style>

