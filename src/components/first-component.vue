<template>
    <div>
        <div>{{context}}</div>
        <second-component :context="(context+' Second component without content.')"></second-component>
        <second-component :context="(context+' Second component with content.')" style="color:green;">test</second-component>
        <br/>
    </div>
</template>

<script type="text/javascript">
import secondComponent from './second-component.vue';

export default {
    components: {
        'second-component': secondComponent
    },
    props:{
        context:null
    },
    data: function() {
        return {
           
        }
    },
    updated(){
        console.log("log for first-component updated: "+this.context);
    }
}
</script>

