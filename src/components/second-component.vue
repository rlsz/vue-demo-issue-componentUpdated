<template>
    <div style="margin-left:20px;">
        <div>{{context}}</div>
    </div>
</template>

<script type="text/javascript">

export default {
    props:{
        context:null
    },
    data: function() {
        return {
            
        }
    },
    updated(){
        console.log("log for second-component updated: "+this.context);
    }
}
</script>

